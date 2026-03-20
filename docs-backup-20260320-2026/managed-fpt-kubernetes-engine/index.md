---
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Managed – FPT Kubernetes Engine



FPT Kubernetes Engine dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Kubernetes Engine tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud.M-FKE (Managed - FPT Kubernetes Engine) là một mô hình cung cấp dịch vụ Kubernetes của FKE. Với M-FKE, FPTCloud quản trị toàn bộ thành phần control-planes, người sử dụng sẽ triển khai và quản trị các Worker Nodes. M-FKE giúp người sử dụng tập trung vào việc triển khai ứng dụng mà không cần tốn nguồn lực vào việc quản trị k8s cluster.

Những điều cần lưu ý trước khi sử dụng M-FKE?

Vị trí địa lý đặt Kubernetes Cluster : Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ truy cập đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. Số lượng các Nodes và cấu hình của từng Nodes cần sử dụng: Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho các tài nguyên Ram + CPU, Storage, IP…Vì vậy bạn nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để FPT Cloud hỗ trợ bạn tốt nhất.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Quản lý Kubernetes Cluster ](./quan-ly-kubernetes-cluster)
    * [ Khởi tạo Kubernetes Cluster mới ](./khoi-tạo-kubernetes-cluster-moi)
    * [ Xem danh sách Kubernetes Cluster đã tạo ](./xem-danh-sach-kubernetes-cluster-da-tao)
    * [ Truy cập thông tin chi tiết của Cluster ](./truy-cap-thong-tin-chi-tiet-cua-cluster)
    * [ Lấy thông tin truy cập Cluster ](./lay-thong-tin-truy-cap-cluster)
    * [ Tính năng Rotate Kubeconfig ](./tinh-nang-rotate-kubeconfig)
    * [ Xóa Kubernetes Cluster ](./xoa-kubernetes-cluster)
  * [ Thay đổi cấu hình K8s Cluster ](./thay-doi-cau-hinh-k8s-cluster)
    * [ Thay đổi Cluster Endpoint Access ](./thay-doi-cluster-endponit-access)
    * [ Thêm Worker Group ](./them-worker-group)
    * [ Thay đổi cấu hình Internal subnet Load Balancer (CIDR) ](./thay-doi-cau-hinh-internal-subnet-load-balancer)
    * [ Chỉnh sửa label/taint cho worker group ](./chinh-sua-label-taint-cho-worker-group)
    * [ Bật/Tắt Node Auto-repair ](./bat-tat-node-auto-repair)
    * [ Tính năng chuyển worker group base ](./chuyen-worker-group-base)
    * [ Nâng cấp K8S version ](./nang-cap-k8s-version)
    * [ Cluster Autoscale ](./cluster-autoscale)
  * [ Triển khai ứng dụng trên worker pool ](./trien-khai-ung-dung-tren-worker-pool)
  * [ Tính năng scale in chỉ định node trong cluster ](./scale-in-chi-dinh-node)
  * [ Service Type Load-Balancer ](./service-type-load-balancer)
  * [ Persistent Storage ](./persistent-storage)
  * [ Tính năng Hibernate & Wake-up ](./tinh-nang-hibernate-wakeup)
  * [ Tính năng Đặt lịch Hibernate & Wake-up ](./tinh-nang-dat-lich-hibernate-wake-up)
  * [ Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version) ](./tu-dong-nang-cap-version)
    * [ Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud ](./gioi-thieu-chung-ve-quy-trinh-quan-ly-version)
    * [ Hướng dẫn chi tiết sử dụng tính năng auto upgrade version ](./huong-dan-chi-tiet-su-dung-auto-upgrade)
  * [ FPT cloud managed kubernetes release calendar ](./fpt-cloud-managed-kubernetes-release-calendar)
  * [ Tính năng tăng cường bảo mật cho dịch vụ MFKE ](./tinh-nang-tang-cuong-bao-mat-mfke)
    * [ Tính năng Benchmark Managed Kubernetes Cluster ](./tinh-nang-benchmark-cluster)
    * [ Tính năng Runtime Security cho Managed Kubernetes Cluster ](./tinh-nang-runtime-security-cluster)
    * [ Tính năng Workload Managed Kubernetes Cluster ](./tinh-nang-workload-scan)
    * [ Audit Logs - Managed Kubernetes Cluster ](./audit-log-vn)
  * [ Tính năng đánh Tag cho Virtual Machine ](./danh-tag-cho-vm)
  * [ Tính năng Backup & Restore ](./backup-restore-vn)

## Các lưu ý khi sử dụng M-FKE 

  * [ Các lưu ý khi sử dụng M-FKE ](./cac-luu-y-khi-su-dung-m-fke)

## Các câu hỏi thường gặp (FAQs) 

  * [ FAQs ](./mfke-faqs)

## Một số gợi ý mẫu (Samples) 

  * [ Microservices Architecture on FKE ](./microservices-architecture-on-fke)
  * [ GPU là gì? ](./gpu-la-gi)
    * [ Tại sao nên sử dụng GPU trên Cloud? ](./tai-sao-nen-su-dung-gpu-tren-cloud)
    * [ Tại sao nên sử dụng GPU Kubernetes? ](./tai-sao-nen-su-dung-gpu-tren-kubernetes)
    * [ Tính năng GPU Sharing ](./gpu-sharing)
    * [ Dịch vụ GPU trên K8s FPT Cloud ](./dich-vu-gpu-tren-k8s)
  * [ Điều chỉnh cấu hình CoreDNS trong Kubernetes Service ](./dieu-chinh-cau-hinh-coredns-trong-kubernetes-service)
  * [ Snapshot và restore persistent volume trong Kubernetes ](./snapshot-và-restore-pvc-trên-k8s-fpt)
    * [ Tính năng snapshot Persistent Volume trên kubernetes ](./snapshot-persistent-volume-tren-k8s)
    * [ Tính năng restore volume từ snapshot trên kubernetes ](./restore-persistent-volume-tren-k8s)
    * [ Thực hiện đặt lịch Snapshot PVC trên Kubernetes ](./thuc-hien-dat-lich-snapshot-pvc)
    * [ Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes ](./thuc-hien-dat-lich-xoa-pvc-snapshot)
  * [ Cấu hình proxy protocol ](./cau-hinh-proxy-protocol)
    * [ Cấu hình proxy protocol cho istio-ingress với Managed Kubernetes cluster ](./cau-hinh-proxy-protocol-cho-istio-ingress)
    * [ Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster ](./cau-hinh-proxy-protocol-cho-nginx-ingress)
  * [ Sử dụng service type Loadbalancer Layer 7 (LBv2) ](./service-type-kb-layer7-lbv2)
  * [ Thay đổi cấu hình flavor của worker pool ](./thay-doi-cau-hinh-flavor-cua-worker-pool)

