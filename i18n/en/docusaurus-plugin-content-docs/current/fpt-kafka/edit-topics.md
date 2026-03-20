---
sidebar_label: "Edit Topics"
title: "Edit Topics"
source: "https://fptcloud.com/en/documents/fpt-kafka/?doc=edit-topics"
parent: "https://fptcloud.com/en/documents/fpt-kafka"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Edit Topics


* * *

The system provides functionality to edit specific topic details, such as adding partitions to a topic and deleting records within a partition, etc.

First, to add partitions to a topic, follow these instructions:

**Step 1** : Select the topic to add partitions to > Click **Detail**.

**Step 2** : Switch to **Partition** tab > Click **Add** > Click **Yes, I understand**

![](https://fptcloud.com/wp-content/uploads/2023/08/Picture1_AddPartition.png)

**Step 3** : Enter the number of partitions to add 

![](https://fptcloud.com/wp-content/uploads/2023/08/Picture2_AddParrtition.png)

**Step 4** : Click **OK** to complete

Furthermore, if you want to delete records in certain partitions, you can use the **Empty** function of Kafka.

To do this, follow these steps:

**Step 1** : Select the topic to edit > Click **Detail**.

**Step 2** : Switch to **Partition** tab > Select the partition to delete records from > Click **Empty**.

![](https://fptcloud.com/wp-content/uploads/2023/08/Pic1_Empty.png)

**Step 3** : Click **Yes** in the confirmation dialog to delete

After this action, the total number of records in that partition will be zero.

Additionally, you can delete all records within a topic. Simply choose the topic to erase records > Click **Empty** to complete the process. 

![](https://fptcloud.com/wp-content/uploads/2023/08/Pic2_Empty.png)

Note that performing this action will erase all records across all partitions of that topic.

[ Previous View Topics ](./view-topics) [ Next Delete Topics ](./delete-topics)
