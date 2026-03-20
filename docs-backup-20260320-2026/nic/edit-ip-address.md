---
sidebar_class_name: hidden
sidebar_label: "2. Network Interface Card (NIC)"
title: "2. Network Interface Card (NIC)"
source: "https://fptcloud.com/documents/nic/?doc=edit-ip-address"
parent: "https://fptcloud.com/documents/nic"
lang: vi
converted: "2026-03-19"
---

# 2. Network Interface Card (NIC)


Edit IP Address


* * *

**Bước 1** : Chọn Card NIC cần thay đổi địa chỉ IP. 

**Lưu ý** : Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer,...Bạn cần cân nhắc trước khi sử dụng. Sau khi thay đổi, để Instance hoạt động bình thường, các bạn cần thay đổi thông tin về Network trong file config của hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](<https://fptcloud.com/documents/change-network-config-0/>).

![file](/img/docs/1741e5c622ef-image-1691383107122.png)

**Bước 2:** Cấu hình địa chỉ IP.

Nhằm tối ưu trải nghiệm cho khách hàng, Unify Portal hỗ trợ gợi ý 1 địa chỉ IP thuộc Subnet Mask của khách hàng.

![file](/img/docs/01e836f2af56-image-1691383118729.png)

Khách hàng hoàn toàn có thể thay đổi theo nhu cầu cầu sử dụng. Sau đó xác nhận việc thay đổi trên.

![file](/img/docs/5d815e592bb3-image-1691383130785.png)

**Bước 3:** Chờ hệ thống xử lý

![file](/img/docs/8006bcacdfb8-image-1691383142781.png)

**Bước 4:** Card chuyển sang trạng thái Active, và Instance có thể kết nối mạng qua card này. ![file](/img/docs/b076238fc8cc-image-1691383157084.png)

[ Previous Chuyển card thường thành card Primary ](./convert-card) [ Next Thay đổi địa chỉ MAC ](./change-address-mac)
