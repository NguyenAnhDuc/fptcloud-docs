---
sidebar_class_name: hidden
sidebar_label: "2. Change Network Config"
title: "2. Change Network Config"
source: "https://fptcloud.com/documents/change-network-config-0/?doc=change-static-IP-in-window-server"
parent: "https://fptcloud.com/documents/change-network-config-0"
lang: vi
converted: "2026-03-19"
---

# 2. Change Network Config


Sửa static IP trên Window server


* * *

**Bước 1:** Kiểm tra tình trạng hiện tại 

Sau khi edit NIC, IP NIC là 132.0.0.182 

![NIC VM window 2012](/img/docs/cdd0fc49e998-NIC-VM-window-2012-1024x372.png)

  * Bấm vào Console và đăng nhập vào hệ thống
  * Vào Power Shell hoặc Comand Line – Nhập “ipconfig” – Enter

![NIC VM window power shell](/img/docs/1b543bec768a-NIC-VM-window-power-shell.png)

**Bước 2** : vào Run – Nhập “ncpa.cpl” 

![NIC VM window run ncpa.cpl](/img/docs/4147bd625483-NIC-VM-window-run-ncpa.cpl_.png)

**Bước 3:** Phải chuột vào card mạng cần thay đổi Config, chọn propertise 

![NIC VM window network setting](/img/docs/ee7e82cd94a6-NIC-VM-window-network-setting.png)

**Bước 4** : Thay đổi các thông số theo cấu hình mới – OK 

![NIC VM window network setting config IPv4 ok](/img/docs/ab0305c9972d-NIC-VM-window-network-setting-config-IPv4-ok-1024x.png)

**Bước 5:** Kiểm tra lại các thay đổi và ping thử 

![NIC VM window network setting config IPv4 test](/img/docs/9b70a68d13d3-NIC-VM-window-network-setting-config-IPv4-test-102.png)

[ Previous Sửa static IP trên Ubuntu server ](./change-static-ip-in-ubuntu-server) [ Next Sửa static IP trên CentOS ](./change-statis-ip-in-centos)
