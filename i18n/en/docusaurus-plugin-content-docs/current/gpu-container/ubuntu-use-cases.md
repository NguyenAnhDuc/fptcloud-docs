---
sidebar_label: "Ubuntu Use Cases"
title: "Ubuntu Use Cases"
source: "https://fptcloud.com/en/documents/gpu-container/?doc=ubuntu-use-cases"
parent: "https://fptcloud.com/en/documents/gpu-container"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Ubuntu Use Cases


* * *

## Create a Remote Environment using Ubuntu

This use case involves creating a remote environment from Ubuntu template, then connecting via SSH to install the necessary PyTorch library to prepare it for your AI workload.

### Step 1: Create a GPU Container using Ubuntu template

  * Choose Ubuntu template 
  * Select SSH Terminal Access and add your public keys ![Alt text](https://fptcloud.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-173921.png)

### Step 2: Connect your container via SSH


To connect via SSH, copy the command and paste it into your terminal. You can use any terminal application, such as Command Prompt, PowerShell, or the integrated terminal in VS Code. This use case will use VSCode. ![Alt text](https://fptcloud.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-174741.png)

See our detailed guide [here ](<https://fptcloud.com/en/documents/gpu-container/?doc=connect-container>)for a full walkthrough. 

### Step 3: Setting Up Your Environment


    
    
    apt update && apt install -y wget gnupg2 curl software-properties-common 
    
    
    apt install -y python3 python3-pip python3-venv 


    
    
    pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124   

Check if pytorch is installed successfully 
    
    
    python 3 
    
    
    import torch 


    
    
    apt install vim 
    
    
    vim matrix_mulplication.py 
    
    
    python3 matrix_mulplication.py 

[ Previous Code Server Use Cases ](./code-server-use-cases)
