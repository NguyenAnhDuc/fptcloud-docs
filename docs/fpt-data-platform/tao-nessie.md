---
sidebar_class_name: hidden
sidebar_label: "2. FPT Data Platform"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=tao-nessie"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


Tạo Nessie


* * *

**Nessie** được thiết kế để hỗ trợ các môi trường dữ liệu phân tán lớn và phức tạp, giúp các nhóm dữ liệu quản lý hiệu quả hơn quá trình phát triển, kiểm soát và triển khai dữ liệu trong hệ thống.

Để tạo **Nessie** , người dùng thực hiện các bước sau:

**Bước 1** : Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2** : Tại phần application nhấn **Create** > hiển thị popup chọn application chọn **Nessie** > **Create**

![Hình ảnh](/img/docs/27cffa1991a0-image7-1.png)

**Bước 3** : Trong form tạo **nessie** , nhập thông tin màn **Basic Information** :

  * **Name** (required): Tên nessie

**Chú ý** : Tên nessie phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9

  * **Description** (optional): Mô tả

  * **Version** (required): chọn version

![Hình ảnh](/img/docs/d3783df37db0-image8-1.png)

**Bước 4** : Nhấn **Next Step** để chuyển sang màn nhập thông tin **Node configuration**

Nhập thông tin sau:

  * **Storage policy** (required): chọn Storage cho nessie

  * **Type** (required): chọn type cấu hình cho nessie

  * **Number of nodes** : nhập số node

**Chú ý** : số node phải lớn hơn hoặc bằng 2

Nếu người dùng cần auto scale dịch vụ thì tích chọn Enable auto scaling và nhập số node mong muốn

**Chú ý** : số node scale phải lớn hơn **Number of node**

![Hình ảnh](/img/docs/f3e231fc89d9-image9-1.png)

**Bước 5** : Nhấn **Next Step** để chuyển sang màn Additional properties

Nhập các thông tin sau:

Trường hợp chọn type là **PostgreSQL**

  * **Host name**(required): Hostname hoặc IP của Postgres server

  * **Port** (required): Postgres server port, mặc định là 5432

  * **Database name** (required): Tên database

  * **Username** (required): Username truy cập vào postgres server

  * **Password** (required): mật khẩu truy cập vào postgres server

Trường hợp chọn type là **MySQL**

  * **Host name** (required): Hostname hoặc IP của MySQL server

  * **Port** (required): MySQL server port, mặc định là 5432

  * **Database name** (required): Tên database

  * **Username** (required): Username truy cập vào MySQL server

  * **Password** (required): mật khẩu truy cập vào MySQL server

**Chú ý** : người dùng có thể chọn sử dụng **Database từ FPT** hoặc chọn sử dụng Database riêng

![Hình ảnh](/img/docs/e6444dd607d5-imagea-1.png)

**Bước 6** : Nhấn **Next Step** để chuyển sang màn **Review & create**

![Hình ảnh](/img/docs/9ca50842704e-imageb-1.png)

**Bước 7** : Kiểm tra thông tin nhập sau đó nhấn **Create** để hoàn thành.

[ Previous Nessie ](./guide-nessie) [ Next Xem thông tin Nessie ](./xem-thong-tin-nessie)
