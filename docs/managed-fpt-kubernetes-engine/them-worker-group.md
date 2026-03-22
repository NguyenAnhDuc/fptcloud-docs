---
sidebar_class_name: hidden
sidebar_label: "Them worker group"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=them-worker-group"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Thêm Worker Group


* * *

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn thêm Worker Group.

![](/img/docs/59a1a031bb00-Picture21.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**.

![](/img/docs/21285b05e3b2-Picture22.png)

**Bước 3** : Chọn **ADD WORKER GROUP**.

![](/img/docs/51511b2eae19-Picture23.png)

**Bước 4:** Nhập các trường thông tin theo yêu cầu.

![](/img/docs/753cbc7029ef-Picture24.png)

  * **Instance Type:** Chọn loại Instance (CPU hoặc GPU) cho các **Worker Node**

  * **Type:** Chọn cấu hình (CPU & Memory) cho các **Worker Node**

  * **Container Runtime:** Chọn **Containerd**. 

  * **Storage Policy:** Chọn loại **Storage Policy** (tương ứng với IOPS) cho Worker Node Disk. 

  * **Disk (GB):** Chọn dung lượng root disk cho các **Worker Node**. 

  * **Network:** Subnet sử dụng để deploy các VM của Kubernetes Cluster. 

  * **Scale min:** Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production. 

  * **Scale max:** Số VM instance Worker Node tối đa cho một worker group trong cụm k8s. 

  * **Label:** Đánh Label cho **Worker Group**

  * **Taint:** Đánh Taint cho **Worker Group**

**Bước 5** : Kiểm tra lại thông tin, chọn **Save** để thực hiện thêm mới Worker.

![](/img/docs/131290d65227-Picture25.png)

Quá trình Scale Cluster sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện thêm Worker Group mới.

[ Previous Thay đổi Cluster Endpoint Access ](./thay-doi-cluster-endponit-access) [ Next Thay đổi cấu hình Internal subnet Load Balancer (CIDR) ](./thay-doi-cau-hinh-internal-subnet-load-balancer)
