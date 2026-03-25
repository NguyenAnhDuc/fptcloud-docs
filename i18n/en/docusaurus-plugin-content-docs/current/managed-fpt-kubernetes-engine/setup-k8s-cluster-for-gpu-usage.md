---
sidebar_label: "Setting up K8s Cluster with GPU"
title: "Setting up K8s Cluster with GPU"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=setup-k8s-cluster-for-gpu-usage"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Setting up K8s Cluster with GPU


* * *

#### Prerequisites:

  * **CPU, GPU, RAM, Storage, and Instances Quota** : enough for the desired Kubernetes Cluster. If you plan to use auto-scale, you must have enough GPU quota for the **maximum amount of nodes** that you desire.

  * 01 **Network Subnet** : Network for the Kubernetes Nodes, with a static IP Pool.


#### Steps to setup the cluster:

**Step 1** : Login to the [FPT Cloud Portal](<https://console.fptcloud.com>). From the sidebar menu, choose **Kubernetes** > click **Create**

![](https://fptcloud.com/wp-content/uploads/2023/11/53-1.png)

**Step 2** : Enter the specification for the desired Kubernetes Cluster. Besides the normal information for the cluster, select **GPU specs** in the Worker Group:

![](https://fptcloud.com/wp-content/uploads/2023/11/54-1.png)

  * Choose **Instance type** : GPU

  * Choose **GPU type** : A30, A100, etc…

  * Choose **GPU Sharing configuration** : None, Single, Mixed, etc…

  * Choose **Specs type** : CPU – RAM – GPU


**Step 3** : Click **Create** and verify the initialization information.

**Step 4** : Wait until the cluster succeeds initialize (status: **Running**) > Ready to use.

[ Previous How to use GPU in Kubernetes ](./how-to-use-gpu-in-kubernetes) [ Next Adding GPU Worker Group ](./addding-gpu-worker-group)
