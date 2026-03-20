---
sidebar_label: "Access to GPU VM"
title: "Access to GPU VM"
source: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=access-to-servers"
parent: "https://fptcloud.com/en/documents/gpu-virtual-machine-en"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Access to GPU VM


* * *

When a **GPU VM running Ubuntu** is successfully created on the **FPT Portal** , users can access it by default through the built-in **Web Console**. 

Additionally, users can connect externally using **SSH clients** or third-party software such as **PuTTY** or **Bitvise**. 

### Connect to a GPU VM via Web Console

The **Web Console** allows users to control all GPU VMs on FPT Cloud, even those **without a Public IP**. 

**Step 1:** On the **Side menu** , go to **Instance Management** , find the virtual machine you want to access, and under the **Actions** section, select **Console**. 

![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-1.png)

**Step 2:** The browser will immediately open a new window displaying the server screen, allowing you full control and interaction with the connected server. 

![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-2.png)

### SSH to Connect to a GPU VM

You can connect to a **GPU VM** using an **SSH client** , typically from a terminal. 

To do so, you need to have the following three pieces of information: 

  * **The public IP address:** After your GPU VM is created and allocated a public IP, it is displayed in the GPU VM list or the GPU VM details page. 

  * **The username:** The default username on the server during initial creation is **root**. 

  * **The authentication method** for that user. If you added **SSH keys** to your GPU VM, you can connect using those keys, which we strongly recommend for its additional security. Otherwise, if you use password authentication, use the password you chose.


Once you have your GPU VM’s **public IP address** , **username** , and **password or SSH key** , follow the instructions below for your SSH client. 

#### Step 1: Open Your Terminal

  * **On Linux/macOS:** Launch the **Terminal** app. 

  * **On Windows:** Use **CMD** , **PowerShell** , **Git Bash** , or **WSL**. 


#### Step 2: Connecting to Your VM

You can connect to your VM in two ways: using a **password** or an **SSH key (.pem file)**. 

##### Method 1: Connect Using a Password


    
    
    ssh <username>@<VM_IP>

##### Method 2: Connect Using an SSH Key (.pem file)


    
    
    cd <path_to_pem_file_directory>


    
    
    ssh -i "<your_key_file.pem>" <username>@<VM_IP>

![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-3.png)

  3. On your first connection, type **yes** to verify the host’s fingerprint and continue. 

  4. You have successfully connected to the server via SSH. Type **exit** to close the SSH session and return to your local shell. 


![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-4.png)

Note:

If you see the error: **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!** , it means the saved SSH fingerprint for the server has changed. To fix it, run the following command to remove the old fingerprint: 
    
    
    ssh-keygen -R "<VM_IP>"
