---
sidebar_label: "Create Queues"
title: "Create Queues"
source: "https://fptcloud.com/en/documents/fpt-message-bus/?doc=Create-queues"
parent: "https://fptcloud.com/en/documents/fpt-message-bus"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Create Queues


* * *

**Step 1** : From the **Application** menu, navigate to **Queues** > Click **Create**

![](https://fptcloud.com/wp-content/uploads/2023/11/queue_create_1.png)

**Step 2** : Enter the necessary information:

  * **Name (required)** : The name of the queue.

  * **Max length** : The maximum amount of messages that can be held in a queue.

  * **Message TTL** : The amount of time that messages remain valid from the moment they are published. If it exceeds this time, the message will be lost.

  * **Overflow** : You can select from **drop_head** , **reject_publish** , or **reject_publish_DLX** modes.


![](https://fptcloud.com/wp-content/uploads/2023/11/queue_create_2.png)

_Note: Queue names follow the convention: q.[QUEUE_NAME]_

**Step 3** : Click **OK** to proceed with creating the queue.

[ Previous Manage Queues ](./manage-queues) [ Next View Queues ](./view-queues)
