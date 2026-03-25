---
sidebar_label: "IAM"
title: "IAM"
source: "https://fptcloud.com/en/documents/iam-2/"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# IAM


IAM


:::info
🇻🇳 **Phiên bản tiếng Việt:** [Đọc bằng tiếng Việt](/iam)
:::


FPT Identity & Access Management (FPT IAM) is a feature that allows tenant owners to share access to resources on their FPT Cloud to other users with different permissions. Some basic concepts in FPT IAM:

  * Role: The user's role in the organization, which specifies the permissions that the user is capable of exercising. 

    * Currently, FPT IAM supports 2 basic roles: Super Admin and Readonly. If these 2 Roles don't meet your needs, you can create your own Custom Roles with custom permission sets.

    * Each role has a list of permissions.

  * Permission: determines what features the user has permission to perform on which resource. Each permission belongs to 1 role.

  * User group: A group of users with the same role (by tenant or VPC).

  * IAM users: Users who are added to the tenant, have access to the resources in the tenant according to the assigned role.


Tenant owners have full control over all VPC resources, including decentralization. This account will be assigned the ORG Admin role by default. To use IAM, the Tenant Owner first needs to create Roles and permissions for roles (Instance manager, Data analyst,...) and create User groups that are assigned the corresponding Roles.

  * For the created User group, the Tenant owner can select and customize the Role and Permission accordingly.

  * Decentralize permissions by inviting more IAM users to the User group via email.

  * After receiving the invitation, IAM users can register/log in or log in through the organization's SSO to FPT Portal according to the instructions and use the resources in the invited VPC/Tenant.


This article will provide you with the information you need to know before you start using FPT IAM, how to initialize and manage it.

##  Home page 

## Initial Setup 

  * [ Initial Setup ](./initial-setup)


## Tutorials 

  * [ Role Management ](./role-management)
    * [ Overview ](./role-overview)
    * [ View role list ](./view-role-list)
    * [ Create a Role and Assign Permissions to the Role ](./create-a-role-and-assign-permissions-to-the-role)
    * [ View Role Details ](./view-role-detail)
    * [ Edit roles and permissions ](./edit-role-and-permissions)
    * [ Delete role ](./delete-role)
  * [ Manage User Groups ](./manage-user-groups)
    * [ Overview ](./overview-user-group)
    * [ Create a new User Group ](./create-user-group)
    * [ View list User group ](./view-list-user-group)
    * [ View detail User group ](./view-detail-user-group)
    * [ Edit User group ](./edit-user-group)
    * [ Delete user group ](./delete-user-group)
  * [ Manage IAM Users ](./manage-iam-users)
    * [ Overview ](./overview-iam-user)
    * [ Invite new IAM users ](./invite-new-iam-users)
    * [ Create an account and access the invited VPC ](./create-an-account-and-access-the-invited-vpc)
    * [ Change password ](./change-password)
    * [ 2FA configuration ](./2fa-configuration)
  * [ IP Access ](./ip-access)
    * [ Overview ](./overview-ip-access)
    * [ Create a new IP access record ](./create-ip-access)
    * [ Delete IP access record. ](./delete-ip-access-record.)
    * [ Check Activity logs ](./check-activity-logs)


