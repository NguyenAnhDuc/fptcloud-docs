---
sidebar_class_name: hidden
sidebar_label: "2. FPT Backup As a Service"
title: "2. FPT Backup As a Service"
source: "https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-linux-vm-from-cloud-repository"
parent: "https://fptcloud.com/documents/fpt-backup-as-a-service"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Backup As a Service


Restore Linux VM from Cloud Repository


* * *

**Bước 1:** Để restore 1 VM Linux bạn cần download file ISO Veeam recovery media từ trang chủ của VEEAM. Download file ISO phù hợp với hệ điều hành của VM cần khôi phục. ![file](/img/docs/7017717ba943-image-1695294618113.png)

**Bước 2:** Khởi động lại VM và boot từ ISO Veeam recovery media. Đồng ý với điều khoản sau đó tiếp tục. ![file](/img/docs/2a9750bee52a-image-1695294644895.png) **Bước 3:** Cấu hình lại network nếu cần Trường hợp VM khởi tạo để restore add network có DHCP thì không cần Configure network và có thể bỏ qua bước 3 này Còn lại cần phải click vào “Configure network” để đặt IP static cho VM restore. Note: IP của VM này cần được mở kết nối ra internet hoặc đến baas-sgn-gw.fptcloud.com (site HCM) và baas-han-gw.fptcloud.com port 6180 để thực hiện restore ![file](/img/docs/44391ccfd60d-image-1695294671316.png) Thực hiện chọn edit a connection để đặt IP manual cho VM restore: ![file](/img/docs/3a5125db878f-image-1695294681820.png) Chọn Edit để set IP cho VM ![file](/img/docs/3e2748f0efac-image-1695294692535.png) Chọn IPv4 Configuration sau đó chọn mode Manual -> Show để đặt IP ![file](/img/docs/9bc47e746181-image-1695294702919.png) Sau khi đặt xong IP chọn OK và nhấn ESC để back lại màn hình chính để tiến hành restore ![file](/img/docs/cfae6dc76b7d-image-1695294720487.png) **Bước 4:** Chọn Add Cloud provider ![file](/img/docs/99ac30bf4ea9-image-1695294739863.png) **Bước 5:** Nhập URL gateway của BaaS: baas-sgn-gw.fptcloud.com (site HCM) hoặc baas-han-gw.fptcloud.com (site Hà Nội) ![file](/img/docs/e258de28826a-image-1695294750751.png) **Bước 6:** Nhập Username/password của bạn. Sau đó ấn Enter để tiếp tục. ![file](/img/docs/6db27dc06038-image-1695294761178.png) **Bước 7:** Chọn tên backup job và restore poin mong muốn. ![file](/img/docs/817c2f15a996-image-1695294772745.png) **Bước 8:** Map các ổ đĩa tương ứng. ![file](/img/docs/e28a2a8cf44c-image-1695294786115.png) Restore các ổ đĩa tương ứng. ![file](/img/docs/07dc8c7bb764-image-1695294797487.png) ![file](/img/docs/3d68dddb2617-image-1695294806424.png) ![file](/img/docs/68eb070fe8c2-image-1695294815857.png) **Bước 9:** Ấn S để Start restore ![file](/img/docs/efac8f85e341-image-1695294824016.png)

[ Previous Restore Window VM from Cloud Repository ](./restore-window-vm-from-cloud-repository) [ Next Create Veeam Recovery Media ](./create-veeam-recovery-media)
