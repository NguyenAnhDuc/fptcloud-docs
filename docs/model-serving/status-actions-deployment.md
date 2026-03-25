---
sidebar_label: "Deployment Statuses:"
title: "Status and Actions for a Deployment"
source: "https://fptcloud.com/en/documents/model-serving/?doc=status-actions-deployment"
parent: "https://fptcloud.com/en/documents/model-serving"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Status and Actions for a Deployment


* * *

Deployment Statuses:

**Status** | **Description**  
---|---  
Running | The Deployment has been successfully created and is operating normally  
Creating | The Deployment is being initialized and is not yet active  
Stopped | The Deployment has been successfully stopped  
Deleting | The Deployment is in the process of being deleted  
Stopping | The Deployment is in the process of being stopped  
Processing | The Deployment is being updated, such as modifying configuration details or restarting  
  
Actions Available for Deployment Interaction

**Action** | **Description**  
---|---  
Start | Start the Deployment to begin using it  
Stop | Stop the Deployment; the instances running the app will scale down to 0 after stopping  
Delete | Delete the Deployment; all running resources for the cluster will be reclaimed  
Edit in Details | Edit the configuration details of the Deployment  
Restart | Restart the Deployment cluster  
  
The available actions for a Deployment are influenced by the type of deployment and the status of the Deployment cluster. Customers can track this using the following matrix table:

![Alt text](https://fptcloud.com/wp-content/uploads/2024/12/11.5.png)

![Alt text](https://fptcloud.com/wp-content/uploads/2024/12/11.png)

[ Previous Deployment List ](./deployment-list) [ Next Detailed Configuration Information for a Deployment ](./detailed-configuration-information)
