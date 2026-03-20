---
sidebar_class_name: hidden
sidebar_label: "Khởi tạo VPN Site-to-Site"
title: "Khởi tạo VPN Site-to-Site"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=Create-VPN-S2S-connection"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Khởi tạo VPN Site-to-Site


* * *

**Bước 1:** Ở menu chọn **Networking** , chọn tab **VPN** .

![Truy cập trang VPN](https://fptcloud.com/wp-content/uploads/2023/05/Truy-cập-trang-VPN-1024x479.png)

**Bước 2:** Chọn **Create.**

![Create](/img/docs/bd78020fd536-Create-1024x479.png)

**Bước 3:** Tại trang **Config** khi khởi tạo VPN, khai báo các trường thông tin cần thiết

![Config VPN](/img/docs/ecc5a6ddad86-Config-VPN-1024x918.png)

Các thông số bao gồm:

**Tên trường** | **Diễn giải** | **Giới hạn**  
---|---|---  
**Name** | Tên VPN Site-to-Site | Giới hạn tối đa 32 ký tự. Chỉ cho phép các chữ cái, số, dấu gạch dưới, dấu gạch ngang, dấu cách, dấu chấm.  
**Description** | Giải thích, diễn giải về kết nối VPN Site-to-Site | Giới hạn 100 ký tự  
**Security Profile** | Loại bảo mật kết nối |   
**Authentication mode** | Phương thức xác thực | \- Hiện tại, Unify Portal không hỗ trợ xác thực Certificate.  
**Pre-shared key** | Khóa bảo mật (secret key) được đưa vào mỗi peer | Phải có 8-32 ký tự. Các ký tự hợp lệ: A-Z, a-z, 0-9, _ và .  
**Edge gateway** | \- Cổng biên có nhiệm vụ xử lý khối lượng công việc của ứng dụng doanh nghiệp\- Bên cạnh đó là khả năng thực hiện chức năng mạng như biên dịch giao thức. Ngoài ra còn bổ sung thêm bảo vệ tường lửa hoặc kết nối không dây. | Chọn từ danh sách  
**Local endpoint IP Address** | IP public được cấp từ hệ thống Cloud FPT | \- IP này chưa gắn cho bất kỳ VPC hoặc bất kỳ dịch vụ nào khác\- Có thể sử dụng 1 địa chỉ IP cho nhiều kết nối VPN  
**Local endpoint Networks** | Network trên Cloud. | Các network này không được overlap lẫn nhau (nếu có nhiều vpn connection khác, các vpn connection không được overlap lẫn nhau, không được overlap với remote endpoint networksCó thể nhập thủ công địa chi Local endpoint Network  
**Remote endpoint IP Address** | IP public phía On-premise | Địa chỉ IP version 4  
**Remote endpoint Networks** | Network phía On-premise | Các network này không được overlap lẫn nhau (nếu có nhiều vpn connection khác, các vpn connection không được overlap lẫn nhau, không được overlap với local endpoint networks  
  
[ Next Xem thông tin VPN ](./view-vpn-detail-information)
