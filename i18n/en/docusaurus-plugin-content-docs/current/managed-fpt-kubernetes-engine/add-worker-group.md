---
sidebar_label: "Add Worker Group"
title: "Add Worker Group"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=add-worker-group"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Add Worker Group


* * *

**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page. Choose a Cluster that you want to add a Worker Group.

![](https://fptcloud.com/wp-content/uploads/2023/11/15.png)

**Step 2** : Click **Configure Worker Groups**.

![](https://fptcloud.com/wp-content/uploads/2023/11/16.png)

**Step 3** : Click **ADD WORKER GROUP**.

![](https://fptcloud.com/wp-content/uploads/2023/11/17.png)

**Step 4** : Enter the required information in the fields.

![](https://fptcloud.com/wp-content/uploads/2023/11/18-1.png)

  * **Type** : Choose the configuration (CPU & Memory) for the Worker Node.

  * **Container Runtime** : Containerd.

  * **Storage Policy** : Choose the Storage Policy type (corresponding to IOPS) for the Worker Node Disk.

  * **Disk (GB)** : Select the root disk capacity for the Worker Node.

  * **Scale Min** : The minimum number of VM instances for the Worker Node in the K8s cluster. It is recommended to have at least 03 Nodes for a production environment.

  * **Scale Max** : The maximum number of VM instances for a worker group in the K8s cluster.


**Step 5** : Verify the information and click **Save** to start scaling the worker node.

![](https://fptcloud.com/wp-content/uploads/2023/11/19-1.png)

The Cluster scaling process will take a few minutes, and the Cluster status will change to Processing. The Cluster will continue to operate normally after adding a new Worker Group.

[ Previous Changing Cluster’s Configuration ](./changing-clusters-configuration) [ Next Change Worker Group’s Configuration ](./change-worker-groups-configuration)
