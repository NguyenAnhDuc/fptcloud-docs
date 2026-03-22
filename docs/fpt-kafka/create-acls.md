---
sidebar_label: "Create ACLs"
title: "Create ACLs"
source: "https://fptcloud.com/en/documents/fpt-kafka/?doc=create-acls"
parent: "https://fptcloud.com/en/documents/fpt-kafka"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Create ACLs


* * *

**ACLs** help users assign permissions, limiting the operations of principals on each topic or group. The permissions include Write, Read, from different IP addresses.

To create ACLs, follow these instructions:

**Step 1** : From the menu, navigate to **Application** > **ACLs**. Click Create

**Step 2** : Enter the necessary information:

  * **Credential** (required): Select a previously created credential

  * **Resource Type** (required): Topic or Group.

If you choose **Topic** , it means you are assigning permissions for the user to use the topic, similarly if you choose **Group**.

  * **Pattern Type** (required): Literal or Prefixed.

If **Literal** is selected, it means you have read/write permissions for only one topic that you declare in the “Topic” field. If **Prefixed** is chosen, you will have read/write permissions for all topics with the prefix displayed in the “Resource name” field.

  * **Host** (optional): If you want to block access from different IPs, you can enter a value in this field.

  * **Operation** (required): Assign read or write permissions for topic/group

  * **Permission** (required): Allow or Deny.


![](https://fptcloud.com/wp-content/uploads/2023/08/Pic1_ACL.png)

**Step 3** : Click **OK** to complete.

[ Previous Manage ACLs ](./manage-acls) [ Next Delete ACLs ](./delete-acls)
