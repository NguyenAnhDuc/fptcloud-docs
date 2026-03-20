---
sidebar_class_name: hidden
sidebar_label: "2. FPT Cloud Guard"
title: "2. FPT Cloud Guard"
source: "https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-mot-alert-moi-activity-alert"
parent: "https://fptcloud.com/documents/cloud-guard"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud Guard


Khởi tạo một Activity Alert mới


* * *

**Bước 1** : Ở menu chọn **Security** > **Cloud Guard** , mở tab **Activity** **Alerts** và chọn **Create Alert**. ![file](/img/docs/78ca8f1c314a-image-1725532325024.png) Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng thực hiện các bước tiếp theo.

**Bước 2** : Cấu hình cảnh báo theo nhu cầu bằng cách nhập thông tin vào trường dữ liệu tương ứng:

|   
---|---  
**Field** | **Description**  
**Name** | Nhập tên của Alert  
**Resource Type** | Chọn **Loại tài nguyên** sẽ cảnh báo  
**Action** | Chọn các loại tác động mà hệ thống bắn cảnh báo  
  
**Lưu ý** : Mỗi loại tài nguyên sẽ có những action khác nhau cho phép đặt cảnh báo. Khi đặt cảnh báo Activity log sẽ mặc định apply cho toàn bộ VPC | | **Severity** | Chọn mức độ nghiêm trọng của cảnh báo, có các mức: Critical, High, Medium, Low | | **Notify to** | Chọn người nhận cảnh báo |

![file](/img/docs/58b580bc4d8b-image-1725532405898.png)

Bước 3: Chọn Create để thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo dựa vào các thông tin đã chọn.

Sau khi khởi tạo thành công, người dùng có thể thấy Alert mới tạo và kiểm tra thông tin trên bảng quản trị.

[ Previous Khởi tạo cảnh báo cho VPN site-to-site ](./khoi-tao-canh-bao-vpn) [ Next Khởi tạo một Threat Alert mới ](./khoi-tao-mot-alert-moi-threat-alert)
