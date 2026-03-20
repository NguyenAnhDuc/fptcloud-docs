---
sidebar_label: "Deploy model GPT-OSS by using vLLM v0.10.0"
title: "Deploy model GPT-OSS by using vLLM v0.10.0"
source: "https://fptcloud.com/en/documents/gpu-container/?doc=vllm-use-cases-gpt-oss"
parent: "https://fptcloud.com/en/documents/gpu-container"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Deploy model GPT-OSS by using vLLM v0.10.0


* * *

### Introduction

GPT-OSS is the latest open-weight model series of OpenAI, designed for powerful reasoning, agentic tasks, and versatile developer use cases. Required: 

  * **openai/gpt-oss-20b** : for lower latency, and local or specialized use cases 

    * The smaller model 
    * Only requires about 16GB of VRAM 
  * **openai/gpt-oss-120b** : recommend for production, general purpose, high reasoning use cases 

    * Our larger full-sized model 
    * Best with ≥60GB VRAM 
    * Can fit on a single H100 or multi-GPU setups 


### Step 1: Deploy a container with vLLM v0.10.1 template


  4. Keep all the other settings on their defaults if you want to serve openai/gpt-oss-20b. Change model if you want to serve openai/gpt-oss-120b. 


Wait for your container to initialize. This process usually takes around 15 minutes to download the gpt-oss-20b model and up to 2 hours for the gpt-oss-120b model. You can monitor the progress in the Container Logs. 

![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/logs-1.jpg)

If the logs stop at a line similar to ( Red box in the screenshot)
    
    
    Using model weights format [*.safetensors]

This means the model is **still downloading or initializing** , and the endpoint is **not yet ready** to receive requests. 

The model is considered fully loaded and ready to serve only when you see all checkpoint shards completed, like this ( Yellow box in the screenshot) 
    
    
    Loading safetensors checkpoint shards: 100% Completed [3/3]

This indicates that all model files have been successfully loaded. 

### Step 2: Sending a Run request

After your container is running and the model is downloaded, you can send a run request to test the setup.


    
    
    curl -X 'GET' \ 
      '{your endpoint}/v1/models' \  -H 'accept: application/json'.fptcloud.com/v1/models' \ 
      -H 'accept: application/json'


    
    
    curl -X 'POST' \ 
      '{your endpoint}/v1/chat/completions' \88sdgk-8000.serverless.fptcloud.com/v1/chat/completions' \ 
      -H 'accept: application/json' \ 
      -H 'Content-Type: application/json' \ 
      -d '{ 
      "messages": [ 
        { 
          "content": "Tell me what is GPT-OSS?", 
          "role": "user", 
          "name": "admin" 
        } 
    ], 
      "model": " openai/gpt-oss-120b" 
    }'

![Info Icon](https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png)

**Notice:** Both models were trained on our [harmony response format](<https://github.com/openai/harmony>) and should only be used with the harmony format as it will not work correctly otherwise. 

You can track the performance, availability, and resource usage of containerized services, helping detect issues and optimize operations by using the Monitoring feature. ![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/Screenshot-2025-09-15-155157.png)

[ Previous Deploy model by using vLLM ](./vllm-use-case) [ Next Ollama Use Cases ](./ollama-use-cases)
