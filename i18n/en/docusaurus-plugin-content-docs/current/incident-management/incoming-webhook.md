---
sidebar_label: "Incoming Webhook"
title: "Incoming Webhook"
source: "https://fptcloud.com/en/documents/incident-management-2/?doc=incoming-webhook"
parent: "https://fptcloud.com/en/documents/incident-management-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Incoming Webhook


* * *

After integrating the **Incoming webhook** integration, view its details by clicking **Show details**. The system will provide you with:

  * **Token**

  * **URL** : Incoming webhook URL, used to POST incidents.


![](https://fptcloud.com/wp-content/uploads/2023/11/Screenshot_3.png)

To push an accident to an incoming webhook, send a POST request to the webhook. An example using _curl_ :
    
    
    curl "https://api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" --request POST --header 'Authorization: a9210eeee765e209c6a81a13e957574e' --header 'Content-Type: application/json' --data '{"report":{"title":"cool that this title comes from the json"}}'

[ Previous Configure Integrations ](./configure-integrations) [ Next Outgoing Webhook ](./outgoing-webhook)
