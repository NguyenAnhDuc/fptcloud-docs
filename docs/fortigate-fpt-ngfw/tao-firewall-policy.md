---
sidebar_class_name: hidden
sidebar_label: "Tao firewall policy"
title: "2. Fortigate – FPT NGFW"
source: "https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=tao-firewall-policy"
parent: "https://fptcloud.com/documents/fortigate-fpt-ngfw"
lang: vi
converted: "2026-03-19"
---

# 2. Fortigate – FPT NGFW


Tạo Firewall Policy


* * *

Tạo rule firewall cho phép một máy tính trong VLAN 10.2.0.0/24 (Port 3) kết nối ra internet.  
**Bước 1:** Cấu hình **Firewall Address** (định nghĩa các IP Address sử dụng):  
**Policy & Objects** > **Addresses** > **Create new** > **Address**.

![Userguide Fortigate FPT NGFW 2022 7](/img/docs/f6cbec98d177-Userguide-Fortigate-FPT-NGFW-2022-7-1024x422.png)

![Userguide Fortigate FPT NGFW 2022 8](/img/docs/6b3e2463f826-Userguide-Fortigate-FPT-NGFW-2022-8-1024x563.png)  
**Bước 2:** Tạo **Firewall Policy:**  
**Policy & Objects** > **Firewall Policy** > **Create new**  
![Userguide Fortigate FPT NGFW 2022 9](/img/docs/0428cf8ea9d2-Userguide-Fortigate-FPT-NGFW-2022-9-1024x657.png)  
Cấu hình **Interfaces** , **Action** , **Service** và các **Security Profiles** (Cấu hình các Security Profile ở mục 4.4)

![Userguide Fortigate FPT NGFW 2022 10](/img/docs/cfc82ca13316-Userguide-Fortigate-FPT-NGFW-2022-10-1024x541.png)

  * **Incoming Interface:** Chọn VLAN 10.2.0.0/24 (Port3).
  * **Outgoing Interfaces:** Chọn Port 2 (WAN).
  * **Source:** Chọn **Address** đã tạo ở bước 1.
  * **Destination:** Chọn **ALL** (hoặc có thể giới hạn các destionation bằng cách chọn nhiều destination đã tạo).
  * **Service:** Chọn **ALL**.
  * **NAT:** **Use Outgoing Interface Address** – NAT sử dụng IP public đã NAT qua Port 2 (WAN).![Userguide Fortigate FPT NGFW 2022 11](/img/docs/c05de94080f3-Userguide-Fortigate-FPT-NGFW-2022-11-1024x655.png)

Add thêm các Security profile để bảo vệ hệ thống bởi các mối nguy hại từ Internet.

  * **SSL Inspection:** Chuyển sang dạng deep-inspection. Yêu cầu cài đặt certificate trên browser người dùng. (Có thể download certificate bằng cách click vào **Deep-inspection** > **Edit** > **Download certificate**)

[ Previous Cấu hình Static Routes ](./cau-hinh-static-routes) [ Next Xóa Firewall Policy ](./xoa-firewall-policy)
