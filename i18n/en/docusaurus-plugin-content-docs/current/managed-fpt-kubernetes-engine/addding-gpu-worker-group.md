---
sidebar_label: "Adding GPU Worker Group"
title: "Adding GPU Worker Group"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=addding-gpu-worker-group"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Adding GPU Worker Group


* * *

#### Prerequisites:

  * **CPU, GPU, RAM, Storage, and Instances Quota** : enough for the extra Worker Group specifications. If you plan to use auto-scale, you must have enough GPU quota for the **maximum amount of nodes** that you desire.

  * 01 **Network Subnet** : Network for the Kubernetes Nodes, with a static IP Pool.


#### Steps to configure

**Step 1** : Login to the [FPT Cloud Portal](<https://console.fptcloud.com>). From the sidebar menu, choose **Kubernetes** > Choose the cluster to config. In **Detail Cluster** > **Worker Group** > click the **Config Icon**

![](https://fptcloud.com/wp-content/uploads/2023/11/55-1.png)

**Step 2** : Click **Add Worker Group** to add a new Worker Group.

![](https://fptcloud.com/wp-content/uploads/2023/11/56-1.png)

**Step 3** : Select **GPU specs** in the Worker Group.

![](https://fptcloud.com/wp-content/uploads/2023/11/57-1.png)

  * Choose **Instance type** : GPU

  * Choose **GPU type** : A30, A100, etc…

  * Choose **GPU Sharing configuration** : None, Single, Mixed, etc…

  * Choose **Specs type** : CPU – RAM – GPU


**Step 4** : Click **Save** and verify the initialization information.

**Step 5** : Wait until the cluster succeeds initialize (status: **Running**) > Ready to use.

[ Previous Setting up K8s Cluster with GPU ](./setup-k8s-cluster-for-gpu-usage) [ Next Deploy an Application with GPU Workload on K8s ](./deploy-application-with-gpu-on-k8s)
