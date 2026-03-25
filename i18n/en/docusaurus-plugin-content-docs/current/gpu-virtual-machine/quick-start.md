---
sidebar_label: "Quick Start"
title: "Quick Start"
source: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=quick-start"
parent: "https://fptcloud.com/en/documents/gpu-virtual-machine-en"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Quick Start


* * *

### Sign up for an Account

**Step 1: Create an FPT Cloud account**

  * Go to <https://fptcloud.com/>, click **Sign Up** , and follow the system instructions to enter your details. 

  * Our support team will contact you shortly to verify your information and activate your account. 


**Step 2: Log in to the FPT Portal**

  * Go to <https://console.fptcloud.com> or <https://console.fptcloud.jp> and sign in with your **FPT Cloud account and password** , depending on where your quota has been provisioned. Make sure to select the correct **Tenant** and **Region**. 

  * **Set up an SSH key:** Navigate to **SSH Management** to generate an SSH key. This key will be used for secure access to your servers. 


### Step-by-Step

#### Step 1: Create a Subnet

A subnet is required before deploying your GPU VM. 


Follow the detailed guide [here](<https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-subnet>)

#### Step 2: Create a GPU VM


     * **Choose the instance type:** _H100_ instances are available on the _.com_ site and _H200_ instances are available on the _.jp_ site. 

     * **Select a disk type:**

       * **Ephemeral Disk (NVMe):** The storage disk is bundled with the instance and cannot be resized. 
       * **Persistent Disk (Block Storage SSD):** A storage disk is required, with a minimum size of **100 GB.**


Follow the detailed guide [here](<https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-gpu-vm>). 

#### Step 3: Allocate a public IP address (Floating IP)


     * _Ephemeral Disk (NVMe):_ Use **port forwarding (NAT)** to connect the floating IP with the VM. You’ll need to specify both **the IP port** and **the Instance port.**


Follow the detailed guide [here](<https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=floating-ip>). 

#### Step 4: Create Security Group

By default, the **Default Security Group** allows all outbound traffic. You have to create a new one to allow inbound rules to access the VM. 


  2. Choose **Create Security Group** in the Security Groups screen and define the inbound rules for VM (e.g., **Allow SSH access on port 22** from your client’s public IP). 


Follow the detailed guide [here](<https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-security-group>). 

#### Step 5: Access to GPU Virtual Machine

After successfully creating the GPU VM, you can access the server via **SSH** : 

  * **Terminal:** Open your terminal and enter the command with your SSH key. 

  * **Web Console:** Go to the server’s detail page and click **“Open at Console”** to log in with a password through the web console. 


> 💡 _The default username is**root.**_

Follow the detailed guide [here](<https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=access-to-servers>).
