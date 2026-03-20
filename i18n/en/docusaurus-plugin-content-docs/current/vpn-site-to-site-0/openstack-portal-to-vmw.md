---
sidebar_label: "VPN Site-to-Site Configuration between Openstack portal and VMW"
title: "VPN Site-to-Site Configuration between Openstack portal and VMW"
source: "https://fptcloud.com/en/documents/vpn-site-to-site/?doc=openstack-portal-to-VMW"
parent: "https://fptcloud.com/en/documents/vpn-site-to-site"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# VPN Site-to-Site Configuration between Openstack portal and VMW


* * *

In this example, we will create a VPN Site-to-Site connection with the parameters shown in the topology below. 

![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765791265680.png)

# Step 1: Configure VPN_AAS on Openstack

Access and create a VPN Site-to-Site on <https://console.fptcloud.com>

-Tạo Customer Gateway 

+Remote IP public: is the floating IP of the VPN gateway VMW 

+Remote private network: is the Lan Subnet sequence that needs to be peered by VMW ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765791539886.png)

  * Create a VPN Connection With the parameter **"Pre-shared key"** that needs to be saved to be filled in when initiating a VPN Connection on VMW. 


The specifications of VPN Connection will include 3 main sections: 

  * General information (contains general information of the VPN connection) 
  * Remote VPN Information (contains encryption information and customer information) 
  * Dead Peer Detection (the number of times the system automatically retries to connect when there is a problem) 


**Section 1: General information**

![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765791650959.png)

**Section 2: Remote VPN information**

![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765791876602.png)

If you select Providers = **"others"** , then follow these steps: 

  * Step 1: Fill up providers name = "VMWare" 

  * Step 2: Fill in the information for IKE and IPSec, specifically as follows: 


**For IKE:**

  * Encryption algorithm: aes-256 
  * Authorization algorithm: sha256 
  * IKE version: ikev2 
  * Lifetime units: seconds 
  * Lifetime value: 28800 
  * DH Group: GROUP_14 
  * Phase1 negotiation mode: main 


**For IPsec:**

  * Encapsulation mode: tunnel 
  * Encryption algorithm: aes-256 
  * Authorization algorithm: sha256 
  * Lifetime units: seconds 
  * Lifetime value: 3600 
  * Perfect forward secrecy (PFS): GROUP_14 
  * Transform protocol: esp 


**Section 3: Dead Peer Detection** ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792370389.png)

After filling in all the information, please select "**Create VPN Connection** " 

# Step 2: Configure VPN_AAS on VMWare Cloud

-Go to the VMWare system to set up, then click **Next**. ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792401303.png) -In the Peer Authentication tab, with the Pre-shared key parameter, enter the key you have created in OSP, then click **Next.** ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792447086.png)

  * Enter the **Endpoint Configuration fields** ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792537442.png)
  * After creation, select **Customize Security Profile** to edit the IKE policy, IPSec policy to match the IKE policy, IPSec policy created in OSP. ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792592112.png)
  * Select **View statistics** , to check the connection status. If the display status is **UP** , → have successfully connected between the 2 sites.file ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792630730.png) ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792651631.png) **Step 3: Check the connection** Ping from VM OPS -> VM VMWare ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792700896.png) Ping from VM VM WMare-> VM OSP ![file](https://fptcloud.com/wp-content/uploads/2025/12/image-1765792717595.png)


[ Previous VPN Site-to-Site Configuration between FCI and AWS (Transit-Gateway) ](./vpn-site-to-site-configuration-between-fci-and-aws-\(transit-gateway\)-guide) [ Next VPN Connection Management ](./vpn-connection-management)
