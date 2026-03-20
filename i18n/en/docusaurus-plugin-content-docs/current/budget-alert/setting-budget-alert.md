---
sidebar_label: "Prevent the creation of new Compute/Network resources when the budget threshold is reached"
title: "Prevent the creation of new Compute/Network resources when the budget threshold is reached"
source: "https://fptcloud.com/en/documents/budget-alert-2/?doc=setting-budget-alert"
parent: "https://fptcloud.com/en/documents/budget-alert-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Prevent the creation of new Compute/Network resources when the budget threshold is reached


* * *

In step 2 when creating a budget alert, select the Attach option.

  * If the default option is set to No, the system will not block the creation of new resources when the budget threshold is reached.


![file](https://fptcloud.com/wp-content/uploads/2024/07/image-1727168996714.png)

  * If the Yes option is selected, when the resources selected in step 1 reach the warning threshold, the system will automatically block the creation of additional Compute and Network resources (including: Instance/ VPC/ Storage/ Snapshot/ IP/ LB)


![file](https://fptcloud.com/wp-content/uploads/2024/07/image-1727169010489.png) ![file](https://fptcloud.com/wp-content/uploads/2024/07/image-1727169025409.png)

**Note:**

  * Each budget can only select the Attach option in 1 alert.

  * The same Tenant/VP with many budgets and many alert milestones is set attach option, any alert that warns in advance will block the act of creating a new resource at that time of warning.


[ Previous Delete Budget Alert ](./delete-budget-alert)
