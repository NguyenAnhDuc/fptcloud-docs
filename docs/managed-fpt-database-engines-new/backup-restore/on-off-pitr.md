---
sidebar_label: "Bật/tắt PITR"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=on-off-pitr"
parent: "https://fptcloud.com/documents/managed-fpt-database-engines-new"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Bật/tắt PITR


* * *

Chức năng **Point-in-Time Recovery (PITR)** cho phép người dùng khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ, giúp đảm bảo tính liên tục và độ tin cậy của dữ liệu.

Hiện tại, **FPT Cloud hỗ trợ PITR cho engine PostgreSQL**. Phần hướng dẫn này cung cấp các bước chi tiết để bật hoặc tắt chức năng PITR cho PostgreSQL.

### 1\. Bật PITR

Người dùng có thể bật chức năng PITR cho PostgreSQL ngay khi kích hoạt dịch vụ Backup (tham khảo chi tiết tại mục [Kích hoạt dịch vụ Backup](<https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-mgmt#contentify_0>)) hoặc bật sau khi dịch vụ Backup đã được kích hoạt theo hướng dẫn bên dưới.

#### Điều kiện tiên quyết:

Để kích hoạt PITR, cơ sở dữ liệu bắt buộc phải có ít nhất một job backup full đã được tạo. Vui lòng cấu hình job backup full trước khi tiếp tục bật PITR.

Trong trường hợp bật PITR khi chưa cấu hình Full Backup Job, hệ thống sẽ hiển thị hộp thoại cảnh báo như sau:

![](/img/docs/17bc41819554-DBaaS_BackupDB_pitr_enable_warning.png)

Chọn **Configure Now** để hoàn tất việc tạo job backup full trước khi tiếp tục thao tác kích hoạt PITR.

#### Thao tác thực hiện:

Tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Enable PITR** (biểu tượng hình răng cưa bên cạnh trạng thái PITR):

![](/img/docs/bec47e5a2042-DBaaS_BackupDB_pitr_enable.png)

Hệ thống sẽ hiển thị hộp thoại xác nhận:

![](/img/docs/0e361ade26d7-DBaaS_BackupDB_pitr_enable_popup.png)

Việc bật PITR sẽ làm tăng dung lượng lưu trữ sử dụng và phát sinh thêm chi phí. Người dùng cần đánh giá và dự trù dung lượng phát sinh trước khi tiếp tục.

Để bật tính năng, chọn checkbox xác nhận và nhấn **Confirm**.

Sau khi hoàn tất, tính năng PITR chưa có hiệu lực ngay mà cần chờ hệ thống tạo Full Backup tiếp theo. Khi PITR đã sẵn sàng, người dùng có thể khôi phục cơ sở dữ liệu về bất kỳ thời điểm nào kể từ mốc Full Backup đó. Các thay đổi dữ liệu phát sinh trước thời điểm Full Backup này sẽ không nằm trong phạm vi bảo vệ của PITR và không thể khôi phục.

### 2\. Tắt PITR

Để tắt chức năng PITR, tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Disbale PITR** (biểu tượng hình răng cưa bên cạnh trạng thái PITR). Hệ thống hiển thị hộp thoại xác nhận:

![](/img/docs/385a70dad41a-DBaaS_BackupDB_pitr_disable_popup.png)

Nhập “**disable** ” và nhấn **Confirm** để xác nhận. Sau khi PITR bị tắt, người dùng không thể khôi phục cơ sở dữ liệu về các thời điểm trong quá khứ.

[ Previous Quản lý Job Backup ](./backup-job-mgmt) [ Next Khôi phục cơ sở dữ liệu ](./restore-db)
