---
sidebar_label: "Huong dan tich hop oidc de quan ly account"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-tich-hop-oidc-de-quan-ly-account"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD


* * *

Trong phần này sẽ hướng dẫn người dùng tích hợp KeyCloak với ArgoCD để xác thực người dùng ứng dụng. Cần tạo một client trong KeyCloak và cấu hình ArgoCD sử dụng KeyCloak trong việc xác thực, sử dụng các nhóm được cấu hình trong KeyCloak để xác định các quyền user được sử dụng trong ArgoCD.

**Bước 1** : Tạo một Client trong KeyCloak

Thực hiện Login tới KeyCloak server > Lựa chọn **Realm** để tạo Client > **Create Client** :

![](/img/docs/b0867aca3f62-Picture119-1.png) ![](/img/docs/6df9610a4d99-Picture120-1.png) ![](/img/docs/45e8241549fa-Picture121-1.png)

Click **Save** > **Credential** , Thông tin Client secret được sử dụng để cấu hình thông tin trên Portal FPT Cloud.

![](/img/docs/0ab8c726efbc-Picture122-1.png)

**Bước 2** : Thực hiện cấu hình Group Claim bằng việc tạo mới Client scopes:

![](/img/docs/f51f46f35dd3-Picture123-1.png)

Click **Save** để tạo mới Client Scope. Trong tab **Mapper** > **Configure a new mapper** > **Group Membership** :

![](/img/docs/d7e5585ca5b8-Picture124-1.png)

**Bước 3** : Thực hiện cấu hình groups scope trong Client:

![](/img/docs/706c2c4c0432-Picture125-1.png)

Tạo group: 

![](/img/docs/9b6c7dcbd5fe-Picture126-1.png)

Tạo User và add tới group:

![](/img/docs/b6c9e1215254-Picture127-1.png)

**Bước 4** : Cấu hình ArgoCD Policy: 

Cấp quyền admin/readOnly cho usergroup:

g, ArgoCDAdmins, role:admin g, ArgoCDAdmins, role:readonly

![](/img/docs/32f3f148f526-Picture128-1.png)

**Bước 5** : Login ArgoCD qua KeyCloak OIDC Authentication:

![](/img/docs/46fe232c8fb6-Picture129-1.png)

Kết quả sau khi login qua KeyCloak:

![](/img/docs/7270537cc447-Picture130.png)

[ Previous Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi ](./huong-dan-cau-hinh-notifications-de-nhan-thong-bao)
