---
sidebar_class_name: hidden
sidebar_label: "2. Create VPC"
title: "2. Create VPC"
source: "https://fptcloud.com/documents/create_vpc/?doc=create-vpc"
parent: "https://fptcloud.com/documents/create_vpc"
lang: vi
converted: "2026-03-19"
---

# 2. Create VPC


Khởi tạo VPC


* * *

Để khởi tạo một VPC mới, người dùng cần đăng nhập vào hệ thống với phân quyền Tenant Owner

**Bước 1** : Ở menu chọn **VPCs** , chọn **Create VPC**

![file](/img/docs/668680932bcf-image-1714811267317.png)

**Bước 2** : Nhập các thông tin sau:

  * **VPC Name** : Người dùng nhập vào tên của VPC, tối thiểu 10 kí tự, tối đa 50 kí tự, bao gồm ký tự in hoa, số, dấu gạch ngang và dấu gạch dưới. Hệ thống sẽ tự in hoa các kí tự thường.

  * **VPC owner** : Chọn tài khoản được cấp phân quyền VPC Owner. Để giúp quá trình khởi tạo nhanh chóng, hệ thống sẽ chọn sẵn tài khoản đang khởi tạo làm VPC để cấp phân quyền VPC owner.

  * **Network setting (optional**): Thiết lập các thông tin subnet tương ứng. Trường này không bắt buộc và có thể tạo sau khi khởi tạo VPC

    * Name: Nhập tên gợi nhớ của Subnet.

    * Type: Hiện tại đang hỗ trợ 2 loại Routed và Isolated

    * Network Address (CIDR): Nhập CIDR hợp lệ.

    * Gateway IP: Nhập địa chỉ Gateway IP hợp lệ

    * Static IP Pool (optional): Nhập dải IP bạn muốn sử dụng, nếu không nhập hệ thống sẽ lấy toàn bộ IP từ CIDR

![file](/img/docs/41fbb01b85ea-image-1714811289727.png)

**Bước 3** : Nhấn **Create VPC** để tạo VPC. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. VPC sau khi được tạo thành công sẽ hiển thị ở trang **VPCs**

![file](/img/docs/c434eb334fa8-image-1714811309818.png)

[ Next Rename VPC ](./rename-vpc)
