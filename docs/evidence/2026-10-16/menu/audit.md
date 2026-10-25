EC Phở Menu — 16/10/2026, Asia/Saigon

Cập nhật thanh chọn section trên điện thoại nhỏ: dưới 640px, khi chọn/chạm mục hoặc section đang đọc thay đổi, thanh dịch ngang để mục đang chọn nằm cách mép trái 16px, giúp mục kế tiếp hiện ra. Bấm lại mục đang chọn sau khi tự kéo thanh cũng căn lại; tablet giữ cách cuộn vừa đủ để hiện mục đang chọn. Đầu/cuối thanh được giới hạn trong vùng cuộn thực tế.

Kiểm chứng lượt này: 21 lần chọn liên tiếp/quay lại ở 375/390/430px đều đạt (active và mục kế tiếp nhìn thấy, heading không bị thanh sticky che). Kiểm tra kéo ngang rồi chọn lại Phở: scrollLeft 156 → 0 → 156, scrollY giữ 2617.6; reduced motion chọn Bún cho kết quả active trái 16px, Rice Plates hiện đủ. tsc --noEmit và git diff --check đạt. Bằng chứng: mobile-category-next-checks.json, mobile-category-next-extra-checks.json, mobile-category-next.jpg. Ảnh cuối đã ghi đè ảnh chụp thử trước đó để hiển thị đúng thanh Phở/Bún.

Tác dụng phụ lượt này: chỉ sửa source src/pages/Menu.tsx (nội dung và mtime đổi); cập nhật audit.md; tạo ba file kiểm chứng nêu trên trong thư mục cache bị gitignore. Log stdout của dev server hiện có nhận thêm HMR. Không chạy build, cài package hoặc khởi động tiến trình mới. Giữ server port 3000 đang có theo yêu cầu xem local; tab Menu được giữ mở, viewport/media giả lập đã trả về mặc định.

Cập nhật câu giới thiệu: mở max-width từ 580px lên 1040px, dùng font Lora nghiêng nhẹ, 15–18px. Browser local ở width 756/768/1280/1440 xác nhận câu trên một dòng; mobile 375–430px tự xuống 2–3 dòng, không tràn ngang. Giữ nguyên nội dung câu. Chỉ sửa source Menu.css (mtime đổi), cập nhật báo cáo này, tạo menu-intro-checks.json và menu-intro-refined.jpg; log dev hiện có nhận HMR. Không chạy build hoặc khởi động thêm tiến trình trong lượt này.

Cập nhật tiêu đề theo yêu cầu mới: document.title, H1, og:title và twitter:title của Menu đều là chính xác "EC Phở Menu", không có hậu tố thương hiệu. Sửa Menu.tsx và SEOHead.tsx (mtime đổi); SEOHead thêm tùy chọn appendBrand mặc định true, riêng Menu dùng false. tsc --noEmit và diff --check đạt; browser xác nhận trực tiếp. Lưu mới menu-title-verified.json và menu-title-verified.jpg trong thư mục kiểm thử; log dev đang có nhận HMR. Không khởi động thêm server hoặc chạy build trong lượt đổi tiêu đề này. Các báo cáo bên dưới ghi lại các vòng chỉnh trước.

Cập nhật sau phản hồi người dùng: đã khôi phục dải ảnh tự chạy như trước (8 ảnh, vòng lặp 50 giây), giữ chiều cao hero đã polish. Dừng khi hover và khi reduced motion; reduced motion cho phép cuộn ảnh thủ công. Ảnh hero tải eager để không xuất hiện ô trống khi ảnh ngoài màn hình trượt vào; cả 16 ảnh của hai bản lặp đã decode thành công. Kiểm tra chuyển động ở sáu viewport, hover pause, reduced motion và tsc đều đạt. Lượt sửa này ghi lại Menu.tsx, Menu.css và báo cáo này; tạo/cập nhật marquee-restored-checks.json, marquee-restored-desktop.jpg; log server hiện có nhận thêm HMR. Server local port 3000 (PID 35200) được giữ chạy theo yêu cầu xem local, tab xem ảnh được giữ mở; không chạy build trong lượt này. Kết quả mới trong marquee-restored-checks.json và marquee-restored-desktop.jpg. Các ảnh và báo cáo build bên dưới ghi nhận vòng refinement trước cập nhật này.

Code local đã hoàn tất và sẵn sàng deploy. Chưa deploy hoặc tạo commit trong lượt này.

Các vấn đề đã tìm thấy trên browser trước khi sửa:

- Hero và marquee quá cao; card món có khoảng trống, shadow và góc trang trí nhiều, khiến menu dài và khó scan.
- Description nhạt, option nhiều khung, giá xuống hàng trên mobile.
- Active category có thể giữ ở Phở khi người dùng đã cuộn về Appetizers.
- Sticky offset không theo chiều cao header đang thu gọn; cụm nút nổi che giá món.

Thay đổi chính:

- Heading và browser title là EC Pho Menu.
- Hero gọn hơn, ảnh thật tĩnh; giữ font Lora / Be Vietnam Pro, nền cream và màu xanh thương hiệu.
- Bỏ card và hover giả clickable cho món; dùng divider nhẹ, typography và spacing. Giá có vùng riêng không wrap; mô tả rõ hơn; option nhẹ hơn tên món.
- Sidebar desktop nhẹ; category bar ngang mobile/tablet cao 56/60px, touch target 44px. Active có nền nhẹ và underline/stripe; focus rõ.
- Cuộn tới section 240ms, hủy animation cũ khi chọn tiếp hoặc can thiệp thủ công. Scrollspy dùng vị trí đọc và vị trí section được cache khi layout đổi. Active item tự hiện trong thanh ngang mà không kéo trang dọc.
- Sticky theo chiều cao header thực tế, bao gồm padding thay đổi. Tôn trọng reduced motion; bỏ animation từng món; không thêm dependency.
- Order online / Call us / Directions chuyển vào phần đầu Menu; cụm nổi chỉ ẩn ở /menu để không che giá.

Source thay đổi: D:/ecpho/src/pages/Menu.tsx, D:/ecpho/src/pages/Menu.css (mới), D:/ecpho/src/layouts/shared/FloatingActions.tsx. Header, footer, route, API, database và dữ liệu món không sửa. Các thay đổi đã có từ trước trong repo được giữ nguyên.

Kiểm thử browser:

| Viewport | Tràn ngang ngoài category bar | Va chạm tên / giá | Số món |
| --- | --- | --- | --- |
| 375 × 812 | 0 | 0 | 80 |
| 390 × 844 | 0 | 0 | 80 |
| 430 × 932 | 0 | 0 | 80 |
| 768 × 1024 | 0 | 0 | 80 |
| 1280 × 800 | 0 | 0 | 80 |
| 1440 × 900 | 0 | 0 | 80 |

- Kiểm tra thêm width 320, 600, 639, 640, 767, 900, 1023, 1024, 1200, 1279, 1280, 1920. Sau polish breakpoint phân số, tablet container tối đa 760px, desktop tối đa 1280px; không có scrollbar dọc phụ trong category bar.
- 66 lượt chọn category (11 × 6 viewport) ở reduced motion: active đúng, heading không bị che, active link hiện trong thanh ngang.
- Motion thường: Appetizers → Phở → Vegetarian → Drinks → Extras → Appetizers. Bấm nhanh qua nhiều category, Tab/Enter và focus visible, cuộn ngược thủ công, horizontal scroll bằng input browser. Khi cuộn ngang, scrollLeft 0 → 375.2 và scrollY giữ 410.4.
- Hover desktop kiểm tra qua trạng thái CSS trong DevTools: nền rgba(123,161,80,0.08), chữ rgb(82,107,53); đã gỡ pseudo-state sau kiểm thử.
- Hash Phở cũ và Back về Vegetarian hoạt động.
- Mở Home, Gallery, Contact: heading đúng, nút nổi vẫn có, class Menu không áp lên trang khác.
- Bản production mở ở mobile và desktop, kiểm tra tới footer: EC Pho Menu, 80 món, không có ảnh hỏng hiển thị hoặc console error.
- Đối chiếu đủ tên, mã, giá, mô tả, tên tiếng Việt, tags, variations: expectedItems=80, renderedItems=80, differences=[].

Kiểm tra code: tsc --noEmit, git diff --check, Vite build và esbuild server bundle đều exit 0. Build cuối tạo index-Dx09eTbd.css và index-CA8irBZF.js. Còn cảnh báo bundle ứng dụng 547.63 kB (gzip 170.13 kB); không phải lỗi build, chưa mở rộng sang chia bundle toàn ứng dụng. Không còn lỗi UI đáng kể trong phạm vi browser Chromium đã kiểm tra; chưa xác nhận trên Safari/Firefox hoặc thiết bị vật lý.

Tác dụng phụ:

- Menu.tsx và FloatingActions.tsx đã ghi lại, mtime đổi; Menu.css được tạo mới. Timestamp chi tiết trong filesystem-check.json.
- Tạo mới node_modules/.cache/ecpho-menu-audit-20261016 để chứa ảnh, JSON bằng chứng, dev/preview log và build kiểm thử. Ảnh và báo cáo được giữ lại.
- Build chạy hai lần vào thư mục build riêng: lần cuối xóa/tạo lại bản kiểm thử trước, sau đó thêm server bundle/map. Tổng cuối 305 file, 331,859,770 byte. Đã xóa riêng build kiểm thử sau khi xem production; Test-Path trả False. Lần dọn đầu bị chặn; lần dùng đường dẫn tuyệt đối cố định, không cưỡng chế, đã thành công.
- dist gốc có 305 file: so sánh hash, kích thước và mtime với đầu lượt không có file thay đổi. Không ghi đè dist gốc.
- Vite dùng config tạm trong node_modules/.vite-temp, hiện không còn file. 34 file node_modules/.vite có kích thước và mtime giống đầu lượt.
- Không cài package. Hash package.json, package-lock.json, App.tsx, BaseLayout.tsx, Header.tsx và src/data/menu.ts giống đầu lượt.
- Đã dừng dev/preview và tiến trình con: PID 16712, 27200, 34560, 34604, 19168, 38328. netstat cho 3000/5173/4173 không còn dòng nào ở lần kiểm tra cuối.
- Đã reset viewport/media emulation, đóng tab website và tab local thành công. Tab lỗi kết nối tạm lúc server chưa sẵn sàng bị API chặn bind lại; không đánh dấu giữ tab đó sau lượt.
- Kiểm kê filesystem giới hạn trong D:/ecpho. Log/cache nội bộ do npm hoặc browser tự quản lý ngoài repo không được kiểm kê theo ranh giới thư mục của phiên.

Bằng chứng chi tiết: browser-checks.json, content-check.json, production-check.json, filesystem-check.json, final-state.txt. desktop-1440.jpg, mobile-390.jpg, mobile-390-pho.jpg là ảnh kiểm chứng cuối. Các ảnh viewport khác thuộc vòng review trước và được giữ để đối chiếu.
