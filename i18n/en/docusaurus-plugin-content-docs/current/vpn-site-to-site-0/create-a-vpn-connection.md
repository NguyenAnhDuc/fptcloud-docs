---
sidebar_label: "Create a VPN Connection"
title: "Create a VPN Connection"
source: "https://fptcloud.com/en/documents/vpn-site-to-site/?doc=create-a-vpn-connection"
parent: "https://fptcloud.com/en/documents/vpn-site-to-site"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Create a VPN Connection


* * *

**Step 1:** On the VPN Connection List screen, click **Create VPN Connection** to create a new connection. ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744180675487.png) **Step 2:** Initialize the VPN Gateway and click **Next**. ![file](https://fptcloud.com/wp-content/uploads/2025/04/image-1744180812846.png) **Step 3:** Enter the VPN Connection information. The required configuration fields for creating a VPN connection are as follows:

**Field** | **Description**  
---|---  
**VPN name** | Name of the VPN connection. It’s recommended to use an easy-to-remember name (e.g., vpn_to_aws).  
**Description** | Short description (optional) to help distinguish between different connections.  
**Pre-shared key** | Shared security key between both sides (can be manually defined or system-generated).  
**Local IP Public** | Public IP address on the FPT side.  
**Local private networks** | Internal network ranges to be connected (enter in CIDR format; multiple entries supported).  
**IPSec policy** | Encryption policy for Phase 2  
**IKE policy** | Encryption policy for Phase 1  
**Customer gateway name** | List of Customer Gateways you have created (to add a new Customer Gateway, please follow the [guide here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-customergw>)).  
**Delay** | Waiting time between retry attempts (in seconds).   
  
**Note:** To ensure stable connectivity and minimize interruption risks, we **recommend configuring the _DPD Delay_ and _Max Failure_ parameters on the FCI side to match those on your partner device** (e.g., **AWS, Fortigate...**) in the VPN connection.   
  
**For providers:**   
**AWS:** | Delay| Max failure  
---|---  
## | 3  
  
**Fortigate:** Delay| Max failure  
---|---  
## | 3  
If you adjust configuration parameters on the provider side, **please update the corresponding settings on the FCI side** to ensure compatibility and maintain optimal VPN connection stability.  
**Max failures** | Maximum number of retry attempts before the connection is marked as failed.  
  
**Step 4:** Click **Create VPN Connection** to complete the setup. ![](https://fptcloud.com/wp-content/uploads/2025/06/6219884231644005829.jpg)

[ Previous VPN Connection Management ](./vpn-connection-management) [ Next Edit VPN Connection ](./edit-vpn-connection)
