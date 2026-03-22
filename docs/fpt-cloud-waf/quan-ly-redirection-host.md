---
sidebar_class_name: hidden
sidebar_label: "Quan ly redirection host"
title: "2. FPT Cloud WAF"
source: "https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-redirection-host"
parent: "https://fptcloud.com/documents/fpt-cloud-waf"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud WAF


Quản lý Redirection Host


* * *

**Redirection Hosts** là tính năng chuyển hướng trang web hoặc thay đổi một URL đến một trang web, một URL khác và hiển thị nội dung của địa chỉ chuyển đến.

Để cấu hình/thêm mới một **Redirection Host** thực hiện các bước sau đây:

**Bước 1:** Chọn **Hosts** > R**edirection** từ menu để mở màn hình quản lý **Redirection Host**. Chọn **Create Redirection**.

![Userguide FPT WAF 2022 26](/img/docs/a7c1ce4fa65f-Userguide-FPT-WAF-2022-26-1024x515.png)

**Bước 2:** Nhập thông tin **Redirection Host** theo hướng dẫn sau:

  * **Domain Names:** điền tên domain/website được thêm vào. Domain name tại Redirection Host không được trùng với Domain name của các Proxy Host đã tạo.
  * **Forward Scheme:** chọn phương thức cho domain/website (auto/http/https).
  * **Forward Domain:** điền domain/website chuyển hướng.
  * **HTTP Code:** Lựa chọn các option điều hướng trang website.

Một số tính năng mở rộng: tùy thuộc vào nhu cầu sử dụng mà quản trị viên tùy chọn các tính năng mở rộng như:

  * **Preserve Path**.
  * **Block Common Exploits**.
  * **SSL Certificate** : Chọn SSL Certificate tương ứng cho domain/website.![Userguide FPT WAF 2022 27](/img/docs/98ae9d171f32-Userguide-FPT-WAF-2022-27-1024x515.png)

**Bước 3:** Chọn **Save** để lưu. Màn hình xem chi tiết **Redirection Host** hiển thị như sau:

![Userguide FPT WAF 2022 28](/img/docs/460fec8032c7-Userguide-FPT-WAF-2022-28-1024x517.png)

**Các chức năng khác:**

**Toggle** : disable/enable Redirection Host, tương ứng với trạng thái active/inactive.

**Edit** : Sửa thông tin Redirection Host.

**View** : Xem chi tiết Redirection Host

**Delete** : Loại bỏ Redirection Host.

[ Previous Xóa Proxy Host ](./xoa-proxy-host) [ Next Thêm mới Stream Host ](./them-moi-stream-host)
