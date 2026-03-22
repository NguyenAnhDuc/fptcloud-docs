---
sidebar_label: "Trang chủ"
title: "2. Dedicated – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/"
lang: vi
converted: "2026-03-19"
---

# 2. Dedicated – FPT Kubernetes Engine


Dedicated – FPT Kubernetes Engine



FPT Kubernetes Engine dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Kubernetes Engine tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud.D-FKE (Dedicated - FPT Kubernetes Engine) là một mô hình cung cấp dịch vụ Kubernetes của FKE. Với D-FKE, khách hàng có thể quản lý toàn bộ Kubernetes Cluster bao gồm Master Nodes (chứa các thành phần control plane) và Worker Nodes trong khi các tính năng như autoscale, service LB, upgrade version, persistent volume... vẫn được hỗ trợ đầy đủ.

Những điều cần lưu ý trước khi sử dụng D-FKE?

Vị trí địa lý đặt Kubernetes Cluster : Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ truy cập đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. Số lượng các Nodes và cấu hình của từng Nodes cần sử dụng: Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho các tài nguyên Ram + CPU, Storage, IP…Vì vậy bạn nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để FPT Cloud hỗ trợ bạn tốt nhất.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Quản lý Kubernetes cluster ](./cluster-management/quan-ly-kubernetes-cluster)
    * [ Khởi tạo Kubernetes Cluster mới ](./initial/khoi-tao-kubernetes-cluster-moi)
    * [ Xem danh sách Kubernetes Cluster đã tạo ](./initial/xem-danh-sach-kubernetes-cluster-da-tao)
    * [ Truy cập thông tin chi tiết của Cluster ](./initial/truy-cap-thong-tin-chi-tiet-cua-cluster)
    * [ Lấy thông tin truy cập Cluster ](./initial/lay-thong-tin-truy-cap-cluster)
    * [ Xóa Kubernetes Cluster ](./cluster-management/xoa-kubernetes-cluster)
    * [ Stop Kubernetes Cluster ](./cluster-management/stop-kubernetes-cluster)
    * [ Start Kubernetes Cluster ](./cluster-management/start-kubernetes-cluster)
  * [ Thay đổi cấu hình K8s Cluster ](./cluster-management/thay-doi-cau-hinh-k8s-cluster)
    * [ Scale worker nodes ](./cluster-management/scale-worker-nodes)
    * [ Thay đổi Flavor (cấu hình) Nodes ](./storage-backup/thay-doi-flavor-cau-hinh-nodes)
    * [ Thay đổi Flavor (cấu hình) NFS Server ](./storage-backup/thay-doi-flavor-cau-hinh-nfs)
    * [ Tăng Storage size của các Nodes ](./storage-backup/tang-storage-size-cua-nodes)
    * [ Tăng Storage size của NFS Server ](./storage-backup/tang-storage-size-cua-nfs)
    * [ Nâng cấp K8s version ](./version/nang-cap-k8s-version)
    * [ Thêm NFS Persistent Storage ](./storage-backup/them-nfs-persistent-storage)
  * [ Automatic Scaling ](./cluster-management/autoscale)
  * [ Manual Scaling ](./cluster-management/manual-scale)
  * [ Best Practice Manual Scaling ](./cluster-management/best-practice-manual-scaling)
  * [ Persistent Storage ](./storage-backup/persistent-storage)
  * [ Service Type Load-Balancer ](./cluster-management/service-type-load-balancer)
  * [ Advanced Firewall ](./cluster-management/dfke-advanced-firewall)
  * [ Backup & Restore Cluster ](./storage-backup/backup-and-restore-cluster)
  * [ Best Practice Upgrade FKE Cluster Version ](./version/best-practice-upgrade-fke-cluster-version)
  * [ Auto repair nodes ](./cluster-management/auto-repair-nodes)
  * [ Retry – Timeout Rule ](./cluster-management/retry-timeout-rule)

## Các lưu ý khi sử dụng FKE 

  * [ Các lưu ý khi sử dụng FKE ](./cluster-management/cac-luu-y-khi-su-dung-fke)

## Các câu hỏi thường gặp (FAQs) 

  * [ FAQs ](./version/dfke-faqs)

## Một số gợi ý mẫu (Samples) 

## Release note

### Những cập nhật tính năng của dịch vụ FPT Kubernetes Engine v1.2 - Tháng 4/2022

FPT Cloud ra mắt phiên bản cập nhật mới của FPT Kubernetes Engine với 4 tính năng cập nhật. Với phiên bản này, người dùng sẽ quản lý các cluster dễ dàng và thuận tiện hơn với nhiều tính năng quản trị và mở rộng linh hoạt của các nodes trên hê thống FPT Portal.

Các tính năng cập nhật:

Thay đổi cấu hình (CPU,RAM) của master nodes, worker nodes & NFS server.

Tính năng quản trị các Kubernetes Cluster, cho phép bật hoặc tắt các Cluster riêng biệt

Khả năng tăng dung lượng storage cho master nodes, worker nodes & NFS server.

Tự động tăng / giảm worker nodes theo tải của ứng dụng

Tại sao bạn nên sử dụng? 

Tăng khả năng quản trị và tùy chỉnh cấu hình của các clusters và nodes để phù hợp với nhu cầu sử dụng

Tự động điều chỉnh tăng giảm tài nguyên worker nodes để đảm bảo hệ thống/ ứng dụng không bị quá tải đột ngột 

### Thay đổi Flavor (cấu hình) NFS server

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**.

![](/img/docs/8bd4ea56c33f-Picture38.png)

**Bước 2** : Chọn **Cluster** muốn thay đổi cấu hình nodes trên danh sách.

![](/img/docs/a10b5f0bcdf8-Picture39.png)

**Bước 3** : Chọn tab **Advanced** , bạn có thể thay đổi Flavor (cấu hình CPU, RAM) của NFS Server bằng cách chọn icon Setting ở config tương ứng.

![](/img/docs/1bec156533ef-Picture44.png)

Bước 4: Nhập dung lượng cần tăng thêm > Chọn **Change** để thực hiện thay đổi.

![](/img/docs/721577ea16b3-Picture45.png)

### Tăng Storage size của NFS Server
