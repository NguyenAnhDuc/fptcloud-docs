---
sidebar_label: "Managed – FPT Kubernetes Engine"
title: "Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Managed – FPT Kubernetes Engine


Managed – FPT Kubernetes Engine


:::info
🇻🇳 **Phiên bản tiếng Việt:** [Đọc bằng tiếng Việt](/managed-fpt-kubernetes-engine)
:::


The **FPT Kubernetes Engine** is based on the open-source K8s platform, facilitating the automation of deployment, scaling, and management of containerized applications. **FPT Kubernetes Engine** integrates various components, including Container Orchestration, Storage, Networking, Security, and PaaS, providing customers with an optimal environment for developing and deploying applications in the cloud. 

**M-FKE (Managed - FPT Kubernetes Engine)** is a service delivery model for FKE Kubernetes services. With **M-FKE** , FPT Cloud manages the entire control-plane components, while users deploy and manage the Worker Nodes. **M-FKE** allows users to focus on deploying applications without the need to invest resources in managing the K8s cluster. 

### What to consider before using M-FKE?

  * **Geographical location of the Kubernetes Cluster** : The geographical location (Region) can affect the access speed to servers during usage. It is advisable to choose the nearest Region to the traffic source to optimize speed. 

  * **Number of nodes and configuration** : FPT Cloud accounts are allocated specific limits for resources such as RAM + CPU, Storage, IP, etc. Therefore, you should determine the amount of resources needed and set a maximum limit to be met for FPT Cloud to support you effectively.


##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial-setup)


## Tutorials 

  * [ Managing K8s Cluster ](./managing-k8s-cluster)
    * [ Create a New K8s Cluster ](./create-new-k8s-cluster)
    * [ List Created Clusters ](./list-created-cluster)
    * [ Access Cluster’s Detail Informations ](./access-clusters-detail-information)
    * [ Get Cluster's Access Information ](./get-cluster-access-information)
    * [ Delete a K8s Cluster ](./delete-k8s-cluster)
  * [ Changing Cluster’s Configuration ](./changing-clusters-configuration)
    * [ Add Worker Group ](./add-worker-group)
    * [ Change Worker Group’s Configuration ](./change-worker-groups-configuration)
    * [ Upgrade K8s Version ](./upgrade-k8s-version)
  * [ Cluster Autoscale ](./cluster-autoscale)
    * [ Enable Cluster Autoscale ](./enable-cluster-autoscale)
    * [ Disable Cluster Autoscale ](./disable-cluster-autoscale)
    * [ Modify Cluster Autoscale Configuration ](./modify-cluster-autoscale-configuration)
  * [ Deploy an Application in a Worker Pool ](./deploy-application-in-worker-pool)
  * [ Load Balancer Services ](./load-balancer-services)
  * [ Persistent Storage ](./persistent-storage)
  * [ How to use GPU in Kubernetes ](./how-to-use-gpu-in-kubernetes)
    * [ Setting up K8s Cluster with GPU ](./setup-k8s-cluster-for-gpu-usage)
    * [ Adding GPU Worker Group ](./addding-gpu-worker-group)
    * [ Deploy an Application with GPU Workload on K8s ](./deploy-application-with-gpu-on-k8s)
    * [ Setting up GPU Telemetry ](./setting-up-gpu-telemetry)
    * [ Container-level Auto-scaling ](./container-level-auto-scaling)
    * [ Node-level Auto-scaling ](./node-level-auto-scaling)


## Notes when using M-FKE 

  * [ Notes when using M-FKE ](./notes-when-using-mfke)


## FAQs 

  * [ FAQs ](./faqs-mfke)


## Samples 

  * [ Micro-services Architecture on FKE ](./microservices-architecture-on-fke)
  * [ GPU on FPT Cloud ](./gpu-fpt-cloud)
    * [ What is a GPU? ](./what-is-gpu)
    * [ Why you should use GPU in cloud? ](./why-you-should-use-gpu-in-cloud)
    * [ Why you should use GPU in K8s? ](./why-you-should-use-gpu-in-k8s)
    * [ GPU Sharing ](./gpu-sharing)
    * [ GPU on FPT Cloud's K8s ](./gpu-fpt-cloud-k8s)


