---
sidebar_label: "Tính năng Hibernate & Wake-up"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-hibernate-wakeup"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng Hibernate & Wake-up 


* * *

Các Clusters thường được sử dụng 24/24 nếu như chúng đang chạy cho môi trường production còn đối với việc sử dụng các cluster scho môi trường dev, test, staging hay demo, việc scale down các resources K8s khi không sử dụng sẽ giúp tiết kiệm chi phí cho người dùng. Tuy nhiên việc scale down thủ công có thể sẽ tốn nhiều thời gian vậy nên tính năng Hibernate sinh ra để tự động hoá phần việc này. 

_Khi người dùng sử dụng tính năng**Hibernate** , các resources trong cluster sẽ có những thay đổi như sau: _

  1. Các worker nodes (instances) sẽ bị xoá 

  2. Các pods chuyển sang trạng thái Pending 

  3. Các services sẽ được giữ nguyên 

  4. Các thành phần lưu trữ trạng thái (PVC...) hay các trạng thái trong etcd cũng sẽ được giữ lại. 

**Wake-up** là một tính năng ngược lại với Hibernate, nó giúp cụm quay lại trạng thái ban đầu trước khi được Hibernate. 

Bạn có thể thao tác các tính năng Hibernate và Wake-up trên **Portal** như sau: 

  * **Đối với Hibernate**

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**

![](/img/docs/60a2b2ae4c23-Picture1-2.png)

**Bước 2** : Bấm nút Hibernate để bắt đầu quá trình 

![](/img/docs/dfd066c049fb-Picture2-1.png)

**Bước 3** : Nhập tên của cụm để xác nhận bắt đầu quá trình 

![](/img/docs/82ec1b384291-Picture3-1.png)

Sau khi thông báo hiện về, quá trình Hibernate bắt đầu, và trạng thái trên Portal sẽ trả về trạng thái _Hibernating (Running)_

![](/img/docs/951d4b79d4fa-Picture4-1.png)

Kết thúc quá trình, trạng thái của cụm sẽ trả về _Succeeded (Hibernated)_ tương ứng với việc Hibernate thành công 

![](/img/docs/85b21a7a8eaa-Picture5-1.png)

  * **Đối với Wake-up**

Với các cụm đã hiện trạng thái _Succeeded (Hibernated)_ , người dùng có thể dùng tính năng Wake-up để khôi phục cụm về lại trạng thái ban đầu. 

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**

![](/img/docs/5cf5a6d0b9e6-Picture6-1.png)

**Bước 2** : Bấm nút **Wakeup** để bắt đầu quá trình 

![](/img/docs/3df9d5b92f08-Picture7-1.png)

**Bước 3** : Nhập tên cụm để xác nhận quá trình 

![](/img/docs/03f0209f422e-Picture8-1.png)

Sau khi thông báo hiện về, quá trình Hibernate bắt đầu, và trạng thái trên Portal sẽ trả về trạng thái _Processing (Running)_

![](/img/docs/a91ef8d9189e-Picture9-1.png)

Kết thúc quá trình, trạng thái của cụm sẽ trả về _Succeeded (Running)_ tương ứng với việc đã thành công Wakeup cụm

![](/img/docs/9430756e1bfc-Picture10-1.png)

  * **_Note_** : 

Khuyến cáo trước khi bạn bắt đầu quá trình Hibernate, hãy đảm bảo các pods trong cụm đều trong trạng thái _Running_ , các resources khác hoạt động bình thường (svc type LB, ingress, Persistent Volume, secrets, configmaps...) 

Trong khi cụm đã được Hibernated, nếu người dùng deploy thêm các deployment khác, thì các resource mới sẽ đều sẽ ở trạng thái _Pending_ , cho tới khi người dùng chọn Wakeup cụm.

[ Previous Persistent Storage ](./persistent-storage) [ Next Tính năng Đặt lịch Hibernate & Wake-up ](./tinh-nang-dat-lich-hibernate-wake-up)
