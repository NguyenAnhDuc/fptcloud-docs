---
sidebar_label: "Managed – FPT Database Engine"
title: "Managed – FPT Database Engine"
source: "https://fptcloud.com/en/documents/managed-fpt-database-engine-2/"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Managed – FPT Database Engine


Managed – FPT Database Engine


:::info
🇻🇳 **Phiên bản tiếng Việt:** [Đọc bằng tiếng Việt](/managed-fpt-database-engine)
:::


## Introduction about FPT Database Engine

FPT Database Engine is a Managed Database service (DBaaS) provided on the FPT Cloud platform. It enables users to provision, operate, and manage databases without the need to directly handle underlying infrastructure or complex operational tasks.

The service is designed to deliver high availability, elastic scalability, data security, and operational stability, supporting workloads from development and testing to production environments.

## Supported Database Engines

FPT Database Engine supports a wide range of popular database management systems to meet diverse application and architecture requirements, including:

  * **Relational Databases** : PostgreSQL, MySQL, MariaDB, Microsoft SQL Server
  * **Non-Relational Database** : MongoDB, Cassandra, Redis
  * **Search Engine** : OpenSearch
  * **Data Streaming** : RabbitMQ, Kafka
  * **Time Series Database** : TimescaleDB
  * **OLAP** : Clickhouse


The supported engines and versions may vary over time and are published on the Console Portal.

## Service Architecture Overview

FPT Database Engine is built on the cloud-native infrastructure of FPT Cloud and comes with integrated operational and protection components, including:

  * Automated allocation of compute, storage, and network resources
  * Built-in high availability (HA) and failover mechanisms
  * Backup & restore capabilities
  * Real-time performance and health monitoring


Users interact with the service via the Unified Service Portal or OpenAPI, without direct access to the underlying infrastructure layer.

## Key Features

  * **Automated Provisioning** : Users can quickly provision a new database instance or cluster through a simple configuration process on the portal, including engine selection, version, resource sizing, and backup policies
  * **Backup and Recovery** : Database Engine supports both automated and manual backups, enabling recover to minimize data loss risks.
  * **Scaling and Resource Management** : The service allows vertical scaling and flexible resource configuration to accommodate changing workload demands.
  * **Monitoring and Logging** : Users can monitor key metrics such as CPU, memory, storage, … through integration with FPT Cloud's FMON service.
  * **Security and Compliance** : Database Engine implements multi-layer security mechanisms, including: 

    * Tenant-level resource isolation.
    * Role-based access control (RBAC).
    * Compliance with FPT Cloud security standards.

  * **Service Scope and Responsibilities** : FPT Cloud is responsible for managing the infrastructure, platform, and core operational tasks of the database system. Users are responsible for managing data, schemas, application access, and business logic.


##  Home page 

## Glossary 

  * [ Glossary ](./fde-glossary)


## Concepts 

  * [ Database Engine Version ](./database-engine-version)
    * [ Version Policy ](./version-policy)
    * [ Supported Versions ](./version-list)
  * [ Deployment Models ](./deployment-model)
  * [ Networking and Connectivity ](./network-connectivity)
  * [ Maintenance ](./maintenance)


## Initial Setup 

  * [ Initial Setup Requirements ](./initial-setup)
  * [ Register an account ](./register-account)
  * [ Accessing FPT Console Portal ](./access-console)
  * [ FPT Database Engine Right Management ](./iam)
    * [ Role Management ](./role)
    * [ User Group Management ](./user-group)
  * [ Subnet Management ](./subnet)


## Tutorials 

  * [ FPT Database Engine Service Management ](./db-engine-service)
    * [ Activate FPT Database Engine Service ](./active-db-service)
    * [ Deactivate FPT Database Engine Service ](./deactive-db-service)
  * [ Database Provisioning and Operation ](./db-manage-operate)
    * [ View Database List ](./view-db-list)
    * [ Provision Database ](./create-db)
    * [ View database cluster information ](./db-view-detail)
    * [ Connect to the Database ](./db-connect)
    * [ Database Operations ](./db-operation)
    * [ Upgrade Database Engine Version ](./upgrade-version)
  * [ Backup & Restore ](./backup-restore)
    * [ Backup Service Management ](./backup-mgmt)
    * [ Backup Job Management ](./backup-job-mgmt)
    * [ Enabling/Disabling PITR ](./on-off-pitr)
    * [ Database Recovery ](./restore-db)
    * [ Push backup to S3 ](./push-s3)
  * [ Database Resource Management ](./resource)
  * [ Parameter Management ](./param)
  * [ Apache Kafka - User Management ](./kafka-user)
  * [ DB Proxy ](./db-proxy)
  * [ Vertical Scaling ](./vertical-scaling)
  * [ Maintenance Window ](./maintenance-window)
  * [ Notification ](./notification)
  * [ Monitoring ](./monitoring)
  * [ Event Logs ](./logs)
  * [ Reporting ](./report)
    * [ Manual Report Export ](./report-export)
    * [ Report Schedule ](./report-schedule)


## Peformance & Benchmark 

  * [ Sysbench Benchmark Results ](./benchmark-sysbench)


## Troubleshooting 

  * [ MySQL ](./mysql-troubleshooting)


## FAQs 

  * [ ClickHouse - High Availability (HA) ](./clickhouse-use-ha)


08


