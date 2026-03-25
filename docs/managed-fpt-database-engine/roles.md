---
sidebar_class_name: hidden
sidebar_label: "Roles"
title: "2. Managed – FPT Database Engine"
source: "https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Roles"
parent: "https://fptcloud.com/documents/managed-fpt-database-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engine


Roles


* * *

**1\. Tạo Roles**

**Bước 1** : Vào tab **IAM** trên Portal > Chọn **Roles** > bấm **Create Role**

![](/img/docs/8117f050f5fd-Roles_b1.jpg)

**Bước 2** : Hiển thị màn hình **Create role** > nhập thông tin **Name, Description** theo nhu cầu người dùng. 

![](/img/docs/602cef2cc1d5-Roles_b2.jpg)

**Bước 3** : Chọn **Filter** > xuất hiện pop up **Permission filter** > nhập giá trị **Permission** ( Giá trị thuộc type manageDatabase, vd: manageDatabase:List), chọn **Type ManageDatabase** (theo list) > bấm **Show**.

![](/img/docs/329193e1dbbd-Roles_b3.jpg)

**Lưu ý** : Với bước Filter này, người dùng có thể không nhập Permission, mà chỉ chọn Type hệ thống sẽ hiển thị toàn bộ giá trị quyền của ManageDatabase

**Bước 4** : Người dùng **tích chọn** hoặc **không tích chọn** các permission thuộc **ManageDatabase** cần phân quyền > bấm **Create role**.

![](/img/docs/76491f254da3-Roles_b4.jpg)

Tạo thành công một role với trạng thái **Active**

![](/img/docs/05b90a7020c8-Roles_b5.jpg)

[ Previous Phân quyền tính năng Database ](./phan-quyen-tinh-nang-database)
