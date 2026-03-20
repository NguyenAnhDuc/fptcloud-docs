---
sidebar_class_name: hidden
sidebar_label: "2. Managed GPU Cluster (Kubernetes)"
title: "2. Managed GPU Cluster (Kubernetes)"
source: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=lay-thong-tin-truy-cap-cluster"
parent: "https://fptcloud.com/documents/fpt-managed-gpu-cluster"
lang: vi
converted: "2026-03-19"
---

# 2. Managed GPU Cluster (Kubernetes)


Lấy thông tin truy cập Cluster


* * *

File Kube-config được sử dụng để lưu trữ thông tin kết nối đến cụm Kubernetes, giúp các công cụ như kubectl, kubelet, kubeadm xác định cách giao tiếp với Kubernetes API Server. File kubeconfig rất quan trọng trong việc quản lý quyền truy cập vào Kubernetes, do đó cần được bảo mật cẩn thận.

Để download file Kube-config, khách hàng làm theo hướng dẫn sau:

**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** , hệ thống sẽ hiển thị trang **GPU Cluster Management**. Chọn Cluster muốn lấy thông tin truy cập Cluster.

![](/img/docs/7952cac62d0d-12.png)

**Bước 2** : Ở mục **Essential Properties** > Cluster Information > Configuration, có thể download file kubeconfig để đăng nhập Cluster thông qua kubectl hoặc các công cụ khác.

![](/img/docs/b5e2d2ac2e3c-13.png)

**Lưu ý:**

Managed GPU Cluster sử dụng core là Native Kubernetes Cluster, người dùng sử dụng Cluster với các công cụ kubectl và dashboard như với một Kubernetes Cluster thông thường.

[ Previous Xem danh sách Managed GPU Cluster đã tạo ](./xem-danh-sach-managed-gpu-cluster) [ Next Xóa Managed GPU Cluster ](./xoa-managed-gpu-cluster)
