# Bằng chứng local Menu và Blog — 16/10/2026

**Ngày kiểm chứng:** 2026-10-16

**Phạm vi:** 20 file kết quả và ảnh chính từ các lượt chỉnh Menu / Blog

**Trạng thái:** Lưu trữ — sao chép vào docs ngày 2026-10-25

[Chỉ mục tài liệu](../../README.md) · [Báo cáo Menu](../../menu-review-2026-10-16.md) · [Báo cáo Blog](../../blog-content-review-2026-10-16.md).

Các file được sao chép nguyên byte từ cache local. [manifest.json](./manifest.json) ghi đường dẫn gốc, đường dẫn lưu, số byte và SHA256 của từng file; cả 20 bản sao đã được đối chiếu với nguồn. Việc lưu lại không chạy lại các kiểm tra browser, plagiarism hay production.

Thuộc tính Git trong `docs/evidence/.gitattributes` giữ nguyên byte và kiểu xuống dòng của bản lưu 16/10, để hash vẫn có ý nghĩa sau khi checkout trên máy khác.

## Menu — 12 file

- [Nhật ký gốc các vòng chỉnh](./menu/audit.md): các đoạn đầu cập nhật sau cùng; các phần dưới ghi vòng thử nghiệm trước. Dùng báo cáo Menu đã tổng hợp để đọc trạng thái cuối.
- [Layout / điều hướng](./menu/browser-checks.json), [80 món](./menu/content-check.json), [production vòng đầu](./menu/production-check.json), [filesystem vòng đầu](./menu/filesystem-check.json).
- [Ảnh tự chạy](./menu/marquee-restored-checks.json), [tiêu đề](./menu/menu-title-verified.json), [câu giới thiệu](./menu/menu-intro-checks.json).
- [21 lần chọn section](./menu/mobile-category-next-checks.json), [kéo ngang / chọn lại / reduced motion](./menu/mobile-category-next-extra-checks.json).
- [Ảnh thanh mục mobile](./menu/mobile-category-next.jpg), [ảnh dải ảnh desktop](./menu/marquee-restored-desktop.jpg).

## Blog — 8 file

- [10 trang trên mobile](./blog/browser-checks.json), [nội dung / số từ / so sánh nội bộ](./blog/content-checks.json).
- [20 câu mẫu](./blog/originality-samples.json), [kết quả tìm kiếm theo mẫu](./blog/web-originality-checks.json).
- [Bấm liên kết tới menu](./blog/menu-link-check.json), [mở bài cũ](./blog/legacy-check.json).
- [Ảnh Blog desktop](./blog/blog-desktop.jpg), [ảnh bài viết mobile](./blog/blog-article-mobile.jpg).

## Phạm vi lưu trữ

Giữ các kết quả đủ để xem thay đổi, kiểm chứng các kết luận chính và biết giới hạn của phép kiểm tra. Không đưa bản build, server log, node_modules, baseline toàn cây dist hoặc ảnh thử trùng lặp vào Git. Những file cache gốc không bị xóa hay ghi đè khi sao chép.

Các trường PID, thời gian, đường dẫn file hoặc URL localhost trong dữ liệu là giá trị của lượt 16/10. Việc `legacyQuote` là false trong kiểm tra bài cũ chỉ ghi nhận DOM lúc đó, không tự kết luận một lỗi quote mới. Các kết quả plagiarism là đối chiếu nội bộ và mẫu web, không có chứng nhận toàn văn từ dịch vụ chuyên dụng.
