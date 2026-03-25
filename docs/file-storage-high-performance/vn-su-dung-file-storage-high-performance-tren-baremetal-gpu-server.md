---
sidebar_class_name: hidden
sidebar_label: "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
title: "2. File Storage – High Performance"
source: "https://fptcloud.com/documents/file-storage-high-performance/?doc=vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server"
parent: "https://fptcloud.com/documents/file-storage-high-performance"
lang: vi
converted: "2026-03-19"
---

# 2. File Storage – High Performance


Sử dụng File Storage - High Performance trên Baremetal (GPU Server)


* * *

## **1\. Tổng quan**

Sau khi request cấp phát dịch vụ được chấp nhận, bạn sẽ nhận được các thông tin để sử dụng File Storage trên Baremetal.

Một số lưu ý quan trọng:

  * Mỗi subnet sẽ có 1 endpoint khác nhau dùng để access vào data File Storage. Trước khi mount hãy kiểm tra thật kỹ các thông tin đã được cung cấp để tránh bị lỗi trong quá trình cấu hình.

## **2\. Hướng dẫn sử dụng**

### **A. Sử dụng image từ FPT AI FACTORY**

**Bước 1: Tạo mountpoint trên OS**
    
    
    # Create Mount Point
    mkdir /mnt/hps

**Bước 2: Mount File System**

Thay endpoint **10.101.33.1** bằng Endpoint được cung cấp

**Mount VAST NFS qua TCP**
    
    
    mount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
    mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps

**Mount VAST NFS qua RDMA**
    
    
    mount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
    mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps

**Mount Multi-Path RDMA**
    
    
    sudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps

**Bước 3: Cấu hình tự động mount khi khởi động lại**

Chỉnh sửa file `/etc/fstab`:
    
    
    # Write followings entries to /etc/fstab
    10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.
    
    
    mount -a

### **B. Sử dụng custom Ubuntu OS**

Nếu bạn dùng image tuỳ chỉnh thì cần cài thêm VAST Client theo hướng dẫn sau:

**Bước 1:** Cài đặt **VAST NFS Client**
    
    
    apt update && apt install -y nfs-common dpkg-dev autotools-dev debhelper curl
    curl -sSf <https://s3-sgn10.fptcloud.com/file-storage-resource/download.sh> | bash -s
    tar xvf vastnfs-*.tar.xz
    cd vastnfs-*/
    ./build.sh bin
    sudo apt install ./dist/*.deb
    sudo depmod -a
    sudo update-initramfs -u -k $(uname -r)
    sudo apt update
    sudo apt install nfs-common -y
    sudo reboot

**Bước 2: Tạo mountpoint trên OS**
    
    
    # Create Mount Point
    mkdir /mnt/hps

**Bước 3: Mount File System**

Thay endpoint **10.101.33.1** bằng Endpoint được cung cấp

**Mount VAST NFS qua TCP**
    
    
    mount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
    mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps

**Mount VAST NFS qua RDMA**
    
    
    mount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
    mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps

**Mount Multi-Path RDMA**
    
    
    sudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps

**Bước 4: Cấu hình tự động mount khi khởi động lại**

Chỉnh sửa file `/etc/fstab`:
    
    
    ## LustreFS ##
    # Write followings entries to /etc/fstab
    10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.
    
    
    mount -a

[ Previous Quản lý MountPoint ](./quan-ly-mountpoint) [ Next Sử dụng File Storage - High Performance trên Kubernetes (K8S Cluster) ](./sử-dụng-file-storage---high-performance-trên-kubernetes-\(k8s-cluster\))
