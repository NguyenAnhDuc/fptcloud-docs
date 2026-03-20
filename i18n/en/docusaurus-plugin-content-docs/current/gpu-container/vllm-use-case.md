---
sidebar_label: "Deploy model by using vLLM"
title: "Deploy model by using vLLM"
source: "https://fptcloud.com/en/documents/gpu-container/?doc=vllm-use-case"
parent: "https://fptcloud.com/en/documents/gpu-container"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Deploy model by using vLLM


* * *

## Step 1: Create a GPU Container using vllm-openai template

In the Environment Variables field, customize the value to match the API key (use for inferencing request) and your Hugging Face token to download model from Hugging Face. 

In this tutorial, we are using Deepseek-R1-Distill-Qwen-1.5B. Please replace the value of MODEL with any other model you prefer for inference. ![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/vllm1.png)

Please remember to replace the value of your Hugging Face token into the HF_TOKEN field.

![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/vllm2.png)

![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/Screenshot-2025-05-29-at-09.08.47.png)

## Step 2: Testing using Postman. Use your API_Token added in Step 1 to authorize
    
    
    {HTTP Endpoint}/v1/completions

![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/Screenshot-2025-05-29-at-09.05.23.png)

[ Previous vLLM Use Cases ](./vllm-use-cases) [ Next Deploy model GPT-OSS by using vLLM v0.10.0 ](./vllm-use-cases-gpt-oss)
