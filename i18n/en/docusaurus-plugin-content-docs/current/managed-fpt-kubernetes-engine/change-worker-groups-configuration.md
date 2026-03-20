---
sidebar_label: "Change Worker Group’s Configuration"
title: "Change Worker Group’s Configuration"
source: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2/?doc=change-worker-groups-configuration"
parent: "https://fptcloud.com/en/documents/managed-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Change Worker Group’s Configuration


* * *

**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page. Choose a Cluster that you want to modify the Worker Group configuration.

![](https://fptcloud.com/wp-content/uploads/2023/11/20-1.png)

**Step 2** : Click **Configure Worker Groups**.

![](https://fptcloud.com/wp-content/uploads/2023/11/21-1.png)

**Step 3** : Adjust the parameters according to your needs.

![](https://fptcloud.com/wp-content/uploads/2023/11/22-1.png)

**Step 4** : Verify the information and click **Save** to apply the Worker Group configuration.

![](https://fptcloud.com/wp-content/uploads/2023/11/23-1.png)

The Cluster update process will take place, and during this process, users cannot edit the Cluster until the update is complete.

When modifying the parameters of the worker group, the system will first create additional worker nodes with the desired configuration. Once the new worker nodes are successfully created, worker nodes with the old configuration will be removed from the system. Pods will be migrated from the old worker nodes to the new ones.

[ Previous Add Worker Group ](./add-worker-group) [ Next Upgrade K8s Version ](./upgrade-k8s-version)
