---
sidebar_class_name: hidden
sidebar_label: "Cập nhật thông tin Security"
title: "2. FPT Event Gateway"
source: "https://fptcloud.com/documents/fpt-event-gateway/?doc=cap-nhat-thong-tin-security"
parent: "https://fptcloud.com/documents/fpt-event-gateway"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Event Gateway


Cập nhật thông tin Security


* * *

Để cập nhật thông tin Security, người dùng thực hiện các bước sau: 

**Bước 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**

**Bước 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Security**

**Bước** 3: Tại danh sách **Security** > chọn **Security** cần cập nhật thông tin > chọn **Action** > chọn **Edit**

**Bước 4** : Tại popup **Update JWT Auth** , các thông tin được update: 

  * **Claim key:** Danh sách claim key: 

    * Issuer 

    * Issued At 

    * Expiration 

    * Audience 

    * Subject 

    * Scope 

      * Giá trị mặc định claim key là "Issuer" 

      * Giao diện hiển thị mặc 1 định 1 cặp claim key-value nếu Bật JWT Auth 

      * Mặc định render 2 input: Issuer và Audience, cả hai đều required 

  * **Value** : Giá trị tương ứng với mỗi claim key (nếu có) 

    * Tối đa 100 ký tự 
  * **Public key ( required):** Chuỗi public key ở dịnh dạng PEM 

    * Bắt đầu bằng -----BEGIN PUBLIC KEY----- và kết thúc đúng chuẩn PEM 

**Bước 5** : Chọn **Update** để cập nhật thông tin **JWT Auth**

![Hình ảnh](/img/docs/b4866c3403b9-image1e.png)

[ Previous Tạo Security ](./tao-moi-security) [ Next Xóa Security ](./xoa-security)
