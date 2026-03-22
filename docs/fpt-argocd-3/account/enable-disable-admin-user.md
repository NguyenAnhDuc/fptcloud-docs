---
sidebar_label: "Enable disable admin user"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=enable-disable-admin-user"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Enable/disable admin user


* * *

Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn disable/enable admin user người dùng có thể thực hiện như sau:

**_A. Disable admin user_**

  * **Bước 1:** Tại màn **Essential Properties** > Click **Disable Admin Account:** ![](/img/docs/5541f2bd9dea-Picture60-2.png)
  * **Bước 2:** Sau khi Click Disable Admin Account thực hiện **Confirm** để hoàn tất hành động: ![](/img/docs/8c88f74e1771-Picture61-2.png)
  * **Bước 3:** Kết quả sau khi disable Admin Account: ![](/img/docs/bbc635b4b52c-Picture62-2.png) Sau khi disable Admin Account người dùng có thể truy cập vào ArgoCD thông qua Local Account hoặc thông qua OIDC Scope. Trong trường hợp chưa có Local Account/ OIDC config màn hình đăng nhập sẽ như sau: ![](/img/docs/e3980c028f22-Picture63-2.png) Trong trường hợp có Local Account/ Cấu hình OIDC Scope, có thể login vào ArgoCD thông qua username/password như bình thường: ![](/img/docs/c91c0f62e108-Picture64-2.png)

**_B. Enable admin user_**

Người dùng có thể enable lại user admin như sau:

  * **Bước 1:** Tại màn **Essential Properties** > Click **Enable Admin Account:** ![](/img/docs/3de06794f43c-Picture65-2.png)
  * **Bước 2:** Sau khi Click Enable Admin Account thực hiện **Confirm** để hoàn tất hành động: ![](/img/docs/c7f796fda518-Picture66-2.png)
  * **Bước 3:** Kết quả sau khi Enable Admin Account: ![](/img/docs/07f5266ab9a5-Picture67-2.png) Sau khi enable admin account có thể đang nhập vào ArgoCD thông qua account admin: ![](/img/docs/3bc07d4a8d82-Picture68-2.png)

[ Previous Enable/disable anonymous user ](./enable-disable-anonymous-user) [ Next Update admin password ](./update-admin-password)
