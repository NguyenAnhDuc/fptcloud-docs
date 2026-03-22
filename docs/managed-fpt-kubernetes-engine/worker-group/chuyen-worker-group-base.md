---
sidebar_label: "Chuyen worker group base"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=chuyen-worker-group-base"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng chuyển worker group base


* * *

Khi người dùng có mong muốn thay đổi worker group base, các thành phần của hệ thống (coredns, metrics servers, CNI controller, …) sẽ được triển khai lại trên các worker nodes thuộc worker group base mới. Tính năng này mang lại lợi ích trong trường hợp người dùng muốn tăng/giảm cấu hình flavor của các worker nodes trong worker group base, khi đó người dùng tạo worker group mới với cấu hình worker nodes mong muốn, chuyển worker group mới đó thành base và xóa worker group base cũ. 

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn thay đổi cấu hình Worker Group. 

![](/img/docs/569deb3845f2-Picture36.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**. 

![](/img/docs/59491c553845-Picture5-3.png)

**Bước 3** : Chọn worker group muốn thay đổi. 

![](/img/docs/2ddc619da3b8-Picture6-3.png)

**Bước 4** : Kiểm tra lại thông tin, chọn **Save** để thực hiện lưu thay đổi. 

![](/img/docs/31886a4dc808-Picture39.png)

![](/img/docs/6f5a30879d75-Picture40.png)

Quá trình thay đổi Woker Group Base sẽ thực hiện, trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất. 

_Gợi ý: Khi thay đổi thông số của worker group, đầu tiên hệ thống sẽ tạo thêm worker nodes mới với cấu hình mong muốn. Khi worker nodes mới được tạo thành công, worker node với cấu hình cũ sẽ được remove khỏi hệ thống. Các pod sẽ được chuyển từ worker node cũ sang worker node mới._

[ Previous Bật/Tắt Node Auto-repair ](./bat-tat-node-auto-repair) [ Next Nâng cấp K8S version ](./nang-cap-k8s-version)
