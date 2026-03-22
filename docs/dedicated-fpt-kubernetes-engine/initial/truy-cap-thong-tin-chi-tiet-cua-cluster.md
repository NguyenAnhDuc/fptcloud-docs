---
sidebar_label: "Truy cap thong tin chi tiet cua cluster"
title: "2. Dedicated – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=truy-cap-thong-tin-chi-tiet-cua-cluster"
parent: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Dedicated – FPT Kubernetes Engine


Truy cập thông tin chi tiết của Cluster


* * *

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**.

![](/img/docs/b69d141dd9e2-Picture7.png)

**Bước 2** : Chọn **Cluster** cần xem thông tin trên danh sách.

![](/img/docs/b69d141dd9e2-Picture7.png)

**Bước 3** : Chọn Tab để xem thông tin tương ứng:

**3.1**. Tab **Enssential Properties** : Hiển thị các thông tin Cluster Information, Load Balancer VIP, API.

  * **Cluster Information** : Hiển thị thông tin cơ bản về cluster bao gồm Cluster ID, Version, Kubernetes config, Status, Public IP, SSH Key.
  * **Load Balancer VIP** : Các virtual IP của LB được sử dụng cho K8s API và Ingress.
  * **Dashboard & API**: API Url.

![](/img/docs/8b47436937a4-Picture9.png)

**3.2**. Tab **Node Pools** : Hiển thị thông tin cấu hình các node bao gồm **Master nodes** , **Worker nodes**.

  * **Master Configuration** : Cấu hình Master Node bao gồm số lượng, CPU, Memory, Disk.
  * **Worker Configuration** : Cấu hình Worker Node bao gồm số lượng, CPU, Memory, Disk, Storage Policy, Auto Scale.

![](/img/docs/46417cf477da-Picture10.png)

**3.3**. Tab **Advanced** : Hiển thị các tham số nâng cao thuộc Kubernetes Cluster.

  * **Advanced Configuration** : Tham số nâng cao của Kubernetes Cluster (Nodes DNS, Pod Network, Service Network , Network Node Prefix, Max Pod Per Node, Enable Custom Script)
  * **NFS Storage** : Trạng thái Enable/Disable, dung lượng Disk của NFS Storage.

![](/img/docs/9d760e59fff3-Picture11.png)

**3.4**. Tab **Instances** : Hiển thị các máy chủ ảo thuộc Kubernetes Cluster đang xem bao gồm **Master nodes** , **Worker nodes**.

![](/img/docs/d65d442438ef-Picture12.png)

**3.5**. Tab **Activity Logs** : Ghi lại logs các **Action** đã thực hiện với Kubernetes Cluster.

![](/img/docs/33e4e3ab1b4e-Picture13.png)

[ Previous Xem danh sách Kubernetes Cluster đã tạo ](./xem-danh-sach-kubernetes-cluster-da-tao) [ Next Lấy thông tin truy cập Cluster ](./lay-thong-tin-truy-cap-cluster)
