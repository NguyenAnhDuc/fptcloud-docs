---
sidebar_class_name: hidden
sidebar_label: "Kafka mm2"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=kafka-mm2"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


4\. Kafka MM2


* * *

**Kafka MM2 (MirrorMaker 2)** là một công cụ dùng để **đồng bộ dữ liệu giữa các cụm Kafka khác nhau** (multi-cluster replication) 

### 1\. Tạo Kafka MM2 source

Trường hợp tạo Kafka MM2, Type là source 

Pre-condition: Status CDC service healthy 

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Kafka MM2** > nhấn **Create a Kafka MM2**

![Picture 921494741, Hình ảnh](/img/docs/42950555bbae-SCR-20250526-oryb.png)

**Bước 4:** Nhập các thông tin màn **Connector Information** : 

  * **Name** (required): tên connector 

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt  
không dùng dấu cách có thể thay dấu cách bằng dấu “-”. 

  * **Type** (required): chọn **source**

![Picture 921494741, Hình ảnh](/img/docs/600208d5d518-SCR-20250526-osbe.png)

**Bước 5** : Nhấn **Next** để chuyển qua màn **Properties**

Nhập các thông tin sau: 

  * **Kafka cluster information**

    * **Cluster alias name** (required): nhập tên định danh của cluster 

    * **Bootstrap server endpoint** (required): nhập địa chỉ kết nối Kafka 

    * **Security protocol** (required): lựa chọn giao thức bảo vệ 

    * **SASL Mechanism** (optional): tùy thuộc vào lựa chọn giao thức bảo vệ 

    * **Username** (required): tên đăng nhập 

    * **Password** (required): mật khẩu 

Nhấn **Test connection** để kiểm tra kết nối từ Workspace tới **Cluster** đã nhập 

  * **Topics**

    * **Topic** (required): lựa chọn các topic dữ liệu từ nguồn Kafka trên 
  * **Group**

    * **Group** (required): lựa chọn các group consumer cần replication 

![Picture 921494741, Hình ảnh](/img/docs/d3f037d62dd2-SCR-20250526-osxt.png)

**Bước 6:** nhấn **Next** để chuyển qua màn **Additional Properties**

Nhập các thông tin sau: 

  * **Number of tasks** : số lượng tác vụ tối đa có thể thực hiện song song 

  * **Replication policy** : lựa chọn thêm  vào trước topic hoặc giữ nguyên tên topic sau khi replication 

  * **Replication factor** : số lượng bản sao của mỗi topic sau khi replication 

  * **Offset lag max** : độ trễ tối đa của offset giữ source và target 

![Picture 921494741, Hình ảnh](/img/docs/2b0bfe8c93ca-SCR-20250526-otfh.png)

**Bước 7:** Nhấn **Next** để chuyển qua màn **Review**

![Picture 921494741, Hình ảnh](/img/docs/2bf7eb6299ff-SCR-20250526-oumi.png)

**Bước 8:** Kiểm tra thông tin sau đó nhấn **Create** để hoàn thành việc tạo Kafka MM2 source 

### 2\. Sửa Kafka MM2 source

Để sửa **Kafka MM2 source** , người dùng thực hiện các bước sau: 

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Kafka MM2 source** > chọn **Kafka MM2 name**

**Bước 4** : **Sửa thông tin Kafka MM2 source**

  * **Kafka Cluster Information**

    * Tại màn chi tiết Kafka MM2, chọn biểu tượng ở mục Kafka Cluster Information. 

    * Popup Update Database Info hiện ra, cho phép chỉnh: 

    * **Security protocol** (required): lựa chọn giao thức bảo vệ 

    * **SASL Mechanism** (optional): tùy thuộc vào lựa chọn giao thức bảo vệ 

    * **Username** (required): tên đăng nhập 

    * **Password** (required): mật khẩu 

    * Nhấn Test connection để kiểm tra kết nối. 

    * Nếu OK → nhấn Save để lưu. 

    * Muốn thoát → nhấn Cancel. 

![Hình ảnh](/img/docs/87e6922c5266-image6e-1.png)

  * **Task**

    * Tại màn chi tiết Kafka MM2, chọn biểu tượng ở mục Task. 

    * Popup Update Number of Tasks hiện ra, cho phép chỉnh: 

    * **Number of tasks** : số lượng tác vụ tối đa có thể thực hiện song song 

    * Nếu OK → nhấn Save để lưu. 

    * Muốn thoát → nhấn Cancel. 

![Hình ảnh](/img/docs/9ea8dc19e418-image6f-1.png)

  * **Replication**

    * Tại màn chi tiết Kafka MM2, chọn biểu tượng ở mục Replication. 

    * Popup Update Replication hiện ra, cho phép chỉnh: 

    * **Replication policy** : lựa chọn thêm  vào trước topic hoặc giữ nguyên tên topic sau khi replication 

    * **Replication factor** : số lượng bản sao của mỗi topic sau khi replication 

    * **Offset lag max** : độ trễ tối đa của offset giữ source và target 

    * Nếu OK → nhấn Save để lưu. 

    * Muốn thoát → nhấn Cancel. 

![Hình ảnh](/img/docs/75580e5408bd-image70.png)

### 3\. Xóa Kafka MM2 source

Để xóa **Kafka MM2 source** , người dùng thực hiện các bước sau: 

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Kafka MM2 source** > chọn **Kafka MM2 name** > chọn **Action** > chọn **Delete**

![Hình ảnh](/img/docs/e87cdfc32081-image71.png)

**Bước 4:** Hiển thị hôp thoại **Delete Kafka MM2** > nhập Delete > nhấn **Confirm** để xóa **Kafka MM2 source** , chọn **Cancel** để hủy bỏ thao tác. ![Hình ảnh](/img/docs/3411b5df872e-image72.png)

[ Previous 3\. Xóa CDC Service ](./xoa-cdc-service) [ Next Apache Superset ](./cai-dat-superset)
