---
sidebar_class_name: hidden
sidebar_label: "Install veeam agent for windows"
title: "2. FPT Backup As a Service"
source: "https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=install-veeam-agent-for-windows"
parent: "https://fptcloud.com/documents/fpt-backup-as-a-service"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Backup As a Service


Install Veeam Agent for Windows


* * *

**Bước 1** : Trên server cần backup, login vào trang portal với account của bạn: Backup as a Service : <https://baas.fptcloud.com> ![file](/img/docs/41580e19fd84-image-1695292106378.png) Đây là giao diện quản trị của bạn sau khi login thành công: ![file](/img/docs/71164f38198a-image-1695292115345.png) **Bước 2** : Vào mục **Managed Computers** chọn **Download Agent** sau đó chọn **Window**. ![file](/img/docs/91d52bda78ec-image-1695292124121.png) Chỉnh thời gian Token hết hạn theo nhu cầu. Mặc định là 12 Tháng. ![file](/img/docs/e41cc91e27c9-image-1695292132688.png) **Bước 3:** Sau khi download thành công ta tiến hành cài đặt Management Agent trên server cần backup: ![file](/img/docs/c8534ab59ac3-image-1695292142746.png) Chọn Next để tiếp tục: ![file](/img/docs/ee0a607d26c9-image-1695292150003.png) Chấp nhận điều khoản sau đó bấm **Next** Tiếp tục ấn **Install** để tiến hành cài đặt: ![file](/img/docs/c5dc2ad5744d-image-1695292159209.png) ![file](/img/docs/de1038c54860-image-1695292167306.png) **Bước 4:** Sau khi cài đặt xong Veeam Agent Management sẽ tự động kết nối tới portal và cài đặt Veeam Agent For Windows

Cloud Gateway: baas-sgn-gw.fptcloud.com hoặc baas-han-gw.fptcloud.com Port: 6180 ![file](/img/docs/c17bd7f4befc-image-1695292180601.png)

**Bước 5:** Kiểm tra VM xuất hiện trên portal và tiến trình cài đặt Veeam Agent thành công. ![file](/img/docs/db0a966c5afa-image-1695292191409.png) **Bước 6:** Kiểm tra Job backup xuất hiện trên portal và Veeam Agent For Windows đã được cài đặt trên Server. ![file](/img/docs/f521f8f1308a-image-1695292197657.png) ![file](/img/docs/fd9d30b7881c-image-1695292206361.png)

[ Previous Install Veeam Agent for Linux ](./install-veeam-agent-for-linux) [ Next Restore File and Folder for Linux ](./restore-file-and-folder-for-linux)
