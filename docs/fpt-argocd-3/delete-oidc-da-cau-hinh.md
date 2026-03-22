---
sidebar_class_name: hidden
sidebar_label: "Delete oidc da cau hinh"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=delete-oidc-da-cau-hinh"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Delete OIDC đã cấu hình


* * *

  * **Bước 1** : Tại màn hình **Security & Access** > **OIDC Scope** , thực hiện Delete OIDC Scope như sau:

![](/img/docs/7c37461f4a89-Picture30-3.png)

  * **Bước 2** : Nhập confirm “delete” text để xác nhận hành động

![](/img/docs/c8f7c979985e-Picture31-3.png)

  * **Bước 3** : Kết quả sau khi xoá OIDC Scope:

![](/img/docs/ab4a5764fa34-Picture32-3.png)

Sau khi xoá OIDC Scope, OIDC Scope sẽ chuyển về trạng thái disable và ArgoCD chỉ hỗ trợ login qua user/pass nếu admin account được enable hoặc có local account được cấu hình:

![](/img/docs/9e7d435937c8-Picture33-3.png)

Hướng dẫn chi tiết xem tại mục **Demo > Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD**

[ Previous Update cấu hình OIDC ](./update-cau-hinh-oidc) [ Next Cho phép enable Applications Set ](./cho-phep-enable-applications-set)
