---
sidebar_label: "VPN Site-to-Site"
title: "VPN Site-to-Site"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/"
lang: vi
converted: "2026-03-19"
---

# VPN Site-to-Site

VPN Site-to-Site



##  Giới thiệu 

  * Với VPN Site-to-Site, các công ty có thể xây dựng một hệ thống mạng riêng ảo hoàn chỉnh cho các địa điểm đa dạng. Dịch vụ này kết nối các mạng nội bộ khác nhau một cách liên tục và bảo mật, cho phép nhân viên chia sẻ tài nguyên một cách thuận tiện và an toàn giữa các mạng nội bộ.
  * FPT Cloud Site-to-Site VPN là một dịch vụ VPN quản lý đầy đủ, cho phép tạo kết nối bảo mật giữa mạng văn phòng và tài nguyên đám mây của FPT. Sử dụng tunnel IPSec, dịch vụ này kết nối trung tâm dữ liệu của doanh nghiệp với các văn phòng chi nhánh, giúp truy cập các ứng dụng và dịch vụ dựa trên đám mây mà không tiết lộ dữ liệu mật.

**Những điều cần lưu ý trước khi bạn tạo VPN Site-to-Site** :

  * Kiến trúc mạng: Đảm bảo kiến trúc mạng On-Premise của bạn phù hợp với việc triển khai VPN S2S. Điều này bao gồm xác định địa chỉ IP, phân vùng mạng, và các thiết bị mạng phù hợp để xây dựng kết nối VPN.
  * Floating IP: Hệ thống Cloud FPT cần 1 IP public để kết nối VPN S2S. IP public được sử dụng chưa được gán cho bất kỳ dịch vụ nào khác
  * IP addressing: Đảm bảo rằng các địa chỉ IP được sử dụng trong VPN S2S không gây xung đột với các mạng khác trong tổ chức hoặc các mạng công cộng. Xác định địa chỉ IP đầu cuối cho các cổng kết nối VPN và cấu hình tường lửa để cho phép lưu lượng truy cập.
  * Giao thức và mã hóa: Chọn giao thức và cấu hình mã hóa phù hợp cho VPN S2S. Phổ biến nhất là IPSec với mã hóa AES hoặc 3DES, cùng với giao thức xác thực như IKEv1 hoặc IKEv2. Đảm bảo cấu hình bảo mật tương ứng để đảm bảo tính bảo mật cao.

## Overviews 

  * [ Giới thiệu chi tiết ](./overviews-vpn)

## Initial Setup 

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn nhanh (Quick Starts) 

  * [ Khởi tạo VPN Site-to-Site ](./create-vpn-s2s-connection)
  * [ Xem thông tin VPN ](./view-vpn-detail-information)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Disable VPN-Site-to-Site ](./disable-vpn-s2s-connection)
  * [ Enable VPN-Site-to-Site ](./enable-vpn-s2s-connection)
  * [ Edit VPN Information ](./edit-vpn-s2s-information)
  * [ Edit Security Profile ](./edit-security-profile)
  * [ Download Config VPN Site-to-Site ](./download-config-vpn-s2s)
  * [ Xóa VPN Site-to-Site ](./delete-vpn-s2s-connection)
  * [ Kiểm tra hoạt động VPN-Activity ](./vpn-s2s-check-activity-logs)

## FAQs 

  * [ Authenticate-Certificate mode ](./authenticate-certificate-mode)

## VPN Site to Site (new version) 

  * [ Cấu hình thiết bị VPN phổ biến ](./common-config)
    * [ Cấu hình VPN Site-to-Site với Palo Alto ](./connect-palo-alto)
    * [ Cấu hình VPN Site-to-Site với PfSense ](./connect-pfsense)
    * [ Cấu hình VPN Site-to-Site với strongSwan ](./connect-strongswan)
    * [ Cấu hình VPN Site-to-Site với Vyos 1.5 ](./connect-vyos-1.5)
    * [ Cấu hình VPN Site-to-Site với CheckPoint R81.20 ](./connect-checkpoint-r8120)
    * [ Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway) ](./connect-fci-aws-transitgw)
    * [ Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways) ](./connect-fci-aws-virtualgw)
    * [ Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware ](./connect-fci-vmware)
    * [ Cấu hình VPN Site-to-Site với Fortigate ](./connect-fci-fortigate)
    * [ Cấu hình VPN Site-to-Site với các thiết bị NAT IP ](./connect-behind-nat)
  * [ Quản lý & thao tác VPN Connection ](./action-management)
    * [ Hướng dẫn khởi tạo VPN Connection ](./create-vpn-connection)
    * [ Hướng dẫn chỉnh sửa VPN Connection ](./edit-vpn-connection)
    * [ Hướng dẫn enable/disable VPN Connection ](./enable-disable-vpn-connection)
    * [ Hướng dẫn xóa VPN Connection ](./xoa-vpn-connection)
    * [ Hướng dẫn download file config VPN ](./tai-file-cau-hinh-vpn)
    * [ Hướng dẫn kết nối thiết bị Behind NAT IP ](./ket-noi-thiet-bi-behind-nat-ip)
    * [ Hướng dẫn tạo Customer gateway ](./create-customergw)
    * [ Hướng dẫn chỉnh sửa Customer gateway ](./edit-customergw)
    * [ Hướng dẫn xoá Customer gateway ](./delete-customergw)
    * [ Hướng dẫn phân quyền sử dụng dịch vụ ](./service-authorization)
    * [ Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard ](./set_alert)
    * [ Theo dõi dịch vụ thông qua tính năng logging ](./logging)
    * [ Theo dõi dịch vụ thông qua tính năng monitoring ](./monitoring)
  * [ Câu hỏi thường gặp (FAQs) ](./faq)

