---
sidebar_label: "Khởi tạo một Instance Group mới"
title: "Khởi tạo một Instance Group mới"
source: "https://fptcloud.com/documents/cloud-server/?doc=create-instance-group"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Khởi tạo một Instance Group mới


* * *

### **Đối với người dùng sử dụng tài nguyên loại General**

Người dùng có thể khởi tạo một instance group mới với các thao tác: 

**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance group**.

![file](/img/docs/df6818249661-image-1718787333684.png)

**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống: 

  * **Name** : Tên instance group.

  * **Policy** : Tùy chọn chính sách Soft Affinity hoặc Soft Anti Affinity để áp dụng cho instance group người dùng đang tạo

**Lưu ý: Hệ thống hỗ trợ tạo tối đa 10 instance groups, và mỗi instance group chỉ có thể gắn với tối đa 10 instances.**

![file](/img/docs/3904ea381fa2-image-1718787364108.png)

**Bước 3** : Chọn **Create instance group**. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. 

Nếu thành công, instance group mới sẽ được hiển thị ở trang **Instance Group**.

![file](/img/docs/4ac3fdff23d4-image-1718787383248.png)

**Lưu ý: Hệ thống không hỗ trợ chỉnh sửa instance group trên resource general, chỉ hỗ trợ xóa để tạo lại instance group mới.**

### **Đối với người dùng sử dụng tài nguyên loại Specific**

Đối với loại tài nguyên specific, khởi tạo một instance group với các thao tác sau:

**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance group**.

![file](/img/docs/5397586a1f4f-image-1718787551692.png)

**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống: 

  * **Name** : Tên instance group.

  * **Policy** : Tùy chọn chính sách Soft Affinity hoặc Soft Anti Affinity để áp dụng cho instance group người dùng đang tạo

  * **Instances** : Người dùng cần chọn ít nhất 2 instance để tạo instance group

![file](/img/docs/fd673a1f32ef-image-1718787564579.png)

**Lưu ý:**

  * Danh sách instance chỉ liệt kê các máy ảo có trạng thái: Running, Stopped.

  * Mỗi VPC được tạo tối đa 10 instance group, mỗi instance group tối đa 10 instance.

[ Previous Giới thiệu ](./overview-affinity) [ Next Notification Bell ](./overview-bell)
