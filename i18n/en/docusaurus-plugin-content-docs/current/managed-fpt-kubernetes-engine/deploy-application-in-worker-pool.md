---
sidebar_label: "Deploy an Application in a Worker Pool"
title: "Deploy an Application in a Worker Pool"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=deploy-application-in-worker-pool"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Deploy an Application in a Worker Pool


* * *

The M-FKE product manages workers based on worker pools, providing convenient support for customers to deploy applications without worrying about resource scaling issues.

### The manifest file configuration for application deployment

For example, deploying an application on a cluster with 02 worker pools:

![](https://fptcloud.com/wp-content/uploads/2023/11/38-1.png)

Each worker pool has a worker node:

![](https://fptcloud.com/wp-content/uploads/2023/11/39-1.png)

Worker nodes are labeled to differentiate nodes and facilitate application deployment on nodes with common labels:

![](https://fptcloud.com/wp-content/uploads/2023/11/40-1.png)

Worker nodes belonging to the worker pool **worker-1zx5wqdu** are labeled **worker.fptcloud/pool=worker-1zx5wqdu**.

Users can copy the worker pool name when clicking on the details of the worker pool configuration.

![](https://fptcloud.com/wp-content/uploads/2023/11/41-1.png)

When using resources to deploy applications in Kubernetes (Pod, Deployment, StatefulSet, DaemonSet, Replicaset), users can add a **Node Affinity Rule** or **Node Selector** in the Specification section of the configuration file:

![](https://fptcloud.com/wp-content/uploads/2023/11/42-1.png)

![](https://fptcloud.com/wp-content/uploads/2023/11/43-1.png)

In this case, the value entered in the first image's **values** section (using **Node Affinity Rule**) and the value in the **nodeSelector** section is the name of the worker pool that the user wants to deploy the application to.

### Application Deployment:

When deploying the NGINX application using the manifest file:

![](https://fptcloud.com/wp-content/uploads/2023/11/44-1.png)

One pod is in **Pending** state due to a lack of resources on the worker nodes in the pool to run the pod:

![](https://fptcloud.com/wp-content/uploads/2023/11/45-1.png)

The **Cluster Autoscaler** component from FPT Cloud will scale up by adding more worker nodes to that pool to serve the pending NGINX pod.

![](https://fptcloud.com/wp-content/uploads/2023/11/46-1.png)

After adding a worker node to the worker pool, the NGINX pod that was previously **Pending** is now in the **Running** state.

When scaling the application using fewer pods, the available resources on the worker nodes will increase until the resource usage for CPU and Memory compared to the node's maximum resources decreases below 50% over a 10-minute period. At that point, the node will be automatically removed from the worker pool, saving costs for the user.

[ Previous Modify Cluster Autoscale Configuration ](./modify-cluster-autoscale-configuration) [ Next Load Balancer Services ](./load-balancer-services)
