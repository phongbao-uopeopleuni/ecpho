# Cập nhật thư viện và CSP — 25/10/2026

**Ngày:** 2026-10-25

**Phạm vi:** thư viện npm, Content Security Policy và tài liệu bảo mật của `D:\ecpho`.

**Trạng thái:** Đã kiểm chứng local; kết quả triển khai được ghi riêng theo thời điểm.

[Chỉ mục](./README.md) · [Baseline trước sửa](./security-review-2026-10-25.md) · [Bằng chứng](./evidence/2026-10-25/security-fix/).

## Thay đổi

Áp dụng bản vá tương thích trong cùng major, cập nhật lockfile và nâng mức tối thiểu của Vite, React Router DOM, esbuild trong package.json. Không dùng `npm audit fix --force`. [Phiên bản trước/sau](./evidence/2026-10-25/security-fix/versions.json):

| Gói | Trước | Sau |
| --- | --- | --- |
| Vite | 6.4.2 | 6.4.5 |
| React Router / DOM | 7.15.1 | 7.18.4 |
| esbuild | 0.28.0 | 0.28.2 |
| proxy-addr | 2.0.7 | 2.0.8 |
| body-parser | 2.2.2 | 2.4.0 |
| PostCSS | 8.5.14 | 8.5.31 |

Đồng bộ CSP trong `vercel.json` và `public/_headers`: `script-src 'self'`, `script-src-attr 'none'`; bỏ `unsafe-inline` cho JavaScript và nguồn Google Tag Manager không dùng. Bổ sung `connect-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`. Giữ nguồn ảnh, Google Fonts, Google Maps cần thiết. `style-src 'unsafe-inline'` tiếp tục phục vụ style runtime/animation, không cấp phép JavaScript inline. Đây là CSP theo nguồn cho phép, không phải mô hình nonce/hash.

Viết lại SECURITY.md theo source hiện tại, loại bỏ mô tả nhầm về securityService, checkout, review/booking và Gemini. Không thay tài khoản, 2FA, quyền repository, CI hoặc Dependabot; các khuyến nghị đó vẫn còn mở. Chủ nhà hàng cho biết đã bật 2FA GitHub/Vercel; không xác minh độc lập thiết lập tài khoản.

## Kiểm chứng

- `npm audit --json --package-lock-only --ignore-scripts`: exit 0, **13 → 0 gói bị cảnh báo**. [Kết quả gốc](./evidence/2026-10-25/security-fix/audit-after.json). Phản ánh advisory tại thời điểm chạy, không chứng nhận website không còn mọi rủi ro.
- TypeScript `tsc --noEmit` đạt. Vite production build và bundle server bằng esbuild đạt, dùng Node 24.12.0 / npm 11.6.2. Cảnh báo bundle trên 500 kB còn tồn tại: JS 598.42 kB trước gzip; không thay chiến lược chia bundle trong phạm vi này.
- Build local nằm ở cache riêng; server kiểm tra chỉ nghe `127.0.0.1:4173`, áp dụng đúng header trong vercel.json. Trang chủ, Menu, Blog, bài Taro và Contact hiển thị H1 đúng, không có ảnh đã tải bị hỏng tại lúc đọc. Restaurant/FAQPage, Blog, BlogPosting/BreadcrumbList vẫn có trong DOM. [Kết quả](./evidence/2026-10-25/security-fix/browser-local.json).
- Fixture độc lập nhận cùng header: script inline không chạy, `onclick` không chạy, cả `script-src-elem` và `script-src-attr` phát sự kiện **enforce**. Nút được bấm thật (`inlineButtonClicked: true`); handler từ file JavaScript cùng nguồn vẫn chạy. [Ảnh](./evidence/2026-10-25/security-fix/csp-probe.jpg), [HTML](./evidence/2026-10-25/security-fix/security-csp-probe.html), [JS](./evidence/2026-10-25/security-fix/security-csp-probe.js), [header](./evidence/2026-10-25/security-fix/headers-local.txt). Fixture chỉ là bằng chứng, không được đưa vào public/ hoặc bản deploy.
- Menu ở 375 px: chọn Noodle Soups bằng handler React đổi đúng hash; mục được chọn nằm x≈16.3 px và mục Vermicelli kế tiếp hiện ở x≈162.7 px. [Số đo](./evidence/2026-10-25/security-fix/mobile-menu.json). Đã trả kích thước trình duyệt về mặc định.

Không ghi listener từ trước khi ứng dụng khởi động trên từng route; không dùng việc log trống để khẳng định toàn bộ trang không có CSP violation. Local helper không cung cấp endpoint Analytics của Vercel. Không kiểm chứng Safari/Firefox hoặc mọi trạng thái ảnh lazy-load. CSP không ngăn được mã độc nếu chính file JS cùng nguồn hoặc tài khoản deploy đã bị chiếm.

## Tác dụng phụ và bảo toàn công việc

- npm đã thêm 1, gỡ 8, thay 38 package trong `node_modules` và ghi lại metadata cài đặt/lockfile. Chạy cài đặt với `--ignore-scripts`; không cập nhật npm/Node toàn máy. Lockfile có chỉnh sửa metadata dở trước lượt này và được tái sinh cho các bản vá đã cho phép.
- Tạo cache `node_modules/.cache/ecpho-security-fix-20261025`: snapshot trước sửa, npm-cache/log tải gói, audit, helper, log server và script kiểm chứng. Cache audit baseline riêng `ecpho-security-audit-20261025` tiếp tục được giữ. Công cụ build có thể ghi cache phụ dưới node_modules; không mô tả git status sạch như không có tác dụng phụ.
- Production build thử nghiệm tạo **307 file, 331,916,582 byte**, gồm hai file fixture. Thư mục build thử đã được xóa sau kiểm tra. **Không chạy npm run build vào dist gốc, không ghi đè dist cũ**: đối chiếu đủ 305 file, SHA256, kích thước và mtime không đổi. [Bằng chứng filesystem](./evidence/2026-10-25/security-fix/filesystem.json).
- Đã dừng server thử PID 30188 và tiến trình console con PID 33728. Netstat tại thời điểm lưu bằng chứng không còn listener 3000/4173; có thể còn kết nối TIME_WAIT của hệ điều hành. Đã đóng tab thử và khôi phục viewport.
- Giữ nguyên cả hash và mtime của App.tsx, BaseLayout.tsx, Header.tsx và MenuPreview.tsx đang dở; không đưa các thay đổi đó vào commit bảo mật. Build local bao gồm working tree này; preview từ Git sẽ kiểm tra riêng nội dung commit.
- Các file package/config/docs được sửa có nội dung và mtime mới. Nhánh làm việc: `codex/security-dependencies-csp`; trạng thái commit/push/merge cần đối chiếu lịch sử Git và thông tin triển khai.
