---
sidebar_class_name: hidden
sidebar_label: "Install veeam agent for linux"
title: "2. FPT Backup As a Service"
source: "https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=install-veeam-agent-for-linux"
parent: "https://fptcloud.com/documents/fpt-backup-as-a-service"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Backup As a Service


Install Veeam Agent for Linux


* * *

**Bước 1** : Trên server cần backup, login vào trang portal với account của bạn:

Backup as a Service : <https://baas.fptcloud.com>

![file](/img/docs/244344032e55-image-1695290664395.png)

Đây là giao diện quản trị của bạn sau khi login thành công:

![file](/img/docs/d34bc29d1450-image-1695290688881.png)

**Bước 2** : Vào mục **Managed Computers** chọn **Download Agent** sau đó chọn **Linux**.

![file](/img/docs/8dee543b974e-image-1695290710281.png)

Chỉnh thời gian Token hết hạn theo nhu cầu. Mặc định là 12 Tháng.

![file](/img/docs/1b6f23f5f988-image-1695290727809.png)

**Bước 3** : Sau khi download thành công file LinuxAgentPackages.sh bạn cần copy vào trong server và tiến hành cài đặt.

Chạy lệnh sau:
    
    
    sudo chmod +x LinuxAgentPackages.sh  
    sudo ./LinuxAgentPackages.sh  
      
    

![file](/img/docs/3e4654e1b700-image-1695290745234.png)

**Bước 4** : Veeam sẽ tự động cài đặt Veeam Agent sau khi script chạy thành công.

Kiểm tra trạng thái kết nối bằng command sau:
    
    
    veeamconsoleconfig -s

![file](/img/docs/5ebe5284f371-image-1695290759883.png)

**Bước 5** : Kiểm tra quá trình cài đặt thành công

![file](/img/docs/933364fa60ec-image-1695290772560.png)

Kiểm tra job backup đã có trong mục Backup Job.

![file](/img/docs/f99963d4c055-image-1695290783350.png)

[ Next Install Veeam Agent for Windows ](./install-veeam-agent-for-windows)
