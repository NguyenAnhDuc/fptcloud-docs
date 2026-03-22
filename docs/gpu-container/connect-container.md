---
sidebar_label: "Template | Jupyter, Code Server | Ollama WebUI | Ollama | vLLM"
title: "How to connect to a container"
source: "https://fptcloud.com/en/documents/gpu-container/?doc=connect-container"
parent: "https://fptcloud.com/en/documents/gpu-container"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# How to connect to a container


* * *

You can connect to your GPU Container using a few different methods, depending on your specific needs, preferences, and the template used to create the container. 

## HTTP Services

Connecting to a container using HTTP is convenient, quick, and secure via HTTPS. To connect using the HTTP Service: 

### Step 1: Once the container is running, navigate to Container Details Page.

### Step 2: Find the endpoint, then copy to clipbooard or click to open on browser.

### Step 3: Follow the guide that matches your template.

Template | Jupyter, Code Server | Ollama WebUI | Ollama | vLLM  
---|---|---|---|---  
Pre-condition | None | None | None | Hugging Face Token (*)  
Next steps | 

  * Open the endpoint in your browser.
  * Use the **Username** and **Password** fields in the _Environment Variables_ section of the Container Details page to access your container.

| 

  * Open the endpoint in your browser.
  * Create a new Open WebUI account or use your existing account.
  * Select a model to pull and test the model.

| Testing your container using Postman (*) | Testing your container using Postman (*)  
  
(*) Hugging Face Token: Hugging Face Token in Environment Variable section is required when using Ollama template. If you do not have Hugging Face Token yet, please follow [this guide](<https://huggingface.co/docs/hub/en/security-tokens>). 

(*) Testing container by using Postman: Append **/v1/models** to your endpoint, then provide your API_TOKEN in the Authorization. If you're using the vLLM template, also include HUGGING_FACE_HUB_TOKEN in the request parameters to test your container.

## TCP Ports

To access your instance via public endpoint, you will need to add TCP ports to the container configuration. When your container is created, you will receive a public domain and an external public port mapping to access your service. An external public port will be randomly selected from the range 30000-40000.

The format will be DOMAIN:EXTERNAL_PORT -> INTERNAL_PORT. For example: 
    
    
    tcp-endpoint-stg.serverless.fptcloud.com:34771 → :22

## SSH Terminal

  1. To get the SSH command for your container, navigate to the Container details page. Copy the command listed under SSH command..  
![Alt text](https://fptcloud.com/wp-content/uploads/2025/06/Screenshot-2025-06-30-173735.png)


It should look something like this: 
    
    
    ssh root@tcp-endpoint-stg.serverless.fptcloud.com -p 34771 ~/.ssh/id_e25595


[ Previous Export Container Configuration ](./export-config) [ Next How to manage container ](./manage-container)
