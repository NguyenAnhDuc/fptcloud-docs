---
sidebar_label: "How to shut down kernel?"
title: "How to shut down kernel?"
source: "https://fptcloud.com/en/documents/ai-notebook/?doc=shut-down-kernel"
parent: "https://fptcloud.com/en/documents/ai-notebook"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# How to shut down kernel?


* * *

**Step 1:** Navigate to Running Kernels/Notebooks From the navigation bar, select the **Running Kernels/Notebooks** option (second icon from the top). ![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/Screenshot-2025-11-04-at-13.33.53.png)

## Running GPU Kernel Table:  


Displays information about all **currently running GPU kernels** in your lab.

Field | Description  
---|---  
**Name** | Unique identifier of the GPU kernel  
**Created At** | Date and time when the GPU kernel started  
**Action** | Available Actions:   
• **Shut Down All** : Terminates all running kernels in your lab. Once terminated, the kernels will appear in the **Kernel History** section.   
• **Shut Down** : Terminates only the selected kernel. The terminated kernel will appear in the **Kernel History** section.  
  
## Kernel History Table:  


Displays information about all **terminated GPU kernels**.  
This table helps you verify kernel usage duration and cross-check it with billing data on the **AI Factory Portal**.

Field | Description  
---|---  
**Name** | Unique identifier of the GPU kernel  
**Created At** | Date and time when the GPU kernel started  
**Duration** | Total runtime of the GPU kernel  
  
## Billing Reconciliation

![Info Icon](https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png)

**Notice:** You may notice a slight difference (typically 1–10 seconds) between the GPU runtime displayed in **AI Factory Billing** and the **Duration** column in the **Kernel History** table of AI Notebook. This minor variation is expected and occurs due to normal synchronization delays between internal services.

![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/Screenshot-2025-11-04-at-14.12.39.png)

[ Previous How to connect Notebook to a new/existing Kernel? ](./connect-switch-kernel)
