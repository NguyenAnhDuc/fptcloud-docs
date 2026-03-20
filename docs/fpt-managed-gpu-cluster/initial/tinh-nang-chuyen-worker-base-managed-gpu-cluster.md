---
sidebar_label: "2. Managed GPU Cluster (Kubernetes)"
title: "2. Managed GPU Cluster (Kubernetes)"
source: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=tinh-nang-chuyen-worker-base-managed-gpu-cluster"
parent: "https://fptcloud.com/documents/fpt-managed-gpu-cluster"
lang: vi
converted: "2026-03-19"
---

# 2. Managed GPU Cluster (Kubernetes)


Tính năng chuyển Worker Group base


* * *

Khi người dùng có mong muốn thay đổi Worker Group base, các thành phần của hệ thống (coredns, metrics servers, CNI controller, …) sẽ được triển khai lại trên các Worker nodes thuộc Worker Group base mới. Tính năng này mang lại lợi ích trong trường hợp người dùng muốn tăng/giảm cấu hình flavor của các Worker nodes trong Worker Group base, khi đó người dùng tạo Worker Group mới với cấu hình Worker nodes mong muốn, chuyển Worker Group mới đó thành base và xóa Worker Group base cũ. 

**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** , hệ thống sẽ hiển thị trang Managed GPU Cluster Management. Chọn Cluster muốn thay đổi cấu hình Worker Group.

![](/img/docs/0520eb985668-29.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**.

![](/img/docs/cc2c4a29bf22-30.png)

**Bước 3** : Chọn Worker Group muốn thay đổi và click button **Save**.

![](/img/docs/315883dd2aa4-31.png)

**Lưu ý** :

  * Quá trình thay đổi Woker Group Base sẽ thực hiện, trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.

  * Khi thay đổi thông số của Worker Group, đầu tiên hệ thống sẽ tạo thêm Worker nodes mới với cấu hình mong muốn. Khi Worker nodes mới được tạo thành công, Worker node với cấu hình cũ sẽ được remove khỏi hệ thống. Các pod sẽ được chuyển từ Worker node cũ sang Worker node mới.

[ Previous Chỉnh sửa label/taint cho Worker Group ](./chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster) [ Next Service Type Load-Balancer ](./service-load-balancer-managed-gpu-cluster)
