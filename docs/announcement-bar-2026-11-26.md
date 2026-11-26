# Thanh thông báo đầu trang

**Ngày:** 2026-11-26

**Phạm vi:** thanh thông báo dùng chung, hiệu ứng chú ý và hướng dẫn thay nội dung.

**Trạng thái:** Đã triển khai và kiểm chứng local.

## Nội dung và cách cập nhật

Thanh thông báo nằm trên logo và điều hướng, chạy từ phải sang trái. Nội dung ban đầu theo yêu cầu của chủ tiệm:

> Thanksgiving update: Closed November 26, 2026. Reopening November 27, 2026. Thank you for your support!

Sửa `announcement.message` trong [business.ts](../src/data/business.ts) để đổi thông báo. Đặt `announcement.enabled` thành `false` để ẩn thanh; chuỗi rỗng cũng ẩn thanh và phần khoảng trống tương ứng. Thông báo này bật/tắt thủ công; sau kỳ nghỉ cần cập nhật nội dung hoặc tắt.

## Trình bày và hoạt động

Nền xanh trầm, chữ sáng và nhãn Updates đồng bộ với website. Dòng chữ lặp trong 38 giây, vệt sáng lướt qua nền theo chu kỳ 10 giây và nhãn phát sáng nhẹ theo chu kỳ 3 giây. Nút Pause/Resume điều khiển cả ba hiệu ứng; trỏ chuột vào phần chữ cũng tạm dừng chữ để đọc.

Khi khách chọn giảm chuyển động, chữ hiển thị tĩnh, xuống dòng đầy đủ, hai hiệu ứng sáng ngừng và nút điều khiển được ẩn. Chiều cao thanh được đo bằng ResizeObserver để bù khoảng cách cho nội dung. Header vẫn bao gồm toàn bộ thanh, nên cơ chế đo header hiện có của Menu tiếp tục đặt đúng thanh danh mục sticky và vị trí tiêu đề section.

Nội dung dùng text React, không chèn HTML hoặc script, không thêm thư viện và giữ CSP hiện có. Bản chữ chạy lặp được ẩn khỏi cây trợ năng; có một bản nội dung đầy đủ cho trình đọc màn hình và nhãn điều khiển có tên rõ ràng.

## Kiểm chứng và bằng chứng

- TypeScript `tsc --noEmit` và hai lần build production đạt. JS cuối 604.61 kB, gzip 186.57 kB; cảnh báo bundle trên 500 kB còn tồn tại.
- Kiểm tra TypeScript với Header/BaseLayout/App đúng nội dung chuẩn bị commit cũng đạt; các hunk MenuPreview cũ được tách khỏi index. Build local có phần MenuPreview đang dở của working tree; số đo bundle trên là của bản local đó.
- Chrome ở viewport 1536 px: thanh cao 40 px, khoảng bù nội dung 40 px, không tràn ngang. Ghi nhận hiệu ứng chữ, shimmer và glow; nút đưa cả ba animation về `paused`, Resume đưa chữ về `running` và tọa độ chữ tiếp tục giảm về bên trái.
- Viewport 375 px: không tràn ngang. Thanh danh mục Menu ở đúng đáy header khi cuộn; tiêu đề Vermicelli cách đáy thanh danh mục khoảng 16 px, mục được chọn nằm ở x≈16 px.
- Giả lập `prefers-reduced-motion: reduce`: thanh cao khoảng 77.6 px, khoảng bù cập nhật tương ứng, nội dung xuống dòng, animation chữ và nhãn đều là `none`, vệt sáng/nút được ẩn.
- Trang Blog dùng chung một thanh thông báo, title và nội dung hiện đúng. Đã trả viewport và giả lập media về mặc định, đóng tab thử.

[Kết quả browser](./evidence/2026-11-26/announcement-bar/browser-checks.json) · [Ảnh máy tính](./evidence/2026-11-26/announcement-bar/desktop.jpg) · [Ảnh điện thoại](./evidence/2026-11-26/announcement-bar/mobile.jpg) · [Giảm chuyển động](./evidence/2026-11-26/announcement-bar/reduced-motion.jpg) · [Bảo toàn file](./evidence/2026-11-26/announcement-bar/preservation.json).

Một số thao tác browser bị ngắt kết nối với tab trong lúc điều hướng; đã đọc lại trạng thái trước khi tiếp tục. Mẫu tọa độ đầu tiên ngay sau Pause có thể còn ở frame compositor trước đó; bằng chứng Pause dùng trạng thái CSS của ba animation, không khẳng định các tọa độ khác frame phải trùng nhau. Chưa kiểm chứng Safari/Firefox, thiết bị thật hoặc production. Helper local áp dụng header từ vercel.json, không cung cấp endpoint Analytics của Vercel.

## Tác dụng phụ

- Thay nội dung và mtime của business.ts, Header.tsx, BaseLayout.tsx; tạo AnnouncementBar.tsx/CSS và tài liệu/bằng chứng. Các hunk MenuPreview có sẵn trong Header/BaseLayout được giữ riêng khi staging; App.tsx và MenuPreview.tsx giữ nguyên hash/mtime.
- Tạo cache `node_modules/.cache/ecpho-announcement-20261126` chứa snapshot trước sửa, patch working tree, helper, log build/server, ảnh và số đo. Không cài hay đổi package/lockfile.
- Build vào thư mục `build` trong cache riêng. Lần build thêm hiệu ứng đã xóa và tạo lại bản build thử đầu tiên tại đó. Bản thử cuối có 303 file, 331,920,409 byte và đã được xóa sau kiểm tra. `dist/` gốc có 305 file, giữ nguyên hash và mtime.
- Đã dừng server thử PID 25044 cùng tiến trình console con PID 17772. Snapshot bảo toàn lưu kết quả netstat không còn listener 3000/4174. Cache, log và ảnh kiểm chứng được giữ; không chạy dev server.
- Commit/push trên nhánh `codex/restaurant-announcement-bar` theo yêu cầu; thao tác Git cập nhật index, object và reflog. Push có thể kích hoạt preview tự động của Vercel. Báo cáo này ghi kết quả local; trạng thái production phụ thuộc merge/deploy tiếp theo.
