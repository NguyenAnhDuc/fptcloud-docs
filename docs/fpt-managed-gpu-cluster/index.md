---
sidebar_label: "2. Managed GPU Cluster (Kubernetes)"
title: "2. Managed GPU Cluster (Kubernetes)"
source: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/"
lang: vi
converted: "2026-03-19"
---

# 2. Managed GPU Cluster (Kubernetes)


Managed GPU Cluster (Kubernetes)

**FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud. 

**FPT Managed GPU Cluster** là một mô hình cung cấp dịch vụ Managed GPU Cluster của FKE. Với MANAGED GPU CLUSTER, FPT Cloud quản trị toàn bộ thành phần control-planes, người sử dụng sẽ triển khai và quản trị các Worker Nodes. MANAGED GPU CLUSTER giúp người sử dụng tập trung vào việc triển khai ứng dụng mà không cần tốn nguồn lực vào việc quản trị K8s Cluster. 

**FPT Managed GPU Cluster** là mô hình dịch vụ dựa trên nền tảng mã nguồn mở Kubernetes, giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng đã được container hoá. Sản phẩm FPT Managed GPU Cluster ngoài tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS thì còn cung cấp tài nguyên GPU, giúp hỗ trợ các thao tác tính toán phức tạp. 

Những điều cần lưu ý trước khi sử dụng **Managed GPU Cluster**? 

  * **Vị trí đặt Managed GPU Cluster** : Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ truy cập đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. 

  * **Số lượng các Nodes và cấu hình của từng Nodes cần sử dụng** : Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho các tài nguyên Ram, CPU, Storage, IP… Vì vậy, khách hàng nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để FPT Cloud hỗ trợ bạn tốt nhất.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Quản lý Managed GPU Cluster ](./initial/quan-ly-managed-gpu-cluster)
    * [ Khởi tạo Managed GPU Cluster mới ](./initial/khoi-tao-managed-gpu-cluster-moi)
    * [ Xem danh sách Managed GPU Cluster đã tạo ](./initial/xem-danh-sach-managed-gpu-cluster)
    * [ Lấy thông tin truy cập Cluster ](./initial/lay-thong-tin-truy-cap-cluster)
    * [ Xóa Managed GPU Cluster ](./initial/xoa-managed-gpu-cluster)
  * [ Thay đổi cấu hình K8S Cluster ](./initial/thay-doi-cau-hinh-k8s)
    * [ Add thêm Worker Group ](./worker-storage/add-them-worker-group)
    * [ Tính năng Manual Scale ](./worker-storage/tinh-nang-manual-scale-managed-gpu-cluster)
    * [ Chỉnh sửa label/taint cho Worker Group ](./worker-storage/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster)
    * [ Tính năng chuyển Worker Group base ](./initial/tinh-nang-chuyen-worker-base-managed-gpu-cluster)
  * [ Service Type Load-Balancer ](./worker-storage/service-load-balancer-managed-gpu-cluster)
  * [ Triển khai mô hình DeepSeek-R1 sử dụng Ollama và Open WebUI ](./worker-storage/trien-khai-ung-dung-tren-worker-managed-gpu-cluster)
  * [ Hướng dẫn tích hợp File Storage – High Performance ](./worker-storage/file-storage-high-performance)
  * [ Slurm on FPTCloud Managed GPU cluster ](./gpu-workload/slurm-on-fpt-cloud)
  * [ VGPU for container ](./gpu-workload/vgpu-for-container)
  * [ GPU time sharing ](./gpu-workload/gpu-time-sharing)
  * [ MPS GPU sharing ](./gpu-workload/mps-gpu-sharing)
  * [ Triển khai workload GPU mẫu lên Managed GPU Cluster ](./gpu-workload/try-example-workload)
    * [ Serve Gemma open models trên một GPU với vLLM ](./gpu-workload/single-gpu-example)
    * [ Serve open models trên nhiều GPU với vLLM ](./gpu-workload/multi-gpus-example)
    * [ Serve open models trên nhiều node với vLLM ](./gpu-workload/multi-nodes-example)
    * [ Finetune LLM models trên FKE GPU với Unsloth ](./gpu-workload/finetune-llm-models)

