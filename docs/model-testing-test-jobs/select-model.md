---
sidebar_label: "Select Model"
title: "Select Model"
source: "https://fptcloud.com/en/documents/model-testing-test-jobs/?doc=select-model"
parent: "https://fptcloud.com/en/documents/model-testing-test-jobs"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Select Model


* * *

![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/Create-New-Jobs-Select-Model.png)

You select model from the **Model Hub** in two ways:

  * **Model Catalog:** A repository of model sources from various providers such as DeepSeek, Gemma, Llama, and Qwen.

  * **Private Model:** A repository for user-owned models and fine-tuned models. These models must already have **all necessary files uploaded**. Must include **specific tags** to indicate compatibility and readiness.


**Notice:** To be used in Test Jobs, models must meet the following criteria:

  * **Model type:**

    * LLM: Accepts only text input

    * VLM: Accepts both text and image input

  * **Model size** > 0

  * **Learning stage:** Must be **Instruction-tuned**


Example:

Model name | Model version | Model family | Model type | Model size | Learning stage  
---|---|---|---|---|---  
ft_Llama-3.1-8B_20250508124054_samples-15d5e2f6fe7 | 15d5e2f6fe7 | Llama | LLM   
  
**(→ available)** | 8B   
  
**(→ available)** | Instruction-tuned   
  
**(→ available)**  
  
[ Previous How to Create Job? ](./how-to-create-job) [ Next Select Test Suite ](./select-test-suite)
