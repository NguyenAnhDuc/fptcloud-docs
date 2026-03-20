---
sidebar_label: "How to monitor container"
title: "How to monitor container"
source: "https://fptcloud.com/en/documents/gpu-container/?doc=logs-and-monitoring"
parent: "https://fptcloud.com/en/documents/gpu-container"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# How to monitor container


* * *

GPU Container provides **container logs** and **metrics** to help you monitor and troubleshoot your workloads. To view your logs and metrics, open the Details Container screen, open the Logs or Monitoring tab. This gives you container logs and metrics monitoring, making it easy to diagnose issues or monitor your container’s activity. 

## Container Logs

Container logs include all application logs. Note that logs are only kept for 14 days, and timestamps are shown in the UTC time zone. . ![Alt text](https://fptcloud.com/wp-content/uploads/2025/08/Logs_screen.png)


## Metric Monitoring

Monitoring metrics are collected to track the performance, availability, and resource usage of containerized services, helping detect issues and optimize operations. Note that metric data is retained for 14 days.

There are 4 metric groups: 

  * **Utilization metrics** : Monitor CPU, memory, and GPU usage to assess system performance and resource efficiency. 

  * **Disk metrics** : Track disk read/write speed, and latency to detect storage issues or bottlenecks. 

  * **Network metric** : Measure network traffic, latency, and errors to identify connectivity problems and ensure service reliability. 

  * **Temperature and Power metrics** : Monitor hardware temperature and power consumption to prevent overheating and maintain hardware health ![Alt text](https://fptcloud.com/wp-content/uploads/2025/08/Monitoring_screen.png)


  2. **Refresh** : Interval at which the container metrics are automatically updated.


[ Previous How to manage container ](./manage-container) [ Next Templates ](./templates)
