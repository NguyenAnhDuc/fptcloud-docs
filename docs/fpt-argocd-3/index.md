---
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


FPT ArgoCD



FPT Smart Cloud chính thức ra mắt dịch vụ Managed ArgoCD trên giao diện portal. Với dịch vụ này, khách hàng có thể sử dụng ArgoCD để deploy ứng dụng thông qua nền tảng kubenetes sử dụng kustomize, manifest, helm chart,… Bên cạnh đó, người dùng có thể dễ dàng thực hiện các thao tác quản lý ArgoCD instance, quản lý cấu hình, user, … thông qua giao diện mà nhóm phát triển sản phẩm đã tích hợp.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Kiểm tra thông tin gói dịch vụ ](./initial/kiem-tra-thong-tin-goi-dich-vu)
  * [ Tạo mới một FPT ArgoCD ](./initial/tao-moi-fpt-argocd)
  * [ Xem thông tin chi tiết và đăng nhập ArgoCD instance ](./initial/xem-thong-tin-chi-tiet-argocd)
  * [ Add cluster tới ArgoCD instance đã được khởi tạo ](./deploy/add-cluster-toi-argocd)
  * [ Cấu hình Image Updater ](./notifications/cau-hinh-image-updater)
    * [ Enable/disable ArgoCD images updater ](./notifications/enable-disable-argocd-images-updater)
    * [ Cấu hình Log Level ](./notifications/cau-hinh-log-level)
    * [ Quản lý secret ](./registry-secret/quan-ly-secret)
    * [ Quản lý registry secret ](./registry-secret/quan-ly-registry-secret)
    * [ Quản lý Container Registry ](./registry-secret/quan-ly-container-registry)
  * [ Cấu hình webhook ](./notifications/cau-hinh-webhook)
    * [ Add mới một Webhook Secret ](./notifications/add-moi-webhook-secret)
    * [ Edit webhook Secret ](./notifications/edit-webhook-secret)
    * [ Delete webhook Secret ](./notifications/delete-webhook-secret)
  * [ Cấu hình Build Options cho Kustomize ](./deploy/cau-hinh-build-option-cho-kustomize)
  * [ Cấu hình TimeReconcile ](./notifications/cau-hinh-timereconcile)
  * [ Cấu hình RBAC policy ](./account/cau-hinh-rbac)
  * [ Cấu hình Whitelist IP ](./notifications/cau-hinh-whitelist-ip)
  * [ Nâng gói dịch vụ đang sử dụng ](./initial/nang-goi-dich-vu-dang-su-dung)
  * [ Upgrade version ](./initial/upgrade-version)
  * [ Quản lý account trên argocd ](./account/quan-ly-account-tren-argocd)
    * [ Tạo mới account trên portal ](./account/tao-moi-account-tren-portal)
    * [ Edit capabilities ](./deploy/edit-capabilities)
    * [ Change password ](./account/change-password)
    * [ Enable & Disable account ](./account/enable-disable-account)
    * [ Manage Admin account ](./account/mange-admin-account)
    * [ Update admin password ](./account/update-admin-password)
  * [ Manage Admin account, Enable/disable Anonymous User ](./account/manage-admin-account-enable-disable-anonymous-user)
    * [ Enable/disable anonymous user ](./account/enable-disable-anonymous-user)
    * [ Enable/disable admin user ](./account/enable-disable-admin-user)
    * [ Update admin password ](./account/update-admin-password)
  * [ Cấu hình OIDC phục vụ SSO config ](./account/cau-hinh-oidc-phuc-vu-sso-config)
    * [ Enable/disable chức năng cấu hình OIDC ](./account/enable-disable-chuc-nang-cau-hinh-oidc)
    * [ Cấu hình OIDC config ](./account/cau-hinh-oidc-config)
    * [ Update cấu hình OIDC ](./account/update-cau-hinh-oidc)
    * [ Delete OIDC đã cấu hình ](./account/delete-oidc-da-cau-hinh)
  * [ Cho phép enable Applications Set ](./deploy/cho-phep-enable-applications-set)
  * [ Cấu hình Notifications ](./notifications/cau-hinh-notifications)
    * [ Enable/disable Notificaions ](./notifications/enable-disable-notificaions)
    * [ Cấu hình channel để thực hiện gửi thông báo ](./notifications/cau-hinh-channel-de-thuc-hien-gui-thong-bao)
  * [ Demo ](./deploy/demo)
    * [ Hướng dẫn đăng nhập vào ArgoCD ](./initial/huong-dan-dang-nhap-vao-argocd)
    * [ Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes ](./deploy/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes)
    * [ Thực hiện cấu hình Webhook với webhook secret đã được tạo ](./notifications/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao)
    * [ Hướng dẫn deploy một applications với kustomize sử dụng build options ](./deploy/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options)
    * [ Hướng dẫn deploy applications qua helm chart repo ](./deploy/huong-dan-deploy-applications-qua-helm-chart-repo)
    * [ Hướng dẫn deploy applications qua argocd cli ](./deploy/huong-dan-deploy-applications-qua-argocd-cli)
    * [ Hướng dẫn sử dụng applicationset để deploy ](./deploy/huong-dan-su-dung-applicationset-de-deploy)
    * [ Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi ](./notifications/huong-dan-cau-hinh-notifications-de-nhan-thong-bao)
    * [ Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD ](./account/huong-dan-tich-hop-oidc-de-quan-ly-account)
    * [ Hướng dẫn tích hợp Argo CD Images Updater ](./notifications/huong-dan-tich-hop-argocd-images-updater)

