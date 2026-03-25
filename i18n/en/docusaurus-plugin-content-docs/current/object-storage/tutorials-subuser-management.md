---
sidebar_label: "Subuser Management"
title: "Subuser Management"
source: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-subuser-management"
parent: "https://fptcloud.com/en/documents/fpt-object-storage"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Subuser Management


* * *

**SubUser** in FPT Object Storage is a sub-user created with limited access rights. An admin can assign roles to SubUsers such as **Full, Read-Write, Read Only** , or **None** depending on the usage needs.

FPT Object Storage supports five basic roles:

  * **None:** No access to the bucket.
  * **Read:** Read-only access.
  * **Write:** Write-only access.
  * **Read - Write:** Read and write access.
  * **Full:** Full access rights, including bucket configuration actions.


Using SubUsers helps you manage security and access rights more efficiently for your buckets.

## Creating a New SubUser

**Step 1:** In the menu, select **Object Storage** , and open the **SubUser** tab. Choose a **Region**. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1692690748583.png) **Step 2:** Select **Create SubUser**.

**Step 3:** Enter the necessary information:

  * **Name:** A memorable name.
  * **Access level:** Choose a Role for the SubUser.


**Step 4:** Select **Create** , and the system will create a SubUser with the provided information.

## Editing the Role of a SubUser

**Step 1:** In the SubUser you want to edit, select **Edit**. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1692690757949.png) **Step 2:** Choose a new Role and click **Save**.

## Deleting a SubUser

**Step 1:** In the SubUser you want to delete, select **Delete**. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1692690771897.png) **Step 2:** A confirmation dialog will appear, displaying the SubUser's name and requesting user confirmation. Choose **Delete** to proceed.

## Managing SubUser Access Key

Each SubUser can have a maximum of 2 SubUser Access Keys.

### A. Creating a SubUser Key

**Step 1:** In the SubUser where you want to create a Key, select **Access Key**.

**Step 2:** Choose **Generate Key**. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1692690782948.png) **Step 3:** The system will automatically generate a new key pair consisting of an **Access Key** and a **Secret Key**. You need to copy and securely store these two keys. Then select **Confirm access key**.

### B. Deleting an Access Key

After deleting an Access Key, any clients using this key pair will lose access. You can delete it on the FPT Portal by following these instructions:

**Step 1:** In the SubUser where you want to delete a Key, select **Access Key**.

**Step 2:** In the **Action** section of the Key to be deleted, select **Delete**. ![file](https://s3-sgn10.fptcloud.com/image-fptcloud-documention/fpt-object-storage/image-1692690794178.png) **Step 3:** A confirmation dialog will appear, displaying the **Access Key** name and requesting user confirmation. Choose **Delete** to proceed.

[ Previous Access Key Management ](./tutorials-access-key-management) [ Next Using Object Storage on S3 Browser ](./tutorials-using-object-storage-on-s3-browser)
