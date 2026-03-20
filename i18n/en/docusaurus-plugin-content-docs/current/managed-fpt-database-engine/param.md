---
sidebar_label: "Parameter Management"
title: "Parameter Management"
source: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=param"
parent: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Parameter Management


* * *

### Overview:

In a database management system (DBMS), a parameter is a configuration value that helps adjust and control the characteristics and behavior of the system during runtime. These parameters can affect performance, memory, timeouts, optimization mechanisms, and other aspects of the database system.

Each parameter has specific values that can be changed depending on the database administrator's needs to optimize the system's operation. Parameters can be classified as dynamic or static, and each type has a different way of being applied.

  * **Dynamic Parameter** : These parameters can be changed while the database is running without needing a restart.
  * **Static Parameters** : These parameters require a database restart to take effect.


Understanding and managing parameters correctly is crucial for ensuring the system operates smoothly, efficiently, and meets user requirements.

In FPT Database Engine, the **Parameter Management** feature allows users to view and update the configuration parameters of a running database cluster directly on the FPT Cloud Portal. When updating dynamic parameters, the new values will be applied immediately after the operation is completed without disrupting the service. When updating static parameters, the system will automatically restart the database to apply the new values.

### Required Permisisons:

Permission | Action Type | Description  
---|---|---  
manageDatabase:Configuration | Edit | Allows modifying database configuration such as parameters, and scaling configurations.  
  
### Update direction:

The following steps describe how to update a parameter value for a database cluster:

#### Step 1: Open the Parameter management page

Sign in to the FPT Cloud Console. Open the **Database list** page > Select the database cluster ID to open the details page > Select the **Configure params** tab to open the parameter management page. The parameter management page is displayed.

![](https://fptcloud.com/wp-content/uploads/2024/01/view-param-scaled.png)

#### Step 2: Select the parameter type

Select the parameter type you want to update:

  * Dynamic Params
  * Static Params


#### Step 3: Update parameter

Click the **Edit** (pencil icon) on the parameter you want to modify. The **Update Configure Params** dialog displays detailed metadata of the selected parameter and allows users to update its value within defined constraints.

![](https://fptcloud.com/wp-content/uploads/2024/01/update-param-scaled.png)

Review the parameter details (data type, minimum and maximum values), then update the value in the “**Value** ” field within the allowed range and select “**Update** ” to apply the change.

### Best Practices:

  * Adjust parameters gradually and monitor performance impact.
  * Prefer dynamic parameters to minimize downtime.
  * Schedule maintenance windows for static parameter changes.
  * Document all configuration changes for audit purposes.


[ Previous Database Resource Management ](./resource) [ Next Apache Kafka - User Management ](./kafka-user)
