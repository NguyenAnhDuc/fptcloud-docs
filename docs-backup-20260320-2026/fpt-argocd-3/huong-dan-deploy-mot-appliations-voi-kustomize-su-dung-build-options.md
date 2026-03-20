---
sidebar_class_name: hidden
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn deploy một applications với kustomize sử dụng build options


* * *

Tương tự với việc deploy một applications với manifest, để deploy một ứng dụng sử dụng kustomize cần thực hiện các bước tương tự như mục 5.8.2 trong Documentations.

**Bước 1:** Chuẩn bị một Repository để deploy ứng dụng. Trong phần demo này, deploy một số ứng dụng lên k8s bao gồm: thành phần ỉngress controller, argocd-rollout và applications

Cụ thể: Cấu trúc thư mục source code như sau: ![](/img/docs/e233954ffff0-Picture93-2.png)

Trong đó: 

  * Argo-rollout được deploy sử dụng kustomize với build options helm chart ![](/img/docs/2b0c49f17cb7-Picture94-2.png)
  * Ingress-nginx và các thành phần khác được deploy sử dụng kustomize với manifest ![](/img/docs/0046a2218d6d-Picture95-2.png)

**Bước 2:** Thực hiện cấu hình build options của kustomize thông qua giao diện của Portal theo hướng dẫn chi tiết ở mục 5.5. trong Document.

**Lưu ý: Trong trường hợp chưa cấu hình build options, việc tạo applications sẽ gặp lỗi.** ![](/img/docs/b42ada9bc21c-Picture96-2.png)

**Bước 3:** Deploy applications thông qua ArgoCD Thực hiện tạo Applications tương tự như mục 5.8.2. trong Document. Tuy nhiên, đối với ứng dụng deploy với kustomize và helm chart cần cấu hình thêm một số thông tin như sau: ![](/img/docs/9d3a59cd8abd-Picture97-2.png) ![](/img/docs/ff0c9a53d1ab-Picture98-2.png) Applications sau khi deploy thành công: ![](/img/docs/1f7a425477dc-Picture99-2.png)

[ Previous Thực hiện cấu hình Webhook với webhook secret đã được tạo ](./thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao) [ Next Hướng dẫn deploy applications qua helm chart repo ](./huong-dan-deploy-applications-qua-helm-chart-repo)
