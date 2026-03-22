---
sidebar_class_name: hidden
sidebar_label: "Thuc hien cau hinh webhook voi webhook secret da duoc tao"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Thực hiện cấu hình Webhook với webhook secret đã được tạo


* * *

**Bước 1:** Cấu hình webhook trên Gitlab

Vào **Gitlab Repository** > **Settings** > **Webhooks:** ![](/img/docs/d82f0925bd64-Picture84-2.png)  
![](/img/docs/25e959bf5615-Picture85-2.png) ![](/img/docs/efa617991606-Picture86-2.png)

Click **Add Webhook** để hoàn thành: ![](/img/docs/772d1a216c0b-Picture87-2.png) **Bước 2:** Kiểm tra webhook đã được cấu hình thành công hay chưa? ![](/img/docs/c17f3adbcb15-Picture88-2.png) ![](/img/docs/a77feb4bd86e-Picture89-2.png)

**Bước 3:** Thực hiện kiểm tra với push event trên repository

  * Edit replicas deployment tới 1 ![](/img/docs/a4c44ba02fe3-Picture90-2.png) Trạng thái của applications trước và sau khi push thay đổi:

Trước: ![](/img/docs/3461572caaa7-Picture91-2.png) Sau: ![](/img/docs/74bc5cd839d1-Picture92-2.png)

ArgoCD sẽ phát hiện được thay đổi và sync thay đổi tự động từ Repository để deploy applications.

[ Previous Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes ](./huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes) [ Next Hướng dẫn deploy một applications với kustomize sử dụng build options ](./huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options)
