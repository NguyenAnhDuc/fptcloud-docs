---
sidebar_label: "2. Dedicated – FPT Kubernetes Engine"
title: "2. Dedicated – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-advanced-firewall"
parent: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Dedicated – FPT Kubernetes Engine


Advanced Firewall


* * *

## **1\. Tổng quan sản phẩm Kubenetes tích hợp Firewall**

Sản phẩm Kubenetes tích hợp Firewall khác so với sản phẩm Kubenetes cơ bản của FPT Cloud là sử dụng 01 Advanced Firewall nằm phía trước Gateway của Tenant. Advanced Firewall có nhiệm vụ bảo vệ và cấu hình các rule bảo mật (Allow, Drop) rule nat (DNAT, SNAT) cho cụm Kubenetes. 

Các thành phần chính bao gồm: 

– Advanced Firewall (vd: Checkpoint) 

– Gateway (Internet Gateway, Firewall L4) 

– Load balancer 

– Cụm Kubenetes: Master node (API, ETCD), Worker node (App and Service)

![file](/img/docs/05b04fb72555-image-1691469857854.png)

## 2\. Các requirement rules cho cụm Kubenetes trên Advanced Firewall

Luồng traffic truy cập vào các node k8s như sau: ![file](/img/docs/7f2f9cabf572-image-1691469894054.png)

**Chú ý:**

Tất cả các rule inbound và outbound cho cụm Kubenetes đều được cấu hình trên Advanced Firewall. 

Tất cả các rule NAT cho cụm Kubenetes đều được cấu hình trên Advanced Firewall. 

IP Public được đặt trên Advanced Firewall. 

Bảng quy hoạch rule Firewall trên Advanced Firewall cho cụm Kubenetes:

![file](/img/docs/05f967452315-image-1691480281087.png)

Bảng quy hoạch rule NAT trên Advanced Firewall cho cụm Kubenetes: 

![file](/img/docs/7798d361a867-image-1691480310854.png)

Trên Gateway vẫn có rule Firewall và rule Nat ở để đảm bảo traffic kết nối từ Gateway đến Firewall, các rule mặc định này được tạo tự động, người dùng phải tạo rule cho ứng dụng (option) nếu cần. 

## 3\. Khởi tạo cụm Kubenetes tích hợp Firewall

**Yêu cầu:**

– Quota CPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình cluster Kubernetes mong muốn. 

– 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool. Subnet này cần được quy hoạch và thiết kế chi tiết, để cấu hình route cho phép kết nối từ bên ngoài tới Firewall qua Gateway vào đến các Kubernetes Node. 

– Thông tin IP của Firewall: Cần thông tin 01 IP Public và 01 Private của Firewall. 

– Thông tin IP của Gateway: 01 IP private này được sử dụng để cấu hình route từ Firewall đến Gateway. 

**Các bước khởi tạo như sau:**

Bước 1: Từ FPT Cloud portal, chọn Kubernetes. Chọn tab “Dedicated”. Chọn Create. Nhập vào các thông tin mong muốn của cụm K8s. 

Bước 2: Cấu hình Firewall, tick vào mục Enable Firewall. 

![file](/img/docs/e893b0907f22-image-1691469995783.png)

Bước 3: Nhập vào Thông tin của Firewall, bao gồm: IP Gateway, IP Public và Private của Checkpoint.

Bước 4: Ấn Create, kiểm tra lại các thông tin và ấn Agree để tiến hành khởi tạo. 

Bước 5: Theo dõi trạng thái khởi tạo cụm K8s. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng. 

[ Previous Service Type Load-Balancer ](./service-type-load-balancer) [ Next Backup & Restore Cluster ](./backup-and-restore-cluster)
