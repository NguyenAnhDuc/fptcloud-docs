---
sidebar_label: "Instructions for configuring ArgoCD cluster to deploy applications with manifest"
title: "Instructions for configuring ArgoCD cluster to deploy applications with manifest"
source: "https://fptcloud.com/en/documents/fpt-argocd-2/?doc=Instructions-for-configuring-ArgoCD-cluster-to-deploy-applications-with-manifest"
parent: "https://fptcloud.com/en/documents/fpt-argocd-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Instructions for configuring ArgoCD cluster to deploy applications with manifest


* * *

**Step 1** : [Add Cluster to ArgoCD](</documents/fpt-argocd/?doc=add-cluster-toi-argocd>)

**Step 2** : Prepare the **Repository** containing the manifest to deploy the application 

_For example: Use a manifest to deploy an application with deployment and service files as follows_ :

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture94.png)

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture95.png)

**Step 3** : Configure **Repository**

  * Navigate to **Settings** > **Repository** :


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture96.png)

  * Create a new **Repository**


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture97.png)

Check the status of the added **Repository** in ArgoCD:

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture98.png)

**Step 4** : Create an **Applications** to deploy the application 

  * Navigate to **Applications** > **NEW APP**


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture99.png)

  * Fill out the information to create the **Applications**


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture100.png)

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture101.png)

  * Click **Create** to create the **Applications**


Result after creating the **Applications**

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture102.png)

[ Previous Instructions for login to ArgoCD ](./instructions-for-login-to-argocd)
