---
sidebar_label: "Persistent storage"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=persistent-storage"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Persistent Storage


* * *

Sản phẩm Managed FKE của FPTCloud cung cấp giải pháp block storage (CSI – Container Storage Interface) hỗ trợ người dung có thể lưu trữ, đọc ghi dữ liệu theo tốc độ mong muốn. Một cluster managed FKE được cung cấp sẵn một storage class mặc định sử dụng policy disk giống với policy disk của worker pool base. CSI của FPTCloud hỗ trợ resize volume online. 

![](/img/docs/9affd8aaff21-Picture1-1.png)

Người dùng có thể sử dụng các storage class này để tạo các PVC (persistent volume claim) và các ứng dụng sử dụng các PVC này. 

Nếu người dùng muốn tạo mới storage class với loại policy disk khác, hãy thực hiện như sau: 

  * Lưu lại cấu hình của storage class mặc định. 

  * Đổi policy disk. 

  * Đổi tên của storage class. 

  * Loại bỏ annotation default storage class. 

_Lưu ý không chỉnh sửa cấu hình storage class mặc định của cluster, nếu người dùng thay đổi cấu hình đó, nó sẽ tự động được rollback lại cấu hình mặc định. Người dùng cần chỉ định storageClassName cho cấu hình PersistentVolumeClaim nếu muốn sử dụng storageClass mới._

[ Previous Service Type Load-Balancer ](./service-type-load-balancer) [ Next Tính năng Hibernate & Wake-up  ](./tinh-nang-hibernate-wakeup)
