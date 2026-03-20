---
sidebar_label: "2. Managed – FPT Database Engines"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Managed – FPT Database Engines

## Giới thiệu về FPT Database Engine

FPT Database Engine là dịch vụ Managed Database (DBaaS) được cung cấp trên nền tảng FPT Cloud, cho phép người dùng triển khai, vận hành và quản trị cơ sở dữ liệu mà không cần trực tiếp quản lý hạ tầng vật lý hoặc các tác vụ vận hành phức tạp. Dịch vụ được thiết kế nhằm đảm bảo tính sẵn sàng cao (High Availability), khả năng mở rộng linh hoạt (Scalability), an toàn dữ liệu (Data Security) và vận hành ổn định, phù hợp cho các hệ thống nghiệp vụ từ môi trường thử nghiệm đến môi trường sản xuất.

## Các hệ quản trị cơ sở dữ liệu được hỗ trợ

FPT Database Engine hỗ trợ nhiều hệ quản trị cơ sở dữ liệu phổ biến, đáp ứng đa dạng nhu cầu ứng dụng và kiến trúc hệ thống của doanh nghiệp, bao gồm:

  * **Relational Databases** : PostgreSQL, MySQL, MariaDB, Microsoft SQL Server
  * **Non-Relational Database** : MongoDB, Cassandra, Redis
  * **Search Engine** : OpenSearch
  * **Data Streaming** : RabbitMQ, Kafka
  * **Time Series Database** : TimescaleDB
  * **OLAP** : Clickhouse

Danh sách hệ quản trị và phiên bản cụ thể có thể thay đổi theo từng thời điểm và được công bố trên Console Portal.

## Tổng quan kiến trúc dịch vụ

FPT Database Engine được triển khai trên hạ tầng Cloud-native của FPT Cloud, tích hợp sẵn các thành phần vận hành và bảo vệ hệ thống, bao gồm:

  * Tài nguyên Compute, Storage và Network được phân bổ tự động.
  * Cơ chế High Availability (HA) và Failover.
  * Hệ thống Backup & Restore
  * Giám sát hiệu năng và trạng thái hệ thống theo thời gian thực

Người dùng tương tác với dịch vụ thông qua Unified Service Portal hoặc OpenAPI, không cần truy cập trực tiếp vào tầng hạ tầng bên dưới.

## Các tính năng chính

  * **Tự động triển khai** : Người dùng có thể nhanh chóng tạo mới Database Instance hoặc Database Cluster chỉ với vài bước cấu hình trên portal, bao gồm lựa chọn engine, phiên bản, cấu hình tài nguyên và chính sách sao lưu.
  * **Sao lưu và khôi phục dữ liệu** : FPT Database Engine hỗ trợ sao lưu tự động và thủ công, cho phép khôi phục dữ liệu nhằm giảm thiểu rủi ro mất dữ liệu.
  * **Mở rộng và quản lý tài nguyên** : Hệ thống cho phép mở rộng tài nguyên theo chiều dọc (Vertical Scaling) hoặc điều chỉnh cấu hình linh hoạt nhằm đáp ứng nhu cầu tải tăng trưởng.
  * **Giám sát và ghi log** : Người dùng có thể theo dõi các chỉ số quan trọng như CPU, Memory, Storage, … thông qua tích hợp với dịch vụ FMON của FPT Cloud.
  * **Bảo mật và tuân thủ** : FPT Database Engine áp dụng các cơ chế bảo mật ở nhiều lớp, bao gồm: 

    * Cách ly tài nguyên theo tenant.
    * Kiểm soát truy cập dựa trên vai trò (RBAC).
    * Tuân thủ các tiêu chuẩn bảo mật của nền tảng FPT Cloud.

  * **Phạm vi dịch vụ và trách nhiệm** : FPT Cloud chịu trách nhiệm quản lý hạ tầng, nền tảng và các tác vụ vận hành cốt lõi của hệ thống cơ sở dữ liệu. Người dùng chịu trách nhiệm quản lý dữ liệu, schema, truy cập ứng dụng và logic nghiệp vụ.

##  Trang chủ 

## Glossary 

  * [ Glossary ](./initial/fde-glossary)

## Concepts 

  * [ Version database engine ](./management/database-engine-version)
    * [ Chính sách version ](./management/version-policy)
    * [ Danh mục version hỗ trợ ](./management/version-list)
  * [ Mô hình triển khai ](./initial/deployment-model)
  * [ Kết nối mạng và khả năng truy cập ](./management/network-connectivity)
  * [ Bảo trì dịch vụ ](./management/maintenance)

## Thiết lập ban đầu (Initial Setup) 

  * [ Yêu cầu thiết lập ban đầu ](./initial/initial-setup)
  * [ Truy cập FPT Console Portal ](./initial/login-console)
  * [ Đăng ký tài khoản FPT Console Portal ](./initial/register-account)
  * [ Quyền truy cập dịch vụ FPT Database Engine ](./user-access/iam)
    * [ Quản lý Role ](./user-access/role-management)
    * [ Quản lý User Group ](./user-access/user-group-management)
  * [ Quản lý Subnet ](./management/subnet)

## Hướng dẫn chi tiết 

  * [ Quản lý dịch vụ FPT Database Engine ](./initial/db-engine-service)
    * [ Kích hoạt dịch vụ FPT Database Engine ](./initial/active-db-service)
    * [ Huỷ kích hoạt dịch vụ FPT Database Engine ](./initial/deactive-db-service)
  * [ Khởi tạo và vận hành cơ sở dữ liệu ](./management/db-manage-operate)
    * [ Xem danh sách cơ sở dữ liệu ](./management/view-db-list)
    * [ Khởi tạo cơ sở dữ liệu ](./initial/create-db)
    * [ Xem thông tin cơ sở dữ liệu ](./management/db-view-detail)
    * [ Kết nối cơ sở dữ liệu ](./management/db-connect)
    * [ Vận hành cơ sở dữ liệu ](./management/db-operation)
    * [ Nâng cấp phiên bản cho cơ sở dữ liệu ](./management/upgrade-version)
  * [ Backup & Restore ](./backup-restore/backup-restore)
    * [ Quản lý dịch vụ Backup ](./backup-restore/backup-mgmt)
    * [ Quản lý Job Backup ](./backup-restore/backup-job-mgmt)
    * [ Bật/tắt PITR ](./backup-restore/on-off-pitr)
    * [ Khôi phục cơ sở dữ liệu ](./backup-restore/restore-db)
    * [ Đẩy dữ liệu backup lên S3 ](./backup-restore/push-s3)
  * [ Quản lý tài nguyên cụm cơ sở dữ liệu ](./management/resource)
  * [ Quản lý Parameter ](./management/parameter)
  * [ Apache Kafka - Quản lý Kafka ACL ](./user-access/kafka-user)
  * [ DB Proxy ](./management/db-proxy)
  * [ Vertical Scaling ](./management/vertical-scaling)
  * [ Maintenance Window ](./management/maintenance-window)
  * [ Notification ](./monitoring/notification)
  * [ Monitoring ](./monitoring/monitoring)
  * [ Event Logs ](./monitoring/log)
  * [ Reporting ](./monitoring/reporting)
    * [ Xuất báo cáo thủ công (Report Export) ](./monitoring/report-export)
    * [ Lập lịch báo cáo tự động (Report Schedule) ](./monitoring/report-schedule)

## Peformance & Benchmark 

  * [ Kết quả Benchmark Sysbench ](./monitoring/benchmark-sysbench)

## Troubleshooting 

  * [ MySQL ](./user-access/mysql-troubleshooting)

## Các câu hỏi thường gặp (FAQs) 

  * [ Migration cho SQL Server ](./backup-restore/migration-cho-sqlserver)
  * [ ClickHouse - High Availability (HA) ](./user-access/clickhouse-use-ha)

08

