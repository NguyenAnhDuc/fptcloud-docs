---
sidebar_label: "Add cluster tới ArgoCD instance đã được khởi tạo"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=add-cluster-toi-argocd"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Add cluster tới ArgoCD instance đã được khởi tạo 


* * *

Để có thể deploy một ứng dụng qua ArgoCD cluster đã được khởi tạo, cần Add một cluster K8s nơi mà ứng dụng được deploy. FPT Cloud hỗ trợ người dùng thêm mới một cluster qua giao diện thay vì thêm mới qua ArgoCD CLI

**Bước 1** : Tại menu **Cluster Managements** > Chọn **Connect a Cluster**

![](/img/docs/af17013a2982-Picture62.png)

**Bước 2** : Nhập các thông tin để connect tới cụm k8s cluster. Các thông tin này sẽ được người dùng lấy từ thông tin trong file kubeconfig. 

**_Lưu ý: Thông tin dùng để connect k8s cluster bắt buộc phải có quyền admin._**

**Cluster Name (required)** : Đặt tên cho cluster name ( có thể đặt tên theo môi trường sử dụng ví dụ: dev env , prod env ,staging env , qa env,…) 

**Server (required)** : Thông tin được lấy từ file kubeconfig, url api server k8s. 

**_Ví dụ:<https://api.xxxxx.fke.fptcloud.com:6443>_**

**CA Data (required)** : Thông tin của trường **certificate-authority-data** trong file kubeconfig 

**Bearer Token (required)** : Thông tin trường **token** trong file kubeconfig

![](/img/docs/5914837acb73-Picture63.png)

**Bước 3** : Nhấn nút **Connector** để hoàn thành. 

**Bước 4** : Kiểm tra thông tin k8s cluster đã được connect 

  * Thông tin cụm K8s được quản lý qua giao diện Portal: 

![](/img/docs/4e9e2808e833-Picture64.png)

  * Kiểm tra thông tin cụm k8s trên giao diện **ArgoCD instance** : Vào **ArgoCD** > **Settings** > **Clusters** : 

![](/img/docs/44537ebabcc1-Picture65.png)

  * Kiểm tra thông tin cụm k8s trên giao diện **ArgoCD instance** : Vào **ArgoCD** > **Settings** > **Clusters** : 

![](/img/docs/40c67a444976-Picture66.png)

  * Thông tin cụm cluster đã được cấu hình xuống ArgoCD instance: 

![](/img/docs/00694a7c747c-Picture67.png)

[ Previous Xem thông tin chi tiết và đăng nhập ArgoCD instance  ](./xem-thong-tin-chi-tiet-argocd) [ Next Cấu hình Image Updater ](./cau-hinh-image-updater)
