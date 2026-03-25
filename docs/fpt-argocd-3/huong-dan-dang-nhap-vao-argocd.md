---
sidebar_class_name: hidden
sidebar_label: "Hướng dẫn đăng nhập vào ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-dang-nhap-vao-argocd"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn đăng nhập vào ArgoCD


* * *

**Cách 1:** Đăng nhập ArgoCD qua giao diện với username/password ![](/img/docs/4d518451af1f-Picture72-2.png) **Cách 2:** Đăng nhập ArgoCD với argocd cli

  * Trong mục Documentations > Dowload cli tool ![](/img/docs/e0b0b838d4fc-Picture73-2.png)
  * Cài đặt cli tool:

Đăng nhập vào cụm Argocd đã tạo: Với url: [](<https://dashboard.argocd.cd.fke.fptcloud.com/fnl2dws3>)
    
    
    argocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path fnl2dws3

Sử dụng user/password trên portal để đăng nhập

Ví dụ: ![](/img/docs/ed62b5251635-Picture74-2.png)

[ Previous Demo ](./demo) [ Next Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes ](./huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes)
