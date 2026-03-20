---
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=chinh-sua-label-taint-cho-worker-group"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Chỉnh sửa label/taint cho worker group


* * *

# Chỉnh sửa label/taint cho worker group

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn Cluster muốn chỉnh sửa Label/Taint. 

![](/img/docs/e8646f3cb004-Picture26.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**

![](/img/docs/c348126c2511-Picture2-3.png)

**Bước 3** : Nhập **Labels** và **Taints** muốn thêm vào worker group và click button **Save**. 

![](/img/docs/4f201b206259-Picture28.png)

![](/img/docs/db44e41c0eaf-Picture29.png)

![](/img/docs/ae58b9dbeb1e-Picture3-3.png)

Quá trình chỉnh sửa Labels và Taints sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.

# Cô lập workload hệ thống và workload ứng dụng

Để workload ứng dụng không làm ảnh hưởng đến sự hoạt động của cluster, tính năng **Reserve this worker group for system workloads only** cho phép người dùng dành riêng Worker Group Base để chạy System Pods, đồng thời ngăn Application Pods được schedule vào worker group này. 

⚠️ Lưu ý: Tính năng chỉ áp dụng cho các cluster có từ 2 worker group trở lên. 

Khi tạo mới cluster, tại bước cấu hình Worker Group Base, bật tùy chọn “Reserve this worker group for system workloads only”. Khi tính năng này được bật, các node trong Worker Group Base sẽ được gán taint **CriticalAddonsOnly=true:NoSchedule** , đồng nghĩa với việc Application Pods sẽ không được schedule vào Worker Group Base, trừ khi chúng được cấu hình toleration phù hợp. 

Trong trường hợp cluster đang hoạt động và Worker Group Base tồn tại các Application pods, việc bật tính năng này lên sẽ không làm ảnh hưởng đến các application pods trên. Những pods mới được tạo mà không có toleration sẽ không được schedule vào Worker Group Base. 

Trong trường hợp người dùng xóa các Worker Group và cluster chỉ còn lại 1 Worker Group duy nhất, hệ thống sẽ tự động disable tùy chọn này cho đến khi có thêm Worker Group mới. 

[ Previous Thay đổi cấu hình Internal subnet Load Balancer (CIDR) ](./thay-doi-cau-hinh-internal-subnet-load-balancer) [ Next Bật/Tắt Node Auto-repair ](./bat-tat-node-auto-repair)
