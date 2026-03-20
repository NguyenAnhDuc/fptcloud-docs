---
sidebar_label: "Configure RBAC Policy"
title: "Configure RBAC Policy"
source: "https://fptcloud.com/en/documents/fpt-argocd-2/?doc=Configure-RBAC-policy"
parent: "https://fptcloud.com/en/documents/fpt-argocd-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Configure RBAC Policy


* * *

**ArgoCD** supports user authorization using **RBAC (role-based access control) policy** config. By default, newly created users will only have read-only rights when logging into the system. FPT Cloud supports **user-configurable** RBAC policy through the user interface:

**Step 1** : From the **Security & Access** tab > **RBAC** > **Update**

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture76.png)

**Step 2** : Enter RBAC configuration:

For example: 
    
    
    p, role:staging-db-admins, clusters, create, staging-db-admins/, allow
    p, role:staging-db-admins, clusters, update, staging-db-admins/, allow
    p, role:staging-db-admins, clusters, delete, staging-db-admins/, allow
    p, role:staging-db-admins, clusters, get, *, allow

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture77.png)

**Step 3** : Click **Save** to apply the configuration

Result after saving:

![](https://fptcloud.com/wp-content/uploads/2023/11/Picture78.png)

To delete configured policies, update and delete the policy line you would like to remove. Steps are identical to Updating.

[ Previous Configure Build Options for Kustomize ](./configure-build-options-for-kustomize) [ Next Upgrading ArgoCD Version ](./upgrading-argocd-version)
