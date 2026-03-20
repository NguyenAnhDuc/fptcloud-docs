---
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=enable-disable-anonymous-user"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Enable/disable anonymous user


* * *

Người dùng có thể bật/tắt quyền truy cập ẩn danh vào ArgoCD thông qua giao diện portal. Anonymous user sẽ sử dụng quyền mặc định với role là readonly (chỉ đọc) đối với các chức năng trên ArgoCD. Mặc định trong ArgoCD sẽ tắt quyền truy cập ẩn danh. 

**_A. Enable Anonymous User_**

  * **Bước 1** : Tại màn **Essential Properties** > Click **Enable Anonymous** user

![](/img/docs/658b74a83922-Picture13-5.png)

  * **Bước 2** : Sau khi Click Enable Anonymous user thực hiện **Confirm** để hoàn tất hành động:

![](/img/docs/7a0bd307e0fc-Picture14-5.png)

  * **Bước 3** : Kết quả sau khi Enable Anonymous user:

![](/img/docs/dddf86f8c75b-Picture15-5.png)

Sau khi enable truy cập ẩn danh, có thể xem thông tin chức năng của ArgoCD mà không cần phải đăng nhập:

![](/img/docs/e4b4859f530f-Picture16-5.png)

**_B. Disable Anonymous User_**

  * **Bước 1** : Tại màn **Essential Properties** > Click **Disable Anonymous user** :

![](/img/docs/8c2ea7722398-Picture17-5.png)

  * **Bước 2** : Sau khi Click Disable Anonymous user thực hiện **Confirm** để hoàn tất hành động:

![](/img/docs/6373d15930ea-Picture18-5.png)

  * **Bước 3** : Kết quả sau khi disable anonymous user:

![](/img/docs/8be2f6fed0b7-Picture19-5.png)

Sau khi disable ArgoCD sẽ yêu cầu xác thực bằng việc login trước khi muốn xem thông tin chức năng:

![](/img/docs/2b3f54baca44-Picture20-4.png)

[ Previous Manage Admin account, Enable/disable Anonymous User ](./manage-admin-account-enable-disable-anonymous-user) [ Next Enable/disable admin user ](./enable-disable-admin-user)
