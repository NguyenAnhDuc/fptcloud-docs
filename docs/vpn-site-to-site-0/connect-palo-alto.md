---
sidebar_class_name: hidden
sidebar_label: "Cấu hình VPN Site-to-Site với Palo Alto"
title: "Cấu hình VPN Site-to-Site với Palo Alto"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-palo-alto"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Cấu hình VPN Site-to-Site với Palo Alto


* * *

**Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.**

  * Bước 1: Cấu hình cho VPN Site-to-Site
  * Bước 2: Cấu hình IPsec cho Palo Alto
  * Bước 3: Cấu hình firewall và routing cho Palo Alto

Cần đảm bảo các điều kiện sau:

  * VPN Site-to-Site trên trang Portal
  * Palo Alto đã được cài đặt và enable ở phía khách hàng.
  * Palo Alto đã được cài đặt và có 3 IP: **Managenment( IP public)** \- **WAN( IP public)** \- **LAN**. 

## Bước 1: Cấu hình cho VPN Site-to-Site

Truy cập và tạo VPN Site-to-Site trên trang <https://console.fptcloud.com/>

**\- Tạo Customer Gateway:**

  * Remote private network: dãy Lan Subnet cần peering Palo Alto
  * Remote IP public: IP public của Palo Alto  
![](/img/docs/eb79dd6dd9e9-photo_1_2025-07-09_17-34-04.jpg)

**\- Tạo VPN Connection:**

Thông số của VPN Connection sẽ bao gồm 3 mục chính:

  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**

![](/img/docs/b95358726aab-photo_2_2025-07-09_17-34-04.jpg)

**Lưu ý** : Thông số Pre-shared-key cần lưu lại để kết nối với Palo Alto   

**Phần 2: Remote VPN information** ![](/img/docs/8e9693a4da00-photo_3_2025-07-09_17-34-04.jpg)

  
Khi quý khách hàng lựa chọn Providers “Palo Alto”, hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:

**Đối với IKE:**

  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * IKE version: ikev2
  * Lifetime units: seconds
  * Lifetime value: 28800
  * DH Group: GROUP_14
  * Phase1 negotiation mode: main

**Đối với IPsec:**

  * Encapsulation mode: tunnel
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * Lifetime units: seconds
  * Lifetime value: 3600
  * Perfect forward secrecy (PFS): GROUP_14
  * Transform protocol: esp

**Phần 3: Remote VPN information** ![](/img/docs/33d5df0169ee-Screenshot-2025-08-18-110311-14.png)

Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 2: Cấu hình IPsec cho Palo Alto

\- Đăng nhập web vào Palo Alto khách hàng theo IP Management: ![file](/img/docs/9da590d203ac-image-1744194232470.png) \- Chọn Add và kích hoạt Zone của Palo Alto ![file](/img/docs/d40062055074-image-1744194240732.png) \- Tạo Virtual Router của Palo Alto và chọn OK. ![file](/img/docs/06f7f0cda7fe-image-1744194248910.png) \- Tạo ra interface WAN là LAN, (lưu ý làm cho ethernet1/1 và tương tự cho ethernet 1/2)  
![file](/img/docs/e445a49af58a-image-1744194257003.png) ![file](/img/docs/d59065a83fea-image-1744194266348.png) ![file](/img/docs/d308345746e0-image-1744194276204.png) ![file](/img/docs/f4e7ca1b58f7-image-1744194290319.png) \- Tạo ra IKE Crypto: ![file](/img/docs/e16f558fef0e-image-1744194301359.png) \- Tạo ra IPSec Crypto: ![file](/img/docs/c9d4bb7e41f8-image-1744194310783.png) \- Chọn IPsec Tunnels:

  * Tại tab General, điền Peer Address là IP của FPT đã tạo ở bước 1(trong hình là 103.176.147.48) ![file](/img/docs/af6f827c3860-image-1744194319286.png) +Tại tab Advanced Options điền các thông tin sau: ![file](/img/docs/443aff9d9fbb-image-1744194330142.png) \- Tạo ra GlobalProtect IPSec: ![file](/img/docs/aff2c542eba1-image-1744194338236.png) \- Tạo ra IPSec Tunnels: ![file](/img/docs/175f8eb55a84-image-1744194345834.png) ![file](/img/docs/6e262c62af7b-image-1744194370901.png) ![file](/img/docs/8d78429e7743-image-1744194404210.png)

## Bước 3: Cấu hình firewall và routing cho Palo Alto

Để cấu hình firewall và routing cho Palo Alto, thao tác theo các bước ở ví dụ dưới đây:

\- Mở firewall bất kỳ

Tuỳ theo từng khách hàng mà mở source và destination theo rule ![file](/img/docs/7a2a54718f3a-image-1744194387472.png) ![file](/img/docs/4fadaad6a420-image-1744194396699.png) ![file](/img/docs/09f9447b6681-image-1744194478669.png)

\- Mở Routing theo 2 subnet là 30.30.30.0/24 và 80.80.80/24 (tùy theo khách hàng mà mở source và destination theo rule). ![file](/img/docs/0030c70b2826-image-1744194487401.png) Tới đây khách hàng đã có thể mở Terminal - Command line để thử Ping thông mạng.

[ Previous Cấu hình thiết bị VPN phổ biến ](./common-config) [ Next Cấu hình VPN Site-to-Site với PfSense ](./connect-pfsense)
