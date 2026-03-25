---
sidebar_label: "Managed – FPT Database Engine"
title: "2. Managed – FPT Database Engine"
source: "https://fptcloud.com/documents/managed-fpt-database-engine/"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engine


Managed – FPT Database Engine



### 1\. Giới thiệu về FPT Smart Cloud Database Engine:

**FPT Smart Cloud Database Engine** là sản phẩm phục vụ cho việc triển khai và quản lý database cho doanh nghiệp.

Sản phẩm này cho phép tạo một database (SQL, non-SQL) trên cụm cluster ảo mà không cần setup chi tiết các thông số như phải làm trên máy chủ vật lý. Các hệ database mà FCI cung cấp bao gồm:

  * MySQL
  * SQL Server
  * MongoDB
  * MariaDB
  * PostgreSQL
  * Redis

Mỗi hệ database đều có nhiều version cho KH lựa chọn và FCI sẵn sàng hỗ trợ việc chuyển đổi giữa các version với cùng 1 loại database.

### 2\. Thuật ngữ & Định nghĩa:

|   
---|---  
**Thuật ngữ** | **Định nghĩa**  
**Database** | Cơ sở dữ liệu  
**Relational Database** | Cơ sở dữ liệu có quan hệ: các bảng trong cơ sở dữ liệu có mối liên quan tới nhau thông qua 1 trường thông tin nào đó. Sử dụng SQL để truy vấn  
**Non-relational Database** | Cơ sở dữ liệu phi quan hệ: Các bảng trong cơ sở dữ liệu phân tán và không bị ràng buộc với nhau. Không dùng SQL để truy vấn  
**SQL (Structure querry language)** | Ngôn ngữ truy vấn có cấu trúc: Ngôn ngữ lập trình phục vụ việc lưu trữ – tìm kiếm – xử lý thông tin trong các loại database có quan hệ  
**Cluster** | Là 1 cụm máy chủ (vật lý hoặc ảo) dùng làm tài nguyên để chạy 1 chương trình gì đó (ở đây là database)  
**Node** | Là 1 máy worker trong cụm cluster  
**VCPU (cloud)** | Là lõi xử lý của 1 máy chủ ảo trên cloud. Tính theo gigabite (GB)  
**RAM (cloud)** | Là tổng bộ nhớ ngẫu nhiên của máy chủ ảo trên cloud. Tính theo GB  
**Storage disk (cloud)** | Là ổ lưu trữ của máy chủ ảo trên cloud. Tính theo GB  
**Backup Job** | Tạo ra 1 công việc tự động lưu trữ dữ liệu theo 1 khoảng thời gian nhất định  
**Full Backup** | Là việc backup toàn bộ data của database: Bao gồm cả data cũ lẫn data đã sửa đổi kể từ lần backup trước  
**Diff Backup** | Là việc chỉ backup các phần data được thay đổi hoặc tạo mới so với bản backup gần nhất  
**Restore** | Là việc sử dụng 1 bản sao lưu đã backup dữ liệu để tạo 1 database trên 1 cụm cluster mới với thông tin đã sao lưu  
  
##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Pre- requirement 

  * [ Tạo Security Groups ](./initial/tao-security-groups)
  * [ Tạo Floating IP ](./tạo-floating-ip)
  * [ Tạo Subnets ](./tạo-subnets)
  * [ Phân quyền tính năng Database ](./management/phan-quyen-tinh-nang-database)
    * [ Roles ](./management/roles)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Provision Database Engine ](./initial/provision-database-engine)
    * [ Khởi tạo Database Engine ](./initial/khoi-tao-database-engine)
    * [ Thao tác với Database Engine ](./management/thao-tac-voi-database-engine)
  * [ Quản lý Backups ](./backup-proxy/quan-ly-backups)
    * [ Tạo Backups service ](./backup-proxy/tao-backups-service)
    * [ Cập nhật và xóa Backup job ](./backup-proxy/cap-nhat-va-xoa-backup-job)
    * [ Cập nhật và xóa Backup Service ](./backup-proxy/cap-nhat-va-xoa-backup-service)
  * [ Quản lý Restore ](./backup-proxy/quan-ly-restore)
  * [ Quản lý Resource ](./management/quan-ly-resource)
  * [ Quản lý Configuration ](./management/quan-ly-configuration)
  * [ Quản lý Process Monitoring ](./management/quan-ly-process-monitoring)
  * [ Quản lý Event Logs ](./management/quan-ly-event-logs)
  * [ DB Proxy ](./backup-proxy/db-proxy)
    * [ Khởi tạo DB Proxy ](./backup-proxy/khoi-tao-db-proxy)
    * [ Thao tác với DB Proxy ](./backup-proxy/thao-tac-voi-db-proxy)

