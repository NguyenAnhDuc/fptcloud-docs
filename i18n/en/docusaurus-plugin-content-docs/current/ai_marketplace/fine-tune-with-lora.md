---
sidebar_label: "Fine-tune with LoRA"
title: "Fine-tune with LoRA"
source: "https://fptcloud.com/en/documents/ai_marketplace/?doc=fine-tune-with-lora"
parent: "https://fptcloud.com/en/documents/ai_marketplace"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Fine-tune with LoRA


* * *

### How to create a Fine-tuning job with LoRA?

![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)

To fine-tune a model with LoRA, please follow the instructions below:

#### Notes

  * You must log in before starting a fine-tune job. 
  * Ensure you have enough balance (credit). 
  * At least one base model must be available for fine-tuning. 


#### Steps


     * Validation: Required, max 100 characters, supports Unicode letters, digits, `-`, `_`, `.`


![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)

     * Examples: `gemma-3-27b-it`, `Qwen3-4B-Instruct-2507`, `Llama-3.3-70B-Instruct`
  4. **Select dataset format** from the dropdown list: Alpaca/ ShareGPT/ ShareGPT_Image

     * Supported formats: CSV, JSON, JSONL, ZIP, Parquet (<100MB). 


![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)

     * **Learning rate:** Float, `1e-6 → 1e-4` (e.g., `0.00001`) 
     * **Number of epochs:** Integer `1–20` (default = `5`) 


     * The job will appear in the table with status **Running**. 

> **Note:** Fine-tuning with LoRA usually takes only a few minutes. 


* * *

### How to manage Fine-tuning jobs?

On the **Fine-tuning Jobs** page, you can:

  * **View detail:** Open the pipeline detail in AI Studio. 
  * **Deploy model:** Once training is completed, deploy the LoRA model. 
  * **Cancel job:** Cancel a running job (requires confirmation). 
  * **Delete job:** Permanently delete a job (requires confirmation). 


#### Status badges

  * **Running** (yellow) 
  * **Succeeded** (green) 
  * **Failed** (red) 
  * **Canceled** (gray)


[ Previous Playground ](./playground) [ Next Deployment (LoRA Inference) ](./deployment-lora-inference)
