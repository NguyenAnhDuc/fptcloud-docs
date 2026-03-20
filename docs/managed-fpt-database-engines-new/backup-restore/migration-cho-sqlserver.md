---
sidebar_label: "2. Managed – FPT Database Engines"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=Migration-cho-SQLServer"
parent: "https://fptcloud.com/documents/managed-fpt-database-engines-new"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Migration cho SQL Server


* * *

**1\. Export Data Tier Application via SSMS tool**

Connect to a SQL instance and expand databases in the object explorer. Right-click on a database in SSMS and you get data-tier application options as shown below.

![](/img/docs/d4365f710a37-1_Export_1.jpg)

Right-click on the source SQL Database and click on Export Data-tier application. It launches an introduction page. This introduction page defies the summary and high-level steps for this wizard. The high-level steps are as follows:

![](/img/docs/d3f52e181479-1_Export_2.jpg)

Click **Next** , and it takes you to the **Export setting** page.

![](/img/docs/7490f5a791c1-1_Export_3.jpg)

Let’s use a local disk directory, as shown below.

![](/img/docs/8c6e3dca1191-1_Export_4.jpg)

By default, it extracts all schema, tables (with data) available in the database. We can also filter selected objects in the advanced page select all database schema, tables in the advanced tab of this page. Click on the advanced tab and review the objects. It groups objects per schema such as dbo.

![](/img/docs/63599b2c83f8-1_Export_5.jpg)

We are not using any object filtering in BACPAC export. It will create an export for all tables in the database. Click on Next and review the configurations.

![](/img/docs/836722b955b3-1_Export_6.jpg)

Click **Finish** , and it starts the export of the database. You can see the success message for each step.

![](/img/docs/3d69fcc14a14-1_Export_7.jpg)

We can browse to the directory and verify a BACPAC extension file exists.

![](/img/docs/64c675075e28-1_Export_8.jpg)

**2\. Import a BACPAC file using SSMS Import Data-tier Application wizard**

We can copy this BACPAC file to destination SQL instance having either on-premise or Azure SQL Database. Right-click on the connected destination instance and launch **Import Data-tier applications** wizard.

![](/img/docs/9edba26201da-2_Import_1.jpg)

Click **Next** , and it takes you to the import settings page. Here, we specify the path of a BACPAC file either from the local disk or Microsoft Azure Storage container. We used local disk storage during the import process so, select the local disk option and browse to the directory containing required BACPAC package.

![](/img/docs/83efdecd34db-2_Import_2.jpg)

In the next page, we specify a setting for the new database. We cannot use an existing SQL Database for importing a BACPAC package.

It also requires input for the data and log file of this new database. By default, it shows you default data and log file location of connected SQL instance. We can change it per requirement.

![](/img/docs/e974b6e3e89e-2_Import_3.jpg)

Modify the new database name. In my demonstration, I specified AdventureWorksDW_BACPAC name for SQL Database. Click **Next** and view summary.

![](/img/docs/737faea7c8e7-2_Import_4.jpg)

The next page is a summary page showcasing your configurations. I recommend you always review it before proceeding. You can easily navigate back and make the required changes.

![](/img/docs/1775aa973a39-2_Import_5.jpg)

Click **Finish** , and you can see the following steps. • Creates a new database • Imports schema and data into this new database • Disables indexes • Inserts data into tables • Enable indexes

![](/img/docs/044eccdb747d-2_Import_6.jpg)

![](/img/docs/7ba3e5021b78-2_Import_7.jpg)

Refresh the object explorer, and you see the newly restored database.

[ Next ClickHouse - High Availability (HA) ](./clickhouse-use-ha)
