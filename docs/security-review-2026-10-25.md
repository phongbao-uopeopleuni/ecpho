# Rà soát bảo mật EC Phở — 25/10/2026

**Ngày:** 2026-10-25

**Phạm vi:** mã nguồn, lockfile, header website công khai và thiết lập bảo vệ repository.

**Trạng thái:** Baseline trước sửa. Thư viện và CSP đã được xử lý trong [lượt khắc phục tiếp theo](./security-fix-2026-10-25.md); các nhận xét bên dưới phản ánh thời điểm audit.

[Chỉ mục tài liệu](./README.md) · [Snapshot kết quả](./evidence/2026-10-25/security-review/summary.json).

## Đánh giá tổng thể

Website có bề mặt tấn công nhỏ hơn một hệ thống đặt hàng có tài khoản và thanh toán nội bộ: source chính hiện là React SPA với dữ liệu tĩnh, liên kết đặt hàng sang DoorDash, không thấy API ghi dữ liệu, cơ sở dữ liệu hoặc xử lý thẻ thanh toán trong ứng dụng. Đây không phải kết luận website không có lỗ hổng.

Header thực tế của `/blog` và `/contact` xác nhận Vercel đang phục vụ trang, có CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, Referrer-Policy và Permissions-Policy. HSTS thực tế là `max-age=63072000`. HTTP `/blog` chuyển sang HTTPS với mã 308. [Header Blog](./evidence/2026-10-25/security-review/headers-blog.txt) · [Header Contact](./evidence/2026-10-25/security-review/headers-contact.txt) · [Chuyển hướng HTTP](./evidence/2026-10-25/security-review/headers-http-redirect.txt).

Quét nhanh source không thấy `dangerouslySetInnerHTML`, `innerHTML`, `eval`, localStorage chứa token, hoặc mã gọi Gemini đang hoạt động. Blog và các đường dẫn menu dùng dữ liệu tĩnh; slug bài viết được tìm trong danh sách. Những quan sát này giảm một số đường tấn công thường gặp, nhưng không thay thế kiểm thử xâm nhập hay quét secret toàn bộ lịch sử Git.

## 1. Ưu tiên cao: cập nhật thư viện có advisory

`npm audit --package-lock-only` trả về **13 gói bị cảnh báo**: 1 critical, 7 high, 3 moderate, 2 low. Đây là mức độ của các gói/advisory, không phải 13 đường khai thác đã được chứng minh trên domain. Một gói có thể mang nhiều advisory; một số cảnh báo truyền qua dependency.

| Nhóm npm | Gói |
| --- | --- |
| Critical | proxy-addr |
| High | body-parser, browserslist, nanoid, postcss, react-router, source-map-js, vite |
| Moderate | baseline-browser-mapping, qs, react-router-dom |
| Low | @babel/core, esbuild |

Các phiên bản quan trọng đã đối chiếu giữa lockfile local và HEAD: proxy-addr 2.0.7, react-router / react-router-dom 7.15.1, Vite 6.4.2, Express 5.2.1, body-parser 2.2.2, PostCSS 8.5.14, esbuild 0.28.0. Các phiên bản này trùng nhau; thay đổi lockfile đang dở không giải thích mất các cảnh báo trên.

### Phân biệt điều kiện khai thác

- **proxy-addr critical:** [advisory chính thức](https://github.com/advisories/GHSA-jqcg-44mw-7w3h) liên quan việc tin sai IP proxy khi dùng một số trust subnet IPv6. Source `server.ts` không cấu hình `trust proxy`; domain đang phục vụ bản SPA tĩnh trên Vercel. Chưa chứng minh đường khai thác này trên production. Gói vẫn cần được vá nếu tiếp tục giữ dependency Express hoặc dùng Node server sau này.
- **React Router:** có nhiều advisory, gồm chuyển hướng nếu đường dẫn không tin cậy đi vào Link/useNavigate; một số advisory khác chỉ liên quan SSR/RSC. Ứng dụng hiện dùng BrowserRouter ở client và phần lớn link tĩnh. Cần cập nhật và kiểm thử routing, không mặc định mọi advisory SSR/RSC đều áp dụng. [Advisory chuyển hướng](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6).
- **Vite/Windows:** một số advisory áp dụng khi dev server được mở ra mạng. Server local hiện bind `0.0.0.0` khi chạy, nên có khả năng tiếp cận qua mạng tùy firewall. Không khởi động hay gửi payload khai thác trong lượt audit. Nên vá Vite và giới hạn dev host về loopback khi không cần chia sẻ LAN. [Advisory Windows](https://github.com/advisories/GHSA-fx2h-pf6j-xcff).
- **Vite middleware:** advisory khác yêu cầu cách gọi transform HTML và inline module cụ thể; `middlewareMode` riêng lẻ không đủ để kết luận bị khai thác. Source dùng `appType: 'spa'`, nên chưa xác nhận đầy đủ điều kiện. [Advisory middleware](https://github.com/advisories/GHSA-9jrq-w75r-8gcw).
- **Công cụ build:** Babel, Browserslist, PostCSS và source-map-js chủ yếu tác động môi trường build/đầu vào build. Vercel phục vụ bundle tĩnh không đồng nghĩa các công cụ này đang chạy trước mỗi request của khách.

Đề xuất tại thời điểm audit: cập nhật theo bản vá tương thích, kiểm tra lại audit, TypeScript, build và browser trên các route chính. Lượt khắc phục tiếp theo đã thực hiện việc này, audit còn 0 cảnh báo; xem báo cáo liên kết ở đầu trang.

## 2. Ưu tiên cao: bảo vệ đường đưa mã lên website

GitHub API xác nhận nhánh `main` có `protected: false`, required status checks ở trạng thái off và danh sách rule áp dụng rỗng. Người có quyền push có thể cập nhật main mà không bị GitHub buộc phải qua PR / kiểm tra. Quy trình deploy tự động làm sai sót hoặc thay đổi độc hại từ một tài khoản có quyền ghi nhanh chóng ảnh hưởng website.

Tự động tạo bản vá bảo mật Dependabot đang disabled. Secret scanning và push protection cho secret đang enabled; cần giữ hai lớp này.

Đề xuất: bật rule cho main với PR và kiểm tra bắt buộc, hạn chế bypass, rà lại người có quyền ghi và bật cập nhật bảo mật tự động. Chủ nhà hàng sau đó cho biết đã bật 2FA trên GitHub/Vercel; đây là thông tin do chủ tài khoản cung cấp, không phải kiểm chứng độc lập. Chưa xác minh passkey, recovery, phiên đăng nhập hoặc quyền team của GitHub/Vercel/DNS; không kết luận chúng đang tắt hay bị xâm nhập.

## 3. Ưu tiên trung bình: CSP còn cho phép inline JavaScript

Header production và `vercel.json` có `script-src 'self' 'unsafe-inline'`. Nếu một đường chèn HTML/script xuất hiện, CSP hiện tại cho phép inline script nên lớp chặn bổ sung yếu hơn. Chưa tìm ra sink XSS hoạt động trong source đã rà; đây là điểm hardening có bằng chứng cấu hình, không phải chứng minh một cuộc tấn công XSS.

Các directive `object-src`, `base-uri`, `form-action`, `frame-ancestors` chưa được khai báo riêng. X-Frame-Options DENY hiện đã bảo vệ việc nhúng trang, nên không ghi nhận “thiếu chống clickjacking” chỉ vì chưa có frame-ancestors.

Đề xuất thử policy chặt hơn bằng chế độ Report-Only, kiểm tra trang/ảnh/Google Maps/analytics, rồi áp dụng. Không loại bỏ đồng loạt `unsafe-inline` của style vì animation dùng style runtime. [Hướng dẫn CSP của OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html).

`Access-Control-Allow-Origin: *` trên HTML tĩnh công khai không tự chứng minh rò rỉ dữ liệu riêng; chưa thấy API cần cookie/credential trong source để nâng điểm này thành phát hiện CORS.

## 4. Hardening CI và tài liệu

- `.github/workflows/deploy.yml` cấp `pages: write` và `id-token: write` ở cấp workflow, bao gồm job build chạy npm ci. Nên giữ quyền đọc tối thiểu ở cấp chung và chỉ cấp quyền deploy cho job deploy.
- Các action dùng tag `@v4`, `@v3` thay vì commit SHA cố định. Ghim SHA giảm rủi ro khi tag hoặc chuỗi cung ứng action bị thay đổi. Đây là hardening, không phải bằng chứng action hiện tại độc hại. [Hướng dẫn GitHub](https://docs.github.com/en/code-security/tutorials/secure-your-organization/protect-against-threats).
- `SECURITY.md` cũ mô tả securityService, form review/booking/checkout và Gemini API như đã triển khai, trong khi không thấy các phần đó trong source hiện tại. Lượt khắc phục tiếp theo đã viết lại tài liệu theo kiến trúc hiện hành; không dùng bản tài liệu cũ làm bằng chứng hệ thống từng có các validator đó.
- `public/_headers` và `vercel.json` khác nhau về policy / HSTS. Header nhận được từ domain mới là bằng chứng có hiệu lực, không chỉ sự tồn tại của file `_headers`. Không thay cấu hình HSTS đang hoạt động dựa vào việc vercel.json không khai báo nó: Vercel đã gửi HSTS thực tế. [Header mặc định của Vercel](https://vercel.com/docs/headers/response-headers).

## Giới hạn, bằng chứng và tác dụng phụ

Rà soát trên source revision `00e8f0fc340061840c26b5f4d18dd60964448f2d` và working tree có các file MenuPreview đang dở. Không scan cổng, brute-force, fuzz, gửi payload khai thác, thay quyền repository, cài package, chạy build hay khởi động server. Không xác minh toàn bộ Git history, tài khoản quản trị Vercel/DNS, WAF, log tấn công, tài khoản DoorDash hoặc toàn bộ nội dung bundle trên CDN.

Tạo báo cáo và thư mục bằng chứng trong docs, cập nhật chỉ mục docs. Các file Markdown sửa có mtime mới. Bản audit đầy đủ, header và response GitHub được lưu thêm trong `node_modules/.cache/ecpho-security-audit-20261025`; npm audit tạo npm-cache/log ở trong thư mục này. Một lần lấy header HTTP bị reset kết nối, retry đã trả 308; không diễn giải lỗi mạng đó thành phát hiện bảo mật.

`package.json` và `package-lock.json` giữ nguyên hash và mtime so với trước khi chạy npm audit. Không thay đổi source ứng dụng hoặc cấu hình production, không commit/push/deploy báo cáo trong lượt đánh giá này.

Snapshot rút gọn lưu tại [summary.json](./evidence/2026-10-25/security-review/summary.json), gồm 13 gói, link advisory, thiết lập GitHub và kết quả bảo toàn package files. Đây là snapshot trước sửa, được giữ để đối chiếu với báo cáo khắc phục; không ghi đè bằng kết quả audit sau sửa.
