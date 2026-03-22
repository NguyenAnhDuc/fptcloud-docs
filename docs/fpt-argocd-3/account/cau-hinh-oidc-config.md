---
sidebar_label: "Cau hinh oidc config"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-oidc-config"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Cấu hình OIDC config


* * *

Sau khi enable thành công OIDC, FPT Cloud cho phép thêm mới một OIDC Config để phục vụ tích hợp SSO như sau:

  * **Bước 1** : Tại màn hình **Security & Access** > **OIDC Scope** , thực hiện Add new OIDC như sau:

![](/img/docs/eb213e0f7782-Picture23-4.png)

  * **Bước 2** : Nhập thông tin cấu hình OIDC. Các thông tin này sẽ được lấy từ hệ thống KeyCloak để quản lý user của người dùng bao gồm các thông tin sau:

✓ Name: Tên hiển thị khi login vào ArgoCD (Login via [Name]) 

✓ Issuer: được lấy từ hệ thống Keycloak sau khi tạo 1 client 

✓ ClientID: ClientID được tạo từ hệ thống KeyCloack để quản lý user của ArgoCD 

✓ ClientSecret: ClientSecret của ClientID được tạo 

![](/img/docs/30a355423db2-Picture24-4.png)

**Bước 3** : Kết quả sau khi cấu hình OIDC:

![](/img/docs/ea9826ed65e6-Picture25-4.png)

![](/img/docs/b05c5e5c56cf-Picture26-4.png)

[ Previous Enable/disable chức năng cấu hình OIDC ](./enable-disable-chuc-nang-cau-hinh-oidc) [ Next Update cấu hình OIDC ](./update-cau-hinh-oidc)
