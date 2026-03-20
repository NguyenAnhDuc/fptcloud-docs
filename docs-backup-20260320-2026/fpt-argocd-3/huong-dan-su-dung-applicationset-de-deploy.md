---
sidebar_class_name: hidden
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-su-dung-applicationset-de-deploy"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn sử dụng applicationset để deploy


* * *

Để sử dụng chức năng liên quan đến applications set, sử dụng command để deploy và check applications Đăng nhập tới argocd server sử dụng cli
    
    
    argocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path yk3n2ph2

**_1\. Tạo applications sử dụng Git Generators_**

**Bước 1** : Chuẩn bị manifest sử dụng Git Directory Generator

![](/img/docs/29f58a8f59cb-Picture86-1.png)

**Bước 2** : Sử dụng cli để apply applicationsSet:
    
    
    argocd appset create applicationset.yaml

Kết quả sau khi chạy cli:
    
    
    ApplicationSet 'color-applicaitonset' created

Bước 3: Kết quả sau khi tạo applications với applicationsSet

![](/img/docs/daafd74f2c5f-Picture87-1.png)

List Appset sau khi sử dụng cli để get list:
    
    
    argocd appset list

![](/img/docs/bead1fd9cd1d-Picture88-1.png)

**_2\. Tạo applacations sử dụng list generator_**

**Bước 1** : Chuẩn bị manifest để deploy

![](/img/docs/6e77044fb286-Picture89-1.png)

Bao gồm các file:

![](/img/docs/ac3063dff381-Picture90-1.png)

**Bước 2** : Tạo applications sử dụng applications set sử dụng cli:
    
    
    argocd appset create applicationset.yaml

**Bước 3** : Kết quả sau khi tạo appset:

![](/img/docs/6e2e43ced62c-Picture91-1.png) ![](/img/docs/749489041d07-Picture92-1.png)

[ Previous Demo ](./demo) [ Next Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi ](./huong-dan-cau-hinh-notifications-de-nhan-thong-bao)
