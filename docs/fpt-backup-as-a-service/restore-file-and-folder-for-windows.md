---
sidebar_class_name: hidden
sidebar_label: "Restore file and folder for windows"
title: "2. FPT Backup As a Service"
source: "https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-file-and-folder-for-windows"
parent: "https://fptcloud.com/documents/fpt-backup-as-a-service"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Backup As a Service


Restore File and Folder For Windows


* * *

**Bước 1:** Khởi động Veeam Agent For Windows ![file](/img/docs/9e91c3cbc3a8-image-1695292398449.png) Lưu ý: Trường hợp thời điểm bạn muốn restore cũ hơn bạn phải sử dụn tính năng File Level Restore tham khảo bước 5

**Bước 2:** Click vào backup job chứa file mà bạn muốn restore sau đó chọ Restore Files ![file](/img/docs/6f9dec6fc3d8-image-1695292405251.png) **Bước 3:** Cửa sổ hiện ra, chọn file hoặc folder bạn muốn khôi phục. Chọn Restore Overwrite để khôi phục file đè lên file hiện tại. Hoặc chọn Keep để giữ file hiện tại, khi đó file restore sẽ được đổi tên. ![file](/img/docs/ad7d5f87f581-image-1695292409737.png) **Bước 4:** Bạn cũng có thể chọn Copy To để khôi phục ra một nơi khác. Chọn nơi lưu trũ file, folder sau đó bấn OK. ![file](/img/docs/bac4c7bef49f-image-1695292415057.png) **Bước 5:** Khởi động công cụ File Level Restore có sẵn trong bộ Veeam Agent For Windows. ![file](/img/docs/897334d8f096-image-1695292421939.png) **Bước 6:** Trong phần Restore Point. Chọn thời điểm bạn muốn khôi phục sau đó bấm Next. ![file](/img/docs/2d131ec19a5b-image-1695292427514.png) **Bước 7:** Chọn Open để tiếp tục. Sau khi cửa sổ restore hiện lên, quay lại bước 3 để tiếp tục. ![file](/img/docs/0161da63f154-image-1695292434984.png)

[ Previous Restore File and Folder for Linux ](./restore-file-and-folder-for-linux) [ Next Restore Window VM from Cloud Repository ](./restore-window-vm-from-cloud-repository)
