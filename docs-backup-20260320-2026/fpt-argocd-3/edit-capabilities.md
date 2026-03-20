---
sidebar_class_name: hidden
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=edit-capabilities"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Edit capabilities


* * *

FPT Cloud cho phép người dùng cấu hình capbilites của account:

  * **login** : Cho phép user login qua ArgoCD
  * **apiKey** : Cho phép user tạo authen token để truy cập qua API. Lựa chọn này cho phép tích hợp dễ dàng với các quy trình tự động như CI/CD pipeline hoặc các quy trình tự động khác cần tương tác với API của ArgoCD

**Bước 1** : Tại màn hình **Security & Access** > **Local Account** , thực hiện **Edit Account** :

![](/img/docs/06a2fa3e2d15-Picture85.png)

**Bước 2** : Thực hiện tích chọn bổ sung hoặc bỏ tích chọn đối với lựa chọn đã có.

_Lưu ý: Cần chọn ít nhất 1 lựa chọn capabilities (apiKey/login) cho user_

![](/img/docs/56c75d94e147-Picture86.png)

**Bước 3** : Click Edit để hoàn thành việc edit

Kết quả sau khi edit:

![](/img/docs/29463c43d829-Picture87.png)

[ Previous Tạo mới account trên portal ](./tao-moi-account-tren-portal) [ Next Change password ](./change-password)
