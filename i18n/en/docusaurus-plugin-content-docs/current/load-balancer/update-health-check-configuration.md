---
sidebar_label: "Update health check configuration"
title: "Update health check configuration"
source: "https://fptcloud.com/en/documents/65101/?doc=Update-health-check-configuration"
parent: "https://fptcloud.com/en/documents/65101"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Update health check configuration


* * *

**Health check** is a crucial feature of the **Load Balancer** used to ensure the availability and performance of backend servers. **Health check** enables the **Load Balancer** to detect which servers or services are functioning properly and automatically remove the ones that are not available from the **Load Balancer.**

**How it works:**

  * **Periodic health checks:** The Load Balancer periodically performs health checks on the servers or targets in the pool. These checks can include Ping, HTTP GET requests, or other custom checks.
  * **Identify unavailable servers/issues:** If a server or target fails to respond or returns an error during a health check, the Load Balancer considers it unavailable.
  * **Remove unavailable servers/issues:** Once identified as unavailable, the Load Balancer stops routing traffic to that server for a period. This prevents traffic from being sent to non-functional servers, maintaining service availability.


**Benefits:**

  * **Increased availability:** Health checks ensure that only available servers or services receive traffic. This helps improve service uptime and prevents traffic from being sent to offline servers.
  * **Optimized performance:** The Load Balancer automatically adjusts the traffic distribution by removing unhealthy servers, which helps maintain system performance and avoid overloads.
  * **Automated management:** Health checks provide automated management of server/service availability, reducing the need for manual intervention.
  * **Security:** By removing non-operational servers, the Load Balancer helps prevent traffic from being sent to insecure or malfunctioning servers.


**Types of Health Check Configurations:**

  * **HTTP/HTTPS health check** when creating a **Server Pool** using **TCP/Proxy** protocol.
  * **TCP health check** when creating a **Server Pool** using **TCP/Proxy** protocol.
  * **PING health check** when creating a **Server Pool** using **UDP** protocol.


To configure the different types of **Health check** , follow the instructions below:

  * **Protocol:** Select the appropriate protocol that matches the **Server Pool** protocol based on the table below:

**Health Monitor / Pool** | **HTTP** | **HTTPS** | **PING** | **SCTP** | **TCP** | **TLS-HELLO** | **UDP-CONNECT**  
---|---|---|---|---|---|---|---  
HTTP | Y | Y | Y | N | Y | Y | N  
HTTPS | Y | Y | Y | N | Y | Y | N  
PROXY | Y | Y | Y | N | Y | Y | N  
PROXYV2 | Y | Y | Y | N | Y | Y | N  
SCTP | Y | N | N | Y | Y | N | Y  
TCP | Y | Y | Y | N | Y | Y | N  
UDP | Y | N | N | Y | Y | N | Y  
  
[ Previous Add/Remove member to/from Server Pool ](./add/remove-member) [ Next Manage SSL Certificate ](./manage-ssl-certificate)
