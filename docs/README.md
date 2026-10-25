# Chỉ mục tài liệu — EC Phở

Điểm vào duy nhất cho toàn bộ tài liệu của dự án. Bắt đầu tra cứu từ đây.

**Cập nhật lần cuối:** 2026-10-25

Rà soát gần nhất: [báo cáo độ đầy đủ của tài liệu](./documentation-review-2026-10-25.md). Bằng chứng kiểm thử ngày 16/10 đã được lưu trong Git tại [`evidence/2026-10-16/`](./evidence/2026-10-16/README.md); không còn phụ thuộc vào cache local để đọc các kết quả chính.

---

## Tra cứu nhanh

| Bạn cần gì | Đọc tài liệu nào |
|---|---|
| Chạy dự án lần đầu, biết stack | [`README.md`](../README.md) (thư mục gốc) |
| Sửa nội dung: món ăn, giờ mở cửa, ảnh | [`README.md`](../README.md) → mục *Updating Information* |
| Biết file nào gọi file nào | [`code-knowledge-graph/OVERVIEW.md`](./code-knowledge-graph/OVERVIEW.md) + `viewer.html` |
| Xem đã thay đổi gì, khi nào | [`CHANGELOG.md`](./CHANGELOG.md) |
| Cập nhật thư viện, CSP và kiểm chứng chặn script | [`security-fix-2026-10-25.md`](./security-fix-2026-10-25.md) |
| Baseline bảo mật, các khuyến nghị về quyền deploy còn mở | [`security-review-2026-10-25.md`](./security-review-2026-10-25.md) |
| 5 bài mới về Taro, chè, bún bò sả, cơm sườn trứng, General Tso | [`blog-additions-review-2026-10-25.md`](./blog-additions-review-2026-10-25.md) |
| Menu hiện tại: bố cục, ảnh chạy, tiêu đề, thanh mục mobile | [`menu-review-2026-10-16.md`](./menu-review-2026-10-16.md) |
| 10 bài mới: món ăn, keyword, SEO và phạm vi rà plagiarism | [`blog-content-review-2026-10-16.md`](./blog-content-review-2026-10-16.md) |
| Ảnh và số liệu kiểm chứng Menu / Blog | [`evidence/2026-10-16/README.md`](./evidence/2026-10-16/README.md) |
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
| [`code-knowledge-graph/OVERVIEW.md`](./code-knowledge-graph/OVERVIEW.md) | 2026-10-16 | Snapshot working tree | Bản đồ phụ thuộc; có cả MenuPreview chưa commit, không phải snapshot chỉ của HEAD |
| [`code-knowledge-graph/viewer.html`](./code-knowledge-graph/viewer.html) | 2026-10-16 | Hiệu lực | Trình xem đồ thị tương tác — mở trực tiếp bằng trình duyệt |
| [JSON](./code-knowledge-graph/ecpho.code-knowledge-graph.json) / [dữ liệu viewer](./code-knowledge-graph/ecpho.code-knowledge-graph.data.js) | 2026-10-16 | Snapshot working tree | Hai dạng dữ liệu của cùng một lần sinh đồ thị |

> Sinh lại đồ thị: `npm run graph:code`

### 📋 Nhóm 2 — Lịch sử thay đổi

Nguồn chân lý về việc *gì đã đổi, ngày nào, vì sao*.

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`CHANGELOG.md`](./CHANGELOG.md) | 2026-10-25 | Hiệu lực | Nhật ký theo phase, mới nhất ở trên. Format: `[Phase X] — YYYY-MM-DD — Mô tả` |

### 🔍 Nhóm 3 — Audit & kế hoạch kỹ thuật

Báo cáo điều tra kèm bằng chứng đo đạc và việc còn tồn.

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`security-fix-2026-10-25.md`](./security-fix-2026-10-25.md) | 2026-10-25 | Đã kiểm chứng production | Audit 13 → 0, chặn script / onclick, header và SEO trên domain thật; sửa metadata lock cho npm 10 |
| [`security-review-2026-10-25.md`](./security-review-2026-10-25.md) | 2026-10-25 | Baseline trước sửa | Đối chiếu source, advisory, header production và rule GitHub; tham chiếu báo cáo khắc phục cho trạng thái sau sửa |
| [`menu-review-2026-10-16.md`](./menu-review-2026-10-16.md) | 2026-10-16 | Lưu trữ kiểm chứng | Trạng thái Menu sau các chỉnh sửa mới nhất và liên kết tới số liệu / ảnh |
| [`blog-content-review-2026-10-16.md`](./blog-content-review-2026-10-16.md) | 2026-10-16 | Lưu trữ kiểm chứng | 10 món, keyword, SEO, phương pháp và giới hạn rà trùng lặp |
| [`blog-additions-review-2026-10-25.md`](./blog-additions-review-2026-10-25.md) | 2026-10-25 | Kiểm chứng local | Năm bài bổ sung, tổng 20 bài, ảnh, keyword, liên kết món và rà trùng lặp |
| [`documentation-review-2026-10-25.md`](./documentation-review-2026-10-25.md) | 2026-10-25 | Đã hoàn thành | Kiểm kê tài liệu, phần thiếu đã bổ sung, giới hạn của lần rà soát |
| [`evidence/2026-10-16/README.md`](./evidence/2026-10-16/README.md) | 2026-10-25 | Lưu trữ | 20 file bằng chứng gốc và manifest SHA256, kiểm chứng thực hiện ngày 16/10 |
| [`navigation-audit.md`](./navigation-audit.md) | 2026-08-03 | Lưu trữ | Audit cũ: 5 lỗi đã sửa, 3 việc còn mở; mô tả Menu mới nằm ở báo cáo 16/10 |
| [`SEO_REFACTOR_PLAN.md`](./SEO_REFACTOR_PLAN.md) | 2026-05-29 | Đã hoàn thành | Kế hoạch SEO 5 phase — đã triển khai xong, giữ để tham chiếu |
| [`SECURITY.md`](../SECURITY.md) | 2026-10-25 | Hiệu lực | Kiến trúc SPA, CSP, bảo trì thư viện, giới hạn và các bằng chứng theo ngày |
| [`ec-pho-seo-audit.docx`](./ec-pho-seo-audit.docx) | 2026-05-29 | Lưu trữ | Báo cáo SEO đầy đủ dạng Word, kèm bảng vấn đề và cơ hội từ khoá |
| [`ec-pho-refactor-plan.docx`](./ec-pho-refactor-plan.docx) | 2026-05-29 | Lưu trữ | Kế hoạch refactor theo phase kèm snippet và đánh giá rủi ro |

### 🚀 Nhóm 4 — Vận hành & triển khai

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`MIGRATION.md`](./MIGRATION.md) | 2026-05-17 | Lưu trữ | Hướng dẫn migration ban đầu; URL và quy trình hosting phải đối chiếu cấu hình hiện tại |

> **Ghi chú:** file này trước đây nằm ở gốc với tên `README_MIGRATION.md`. Đã chuyển vào `docs/`, nội dung giữ nguyên 100%.

### 🎨 Nhóm 5 — Tài nguyên

| Tài liệu | Ngày | Trạng thái | Nội dung |
|---|---|---|---|
| [`public/images/README.md`](../public/images/README.md) | 2026-05-17 | Tham khảo | Cấu trúc ảnh và quy ước cũ; cần mở ảnh đối chiếu vì số file có thể lệch mã món hiện tại |

---

## Dòng thời gian

Mốc thay đổi lớn, mới nhất trước.

| Ngày | Việc | Tài liệu |
|---|---|---|
| 2026-10-25 | Vá thư viện và siết CSP; audit 13 → 0, thử chặn script và onclick | [`security-fix-2026-10-25.md`](./security-fix-2026-10-25.md) |
| 2026-10-25 | Rà soát bảo mật source, thư viện, header và thiết lập GitHub | [`security-review-2026-10-25.md`](./security-review-2026-10-25.md) |
| 2026-10-25 | Bổ sung năm bài món ăn, tổng 20 bài Blog | [`blog-additions-review-2026-10-25.md`](./blog-additions-review-2026-10-25.md) |
| 2026-10-25 | Bổ sung báo cáo Menu, lưu bằng chứng vào docs, đồng bộ chỉ mục và trạng thái tài liệu | [`documentation-review-2026-10-25.md`](./documentation-review-2026-10-25.md) |
| 2026-10-16 | 10 bài món ăn mới, keyword địa phương và metadata blog | [`blog-content-review-2026-10-16.md`](./blog-content-review-2026-10-16.md) |
| 2026-10-16 | Menu gọn hơn, khôi phục ảnh chạy, tiêu đề EC Phở Menu và thanh mục mobile | [`menu-review-2026-10-16.md`](./menu-review-2026-10-16.md) |
| 2026-10-16 | Sinh lại code graph, bổ sung tooling và tài liệu | [`code-knowledge-graph/OVERVIEW.md`](./code-knowledge-graph/OVERVIEW.md) |
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
| 3 | Cảnh báo bundle vượt 500 kB; 532 kB là số đo audit 03/08, chưa phải số đo hiện tại | Thấp | [`navigation-audit.md` §6.2](./navigation-audit.md) |
| 4 | Bảo vệ main, cập nhật bảo mật Dependabot, tối thiểu quyền CI và ghim action SHA | Hardening | [`security-review-2026-10-25.md`](./security-review-2026-10-25.md) |

Các việc trên là tồn đọng được ghi nhận trong audit cũ; lần rà soát tài liệu 25/10 không chạy lại kiểm thử chức năng hoặc đo bundle. Báo cáo 16/10 có phạm vi riêng, không chứng nhận Safari/Firefox, thiết bị thật, Googlebot hoặc thứ hạng SEO.

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
