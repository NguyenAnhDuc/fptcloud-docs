---
sidebar_label: "Access Cluster’s Detail Informations"
title: "Access Cluster’s Detail Informations"
source: "https://fptcloud.com/en/documents/dedicated-fpt-kubernetes-engine-2/?doc=access-clusters-detail-information"
parent: "https://fptcloud.com/en/documents/dedicated-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Access Cluster’s Detail Informations


* * *

**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page.

![](https://fptcloud.com/wp-content/uploads/2023/11/11.MainPage.png)

**Step 2** : Select the Cluster you want to view detailed information about.

![](https://fptcloud.com/wp-content/uploads/2023/11/12.ClusterInfo.png)

**Step 3** : Switching between tabs to view corresponding information

**_3.1. Essential Properties Tab_** : Display information of Cluster Information, Load Balancer VIP, API.

  * **Cluster Information** : Basic information about the Cluster, including Cluster ID, Version, Kubernetes Config, Status, Public IP, and SSH Key.

  * **Load Balancer VIP** : Virtual IPs of LB which is used for the K8s API and Ingress.

  * **Dashboard & API**: API URL


![](https://fptcloud.com/wp-content/uploads/2023/11/13.EssentialProperties.png)

**_3.2. Node Pools Tab_** : Configuration information of **Master Nodes** and **Worker Nodes**.

  * **Master Configuration** : Master Node configuration: Node Count, CPU, Memory, Disk

  * **Worker Configuration** : Worker Node configuration: Node Count, CPU, Memory, Disk, Storage Policy, Auto Scale


![](https://fptcloud.com/wp-content/uploads/2023/11/14.NodePoolsInfo.png)

**_3.3. Advanced Tab_** : Advanced parameters of the Kubernetes Cluster

  * **Advanced Configuration** : Advanced parameters of Kubernetes Cluster (Node DNS, Pod Network, Service Network, Network Node Prefix, Max Pod Per Node, Enable Custom Script)

  * **NFS Storage** : NFS status (Enable/Disable), and disk capacity of NFS Storage.


![](https://fptcloud.com/wp-content/uploads/2023/11/15.AdvancedInfo.png)

**_3.4. Instances Tab_** : List virtual machines that belong to this Kubernetes Cluster, both **Master Nodes** and **Worker Nodes**

![](https://fptcloud.com/wp-content/uploads/2023/11/16.Instances.png)

**_3.5. Activity Logs Tab_** : Action Logs of this Kubernetes Cluster.

![](https://fptcloud.com/wp-content/uploads/2023/11/17.ActivityLogs.png)

[ Previous List Created Clusters ](./list-created-clusters) [ Next Get Cluster's Access Information ](./get-cluster-access-information)
