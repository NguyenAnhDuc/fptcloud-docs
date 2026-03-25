---
sidebar_label: "Tính năng Clone instance giúp tạo ra instance mới giống với instance gốc."
title: "Clone instance"
source: "https://fptcloud.com/documents/cloud-server/?doc=clone-instance"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Clone instance


* * *

Tính năng Clone instance giúp tạo ra instance mới giống với instance gốc.

**Bước 1** : Người dùng chọn Instance cần Clone, chọn **Actions** , chọn **Clone instance** . Tính năng có thể sử dụng khi instance đang ở trạng thái **Power on** hoặc **Power off**. Một số lưu ý:

  * **Tính năng chưa hỗ trợ cho các instance có external disk**

  * **Đối với các instance có snapshot và GPU, tính năng vẫn clone instance nhưng không bao gồm snapshot và GPU.**

![file](/img/docs/5ed202f92808-image-1717475698353.png)

**Bước 2** : Nhập các thông số cần thiết và bấm Clone

  * **Tên instance** : Người dùng nhập tên instance sau khi được clone (chỉ được nhập chữ cái, số, “-”, “_”, khoảng trắng, và dấu chấm).

  * **Storage policy** : Người dùng lựa chọn trọng danh sách storage policy của mình

  * **Subnet** : Người dùng chọn subnet trong danh sách đã khởi tạo

  * **Private IP** : Người dùng nhập IP cho clone instance, IP cần thuộc về dãy subnet đã chọn. Nếu người dùng để trống, hệ thống sẽ tự khởi tạo.

![file](/img/docs/fb6919a9e5b5-image-1717475716702.png)

**Bước 3** : Hệ thống tự điều hướng sang màn hình danh sách instance. Clone instance sẽ được khởi tạo ở trạng thái “Pending”

![file](/img/docs/36124bd2c601-image-1717475729573.png)

**Bước 4** : Sau khi khởi tạo hoàn tất, hệ thống chuyển sang trạng thái “Running”

![file](/img/docs/15f71aa33a4b-image-1717475743661.png)

[ Previous Khởi tạo một máy ảo mới ](./tutorials-khoi-tao-mot-may-ao-moi) [ Next Kết nối vào máy ảo Windows ](./tutorials-ket-noi-vao-may-ao-windows)
