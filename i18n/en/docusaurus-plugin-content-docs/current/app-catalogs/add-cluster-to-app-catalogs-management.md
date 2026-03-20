---
sidebar_label: "Add K8s cluster to App Catalogs Management"
title: "Add K8s cluster to App Catalogs Management"
source: "https://fptcloud.com/en/documents/fpt-app-catalogs/?doc=add-cluster-to-app-catalogs-management"
parent: "https://fptcloud.com/en/documents/fpt-app-catalogs"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Add K8s cluster to App Catalogs Management


* * *

To be able to deploy an application to a K8s cluster via an App Catalog, you will need to connect a K8s cluster with that App Catalog Instance. 

FPT Cloud supports adding a new cluster via the interface with the following steps:

**Step 1** : Prepare a K8s cluster's _.kubeconfig_ that you want to deploy applications. The cluster could be provisioned with _FPT Container Services_ or from any other cloud.

**Step 2** : From the **Management Clusters** menu > Click **Add Cluster**

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture9-1.png)

**Step 3** : Enter necessary information to add a cluster:

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture10-1.png)

_**Note:** The information used to connect to the K8s cluster requires admin privileges. The _Cluster Name _and**.kubeconfig** file must matched._

**Step 4** : Click **Connect Cluster** to finalize adding that cluster.

**Step 5** : Check the information of the K8s cluster that you have just connected.

![](https://fptcloud.com/wp-content/uploads/2023/12/Picture11-1.png)

[ Previous View App Catalog details ](./view-app-catalog-details) [ Next Manage App Catalogs ](./manage-app-catalogs)
