---
sidebar_label: "Node-level Auto-scaling"
title: "Node-level Auto-scaling"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=node-level-auto-scaling"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Node-level Auto-scaling


* * *

Similar to how Cluster Autoscale with M-FKE works, the Kubernetes cluster will automatically increase/decrease the amount of Worker Node in a Worker Group depending on the GPU usage: adding new Worker Node in a Worker Group if the application running on that worker group doesn't receive sufficient resources (GPU) from the nodes in that pool. The pending Pods will be allocated to the newly created Worker Nodes after scaling. Cluster Autoscale will also remove nodes that do not meet the utilization requirements (defaults to 50% utilization) for that node.

More details can be found at [FPT Cloud Manged Kubernetes Autoscaler](</en/documents/managed-fpt-kubernetes-engine-2/?doc=cluster-autoscale>)

The number of nodes in a Worker Group is defined on the FPT Cloud Portal, as shown in the image below:

![](https://fptcloud.com/wp-content/uploads/2023/11/63-1.png)

[ Previous Container-level Auto-scaling ](./container-level-auto-scaling)
