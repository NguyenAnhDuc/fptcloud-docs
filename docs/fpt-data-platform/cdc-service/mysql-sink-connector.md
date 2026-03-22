---
sidebar_label: "Các bước tạo connector:"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=mysql-sink-connector"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


2.12 MySQL Sink Connector


* * *

**Tạo connector, Type là sink, Database là MySQL**

**Pre-condition:** Status CDC service healthy

## Các bước tạo connector:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector** ![image-1](/img/docs/d2263ea59c7b-sink-MySQL-1.png)

**Bước 4:** Nhập các thông tin màn **Connector Information** :

  * **Name (required):** tên connector

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”. 

  * **Type** **(required):** chọn **sink**

  * **Database (required):** chọn **MySQL** ![image-2](/img/docs/3c52de62c208-sink-MySQL-2.png)

**Bước 5** : Nhấn **Next** để chuyển qua màn **Properties**

Nhập thông tin màn Properties

  * **Trường hợp chọn** Manual configuration** - Điền các thông tin:

    * **Host Name** (required): Hostname hoặc IP của MySQL 

    * **Port** (required): MySQL server port, mặc định là: `3306`. 

    * **Database name** (required): Database đích mà Connector sẽ sink dữ liệu vào 

    * **Username** (required): Username sử dụng bởi Connector 

    * **Password** (required): Password sử dụng bởi Connector 

    * **Topics** (required): Danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu "," ![image-3](/img/docs/6d5aa92805fb-sink-MySQL-3.png)

  * **Trường hợp chọn** From Database Engine** - Điền các thông tin:

    * **Database name** (required): Tên Database 

    * **Host Name** (required): Hostname hoặc IP của MySQL 

    * **Port** (required): MySQL server port, mặc định là: `3306`. 

    * **Database name** (required): Database đích mà Connector sẽ sink dữ liệu vào 

    * **Username** (required): Username sử dụng bởi Connector 

    * **Password** (required): Password sử dụng bởi Connector 

    * **Topics** (required): Danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu "," ![image-4](/img/docs/d3fbbb2946f5-sink-MySQL-4.png)

  * Nhấn Test connection để kiểm tra kết nối từ Workspace tới Database đã nhập

  * **Converter**

    * **Converter key** : chọn giá trị key cho converter 

    * **Converter key schema enable** : chọn giá trị có/không sử dụng schema trong Converter key 

    * **Converter value** : chọn giá trị value cho converter 

    * **Converter value schema enable** : chọn giá trị có/không sử dụng schema trong Converter value

**Bước 6:** Nhấn **Next** để chuyển qua màn **Additional Properties**

Nhập các thông tin sau:

  * **Timezone:** chọn Timezone phù hợp của dữ liệu từ database nguồn 

  * **Task max:** số task xử lý cùng nhau 

  * **Type:** chọn loại Database source 

  * **Name** : tên Schema 

  * **Topic 1** : Tên topic lắng nghe từ source connector 

  * **Table 1:** tên table lắng nghe dữ liệu thay đổi từ source connector 

  * **Mode** (required): Hành vi của Connector khi không thể xử lý được message

    * **None** : Connector sẽ bỏ qua các messages không thể sink vào CSDL

    * **All** : Các message lỗi sẽ được gửi vào topic được nhập ![image-5](/img/docs/dc1e2872adb9-sink-MySQL-5.png)

**Bước 7** : Nhấn **Next** để chuyển qua màn **Review** ![image-6](/img/docs/50974a617ad1-sink-MySQL-6.png)

**Bước 8:** Kiểm tra thông tin và nhấn nút **Create** để hoàn thành việc tạo connector

[ Previous 2.11 SQL Server Sink Connector ](./sql-server-sink-connector) [ Next 2.13 MariaDB Sink Connector ](./mariadb-sink-connector)
