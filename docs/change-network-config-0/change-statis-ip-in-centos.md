---
sidebar_class_name: hidden
sidebar_label: "Sửa static IP trên CentOS"
title: "2. Change Network Config"
source: "https://fptcloud.com/documents/change-network-config-0/?doc=change-statis-IP-in-CentOS"
parent: "https://fptcloud.com/documents/change-network-config-0"
lang: vi
converted: "2026-03-19"
---

# 2. Change Network Config


Sửa static IP trên CentOS


* * *

**Bước 1:** Kiểm tra tình trạng hiện tại 

Sau khi edit NIC, IP NIC là 132.0.0.70 

![NIC VM Centos](/img/docs/9c72aa69248d-NIC-VM-Centos-1024x372.png)

  * Vào Console check bằng lệnh: “ip a” – Enter

![NIC VM CentOS console](/img/docs/3cb187fe240c-NIC-VM-CentOS-console-1024x311.png)

**Bước 2:** Vào file ifcfg-eth0, và sửa thông số: 

  * vi /etc/sysconfig/network-scripts/ifcfg-eth0

![Screenshot 2023 07 11 at 1.25.01 PM](/img/docs/ca5cfd6129ac-Screenshot-2023-07-11-at-1.25.01-PM.png)

**Bước 3** : Sửa thông số cấu hình 

  * Chuyển sang mode insert: nhấn phím “i”
  * Nhập thông số mới

![NIC VM CentOS console insert](/img/docs/4b7c26441efa-NIC-VM-CentOS-console-insert.png)

  * Nhấn “ESC”
  * Nhập :wq – enter để lưu lại

![NIC VM CentOS console insert wq](/img/docs/baea240e79b7-NIC-VM-CentOS-console-insert-wq.png)

**Bước 4** : Restart Networking service bằng lệnh: 

  * service network restart

![Screenshot 2023 07 11 at 1.28.27 PM](/img/docs/418b264e0dd3-Screenshot-2023-07-11-at-1.28.27-PM.png)

**Bước 5** : Kiểm tra lại cấu hình vào ping test 

![Screenshot 2023 07 11 at 1.28.45 PM](/img/docs/b786390c69c9-Screenshot-2023-07-11-at-1.28.45-PM.png)

[ Previous Sửa static IP trên Window server ](./change-static-ip-in-window-server)
