---
sidebar_label: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
title: "Change Network Config"
source: "https://fptcloud.com/documents/cloud-server/?doc=change-network-config"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Change Network Config


* * *

_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_

Có nhiều lý do khiến bạn có thể cần thay đổi và đặt lại địa chỉ IP tĩnh cho thiết bị của mình, chẳng hạn như cấu hình 1 máy chủ cố định hoặc cần đặt quy luật cho một nhóm máy tính trong nội bộ. Một kịch bản nữa là khi bạn thay đổi cấu hình card NIC trên hệ thống Cloud được cung cấp bởi FPT Smart Cloud, địa chỉ IP bên trong máy sẽ không tự cập nhật theo và bạn cần cấu hình thủ công (ngoài ra có một số phương pháp khác xử lý trong tình huống này nhưng không được đề cập trong nội dung bài viết).

**Những điều cần lưu ý trước khi bạn thay** **đổi thông tin file config network** : 

Đặt địa chỉ IP tĩnh có thể giúp tránh xung đột mạng nhưng có thể khiến một số thiết bị ngừng hoạt động bình thường. Đặt địa chỉ IP tĩnh là một chức năng mạng nâng cao và cần có kiến thức cơ bản về TCP/IP. 

### **Sửa static IP trên Ubuntu server**

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

### **Sửa static IP trên Window server**

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

### **Sửa static IP trên CentOS**

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

[ Previous Xóa Network Interface Card ](./delete-card-nic) [ Next Networking ](./network-all)
