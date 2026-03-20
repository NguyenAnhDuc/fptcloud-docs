---
sidebar_label: "Configure timeout"
title: "Configure timeout"
source: "https://fptcloud.com/en/documents/65101/?doc=Configure-timeout"
parent: "https://fptcloud.com/en/documents/65101"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Configure timeout


* * *

## Timeout Configuration

The **Timeout** configuration feature for **Load Balancer** allows you to define the maximum duration a connection or request can exist before being terminated. This is essential for resource management and ensuring stable system performance.

### How It Works

  * When a connection or request is sent to the **Load Balancer** , the system starts tracking the allowed time for that connection.
  * If the connection is not completed or the request is not responded to within the specified time, it will be closed.
  * Configuring **Timeout** helps prevent hanging connections or requests that consume unnecessary resources.


The **Timeout** settings are configured during **Listener** creation. Users can refer to the guide **[here.](https://fptcloud.com/en/documents/65101/?doc=create-listener)**

[ Previous Create Listener ](./create-listener) [ Next Configure L7 policy ](./configure-l7-policy)
