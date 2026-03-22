---
sidebar_class_name: hidden
sidebar_label: "Manage Admin account"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=mange-admin-account"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Manage Admin account


* * *

Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn disable/enable admin user người dùng có thể thực hiện như sau: 

**_A. Disable admin user_**

  * **Bước 1** : Tại màn **Essential Properties** > Click **Disable Admin Account** : 

![](/img/docs/71caab00bcc8-Picture1-5.png)

  * **Bước 2** : Sau khi Click Disable Admin Account thực hiện **Confirm** để hoàn tất hành động: 

![](/img/docs/41f37b409dba-Picture2-5.png)

  * **Bước 3** : Kết quả sau khi disable Admin Account:

![](/img/docs/fa2891981d9d-Picture3-6.png)

Sau khi disable Admin Account người dùng có thể truy cập vào ArgoCD thông qua Local Account hoặc thông qua OIDC Scope. Trong trường hợp chưa có Local Account/ OIDC config màn hình đăng nhập sẽ như sau:

![](/img/docs/602fd33567fd-Picture4-6.png)

Trong trường hợp có Local Account/ Cấu hình OIDC Scope, có thể login vào ArgoCD thông qua username/password như bình thường:

![](/img/docs/9efcfab458c2-Picture5-6.png)

**_B. Enable admin user_**

Người dùng có thể enable lại user admin như sau:

  * **Bước 1** : Tại màn **Essential Properties** > Click **Enable Admin Account** :

![](/img/docs/f3355acc88bc-Picture6-6.png)

  * **Bước 2** : Sau khi Click Enable Admin Account thực hiện **Confirm** để hoàn tất hành động:

![](/img/docs/6c7b65b6fc22-Picture7-6.png)

  * **Bước 3** : Kết quả sau khi Enable Admin Account:

![](/img/docs/a1c6eba8c487-Picture8-6.png)

Sau khi enable admin account có thể đang nhập vào ArgoCD thông qua account admin: 

![](/img/docs/ab4e86504c84-Picture9-6.png)

[ Previous Enable & Disable account ](./enable-disable-account) [ Next Update admin password ](./update-admin-password)
