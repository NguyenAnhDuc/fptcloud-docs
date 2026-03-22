---
sidebar_label: "FPT Cloud Guard"
title: "2. FPT Cloud Guard"
source: "https://fptcloud.com/documents/cloud-guard/"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud Guard


FPT Cloud Guard

FPT Cloud Guard - Alert là dịch vụ giúp khách hàng giám sát, theo dõi trạng thái hoạt động của các dịch vụ khác trên FPT Cloud hoàn toàn tự động (Cloud Server, Load Balancer, Autoscaling, Object Storage, Kubernetes, Database,...). Cho phép khách hàng cấu hình và gửi các cảnh báo khi tài nguyên bị vượt ngưỡng, hỗ trợ gửi cảnh báo qua nhiều kênh (Email, Webhook, Telegram, Slack, SMS, Call,...). Khi sử dụng FPT Cloud Guard, khách hàng có thể chủ động theo dõi các tài nguyên của mình trên hệ thống FPT Cloud mà không cần nhân sự duy trì và chi phí ở mức tối thiểu. Tài liệu này sẽ cung cấp cho bạn thông tin về những điều bạn nên cân nhắc trước khi sử dụng FPT Cloud Guard, cách bạn tạo và quản lý nó.

Những điều cần lưu ý trước khi bạn tạo một Alert?

  * **Các loại thông số cần theo dõi và ngưỡng bất thường:** Với mỗi loại tài nguyên trên FPT Cloud sẽ có các thông số kỹ thuật khác nhau, tùy vào nhu cầu và mục đích sử dụng tài nguyên mà bạn cần đưa ra thông số cần theo dõi và ngưỡng bất thường cho các thông số đấy.

  * **Phương thức nhận cảnh báo:** Bạn cần chọn một phương thức nhận cảnh báo phù hợp với tổ chức của mình, giúp người phụ trách nhận được thông tin cảnh báo và xử lý sự cố nhanh nhất.

  * **Kịch bản nhận cảnh báo:** Bạn nên đưa ra các kịch bản cảnh báo khác nhau cho các trường hợp cụ thể. Ví dụ nếu vượt ngưỡng sẽ cảnh báo trong bao nhiêu lâu, cảnh báo cho bao nhiêu người,…

##  Trang chủ 

## Overview 

  * [ Cloud Guard ](./overview)

## Initial Setup 

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * Quản lý Alert 
    * [ Khởi tạo cảnh báo cho Virtual Machine (VM) ](./khoi-tao-canh-bao-virtual-machine)
    * [ Khởi tạo cảnh báo cho Object Storage ](./khoi-tao-canh-bao-object-storage)
    * [ Khởi tạo cảnh báo cho Load Balancer ](./khoi-tao-canh-bao-load-balancer)
    * [ Khởi tạo cảnh báo cho VPN site-to-site ](./khoi-tao-canh-bao-vpn)
    * [ Khởi tạo một Activity Alert mới ](./khoi-tao-mot-alert-moi-activity-alert)
    * [ Khởi tạo một Threat Alert mới ](./khoi-tao-mot-alert-moi-threat-alert)
    * [ Kiểm tra trạng thái của Alert ](./kiem-tra-trang-thai-cua-alert)
    * [ Bật/Tắt Alert ](./bat-tat-alert)
    * [ Chỉnh sửa Alert ](./chinh-sua-alert)
    * [ Xóa Alert ](./xoa-alert)
  * Quản lý Recipient 
    * [ Recipient là gì? ](./recipient-la-gi)
    * [ Tạo mới Recipient ](./tao-moi-recipient)
    * [ Tạo mới người nhận qua MSTeams ](./recipient-teams)
    * [ Chỉnh sửa Recipient ](./chinh-sua-recipient)
    * [ Xóa Recipient ](./xoa-recipient)

## Các câu hỏi thường gặp (FAQs) 

## Một số gợi ý mẫu (Samples) 

## Release note

### FPT Cloud Guard (Alert 2.0) –Tính năng quản lý và tự động cảnh báo tài nguyên trên FPT Cloud Portal

FPT Cloud chính thức ra mắt tính năng FPT Cloud Guard trên giao diện Portal. Với tính năng này, người dùng có thể dễ dàng thiết lập các kịch bản cảnh báo và cài đặt người nhận cảnh báo tương ứng qua phương thức Email. FPT Cloud Guard sẽ giám sát, tính toán liên tục và gửi cảnh báo khi mức sử dụng của tài nguyên vượt ngưỡng đã đặt. Từ đó giúp người dùng tiết kiệm thời gian giám sát và quản lý tài nguyên trên FPT Cloud Portal. Các tính năng của FPT Cloud Guard - AlertTạo và tùy chỉnh mức cảnh báo khi tài nguyên RAM/CPU của máy chủ ảo vượt ngưỡng.Tạo cảnh báo mức sử dụng RAM/CPU cho các Autoscale Group và thiết lập kịch bản Scale In hoặc Scale Out tự độngKiểm tra trạng thái trên giao diện theo thời gian thựcBật/ tắt chức năng gửi cảnh báo và quản phương thức nhận cảnh báoXem lại các lịch sử và chi tiết cảnh báoTại sao bạn nên sử dụng FPT Cloud Guard - AlertChủ động trong quản lý tài nguyên, không cần thường xuyên kiểm tra mà chỉ cần vào khi có cảnh báo gửi về email giúp tiết kiệm thời gian quản lý và và kịp thời xử lý các tình huống khẩn cấp.Đơn giản hóa công việc quản lý bằng giao diện Alert tinh giản giúp thao tác cài đặt, quản trị nhanh chóng và dễ dàng. 

### FPT Cloud Guard (Alert 2.1) ra mắt các cảnh báo mới về băng thông mạng và ổ cứng

FPT Cloud chính thức ra mắt các cảnh báo về băng thông mạng và ổ cứng bao gồm:Network bandwidth in/out (Mbps): Cảnh báo về băng thông đến/đi của tất cả các Network Interface Card (NIC) của máy chủ nếu vượt ngưỡng.Total network bandwidth (Mbps): Cảnh báo về tổng băng thông đến và đi của tất cả các Network Interface Card (NIC) của máy chủ nếu vượt ngưỡngDisk IOPS (IOPS): Cảnh báo về hiệu năng đọc ghi ổ cứng (In/Out per second) nếu vượt ngưỡng, hỗ trợ đặt cảnh báo cho ổ cứng của từng máy chủ.Disk Read/Write Bandwidth (MBps): Cảnh báo về băng thông đọc/ghi của ổ cứng nếu vượt ngưỡng, hỗ trợ đặt cảnh báo cho ổ cứng của từng máy chủ.Ngoài ra, phiên bản 2.1 có thêm các tính năng sửa cảnh báo đã đặt, sửa xóa người nhận, xem chi tiết lịch sử bắn cảnh báo và hỗ trợ trên cả 2 nền tảng ảo hóa Openstack và VMWare. 

### FPT Cloud Guard hỗ trợ cảnh báo đa kênh

FPT Cloud Guard cập nhật thêm các phương thức nhận cảnh báo mới và phổ biến hiện nay là:- Slack- TelegramNgoài ra, phiên bản 2.2 cho phép người dùng dễ dàng thêm mới cảnh báo với tính năng chọn nhiều máy chủ áp dụng trong điều kiện của 1 cảnh báo (apply to multiple virtual machine) Hình 1: Tạo cảnh báo cùng lúc cho tất cả máy chủ Hình 2: Chọn phương thức cảnh báo qua Slack và Telegram Vì sao nên sử dụng FPT Cloud Guard v2.2Dễ dàng tạo và quản lý cảnh báo cho nhiều máy chủ có cùng một điều kiện cảnh báo.Đa dạng phương thức nhận thông tin cảnh báo 
