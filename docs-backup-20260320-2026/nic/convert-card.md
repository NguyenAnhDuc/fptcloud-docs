---
sidebar_class_name: hidden
sidebar_label: "2. Network Interface Card (NIC)"
title: "2. Network Interface Card (NIC)"
source: "https://fptcloud.com/documents/nic/?doc=convert-card"
parent: "https://fptcloud.com/documents/nic"
lang: vi
converted: "2026-03-19"
---

# 2. Network Interface Card (NIC)


Chuyển card thường thành card Primary


* * *

**Bước 1** : Chọn card NIC cần chuyển sang Primary. Đối với card đã là Primary, chức năng này sẽ bị disable. Đối với card thông thường, Unify Portal hỗ trợ chuyển đổi dễ dàng và nhanh chóng.

![file](/img/docs/43633c94e27d-image-1691382928697.png)

![file](/img/docs/5dc5b74f623f-image-1691382936808.png)

**Bước 2:** Xác nhận chuyển card thường sang card Primary. 

**Lưu ý** : Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer, … Cần cân nhắc trước khi sử dụng. Sau khi thay đổi, để Instance hoạt động bình thường, các bạn cần thay đổi thông tin về network trong file config của hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](<https://fptcloud.com/documents/change-network-config-0/>).

![file](/img/docs/d9b6edea1b5d-image-1691382948749.png)

**Bước 3:** Chờ hệ thống xử lý.

![file](/img/docs/4c8ba6b5a13a-image-1691382962972.png)

**Bước 4:** Card bình thường sẽ được chuyển sang Primary, card Primary sẽ chuyển về card thường. Instance có thể kết nối mạng qua card này.

![file](/img/docs/64b7aa9e0d44-image-1691382975861.png)

[ Previous Thêm Network Interface Card mới  ](./add-card-nic--new) [ Next Edit IP Address ](./edit-ip-address)
