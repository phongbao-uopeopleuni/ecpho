# Rà soát độ đầy đủ của docs

**Ngày:** 2026-10-25

**Phạm vi:** tài liệu và bằng chứng của các thay đổi Menu / Blog, chỉ mục, changelog, trạng thái tài liệu cũ

**Trạng thái:** Đã hoàn thành kiểm kê và bổ sung tài liệu

[Chỉ mục tài liệu](./README.md) · [Changelog](./CHANGELOG.md).

## Kết luận khi kiểm tra

Trước lần rà soát, docs chưa lưu đầy đủ công việc tháng 10. Báo cáo Blog đã được Git theo dõi, nhưng bằng chứng JSON/ảnh còn ở cache bị gitignore. Báo cáo Menu chỉ nằm trong cache. Chỉ mục và changelog dừng ở ngày 03/08 nên không dẫn tới các thay đổi mới. Một số tài liệu lịch sử vẫn được gắn trạng thái hiệu lực hoặc pending không còn phù hợp.

Kiểm tra Git xác nhận source Menu (`d049fc4`), 10 bài Blog (`65e179e`) và báo cáo Blog (`0a24bd4`) đã có trên `main` của remote. Không cần commit lại các thay đổi source đó để bổ sung docs.

## Phần đã bổ sung / chỉnh lại

| Mục | Kết quả |
| --- | --- |
| Báo cáo Menu cuối lượt 16/10 | Tạo [menu-review-2026-10-16.md](./menu-review-2026-10-16.md), gom bố cục, marquee, tiêu đề, intro, thanh mục mobile và giới hạn kiểm tra |
| Bằng chứng từng lượt | Lưu 12 file Menu và 8 file Blog tại [evidence/2026-10-16](./evidence/2026-10-16/README.md), kèm manifest hash |
| Blog / plagiarism / keyword | Báo cáo có metadata, đường dẫn bằng chứng trong docs và phân biệt kiểm tra local với trạng thái deploy |
| Chỉ mục | README liệt kê báo cáo mới, kho bằng chứng, dữ liệu graph và dòng thời gian tháng 10 |
| Changelog | Bổ sung các mốc Menu, Blog và lượt chuẩn hóa docs này |
| Audit điều hướng tháng 8 | Gắn nhãn snapshot lịch sử, dẫn tới báo cáo Menu mới |
| Kế hoạch SEO tháng 5 | Đồng bộ Phase 3–5 với mã / changelog; ghi rõ ví dụ cũ và tác động Google chưa đo |
| Hướng dẫn migration | Gắn nhãn lưu trữ, không dùng bảng URL / DNS cũ như xác nhận cấu hình hiện tại |
| Code graph | Ghi rõ snapshot working tree có MenuPreview chưa commit; không sinh lại graph chỉ để sửa tài liệu |
| Hai file Word | Xác nhận có file trong docs và được Git theo dõi; giữ như bản lưu trữ tháng 5, không biên tập lại nội dung Word |

## Kiểm chứng của lần rà soát docs

- Duyệt chỉ mục file docs và đối chiếu với Git, source liên quan và cache kiểm chứng còn trên máy.
- Đối chiếu SHA256 và số byte của 20 bản sao bằng chứng với cache nguồn.
- Giữ nguyên kiểu xuống dòng của bằng chứng qua thuộc tính Git và đối chiếu cả blob đã stage với manifest.
- Kiểm tra link tương đối trong Markdown, khả năng parse JSON và sự tồn tại của các ảnh được tham chiếu.
- Kết quả máy đọc của lần rà soát: [documentation-checks.json](./evidence/2026-10-25/documentation-checks.json).

Các kiểm tra browser, build và tìm kiếm plagiarism trong báo cáo 16/10 là kết quả lịch sử. Lượt này không chạy lại chúng, không đo thứ hạng SEO, không kiểm tra DNS hoặc website live. Do đó “đã lưu đủ” ở đây nghĩa là đủ báo cáo và bằng chứng chính của công việc Menu / Blog đã thực hiện, không phải mọi mục bảo trì của dự án đã hoàn tất.

## Tồn đọng vẫn cần theo dõi

- Các việc từ audit tháng 8 như 404/noindex, dữ liệu urlMigration không được dùng và cảnh báo bundle vẫn cần một lượt kiểm tra kỹ thuật riêng; không tự đánh dấu hoàn tất vì vừa cập nhật docs.
- Code graph là ảnh chụp working tree; cần sinh lại từ trạng thái mong muốn nếu dùng để mô tả chính xác một commit sau này.
- Hướng dẫn tên ảnh cũ trong `public/images/README.md` không đảm bảo số file khớp mã món hiện tại. Bài Blog đã đối chiếu ảnh trực tiếp; chưa chuẩn hóa lại toàn bộ kho ảnh.
- Kiểm tra plagiarism vẫn là mẫu web và so sánh nội bộ, không phải chứng nhận toàn văn.

## File và tác dụng phụ của lượt này

Chỉ cập nhật tài liệu trong docs; tạo báo cáo, bản sao bằng chứng và manifest. Các file Markdown sửa có mtime mới; bản sao bằng chứng giữ nguyên nội dung, không xóa bản cache nguồn. Git index / nhánh / commit / remote sẽ thay đổi khi thực hiện bước commit, push và merge đã được yêu cầu; kết quả Git cuối cùng được báo riêng sau thao tác đó.

Không sửa source ứng dụng, package-lock hoặc phần MenuPreview còn dở. Không chạy build, cài package, sinh lại code graph hay khởi động server trong lượt rà soát tài liệu.
