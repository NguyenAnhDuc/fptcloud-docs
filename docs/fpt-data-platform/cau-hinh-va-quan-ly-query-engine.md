---
sidebar_class_name: hidden
sidebar_label: "Truy cập và cấu hình quản lý Query Engine"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=cau-hinh-va-quan-ly-query-engine"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


Truy cập và cấu hình quản lý Query Engine 


* * *

**Precondition** : Dịch vụ **Query engine** đã được khởi tạo thành công, trạng thái của **Workspace** là **Successed** và trạng thái của **Trino** là **Healthy** (khởi tạo dịch vụ Query engine **tại đây**)

**Bước 1** : Truy cập **Ranger** theo **URL** tại tab **Essential information** và **Username** /**Password**

![Hình ảnh, Hình ảnh](/img/docs/2524d553d964-image4b.png)

![Hình ảnh, Hình ảnh](/img/docs/9b9658e3c236-image4c.png)

**Bước 2:** Tạo Trino Service từ **Ranger Admin** , tại màn hình **Service Manager** , chọn **Resource TRINO** , ấn biểu tượng **Add**

![Hình ảnh, Hình ảnh](/img/docs/a2d8109dc3a2-image4d.png)

**Bước 3** : Nhập thông tin khởi tạo **Service**

  * **Service name** : tên service (là chuỗi ký tự nằm trong URL truy cập **Trino** , có dạng: **trino-xxxxxxxx**)

![Hình ảnh, Hình ảnh](/img/docs/0011febabf57-image4e.png)

  * **Display name:** tên hiển thị

  * **Description** : mô tả

  * **Active Status** : trạng thái của **Service**

  * **Select Tag Service** : lựa chọn thẻ

  * **Username** : tên tài khoản đăng nhập Query engine

  * **Password** : mật khẩu đăng nhập Query engine

  * **jdbc.driverClassName** : mặc định io.trino.jdbc.TrinoDriver

  * **jdbc.url** : địa chỉ kết nối Query engine qua JDBC (**jdbc:trino:// :443**)

  * **Superusers** : tên tài khoản mà khi kết nối Query engine sẽ được bỏ qua kiểm tra quyền truy cập

  * **Superuser groups** : tên nhóm tài khoản mà khi kết nối Query engine sẽ được bỏ qua kiểm tra quyền truy cập

  * **Service admin users** : tên tài khoản trên Ranger được chỉ định làm admin của Service

  * **Service admin usergroups** : tên nhóm trên Ranger được chỉ định làm admin của Service

**Bước 4** : Lưu thông tin **Service**

Sau khi nhập đầy đủ thông tin yêu cầu, người dùng ấn **Add** để lưu thông tin **Service** cho **Query engine** vào **Ranger-Admin**

**Bước 5:** Kiểm tra kết nối

  * Tại màn hình Service Manager, chọn biểu tượng **Edit** thông tin **Service Trino** vừa tạo, sau đó ấn **Test connection**

![Hình ảnh, Hình ảnh](/img/docs/8ddbaa0787f8-image4f.png)

  * Đảm bảo **Ranger-Admin** đã kết nối thành công tới **Query Engine** (**Trino**) khi kết quả **Test connection** là **Connected Successfully**

![Hình ảnh, Hình ảnh](/img/docs/d344c6db7748-image50.png)

[ Previous Xem thông tin Ranger ](./xem-ranger) [ Next Tag Sync (OpenMetadata & Ranger Integration) ](./tag-sync)
