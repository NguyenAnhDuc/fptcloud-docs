---
sidebar_class_name: hidden
sidebar_label: "Audit Logs - Managed Kubernetes Cluster"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=audit-log-vn"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Audit Logs - Managed Kubernetes Cluster 


* * *

Giới thiệu chung tính năng Audit Logs Security

Audit Log nằm trong nhóm tính năng về Security được cung cấp self-service trên Unify portal thuộc sản phẩm MFKE hỗ trợ ghi lại toàn bộ hoạt động và yêu cầu API gửi đến kube-apiserver. Từ đó giúp truy xuất tác nhân nào, đã thực hiện hành động gì, vào thời điểm nào, các object bị tác động và kết quả của hành động đó. 

Lợi ích của Audit Log: 

  * Giúp giám sát hoạt động của các thành phần tương tác với API server của cụm Kubernetes. 

  * Cung cấp khả năng phân tích bảo mật và phát hiện các hành vi bất thường. 

  * Hỗ trợ truy vết sự cố và tuân thủ quy định (compliance). 

✓ Cấu trúc của Audit Log bao gồm các thông tin sau: 

![](/img/docs/84596edd3229-Picture1-11.png)

Request URL: Đường dẫn của API được gọi tới kube-apiserver. 

\- Audit ID: ID duy nhất cho từng sự kiện audit, dùng để truy vết log. 

\- Object Reference: Thông tin về tài nguyên Kubernetes được thao tác: 

ApiGroup 

apiVersion: Phiên bản API (v1)

name: Tên của node

Namespace

resource: Loại tài nguyên (nodes)

Action: Thao tác được thực hiện trên tài nguyên Kubernetes. Ví dụ: patch/create/delete/update 

Username: Tên của tài khoản hoặc dịch vụ thực hiện hành động. 

Request Received: Thời gian mà yêu cầu được ghi nhận bởi kube-apiserver (theo định dạng dd-MM-yyyy HH:mm:ss). 

Logging Time: Thời gian khi sự kiện được ghi nhận trong hệ thống log của dịch vụ MFKE. Thường thì Logging Time sẽ trễ hơn so với Request Received do thời gian xử lý đẩy log từ kube-apiserver của cluster lên trên hệ thống log tập trung.

Hướng dẫn sử dụng tính năng trên Unify Portal

Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))

**1\. Kích hoạt tính năng Audit Log Security:**

Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần audit sau đó vào tab Security, chọn tab Audit Log. 

![](/img/docs/37c26cb2866c-Picture2-9.png)

Sau khi bấm vào tab Audit Log, màn hình sẽ tự động query và hiển thị toàn bộ log ghi được trong 1 giờ gần nhất. Thông tin audit log được hiển thị với các trường đã được mô tả ở mục 2 bên trên. 

![](/img/docs/0344c4e24647-Picture3-9.png)

**2\. Nếu muốn tìm logs trong một khoảng thời gian khác, khách hàng có thể thao tác như sau:**

  * Bước 1: Click vào mục time picker ở góc trên bên phải màn hình. 

![](/img/docs/91bc25169c51-Picture4-8.png)

  * Bước 2: Nhập khoảng thời gian muốn hiển thị log và click **Apply Filter**. 

![](/img/docs/a1a7d3599c0f-Picture5-8.png)

Hệ thống sẽ hiển thị toàn bộ logs đã ghi được trong khoảng thời gian đã chọn, log sẽ được sắp xếp theo thời gian giảm dần. 

![](/img/docs/5d8f452b0008-Picture6-8.png)

Lưu ý: 

  * Khách hàng chỉ có thể filter log trong khoảng thời gian (From – To) tối đa là 3 ngày. 

  * Logs sẽ được lưu trữ trong vòng 7 ngày gần nhất.

[ Previous Tính năng Workload Managed Kubernetes Cluster ](./tinh-nang-workload-scan) [ Next Tính năng đánh Tag cho Virtual Machine  ](./danh-tag-cho-vm)
