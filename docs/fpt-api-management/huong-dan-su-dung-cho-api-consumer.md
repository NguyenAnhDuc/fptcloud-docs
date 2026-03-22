---
sidebar_class_name: hidden
sidebar_label: "Hướng dẫn sử dụng cho API Consumer"
title: "2. FPT API Management"
source: "https://fptcloud.com/documents/fpt-api-management/?doc=huong-dan-su-dung-cho-api-consumer"
parent: "https://fptcloud.com/documents/fpt-api-management"
lang: vi
converted: "2026-03-19"
---

# 2. FPT API Management


Hướng dẫn sử dụng cho API Consumer


* * *

## 1\. Nhận thông tin từ API Provider

Để có thể bắt đầu sử dụng, client sẽ cần có các thông tin sau:

  * **Endpoint của API** : Được cung cấp theo hướng dẫn [**Lấy thông tin Endpoint của Product.**](<https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-api-site#contentify_4>)
  * **Authorization:** Phương thức xác thực của **Consumer**. Hiện tại đang hỗ trợ **Basic** hoặc **API Key**.
  * Nếu **Authorization** là **Basic:**
    * **Username:** Tên user với cấu trúc:

Username = UsernameProvider + tên site + usernameConsumer.

**_Ví dụ:_** _demo123.sitedemo.demoacc_

Hoặc có thể lấy theo hướng dẫn [Lấy thông tin xác thực của Consumer](<https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-consumers#contentify_4>).

  * **Password** : Mật khẩu của user đã khai báo ở bước tạo consumer.

  * **Nếu Authorization** là API Key:

    * **Key:** api-key.
    * **Value :** Lấy theo hướng dẫn ở phần
    * **Add to:**
  * **Site được ủy quyền.**

## 2\. Sử dụng Postman

Khi đã có đủ thông tin, client có thể sử dụng Postman để bắt đầu dùng API được cung cấp từ API Management.

**Bước 1:** Nhập endpoint và chọn method gọi API.

![Userguide FPT API Management 33](/img/docs/6851d77f9940-Userguide-FPT-API-Management-33-1024x640.png)

**Bước 2:** Nhập thông tin **Authorization** :

  * Chọn **Basic Auth** và nhập **Username** /**Password** nếu **Authorization** là **Basic**.
  * Chọn **API Key** và nhập key nếu **Authorization** là **API** **Key**.

![Userguide FPT API Management 34](/img/docs/c6cc12919cdc-Userguide-FPT-API-Management-34-1024x640.png)

**Bước 3:** Nhập các request body, param khác để gọi API và chọn **Send.**

![Userguide FPT API Management 35](/img/docs/fc9f24a15e58-Userguide-FPT-API-Management-35-1024x640.png)

**Bước 4:** Nhận kết quả trả về.

  * **Status message 2xx:** Gọi API thành công
  * **Status message 4xx – 5xx:** Lỗi – báo cho FCI để được hỗ trợ

![Userguide FPT API Management 36](/img/docs/9e71949323c1-Userguide-FPT-API-Management-36-1024x640.png)

**Lưu ý:** Checklist check lỗi sẽ tuần tự như sau:

  * Kiểm tra username, password.
  * Báo API Provider kiểm tra quyền của client với API trước.
  * Kiểm tra API đã khai báo đúng hay chưa, param bị thiếu header gì hay không?
  * Kiểm tra API có bị lỗi hay không ?
  * Báo FCI kiểm tra gateway.

[ Previous Analytics ](./analytics)
