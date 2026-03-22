---
sidebar_class_name: hidden
sidebar_label: "Mount bucket thành ổ đĩa trên máy local"
title: "2. FPT Object Storage"
source: "https://fptcloud.com/documents/object-storage/?doc=mount-bucket-thanh-o-dia-tren-may-local"
parent: "https://fptcloud.com/documents/object-storage"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Object Storage


Mount bucket thành ổ đĩa trên máy local


* * *

## Mount bucket với Windows

Ngoài trường hợp sử dụng qua **FPT Portal** , **S3 Browser** chúng ta có thể sử dụng trực tiếp S3 bucket trên **FPT Object Storage** như một ổ đĩa của máy tính sử dụng hệ điều hành Windows thông qua công cụ TntDrive qua các bước sau:

**Bước 1:** Truy cập và tiến hành download công tụ **TntDrive.**

**Bước 2:** Mở **TntDrive** > Chọn **Accounts** > **Add new account.**

![User guide FPT Object Storage 55](/img/docs/7eb6bc1c40fa-User-guide-FPT-Object-Storage-55.png)

**Bước 3:** Nhập các thông tin tương tự khi sử dụng **S3 Browser.**

![User guide FPT Object Storage 56](/img/docs/57f8f1835e4f-User-guide-FPT-Object-Storage-56.png)

**Bước 4:** Khách hàng sau khi đã nhập thông tin account trong công cụ **TntDrive** > Chọn **Add New Mapped Drive**.

![User guide FPT Object Storage 57](/img/docs/0f158d91b909-User-guide-FPT-Object-Storage-57.png)

**Bước 5** : Chọn các thông tin như sau:

  * **Storage account:** Chọn tên account vừa thêm.
  * **Amazon S3 Bucket:** Chọn bucket muốn mount.Bạn có thể nhập trực tiếp tên hoặc chọn icon để chọn.
  * **Mapped drive letter:** Chọn tên ổ đĩa để map với bucket.![User guide FPT Object Storage 58](/img/docs/f37e041cf6df-User-guide-FPT-Object-Storage-58.png)

**Bước 6** : Chọn **Add new drive**. Lúc này ở giao diện **TntDrive** sẽ hiển thị trạng thái ổ đĩa đã mount

![User guide FPT Object Storage 59](/img/docs/8342cb8302e1-User-guide-FPT-Object-Storage-59.png)

Bạn có thể kiểm tra trong File Explorer

![User guide FPT Object Storage 60](/img/docs/c5d9eea8fd8c-User-guide-FPT-Object-Storage-60.png)

## Mount bucket với Linux

Trong hướng dẫn này sẽ hướng dẫn khách hàng thực hiện mount bucket thông qua hệ điều hành Ubuntu 20.04 thông qua công cụ S3FS.

**Bước 1:** Cài đặt S3FS.
    
    
    sudo apt-get install s3fs

**Bước 2:** Tạo file chứa access key và secret key.
    
    
    echo XRRS541KWS8T9DMDRCFY:gknj5Rpmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D > s3-password   
    chmod 600 s3-password 

![User guide FPT Object Storage 61](/img/docs/10af958f2b2a-User-guide-FPT-Object-Storage-61.png)

**Bước 3:** Tạo thư mục mount.
    
    
    mkdir /mnt/bucket-01 
    

**Bước 4:** Thực hiện mount với fstab.
    
    
    echo bucket-01 /mnt/bucket-01 fuse.s3fs \_netdev,allow\_other,passwd\_file=/root/s3-password,use\_path\_request\_style,nonempty,uid=0,gid=0,use\_cache=/tmp,dbglevel=info,curldbg,url=https://s3-hfx03.fptcloud.com 0 0 >> /etc/fstab 
    

Kết quả:

**![User guide FPT Object Storage 62](/img/docs/ee682ee3b082-User-guide-FPT-Object-Storage-62.png)**

**Bước 5:** Thực hiện mount bucket
    
    
    mount -a 
    

**![User guide FPT Object Storage 63](/img/docs/37afcc4bb27f-User-guide-FPT-Object-Storage-63.png)**

[ Previous Xây dựng một website tĩnh bằng FPT Object Storage ](./xay-dung-mot-website-tinh-bang-fpt-object-storage) [ Next Clone dữ liệu giữa hai bucket khác nhau ](./clone-du-lieu-giua-hai-bucket-khac-nhau)
