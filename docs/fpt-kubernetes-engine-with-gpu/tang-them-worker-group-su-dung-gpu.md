---
sidebar_class_name: hidden
sidebar_label: "2. FPT Kubernetes Engine with GPU"
title: "2. FPT Kubernetes Engine with GPU"
source: "https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=tang-them-worker-group-su-dung-gpu"
parent: "https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Kubernetes Engine with GPU


Tăng thêm Worker Group sử dụng GPU


* * *

**Yêu cầu:**

  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình Worker Group mới mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node tăng thêm mong muốn.
  * 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool.

Các bước thực hiện như sau: 

**Bước 1** : Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần thay đổi, mục Node Pools, bấm vào “Edit Workers”. 

![](/img/docs/aa3ce5ce6665-Picture4-3.png)

**Bước 2** : Bấm vào Add worker group để tạo thêm Worker Group 

![](/img/docs/3779376bfec1-Picture5-2.png)

Ngoài các thông tin khởi tạo cho Kubernetes thông thường, cần chọn cấu hình cho GPU trong Worker Group:

  * Chọn lnstance type: GPU
  * Chọn GPU type (A30, A100..)
  * Chọn cấu hình GPU sharing (None/Single/Mixed)
  * Chọn cấu hình type GPU (CPU/RAM/GPU RAM)

![](/img/docs/4a875296dc55-Picture6-2.png)

**Bước 3** : Kiểm tra lại các thông tin khởi tạo và Ấn Save.

![](/img/docs/ef376286b947-Picture7-1.png)

**Bước 4** : Theo dõi trạng thái khởi tạo thêm Worker Group vào cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

[ Previous Hướng dẫn sử dụng các chế độ GPU sharing  ](./huong-dan-su-dung-cac-che-do-gpu-sharing) [ Next Hướng dẫn cài đặt GPU Driver trên Kubernetes ](./driver-installation-self-install)
