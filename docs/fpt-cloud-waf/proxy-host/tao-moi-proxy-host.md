---
sidebar_label: "Tạo mới Proxy Host"
title: "2. FPT Cloud WAF"
source: "https://fptcloud.com/documents/fpt-cloud-waf/?doc=tao-moi-proxy-host"
parent: "https://fptcloud.com/documents/fpt-cloud-waf"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud WAF


Tạo mới Proxy Host


* * *

**Bước 1:** Ở **WAF Dashboard** , chọn **Hosts** > **Proxy**. Chọn **Creat Proxy.**

![Userguide FPT WAF 2022 5](/img/docs/0fdd55189c14-Userguide-FPT-WAF-2022-5-1024x538.png)

**Bước 2:** Nhập các thông tin theo hướng dẫn:

  * Nhập thông tin **Source** :

  *     * **Hostname** : Nhập domain name
    * **Port** : Mặc định là 80, nếu có SSL Certificate thì có thể chọn port 443
  * Nhập thông tin **Destination** :

  *     * **Forward Scheme** : Chọn http/https
    * **Forward Hostname/IP** : Nhập **IP** **Public** hoặc **Domain** của Web Server. Nếu WAF và Web Server cùng thuộc 1 subnet, bạn có thể dùng **IP Private.**
    * **Forward Port:** Nhập port của Web Server đang sử dụng

**Lưu ý:** Forward Port là port đã được mở kết nối trên Web Server

Một số tính năng mở rộng tùy thuộc vào nhu cầu sử dụng mà quản trị viên chọn các tính năng mở rộng như:

  * **Cache Assets:**
  * **Block Common Exploits**
  * **Websockets Support**

Ngoài ra, cần chọn thêm các trường thông tin như:

  * **Rule Set:** Mặc định sẽ được áp dụng tập luật của FPT Cloud WAF, người dùng có thể thêm mới rule set tùy chỉnh của mình tại màn hình thêm mới rule file và chọn từ đây.
  * **Access List:** Cần thêm mới access list tại màn Access List để chọn và áp dụng được cho proxy host
  * **SSL Certificate:** Chọn SSL Certificate tương ứng cho domain/website, SSL Certificate cần được tạo trước khi chọn, nếu không có thể chọn None.![Userguide FPT WAF 2022 6](/img/docs/144ab6abe20d-Userguide-FPT-WAF-2022-6-1024x538.png)

**Bước 3:** Chọn **Create Proxy** để tiến hành tạo Proxy hoặc chọn **Create & Add Another** để tạo và hiển thị màn hình thêm mới **Proxy Host** khác.

[ Previous Quản lý Proxy Host ](./quan-ly-proxy-host) [ Next Xem thông tin chi tiết Proxy Host ](./xem-thong-tin-chi-tiet-proxy-host)
