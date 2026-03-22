---
sidebar_label: "Cấu hình file manifest để triển khai ứng dụng"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=trien-khai-ung-dung-tren-worker-pool"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Triển khai ứng dụng trên worker pool


* * *

Sản phẩm Managed FKE quản lý worker theo các worker pool, hỗ trợ cho khách hàng thuận tiện triển khai các ứng dụng trên đó và không cần quan tâm đến vấn đề scale tài nguyên.

## Cấu hình file manifest để triển khai ứng dụng

Ví dụ triển khai ứng dụng trên cluster có 02 worker pools:

![Userguide M FKE 30](/img/docs/f3f4045c2b5d-Userguide-M-FKE-30.png)

Mỗi worker pool đang có một worker node:

![Userguide M FKE 31](/img/docs/80027e2ebdfa-Userguide-M-FKE-31.png)

Các worker nodes được đánh các label để phục vụ cho việc phân biệt node và dễ dàng triển khai ứng dụng lên các worker node có chung label:

![Userguide M FKE 32](/img/docs/7a9414e63d80-Userguide-M-FKE-32.png)

Các worker nodes thuộc worker pool **_worker-1zx5wqdu_** được đánh label **_worker.fptcloud/pool=worker-1zx5wqdu_**

Người dùng có thể copy tên của worker pool khi ấn vào detail của cấu hình worker pool:

![Userguide M FKE 33](/img/docs/ad024fb29951-Userguide-M-FKE-33-1024x558.png)

Khi sử dụng các resources để triển khai ứng dụng trong Kubernetes (Pod, Deployment, StatefulSet, DaemonSet, Replicaset), người dùng có thể thêm Node Affinity Rule hoặc Node Selector trong phần Specification của file cấu hình:
    
    
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment-test
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
            resources:
              requests:
                memory: "700Mi"
                cpu: "800m"
              limits:
                memory: "900Mi"
                cpu: "900m"
            affinity:
              nodeAffinity:
                requiredDuringSchedulingIgnoredDuringExecution:
                  nodeSelectorTerms:
                  - matchExpressions:
                    - key: worker.fptcloud/pool
                      operator: In
                      values:
                      - worker-1zx5wqdu
    
    
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment-test
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
            resources:
              requests:
                memory: "700Mi"
                cpu: "800m"
              limits:
                memory: "900Mi"
                cpu: "900m"
            nodeSelector:
              worker.fptcloud/pool: worker-1zx5wqdu

Trong đó, giá trị điền vào phần values trong hình thứ nhất (sử dụng Node Affinity Rule) và giá trị phần nodeSelector là tên của worker pool mà người dung muốn triển khai ứng dụng.

## Triển khai ứng dụng

Khi triển khai ứng dụng nginx sử dụng file manifest.

![Userguide M FKE 36](/img/docs/55bd9a6e08dd-Userguide-M-FKE-36.png)

Khi đó, 1 pod bị pending do thiếu tài nguyên của worker nodes trong pool để chạy pod:

![Userguide M FKE 37](/img/docs/cd236bc87141-Userguide-M-FKE-37-1024x88.png)

Thành phần Cluster Autoscaler nằm ở phía quản trị của FPT Cloud sẽ thực hiện hành động scale thêm worker node trong pool đó để phục vụ pod nginx bị pending.

![Userguide M FKE 38](/img/docs/1408a3cf7edd-Userguide-M-FKE-38.png)

Sau khi 1 worker nodes được thêm vào trong worker pool, pod nginx khi trước bị Pending bây giờ đã chuyển sang trạng thái Running.

Khi scale ứng dụng sử dụng ít pod hơn, tài nguyên trống của các worker nodes sẽ tăng lên, cho đến khi lượng sử dụng tài nguyên về CPU, Memory so với tài nguyên tối đã của node đó giảm xuống dưới 50% trong khoảng thời gian 10 phút, node đó sẽ được tự động xóa khỏi worker pool, tiết kiệm chi phí cho người dùng.

[ Previous Cluster Autoscale ](./cluster-autoscale) [ Next Tính năng scale in chỉ định node trong cluster ](./scale-in-chi-dinh-node)
