---
sidebar_label: "Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard"
title: "Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=set_alert"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard


* * *

**Tích hợp dịch vụ Cloud Guard để thiết lập ngưỡng cảnh báo cho VPN** là chức năng cho phép người dùng cài đặt các ngưỡng giám sát (threshold) cho dịch vụ VPN. Khi hệ thống đạt hoặc vượt ngưỡng đã cấu hình, Cloud Guard sẽ gửi thông báo cảnh báo đến người dùng qua các kênh được thiết lập (Email, Telegram,...). 

Để thực hiện chức năng, Quý khách thao tác theo hướng dẫn sau: 

**Bước 1:** Ở menu chọn **Security > Cloud Guard** , mở tab **Recipients** và chọn **Create Recipient.** ![](/img/docs/274a0eae8d38-62.jpg) **Bước 2:** Tại màn **Create Recipient** , Quý khách điền các thông tin sau: 

  * **Name** : Nhập tên người nhận. 

  * **Method** : Chọn phương thức gửi cảnh báo. FPT Alert đang hỗ trợ các phương thức **Email, Telegram, Slack, Teams.**

  * Khai báo **Address:** nhận cảnh báo tương ứng với **Type** đã chọn, đây là địa chỉ hệ thống sẽ gửi thông báo đến khi mức sử dụng của tài nguyên vượt ngưỡng mà người dùng tùy chỉnh khi tạo mới Alert. 

**Nhận cảnh báo qua Email:** Nhập địa chỉ email của người nhận. ![](/img/docs/738000ae6c58-z-2.jpg)

**Nhận cảnh báo qua Slack:** Chọn Slack Channel cần nhận cảnh báo. Bạn cần đăng nhập vào tài khoản Slack, chọn Channel từ danh sách sau đó FPT Portal sẽ tự động nhận Slack Channel ID. 

![](/img/docs/5bc7f36a2793-v-1.jpg)

**Nhận cảnh báo qua Teams:** Nhập URL của Teams bạn cần nhận cảnh báo và ấn Send test message 

![](/img/docs/896a297158a8-t-1.jpg)

**Nhận cảnh báo qua Telegram:** Nhập Telegram ID của người nhận cảnh báo, nếu chưa có ID có thể lấy theo hướng dẫn của hệ thống. 

![](/img/docs/875cce30f209-y-1.jpg)

**Bước 4:** Khi đã điền đủ thông tin, Quý khách nhấn **Create** để tạo **Recipient** mới. ![](/img/docs/58adaaa55bdb-u-1.jpg)

Tiếp theo, để thiết lập cảnh báo cho dịch vụ VPN, Quý khách thao tác theo hướng dẫn sau: 

**Bước 1:** Ở thanh menu ngang chọn **Cloud Guard >** **Resource alert > Create alarm** ![](/img/docs/f817fb3cee61-p-1.jpg)

**Bước 2:** Quý khách nhập các thông tin sau: 

  * **Name:** Tên hiển thị của alert 

  * **Type:** Chọn type là **VPN Site-to-Site** ![](/img/docs/08dacceab200-q-1.jpg)

  * Nhập các trường thông tin tương ứng của **Configure condition:**

Cấu hình điều kiện cảnh báo (Configure condition) như sau: 

STT | Trường | Mô tả  
---|---|---  
1 | Metric type | Chọn loại metric của VPN Site-to-Site để đặt cảnh báo  
2 | Operator | Chọn điều kiện so sánh  
3 | Threshold | Chọn ngưỡng cảnh báo, khi hệ thống phát hiện vượt ngưỡng theo điều kiện sẽ bắn cảnh báo  
4 | Alert interval | Chọn thời gian lặp lại tính toán của hệ thống (nhỏ nhất là 3 phút)  
5 | Repeat time | Chọn thời gian lặp lại cảnh báo nếu chỉ số duy trì vượt ngưỡng  
  
FPT Cloud Guard hỗ trợ cảnh báo cho những VPN Site-to-Site metric sau: 

STT | Metric | Mô tả  
---|---|---  
1 | CPU Usage (%) | Tỷ lệ phần trăm mức sử dụng CPU của thiết bị VPN Gateway.  
2 | Packet loss (packet/s) | Số lượng gói tin bị mất trong quá trình truyền dữ liệu giữa hai điểm VPN (tính theo giây).  
3 | RAM Usage (%) | Tỷ lệ phần trăm bộ nhớ RAM đang được sử dụng bởi VPN Gateway.  
4 | VPN Connection Status phase 1 Offline | Trạng thái offline khi thiết lập Phase 1 (IKE – Internet Key Exchange) của kết nối VPN.  
5 | VPN Connection Status phase 2 Offline | Trạng thái offline khi thiết lập Phase 2 (IPsec Configuration) của kết nối VPN.  
6 | VPN Gateway Status Offline | Trạng thái offline của VPN Gateway.  
  
  * Tại mục **Apply to:**

-Với 3 metrics: CPU Usage (%), Packet loss (packet/s), RAM Usage (%) được áp dụng cho chính VPN Gateway của Quý khách 

-Với 3 metrics: VPN Connection Status phase 1 Offline, VPN Connection Status phase 2 Offline, VPN Gateway Status Offline, Quý khách chọn các VPN Connection có trong list: ![](/img/docs/cc13892da249-k.jpg)

  * **Severity:** Chọn mức độ nghiêm trọng của cảnh báo 

  * **Notify to:** Chọn người nhận cảnh báo 

**Bước 3:** Sau khi hoàn thiện điền các thông tin, Quý khách chọn **Create**. 

Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn, ví dụ như ảnh bên dưới (phương thức nhân cảnh báo qua Email). ![](/img/docs/eb2b2e19cfce-l.jpg)

![](/img/docs/7f81c9fa2100-m.jpg)

[ Previous Hướng dẫn phân quyền sử dụng dịch vụ ](./service-authorization) [ Next Theo dõi dịch vụ thông qua tính năng logging ](./logging)
