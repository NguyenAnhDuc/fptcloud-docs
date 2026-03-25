---
sidebar_label: "Cluster Autoscale"
title: "Cluster Autoscale"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=cluster-autoscale"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Cluster Autoscale


* * *

The **Cluster Autoscale** feature of the Managed FKE product enables automatic scaling of additional workers within a worker pool if the application running on that pool is not receiving sufficient resources (CPU, Memory) from the existing worker nodes. 

In such cases, pending pods due to insufficient node resources will be served by the newly scaled-up worker nodes. 

The **Cluster Autoscale** feature also automatically removes nodes that do not utilize enough resources (default is 50%) within that node. 

It's important to note that the number of worker nodes in a worker pool can only scale within the predefined min-max range set by the user on the FPT Cloud Portal.

[ Previous Upgrade K8s Version ](./upgrade-k8s-version) [ Next Enable Cluster Autoscale ](./enable-cluster-autoscale)
