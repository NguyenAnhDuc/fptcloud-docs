---
sidebar_label: "Configure allow IP/CIDR"
title: "Configure allow IP/CIDR"
source: "https://fptcloud.com/en/documents/65101/?doc=Allow-IP-CIDR"
parent: "https://fptcloud.com/en/documents/65101"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Configure allow IP/CIDR


* * *

## How it Works

  * When a request is made to the Load Balancer, the system will check the source IP address of the request.
  * If the source IP address is within the allowed CIDR ranges, the request will be accepted and forwarded to the backend server.
  * If the source IP address is not within the allowed CIDR ranges, the request will be rejected and not forwarded.


## When to Configure Allowed CIDRs to the Load Balancer

  * **Enhance Security** : Prevent unwanted connections and reduce the risk of external attacks.
  * **Access Control** : Manage access to the Load Balancer by declaring a list of allowed CIDRs.
  * **Performance Optimization** : Reduce Load Balancer overhead by blocking unwanted traffic.


## Configuration Guide

**Step 1:** Log in to the Load Balancer homepage on the FPT Cloud Portal.

**Step 2:** On the Load Balancer homepage, click on the Load Balancer you want to configure.

**Step 3:** In the Load Balancer detail section, select the **Listener** tab.

**Step 4:** Click on the name of the Listener you want to configure to open the **Update** screen.

**Step 5:** In the Listener update screen, scroll down to the **Allow CIDRs Configuration** section.

  * Here, you can configure one or more IP ranges allowed to access.
  * If multiple ranges are needed, enter one CIDR block per line.
  * For example:


    
    
    192.168.0.0/24  
    172.16.0.0/24

This means only IP addresses within these two ranges are allowed to access the service.

**Step 6:** Click **Update Listener** at the bottom-right of the screen to apply the configuration.

## Notes

  * Only declare trusted CIDRs to avoid potential abuse.
  * After making changes, test access again to ensure the service works normally.
  * If you're using another firewall in front of the Load Balancer, such as FPT Cloud NGFW, make sure to configure the same CIDRs on that firewall.


[ Previous Enable HSTS to HTTPS Listener ](./enable-hsts-to-http-listener) [ Next Configure SNI for Load balancer ](./sni-load-balancer)
