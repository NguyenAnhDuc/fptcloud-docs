---
sidebar_class_name: hidden
sidebar_label: "Huong dan deploy applications qua helm chart repo"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-deploy-applications-qua-helm-chart-repo"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn deploy applications qua helm chart repo


* * *

**Bước 1:** Cấu hình repository helm chart Cấu hình helm repository, trường hợp helm chart public có thể không cần cấu hình helm repo, tuy nhiên nếu helm chart private cần cấu hình helm repo để ArgoCD có thể get repository deploy ứng dụng.

Ví dụ add helm repository của xplat tới ArgoCD

![](/img/docs/cbd4241f388d-Picture17-3.png)

Kết quả cấu hình thành công repository:

![](/img/docs/f2c9fb5e6a7e-Picture18-3.png)

**Bước 2:** Tạo Applications để deploy chart cert-manager

![](/img/docs/47801cfa7fcd-Picture19-3.png)

![](/img/docs/92fd447497fa-Picture20-3.png)

![](/img/docs/59520a919138-Picture21-3.png)

Kết quả sau khi deploy applications:

![](/img/docs/ef9ddebfeeac-Picture22-2.png)

Kiểm tra kết quả deploy dưới k8s cluster:

![](/img/docs/b618fe2a59f8-Picture23-2.png)

**Lưu ý** : Trong trường hợp deploy applications sử dụng helm chart deploy, argocd sẽ lấy file chart về để deploy như manifest. Do đó dưới cụm k8s cluster khi get list helm chart sẽ không thấy chart deploy.*

![](/img/docs/5310f476edf6-Picture24-2.png)

[ Previous Hướng dẫn deploy một applications với kustomize sử dụng build options ](./huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options) [ Next Hướng dẫn deploy applications qua argocd cli ](./huong-dan-deploy-applications-qua-argocd-cli)
