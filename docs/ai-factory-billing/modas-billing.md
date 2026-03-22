---
sidebar_label: "MODAS Billing"
title: "MODAS Billing"
source: "https://fptcloud.com/en/documents/ai-factory-billing/?doc=modas-billing"
parent: "https://fptcloud.com/en/documents/ai-factory-billing"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# MODAS Billing


* * *

**Billing Logic** | **Minimum billable usage** | **Time to charge**  
---|---|---  
Based on usage volume (number of tokens/characters) | 1 token | Every 5 minutes  
  
**Billing Equation:**

  * **Usage tokens** : Input tokens + Output tokens
  * **Cost** : `Input tokens × input price / 1M` \+ `Output tokens × output price / 1M`


**Example:**

> You use model **Qwen3-32B** priced at **$0.165/1M input tokens** and **$0.187/1M output tokens** , using **13,394 input tokens** and **127 output tokens**

  * Usage token: 13,394 input tokens and 127 output tokens
  * Cost = `(13,394 × 0.165 + 127 × 0.187) / 1,000,000 = $0.0022`


[ Previous Model Finetuning Billing ](./model-finetuning-billing) [ Next How to add credits? ](./add-credits)
