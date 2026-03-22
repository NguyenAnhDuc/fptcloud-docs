---
sidebar_label: "Add them worker group"
title: "2. Managed GPU Cluster (Kubernetes)"
source: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=add-them-worker-group"
parent: "https://fptcloud.com/documents/fpt-managed-gpu-cluster"
lang: vi
converted: "2026-03-19"
---

# 2. Managed GPU Cluster (Kubernetes)


Add thêm Worker Group


* * *

Managed GPU Cluster cho phép người dùng add thêm worker group vào cụm cluster theo nhu cầu sử dụng. Để add thêm worker khách hàng có thể thao tác trên portal như sau: 

**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** hệ thống sẽ hiển thị trang **Managed GPU Management**. Chọn Cluster muốn thêm Worker Group.

![](/img/docs/502dd1f384f2-17.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**.

![](/img/docs/13f798d70e7e-18.png)

**Bước 3** : Chọn **Add Worker Group**.

![](/img/docs/437d9b852b53-19.png)

**Bước 4** : Nhập các trường thông tin theo yêu cầu và nhấn **Save**.

![](/img/docs/d9c3a1fa888d-20.png)

**• Group Name** : Đặt tên cho Worker Group để phân biệt các Worker Group với nhau 

**• Container Runtime** : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd 

**• Flavor** : Flavor resource của Worker GPU 

**• Number of Server** : Số Metal Cloud Server được tạo ra để chạy Worker trong Cluster 

**• Label** : Đánh Label cho Worker Group 

**• Taint** : Đánh Taint cho Worker Group 

**Lưu ý** : Quá trình thêm mới Cluster sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện thêm Worker Group mới.

[ Previous Thay đổi cấu hình K8S Cluster ](./thay-doi-cau-hinh-k8s) [ Next Tính năng Manual Scale ](./tinh-nang-manual-scale-managed-gpu-cluster)
