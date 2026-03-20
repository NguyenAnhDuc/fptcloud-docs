---
sidebar_label: "IAM"
title: "IAM"
source: "https://fptcloud.com/documents/iam/"
lang: vi
converted: "2026-03-19"
---

# IAM

IAM



FPT Identity & Access Management (FPT IAM) là một tính năng cho phép các Tenant owner chia sẻ quyền truy cập tài nguyên trên FPT Cloud của mình cho người dùng khác với các quyền hạn khác nhau.

Một số khái niệm cơ bản trong FPT IAM:

  * Role: Vai trò của người dùng trong tổ chức, quy định các quyền mà user có khả năng thực hiện.

*Hiện tại FPT IAM đang hỗ trợ 2 basic Role cơ bản là Super Admin và Readonly. Nếu 2 Role này chưa đáp ứng được nhu cầu bạn có thể tự tạo các Custom Role với bộ quyền tùy chỉnh.

*Mỗi role có danh sách permission.

  * Permission: xác định user có quyền thực hiện tính năng gì trên tài nguyên nào. Mỗi permission đều thuộc 1 role.

  * User group: Nhóm người dùng có cùng vai trò (Theo tenant hoặc VPC).

  * IAM users: Người dùng được thêm vào tenant, có quyền tác động lên các tài nguyên trong Tenant theo role được gán.

Tenant owner có toàn quyền quản lý tất cả tài nguyên của VPC, bao gồm cả tính năng phân quyền. Tài khoản này sẽ được mặc định gán role ORG Admin.

Để sử dụng IAM, đầu tiên Tenant Owner cần thực hiện việc tạo Role và permission cho role (Instance manager, Data analyst,…) và tạo các User group được gán Role tương ứng.

  * Đối với User group đã tạo, Tenant owner có thể chọn, tùy chỉnh Role và Permission cho phù hợp.

  * Phân quyền bằng cách mời thêm IAM users vào User group thông qua email.

  * IAM users sau khi nhận được lời mời có thể thực hiện đăng ký/đăng nhập hoặc đăng nhập thông qua SSO của tổ chức vào FPT Portal theo hướng dẫn và sử dụng tài nguyên trong VPC/Tenant được mời.

Bài viết này sẽ cung cấp cho bạn thông tin cần biết trước khi bắt đầu sử dụng FPT IAM, cách khởi tạo và quản lý.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Quản lý Role ](./role-management)
    * [ Role Overview ](./role-overview)
    * [ Xem danh sách role ](./xem-danh-sach-role)
    * [ Khởi tạo role và phân quyền cho role ](./khoi-tao-role-va-phan-quyen-cho-role)
    * [ Xem chi tiết Role ](./xem-chi-tiet-role)
    * [ Chỉnh sửa role và permission ](./chinh-sua-role-va-permission)
    * [ Xóa role ](./xoa-role)
  * [ Quản lý User Group ](./user-group-management)
    * [ User Group - Overview ](./user-group-overview)
    * [ Khởi tạo User Group mới ](./khoi-tao-user-group-moi)
    * [ Xem danh sách User Group ](./xem-danh-sach-user-group)
    * [ Xem chi tiết User Group ](./xem-chi-tiet-user-group)
    * [ Chỉnh sửa User Group ](./chinh-sua-user-group)
    * [ Xóa User Groups ](./xoa-user-groups)
  * [ Quản lý IAM User ](./iam-user-management)
    * [ IAM User - Overview ](./iam-user-overview)
    * [ Invite IAM user mới ](./invite-iam-user-moi)
    * [ Khởi tạo account và truy cập vào VPC đã được mời ](./khoi-tao-account-va-truy-cap-vao-vpc-da-duoc-moi)
    * [ Thay đổi mật khẩu ](./thay-doi-mat-khau)
    * [ Cấu hình 2FA ](./cau-hinh-2fa)
  * [ IP Access ](./ip-access)
    * [ IP Access Overview ](./ip-access-overview)
    * [ Khởi tạo một record IP access mới ](./create-ip-)
    * [ Xóa record IP access ](./delete-ip-access)
    * [ Kiểm tra Activity logs ](./activity-log-ip-access)
    * [ Tải danh sách lịch sử truy cập ](./download-access-log)

## Các câu hỏi thường gặp (FAQs) 

## Một số gợi ý mẫu (Samples) 

