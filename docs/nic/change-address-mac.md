---
sidebar_class_name: hidden
sidebar_label: "2. Network Interface Card (NIC)"
title: "2. Network Interface Card (NIC)"
source: "https://fptcloud.com/documents/nic/?doc=change-address-MAC"
parent: "https://fptcloud.com/documents/nic"
lang: vi
converted: "2026-03-19"
---

# 2. Network Interface Card (NIC)


Thay đổi địa chỉ MAC


* * *

Đây là tính năng cho phép hệ thống tự khởi tạo địa chỉ MAC mới cho card NIC, thay thế địa chỉ cũ.

**Bước 1:** Chọn Card NIC cần reset địa chỉ MAC. Chức năng này sử dụng được ở card Primary và card thường. Lưu ý, hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer, … Cần cân nhắc trước khi sử dụng. Sau khi thay đổi, để Instance hoạt động bình thường, các bạn cần thay đổi thông tin về network trong file config của hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](<https://fptcloud.com/documents/change-network-config-0/>).

![file](/img/docs/7a3595d7e895-image-1691395036893.png)

**Bước 2:** Xác nhận thay đổi địa chỉ MAC.

![file](/img/docs/354899e7c965-image-1691395221482.png)

**Bước 3:** Chờ hệ thống xử lý.

![file](/img/docs/ac20d597c2ee-image-1691395253477.png)

**Bước 4:** Hệ thống đã khởi tạo địa chỉ MAC mới cho card NIC.

![file](/img/docs/5b6daaffcfcd-image-1691395309290.png)

[ Previous Edit IP Address ](./edit-ip-address) [ Next Xóa Network Interface Card ](./delete-card-nic)
