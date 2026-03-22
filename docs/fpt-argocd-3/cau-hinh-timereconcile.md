---
sidebar_class_name: hidden
sidebar_label: "Cau hinh timereconcile"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-timereconcile"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Cấu hình TimeReconcile


* * *

Argo CD hỗ trợ người dùng cấu hình thời gian kiểm tra các thay đổi của k8s cluster với repository deployment thông qua cấu hình TimeReconcile trên Portal. Mặc định ArgoCD sẽ kiểm tra các thay đổi mỗi 3 phút 1 lần. FPT Cloud hỗ trợ người dùng cấu hình thông qua giao diện như sau:

**Bước 1:** Tại màn hình **Configuration** > chọn **TimeReconcile** ![](/img/docs/2e5b428529e4-Picture37-4.png) **Bước 2:** Thực hiện cấu hình TimeReconcile như sau:

**Lưu ý: Người dùng nhập thời gian để reconcile. Ví dụ: 10s,20s,30s,1h,…** ![](/img/docs/9e381d9c9a6f-Picture38-4.png) ![](/img/docs/21be09d36d35-Picture39-4.png) **Bước 3:** Kết quả sau khi cấu hình ![](/img/docs/90742bf43934-Picture40-2.png)

[ Previous Cấu hình Build Options cho Kustomize ](./cau-hinh-build-option-cho-kustomize) [ Next Cấu hình RBAC policy  ](./cau-hinh-rbac)
