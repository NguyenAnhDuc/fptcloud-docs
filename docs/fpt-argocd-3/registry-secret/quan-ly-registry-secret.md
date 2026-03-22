---
sidebar_label: "Quan ly registry secret"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-registry-secret"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Quản lý registry secret


* * *

Trong trường hợp người dùng sử dụng container registry nội bộ, Argo CD Image Updater cần xác thực đến registry, FPT Argo CD hỗ trợ người dùng tạo một registry secret để xác thực. Người dùng có thể thực hiện các thao tác trên portal như sau:

**_A. Tạo mới registry secret_**

  * **Bước 1:** Tại màn hình **Image Updater** > **Add Secret Registry** , thực hiện thêm mới secret: ![](/img/docs/47f6f7db9bf5-Picture18-6.png)
  * **Bước 2:** Nhập thông tin để tạo secret cho registry ![](/img/docs/0c5be7e2c6c7-Picture19-6.png)

Trong đó: 

✓ Secret Name: Tên secret muốn tạo dưới k8s 

✓ Registry: Container Registry url. VD: registry.fke.fptcloud.com 

✓ Username: Nhập username để authen với registry 

✓ Password: Nhập password để authen với registry 

  * **Bước 3:** Kết quả sau khi tạo secret registry ![](/img/docs/2601ddf18f90-Picture20-5.png)

**_B. Cập nhật registry secret_**

  * **Bước 1:** Tại màn hình **Image Updater** > **Add Secret Registry** muốn update > **Edit** , thực hiện thêm update secret: ![](/img/docs/7cc5090e98f8-Picture21-5.png)

  * **Bước 2:** Thực hiện chỉnh sửa các thông tin liên quan đến registry secret ![](/img/docs/37658d1f2b8a-Picture22-5.png) Người dùng có thể thực hiện chỉnh sửa Registry Url, username/password để authen với registry

  * **Bước 3:** Kết quả sau khi update secret registry ![](/img/docs/b0f811a68688-Picture23-5.png)

**_C. Xóa registry secret_**

  * **Bước 1:** Tại màn hình **Image Updater** > **Add Secret Registry** muốn update > **Delete** , thực hiện xóa secret: ![](/img/docs/2aa731789c10-Picture24-5.png)
  * **Bước 2:** Nhập confirm text để thực hiện xoá ![](/img/docs/ac36cf52cb78-Picture25-5.png)
  * **Bước 3:** Kết quả sau khi delete ![](/img/docs/29fe7ee5aa15-Picture26-5.png)

[ Previous Quản lý secret ](./quan-ly-secret) [ Next Quản lý Container Registry ](./quan-ly-container-registry)
