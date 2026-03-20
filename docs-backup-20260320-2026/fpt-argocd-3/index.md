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

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Kiểm tra thông tin gói dịch vụ ](./kiem-tra-thong-tin-goi-dich-vu)
  * [ Tạo mới một FPT ArgoCD ](./tao-moi-fpt-argocd)
  * [ Xem thông tin chi tiết và đăng nhập ArgoCD instance ](./xem-thong-tin-chi-tiet-argocd)
  * [ Add cluster tới ArgoCD instance đã được khởi tạo ](./add-cluster-toi-argocd)
  * [ Cấu hình Image Updater ](./cau-hinh-image-updater)
    * [ Enable/disable ArgoCD images updater ](./enable-disable-argocd-images-updater)
    * [ Cấu hình Log Level ](./cau-hinh-log-level)
    * [ Quản lý secret ](./quan-ly-secret)
    * [ Quản lý registry secret ](./quan-ly-registry-secret)
    * [ Quản lý Container Registry ](./quan-ly-container-registry)
  * [ Cấu hình webhook ](./cau-hinh-webhook)
    * [ Add mới một Webhook Secret ](./add-moi-webhook-secret)
    * [ Edit webhook Secret ](./edit-webhook-secret)
    * [ Delete webhook Secret ](./delete-webhook-secret)
  * [ Cấu hình Build Options cho Kustomize ](./cau-hinh-build-option-cho-kustomize)
  * [ Cấu hình TimeReconcile ](./cau-hinh-timereconcile)
  * [ Cấu hình RBAC policy ](./cau-hinh-rbac)
  * [ Cấu hình Whitelist IP ](./cau-hinh-whitelist-ip)
  * [ Nâng gói dịch vụ đang sử dụng ](./nang-goi-dich-vu-dang-su-dung)
  * [ Upgrade version ](./upgrade-version)
  * [ Quản lý account trên argocd ](./quan-ly-account-tren-argocd)
    * [ Tạo mới account trên portal ](./tao-moi-account-tren-portal)
    * [ Edit capabilities ](./edit-capabilities)
    * [ Change password ](./change-password)
    * [ Enable & Disable account ](./enable-disable-account)
    * [ Manage Admin account ](./mange-admin-account)
    * [ Update admin password ](./update-admin-password)
  * [ Manage Admin account, Enable/disable Anonymous User ](./manage-admin-account-enable-disable-anonymous-user)
    * [ Enable/disable anonymous user ](./enable-disable-anonymous-user)
    * [ Enable/disable admin user ](./enable-disable-admin-user)
    * [ Update admin password ](./update-admin-password)
  * [ Cấu hình OIDC phục vụ SSO config ](./cau-hinh-oidc-phuc-vu-sso-config)
    * [ Enable/disable chức năng cấu hình OIDC ](./enable-disable-chuc-nang-cau-hinh-oidc)
    * [ Cấu hình OIDC config ](./cau-hinh-oidc-config)
    * [ Update cấu hình OIDC ](./update-cau-hinh-oidc)
    * [ Delete OIDC đã cấu hình ](./delete-oidc-da-cau-hinh)
  * [ Cho phép enable Applications Set ](./cho-phep-enable-applications-set)
  * [ Cấu hình Notifications ](./cau-hinh-notifications)
    * [ Enable/disable Notificaions ](./enable-disable-notificaions)
    * [ Cấu hình channel để thực hiện gửi thông báo ](./cau-hinh-channel-de-thuc-hien-gui-thong-bao)
  * [ Demo ](./demo)
    * [ Hướng dẫn đăng nhập vào ArgoCD ](./huong-dan-dang-nhap-vao-argocd)
    * [ Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes ](./huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes)
    * [ Thực hiện cấu hình Webhook với webhook secret đã được tạo ](./thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao)
    * [ Hướng dẫn deploy một applications với kustomize sử dụng build options ](./huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options)
    * [ Hướng dẫn deploy applications qua helm chart repo ](./huong-dan-deploy-applications-qua-helm-chart-repo)
    * [ Hướng dẫn deploy applications qua argocd cli ](./huong-dan-deploy-applications-qua-argocd-cli)
    * [ Hướng dẫn sử dụng applicationset để deploy ](./huong-dan-su-dung-applicationset-de-deploy)
    * [ Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi ](./huong-dan-cau-hinh-notifications-de-nhan-thong-bao)
    * [ Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD ](./huong-dan-tich-hop-oidc-de-quan-ly-account)
    * [ Hướng dẫn tích hợp Argo CD Images Updater ](./huong-dan-tich-hop-argocd-images-updater)

