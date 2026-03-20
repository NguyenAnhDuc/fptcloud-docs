---
sidebar_class_name: hidden
sidebar_label: "2. FPT Backup As a Service"
title: "2. FPT Backup As a Service"
source: "https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-file-and-folder-for-linux"
parent: "https://fptcloud.com/documents/fpt-backup-as-a-service"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Backup As a Service


Restore File and Folder for Linux


* * *

**Bước 1:** Trên server linux gõ lệnh veeam để khởi mở giao diện quản trị backup.

![file](/img/docs/653a169c3ab0-image-1695293630461.png)

**Bước 2:** Nhấn phím R.

![file](/img/docs/6b89098744c6-image-1695293640386.png)

Sử dụng phím tab để di chuyển sau đó lựa chọn thời điểm cần khôi phục

**Bước 3:** Cấu hình lại network nếu cần

Trường hợp VM khởi tạo để restore add network có DHCP thì không cần Configure network và có thể bỏ qua bước 3 này Còn lại cần phải click vào “Configure network” để đặt IP static cho VM restore. Note: IP của VM này cần được mở kết nối ra internet hoặc đến baas-sgn-gw.fptcloud.com (site HCM) và baas-han-gw.fptcloud.com port 6180 để thực hiện restore. ![file](/img/docs/c8d98b0cbb5e-image-1695293652239.png) Thực hiện chọn edit a connection để đặt IP manual cho VM restore: ![file](/img/docs/b227ce557f4a-image-1695294368455.png) Chọn Edit để set IP cho VM ![file](/img/docs/3f399b0ec248-image-1695294377573.png) Chọn IPv4 Configuration sau đó chọn mode Manual -> Show để đặt IP ![file](/img/docs/1b721428bdfb-image-1695294387294.png) Sau khi đặt xong IP chọn OK và nhấn ESC để back lại màn hình chính để tiến hành restore

**Bước 4:** Nhấn phím I để mount phân vùng chưa dữ liệu cần restore vào server. Dữ liệu sẽ được mount vào đường dẫn /mnt/backup

![file](/img/docs/59e66199895f-image-1695293662668.png)

**Bước 5:** Vào thư mục /mnt/backup

Copy file hoặc folder về nơi cần khôi phục.

![file](/img/docs/d1e922a01ddd-image-1695293675138.png)

**Bước 6:** Sau khi đã toàn thành việc restore file hoặc folder

Bạn vào lại phần mềm Veeam và ấn phím U để kết thúc việc restore.

![file](/img/docs/a9d869337d25-image-1695293683941.png)

[ Previous Install Veeam Agent for Windows ](./install-veeam-agent-for-windows) [ Next Restore File and Folder For Windows ](./restore-file-and-folder-for-windows)
