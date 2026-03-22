---
sidebar_label: "Thay doi cau hinh internal subnet load balancer"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thay-doi-cau-hinh-internal-subnet-load-balancer"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Thay đổi cấu hình Internal subnet Load Balancer (CIDR)


* * *

FPT Cloud hỗ trợ khách hàng thay đổi dải Internal subnet load balancer (CIDR) ngay trên Unify portal, để thực hiện khách hàng làm theo các bước sau:

**Bước 1** : Chọn cluster muốn thay đổi Internal subnet Load Balancer, click vào cluster name.

![](/img/docs/9692da065dfc-Screenshot-2025-04-08-140012.png)

**Bước 2** : Chọn tab **Advanced** , click button Config Internal subnet Load Balancer.

![](/img/docs/9692da065dfc-Screenshot-2025-04-08-140012.png)

**Bước 3** : Nhập dải CDIR hợp lệ và click button **Confirm**

![](/img/docs/9692da065dfc-Screenshot-2025-04-08-140012.png)

Quá trình update Internal subnet Load Balancer sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện chuyển Internal subnet Load Balancer (CIDR) mới.

[ Previous Thêm Worker Group ](./them-worker-group) [ Next Chỉnh sửa label/taint cho worker group ](./chinh-sua-label-taint-cho-worker-group)
