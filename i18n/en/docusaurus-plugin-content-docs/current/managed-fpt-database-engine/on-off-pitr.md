---
sidebar_label: "Enabling/Disabling PITR"
title: "Enabling/Disabling PITR"
source: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=on-off-pitr"
parent: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Enabling/Disabling PITR


* * *

The **Point-in-Time Recovery (PITR)** feature allows users to restore a database to a specific point in the past, ensuring data continuity and reliability.

Currently, **FPT Cloud supports PITR for the PostgreSQL engine**. This section provides detailed instructions on how to enable or disable PITR for PostgreSQL.

### 1\. Enabling PITR

Users can **enable PITR for PostgreSQL** either **during the Backup service activation** (see Section [Enable Backup Service](<https://fptcloud.com/en/documents/managed-fpt-database-engine-2/?doc=backup-mgmt#contentify_0>)) or **after the Backup service has already been activated** by following the instructions below.

#### Prerequisites:

To enable PITR, the database must have at least one Full Backup Job configured. Please create a Full Backup Job before proceeding with PITR activation.

If PITR is enabled without an existing Full Backup Job, the system will display a warning dialog.

![](https://fptcloud.com/wp-content/uploads/2024/01/DBaaS_BackupDB_pitr_enable_warning.png)

Select **Configure Now** to complete the creation of a Full Backup Job before proceeding with PITR activation.

#### PITR enabling instructions:

On the Backup service management screen, click **Enable PITR** (gear icon next to the PITR status).

![](https://fptcloud.com/wp-content/uploads/2024/01/DBaaS_BackupDB_pitr_enable.png)

The system will display a confirmation dialog.

![](https://fptcloud.com/wp-content/uploads/2024/01/DBaaS_BackupDB_pitr_enable_popup.png)

Enabling PITR will increase storage usage and incur additional costs. Users should evaluate and estimate the expected storage consumption before proceeding.

To enable the feature, select the confirmation checkbox and click **Confirm**.

After activation, PITR does not take effect immediately. The system must first create the next Full Backup. Once PITR becomes available, you can restore the database to any point in time starting from that Full Backup. Any data changes that occurred before this Full Backup are not protected by PITR and cannot be restored.

### 2\. Disabling PITR

To disable PITR, in the Backup service management screen, click the **Disable PITR** button (gear icon next to the PITR status). The system displays a confirmation dialog:

![](https://fptcloud.com/wp-content/uploads/2024/01/DBaaS_BackupDB_pitr_disable_popup.png)

Enter “**disable** ” and click **Confirm** to proceed. Once PITR is disabled, **you will no longer be able to restore the database to any point in the past.**

[ Previous Backup Job Management ](./backup-job-mgmt) [ Next Database Recovery ](./restore-db)
