---
sidebar_label: "Chinh sua label taint cho worker group managed gpu cluster"
title: "2. Managed GPU Cluster (Kubernetes)"
source: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"
parent: "https://fptcloud.com/documents/fpt-managed-gpu-cluster"
lang: vi
converted: "2026-03-19"
---

# 2. Managed GPU Cluster (Kubernetes)


Chỉnh sửa label/taint cho Worker Group


* * *

Label và Taint là hai cơ chế quan trọng giúp quản lý và phân phối workload hiệu quả trong hệ thống có nhiều Worker Group giúp dễ dàng nhóm các worker theo mục đích sử dụng, hiệu suất, hoặc khu vực địa lý. Managed GPU Cluster hỗ trợ người dùng thêm mới, sửa, xóa label/taint ngay trên Unify Portal.

**Bước 1** : Ở menu chọn **AI Infratstucture** > **Managed GPU Cluster** hệ thống sẽ hiển thị trang Managed GPU Cluster Management. Chọn Cluster muốn chỉnh sửa Label/Taint.

![](/img/docs/2bafdf1700f1-24.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**

![](/img/docs/62db851269af-25.png)

**Bước 3** : Nhập Labels và Taints muốn thêm vào Worker Group và click button **Save**.

![](/img/docs/888e5fac994c-26.png)

![](/img/docs/1e045ce9f634-27.png)

![](/img/docs/8da95fc4002a-28.png)

**Lưu ý** : 

Quá trình chỉnh sửa Labels và Taints sẽ thực hiện trong vòng vài phút, trạng thái của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.

[ Previous Tính năng Manual Scale ](./tinh-nang-manual-scale-managed-gpu-cluster) [ Next Tính năng chuyển Worker Group base ](./tinh-nang-chuyen-worker-base-managed-gpu-cluster)
