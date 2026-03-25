---
sidebar_class_name: hidden
sidebar_label: "Người dùng Enable HSTS để sử dụng tính năng:"
title: "Enable HSTS to HTTPS Listener"
source: "https://fptcloud.com/documents/load-balancer/?doc=enable-hsts-to-http-listener"
parent: "https://fptcloud.com/documents/load-balancer"
lang: vi
converted: "2026-03-19"
---

# Enable HSTS to HTTPS Listener


* * *

**HSTS (HTTP Strict Transport Security)** là một chính sách bảo mật giúp ngăn chặn các cuộc tấn công “man-in-the-middle” bằng cách yêu cầu trình duyệt luôn sử dụng kết nối an toàn (HTTPS) khi giao tiếp với máy chủ. 

Tính năng **“Enable HSTS to HTTPS Listener”** của **FPT Load Balancer** cho ép bạn tăng cường bảo mật cho ứng dụng của mình bằng cách yêu cầu trình duyệt chỉ giao tiếp qua HTTPS. 

Người dùng tham khảo cách tạo **Listener** [tại đây.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener)

> _Note: Để sử dụng tính năng, tại mục Protocol, người dùng chọn giao thức TERMINATED_HTTPS và gắn SSL Certificate từ danh sách khả dụng cho Listener. Nếu chưa có SSL Certificate, người dùng tham khảo cách tạo[tại đây.](https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer)_

Người dùng **Enable HSTS** để sử dụng tính năng: 

  * **HSTS max age:** Nhập số nguyên, giới hạn 256 ký tự, không nhập số âm. Mặc định là 31536000. 

Thời lượng (tính bằng giây) trong đó HSTS policy sẽ được trình duyệt thực hiện. Giúp xác định trong bao lâu trình duyệt sẽ nhớ rằng một trang web chỉ được truy cập thông qua HTTPS. 

  * **Include Subdomain:** Cấu hình HSTS có apply cho tất cả các subdomain không hay chỉ apply cho domain này. 

  * **Preload:** Domain có được đưa vào danh sách preload của web browser hay không. 

Nhấn chọn **Create Listener** để tiến hành tạo hoặc **Cancel** để huỷ bỏ.

[ Previous Redirect prefix ](./redirect-prefix) [ Next Cấu hình Allow IP/CIDR ](./allow-ip-cidr)
