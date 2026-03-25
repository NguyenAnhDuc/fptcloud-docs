---
sidebar_label: "Monitoring"
title: "Monitoring"
source: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=monitoring"
parent: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Monitoring


* * *

The Monitoring feature provides real-time visibility into the operational health, performance, and resource utilization of database clusters on FPT Cloud. It collects and visualizes key metrics and logs, enabling you to:

  * Detect anomalies early.
  * Evaluate query workload.
  * Take proactive actions to optimize availability and performance.


Monitoring in FPT Database Engine integrates with FPT Monitoring to collect database metrics and logs, and provides dashboards and alerts when required.

This guide describes how to access, configure, and use Monitoring to track the health and performance of database clusters in the FPT Cloud Portal.

### Step 1: Access Monitoring

Log in to FPT Cloud Portal. From the main menu, select **Database Platform → All Databases**. Click the ID of the target database cluster. Swich to the “**Monitor** ” tab to access the feature. The screen behavior depends on the Monitoring activation status:

  * Monitoring not enabled: The system displays a page prompting you to contact FPT Support. Contact the support team to enable Monitoring.


![](https://fptcloud.com/wp-content/uploads/2024/01/monitor-not-available-scaled.png)

  * Monitoring enabled: The system displays a list of database-specific metrics and logs. Metrics or logs that are not integrated with FPT Monitoring show Intergrated Status = “Disabled”.


![](https://fptcloud.com/wp-content/uploads/2024/01/monitor-enable.png)

### Step 2: Integrate/disintegrate monitoring

  * **Integrate monitoring** : Disables metric/log collection for a database cluster. To integrate, on Workspace List, select “**Integrate** ” for the target workspace. Confirm the action in the warning dialog to complete. After successful integration, **Integrated Status** changes to “**Enabled** ”, FPT Monitoring starts collecting the corresponding metrics.
  * **Disintegrate monitoring** : Disables metric/log collection for a database cluster. To disintegrate, on **Workspace List** , select “**Disintegrate** ” for the target workspace. Confirm the action in the warning dialog to complete. After successful disintegration, Intergrated Status changes to “**Disabled** ”, FPT Monitoring stops collecting the corresponding metrics.


### Step 3: View workspace information

After monitoring integration is successful (Integrated Status = “**Enabled** ”), select the workspace name to open the workspace details page. On this page, you can access information: Monitoring dashboards, Contact points và Datasources.

![](https://fptcloud.com/wp-content/uploads/2024/01/view-workspace-detail.png)

### Step 4: View monitoring information

You can view dashboards that display real-time and historical metrics on Grafana by selecting the Dashboard URL, which redirects you to the sign-in page.

![](https://fptcloud.com/wp-content/uploads/2024/01/login-grafana.png)

Enter the **Basic Authentication – Username** and **Basic Authentication – Password** provided on the workspace details page and click Login to access the Grafana homepage.

![](https://fptcloud.com/wp-content/uploads/2024/01/grafana-home.png)

#### View metrics:

Click “**Toggle Menu** ” > select “**Dashboards** ”. The Dashboards page is displayed. Select the template that matches the database engine type to view available.

![](https://fptcloud.com/wp-content/uploads/2024/01/metric-dashboard.png)

Select a folder to view the corresponding metric:

![](https://fptcloud.com/wp-content/uploads/2024/01/metric-dashboard1.png)

#### View Logs:

Click “**Toggle Menu** ” > choose “**Explore** ”:

![](https://fptcloud.com/wp-content/uploads/2024/01/dashboard-log1-1.png)

Choose “**Loki** ”:

![](https://fptcloud.com/wp-content/uploads/2024/01/dashboard-log2.png)

In the label filter field, select the label to view the logs.

![](https://fptcloud.com/wp-content/uploads/2024/01/dashboard-log-filter.png)

In the value filter field, select the instance to view the logs.

![](https://fptcloud.com/wp-content/uploads/2024/01/dashboard-log-runquery.png)

Logs information are displayed as below:

![](https://fptcloud.com/wp-content/uploads/2024/01/dashboard-log-view.png)

[ Previous Notification ](./notification) [ Next Event Logs ](./logs)
