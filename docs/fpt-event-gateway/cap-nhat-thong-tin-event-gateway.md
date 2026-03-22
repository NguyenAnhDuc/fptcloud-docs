---
sidebar_class_name: hidden
sidebar_label: "Cap nhat thong tin event gateway"
title: "2. FPT Event Gateway"
source: "https://fptcloud.com/documents/fpt-event-gateway/?doc=cap-nhat-thong-tin-event-gateway"
parent: "https://fptcloud.com/documents/fpt-event-gateway"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Event Gateway


Cập nhật thông tin Event Gateway 


* * *

Để cập nhật thông tin **Event Gateway** người dùng thực hiện các bước sau: 

**Bước 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**

**Bước 2** : Chọn **Event Gateway** mà bạn muốn cập nhật thông tin 

**Bước 3** : Tại màn hình **Event Gateway** , nhấn vào biểu tượng Edit ở mục bạn muốn chỉnh sửa thông tin 

  * **Update Basic Information**

Hiển thị màn hình sửa thông tin Instance Information, cho phép sửa các thông tin sau: 

    * **Name** ( Required): Tên dịch vụ 

Chú ý: Tên dịch vụ phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. 

    * **Description** (optional): Mô tả dịch vụ 

![Hình ảnh](/img/docs/d2f456a84da0-image2a.png)

  * **Update Node Configuration**

Hiển thị màn hình sửa thông tin Node Configuration, cho phép sửa các thông tin sau: 

    * **Type** : Chọn type cấu hình cho dịch vụ 

    * **Number of node:** chọn số node phù hợp 

**Chú ý** : số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hoặc bằng 10 

    * **Storage policy** : chọn storage policy 

![Hình ảnh](/img/docs/a3921152865d-image2b.png)

  * **Update kafka cluster:** Hiển thị màn hình sửa thông tin Kafka Cluster, cho phép sửa các thông tin sau 

    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 

    * **Username (required)** : Tên đăng nhập cho xác thực 

    * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 

    * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 

    * **Password (required)** : Mật khẩu cho xác thực 

    * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 

    * Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 

![Hình ảnh](/img/docs/34119d0df7cf-image2c.png)

  * **Update Endpoint:** Hiển thị màn hình sửa thông tin **Endpoint** , cho phép sửa các thông tin sau 

    * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM 

    * Bắt đầu bằng -----BEGIN CERTIFICATE----- và kết thúc đúng chuẩn PEM 

    * **Private key (required):** Private key ở định dạng PEM 

    * Bắt đầu bằng -----BEGIN PRIVATE KEY----- và kết thúc đúng chuẩn PEM 

![Hình ảnh](/img/docs/ee4860cd5f1d-image2d.png)

[ Previous Xem thông tin Event Gateway ](./xem-thong-tin-event-gateway) [ Next Xóa Event Gateway ](./xoa-event-gateway)
