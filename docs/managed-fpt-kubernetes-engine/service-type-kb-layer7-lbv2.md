---
sidebar_class_name: hidden
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=service-type-kb-layer7-lbv2"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Sử dụng service type Loadbalancer Layer 7 (LBv2)


* * *

FPT Cloud cung cấp cho khách hàng giải pháp sử dụng Loadbalancer Layer 7 với việc sử dụng Cert SSL của khách hàng tự cung cấp. 

**1\. Khởi tạo Cert**

**Bước 1** : Truy cập vào **Tab Load Balancer** , bấm **Import SSL Certificate** để tạo cert mới

![](/img/docs/e00d2892e4ef-1.-tao-cert.png)

**Bước 2** : Nhập các thông tin được yêu cầu (chứng chỉ có định dạng chuẩn **PEM**) 

![](/img/docs/4824eb436cba-2.-tao-cert.png)

**Bước 3** : Kiểm tra lại cert nếu được tạo thành công

![](/img/docs/a241b1e68725-3.-kiem-tra-lai-cert.png)

**2\. Khởi tạo service Loadbalancer sử dụng method HTTPS**

Trong cấu hình Service khởi tạo, thêm một annotation để sử dụng cert SSL mà người dùng vừa khởi tạo ở trên. 
    
    
    loadbalancer.fptcloud.com/load-balancer-version: v2 
    
    loadbalancer.fptcloud.com/default-tls-secret-ref-name: “name_of_ssl_cert” #tên của cert cần phải giống với tên được khởi tạo trên portal 
    

Lúc này, Listener sẽ có phương thức là **TERMINATED_HTTPS**. 

Lưu ý: 

  * Cần phải thêm annotation trên vào lúc khởi tạo Load Balancer 

  * Hiện tại chưa cung cấp tính năng renew, update Cert trên Portal, nếu khách hàng mong muốn đổi cert, vui lòng thêm mới ở trên portal với 1 tên khác, và chỉnh sửa giá trị của annotation sang tên muốn sử dụng (sẽ có downtime ~20s)

[ Previous Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster  ](./cau-hinh-proxy-protocol-cho-nginx-ingress) [ Next Thay đổi cấu hình flavor của worker pool ](./thay-doi-cau-hinh-flavor-cua-worker-pool)
