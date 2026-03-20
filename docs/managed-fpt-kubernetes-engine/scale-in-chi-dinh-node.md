---
sidebar_class_name: hidden
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=scale-in-chi-dinh-node"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng scale in chỉ định node trong cluster


* * *

**I. Giới thiệu chung**

Tài liệu này hướng dẫn quy trình cấu hình để chỉ định thứ tự ưu tiên của node khi manual scale in cluster. Các node trong cluster sẽ có thứ tự ưu tiên về độ quan trọng tăng dần từ 1 đến 3. Mặc định tất cả các node trong cluster có độ ưu tiên bằng nhau và bằng 3.

Trong quá trình giảm số lượng node (scale down), khi được kích hoạt qua MachineDeployment hoặc MachineSet, MCM (Machine Controller Manager) ưu tiên xóa các worker node có độ ưu tiên thấp nhất. Quản trị viên có thể giảm độ ưu tiên của các worker node cụ thể bằng cách thay đổi giá trị độ ưu tiên này xuống còn 1. Sau đó, khi tiến hành scale down trong các lần tiếp theo, MachineDeployment sẽ ưu tiên xóa các worker node có độ ưu tiên thấp nhất.

**II. Các bước thiết lập**

**Bước 1** : Thực hiện đánh annotation cho node muốn xóa như sau:
    
    
    kubectl annotate no  worker.fptcloud.com/nodepriority=1

![](/img/docs/2a8d0ed11512-Screenshot_1-2.png)

**Bước 2** : Sau đó thực hiện manual scale down worker group trên portal bằng việc điều chỉnh min-max node trong worker group.

![](/img/docs/0bcd57740cbd-Screenshot_2-2.png)

![](/img/docs/27090c5d5881-Screenshot_3-1.png)

Sau khi điều chỉnh min-max node hệ thống sẽ thực hiện scale-in đúng node đã được chỉ định. Quá trình scale-in sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường.

![](/img/docs/2b9a2dc4f86f-Screenshot_4-1.png)

![](/img/docs/4b366a9b6f3f-Screenshot_5-1.png)

Có thể đánh annotation worker.fptcloud.com/nodepriority=1 cho nhiều node trong trường hợp cần scale down chỉ định nhiều node

Chú ý: Tính năng này không hỗ trợ trong trường hợp worker node được scale in bởi cluster auto scaler.

[ Previous Triển khai ứng dụng trên worker pool ](./trien-khai-ung-dung-tren-worker-pool) [ Next Service Type Load-Balancer ](./service-type-load-balancer)
