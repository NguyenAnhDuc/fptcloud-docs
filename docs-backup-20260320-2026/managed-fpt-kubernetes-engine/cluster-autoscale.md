---
sidebar_class_name: hidden
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cluster-autoscale"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Cluster Autoscale


* * *

Tính năng Cluster Autoscale của sản phẩm Managed FKE giúp tự động scale thêm các worker mới trong một worker pool nếu như ứng dụng chạy trên worker pool đó không được đáp ứng đủ tài nguyên (CPU, Memory) bởi các worker nodes của pool đó. Khi đó, những pod bị pending do node không đủ tài nguyên sẽ được phục vụ bởi các worker nodes mới sau khi scale lên. Tính năng Cluster Autoscale cũng tự động xóa các nodes không sử dụng đủ lượng utilization (mặc định là 50%) của node đó. Chú ý số lượng worker nodes của một worker pool chỉ được scale trong khoảng min-max được người dùng định nghĩa sẵn trên FPTCloud Portal. 

## Bật tính năng Cluster Autoscale

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn bật tính năng **Cluster Autoscale**.

![](/img/docs/6cc619685477-Picture44.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**.

![](/img/docs/f8bef870dfed-Picture8-3.png)

**Bước 3** : Điều chỉnh số lượng worker min-max theo sizing mà người dùng lựa chọn.

![](/img/docs/88c23a885ad7-Picture46.png)

_Lưu ý: Khi số lượng worker max lớn hơn worker min, tính năng cluster autoscale sẽ tự động được bật._

**Bước 4** : Kiểm tra lại thông tin, chọn **Save** để thực hiện bật tính năng Cluster AutoScale. 

![](/img/docs/173646fdec84-Picture47.png)

## Tắt tính năng Cluster Autoscale

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn tắt tính năng **Cluster Autoscale**.

![](/img/docs/a1ae1266b1e4-Picture48.png)

**Bước 2** : Chọn **Nodes Pool** > **Edit workers**. 

![](/img/docs/44ab28e432a2-Picture49.png)

**Bước 3** : Điều chỉnh số lượng worker min-max bằng nhau.

![](/img/docs/840f09a1dd8e-Picture50.png)

**Lưu ý:** Khi số lượng worker min và worker max trong một worker pool bằng nhau, tính năng cluster autoscale tự động bị tắt.

**Bước 4** : Kiểm tra lại thông tin, chọn **Save.**

![](/img/docs/e16b0e3d1a5c-Picture51.png)

## Thay đổi cấu hình Cluster Autoscale

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn tùy chỉnh cấu hình **Cluster Autoscale**.

![](/img/docs/39af7576965e-Picture52.png)

**Bước 2** : Chọn **Nodes Pool** > **Edit workers**. 

![](/img/docs/4178c5add978-Picture53.png)

**Bước 3** : Điều chỉnh số lượng worker theo nhu cầu sử dụng.

![](/img/docs/969dcae3f969-Picture54.png)

**Bước 4** : Kiểm tra lại thông tin, chọn **Save.**

![](/img/docs/f877e43a77f6-Picture55.png)

[ Previous Nâng cấp K8S version ](./nang-cap-k8s-version) [ Next Triển khai ứng dụng trên worker pool ](./trien-khai-ung-dung-tren-worker-pool)
