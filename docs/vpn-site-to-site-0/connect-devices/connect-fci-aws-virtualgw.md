---
sidebar_label: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)"
title: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-aws-virtualgw"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)


* * *

Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng AWS và OPS trên Unify portal 

  * I. Cấu hình VPN Site-to-Site trên AWS
  * II. Cấu hình VPN Site-to-Site trên FCI Cloud

Trong ví dụ này chúng ta sẽ tạo kết nối VPN Site-to-Site với các thông số như trong topology bên dưới: ![file](/img/docs/6cf9e3e45e33-image-1744187648981.png)

## I. Cấu hình VPN Site-to-Site trên AWS

**Bước 1.** Tạo **Customer gateway**  
**Customer Gateway** là một tài nguyên trong AWS để đại diện cho thiết bị **gateway** tại on-premises network.  
Để tạo Customer gateway thao tác như sau:

a. Truy cập: <https://console.aws.amazon.com/vpc/>  
b. Chọn **Customer gateways > Create customer gateway**

Nhập các trường thông tin và IP address là **Local IP public** của VPN Gateway FCI  
![file](/img/docs/0dcc058507a6-image-1744187677872.png) c. Chọn **Create** **customer gateway**

Thông tin **Customer gateway** đã tạo  
![file](/img/docs/55fef092012c-image-1744187689933.png) **Bước 2. Tạo Virtual Private Gateway**  
Để tạo **Virtual Private Gateway** thao tác như sau:

a. Trên navigation pane, chọn **Virtual private gateways > Create virtual private gateway** ![file](/img/docs/c2839df5d1b8-image-1744187701228.png) b. Chọn **Create virtual private gateway**

Kết quả sau khi tạo  
![file](/img/docs/66613e9baba6-image-1744187719077.png) c. Attach **Virtual private gateway** vào **VPC** ![file](/img/docs/441a90e2cf0a-image-1744187728890.png) **Bước 3. Cấu hình routing**  
Config routing để hướng lưu lượng từ VPC (AWS) đến Customer Gateway (FCI) thông qua **Virtual Private Gateway**.  
Bật tính năng **route propagation** cho route table để tự động thêm các routes từ VPN connection vào route table

a. Vào navigation pane, chọn **Route tables**.  
b. Chọn **Route table** được liên kết với subnet.  
c. Trên tab **Route propagation** , chọn **Edit route propagation**.  
d. Chọn **Virtual private gateway** đã tạo trong quy trình trước đó > **Enable Propagation** , sau đó chọn Lưu.  
![file](/img/docs/351eed1665ba-image-1744187790410.png) ![file](/img/docs/b442a51d8e7c-image-1744187804388.png) **Bước 4. Cập nhật Security group**   
Cập nhật các S**ecurity group** để cho phép truy cập **SSH** , **RDP** và **ICMP**.  
Để thêm rule vào **Security group** thao tác như sau:

a. Tại navigation pane, chọn **Security groups**.  
b. Chọn security group cho instances trong VPC muốn cho phép truy cập.  
c. Tại **Inbound rules tab** , Chọn **Edit inbound rules**.  
d. Thêm rules để allow inbound SSH, RDP, and ICMP, và sau đó chọn **Save rules**  
![file](/img/docs/0822561581c2-image-1744187818170.png) **Bước 5. Tạo VPN connection**  
Tạo **VPN connection** bằng **Customer gateway** kết hợp với **Virtual private gateway** đã tạo trước đó.  
Để tạo VPN connection

a. Tại navigation pane, chọn **Site-to-Site VPN connections**.  
b. Chọn **Create VPN connection**.  
c. Chọn **Target gateway type** là **Virtual private gateway**  
d. Chọn **VGW** và **CGW** đã tạo trước đó  
e. Routing option chọn **Static,** static IP prefixes**:** Nhập dải subnet phía FCI  
g. Nhập **Local IPv4 network** : Nhập dải subnet phía FCI  
h. Nhập **Remote IPv4 network** : Nhập dải subnet phía AWS và lựa chọn tunnel 1 options  
![](/img/docs/b9c9d9348da1-6219884231644005855.jpg) j. Chọn edit tunnel options để chỉnh sửa các thông số cho tunnel   
![](/img/docs/281ed669289a-6219884231644005851.jpg) k. Chỉnh sửa các thông số cho **tunnel1** và **tunnel2**  
**Note:** Ở ví dụ này, bạn không cần nhập gì vì AWS sẽ tự động chọn giá trị default là 28800 và 3600 (các giá trị này sẽ đuợc set ở phía FCI để tối ưu hoá kết nối ở các buớc sau)  
![](/img/docs/16c34358ad4a-6219884231644005852.jpg)  
Đối với thông tin DPD timeout action, cần set về chế độ restart (ở chế độ này khi DPD bị timeout AWS sẽ tự động thực hiện khởi động lại kết nối)  
![file](/img/docs/270e8f321381-image-1757057205670.png)  
l. **Chọn Create VPN connection**.  
![file](/img/docs/b446a286f367-image-1744187835664.png) Khởi tạo thành công VPN Connection có trạng thái là **'Available'.** ![file](/img/docs/50a964f92cae-image-1744187854348.png) Tiếp theo, kiểm tra lại **Route table** đã route đúng chưa.  
![file](/img/docs/02a2bf0b2462-image-1744187883700.png) **Bước 6. Tải configuration file**  
Sau khi tạo VPN connection, có thể tải xuống **configuration file** để sử dụng cho việc định cấu hình tại FCI VPC.  
Để tải **configuration file** thao tác như sau:

a. Vào trang VPN connection  
b. Chọn connection vừa tạo > chọn **Download configuration**  
c. Chọn Vendor: **pfSense** , IKE version: **IKEv1** > chọn **Download**  
![file](/img/docs/6e8c1fafb4f9-image-1744187893211.png) Ta sẽ dựa vào configuration file này để tạo VPN Site-to-Site phía FCI ![file](/img/docs/dcef580b5c77-image-1744187903307.png)

## II. Cấu hình VPN Site-to-Site trên FCI Cloud

**Bước 1. Tạo Customer gateways**  
Tạo customer gateway với các thông tin sau:

![](/img/docs/cc7cebe89e88-photo_1_2025-07-09_17-36-59.jpg)

**Bước 2. Tạo VPN connection**

Thông số của VPN Connection sẽ bao gồm 3 mục chính:

  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**

![](/img/docs/3833c2bc64cd-photo_2_2025-07-09_17-36-59.jpg)

**Phần 2: Remote VPN information**

![](/img/docs/ee6482874ab8-photo_3_2025-07-09_17-36-59.jpg)

Khi quý khách hàng lựa chọn Providers “AWS”,hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:

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

**Phần 3: Remote VPN information**

![](/img/docs/ee1b7efc74ff-Screenshot-2025-08-18-110311-2.png)

Điền thông số Delay và max failure và chọn **Create VPN Connection**

Sau khi kết nối thành công `**Operation status** ` của các VPN connection phía FCI Cloud sẽ là `**Online** ` 

![](/img/docs/a6d918ea51b6-photo_5_2025-07-09_17-36-59.jpg)

  * **Kiểm tra trạng thái kết nối phía AWS**  
Vào **VPN connections** > chọn **VPN connection** > chọn **Tunnel details**  
Nếu kết nối thành công **status** của các tunnels sẽ là `**UP** ` ![file](/img/docs/a2fcb953b8a4-image-1744188021396.png)
  * **Kiểm tra kết quả**

Khởi tạo các VM nằm trong mỗi VPC sử dụng dải mảng trong VPN Site-to-Site và PING các VM qua lại với nhau.

**Kết quả khi PING từ FCI qua AWS**  
![file](/img/docs/8bf2d7b01844-image-1744188035465.png)   
**Kết quả khi PING từ AWS qua FCI Cloud**  
![file](/img/docs/16df2ffbf8eb-image-1744188059608.png)

[ Previous Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway) ](./connect-fci-aws-transitgw) [ Next Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware ](./connect-fci-vmware)
