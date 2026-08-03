# Chỉ mục tài liệu — EC Phở

Điểm vào duy nhất cho toàn bộ tài liệu của dự án. Bắt đầu tra cứu từ đây.

**Cập nhật lần cuối:** 2026-08-03

---

## Tra cứu nhanh

| Bạn cần gì | Đọc tài liệu nào |
|---|---|
| Chạy dự án lần đầu, biết stack | [`README.md`](../README.md) (thư mục gốc) |
| Sửa nội dung: món ăn, giờ mở cửa, ảnh | [`README.md`](../README.md) → mục *Updating Information* |
| Biết file nào gọi file nào | [`code-knowledge-graph/OVERVIEW.md`](./code-knowledge-graph/OVERVIEW.md) + `viewer.html` |
| Xem đã thay đổi gì, khi nào | [`CHANGELOG.md`](./CHANGELOG.md) |
| Lỗi cuộn trang / điều hướng / anchor menu | [`navigation-audit.md`](./navigation-audit.md) |
| Vấn đề SEO, canonical, schema, sitemap | [`SEO_REFACTOR_PLAN.md`](./SEO_REFACTOR_PLAN.md) |
| URL cũ từ Google Sites, redirect, DNS | [`MIGRATION.md`](./MIGRATION.md) |
| CSP, XSS, rủi ro bảo mật | [`SECURITY.md`](../SECURITY.md) (thư mục gốc) |
| Quy ước đặt tên và thư mục ảnh | [`public/images/README.md`](../public/images/README.md) |

---

## Phân loại tài liệu

### 📘 Nhóm 1 — Tổng quan & kiến trúc

Đọc trước khi đụng vào mã nguồn.

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`README.md`](../README.md) | 2026-05-17 | Hiệu lực | Stack, lệnh dev/build, deploy, trỏ tới các file dữ liệu cần sửa |
| [`code-knowledge-graph/OVERVIEW.md`](./code-knowledge-graph/OVERVIEW.md) | 2026-05-29 | Hiệu lực | Bản đồ phụ thuộc mã nguồn: entry point, module, quan hệ gọi nhau |
| [`code-knowledge-graph/viewer.html`](./code-knowledge-graph/viewer.html) | 2026-06-07 | Hiệu lực | Trình xem đồ thị tương tác — mở trực tiếp bằng trình duyệt |

> Sinh lại đồ thị: `npm run graph:code`

### 📋 Nhóm 2 — Lịch sử thay đổi

Nguồn chân lý về việc *gì đã đổi, ngày nào, vì sao*.

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`CHANGELOG.md`](./CHANGELOG.md) | 2026-08-03 | Hiệu lực | Nhật ký theo phase, mới nhất ở trên. Format: `[Phase X] — YYYY-MM-DD — Mô tả` |

### 🔍 Nhóm 3 — Audit & kế hoạch kỹ thuật

Báo cáo điều tra kèm bằng chứng đo đạc và việc còn tồn.

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`navigation-audit.md`](./navigation-audit.md) | 2026-08-03 | Hiệu lực | Audit routing/cuộn trang/anchor. 5 lỗi đã sửa, 3 việc còn mở, checklist hồi quy |
| [`SEO_REFACTOR_PLAN.md`](./SEO_REFACTOR_PLAN.md) | 2026-05-29 | Đã hoàn thành | Kế hoạch SEO 5 phase — đã triển khai xong, giữ để tham chiếu |
| [`SECURITY.md`](../SECURITY.md) | 2026-05-16 | Hiệu lực | Audit bảo mật: DOM-XSS, CSP, các biện pháp đã áp dụng |
| [`ec-pho-seo-audit.docx`](./ec-pho-seo-audit.docx) | 2026-05-29 | Lưu trữ | Báo cáo SEO đầy đủ dạng Word, kèm bảng vấn đề và cơ hội từ khoá |
| [`ec-pho-refactor-plan.docx`](./ec-pho-refactor-plan.docx) | 2026-05-29 | Lưu trữ | Kế hoạch refactor theo phase kèm snippet và đánh giá rủi ro |

### 🚀 Nhóm 4 — Vận hành & triển khai

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`MIGRATION.md`](./MIGRATION.md) | 2026-05-17 | Hiệu lực | Chuyển Google Sites → Vercel: bản đồ URL, redirect, DNS, checklist |

> **Ghi chú:** file này trước đây nằm ở gốc với tên `README_MIGRATION.md`. Đã chuyển vào `docs/`, nội dung giữ nguyên 100%.

### 🎨 Nhóm 5 — Tài nguyên

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`public/images/README.md`](../public/images/README.md) | 2026-05-17 | Hiệu lực | Cấu trúc thư mục ảnh, quy ước đặt tên theo mã món |

---

## Dòng thời gian

Mốc thay đổi lớn, mới nhất trước.

| Ngày | Việc | Tài liệu |
|---|---|---|
| 2026-08-03 | Audit điều hướng & cuộn trang — sửa 5 lỗi | [`navigation-audit.md`](./navigation-audit.md) |
| 2026-06-07 | Cập nhật trình xem code knowledge graph | [`code-knowledge-graph/`](./code-knowledge-graph/) |
| 2026-05-29 | Sinh code knowledge graph | [`code-knowledge-graph/OVERVIEW.md`](./code-knowledge-graph/OVERVIEW.md) |
| 2026-05-29 | Hotfix CSP `transparenttextures.com` | [`CHANGELOG.md`](./CHANGELOG.md) |
| 2026-05-29 | SEO Phase 1–5 hoàn thành | [`SEO_REFACTOR_PLAN.md`](./SEO_REFACTOR_PLAN.md) |
| 2026-05-17 | Migration Google Sites → Vercel | [`MIGRATION.md`](./MIGRATION.md) |
| 2026-05-16 | Audit bảo mật ban đầu | [`SECURITY.md`](../SECURITY.md) |

---

## Việc còn tồn (tổng hợp)

Gom từ các tài liệu audit để không phải mở từng file.

| # | Việc | Mức | Nguồn |
|---|---|---|---|
| 1 | Trang 404 thiếu `noindex` → soft 404 | Trung bình | [`navigation-audit.md` §6.4](./navigation-audit.md) |
| 2 | `urlMigration.ts` là dead code, không được import | Thấp | [`navigation-audit.md` §6.1](./navigation-audit.md) |
| 3 | Bundle JS 532 kB, vượt ngưỡng 500 kB của Vite | Thấp | [`navigation-audit.md` §6.2](./navigation-audit.md) |

---

## Quy ước khi thêm tài liệu mới

Để chỉ mục này không bị trôi khỏi thực tế:

1. **Đặt file trong `docs/`**, tên `kebab-case.md`. Không để tài liệu mới ở thư mục gốc — gốc chỉ giữ `README.md` và `SECURITY.md`.
2. **Mở đầu file bằng khối metadata:**
   ```markdown
   **Ngày:** YYYY-MM-DD
   **Phạm vi:** ...
   **Trạng thái:** Hiệu lực | Đã hoàn thành | Lưu trữ
   ```
3. **Thêm một dòng vào đúng nhóm** ở mục *Phân loại tài liệu* phía trên.
4. **Thêm mốc vào *Dòng thời gian*.**
5. **Nếu có thay đổi mã nguồn**, ghi thêm một mục trong [`CHANGELOG.md`](./CHANGELOG.md) theo format `[Phase X] — YYYY-MM-DD — Mô tả`, mới nhất đặt trên cùng.
6. **Nếu tài liệu để lại việc chưa làm**, thêm vào bảng *Việc còn tồn*.

**Ý nghĩa trạng thái:**

| Trạng thái | Nghĩa là |
|---|---|
| Hiệu lực | Đang mô tả đúng hệ thống hiện tại, cần cập nhật khi mã đổi |
| Đã hoàn thành | Kế hoạch đã triển khai xong, giữ lại để tham chiếu, không cần cập nhật |
| Lưu trữ | Ảnh chụp tại một thời điểm, không bao giờ cập nhật |
