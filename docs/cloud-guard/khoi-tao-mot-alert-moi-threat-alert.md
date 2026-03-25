---
sidebar_class_name: hidden
sidebar_label: "Khởi tạo một Threat Alert mới"
title: "2. FPT Cloud Guard"
source: "https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-mot-alert-moi-threat-alert"
parent: "https://fptcloud.com/documents/cloud-guard"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud Guard


Khởi tạo một Threat Alert mới


* * *

**Bước 1** : Ở menu chọn **Security** > **Cloud Guard** , mở tab **Threat** **Alerts** và chọn **Create Alert**.

![file](/img/docs/3fb1607ba311-image-1725532528612.png)

Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng thực hiện các bước tiếp theo.

Bước 2: Cấu hình cảnh báo theo nhu cầu bằng cách nhập thông tin vào trường dữ liệu tương ứng:

|   
---|---  
**Field** | **Description**  
**Name** | Nhập tên của Alert  
**Threat Type** | Chọn **Loại tấn công** người dùng muốn đặt cảnh báo, gồm có:  
  
  1. High-frequency Being Scanned Detection: IP người dùng đang bị scan từ bên ngoài với tần suất cao hơn mức bình thường qua các port nguy hiểm như 22, 3389, 445,…
  2. High-frequency Scanning Detection: IP người dùng đang đi scan ra ngoài internet với tần suất cao hơn mức bình thường qua các port nguy hiểm như 22, 3389, 445,…
  3. Malware Infected Detection: IP người dùng có nguy cơ bị nhiễm Malware khi phát hiện có kết nối tới C&C; site.
  4. Potential DDoS Attack Detection: IP người dùng có nguy cơ bị tấn công DDoS khi phát hiện có số lượng lớn host đang gửi gói tin tới 1 IP đích trong 1 phút. | | **Apply to** | Chọn các IP mà người dùng muốn bật cảnh báo **Lưu ý:** Các IP được phép chọn để bật cảnh báo nằm trong danh sách IP của màn Floating IP | | **Severity** | Chọn mức độ nghiêm trọng của cảnh báo, có các mức: Critical, High, Medium, Low | | **Notify to** | Chọn người nhận cảnh báo |

Bước 3: Chọn Create để thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo dựa vào các thông tin đã chọn.

Sau khi khởi tạo thành công, người dùng có thể thấy Alert mới tạo và kiểm tra thông tin trên bảng quản trị.

![file](/img/docs/92edeb6452f0-image-1725532593169.png)

[ Previous Khởi tạo một Activity Alert mới ](./khoi-tao-mot-alert-moi-activity-alert) [ Next Kiểm tra trạng thái của Alert ](./kiem-tra-trang-thai-cua-alert)
