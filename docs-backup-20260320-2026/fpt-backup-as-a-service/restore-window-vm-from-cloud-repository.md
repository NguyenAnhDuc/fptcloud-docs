---
sidebar_class_name: hidden
sidebar_label: "2. FPT Backup As a Service"
title: "2. FPT Backup As a Service"
source: "https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-window-vm-from-cloud-repository"
parent: "https://fptcloud.com/documents/fpt-backup-as-a-service"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Backup As a Service


Restore Window VM from Cloud Repository


* * *

**Bước 1:** Attach File ISO Veeam recovery media sau đó khởi đội VM từ File ISO (lưu ý VM cần có cùng số lượng disk và dung lượng disk). Giao diện console sau khi VM boot thành công.

Chọn Bare Metal Recovery

**Bước 2:** Chọn Network storage sau đó chọn Next.

Chọn Veeam Cloud Connect repository

**Bước 3:** Nhập URL của BaaS: baas-sgn-gw.fptcloud.com đối với site Hồ Chí Minh và baas-han-gw.fptcloud.com đối với site Hà Nội

**Bước 4:** Nhập Username/password của bạn. Sau đó ấn Enter để tiếp tục.

**Bước 5:** Lựa chọn VM cần restore và restore point mong muốn.

**Bước 6:** Chọn Manual restore để Map các ổ đĩa tương ứng.

Restore các ổ đĩa tương ứng.

**Bước 7:** Kiểm tra lại thông tin và chọn Restore để tiến hành khôi phục lại VM của bạn

[ Previous Restore File and Folder For Windows ](./restore-file-and-folder-for-windows) [ Next Restore Linux VM from Cloud Repository ](./restore-linux-vm-from-cloud-repository)
