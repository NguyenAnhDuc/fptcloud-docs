---
sidebar_label: "Cấu hình VPN Site-to-Site với PfSense"
title: "Cấu hình VPN Site-to-Site với PfSense"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-pfsense"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Cấu hình VPN Site-to-Site với PfSense


* * *

**Bài viết này hướng dẫn cách build thiết bị Pfsense** để kết nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.

  * Bước 1: Build Pfsense for Cloud
  * Bước 2: Cấu hình cho VPN Site-to-Site
  * Bước 3: Cấu hình cho Pfsense

Cần đảm bảo các điều kiện sau:

  * VPNAAS trên trang Portal
  * Pfsense đã được download và boot image trên cloud với tên: **Pfsense**
  * Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP
  * Dãy Network tương ứng
  * 2 VM Pfsense để phục vụ debug( 2c4g ) 

## Bước 1: Build Pfsense for Cloud

  * Build Image Pfsense trên Horizon cấu hình 2C4G- 1 IP public gắn trực tiếp, 1 IP mạng Local cần VPN
  * Có thể vào console VM thông qua SSH 

## Bước 2: Cấu hình cho VPN Site-to-Site

Truy cập và tạo VPN Site-to-Site trên <https://console.fptcloud.com/>

**\- Tạo Customer Gateway:**

  * Remote private network: dãy Lan Subnet cần peering của Pfsense
  * Remote IP public: IP public của Pfsense

![](/img/docs/98e1e24d7deb-photo_1_2025-07-09_17-34-31.jpg)

**\- Tạo VPN connection:**

Thông số của VPN Connection sẽ bao gồm 3 mục chính:

  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information** ![](/img/docs/bab624997b49-photo_2_2025-07-09_17-34-31.jpg)

**Lưu ý** : Thông số Pre-shared-key cần lưu lại để kết nối với Palo Alto   
**Phần 2: Remote VPN information** ![file](/img/docs/d2ccb53eaeb1-image-1757089299476.png)

Quý khách hàng lựa chọn Providers = “others" sau đó làm theo các bước sau:

  * Bước 1: Điền providers name = "pfsense" 
  * Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:

**Đối với IKE:**

  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * IKE version: ikev2
  * DH group: group14
  * Lifetime: 3600 seconds
  * Phase1 negotiation mode: main

**Đối với IPsec:**

  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * Encapsulation mode: tunnel
  * Transform protocol: esp
  * Perfect Forward Secrecy (PFS): group14
  * Lifetime: 3600 seconds

**Phần 3: Remote VPN information** ![](/img/docs/6bf84b44a032-Screenshot-2025-08-18-110311-15.png)

Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 3: Cấu hình cho Pfsense

**-** Đăng nhập vào console VNC của VM Checkpoint theo account đã tạo trên và chạy lệnh: "Cpstart"

**-** Đăng nhập vào website theo địa chỉ IP: [https://{`IP`}](<https://IP.>) , có thể hiện thông báo SSL như sau: ![file](/img/docs/e138f6103d3e-image-1744194638397.png)

  * Thông tin đăng nhập mặc định:

User: _Admin_

Pass: _Pfsense_ (Có thể set lại pass khi đăng nhập lần đầu trên web)

\- Nếu chưa có LAN ở tab **Interfaces → chọn LAN** để thêm LAN:  
![file](/img/docs/c8a77911438e-image-1744194649644.png) \- Tiến hành config Tunnel cho Pfsense: ![file](/img/docs/e3aaf0200f46-image-1744194658447.png) Tại tab VPN, chọn **IPsec → Tunnels** và ấn chọn Add P1.

  * Set up Phase 1 như hình sau:

**Chú ý** : + Pre-Shared Key: nhập từ VPNAAS đã tạo trên portal trước đó

\+ Remote Gateway: là IP Public của VPNAAS đã tạo trên portal trước đó ![file](/img/docs/8c6ee265ec13-image-1744194669785.png)

  * Set up Phase 2 như sau: ![file](/img/docs/3fb897ed051d-image-1744194677761.png)

Tới đây khách hàng đã có thể mở Terminal - Command line để thử Ping thông mạng.

[ Previous Cấu hình VPN Site-to-Site với Palo Alto ](./connect-palo-alto) [ Next Cấu hình VPN Site-to-Site với strongSwan ](./connect-strongswan)
