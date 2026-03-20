---
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-rbac"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Cấu hình RBAC policy 


* * *

**ArgoCD** hỗ trợ phân quyền cho người dùng sử dụng rbac policy config. Mặc định user mới tạo sẽ có quyền readyonly khi đăng nhập hệ thống. FPT Cloud hỗ trợ người dùng cấu hình RBAC policy thông qua giao diện như sau: 

**Bước 1** : Vào màn hình **Security & Access** > **RBAC**

![](/img/docs/b28a7401f422-Picture124-2.png)

**Bước 2** : Nhập cấu hình RBAC mong muốn:

**Ví dụ:** p, role:staging-db-admins, clusters, create, staging-db-admins/_, allow p, role:staging-db-admins, clusters, update, staging-db-admins/_ , allow p, role:staging-db-admins, clusters, delete, staging-db-admins/_, allow p, role:staging-db-admins, clusters, get,_ , allow*

![](/img/docs/68b9d186d03d-Picture125-2.png)

**Bước 3** : Kết quả sau khi lưu:

![](/img/docs/cd7211612ed2-Picture127-2.png)

Để thực hiện xoá các policy đã cấu hình thực hiện update và xoá dòng policy muốn xoá. Thực hiện tương tự việc update.

[ Previous Cấu hình TimeReconcile ](./cau-hinh-timereconcile) [ Next Cấu hình Whitelist IP ](./cau-hinh-whitelist-ip)
