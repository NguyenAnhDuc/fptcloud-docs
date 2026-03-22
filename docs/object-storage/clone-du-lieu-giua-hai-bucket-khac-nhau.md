---
sidebar_class_name: hidden
sidebar_label: "Clone Du Lieu Giua Hai Bucket Khac Nhau"
title: "2. FPT Object Storage"
source: "https://fptcloud.com/documents/object-storage/?doc=clone-du-lieu-giua-hai-bucket-khac-nhau"
parent: "https://fptcloud.com/documents/object-storage"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Object Storage


Clone dữ liệu giữa hai bucket khác nhau


* * *

Trong trường hợp chuyển môi trường S3 từ nhà cung cấp khác đến S3 của FPT Smart Cloud hoặc sử dụng song song giữa 2 môi trường S3, chúng ta có thể sử dụng công cụ **Rclone** hoặc **s3sync** để giúp quá trình clone dữ liệu được tiến hành thuận tiện hơn. Đặt trường hợp ta đang sử dụng S3 Site01 và có ý định sẽ chuyển qua S3 Site02 và muốn clone dữ liệu từ bucket ở Site01 qua Site02. Để thực hiện điều này, FPT Smart Cloud hướng dẫn thực hiện trên các hệ điều hành như sau:

## Clone dữ liệu bucket với Linux

**Bước 1:** Tải và cài đặt công cụ **Rclone:**
    
    
    sudo apt-get install rclone

**Bước 2:** Để tạo thư mục rclone chứa thông tin Site01 và Site02, tạo file rclone.conf theo đường dẫn ~/.config/rclone/rclone.conf > Edit file rclone.conf với nội dung sau:

(Lưu ý ở mục provider có thể thay đổi tùy theo môi trường S3 sử dụng như AWS,…)
    
    
    [site01]
    
    type = s3
    
    provider = Other
    
    env\_auth = false
    
    access\_key\_id = 00d4701ee34ab6a0967b
    
    secret\_access\_key = SevRaN+gCPbIC6VvUjXx74mhHkbg0ZuQTFpmYTsa
    
    endpoint = https://s3-sgn09.fptcloud.com/
    
    acl = private
    
     
    
    [site02]
    
    type = s3
    
    provider = Other
    
    env\_auth = false
    
    access\_key\_id = XRRS541KWS8T9DMDRCFY
    
    secret\_access\_key = gknj5RPmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D
    
    endpoint = https://s3-hfx03.fptcloud.com/
    
    acl = private
    

Kết quả:

**![User guide FPT Object Storage 64](/img/docs/c2814219e812-User-guide-FPT-Object-Storage-64.png)**

**Bước 3:** Tại Site02 thực hiện tạo 1 bucket không chứa dữ liệu.

**Bước 4:** Kiểm tra bucket và dữ liệu ở 2 site thông qua **Rclone.**

**![User guide FPT Object Storage 65](/img/docs/b14d85c8ecda-User-guide-FPT-Object-Storage-65.png)**

**Bước 5:** Thực hiện clone dữ liệu từ site01:bucket-site01 sang site02:bucket-site02 bằng cách:
    
    
    * Thực hiện lệnh với option –dry-run để đảm bảo không có error trong qua trình clone.
    
    
    rclone sync -Pv site01:bucket-site01 site02:bucket-site02 –dry-run

**![User guide FPT Object Storage 66](/img/docs/e6bdef85e608-User-guide-FPT-Object-Storage-66.png)**

Sau khi chạy lệnh với option –dry-run không xuất hiện error > thực hiện chạy lệnh bỏ option –dry-run
    
    
    rclone sync -Pv site01:bucket-site01 site02:bucket-site02

**![User guide FPT Object Storage 67](/img/docs/c8f6524dbaa4-User-guide-FPT-Object-Storage-67.png)**

Sau khi thực hiện thành công, khách hàng có thể kiểm tra lại dữ liệu và bucket ở 2 site thông qua rclone.

**![User guide FPT Object Storage 68](/img/docs/50fda7a1fb5c-User-guide-FPT-Object-Storage-68.png)**

[ Previous Mount bucket thành ổ đĩa trên máy local ](./mount-bucket-thanh-o-dia-tren-may-local)
