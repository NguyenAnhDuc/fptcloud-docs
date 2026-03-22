---
sidebar_label: "Chọn Instance"
title: "Allow address pair"
source: "https://fptcloud.com/documents/cloud-server/?doc=allow-address-pair"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Allow address pair


* * *

  * Theo mặc định, máy tính (hoặc máy ảo) sẽ cặp địa chỉ MAC và IP liên kết với nhau nhằm chống giả mạo thông tin. Điều này có nghĩa là với traffic đến 1 địa chỉ IP, traffic sẽ được gửi đến máy có địa chỉ MAC tương ứng. 

  * Tính năng Allow IP address pair cho phép thêm cặp địa chỉ IP (hoặc CIDR) và địa chỉ MAC vào 1 interface (card NIC) của instance. Từ đó người quản trị có thể tận dụng tính năng cho nhiều mục đích, đặc biệt là cấu hình HA (High Availability)

### Khởi tạo một address pair

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

### Khởi tạo Allow address pair trong Instance management

**Bước 1** : Vào Network Interface trong Instance Management

![file](/img/docs/5f97bc702819-image-1708395287542.png)

**Bước 2** : Chọn nút ba chấm (action):

![file](/img/docs/7e4aea2c9291-image-1708395308051.png)

**Bước 3** : Chọn Create allow address pair

![file](/img/docs/4dc00d57ceff-image-1708395330849.png)

**Bước 4** : Cấu hình allow IP address pair

  * Hệ thống mặc định chọn Network interface card hiện tại
  * Nhập IP (hoặc CIDR) để allow

![file](/img/docs/06c64d2ee7e6-image-1708395364577.png)

**Bước 5** : Cấu hình allow MAC address pair (optional). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của chỉ Network interface card đang được chọn

  * Bấm vào Advanced Setting
  * Nhập địa chỉ MAC

![file](/img/docs/a559d684c0c4-image-1708395403972.png)

**Bước 6** : Bấm Create allow address pair

![file](/img/docs/4bafad85771e-image-1708395440253.png)

**Bước 7** : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của Instance

![file](/img/docs/047d287b30b2-image-1708395474257.png)

![file](/img/docs/7e386ff315e9-image-1708395486779.png)

### Xóa Allow address Pair

**Cách 1: Xóa tại màn hình quản lý Allow address pair**

**Bước 1** : Chọn icon delete

![file](/img/docs/658478863d99-image-1708395674995.png)

**Bước 2** : Xác nhận delete

![file](/img/docs/9894ec4131b8-image-1708395828130.png)

**Cách 2: Xóa trong Instance Management**

**Bước 1** : Vào Network Interface trong Instance Management.

![file](/img/docs/1d20cf7a7a4b-image-1708395867460.png)

**Bước 2** : Bấm vào icon X

![file](/img/docs/0efccabb9536-image-1708395893416.png)

**Bước 3** : Xác nhận Delete

![file](/img/docs/52eddcc4cf1b-image-1708395920272.png)

### Kiểm tra hoạt động - Activity Log

Các hành động trên thành công đều được ghi nhận tại Activity Log

![file](/img/docs/841ab5629641-image-1708400884483.png)

![file](/img/docs/04d2ba74375d-image-1708400903813.png)

[ Previous Quản lý Subnets ](./quản-lý-subnets) [ Next Quản lý Security Group ](./quan-ly-security-group)
