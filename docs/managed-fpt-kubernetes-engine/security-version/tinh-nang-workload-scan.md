---
sidebar_label: "Tính năng Workload Managed Kubernetes Cluster"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-workload-scan"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng Workload Managed Kubernetes Cluster


* * *

**1\. Giới thiệu chung tính năng Workload Security**

**1.1. Configuration Auditing Overview**

Với việc tổ chức deploy các containerized workloads bên trong môi trường Kubernetes, bạn sẽ đối mặt với nhiều lựa chọn cấu hình liên quan tới images, containers, control plane và data plane. Việc cài đặt các cấu hình không phù hợp sẽ tạo nên những mối nguy tiềm tàng về bảo mật. Devops và Platform owners cần có khả năng liên tục đánh giá các công cụ, workloads và cơ sở hạ tầng theo các tiêu chuẩn cứng hóa cấu hình để khắc phục bất kỳ vi phạm nào.

**1.2. Vulnerability Report**

Vulnerability Report cung cấp những lỗ hổng gần nhất được tìm thấy trong container image của một Kubernetes workload cho trước. Nó bao gồm list của OS package và lỗ hổng ứng dụng, kèm theo đó là bản summary được nhóm theo Severity (độ quan trọng).

Vulnerability Report cung cấp những lỗ hổng gần nhất được tìm thấy trong container image của một Kubernetes workload cho trước. Nó bao gồm list của OS package và lỗ hổng ứng dụng, kèm theo đó là bản summary được nhóm theo Severity (độ quan trọng). 

Đối với từng namespace, sẽ có một Vulnerability Report tương ứng, lưu kết quả scan images workload bên trong namespace đó. **

Trong report, sẽ có các trường tương ứng sau: **

  * **namespace** : namespace đang được sử dụng để scan các container images trong K8s workload. 

  * **summary** : Tóm tắt kết quả của scan report 

criticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng

highCount: số lượng lỗ hổng nguy hiểm mức độ cao

lowCount: số lượng lỗ hổng nguy hiểm mức độ thấp

unkownCount: số lượng lỗ hổng nguy hiểm không đánh giá được mức độ

  * **vulnerabilities** : chi tiết của từng lỗ hổng 

ID

Severity: độ khẩn thiết của lỗ hổng (Critical, High, Low, Unkown)

Title: tên của lỗ hổng

PrimaryLink : Link liên kết tới mô tả chi tiết của lỗ hổng

Score: là điểm số CVE (Common Vulnerabilities and Exposure), từ đó để xác định Severity

+) 0 -> Unkown

+) 0.1 - 3.9 -> Low -> Unkown

+) 4.0 - 6.9 -> Medium

+) 7.0 - 8.9 -> High

+) 9.0 - 10.0 -> Critical

Namespace

**1.3. RBAC Assessment Report**

RbacAssessmentReport đại diện cho các kiểm tra được thực hiện bởi các công cụ kiểm toán cấu hình, chẳng hạn như Trivy, đối với một đánh giá RBAC của Kubernetes. 

Ví dụ, kiểm tra rằng một Role nhất định không cấp quyền truy cập vào secrets cho tất cả các nhóm. 

Mỗi báo cáo được sở hữu bởi đối tượng Kubernetes cơ sở và được lưu trữ trong cùng namespace. 

Trong report, sẽ có các trường tương ứng sau: 

  * **namespace** : namespace đang được sử dụng để scan các role trong K8s workload 

  * **summary** : Tóm tắt kết quả của scan report 

criticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng

highCount: số lượng lỗ hổng nguy hiểm mức độ cao

mediumCount: số lượng lỗ hổng nguy hiểm mức độ vừa

lowCount: số lượng lỗ hổng nguy hiểm mức độ thấp

**1.4. Cluster RBAC Assessment Report**

Nếu với RBAC Assessment Report là kiểm tra quyền của các Role nằm trong cùng một namespace, thì Cluster RBAC Assessment Report là tổng hợp của mọi Role nằm trong các namespace

**1.5. Config Audit Report**

ConfigAuditReport đại diện cho các kiểm tra được thực hiện bởi Trivy, đối với cấu hình của từng đối tượng Kubernetes. Ví dụ, kiểm tra xem liệu một container image đã được chạy dưới quyền non-root user hay chưa, hoặc là liệu container đó đã được cấu hình resource request hay limits hay chưa. Các việc checks có thể liên quán tới K8s workloads và các resource khác trong namespace, như là services, configmaps, roles và rolebindings. 

Trong report, sẽ có các trường tương ứng sau: 

  * **Namespace** : namespace được quét 

  * **Summary** : 

CriticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng

HighCount: số lượng lỗ hổng nguy hiểm mức độ cao

LowCount: số lượng lỗ hổng nguy hiểm mức độ thấp

MediumCount: số lượng lỗ hổng nguy hiểm mức độ vừa

**1.6. Cluster Config Audit Report**

Nếu với Config Audit Report là kiểm tra các cấu hình nằm trong cùng một namespace, thì Cluster Config Audit Report là tổng hợp của cấu hình nằm trong các namespace

**1.7. Cluster Infra Assessment Report**

Cluster Infra Assessment Report là kiểm tra các cấu hình quan trọng ở phần quản trị của cụm K8s, ví dụ như: etcd, apiserver, scheduler, controller-manager, v.v...

**2\. Hướng dẫn sử dụng tính năng trên Unify Portal**

_Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))_

**2.1. Kích hoạt tính năng Workload Security:**

Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Workload Security rồi thực hiện enable: 

![](/img/docs/6a8d38374c67-Picture1-9.png)

Hình 1. Kích hoạt dịch vụ Workload Scan 

  
Sau khi bấm nút kích hoạt, màn hình sẽ hiển thị một biểu mẫu cho người dùng lựa chọn: các namespace để quét, TTL (Time-to-live) của các báo cáo, và các loại quét để xuất thành báo cáo hiển thị trên portal. 

![](/img/docs/daa01862bd7a-Picture2-7.png)

Hình 2. Biểu mẫu để lựa chọn cấu hình sau khi kích hoạt tính năng

  
![](/img/docs/19c4f9df9bf8-Picture3-7.png)

Hình 3. Lựa chọn các namespaces

![](/img/docs/e8ea8ab0fdba-Picture4-6.png)

Hình 4. Lựa chọn các loại báo cáo để thực hiện quét và hiển thị trên Portal

![](/img/docs/f73e06e239b9-Picture5-6.png)

Hình 5. Lựa chọn thời gian TTL (mặc định 30 phút)

  
Sau khi job Workload được chạy thành công, kết quả chi tiết sẽ được hiển thị, người dùng có thể chạy lại workload để cập nhật kết quả mới nhất. 

Thông tin hiển thị của các Reports được hiển thị và biểu diễn như dưới, với các trường hiển thị đã được diễn tả ở mục trên. 

![](/img/docs/299846cc4b5b-Picture6-6.png)

Hình 6. Màn hiển thị của Cluster RBAC Assessment Report

![](/img/docs/fb4792ac29f9-Picture7-6.png)

Hình 7. Màn hiển thị của Config Audit Report

![](/img/docs/c87e61568f21-Picture8-5.png)

Hình 8. Màn hiển thị của Rbac Assessment Report

![](/img/docs/97d3126abd2e-Picture9-4.png)

Hình 9. Màn hiển thị của Vulnerability Report

![](/img/docs/d37033865021-Picture10-4.png)

Hình 10. Màn hiển thị của Cluster Infra Assessment Report

  
**2.2. Tắt tính năng Workload Security**

Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Workload Security rồi thực hiện xác nhận để tắt dịch vụ. 

![](/img/docs/44b70f69aeb7-Picture11-3.png)

[ Previous Tính năng Runtime Security cho Managed Kubernetes Cluster  ](./tinh-nang-runtime-security-cluster) [ Next Audit Logs - Managed Kubernetes Cluster  ](./audit-log-vn)
