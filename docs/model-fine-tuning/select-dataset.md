---
sidebar_label: "Select Dataset"
title: "Select Dataset"
source: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=select-dataset"
parent: "https://fptcloud.com/en/documents/model-fine-tuning"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Select Dataset


* * *

First of all, you must prepare the best dataset because it directly impacts how well the model performs on your intended use case.

Here’s what good dataset quality enables:

  * **Collect examples to target remaining issues.**

    * If the model still isn't good at certain aspects, add training examples that directly show the model how to do these aspects correctly.
  * **Scrutinize existing examples for issues.**

    * If your model has grammar, logic, or style issues, check if your data has any of the same issues. For instance, if the model now says "I will schedule this meeting for you" (when it shouldn't), see if existing examples teach the model to say it can do new things that it can't do
  * **Consider the balance and diversity of data.**

    * If 60% of the assistant responses in the data says "I cannot answer this", but at inference time only 5% of responses should say that, you will likely get an overabundance of refusals.
  * **Make sure your training examples contain all of the information needed for the response.**

    * If we want the model to compliment a user based on their personal traits and a training example includes assistant compliments for traits not found in the preceding conversation, the model may learn to hallucinate information.
  * **Look at the agreement and consistency in the training examples.**

    * If multiple people created the training data, it's likely that model performance will be limited by the level of agreement and consistency between people. For instance, in a text extraction task, if people only agreed on 70% of extracted snippets, the model would likely not be able to do better than this.
  * **Make sure all of your training examples are in the same format, as expected for inference.**


![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Dataset.png)

You have two ways to transfer the **Training data** and **Evaluation data** :

  * Upload a file


**Notice:** Ensure the file matches the selected data format

Trainer | Supported data format | Supported file format | Supported file size  
---|---|---|---  
**SFT** | Alpaca | CSV  
JSON  
JSONLINES  
ZIP  
PARQUET | Limit 100MB  
**SFT** | ShareGPT | JSON  
JSONLINES  
ZIP  
PARQUET | Limit 100MB  
**SFT** | ShareGPT_Image | ZIP  
PARQUET | Limit 100MB  
**DPO** | ShareGPT | JSON  
JSONLINES  
ZIP  
PARQUET | Limit 100MB  
**Pre-training** | Corpus | TXT  
JSON  
JSONLINES  
ZIP  
PARQUET | Limit 100MB  
  
  * Connect to Data Hub


    2. Select a connection or dataset from the Data Hub. **Notice:** Ensure the dataset is compatible with the selected format.


[ Previous Select Dataset Format ](./select-dataset-format) [ Next Set up Hyperparameters ](./set-up-hyperparameters)
