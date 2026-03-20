---
sidebar_label: "Add external member to Load Balancer"
title: "Add external member to Load Balancer"
source: "https://fptcloud.com/en/documents/65101/?doc=add-external-member"
parent: "https://fptcloud.com/en/documents/65101"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Add external member to Load Balancer


* * *

### Add External Member

The **External member** feature of Load Balancer allows you to add external endpoints to the server pool. These external endpoints can be servers, services, or applications running on another network. Adding **External members** helps extend the Load Balancer’s processing capacity, utilize external resources, and improve overall system performance.

**External members** can also be added during Load Balancer creation. Refer to the Load Balancer creation guide [here.](https://fptcloud.com/documents/load-balancer/?doc=chinh-sua-listener)

To add an **External member** to a Load Balancer, follow these steps:

**Step 1:** On the Load Balancer list screen, select the **Load Balancer** to which you want to add an **External member.**

**Step 2:** On the Load Balancer details screen, go to the **Server pool** tab, then select the server pool where you want to add the **External member.**

**Step 3:** In the **Add server** section, click **Add external member.**

Fill in the following information:

  * **Name** : Display name of the **External member**

  * **IP Address** : IP address of the **External member**

  * **Port** : The port on which the member listens to incoming requests. This usually corresponds to a specific service provided by the member.

  * **Weight** : Determines the load balancing priority of the **External member**. Members with higher weights will receive more requests compared to those with lower weights.


**Step 4:** Click **Update Server pool** to complete the operation.

To remove an **External member** , click **Remove** under the **Action** section of the corresponding member.

[ Previous Monitor Load Balancer metrics ](./monitor-metrics) [ Next Resize Load Balancer ](./resize-load-balancer)
