---
sidebar_class_name: hidden
sidebar_label: "Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware"
title: "Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-vmware"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware


* * *

Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng VMW và OPS trên Unify portal 

  * Bước 1: Cấu hình VPN_AAS trên Openstack
  * Bước 2: Cấu hình VPN_AAS trên VMWare Cloud
  * Bước 3: Kiểm tra kết nối

Cần đảm bảo các điều kiện sau:

  * VPNAAS OPS trên trang Portal Unify
  * VMWare Cloud

Trong ví dụ này chúng ta sẽ tạo kết nối VPN site-to-site với các thông số như trong topology bên dưới. ![file](/img/docs/ef1c7215455b-image-1744186989019.png)

## Bước 1: Cấu hình VPN_AAS trên Openstack

Truy cập và tạo VPN Site To Site trên [**https://console.fptcloud.com**](<https://console.fptcloud.com/>)

\- Tạo Customer Gateway

\+ Remote IP public: là floating IP của VPN gateway VMW**

\+ Remote private network: là dãy Lan Subnet cần peering của VMW**

![](/img/docs/46c848d8f99d-photo_1_2025-07-09_17-37-17.jpg)

\- Tạo VPN Connection  
Với thông số **"Pre-shared key" cần lưu lại để điền khi khởi tạo VPN Connection bên VMW.**

Thông số của VPN Connection sẽ bao gồm 3 mục chính:

  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information** ![](/img/docs/85fbfff3c24b-photo_2_2025-07-09_17-37-17.jpg)

**Phần 2: Remote VPN information**

![](/img/docs/fc829da9e072-photo_3_2025-07-09_17-37-17.jpg)

Quý khách hàng lựa chọn Providers = “others" sau đó làm theo các bước sau:

  * Bước 1: Điền providers name = "VMWare" 

  * Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:   
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

**Phần 3: Remote VPN information** ![](/img/docs/d443cc15679b-Screenshot-2025-08-18-110311-1.png)

Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 2: Cấu hình VPN_AAS trên VMWare Cloud

\- Truy cập hệ thống VMware để set up thông tin kết nối VPN Site to Site. ![file](/img/docs/a443e4570e6a-image-1744187357567.png) **-** Tại tab **Peer Authentication,** với thông số **Pre-shared key,** nhập key đã đã tạo ở OSP, sau đó ấn Next. ![file](/img/docs/21260a997bdc-image-1744187368445.png)

  * Nhập các trường thông tin của **Endpoint Configuration** ![file](/img/docs/c3f680db6cdf-image-1744187391395.png)

  * Sau khi tạo, chọn **Customize Security Profile** để sửa lại thông tin IKE policy, IPSec policy **khớp với IKE policy, IPSec policy đã tạo ở OSP** ![file](/img/docs/947bda1b9da1-image-1744187411562.png) **-** Chọn **View statistics** , để kiểm tra trạng thái kết nối.  
Nếu trạng thái hiển thị là **UP** → đã connect thành công giữa 2 sites. ![file](/img/docs/91d113cee0e7-image-1744187423506.png) ![file](/img/docs/3206ec31d53d-image-1744187435352.png)

## Bước 3: Kiểm tra kết nối

  * Ping từ VM OPS -> VM VMWare ![file](/img/docs/2d623cf17d1d-image-1744187482688.png)
  * Ping từ VM VMWare-> VM OSP ![file](/img/docs/5bc3e11833b6-image-1744187497120.png)

[ Previous Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways) ](./connect-fci-aws-virtualgw) [ Next Cấu hình VPN Site-to-Site với Fortigate ](./connect-fci-fortigate)
