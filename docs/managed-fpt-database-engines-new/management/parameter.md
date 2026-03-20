---
sidebar_label: "2. Managed – FPT Database Engines"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=parameter"
parent: "https://fptcloud.com/documents/managed-fpt-database-engines-new"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Quản lý Parameter


* * *

### Tổng quan:

Trong hệ quản trị cơ sở dữ liệu (DBMS), parameter (tham số) là các giá trị cấu hình giúp điều chỉnh và kiểm soát các đặc tính và hành vi của hệ thống trong quá trình vận hành. Các tham số này có thể ảnh hưởng đến hiệu suất, bộ nhớ, thời gian chờ, các cơ chế tối ưu hóa và các yếu tố khác của hệ cơ sở dữ liệu.

Mỗi tham số có thể có các giá trị nhất định và có thể được thay đổi tùy thuộc vào nhu cầu của người quản trị cơ sở dữ liệu để tối ưu hóa hoạt động của hệ thống. Các tham số này có thể thuộc loại dynamic (động) hoặc static (tĩnh), mỗi loại có cách thức áp dụng khác nhau.

  * **Dynamic Parameter (Tham số động)** : Những tham số này có thể thay đổi trong quá trình hoạt động của cơ sở dữ liệu mà không cần khởi động lại hệ thống.
  * **Static Parameter (Tham số tĩnh)** : Những tham số này yêu cầu khởi động lại cơ sở dữ liệu để thay đổi có hiệu lực.

Việc hiểu và quản lý các tham số đúng cách là rất quan trọng để đảm bảo hệ thống hoạt động ổn định, hiệu quả và đáp ứng đúng yêu cầu của người sử dụng.

Trong FPT Database Engine, chức năng **Quản lý Parameter** cho phép người dùng xem và cập nhật các tham số cấu hình của một cụm cơ sở dữ liệu đang chạy trực tiếp trên FPT Cloud Portal. Khi cập nhật tham số động (dynamic), giá trị mới sẽ được áp dụng ngay sau khi thao tác hoàn tất mà không làm gián đoạn dịch vụ. Khi cập nhật tham số tĩnh (static), hệ thống sẽ tự động khởi động lại cơ sở dữ liệu để áp dụng giá trị mới.

### Quyền cần thiết:

Tên quyền | Loại thao tác | Mô tả  
---|---|---  
manageDatabase:Configuration | Edit | Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling, ...)  
  
### Hướng dẫn cập nhật:

Các bước dưới đây hướng dẫn cách cập nhật giá trị của một parameter cho cụm cơ sở dữ liệu:

#### Bước 1: Truy cập trang Quản lý parameter

Đăng nhập FPT Cloud Console. Mở trang **Database list** > chọn ID của cụm cơ sở dữ liệu để mở trang chi tiết > chọn tab **Configure Params** để truy cập trang **Quản lý Parameter** :

![](/img/docs/f9a798c84b4f-view-param-scaled.png)

#### Bước 2: Chọn loại tham số

Chọn loại parameter bạn muốn cập nhật:

  * Dynamic Params
  * Static Params

#### Bước 3: Điều chỉnh giá trị cho tham số

Nhấn biểu tượng **Edit parameter** (biểu tượng bút chì) tương ứng với tham số cần chỉnh sửa, hộp thoại **Update Configure Params** hiển thị đầy đủ thông tin của tham số được chọn và cho phép người dùng cập nhật giá trị trong phạm vi cho phép.

![](/img/docs/7b919278227b-update-param-scaled.png)

Kiểm tra thông tin parameter (kiểu dữ liệu, giá trị tối thiểu và tối đa), sau đó cập nhật giá trị trong trường “**Value** ” trong phạm vi cho phép và nhấn “**Update** ” để áp dụng thay đổi.

### Best Practices:

  * Điều chỉnh tham số theo từng bước nhỏ và theo dõi hiệu năng.
  * Ưu tiên tham số dynamic để tránh downtime.
  * Lên lịch bảo trì khi thay đổi tham số static.
  * Ghi nhận thay đổi để phục vụ audit và vận hành.

[ Previous Quản lý tài nguyên cụm cơ sở dữ liệu ](./resource) [ Next Apache Kafka - Quản lý Kafka ACL ](./kafka-user)
