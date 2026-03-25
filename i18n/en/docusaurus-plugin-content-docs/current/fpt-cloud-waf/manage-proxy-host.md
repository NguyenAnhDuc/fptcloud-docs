---
sidebar_label: "Manage Proxy Host"
title: "Manage Proxy Host"
source: "https://fptcloud.com/en/documents/fpt-cloud-waf-2/?doc=manage-proxy-host"
parent: "https://fptcloud.com/en/documents/fpt-cloud-waf-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Manage Proxy Host


* * *

**Step 1:** In the **WAF Dashboard** , select **Hosts** > **Proxy**. Choose**Create Proxy.**

![Userguide FPT WAF 2022 5](https://fptcloud.com/wp-content/uploads/2022/11/Userguide-FPT-WAF-2022-5-1024x538.png)

**Step 2:** Enter the information as instructed.

![Userguide FPT WAF 2022 6](https://fptcloud.com/wp-content/uploads/2022/11/Userguide-FPT-WAF-2022-6-1024x538.png)

  * Enter **Source** information:

  *     * **Hostname** : Enter the domain name
    * **Port** : Default is 80; if there is an SSL Certificate, you can choose port 443.
  * Enter **Destination** information:

  *     * **Forward Scheme** : Choose http/https
    * **Forward Hostname/IP** : Enter the **Public IP** or **Domain** of the Web Server. If WAF server and Web Server are in the same subnet, you can use the **IP Private.**
    * **Forward Port:** : Enter the port used by the Web Server.

**Note:** Forward Port is the port opened for connection on the Web Server.


Select additional features based on user needs, such as:

  * **Cache Assets:**
  * **Block Common Exploits**
  * **Websockets Support**


Additionally, select the following information:

  * **Rule Set:** By default, FPT Cloud WAF's rules set will be applied. Users can add custom rule sets on the "Add New Rule File" screen and select from there.
  * **Access List:** Add a new access list on the Access List screen to select and apply it to the proxy host.
  * **SSL Certificate:** Choose the corresponding SSL Certificate for the domain/website. The SSL Certificate needs to be created before selection; if not available, choose None. ![Userguide FPT WAF 2022 6](https://fptcloud.com/wp-content/uploads/2022/11/Userguide-FPT-WAF-2022-6-1024x538.png)


**Step 3:** Select **Create Proxy** to create the Proxy host

[ Previous Monitor WAF server with Dashboard Overview ](./monitor-waf-server-with-dashboard-overview) [ Next Manage Redirection Host ](./manage-redirection-host)
