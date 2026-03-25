---
sidebar_label: "Instructions for login to ArgoCD"
title: "Instructions for login to ArgoCD"
source: "https://fptcloud.com/en/documents/fpt-argocd-2/?doc=Instructions-for-login-to-ArgoCD"
parent: "https://fptcloud.com/en/documents/fpt-argocd-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Instructions for login to ArgoCD


* * *

**Method 1** : Log in to **ArgoCD** with username/password: 

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture91.png)

**Method 2** : Log in to **ArgoCD** with **ArgoCD CLI**

  * From **Documentations** > Download **CLI Tool**


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture92.png)

  * Setup **CLI Tool** : Login to created ArgoCD cluster: 


_For example: With url:<https://dashboard.argocd.cd.fke.fptcloud.com/fnl2dws3>_
    
    
    argocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path fnl2dws3 

Use the user/password on the FPT Cloud portal to log in

_For example:_

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture93.png)

[ Previous Demo ](./demo) [ Next Instructions for configuring ArgoCD cluster to deploy applications with manifest ](./instructions-for-configuring-argocd-cluster-to-deploy-applications-with-manifest)
