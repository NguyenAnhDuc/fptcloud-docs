---
sidebar_label: "Incoming webhook"
title: "2. Incident Management"
source: "https://fptcloud.com/documents/incident-management/?doc=incoming-webhook"
parent: "https://fptcloud.com/documents/incident-management"
lang: vi
converted: "2026-03-19"
---

# 2. Incident Management


A. Incoming webhook


* * *

Sau khi cài đặt thành công Incoming webhook, xem chi tiết thông tin incoming webhook, click **Show details**

![](/img/docs/8a7004f48701-Screenshot_27.png)

![](/img/docs/222663b73ef5-Screenshot_28.png)

  * Token: chuỗi ký tự dùng để xác thực 

  * URL: incoming webhook url, dùng để POST incident 

Ví dụ sau minh họa cách đẩy 1 incident bằng incoming webhook:

$ curl "api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" --request POST --header 'Authorization: a9210eeee765e209c6a81a13e957574e' --header 'Content-Type: application/json' --data '{"report":{"title":"cool that this title comes from the json"}}'

[ Previous Cấu hình Integrations ](./cau-hinh-integrations) [ Next B. Grafana webhook ](./grafana-webhook)
