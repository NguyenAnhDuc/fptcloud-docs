---
sidebar_class_name: hidden
sidebar_label: "Upload file"
title: "2. Model Hub"
source: "https://fptcloud.com/documents/model-hub/?doc=upload-file"
parent: "https://fptcloud.com/documents/model-hub"
lang: vi
converted: "2026-03-19"
---

# 2. Model Hub


Upload file


* * *

Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng 

Các bước thực hiện: 

Bước 1: Click vào 1 model để xem chi tiết > Chọn tab Version 

Bước 2: Click vào dấu 3 chấm cột Action > Chọn Upload

![](/img/docs/1fbfb3219913-Picture20.png)

Bước 3: Sinh ra thông tin để upload file qua CLI. 

![](/img/docs/0bfbc3c3e84c-anh-2.png) Bước 4: Người dùng cần vào menu Configuration để lấy các thông tin Access/Secret key để upload file ![](/img/docs/dc5c31ee8dc7-anh-3.png) ![](/img/docs/1295fdc83b11-anh-4.png)

Ví dụ dùng tool S3 Client là WinSCP để upload file, bạn thao tác như sau: 

Bước 1: Cài WinSCP và mở WinSCP 

Bước 2: Nhập các thông tin để login vào WinSCP như sau: 

![](/img/docs/c505575f36fe-Picture22.png)

  * File protocol: chọn là Amazon S3 

  * Encryption: chọn TLS/SSL Implicit encryption 

  * Các trường Host name, Access key ID, Secret access key bạn thao tác như hướng dẫn bên dưới 

  * Port: 443 

![](/img/docs/91b976baed1a-Screenshot_19.png)

Sau khi login vào WinSCP thành công, bạn có thể thực hiện upload file, quản lí tệp lưu trữ trong model ngay trên đây. 

Trên portal, sau khi tải lên từ S3 Client, các file sẽ hiển thị tương ứng với từng version trong tab File Browser 

Người dùng chuyển sang tab File Browser và chọn version tương ứng để view, download file, delete file. 

![](/img/docs/50266ec81e82-Picture24.png)

[ Previous Upload file / Download file ](https://fptcloud.com) [ Next Download file ](./download-file)
