---
sidebar_class_name: hidden
sidebar_label: "Sửa static IP trên Ubuntu server"
title: "2. Change Network Config"
source: "https://fptcloud.com/documents/change-network-config-0/?doc=change-static-IP-in-Ubuntu-server"
parent: "https://fptcloud.com/documents/change-network-config-0"
lang: vi
converted: "2026-03-19"
---

# 2. Change Network Config


Sửa static IP trên Ubuntu server


* * *

**Bước 1:** Kiểm tra tình trạng hiện tại 

  * Sau khi edit NIC, IP NIC là 132.0.0.190

![NIC VM ubuntu](/img/docs/84e18337cb9d-NIC-VM-ubuntu-1024x372.png)

  * Bấm vào Console và đăng nhập vào hệ thống

  * Nhập ifconfig

![NIC VM ubuntu console](/img/docs/949ea6c3903c-NIC-VM-ubuntu-console.png)

**Bước 2:** Mở file 00-installer-config.yaml 

“vi 00-installer-config.yaml 

![Screenshot 2023 07 11 at 1.06.36 PM](/img/docs/c1e702aab890-Screenshot-2023-07-11-at-1.06.36-PM.png)

Và chuyển sang mode “Insert” (nhấn phím “i”) 

**Bước 3:** Sửa lại các thông số cần thiết. 

![Screenshot 2023 07 11 at 1.06.53 PM](/img/docs/68a5c57872fc-Screenshot-2023-07-11-at-1.06.53-PM.png)

  * Write and quit: Nhấn “Esc” sau đó nhập :wq, sau đó nhấn “Enter”

![Screenshot 2023 07 11 at 1.07.26 PM](/img/docs/46cc3684863e-Screenshot-2023-07-11-at-1.07.26-PM.png)

**Bước 4:** Nhâp lệnh sau đây để cập nhật thay đổi: 

  * Sudo netplan apply

![Screenshot 2023 07 11 at 1.10.56 PM](/img/docs/0a072ee4e747-Screenshot-2023-07-11-at-1.10.56-PM.png)

**Bước 5** : Check lại địa chỉ IP đã thay bằng lệnh ifconfig 

![Screenshot 2023 07 11 at 1.12.57 PM](/img/docs/223067ab6eeb-Screenshot-2023-07-11-at-1.12.57-PM.png)![Screenshot 2023 07 11 at 1.13.18 PM](/img/docs/87f0f02a8e4b-Screenshot-2023-07-11-at-1.13.18-PM.png)

[ Next Sửa static IP trên Window server ](./change-static-ip-in-window-server)
