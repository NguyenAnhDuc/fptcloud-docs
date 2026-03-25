---
sidebar_label: "Configure redirect from HTTP requests to HTTPS"
title: "Configure redirect from HTTP requests to HTTPS"
source: "https://fptcloud.com/en/documents/65101/?doc=redirect-http-to-https"
parent: "https://fptcloud.com/en/documents/65101"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Configure redirect from HTTP requests to HTTPS


* * *

To ensure **data protection and integrity** , users can choose to **redirect all HTTP traffic to HTTPS** by following these steps:

* * *

**Step 1:** Create a new **Listener** using the **HTTP protocol on port 80** , then enable the **Redirect HTTP to HTTPS** feature in the **L7 policy configuration** screen of this **Listener**. Users can refer to the instructions on how to create a **Listener** **[here.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener)**

> **Note:** The newly created **HTTP Listener on port 80** does not need to be attached to a corresponding Server Pool, since all **HTTP requests will be redirected to HTTPS** automatically.

* * *

**Step 2:** Create a new **Listener** using the **HTTPS protocol on port 443** to handle HTTPS requests. Attach the appropriate **Server Pool** and **SSL Certificate** to the **Listener**. Users can refer to the instructions on how to create a **Listener** **[here.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener)**  
If there is no existing **SSL Certificate** , users can refer to the certificate import instructions **[here.](https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer)**

* * *

Finally, verify that **HTTP access is automatically redirected to HTTPS.**

[ Previous Configure L7 policy ](./configure-l7-policy) [ Next Redirect prefix ](./redirect-prefix)
