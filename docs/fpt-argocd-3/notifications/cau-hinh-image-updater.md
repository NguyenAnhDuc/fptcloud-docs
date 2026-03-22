---
sidebar_label: "Cấu hình Image Updater"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-image-updater"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Cấu hình Image Updater


* * *

Argo CD Images Updater là một công cụ tự động cập nhật container images của cụm k8s do ArgoCD quản lý. 

FPT Argo CD cho phép người dùng thực hiện một số thao tác cấu hình bao gồm: enable/disable service; cấu hình secret trong secret **argocd-image-updater-secret** , tạo secret authen container registry; cấu hình container registry trong configmap **argocd-image-updater-config** của argocd images updater.

[ Previous Add cluster tới ArgoCD instance đã được khởi tạo  ](./add-cluster-toi-argocd) [ Next Enable/disable ArgoCD images updater ](./enable-disable-argocd-images-updater)
