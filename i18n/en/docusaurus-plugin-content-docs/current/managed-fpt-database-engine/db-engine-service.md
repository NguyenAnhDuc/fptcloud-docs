---
sidebar_label: "FPT Database Engine Service Management"
title: "FPT Database Engine Service Management"
source: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=db-engine-service"
parent: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# FPT Database Engine Service Management


* * *

The **FPT Database Engine Service Management** functions group plays a critical role in controlling database service availability in the FPT cloud. It allows administrators to activate or deactivate the FPT Database Engine Service offering within a VPC scope. Operations in this group impact the overall availability of database service and should only be granted to high-privilege roles such as Tenant Admin or Cloud Platform Admin. Proper role assignment ensures security, stability, and compliance for the DBaaS system.

**Required Permissions:**

Permission | Action Type | Description  
---|---|---  
manageDatabase:ProvisionBackend | Create | Allows activating the FPT Database Engine service within a VPC.  
manageDatabase:DeactiveBackend | Delete | Allows deactivating the FPT Database Engine service within a VPC.  
  
**Enable / Disable FPT Database Engine Service:**

To manage the FPT Database Engine service, please refer to the detailed instructions in [Activate FPT Database Engine Service](<https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=active-db-service>) and [Diactivate FPT Database Engine Service](<https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=deactive-db-service>).

[ Next Activate FPT Database Engine Service ](./active-db-service)
