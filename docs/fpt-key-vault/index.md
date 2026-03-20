---
sidebar_label: "2. FPT Key Vault"
title: "2. FPT Key Vault"
source: "https://fptcloud.com/documents/fpt-key-vault/"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Key Vault


FPT Key Vault



FPT Key Vault là dịch vụ cho phép tạo và quản lý các thông tin bí mật dưới dạng key/value, ssh key, certificate…

##  FPT Key Vault Documentation 

Cung cấp thông tin và các hướng dẫn chi tiết về dịch vụ FPT Key Vault của FPT Smart Cloud. Bao gồm các thao tác đăng nhập, sử dụng và quản lý thông qua giao diện FPT Portal.

## Initial Setup 

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Khởi tạo Vault Instance ](./tutorials-khoi-tao-vault-instance)
  * Quản lý Secret Engine 
    * [ Tạo Secret Engine ](./tutorials-tao-secret-engine)
    * [ Xóa Secret Engine ](./tutorials-xoa-secret-engine)
  * Quản lý Secret 
    * [ Tạo Secret trên Secret Engine ](./tutorials-tao-secret-tren-secret-engine)
    * [ Xem và cập nhật giá trị Secret ](./tutorials-xem-va-cap-nhat-gia-tri-secret)
    * [ Xóa Secret ](./tutorials-xoa-secret)
  * Quản lý Policy 
    * [ Tạo Policy ](./tutorials-tao-policy)
    * [ Xóa Policy ](./tutorials-xoa-policy)
  * Quản lý Auth Method 
    * [ Tạo Auth Method ](./tutorials-tao-auth-method)
    * [ Tạo Role ](./tutorials-tao-role)

## Các câu hỏi thường gặp (FAQs) 

## Một số gợi ý mẫu (Samples) 

## Release note

### Ra mắt dịch vụ lưu trữ và quản lý thông tin bí mật (FPT Key Vault)

FPT Cloud chính thức ra mắt dịch vụ Key Vault trên giao diện Portal. Với dịch vụ Key Vault khách hàng sẽ có công cụ lưu trữ các thông tin bí mật, quản lý và xóa những secret key không sử dụng trên giao diện của Portal FPT Key Vault là một dịch vụ đám mây để lưu trữ và truy cập các secret một cách an toàn. Secret là bất kỳ thứ gì bạn muốn kiểm soát chặt chẽ quyền truy cập, chẳng hạn như API key, password, certificates hoặc cryptographic keys. FPT Key Vault dễ dàng tích hợp vào ứng dụng, container, VM thông qua SDK và CLI Các tính năng của dịch vụ Key Vault. 

  * Quản trị viên có thể tạo và sử dụng dịch vụ trên giao diện Portal

  * Quản trị viên có thể xem danh sách, chi tiết các cụm Vault và secret key được tạo ra

  * Dễ dàng tích hợp với các ứng dụng và hệ thống hiện có.

**Tại sao bạn nên sử dụng?**

  * Cung cấp công cụ lưu trữ và quản lý các thông tin bảo mật

  * Dễ dàng tạo và sử dụng dịch vụ 

### FPT Key Vault version 1.1

**Tính năng mới:**

  * Chọn gói khi khởi tạo Vault

  * Nâng/hạ cấp gói để phù hợp với nhu cầu sử dụng

  * Giám sát lượng request sử dụng của hệ thống

  * Hỗ trợ tính năng HA khi khởi tạo Vault

  * Backup Vault hằng ngày lên S3

  * Hỗ trợ tạo Vault trên region HAN 

