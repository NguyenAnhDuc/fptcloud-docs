---
sidebar_label: "VPN Site-to-Site Configuration with Fortigate"
title: "VPN Site-to-Site Configuration with Fortigate"
source: "https://fptcloud.com/en/documents/vpn-site-to-site/?doc=VPN-Site-to-Site-Configuration-with-Fortigate-guide"
parent: "https://fptcloud.com/en/documents/vpn-site-to-site"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# VPN Site-to-Site Configuration with Fortigate


* * *

You must ensure the following conditions are met:

  * VPN Site-to-Site has been created on the Portal
  * Fortigate has been installed, enabled, and licensed on the customer side
  * Fortigate has been configured with LAN and WAN IPs


## Step 1: Configure VPN Site-to-Site

Access and create a VPN Site-to-Site connection on <https://console.fptcloud.com/> .

**-Create a Customer Gateway:**

  * **Remote private network** : LAN subnet range to be peered with Fortigate

  * **Remote IP public:** Public IP of Fortigate ![](https://fptcloud.com/wp-content/uploads/2025/07/photo_1_2025-07-09_17-37-35.jpg)


**-Create a VPN Connection:**

**The “Pre-shared key” value should be saved for configuration on Fortigate.**

The VPN connection includes three main sections:

  * General Information (contains basic connection details)

  * Remote VPN Information (contains encryption and customer-side details)

  * Dead Peer Detection (number of automatic retries if the connection encounters issues)


**Section 1: General Information** ![](https://fptcloud.com/wp-content/uploads/2025/07/photo_2_2025-07-09_17-37-35.jpg) **Section 2: Remote VPN Information** ![file](https://fptcloud.com/wp-content/uploads/2025/07/image-1757055954440.png)

When selecting the provider “Fortigate,” the system automatically fills in the IKE and IPsec information as follows:

**For IKE:**

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


**Section 3: Dead Peer Detection** ![](https://fptcloud.com/wp-content/uploads/2025/08/Screenshot-2025-08-18-110311.png)

Enter the **Delay** and **Max failures** values, then click Create VPN Connection.

## Step 2: Configure IPsec on Fortigate

  * Log in to the Fortigate web interface: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744193935450.png)

  * Select IPsec Wizard: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744193947980.png)

  * Go to IPsec Tunnels:


-Enter the IP Address of FPT created in Step 1

-Select the WAN interface (if multiple WANs exist, specify the one you want to use). ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744193964825.png)

Check the connection status on the FPT Smart Cloud Portal: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744193984133.png)

  * Enable Local Gateway and select Primary IP ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744193993723.png)

  * Set the Method to Pre-shared Key and enter the same key as in Step 1: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194001749.png)


**Note: If the customer’s setup is behind NAT, configure as shown below and contact L3-FPT Smart Cloud for support.** ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194012256.png)

  * Configure Phase 1 as follows: ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194042329.png)


If NAT is not used, ensure that NAT mode is disabled.

  * Configure Phase 2 as follows:


-Local IP: The customer’s network range to be connected ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194053329.png)

## Step 3: Configure Firewall and Routing on Fortigate

  * Set the firewall to Allow All for both incoming and outgoing traffic as shown below:


**From FPT Cloud to Fortigate:** ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194062973.png)

**From Fortigate to FPT Cloud:** ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194072242.png)

**Connection successfully established between FPT Cloud and Fortigate:** ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194081090.png)

  * Set the routing as shown below, where Destination is the FPT-side network (e.g., FCI – 172.30.205.0/255.255.255.0) and Interface is the IPsec Tunnel created in the previous step.


![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744194099241.png) At this point, you can open the Terminal / Command Line and test network connectivity using ping.

[ Previous VPN Site-to-Site Configuration with Palo Alto ](./vpn-site-to-site-configuration-with-palo-alto-guide) [ Next VPN Site-to-Site Configuration between FCI and AWS (Virtual private gateways) ](./vpn-site-to-site-configuration-between-fci-and-aws-\(virtual-private-gateways\)-guide)
