---
sidebar_class_name: hidden
sidebar_label: "Cấu hình nâng cao cho Access List:"
title: "2. FPT Cloud WAF"
source: "https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-access-list"
parent: "https://fptcloud.com/documents/fpt-cloud-waf"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud WAF


Quản lý Access List


* * *

Access Lists cung cấp danh sách đen hoặc danh sách trắng (Whitelist/Blacklist) các địa chỉ IP máy trạm cụ thể, cùng với xác thực cho Proxy Hosts thông qua xác thực HTTP cơ bản.

Quản trị viên có thể cấu hình nhiều quy tắc (rules), gán user/password cho một danh sách truy cập và sau đó áp dụng cho Proxy Hosts.

Điều này hữu ích cho các dịch vụ web được chuyển tiếp, không có cơ chế xác thực được tích hợp sẵn hoặc quản trị muốn bảo vệ khỏi sự truy cập của các máy trạm không xác định.

Để cấu hình/thêm mới một Access List thực hiện theo các bước sau đây :

**Bước 1:** Chọn **Accest List** tại menu để mở màn hình quản lý Access List.

![Userguide FPT WAF 2022 34](/img/docs/a6882854dd34-Userguide-FPT-WAF-2022-34-1024x499.png)

**Bước 2:** Chọn **Create Access List** để mở màn hình thêm mới và nhập thông tin như sau:

  * **Name:** Nhập tên cho Access List
  * **Satisfy Any**
  * **Pass Auth to Host**

**Bước 3:** Nhấn **Create Access List** để thêm mới list đã nhập thông tin và mở màn hình xem chi tiết.

## Cấu hình nâng cao cho Access List:

**Bước 1:** Nhấn **Create Basic Auth** để cấu hình thêm mới tài khoản xác thực cơ bản HTTP Nginx.

  * **Username:** Nhập tên xác thực
  * **Password:** Nhập password xác thực.

Chọn **Create Basic Auth** hoặc **Create & Add Another** để thêm mới authentication khác nếu có.

**![Userguide FPT WAF 2022 35](/img/docs/4d36978c2bdc-Userguide-FPT-WAF-2022-35-1024x517.png)**

**Bước 2.** Chọn **Create Whitelist/Blacklist** để thêm mới địa chỉ IP hoặc subnet cho phép truy cập/từ chối truy cập

  * **Check box chọn allow hoặc deny tương ứng với các IP hoặc subnet tương ứng.**
    * **Allow:** với IP hoặc Subnet được phép truy cập.
    * **Deny:** với IP hoặc Subnet bị từ chối truy cập.
  * **IP / Subnet: Nhập địa chỉ IP hoặc subnet**

Nhấn Create Whitelist/Blacklist để thêm địa chỉ IP được cấu hình truy cập cho phép hoặc từ chối (allow/deny).

Lưu ý: Cấu hình các truy cập cho phép và từ chối (allow/deny) sẽ được áp dụng theo thứ tự mà chúng được xác định.

![Userguide FPT WAF 2022 36](/img/docs/0778cdff073d-Userguide-FPT-WAF-2022-36-1024x519.png)

**Bước 3.** Nhấn **Create Proxy** để thêm mới proxy host áp dụng cho Access List vừa tạo. Tham khảo cách thêm mới Proxy Host tại trang Quản lý Proxy Host

![Userguide FPT WAF 2022 37](/img/docs/993c3cc60d5b-Userguide-FPT-WAF-2022-37-1024x516.png)

**Các chức năng khác:**

**Edit:** Sửa thông tin Access List.

**View:** Xem chi tiết Access List.

**Delete:** Loại bỏ Access List.

[ Previous Quản lý 404 Host ](./quan-ly-404-host) [ Next Quản lý SSL Certificates ](./quan-ly-ssl-certificates)
