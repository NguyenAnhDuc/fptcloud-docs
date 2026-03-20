---
sidebar_label: "Enable HSTS to HTTPS Listener"
title: "Enable HSTS to HTTPS Listener"
source: "https://fptcloud.com/en/documents/65101/?doc=enable-hsts-to-http-listener"
parent: "https://fptcloud.com/en/documents/65101"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Enable HSTS to HTTPS Listener


* * *

**HSTS (HTTP Strict Transport Security)** is a security policy that helps prevent "man-in-the-middle" attacks by requiring browsers to always use a secure connection (HTTPS) when communicating with the server.

The **“Enable HSTS to HTTPS Listener”** feature of **FPT Load Balancer** allows you to enhance your application’s security by enforcing HTTPS-only communication from the browser.

Users can refer to the guide for creating a **Listener** [here.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener)

> _Note: To use this feature, under the Protocol section, users must select the TERMINATED_HTTPS protocol and attach an SSL Certificate from the available list to the Listener. If no SSL Certificate is available, users can refer to the guide on how to create one[here.](https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer)_

To use the feature, enable **HSTS** and configure the following:

  * **HSTS max age:** Enter a positive integer (up to 256 characters). Default value is `31536000`.

The duration (in seconds) during which the browser will enforce the HSTS policy. This determines how long the browser will remember that a site should only be accessed via HTTPS.

  * **Include Subdomain:** Specifies whether HSTS applies to all subdomains or just the current domain.

  * **Preload:** Indicates whether the domain should be included in the browser’s preload list.


Click **Create Listener** to proceed, or **Cancel** to abort.

[ Previous Manage Listener ](./manage-listener) [ Next Configure allow IP/CIDR ](./allow-ip-cidr)
