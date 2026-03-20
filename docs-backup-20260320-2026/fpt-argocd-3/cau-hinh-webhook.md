---
sidebar_class_name: hidden
sidebar_label: "2. FPT ArgoCD"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-webhook"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Cấu hình webhook 


* * *

ArgoCD sẽ tự động kiểm tra các thay đổi của các manifest trên Git Repository ba phút một lần. ArgoCD hỗ trợ Git webhook notifications từ Github, GitLab, Bitbucket, Bitbucket Server and Gogs để mỗi lần Git Repository có thay đổi ArgoCD sẽ tự động phát hiện và đồng bộ các thay đổi này. 

**Lưu ý: Mỗi một loại webhook chỉ được tạo 1 lần và có thể update cho các lần sau. ArgoCD không hỗ trợ cấu hình nhiều secret cho mỗi loại webhook**

[ Previous Quản lý Container Registry ](./quan-ly-container-registry) [ Next Add mới một Webhook Secret  ](./add-moi-webhook-secret)
