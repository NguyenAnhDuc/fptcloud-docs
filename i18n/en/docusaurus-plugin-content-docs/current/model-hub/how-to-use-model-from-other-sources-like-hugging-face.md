---
sidebar_label: "How to Use Models from Other Sources like Hugging Face?"
title: "How to Use Models from Other Sources like Hugging Face?"
source: "https://fptcloud.com/en/documents/model-hub-2/?doc=how-to-use-model-from-other-sources-like-hugging-face"
parent: "https://fptcloud.com/en/documents/model-hub-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# How to Use Models from Other Sources like Hugging Face?


* * *

If you already have a model you’ve used elsewhere, or you’ve found an open-source model on Hugging Face that’s not directly supported on AI Studio, you can still fine-tune it using AI Studio.

Here’s a guide on how to bring your custom model into AI Studio for fine-tuning.

## Upload model through SDK

### Step 1: Install the SDK CLI
    
    
    pip install https://s3-han02.fptcloud.com/modelhubsdk/ai-studio/model_space-0.2.5.9-py3-none-any.whl

### Step 2: Setup environment variables
    
    
    export FPT_SPACE_URL="https://ai-api.fptcloud.com"
    export FPT_SPACE_TOKEN=""
    export FPT_TENANT_ID=""

  * Note: 
    * FPT_SPACE_TOKEN: Please visit [https://ai.fptcloud.com/{{tenant_name}}/user-token](<https://ai.fptcloud.com/AIMKP-UTN-LINHHTM20/user-token>) to generate your access token and paste it after FPT_SPACE_TOKEN= above
    * FPT_TENANT_ID: The ID of your tenant


### Step 3: Upload model version
    
    
    model_space model upload --model-id  --version-id  --path 

**Optional parameters**

  * include:


Include only files that match the given regex patterns. Multiple patterns should be separated by commas

  * exclude:


Exclude files that match the given regex patterns. You can also use commas to separate multiple patterns.

**Note**

  * Make sure you have edited the tags to include the model size and chat template information

  * Ensure that all files from external model sources are fully uploaded to the Model Hub


[ Next How to Use Model Catalog? ](./how-to-use-model-catalog)
