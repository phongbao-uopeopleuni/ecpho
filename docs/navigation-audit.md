# Audit điều hướng & cuộn trang

**Ngày:** 2026-08-03
**Phạm vi:** routing, hành vi cuộn trang, anchor/slug của menu
**Trạng thái:** Hiệu lực
**Nhánh:** `main`
**Liên quan:** [`CHANGELOG.md` → Phase 6](./CHANGELOG.md) · [Chỉ mục tài liệu](./README.md)

---

## 1. Tóm tắt

Xuất phát từ một báo lỗi: *"click Menu trên desktop thì bị nhảy xuống cuối trang"*. Truy vết cho thấy đó không phải một lỗi mà là **hai lỗi độc lập chồng lên nhau**, và quá trình audit tiếp theo phát hiện thêm 3 vấn đề nữa trong cùng khu vực.

| # | Vấn đề | Mức độ | Trạng thái |
|---|---|---|---|
| 1 | Không có reset scroll khi đổi route | Cao | ✅ Đã sửa |
| 2 | `scrollIntoView` trong thanh sticky kéo cả cửa sổ xuống ~20000px | Cao | ✅ Đã sửa |
| 3 | Anchor `/pho`, `/bun` trỏ tới ID không tồn tại | Trung bình | ✅ Đã sửa |
| 4 | Click danh mục thứ 2 trong vòng 750ms bị nuốt | Trung bình | ✅ Đã sửa |
| 5 | Cùng mẫu `scrollIntoView` rủi ro ở Gallery | Thấp | ✅ Đã sửa phòng ngừa |
| 6 | `urlMigration.ts` là dead code | Thấp | ⬜ Chưa xử lý |
| 7 | Bundle JS 532 kB (>500 kB warning) | Thấp | ⬜ Chưa xử lý |
| 8 | Nghi vấn tích tụ DOM khi đổi route | — | ✅ Đã bác bỏ — artifact môi trường |
| 9 | Trang 404 thiếu `noindex` (soft 404) | Trung bình | ⬜ Chưa xử lý |

---

## 2. Phương pháp

- Đọc mã nguồn toàn bộ layer routing: `App.tsx`, `BaseLayout.tsx`, `Header.tsx`, `Footer.tsx`, `Menu.tsx`, `Gallery.tsx`, `CompatibilityPage.tsx`.
- Instrument runtime: patch `window.scrollTo`, `Element.prototype.scrollTo`, `Element.prototype.scrollIntoView` để ghi lại **ai** gọi cuộn, **khi nào**, và vị trí trước/sau kèm stack trace.
- Quét tự động toàn bộ route bằng điều hướng client-side thật (click link), đo `scrollY` trước/sau mỗi lần chuyển trang.
- Kiểm tra ở cả desktop (1280px) và mobile (375px).
- Đối chiếu slug sinh ra với slug mà phần còn lại của ứng dụng cam kết.

---

## 3. Các lỗi đã sửa

### 3.1 Không có reset scroll khi đổi route — `ScrollToTop.tsx` (mới)

React Router **không** tự đưa trang về đầu khi đổi route; nó giữ nguyên `scrollY` của window. Đang ở giữa trang Home rồi bấm Menu → trang Menu render nhưng vị trí cuộn giữ nguyên.

Đo được: click Menu từ Home ở `scrollY = 3306` → URL đổi sang `/menu`, `scrollY` vẫn `3306`.

**Sửa:** thêm [`src/components/ScrollToTop.tsx`](../src/components/ScrollToTop.tsx), gắn trong `BrowserRouter`.

Ba chi tiết quan trọng:

- Bỏ qua `navigationType === 'POP'` → nút back/forward vẫn trả về đúng vị trí người dùng đang đọc.
- Bỏ qua khi có `hash` → `/menu#drinks` vẫn nhảy đúng section thay vì bị kéo lên đầu.
- Dùng `location.key` làm dependency, **không** dùng `pathname`. Vì `Menu.tsx` gọi thẳng `window.history.pushState` khi click danh mục, router không biết hash đã đổi; nếu phụ thuộc `pathname` thì trường hợp đang ở `/menu#drinks` rồi bấm lại "Menu" sẽ không reset.

### 3.2 `scrollIntoView` trong thanh sticky kéo cả cửa sổ — `Menu.tsx`

Đây mới là thủ phạm chính của báo lỗi ban đầu. Trace runtime:

```
window.scrollTo [0,0]   ← ScrollToTop.tsx    y: 3355 → 0       ✅
scrollIntoView          ← Menu.tsx:122       y: 0 → 63
scrollIntoView          ← Menu.tsx:122       y: 63 → 20194     ❌
```

`ScrollToTop` đưa về đầu trang đúng như thiết kế, rồi effect auto-scroll thanh danh mục ngang **kéo ngược cửa sổ xuống ~20000px** — đúng vị trí footer.

Nguyên nhân: `scrollIntoView` cuộn **mọi** ancestor cuộn được, kể cả window. Các nút danh mục nằm trong thanh `position: sticky`, nên `block: 'nearest'` tính theo vị trí *layout* của chúng nằm sâu trong document chứ không phải vị trí đang dính trên màn hình. Effect đó vốn chỉ cần cuộn thanh nav theo chiều **ngang**.

Lỗi chỉ rõ ở desktop vì thanh nav phải overflow ngang thì effect mới có việc để làm.

**Sửa:** cuộn trực tiếp container thay vì `scrollIntoView` — về mặt cấu trúc không thể chạm tới cuộn dọc của trang:

```tsx
const navRect = nav.getBoundingClientRect();
const itemRect = activeElement.getBoundingClientRect();
const offset = (itemRect.left - navRect.left) - (navRect.width - itemRect.width) / 2;
nav.scrollTo({ left: nav.scrollLeft + offset, behavior: 'smooth' });
```

### 3.3 Anchor sai cho `/pho` và `/bun` — `format.ts`, `Menu.tsx`, `App.tsx`

Logic sinh slug bị lặp lại **5 lần** trong `Menu.tsx` (`category.toLowerCase().replace(/[^a-z0-9]/g, '-')`) và được gõ tay riêng một bộ khác trong `App.tsx`. Hai bên không khớp:

| Danh mục | ID thật (cũ) | Anchor `App.tsx` hứa | Khớp? |
|---|---|---|---|
| Noodle Soups (Phở) | `noodle-soups--ph--` | `noodle-soups-pho` | ❌ |
| Vermicelli (Bún) | `vermicelli--b-n-` | `vermicelli-bun` | ❌ |
| Beer & Wine | `beer---wine` | — | — |

Hệ quả: `/pho` và `/bun` đổ về đầu trang menu thay vì đúng section. `urlMigration.ts` và thẻ canonical trong `CompatibilityPage` cũng dùng dạng slug sạch → xác nhận slug sạch mới là thiết kế chủ đích.

**Sửa:** tạo một nguồn chân lý duy nhất trong [`src/utils/format.ts`](../src/utils/format.ts):

```ts
export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')   // bỏ dấu tiếng Việt
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
```

Thay cả 5 chỗ trong `Menu.tsx`, và `App.tsx` nay **suy ra** anchor bằng `slugify('Noodle Soups (Phở)')` thay vì gõ tay.

**Tương thích ngược:** anchor cũ đã từng được chính ứng dụng đẩy lên URL, nên link cũ có thể đã được chia sẻ. `legacySlugify()` giữ lại dạng cũ và bộ so khớp hash chấp nhận cả hai. Link cũ vẫn vào đúng section, đồng thời URL **tự chuẩn hoá** về dạng sạch.

| Slug cũ | Slug mới |
|---|---|
| `noodle-soups--ph--` | `noodle-soups-pho` |
| `vermicelli--b-n-` | `vermicelli-bun` |
| `beer---wine` | `beer-wine` |

### 3.4 Click danh mục bị nuốt trong 750ms — `Menu.tsx`

Phát hiện tình cờ khi script audit chạy vòng lặp cách nhau 700ms và **cứ một click lại mất một click**.

`scrollToCategory` mở đầu bằng `if (isScrollingRef.current) return;` và cờ này chỉ được gỡ sau 750ms. Người dùng bấm hai danh mục liên tiếp → click thứ hai bị bỏ qua **im lặng**, không phản hồi gì.

**Sửa:** click mới **khởi động lại** cửa sổ khoá thay vì bị loại bỏ. Mục đích ban đầu của cờ (chặn scroll-spy ghi đè trong lúc cuộn mượt) vẫn được giữ nguyên, đồng thời thêm dọn dẹp timeout khi unmount.

### 3.5 Cùng mẫu rủi ro ở Gallery — `Gallery.tsx`

`handleTabClick` dùng đúng mẫu `scrollIntoView({ block: 'nearest', inline: 'center' })`. Thanh tab ở đây **không** sticky nên rủi ro thấp hơn nhiều, nhưng vẫn có thể nhích trang theo chiều dọc khi tab nằm sát mép viewport. Đã đổi sang cùng cách cuộn container. Sửa phòng ngừa, không phải lỗi đã quan sát được.

---

## 4. Bằng chứng kiểm chứng

**Quét toàn bộ route** — mỗi lần đều cuộn xuống đáy trước khi click, dùng điều hướng client-side thật, không instrument:

| Link | scrollY trước | Kết quả | Đường dẫn |
|---|---|---|---|
| Menu | 3355 | **0** | `/menu` |
| Gallery | 40101 | **0** | `/gallery` |
| Blog | 8368 | **0** | `/blog` |
| Contact | 9267 | **0** | `/contact` |
| Privacy Policy | 8359 | **0** | `/privacy` |
| Terms of Service | 5974 | **0** | `/terms` |
| Our Menu (footer) | 6994 | **0** | `/menu` |
| Stories (footer) | 140706 | **0** | `/blog` |
| Home | 16324 | **0** | `/` |
| Bài blog (từ `/blog`) | 2211 | **0** | `/blog/royal-soul-of-bun-bo-hue` |
| "Return to Warmth" (404) | 433 | **0** | `/` |

**Back/forward (`POP`):** từ `/blog/royal-soul-of-bun-bo-hue` bấm back → về `/blog` và **khôi phục đúng `scrollY = 2211`**, không bị ép về đầu trang. Xác nhận việc miễn trừ `POP` trong `ScrollToTop` hoạt động đúng thiết kế.

**Anchor:** cả 11 section ID nay đều sạch; cả 8 anchor mà `App.tsx` + `urlMigration.ts` cam kết đều phân giải được. Slug là duy nhất (11/11).

**Tương thích ngược:** vào `/menu#vermicelli--b-n-` (slug cũ) → tab active đúng "Vermicelli (Bún)", URL tự chuẩn hoá thành `#vermicelli-bun`. Tương tự với `#noodle-soups--ph--`.

**Click nhanh liên tiếp:** 5 danh mục cách nhau 120ms — trước đây mất một nửa, nay **5/5 đúng**.

**Gallery:** 9 tab ở desktop và 4 tab ở mobile 375px — cửa sổ dịch chuyển **0px** ở mọi lần, tab luôn hiện đầy đủ, strip cuộn ngang đúng (scrollLeft 0/357/800/110).

**Build:** `tsc --noEmit` sạch; `vite build` thành công (532 kB / 166 kB gzip).

---

## 5. Giới hạn của môi trường kiểm chứng

Phần này quan trọng để đánh giá độ tin cậy của các kết luận trên.

Browser pane dùng để kiểm chứng **không vẽ frame** (`visibilityState: "hidden"`, `requestAnimationFrame` = **0 fps**). Hệ quả:

- Mọi cuộn `behavior: 'smooth'` **không chạy**. Lần verify đầu tiên tôi đã báo "đã sửa xong" dựa trên phép đo này và **bỏ sót lỗi 3.2** — Chrome thật của người dùng có vẽ frame nên lỗi hiện ra. Các lần sau đã ép `behavior: 'instant'` khi instrument để buộc lỗi lộ diện.
- `window.scrollTo` **không** phụ thuộc frame, nên bảng đo ở mục 4 vẫn đáng tin.
- Animation exit của `motion` không bao giờ hoàn tất → xem mục 6.3.

Khuyến nghị: mọi kết luận về hành vi cuộn mượt nên được xác nhận lại trên trình duyệt thật.

---

## 6. Việc còn mở

### 6.1 `urlMigration.ts` là dead code

[`src/data/urlMigration.ts`](../src/data/urlMigration.ts) không được import ở đâu cả. Nó mô tả bản đồ redirect nhưng không có hiệu lực runtime — các redirect thật nằm rải rác trong `App.tsx`. Sau đợt sửa này nội dung của nó đã **khớp** với hành vi thật, nhưng vẫn là tài liệu dễ trôi khỏi thực tế.

Đề xuất: hoặc biến nó thành nguồn sinh route thật, hoặc chuyển thành tài liệu markdown, hoặc xoá.

### 6.2 Bundle 532 kB

Vượt ngưỡng cảnh báo 500 kB của Vite. Chưa xử lý vì nằm ngoài phạm vi audit này. Hướng xử lý: `React.lazy` cho các route ít truy cập (`/privacy`, `/terms`, `/blog/:slug`), hoặc `manualChunks` tách `motion` + `lucide-react`.

### 6.3 ✅ Nghi vấn tích tụ DOM — **đã bác bỏ**

Khi quét route trong browser pane, số thẻ `<h1>` tăng dần 2 → 3 → 4 → 5 → 6 → 7, và `main > div` đạt 7 phần tử = đúng số trang đã ghé. Trông như DOM trang cũ không được gỡ bỏ.

Giả thuyết đặt ra: đây là **artifact môi trường**, vì `AnimatePresence` chỉ unmount phần tử cũ sau khi animation exit chạy xong, mà rAF = 0 fps thì exit không bao giờ hoàn tất.

**Đã xác minh trên Chrome thật (2026-08-03):** sau khi bấm qua lại nhiều trang, `document.querySelectorAll('main>div').length` trả về **`1`**. Giả thuyết đúng — `AnimatePresence` dọn dẹp bình thường. **Không phải lỗi sản phẩm, không cần xử lý.**

Đây cũng là minh hoạ cho mục 5: chỉ số đo trong browser pane phải được đối chiếu lại trên trình duyệt thật trước khi kết luận.

### 6.4 Trang 404 thiếu `noindex` (soft 404)

Phát hiện khi bổ sung kiểm tra route 404. `NotFoundPatch` trong `App.tsx`:

- **không** có thẻ `<meta name="robots">` (kiểm tra runtime trả về `null`)
- dùng `<title>` mặc định của site thay vì tiêu đề riêng cho 404

Vì đây là SPA, mọi URL không tồn tại vẫn trả HTTP **200** kèm nội dung 404 — tức **soft 404**. Google có thể index các URL rác. `CompatibilityPage` đã dùng đúng `noindex, follow`, nên đây là điểm không nhất quán trong cùng codebase.

Đề xuất: thêm `<meta name="robots" content="noindex, follow">` và một `<title>` riêng cho `NotFoundPatch`. Chưa sửa vì nằm ngoài phạm vi audit điều hướng/cuộn trang.

### 6.5 Ghi chú kỹ thuật cần biết

- `Menu.tsx` cập nhật hash bằng `window.history.pushState` trực tiếp, **không** qua React Router → router không biết hash đã đổi. Đây là lý do `ScrollToTop` phải dùng `location.key`. Nếu sau này đổi sang `navigate()` thì có thể đơn giản hoá, nhưng cần kiểm tra lại effect xử lý hash.
- `CompatibilityPage` sinh URL dạng `/menu/#anchor` (có dấu `/` thừa). React Router vẫn khớp bình thường, nhưng không nhất quán với các link khác dùng `/menu`.
- Sitemap **không** liệt kê các URL category cũ (`/pho`, `/bun`, …) — đúng, vì chúng đã `noindex, follow`.

---

## 7. Checklist hồi quy thủ công

Chạy trên trình duyệt thật sau mỗi lần đụng vào routing hoặc `Menu.tsx`:

- [ ] Cuộn xuống đáy Home → bấm Menu → trang Menu hiện **từ đầu trang**
- [ ] Lặp lại với Gallery, Blog, Contact
- [ ] Trên `/menu`, bấm một danh mục → nhảy đúng section, tiêu đề nằm ngay dưới thanh sticky
- [ ] Bấm **nhanh** hai danh mục liên tiếp → click thứ hai vẫn ăn
- [ ] Bấm back → quay lại đúng vị trí đang đọc, **không** nhảy lên đầu
- [ ] Mở thẳng `/pho` → chuyển sang `/menu/#noodle-soups-pho` và dừng đúng section Phở
- [ ] Mở thẳng `/menu#noodle-soups--ph--` (slug cũ) → vẫn đúng section, URL tự chuẩn hoá
- [ ] Trên mobile, thanh danh mục cuộn ngang giữ mục đang chọn trong tầm nhìn, trang **không** nhích dọc
- [ ] Gallery: bấm các tab → trang **không** nhích dọc

---

## 8. File đã thay đổi

| File | Thay đổi |
|---|---|
| `src/components/ScrollToTop.tsx` | **Mới** — reset scroll khi đổi route |
| `src/App.tsx` | Gắn `ScrollToTop`; suy ra anchor bằng `slugify` |
| `src/utils/format.ts` | **Mới** `slugify()` + `legacySlugify()` |
| `src/pages/Menu.tsx` | Sửa cuộn thanh nav; dùng `slugify` (5 chỗ); sửa khoá 750ms; dọn timeout |
| `src/pages/Gallery.tsx` | Cuộn tab strip thay cho `scrollIntoView` |
| `src/index.css` | Tốc độ marquee ảnh 85s → 50s (yêu cầu riêng, không thuộc audit) |
| `.claude/launch.json` | **Mới** — cấu hình dev server cho preview |
