---
sidebar_class_name: hidden
sidebar_label: "Create instance group"
title: "2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity"
source: "https://fptcloud.com/documents/affinity-anti-affinity/?doc=create-instance-group"
parent: "https://fptcloud.com/documents/affinity-anti-affinity"
lang: vi
converted: "2026-03-19"
---

# 2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity


Khởi tạo một Instance Group mới


* * *

Bạn có thể khởi tạo một instance group mới với các thao tác đơn giản sau (lưu ý là instance group sau khi tạo ra thì ko thể chỉnh sửa lại được thông tin đã tạo, do đó nếu bạn muốn thay đổi thì hãy xóa nhóm hiện tại & tạo ra một nhóm mới).

**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance Group**.

![file](/img/docs/a55d43465492-image-1705024581953.png)

**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống:

  * Name: Tên **instance group**.
  * Policy: tùy chọn chính sách **Soft Affinity** hoặc **Soft Anti Affinity** để áp dụng cho instance group bạn đang tạo
  * Lưu ý: Bạn có thể tạo tối đa 10 instance groups, và mỗi instance group chỉ có thể gắn với tối đa 10 instances. ![file](/img/docs/f64a0e6f7e37-image-1705024842925.png)

**Bước 3** : Chọn **Create instance group**. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. Nếu thành công, instance group mới sẽ được hiển thị ở trang **Instance Group Management**. ![file](/img/docs/9b650495332d-image-1705024897223.png)

[ Next Xóa một Instance Group ](./delete-instance-group)
