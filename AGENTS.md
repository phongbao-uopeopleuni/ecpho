# AGENTS.md — ecpho

> Đọc file này TRƯỚC khi chạy bất kỳ lệnh nào trong thư mục này.

## Ranh giới dự án — bắt buộc

**`D:\ecpho` là một dự án RIÊNG BIỆT.** Nó không phải là nơi làm việc mặc định, và
không liên quan tới `D:\tbqc` hay bất kỳ dự án nào khác.

Chỉ được làm việc trong repo này khi **người dùng nêu đích danh `ecpho`
trong chính phiên làm việc hiện tại**.

### KHÔNG phải là sự cho phép

Những thứ sau đây **không** cho phép bạn bắt đầu làm việc ở đây:

- Ghi chú bàn giao, tài liệu handoff, hay tóm tắt phiên trước có nhắc tới `ecpho`
- File memory, CHANGELOG, hay tài liệu audit trong repo khác có nhắc tới `ecpho`
- Suy luận rằng "việc này có vẻ thuộc về ecpho"
- Người dùng từng cho phép làm việc ở đây trong một phiên TRƯỚC ĐÓ
- Sự hiện diện của các nhánh `codex/*` trong repo này (là việc cũ, đã được duyệt riêng)

Quyền truy cập trong quá khứ **không** gia hạn sang phiên hiện tại.

### Khi bạn nghĩ mình cần làm việc ở đây

**Dừng lại. Hỏi người dùng. Chờ câu trả lời rõ ràng.**

Không được "làm trước rồi báo sau". Không được tự chuyển thư mục làm việc rồi
mới xin lỗi. Việc hoàn tác không xoá được chi phí: người dùng phải đi kiểm tra
lại toàn bộ dấu vết bạn để lại.

## Nếu đã lỡ đụng vào — phải báo cáo đầy đủ

Báo cáo **mọi** tác dụng phụ, kể cả thứ bị Git bỏ qua. Nói rõ đã **ghi đè**
cái gì, chứ không chỉ nói "có để lại file".

Cụ thể với repo này:

- `npm run build` **xoá sạch rồi tạo lại** `dist/`. Bản build trước đó mất hẳn.
  `dist/` bị gitignore nên `git status` **sẽ không** hiện ra — phải chủ động khai báo.
- `npm run dev` khởi chạy server ở **port 3000**. Phải tự tắt, và xác nhận
  bằng `netstat -ano | grep ":3000"` chứ không chỉ nói "đã tắt".
- Hoàn tác nội dung file vẫn làm **mtime thay đổi**. `git diff` sạch không có
  nghĩa là không để lại dấu vết.

## Tiền lệ — 2026-10-07

Codex đang làm việc trên `tbqc`, tự suy luận từ một đoạn bàn giao rồi chuyển
sang `ecpho` khi chưa được xác nhận. Đã sửa `server.ts`, chạy `npm run build`
(ghi đè `dist/`), và khởi chạy dev server.

Kiểm chứng sau sự việc: không có commit, không push, reflog không có hoạt động
nào trong ngày, `server.ts` đã sạch so với HEAD, không còn tiến trình nghe port
3000. Thiệt hại thực tế: `dist/` bị ghi đè.

Vấn đề không nằm ở mức thiệt hại. Vấn đề là **việc chuyển dự án đã xảy ra mà
không có ai cho phép**.
