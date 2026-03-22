---
sidebar_label: "Fine-tuning it on financial datasets allows it to:"
title: "Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks"
source: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=fine-tune-the-gemma-3-27B-instruct-model-for-financial-tasks"
parent: "https://fptcloud.com/en/documents/model-fine-tuning"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks


* * *

### Introduction

**Gemma-3-27B-Instruct** is a high-performance, instruction-tuned model with multimodal capabilities (text+image), 128K token context window (ideal for long financial documents), strong reasoning and multilingual support.

Fine-tuning it on financial datasets allows it to:

  * Understand domain-specific terminology

  * Answer complex financial questions

  * Extract structured data from unstructured reports

  * Generate summaries or insights from financial documents


### Step-by-Step: Fine-tuning with SFT

#### 1\. Prepare your financial dataset

Recommended sources:

  * Financial QA datasets on Hugging Face.

    * Eg: <https://huggingface.co/datasets/gbharti/finance-alpaca/blob/main/Cleaned_date.json>
  * Custom datasets from earning reports, financial news, or analyst commentary


#### 2\. Access to Model Fine-tuning Portal and click Create New Pipeline

Details:

  * Model source: Model Catalog

  * Model name: google/gemma-3-27b-it

  * Trainer: SFT

  * Volume: Managed volume

  * Data format: Alpaca

  * Training data: Upload 'Cleaned_data.json'

  * Evaluation data: None

  * Hyperparameters:

    * Batch size: 1

    * Epochs: 3

    * Gradient accumulation steps: 4

    * Checkpoint steps: 500

    * Logging steps: 10

    * ...

  * Infrastructure:

    * Node: 1

    * Flavor: 8 x GPU NIVIDIA H100 SXM5 (128CPU - 1536GB RAM - 8xH100)

  * Pipeline name: ft.pipeline_0251509140923


#### 3\. Start Pipeline

Wait for your pipeline to initialize. This process usually takes around 15 minutes to finish.

#### 4\. Monitor

You can monitor the progress in Model metrics, System metrics and Logs.
