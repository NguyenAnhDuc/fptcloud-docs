---
sidebar_label: "2. Managed GPU Cluster (Kubernetes)"
title: "2. Managed GPU Cluster (Kubernetes)"
source: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=tinh-nang-manual-scale-managed-gpu-cluster"
parent: "https://fptcloud.com/documents/fpt-managed-gpu-cluster"
lang: vi
converted: "2026-03-19"
---

# 2. Managed GPU Cluster (Kubernetes)


Tính năng Manual Scale


* * *

Manual Scale cho phép người dùng chủ động điều chỉnh quy mô tài nguyên hệ thống theo nhu cầu. Người dùng có thể tăng hoặc giảm số lượng Metal Cloud Server ngày trên portal theo các bước như sau:

**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** hệ thống sẽ hiển thị trang **Managed GPU Management**. Chọn Cluster muốn thêm Worker Group.

![](/img/docs/502dd1f384f2-17.png)

**Bước 2** : Click vào cụm cluster muốn scale sau đó chọn **Node Pools** > **Edit Workers**.

![](/img/docs/de403ab885d7-21.png)

![](/img/docs/ba5ffbfabc36-22.png)

**Bước 3** : Update **Number of Server** tăng lên theo nhu cầu sử dụng sau đó click button Save.

![](/img/docs/825482933d5e-23.png)

**Lưu ý** :

Quá trình manual scale server sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** cho đến khi woker mới join thành công vào cluster. Cluster vẫn hoạt động bình thường khi thực hiện scale thêm server mới.

[ Previous Add thêm Worker Group ](./add-them-worker-group) [ Next Chỉnh sửa label/taint cho Worker Group ](./chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster)
