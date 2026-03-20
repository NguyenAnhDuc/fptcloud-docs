---
sidebar_label: "Create a Role and Assign Permissions to the Role"
title: "Create a Role and Assign Permissions to the Role"
source: "https://fptcloud.com/en/documents/iam-2/?doc=Create-a-Role-and-Assign-Permissions-to-the-Role"
parent: "https://fptcloud.com/en/documents/iam-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Create a Role and Assign Permissions to the Role


* * *

To create a new Custom Role, follow these steps:

**Step 1** : From the menu, select **IAM** > **Roles** , then click **Create Role**.

![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344082428.png)

**Step 2** : On the Create Role page, enter the required information:

![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344107230.png)

  * **Name** : Enter a name for the role (required). The name can be up to 100 characters long and must consist of letters, numbers, underscores, hyphens, spaces, and dots. The name must be unique.

  * **Description** : Provide a description of the role (optional).

  * **Permissions** : Includes three components:

  * **Service Type** : A list of system services (e.g., compute, storage, networking).

  * **Action** : Actions available for the selected service (e.g., Create Instance, Edit Instance, Delete Instance).

  * **Resource** : The resources the user is authorized to interact with.


**Step 2.1** : Select **Service Type**

  * Click the dropdown list to choose a service type.


![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344121975.png)

**Step 2.2** : Select **Action**

  * After selecting a service type, the system will display the list of actions for that service.

  * Select actions to assign permissions.


![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344178335.png)

**Step 2.3** : Select resources for the chosen actions. There are two options:

  * **All** : Assign permissions to all resources within the tenant (all Projects and VPCs under the tenant).


![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344193185.png)

  * **Specific** : Assign permissions to specific resources.

  * For virtual machine services: You can assign permissions to individual VMs.


![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344207802.png)

  * For other services: Permissions can be assigned at the Project or VPC level.


![file](https://fptcloud.com/wp-content/uploads/2024/12/image-1734344228919.png)

**Step 3** : Click **Create**. The system will process the request and display the result.

[ Previous View role list ](./view-role-list) [ Next View Role Details ](./view-role-detail)
