---
sidebar_label: "Service Authorization Management"
title: "Service Authorization Management"
source: "https://fptcloud.com/en/documents/vpn-site-to-site/?doc=permission-access-guide"
parent: "https://fptcloud.com/en/documents/vpn-site-to-site"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Service Authorization Management


* * *

To assign permissions for another user to access the VPN Site-to-Site service within the same project, please follow the steps below:

**Step 1:** Log in using your admin account on the FCI console at <https://console.fptcloud.com/>

**Step 2:** Navigate to **IAM → Roles** ![](https://fptcloud.com/wp-content/uploads/2025/07/list_role.png)

**Step 3:** Click to create a new role, select the VPN service, and assign the appropriate permissions for the service.

![](https://fptcloud.com/wp-content/uploads/2025/07/2-1.png)

**Step 4:** Add another permission and select the Network service with the **“Network:List”** permission.

**Note:** For network ranges that use bare-metal servers, you need to add the **HPC:ListSubnet** permission. ![](https://fptcloud.com/wp-content/uploads/2025/07/3-2.png)

After completing all information, click **“Create role”** to create the role.

**Step 5:** Create a user group and assign the **“VPN_user”** role created in the previous step. ![](https://fptcloud.com/wp-content/uploads/2025/07/4-2.png)

**Step 6:** Go to the **User** tab and click **“Invite user”.** ![](https://fptcloud.com/wp-content/uploads/2025/07/5.png)

**Step 7:** Enter the user you want to grant VPN access to, and select the corresponding user group and roles. ![](https://fptcloud.com/wp-content/uploads/2025/07/6-1.png) **Step 8:** Check the email of the invited account and access the service to start using it. ![](https://fptcloud.com/wp-content/uploads/2025/07/h.png)

[ Previous Delete Customer gateway ](./delete-customer-gateway) [ Next Setting up alerts via the Cloud Guard service ](./setting-up-alerts-via-the-cloud-guard-service-guide)
