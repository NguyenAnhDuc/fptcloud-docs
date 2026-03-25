---
sidebar_label: "Connect Kubernetes Cluster to ArgoCD Instance"
title: "Connect Kubernetes Cluster to ArgoCD Instance"
source: "https://fptcloud.com/en/documents/fpt-argocd-2/?doc=Connect-Kubernetes-Cluster-to-ArgoCD-Instance"
parent: "https://fptcloud.com/en/documents/fpt-argocd-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Connect Kubernetes Cluster to ArgoCD Instance


* * *

In order to deploy an application via the provisioned **ArgoCD** instance, it is necessary to connect a K8s cluster where the application would be deployed. FPT Cloud supports users to connect a new cluster via the interface instead of the ArgoCD CLI command.

**Step 1** : From the sidebar menu select **Cluster Management** > Select **Connect a Cluster**.

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture62.png)

**Step 2** : Fill in the information to connect to the Kubernetes cluster. This information will be taken in the _.kubeconfig_ file.

**Note: Information used to connect to the Kubernetes cluster requires administrator privileges.**

  * **Cluster Name (required)** : Enter a name for the cluster (can be named according to the usage environment, for example: dev env, prod env, staging env, qa env,...)

  * **Server (required)** : Information is taken from _.kubeconfig_ file (Kubernetes' API Server URL)


**_For example:<https://api.xxxxx.fke.fptcloud.com:6443>_**

**CA Data (required)** : **certificate-authority-data** field information in the _.kubeconfig_ file

**Bearer Token (required)** : Token field information in _.kubeconfig_ file

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture63.png)

**Step 3** : Click **Connect** to finalize.

**Step 4** : Verify the connected Kubernetes Cluster Status

  * K8s cluster information is managed through the FPT Cloud Portal:


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture65.png)

  * Verify the Kubernetes cluster information on the **ArgoCD** instance: Go to **ArgoCD** > **Settings** > **Clusters** :


![](https://fptcloud.com/wp-content/uploads/2023/11/Picture66.png)

Cluster information has been configured to the **ArgoCD** instance:

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture67.png)

[ Previous View detailed informations and log in to ArgoCD instance ](./view-informations-argocd) [ Next Webhook configuration  ](./webhook-configuration)
