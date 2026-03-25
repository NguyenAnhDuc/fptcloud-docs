---
sidebar_label: "VPN Site-to-Site Configuration with Palo Alto"
title: "VPN Site-to-Site Configuration with Palo Alto"
source: "https://fptcloud.com/en/documents/vpn-site-to-site/?doc=VPN-Site-to-Site-Configuration-with-Palo-Alto-guide"
parent: "https://fptcloud.com/en/documents/vpn-site-to-site"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# VPN Site-to-Site Configuration with Palo Alto


* * *

You must ensure the following conditions are met:

  * The VPN Site-to-Site service is set up on the FPT Cloud Portal.

  * A Palo Alto firewall is installed and enabled on the customer's side.

  * The Palo Alto firewall has been configured with three IP addresses: **Management (Public IP) - WAN (Public IP) - LAN.**


## **Step 1:** Configure VPN Site-to-Site

Access and create the VPN Site-to-Site on <https://console.fptcloud.com/>

**-Create a Customer Gateway:**

  * Remote private network: LAN subnet range for peering with Palo Alto

  * Remote IP public: Public IP address of Palo Alto


![](https://fptcloud.com/wp-content/uploads/2025/07/photo_1_2025-07-09_17-34-04.jpg)

**-Create a VPN Connection:**

A VPN connection includes three main sections:

  * **General Information** (contains general connection details)

  * **Remote VPN Information** (contains encryption and customer-side information)

  * **Dead Peer Detection** (number of automatic retries if the connection encounters issues)


**Section 1: General Information**

![](https://fptcloud.com/wp-content/uploads/2025/07/photo_2_2025-07-09_17-34-04.jpg)

Note: The Pre-shared key value should be saved for configuration on Palo Alto.

**Section 2: Remote VPN Information**

![](https://fptcloud.com/wp-content/uploads/2025/07/photo_3_2025-07-09_17-34-04.jpg)

When selecting the provider “Palo Alto,” the system automatically fills in the IKE and IPsec information as follows: **For IKE:**

  * Encryption algorithm: aes-256

  * Authorization algorithm: sha256

  * IKE version: ikev2

  * Lifetime units: seconds

  * Lifetime value: 28800

  * DH Group: GROUP_14

  * Phase 1 negotiation mode: main


**For IPsec:**

  * Encapsulation mode: tunnel

  * Encryption algorithm: aes-256

  * Authorization algorithm: sha256

  * Lifetime units: seconds

  * Lifetime value: 3600

  * Perfect forward secrecy (PFS): GROUP_14

  * Transform protocol: esp


**Section 3: Dead Peer Detection** ![](https://fptcloud.com/wp-content/uploads/2025/08/Screenshot-2025-08-18-110311-14.png)

Enter the **Delay** and **Max failure** values, then click **Create VPN Connection.**

## **Step 2: Configure IPsec on Palo Alto**

  * Log in to Palo Alto via the Management IP: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194232470.png)

  * Click **Add** and activate the Palo Alto Zone. ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194240732.png)

  * Create a Virtual Router on Palo Alto and click **OK**. ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194248910.png)

  * Create WAN and LAN interfaces (for example, ethernet1/1 and ethernet1/2). ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194257003.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194266348.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194276204.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194290319.png)

  * Create an IKE Crypto profile. ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194301359.png)

  * Create an IPSec Crypto profile. ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194310783.png)

  * Go to IPsec Tunnels:


-In the General tab, enter Peer Address as the IP from FPT created in Step 1 (e.g., 103.176.147.48). ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194319286.png) -In the Advanced Options tab, fill in the required details: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194330142.png) \- Create GlobalProtect IPSec: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194338236.png)

  * Create IPSec Tunnels: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194345834.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194370901.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194404210.png)


## **Step 3: Configure Firewall and Routing on Palo Alto**

To configure the firewall and routing on Palo Alto, follow the example below:

  * Open any firewall policy.


![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194387472.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194396699.png) ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194478669.png)

Depending on your environment, configure the source and destination according to the rule.

  * Configure routing between the two subnets 30.30.30.0/24 and 80.80.80.0/24 (adjust according to your actual source and destination networks).


![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194487401.png)

At this point, you can open the Terminal / Command Line to test network connectivity using ping.

[ Previous Common VPN Device Configuration ](./common-vpn-device-configuration) [ Next VPN Site-to-Site Configuration with Fortigate ](./vpn-site-to-site-configuration-with-fortigate-guide)
