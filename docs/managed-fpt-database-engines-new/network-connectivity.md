---
sidebar_class_name: hidden
sidebar_label: "Kết nối mạng và khả năng truy cập"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=network-connectivity"
parent: "https://fptcloud.com/documents/managed-fpt-database-engines-new"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Kết nối mạng và khả năng truy cập


* * *

Mục này mô tả cách ứng dụng kết nối đến database trong môi trường DBaaS, bao gồm endpoint, mô hình truy cập và các cơ chế kiểm soát bảo mật mạng.

### Endpoint kết nối Database

Database Endpoint là điểm truy cập được cung cấp để ứng dụng kết nối đến database. Tùy theo mô hình triển khai, endpoint có thể trỏ đến:

  * Một database instance (Single Node).
  * Một DB Proxy đại diện cho database cluster (HA).

Việc sử dụng endpoint giúp tách biệt logic ứng dụng khỏi kiến trúc database, giảm tác động khi có thay đổi hoặc failover.

### Truy cập Private và Public

FPT Database Engine hỗ trợ hai mô hình truy cập:

  * Private Access: Database chỉ cho phép kết nối từ mạng nội bộ (VPC/VNet), phù hợp cho hệ thống yêu cầu bảo mật cao.
  * Public Access: Database cung cấp endpoint public, cho phép kết nối từ Internet với các biện pháp bảo mật bổ sung.

Việc lựa chọn mô hình truy cập cần cân nhắc đến yêu cầu bảo mật, hiệu năng và kiến trúc ứng dụng.

### Security Groups và Floating IP

Trong môi trường DBaaS, Security Groups và Floating IP được sử dụng để kiểm soát và quản lý khả năng truy cập mạng đến database một cách linh hoạt và an toàn.

#### Security Groups

Security Group là tập hợp các rule firewall dạng stateful, cho phép hoặc từ chối lưu lượng mạng vào/ra database instance dựa trên:

  * IP address / CIDR
  * Port
  * Protocol

Security Groups giúp giới hạn phạm vi truy cập database theo nguyên tắc least privilege, chỉ cho phép các nguồn kết nối hợp lệ như:

  * Ứng dụng trong cùng VPC/VNet.
  * Bastion host hoặc hệ thống quản trị được ủy quyền.

Các thay đổi đối với Security Group có hiệu lực ngay lập tức và không yêu cầu khởi động lại database.

#### Floating IP

Floating IP là địa chỉ IP public có thể gán hoặc hủy gán động cho database instance, cho phép truy cập database từ Internet khi cần thiết.

Floating IP thường được sử dụng trong các trường hợp:

  * Kết nối từ hệ thống bên ngoài Cloud (on-premises, third-party services).
  * Truy cập quản trị hoặc vận hành tạm thời.
  * Môi trường testing hoặc tích hợp.

Khi sử dụng Floating IP, người dùng bắt buộc phải kết hợp với Security Groups để:

  * Giới hạn dải IP được phép truy cập.
  * Chỉ mở các port database cần thiết (ví dụ: 3306, 5432, 1433).

#### Lưu ý bảo mật:

  * Floating IP chỉ nên được bật khi thực sự cần thiết.
  * Khuyến nghị sử dụng Private Access cho môi trường production.
  * Luôn kiểm soát rule Security Group theo nguyên tắc minimum exposure.

[ Previous Mô hình triển khai ](./deployment-model) [ Next Bảo trì dịch vụ ](./maintenance)
