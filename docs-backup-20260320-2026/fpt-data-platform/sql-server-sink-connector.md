---
sidebar_class_name: hidden
sidebar_label: "2. FPT Data Platform"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=sql-server-sink-connector"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


2.11 SQL Server Sink Connector


* * *

**Tạo connector, Type là sink, Database là SQLserver**

**Pre-condition:** Status CDC service healthy

## Các bước tạo connector:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector** ![image-1](/img/docs/69210ec6712f-sink-SQLserver-1.png)

**Bước 4:** Nhập các thông tin màn **Connector Information** :

  * **Name (required):** tên connector 

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”.

  * **Type** **(required):** chọn sink

  * **Database (required):** chọn **SQL server** ![image-2](/img/docs/1197f05d2146-sink-SQLserver-2.png)

**Bước 5** : Nhấn **Next** để chuyển qua màn **Properties**

Nhập thông tin màn **Properties**

  * Trường hợp chọn Manual configuration - Điền các thông tin:

    * **Host Name** (required): Hostname hoặc IP của SQLserver

    * **Port** (required): SQLserver server port, mặc định là: `1433`.

    * **Database name** (required): Database đích mà Connector sẽ sink dữ liệu vào

    * **Username** (required): Username sử dụng bởi Connector

    * **Password** (required): Password sử dụng bởi Connector

    * **Topics** (required): Danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu "," ![image-3](/img/docs/a98d24fc3f9b-sink-SQLserver-3.png)

  * Trường hợp chọn **From Database Engine** \- Điền các thông tin:

    * **Database name** (required): Tên Database

    * **Host Name (required):** Hostname hoặc IP của SQLserver

    * **Port (required):** SQLserver server port, mặc định là: `1433`.

    * **Database name (required):** Database đích mà Connector sẽ sink dữ liệu vào

    * **Username (required):** Username sử dụng bởi Connector

    * **Password (required):** Password sử dụng bởi Connector

    * **Topics (required):** Danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu "," ![image-4](/img/docs/7b4f4a2e7e7a-sink-SQLserver-4.png)

  * Nhấn **Test connection** để kiểm tra kết nối từ Workspace tới Database đã nhập

  * **Converter**

    * **Converter key** : chọn giá trị key cho converter

    * **Converter key schema enable** : chọn giá trị có/không sử dụng schema trong Converter key

    * **Converter value** : chọn giá trị value cho converter

    * **Converter value schema enable** : chọn giá trị có/không sử dụng schema trong Converter value

**Bước 6:** Nhấn **Next** để chuyển qua màn **Additional Properties**

Nhập các thông tin sau:

  * **Timezone:** chọn Timezone phù hợp của dữ liệu từ database nguồn

  * **Task max** : số task xử lý cùng nhau

  * **Type** : chọn loại Database source

  * **Name** : tên Schema

  * **Topic 1** : tên topic lắng nghe từ source connector

  * **Table 1:** tên table lắng nghe dữ liệu thay đổi từ source connector

  * **Mode** (required)**:** Hành vi của Connector khi không thể xử lý được message

    * **None** : Connector sẽ bỏ qua các messages không thể sink vào CSDL

    * **All** : Các message lỗi sẽ được gửi vào topic được nhập ![image-5](/img/docs/fee8a5a48afa-sink-SQLserver-5.png)

**Bước 7** : Nhấn **Next** để chuyển qua màn **Review** ![image-6](/img/docs/06f1c7470742-sink-SQLserver-6.png)

**Bước 8:** Kiểm tra thông tin và nhấn nút **Create** để hoàn thành việc tạo connector

[ Previous 2.10 OpenSearch Sink Connector ](./opensearch-sink-connector) [ Next 2.12 MySQL Sink Connector ](./mysql-sink-connector)
