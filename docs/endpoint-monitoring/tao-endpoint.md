---
sidebar_class_name: hidden
sidebar_label: "Tao endpoint"
title: "2. Endpoint monitoring"
source: "https://fptcloud.com/documents/endpoint-monitoring/?doc=tao-endpoint"
parent: "https://fptcloud.com/documents/endpoint-monitoring"
lang: vi
converted: "2026-03-19"
---

# 2. Endpoint monitoring


Tạo endpoint


* * *

Để tạo endpoint, bạn thao tác theo hướng dẫn sau: 

**Bước 1** : Truy cập thành công vào dịch vụ 

**Bước 2** : Trên menu của dịch vụ, click **Add endpoint**. Hoặc tại màn danh sách endpoint, click button **Add endpoint**

![](/img/docs/c20316c14454-Screenshot_4.png)

**Bước 3** : Hiển thị màn tạo endpoint mới với các thông tin: 

  * Phần **Endpoint details** bao gồm: 

    * Trường Endpoint: Nhập endpoint cần monitor 

    * Trường Type: Mặc định được chọn là HTTP/HTTPS 

![](/img/docs/e48ea3b3253d-Screenshot_5.png)

  * Phần **Configuration details** bao gồm: 

    * Basic information 

    * Authentification information 

    * Advance information 

Chi tiết như sau: 

**A, Basic information** bao gồm các thông tin: 

  * IP protocol: hiện tại hỗ trợ IP4 (mặc định), IP6 chưa khả dụng 

  * Valid HTTP version: có các version: 2.0, 1.1, 1.0, 0.9 cho người dùng chọn 

  * Allow status: Mặc định status là 200, người dùng có thể chọn status khác tương ứng với endpoint trong danh sách 

![](/img/docs/acfcf6db2b9d-Screenshot_6.png)

**B, Authentification information** bao gồm 2 loại: 

  * Basic authen: nếu người dùng chọn basic authen, giao diện sẽ hiển thị thêm 2 trường để nhập username và password 

![](/img/docs/dd3a61223066-Screenshot_7.png)

  * Bearer token: nếu người dùng chọn bearer token, hệ thống sẽ hiển thị thêm trường để nhập token 

![](/img/docs/5060003140a6-Screenshot_8.png)

**C, Advance information** bao gồm các thông tin: 

  * Method: HTTP method của endpoint, mặc định là GET. Người dùng có thể thay đổi các method khác tương ứng với endpoint 

  * Header: người dùng có thể thêm header bằng cách click **Add param**

![](/img/docs/43d87381e3fe-Screenshot_9.png)

  * Phần Body 

  * None 

  * Raw: nếu người dùng chọn raw, sẽ hiển thị phần cho người dùng nhập data. Hiện tại dịch vụ hỗ trợ type JSON. 

![](/img/docs/bfe058cbad77-Screenshot_10.png)

  * x-www-form-urlencoded: nếu người dùng chọn giá trị này sẽ hiển thị cặp key-value để nhập bằng cách click **Add param**

![](/img/docs/b96d4b96de4d-Screenshot_11.png)

**Bước 4** : Sau khi cấu hình endpoint xong và điền đầy đủ hợp lệ các thông tin required, nút **Add endpoint** sẽ **enabled** , người dùng click nút **Add endpoint** để tạo.

[ Previous Truy cập vào dịch vụ ](./truy-cap-dich-vu) [ Next Xem danh sách endpoints ](./xem-danh-sach-endpoints)
