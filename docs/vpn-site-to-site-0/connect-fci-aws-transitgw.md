---
sidebar_class_name: hidden
sidebar_label: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)"
title: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-aws-transitgw"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)


* * *

**Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng AWS và OPS trên Unify portal**

  * I. Cấu hình VPN Site-to-Site trên FCI Cloud
  * II. Cấu hình VPN Site-to-Site trên AWS
  * III. Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS

Trong ví dụ này chúng ta sẽ tạo kết nối VPN Site-to-Site với các thông số như trong topology bên dưới:

![file](/img/docs/7059bf1de1c8-image-1744187555434.png)

## I. Cấu hình VPN Site-to-Site trên FCI Cloud

**Bước 1. Tạo Customer gateways**

1.1 Tạo customer gateway với các bước sau:

![](/img/docs/336a5990c716-photo_1_2025-07-09_17-36-42.jpg)

1.2 Tạo customer gateway với các thông tin sau:

![](/img/docs/7a7fc088e37c-photo_2_2025-07-09_17-36-42.jpg)

1.3 Kết quả:

![](/img/docs/cc4e0bfd7bb6-photo_3_2025-07-09_17-36-42.jpg)

Lưu ý, vì ta chưa tạo VPN ở AWS nên bước này vẫn là IP ngẫu nhiên, Tới cuối bài, ta sẽ chỉnh sửa lại IP này ở Phần 1.1   

**Bước 2. Tạo VPN connection**

Thông số của VPN Connection sẽ bao gồm 3 mục chính:

  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**

![](/img/docs/7456c9721e5b-photo_4_2025-07-09_17-36-42.jpg)

**Phần 2: Remote VPN information** ![](/img/docs/e0dc4e565ea1-photo_5_2025-07-09_17-36-42.jpg)

Khi quý khách hàng lựa chọn Providers “AWS ”,hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:

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

**Phần 3: Remote VPN information** ![](/img/docs/6969ef54be9f-Screenshot-2025-08-18-110311-4.png)

Điền thông số Delay và max failure và chọn **Create VPN Connection**

Sau khi VPN HAN khởi tạo hoàn tất, VPN Connection kết nối hai dải mạng LAN sẽ ONLINE, và các VM sẽ có thể giao tiếp với nhau qua IP LAN của chúng.

## II. Cấu hình VPN Site-to-Site trên AWS

**Bước 1.** Tạo **Customer gateway**  
**Customer Gateway** là một tài nguyên trong AWS để đại diện cho thiết bị **gateway** tại on-premises network.  
Để tạo Customer gateway thao tác như sau:

  1. Truy cập: <https://console.aws.amazon.com/vpc/>
  2. Chọn **Customer gateways > Create customer gateway**

Nhập các trường thông tin và IP address là **Local IP public** của VPN Gateway FCI  
![file](/img/docs/6a0f1b1a1b94-image-1744188410276.png)

  3. Chọn **Create Customer gateway**

Thông tin **Customer gateway** đã tạo:  
![file](/img/docs/f32f6ae2179f-image-1744188423009.png) **Bước 2. Tạo Create transit gateway**  
Để tạo Create transit gateway thao tác như sau:

  1. Trên navigation pane, chọn Transit gateway **> Create transit gateway** ![file](/img/docs/cdb7a1f9979c-image-1744188442634.png)
  2. Kết quả sau khi tạo ![file](/img/docs/7114d4b9bdcb-image-1744188583244.png)
  3. Attach **transit gateway** vừa tạo vào **VPC** ![file](/img/docs/a65a47449cde-image-1744188600627.png)   
**Bước 3. Tạo VPN connection**

3.1. Tạo **VPN connection** Tạo **VPN connection** bằng **Customer gateway ( Phần I.4.3)** và **Attach Transit Gateway** đã tạo ở bên trên đó. 

Để tạo VPN connection:

  1. Tại navigation pane, chọn **Site-to-Site VPN connections**.
  2. Chọn **Create VPN connection**.
  3. Chọn **Target gateway type** là **Transit Gateway**
  4. Chọn **Transit Gateway** và Customer gateway đã tạo trước đó
  5. Routing option chọn **Static,** static IP prefixes**:** Nhập dải subnet phía FCI( 172.16.8.0/24)
  6. Nhập **Local IPv4 network** : Nhập dải subnet phía FCI
  7. Nhập **Remote IPv4 network** : Nhập dải subnet phía AWS
  8. Chỉnh sửa các thông số cho **tunnel1** và **tunnel2**
  9. **Chọn Create VPN connection**.

![file](/img/docs/2f54788d5495-image-1744188630355.png)

![file](/img/docs/8d296d6c6e48-image-1744188646389.png) 3.2 Attach **transit gateway** vào **VPN connection** ![file](/img/docs/061bd822dc92-image-1744188658544.png) **Kết quả:** ![file](/img/docs/b3f5084119fd-image-1744188666706.png) **Bước 4. Cấu hình routing**  
Config routing để hướng lưu lượng từ VPC (AWS) đến Customer Gateway (FCI) thông qua **Transit Gateway**. 

Thêm các routes từ VPN connection vào route table. (subnet FCI: 172.16.8.0/16 ) ![file](/img/docs/612ad31ac1a0-image-1744188682034.png) **Bước 5. Cập nhật Security group**  
Cập nhật các S**ecurity group** để cho phép truy cập **SSH** , **RDP** và **ICMP**.  
Để thêm rule vào **Security group** thao tác như sau:

  1. Tại navigation pane, chọn **Security groups**.
  2. Chọn security group cho instances trong VPC muốn cho phép truy cập.
  3. Tại **Inbound rules tab** , Chọn **Edit inbound rules**. Cho phép dãy subnet của FCI qua với trạng thái All Traffic.
  4. Thêm rules để allow inbound SSH, RDP, and ICMP, và sau đó chọn **Save rules** ![file](/img/docs/3295619c2f7f-image-1744188698660.png) Khởi tạo thành công VPN Connection có trạng thái là **'Available'.** Tiếp theo, kiểm tra lại **Route table** đã route đúng chưa. 

**Bước 6. Tải configuration file**  
Sau khi tạo VPN connection, có thể tải xuống **configuration file** để sử dụng cho việc định cấu hình tại FCI VPC.  
Để tải **configuration file** thao tác như sau:

  1. Vào trang VPN connection
  2. Chọn connection vừa tạo > chọn **Download configuration**
  3. Chọn Vendor: **pfSense** , IKE version: **IKEv1( hoặc IKEv2)** > chọn **Download** ![file](/img/docs/b4bdaa67a704-image-1744188724857.png) Ta sẽ dựa vào configuration file này để tạo VPN Site-to-Site phía FCI 

## III. Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS

  1. Sử dụng IP ở Tunnel 1 để chỉnh sửa lại ở phía FCI: ![file](/img/docs/65ec6a49ca2f-image-1744188753554.png)

  2. Edit Customter Gateways theo IP mới của AWS đã tạo. ![file](/img/docs/69678af012de-image-1744188812981.png)   
Điền thông tin IP của tunnel AWS vào field remote IP public  
![file](/img/docs/52186cfb42e0-image-1744188828118.png)

  * Đến đây chúng ta đã hoàn thành cấu hình VPN Site-to-Site giữa AWS và FCI Cloud
  * Sau khi kết nối thành công ở cuối bài hướng dẫn `**Operation status** ` của các VPN connection phía FCI Cloud sẽ là `**Online** ` và AWS là `UP` ở tunnel 1
  * **Kiểm tra trạng thái kết nối phía AWS**  
Vào **VPN connections** > chọn **VPN connection** > chọn **Tunnel details**  
Nếu kết nối thành công **status** của các tunnels sẽ là `**UP** `
  * **Cách Kiểm tra kết quả:**

Khởi tạo các VM nằm trong mỗi VPC sử dụng dải mảng trong VPN Site-to-Site và PING các VM qua lại với nhau.

**Kết quả khi PING từ FCI qua AWS**  
**Kết quả khi PING từ AWS qua FCI Cloud**

[ Previous Cấu hình VPN Site-to-Site với CheckPoint R81.20 ](./connect-checkpoint-r8120) [ Next Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways) ](./connect-fci-aws-virtualgw)
