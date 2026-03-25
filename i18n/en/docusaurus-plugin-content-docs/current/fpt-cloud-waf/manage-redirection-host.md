---
sidebar_label: "Manage Redirection Host"
title: "Manage Redirection Host"
source: "https://fptcloud.com/en/documents/fpt-cloud-waf-2/?doc=manage-redirection-host"
parent: "https://fptcloud.com/en/documents/fpt-cloud-waf-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Manage Redirection Host


* * *

**Redirection Hosts** is a feature that redirects a website or changes a URL to another website URL, displaying the content of the redirected address.

To configure/add a new **Redirection Host** follow these steps:

**Step 1:** Select **Hosts** > **Redirection** from the menu to open the **Redirection Host** management screen. Choose **Create Redirection**.

![Userguide FPT WAF 2022 26](https://fptcloud.com/wp-content/uploads/2022/11/Userguide-FPT-WAF-2022-26-1024x515.png)

**Step 2:** Enter the **Redirection Host** information as follows:

  * **Domain Names:** Enter the domain/website name to be added. The domain name in the Redirection Host must not match the domain name of any created Proxy Host.
  * **Forward Scheme:** Choose the method for the domain/website (auto/http/https).
  * **Forward Domain:** Enter the domain/website to be redirected.
  * **HTTP Code:** Choose the redirection options for the website.


Some additional features, depending on user needs:

  * **Preserve Path**.
  * **Block Common Exploits**.
  * **SSL Certificate** : ![Userguide FPT WAF 2022 27](https://fptcloud.com/wp-content/uploads/2022/11/Userguide-FPT-WAF-2022-27-1024x515.png)


**Step 3:** Select **Save** to save. The detailed view of the Redirection Host appears as follows:

![Userguide FPT WAF 2022 28](https://fptcloud.com/wp-content/uploads/2022/11/Userguide-FPT-WAF-2022-28-1024x517.png)

**Other functions:**

**Toggle** : Disable/enable the Redirection Host, corresponding to active/inactive status.

**Edit** : Edit Redirection Host information.

**View** : View detailed information about the Redirection Host.

**Delete** : Remove the Redirection Host.

[ Previous Manage Proxy Host ](./manage-proxy-host) [ Next Manage Stream Host ](./manage-stream-host)
