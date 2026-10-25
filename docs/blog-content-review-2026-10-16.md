# EC Phở — 10 bài món ăn mới, ngày 16/10/2026

**Ngày kiểm chứng:** 2026-10-16

**Phạm vi:** 10 bài món ăn mới, metadata SEO, ảnh và rà trùng lặp theo mẫu

**Trạng thái:** Lưu trữ kiểm chứng — chuyển bằng chứng vào docs ngày 2026-10-25

Đây là kết quả local ngày 16/10, không phải lần kiểm thử mới ngày 25/10. Mã blog có trong commit `65e179e` trên `main`; việc có mặt trong Git không xác nhận trạng thái deploy hoặc Google index. [Chỉ mục tài liệu](./README.md) · [Bằng chứng đã lưu](./evidence/2026-10-16/README.md).

Đã thêm 10 bài tiếng Anh cho khách hàng Greenville, NC; blog hiện có 15 bài. Mỗi bài mới khoảng 394–414 từ, có bốn mục nội dung, ảnh món ăn sẵn trong dự án, liên kết đến đúng nhóm menu và ba bài liên quan. Năm bài cũ được giữ nguyên nội dung.

## Bản đồ chủ đề và từ khóa

Các cụm từ dưới đây được chọn theo món thật và địa điểm nhà hàng; không phải số liệu về lượng tìm kiếm hoặc cam kết thứ hạng.

| Bài / đường dẫn sau `/blog/` | Chủ đề từ khóa chính | Món trong menu |
| --- | --- | --- |
| `vietnamese-egg-rolls-greenville-nc` | Vietnamese egg rolls Greenville NC | Vietnamese Egg Rolls |
| `grilled-beef-vermicelli-greenville-nc` | grilled beef vermicelli Greenville NC | Vermicelli with Grilled Beef |
| `grilled-pork-rice-plate-greenville-nc` | grilled pork rice plate Greenville NC | Grilled Pork Rice Plate |
| `vegetarian-pho-greenville-nc` | vegetarian pho Greenville NC | Vegetarian Phở |
| `bo-kho-beef-stew-greenville-nc` | bo kho Greenville NC | Beef Stew (Bò Kho) |
| `shrimp-fried-rice-greenville-nc` | shrimp fried rice Greenville NC | Shrimp Fried Rice |
| `grilled-chicken-egg-rolls-rice-greenville-nc` | grilled chicken egg rolls Greenville NC | Grilled Chicken & Egg Rolls with Steamed Rice |
| `sweet-sour-chicken-rice-greenville-nc` | sweet and sour chicken Greenville NC | Sweet and Sour Chicken Rice Plate |
| `green-papaya-salad-greenville-nc` | green papaya salad Greenville NC | Green Papaya Salad |
| `stir-fried-vegetables-tofu-rice-greenville-nc` | tofu rice plate Greenville NC | Stir Fried Vegetables & Tofu |

Mỗi bài có nhóm từ khóa bổ trợ riêng trong dữ liệu, tiêu đề SEO 41–54 ký tự sau khi thêm thương hiệu và mô tả 138–150 ký tự. Nội dung dùng tên món và Greenville một cách tự nhiên. Không thêm các khẳng định “best”, đánh giá khách hàng, nguồn gốc lịch sử hoặc công thức bí truyền không có bằng chứng.

## Nguồn dữ kiện và ảnh

Thông tin món lấy từ `src/data/menu.ts`, địa chỉ từ `src/data/business.ts`. Đã mở xem từng ảnh sử dụng, không suy ra tên món chỉ từ số file: một số ảnh mang mã của thực đơn cũ. Chẳng hạn `rice/051.jpg` là rau xào đậu hũ, không phải món bò sả tương ứng mã 51 trong dữ liệu hiện tại. Bài đậu hũ dùng ảnh theo món thực tế.

Không tải thêm ảnh bên ngoài hoặc sao chép bài viết từ website khác. Việc tái sử dụng ảnh đã có trong repo không phải là một cuộc xác minh lại quyền sở hữu của toàn bộ kho ảnh. Các bài không tự gán tác giả ảnh hoặc giấy phép mới.

## Rà trùng lặp / plagiarism

Nội dung mới được biên soạn riêng theo menu. Kiểm tra gồm hai phần:

- So sánh chuỗi 12 từ liên tiếp của từng bài mới với cả 14 bài còn lại, sau khi chuẩn hóa chữ hoa, dấu và dấu câu. Chỉ có hai chuỗi giao nhau giữa bài cơm heo và bài đậu hũ, đều nằm trong địa chỉ nhà hàng và câu chuyển tiếp. Không thấy đoạn nội dung món trùng 12 từ liên tiếp.
- Tìm trên web 20 câu đặt trong dấu ngoặc kép, hai mẫu mỗi bài. Không thấy câu mẫu hoặc chuỗi 12 từ của các mẫu trùng trong phần văn bản kết quả trả về. Công cụ tìm kiếm có trả về một số trang tương đồng chủ đề dù đã đặt ngoặc kép; không coi các kết quả đó là bản trùng.

Đây là rà trùng lặp theo mẫu trên web và so sánh nội bộ, không phải quét toàn văn qua Turnitin/Copyscape, không có “điểm originality” và không chứng nhận 100% không trùng. Nó không bao phủ nội dung chưa được lập chỉ mục, trang trả phí hay cơ sở dữ liệu riêng. Chỉ 10 bài mới nằm trong phạm vi rà trùng lặp này.

Các mẫu và danh sách kết quả đã được lưu trong Git: [web-originality-checks.json](./evidence/2026-10-16/blog/web-originality-checks.json), [originality-samples.json](./evidence/2026-10-16/blog/originality-samples.json), [content-checks.json](./evidence/2026-10-16/blog/content-checks.json). Bản cache local ban đầu vẫn được giữ; bản docs được đối chiếu SHA256 với bản gốc.

## SEO đã triển khai

- Tiêu đề và mô tả riêng cho từng bài; keyword trong nội dung và dữ liệu từng trang.
- Ảnh có alt mô tả đúng món; tiếp tục dùng các bản ảnh tối ưu 480/960 px hiện có.
- Canonical, Open Graph và Twitter metadata theo từng URL bài.
- `BlogPosting` và `BreadcrumbList` cho trang chi tiết; `Blog` cho trang danh sách.
- Liên kết từ bài đến nhóm món trên menu, trang liên hệ và bài liên quan. Liên kết menu dùng điều hướng tài liệu để tránh hai trang chồng nhau trong hiệu ứng chuyển trang làm sai trạng thái nhóm menu.
- Thêm đủ 10 URL vào sitemap và cập nhật ngày sửa trang Blog.
- Ngày bài hiển thị nhất quán theo ngày xuất bản trong dữ liệu, tránh lệch một ngày do parse ngày UTC.

Google không dùng thẻ meta keywords để tính thứ hạng; lợi ích dự kiến đến từ nội dung hữu ích, tiêu đề, mô tả và liên kết phù hợp. Tham khảo chính thức: [thẻ meta Google hỗ trợ](https://developers.google.com/search/docs/crawling-indexing/special-tags), [tiêu đề trang](https://developers.google.com/search/docs/appearance/title-link), [dữ liệu Article](https://developers.google.com/search/docs/appearance/structured-data/article). Lần kiểm chứng này thực hiện trên localhost; không xác nhận trạng thái deploy, index hoặc thứ hạng của website công khai.

## Kiểm chứng

- TypeScript `--noEmit` và kiểm tra whitespace Git đạt.
- Kiểm tra dữ liệu: 10 bài mới / tổng 15, slug và tiêu đề duy nhất, 10 món khác nhau, đủ ảnh 480/960, liên kết bài liên quan tồn tại, đủ URL sitemap.
- Browser ở 375 px: cả 10 bài có một H1, bốn H2 nội dung, ảnh tải thành công, metadata và canonical đúng, hai schema hợp lệ về JSON và không tràn ngang.
- Trang danh sách ở 1280 px hiển thị 15 thẻ bài; đã lưu ảnh.
- Bấm liên kết từ bài đậu hũ sang `/menu#vegetarian`: đúng nhóm Vegetarian, mục kế tiếp hiển thị. Mở lại bài phở cũ: nội dung hiển thị và không tràn ngang.
- Không có console error trong lượt kiểm tra browser. Đây là kiểm tra Chromium local; chưa chạy Google Rich Results Test hoặc xác minh Googlebot trên website công khai.

## File và tác dụng phụ

- Sửa nội dung và mtime: `src/data/blog.ts`, `src/pages/Blog.tsx`, `src/pages/BlogPostDetail.tsx`, `src/layouts/shared/SEOHead.tsx`, `public/sitemap.xml`.
- Tạo mới `src/data/dishStories.ts` và báo cáo này. Các thay đổi có sẵn trước lượt được giữ lại; tùy chọn tiêu đề Menu trước đó trong SEOHead vẫn được giữ.
- Tạo thư mục kiểm chứng bị gitignore `node_modules/.cache/ecpho-blog-audit-20261016`, chứa baseline, script kiểm tra, JSON và ảnh chụp. File kiểm chứng được cập nhật/ghi đè khi chạy lại; không ghi đè ảnh nguồn.
- Server local port 3000 có sẵn tiếp tục chạy theo yêu cầu xem local, log stdout hiện có nhận thêm HMR. Không khởi động server mới.
- Không chạy build hoặc cài dependency trong lượt này; không ghi đè `dist/`. Bằng chứng filesystem, trạng thái Git và cổng chạy cuối lượt được ghi ở `final-state.txt` trong thư mục kiểm chứng.
- Viewport kiểm thử được trả về mặc định; giữ tab Blog mở để người dùng xem.
- Cache/log do browser và runtime tự quản lý ngoài repo không được kiểm kê theo ranh giới thư mục của phiên.

Ảnh và số liệu chính hiện có bản lưu lâu dài: [kiểm tra browser](./evidence/2026-10-16/blog/browser-checks.json), [liên kết menu](./evidence/2026-10-16/blog/menu-link-check.json), [bài cũ](./evidence/2026-10-16/blog/legacy-check.json), [ảnh Blog desktop](./evidence/2026-10-16/blog/blog-desktop.jpg), [ảnh bài mobile](./evidence/2026-10-16/blog/blog-article-mobile.jpg). Các mô tả tiến trình/cache ở trên ghi nhận lượt 16/10, không mô tả tiến trình hiện tại.
