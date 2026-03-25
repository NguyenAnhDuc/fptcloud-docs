---
sidebar_label: "To create a topic, follow these steps:"
title: "Quick Starts"
source: "https://fptcloud.com/en/documents/fpt-kafka/?doc=quick-starts"
parent: "https://fptcloud.com/en/documents/fpt-kafka"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Quick Starts


* * *

### 1\. Logging in to the FPT Kafka Service

To create a new **Kafka** account, you need to be allocated with service quota. Contact us for more detail.

**Step 1** : From the FPT Cloud Portal menu, select **Integrations** > **Kafka Service**.

![](https://fptcloud.com/wp-content/uploads/2023/08/Picture1_HDNhanh_DN.png)

**Step 2** : Click **Create** > Enter the **workspace name**.

![](https://fptcloud.com/wp-content/uploads/2023/08/Pic2.png)

**Step 3** : Click **Create**. The system will initialize the service and provide processing status notifications.

After successfully creating the account, users will be automatically redirected to the **Kafka Service** administration page.

Alternatively, you can access the **Kafka Service** administration page by navigate to the **Kafka Service** page and click **Start** on the instance you would like to access.

### 2\. Create Topics

To create a topic, follow these steps:

**Step 1** : From the menu, navigate to **Application** > **Topic**. click **Create**.

**Step 2** : Enter the necessary information:

  * **Name** (required): The name of the topic

  * **Partitions** (required): The number of partitions for the topic

  * **Replication Factor** (required):

  * **Cleanup Policy** (required):

  * **Advanced Configuration** (optional)


![](https://fptcloud.com/wp-content/uploads/2023/08/Pic2_Taotopic.png)

**Step 3** : Click **OK** to proceed with creating the topic.

**Note** : The topic name must follow the format **_[prefix].[topic name]_**

### 3\. Create Credentials

Users can create **Credentials** (username/password pair) for Kafka Service’s connection configuration using the _SASL/SCRAM-SHA-256_ authentication method.

**Step 1** : From the menu, navigate to **Application** > **Credentials**. Click **Create**

**Step 2** : Enter the necessary information"

  * **Username** (required)

  * **Password** (required) 


![](https://fptcloud.com/wp-content/uploads/2023/08/Pic1_Taocre.png)

**Note** : Initially, the system will auto-generate a password. You can reset the password if needed.

**Step 3** : Click **OK** to create the credential.

**Note** : The topic name must follow the format **_[prefix].[credential name]_**

### 4\. Create ACLs

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

### 5\. Create Consumer Groups

A consumer group is a group of consumers. A consumer can be any application that has the function of subscribing to a topic and consuming messages.

To create a consumer group, do the following:

**Step 1** : From the menu, navigate to **Application** > **Consumer Groups**. Click Create.

**Step 2** : Enter the necessary information:

  * **Group Name** (required): The name of the group you want to create

  * **Offset strategy** (required)

  * **Topic** (required)


**Note** : A consumer group can subscribe to multiple topics.

![](https://fptcloud.com/wp-content/uploads/2023/08/Pic1_TaoGr.png)

**Step 3** : Click **OK** to successfully create the group.
