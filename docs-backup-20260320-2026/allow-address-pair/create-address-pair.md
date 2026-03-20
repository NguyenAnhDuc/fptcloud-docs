---
sidebar_class_name: hidden
sidebar_label: "2. Allow Address Pair"
title: "2. Allow Address Pair"
source: "https://fptcloud.com/documents/allow-address-pair/?doc=create-address-pair"
parent: "https://fptcloud.com/documents/allow-address-pair"
lang: vi
converted: "2026-03-19"
---

# 2. Allow Address Pair


Khởi tạo Address pair


* * *

Một Network interface card có thể cấu hình nhiều allow address pair và ngược lại, một address pair có thể cấu hình cho nhiều Network interface card của các Instance khác nhau

**Bước 1** : Ở Màn hình quản lý Allow address pair. Chọn **Create allow address pair**

![file](/img/docs/f6a186ff9e95-image-1708395038189.png)

**Bước 2** : Cấu hình allow IP address pair

  * Chọn Instance 
  * Chọn card mạng để cài đặt Allow address pair
  * Nhập IP (hoặc CIDR) để allow

![file](/img/docs/872f3b792941-image-1708395102833.png)

**Bước 3** : Cấu hình allow MAC address pair (optional). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của chỉ Network interface card đang được chọn

  * Bấm vào Advanced Setting
  * Nhập địa chỉ MAC

![file](/img/docs/551ea26d58bc-image-1708395142834.png)

**Bước 4** : Bấm Create allow address pair

![file](/img/docs/87a3a5e88f1c-image-1708395173721.png)

**Bước 5** : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của Instance

![file](/img/docs/2de1f3be07e3-image-1708395209748.png)

![file](/img/docs/74b14a4abb1d-image-1708395219352.png)

[ Next Khởi tạo Address pair trong quản lý Instance ](./create-address-pair-on-instance-management)
