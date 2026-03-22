---
sidebar_label: "Tao Cdc Service"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=tao-cdc-service"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


1\. Tạo CDC Service


* * *

**CDC Service** là một công cụ truyền dữ liệu lớn với độ trễ thấp, linh hoạt và đáng tin cậy giữa Apache Kafka và các hệ thống dữ liệu khác. Người sử dụng có thể dễ dàng định nghĩa các kết nối (Connector) để tích hợp dữ liệu vào/ra khỏi Kafka từ/tới các cơ sở dữ liệu khác nhau. 

Để tạo CDC Service, người dùng thực hiện các bước sau: 

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần My services nhấn **Create** > hiển thị popup New service > chọn **CDC service** > **Create Services**

![anh-2](/img/docs/0a1bc9cf1bbd-z6543041086648_b51c7ccb4856fd6396a78292f58d9a74.jp.jpg)

**Bước 3** : Trong form tạo CDC Service, Nhập thông tin phần connetor information 

  * **Name** (required): Tên CDC Service

    * **Chú ý** : Tên CDC Service phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc các chữ cái hoa A-Z hoặc các kí tự số 0-9. Không nhập tên kafka connect trùng nhau. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_” 
  * **Description** (optional): Mô tả CDC Service

  * **Version** (required): Phiên bản cho CDC Service

![anh-3](/img/docs/5b006960966a-man1-new-1.png)

**Bước 4** : Nhấn Next Step để chuyển qua Node configuration 

Chọn các thông tin sau: 

  * **Storage policy** (required): chọn storage policy 

  * **Type** (required): chọn type cấu hình 

  * **Number of nodes** : nhập số node 

**Chú ý** : nhập số node phải hớn hơn hoặc bằng 2 và nhỏ hơn hoặc bằng 10 

![anh-3](/img/docs/ef30b918abed-man2-new-1.png)

**Bước 5:** Nhấn **Next** để chuyển qua màn **Kafka Cluster Information**

**Có hai lựa chọn:**

  * From FPT Database Engine
  * Manual configuration

**Trường hợp chọn Manual configuration:**

Nhập và chọn các thông tin sau:

  * **Bootstrap server endpoint** : nhập địa chỉ Bootstrap server endpoint

  * **Security protocol** : chọn một trong các giao thức bảo mật sau:

    * **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username và password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **SASL_SSL** : cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **PLAINTEXT** : dữ liệu truyền qua mạng không được mã hóa, _không khuyến khích sử dụng_

    * **SSL** : là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet ![anh-3](/img/docs/ef4e84f43cad-SCR-20250711-jtir.png)

**Trường hợp chọn From FPT Database Engine:**

Nhập và chọn các thông tin sau:

  * **Database Name (required)** : chọn Database

  * **Bootstrap server endpoint** : nhập địa chỉ Bootstrap server endpoint

  * **Security protocol** : chọn một trong các giao thức bảo mật sau:

    * **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username và password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **SASL_SSL** : cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **PLAINTEXT** : dữ liệu truyền qua mạng không được mã hóa, _không khuyến khích sử dụng_

    * **SSL** : là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet ![anh-3](/img/docs/e18a85956b6b-man3-new-1.png)

**Bước 6** : Nhấn nút **Test connection** để kiểm tra kết nối, sau đó next step để chuyển qua màn review 

![anh-3](/img/docs/4706c5441833-man4-new-1.png)

**Bước 7** : Kiểm tra lại các thông tin đã nhập và nhấn **Create** để hoàn thành.

[ Previous CDC Service ](./cdc-service) [ Next 2\. Xem thông tin CDC Service ](./xem-thong-tin-cdc-service)
