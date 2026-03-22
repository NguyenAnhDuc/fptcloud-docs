---
sidebar_label: "Field | Description"
title: "Credit History"
source: "https://fptcloud.com/en/documents/ai-factory-billing/?doc=credit-history"
parent: "https://fptcloud.com/en/documents/ai-factory-billing"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Credit History


* * *

The **Credit History** tab lets you track all **balance changes** , including **top-ups, voucher credits, and service usage.** ![Alt text](https://fptcloud.com/wp-content/uploads/2025/07/image2025-6-30_14-3-28.png) ![Alt text](https://fptcloud.com/wp-content/uploads/2025/07/image2025-6-30_14-4-25.png)

## Table Fields Explanation

Field | Description  
---|---  
**Date** | Date and time the transaction occurred.  
**Service** | Service being used in the transaction type:  
• **Top-up** : Payment Gateway  
• **Voucher** : System (of FPT AI Factory)  
• **Charged** : AI Factory service that credits were spent (i.e., Model Fine-tuning, GPU Container, or AI Inference)  
**Source** | Based on service types  
• **Top-up transaction** : Name of the payment gateway that processed the payment transaction  
• **Voucher transaction** : Voucher  
• **Charged transaction** : The resource name of FPT AI Factory service has used credits  
**Description** | Detailed information about the transaction, such as service package name, usage duration, etc.  
**Code** | **Only appears in the Balance type "Voucher credits"**  
Voucher code applied to the transaction.  
**Status** | Status of Transaction  
• **Success** : Completed transactions.  
• **Failed** : Transactions that did not go through.  
• **Processed** : Transactions are currently being handled.  
**Amount** | Credit change:  
• A **positive amount (+)** indicates credits added  
• A **negative amount (-)** indicates credits deducted (service usage or failed reversals).  
  
## Table Filter

Filter allows users to apply multiple filters at the same time to quickly find specific transactions.

  * **Balance Type:**
    * **Top-up Credits (Default)** : View only top-up transactions.
    * **Voucher Credits** : View only voucher transactions.
  * Select multiple options of **Service, Status**
  * **Date Range** : Set the time frame for the records you want to view using **Start Date** and **End Date**.


## Export records to Excel

Please note that the **transactions shown in the Credit History tab are limited** and may not include your full transaction history. The **Export Excel** feature allows you to quickly **download all your transaction** records for easier tracking, reporting, or auditing.

Follow the instructions below:


     * **Top-up Credits** : To export all top-up transactions currently displayed.
     * **Voucher Credits** : To export all voucher transactions currently displayed.


[ Previous Low Balance Threshold Alert ](./low-balance-threshold-alert) [ Next Voucher List ](./voucher-list)
