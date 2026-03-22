---
sidebar_class_name: hidden
sidebar_label: "Huong dan cau hinh argocd cluster de deploy ung dung voi manifes"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes


* * *

**Bước 1:** Thực hiện add cluster (bước này đã được hướng dẫn trong document)

**Bước 2:** Chuẩn bị Repository chứa manifest để deploy ứng dụng

**Ví dụ:** Sử dụng một manifest để deploy một ứng dụng với file deployment và service như sau: ![](/img/docs/31e0e1306b34-Picture75-2.png) ![](/img/docs/2d55c1924fbe-Picture76-2.png) **Bước 3:** Thực hiện cấu hình Repository

  * Vào **Settings** > **Repository:** ![](/img/docs/25744da2dc4d-Picture77-2.png)

  * Thực hiện thêm mới một Repository: ![](/img/docs/548ab2407411-Picture78-2.png)

  * Kiểm tra trạng thái repository được add tới argocd: ![](/img/docs/5cfd1e45a7be-Picture79-2.png)

**Bước 4:** Tạo một Applications để deploy ứng dụng

  * Vào menu **Application** > **NEW APP:** ![](/img/docs/9e02e9e0a7e6-Picture80-2.png)

  * Nhập thông tin để tạo Applications: ![](/img/docs/9a2e22b57ce8-Picture81-2.png) ![](/img/docs/426ba5658e8b-Picture82-2.png)

  * Click **Create** để tạo **Applications**

Kết quả sau khi tạo Applications: ![](/img/docs/d51b08f7d751-Picture83-2.png)

[ Previous Hướng dẫn đăng nhập vào ArgoCD ](./huong-dan-dang-nhap-vao-argocd) [ Next Thực hiện cấu hình Webhook với webhook secret đã được tạo ](./thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao)
