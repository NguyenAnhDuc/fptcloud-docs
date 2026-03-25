---
sidebar_class_name: hidden
sidebar_label: "Tạo Security"
title: "2. FPT Event Gateway"
source: "https://fptcloud.com/documents/fpt-event-gateway/?doc=tao-moi-security"
parent: "https://fptcloud.com/documents/fpt-event-gateway"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Event Gateway


Tạo Security


* * *

Để tạo mới Security, người dùng thực hiện các bước sau: 

**Bước 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**

**Bước 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Security**

**Bước** 3: Tại danh sách **Security** > chọn **Create >** hiển thị popup **New JWT Auth**

**Bước 4** : Tại popup **New JWT Auth** , nhập các thông tin: 

  * **Name (required):** Tên JWT auth 

    * Bao gồm a-z, A-Z, -, _ và số; bắt đầu bằng chữ cái; tối đa 30 ký tự 
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

**Bước 5** : Chọn **Create** để tạo mới **JWT Auth**

![Hình ảnh](/img/docs/e27479a82ed6-image1d.png)

[ Previous Quản lý Security ](./quan-ly-security) [ Next Cập nhật thông tin Security ](./cap-nhat-thong-tin-security)
