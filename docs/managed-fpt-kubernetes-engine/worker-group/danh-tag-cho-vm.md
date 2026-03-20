---
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=danh-tag-cho-vm"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng đánh Tag cho Virtual Machine 


* * *

Tính năng **Tagging** cho phép người dùng gắn nhãn các máy ảo bằng những thẻ tùy chỉnh (tags) nhằm mục đích **phân loại, tìm kiếm và quản lý tài nguyên hiệu quả hơn**. 

✓ **Phân loại thông minh** : Dễ dàng tổ chức các máy ảo theo môi trường (Production, Staging, Development), dự án, phòng ban hoặc bất kỳ tiêu chí nào phù hợp với quy trình quản lý. 

✓ **Tìm kiếm nhanh chóng** : Dựa trên các thẻ được gắn, người dùng có thể lọc và tìm kiếm VM một cách dễ dàng mà không cần ghi nhớ tên phức tạp. 

✓ **Quản lý hiệu quả** : Hỗ trợ theo dõi chi phí, sử dụng tài nguyên và thực hiện báo cáo dựa trên từng nhóm VM đã được đánh tag. 

✓ **Tùy chỉnh linh hoạt** : Thẻ (tags) có thể được tùy chỉnh và áp dụng cho nhiều mục đích khác nhau, phù hợp với nhu cầu cụ thể của doanh nghiệp. 

Với tính năng Tagging, việc quản lý hạ tầng ảo hóa trở nên khoa học hơn, tiết kiệm thời gian và nâng cao hiệu suất vận hành hệ thống. 

Bạn có thể thao tác các tính năng Tagging trên Portal như sau: 

**Tạo Tagging**

Để có thể đánh tag cho VM nằm trong worker group MFKE, người dùng cần phải tạo trước tag theo đúng mục đích sử dụng. 

**Bước 1** : Trên **Unify Portal** , chọn **Tagging** → chọn **Create tag**

![](/img/docs/bf6844ca69fe-Picture1-10.png)

**Bước 2** : Nhập các thông tin của tag và nhấn button **Create**. 

![](/img/docs/51004a9ecff5-Picture2-8.png)

  * Key (required): Nhập key để xác định cho tag 

  * Value (required): Nhập giá trị cho tag tương ứng với key đã đặt 

  * Color: Cho phép người dùng chọn màu sắc để hiển thị tag 

  * Resource scope: Chọn VPC hiển thị tag

![](/img/docs/ae6842beb08d-Picture3-8.png)

**Gắn Tag để sử dụng worker group thuộc MFKE**

Đối với tạo cụm cluster mới

**Bước 1** : Trên **Unify Portal** , chọn **Kubernetes** → Chọn **Managed** → Chọn **Create a Kubernetes Engine** để tạo cluster mới. 

![](/img/docs/53217cf7f489-Picture4-7.png)

**Bước 2** : Tại mục **Nodes Pool** , chọn Tag muốn sử dụng cho worker group.

![](/img/docs/393f40abaded-Picture5-7.png)

Nhập đầy đủ các thông tin cần thiết cho cụm cluster và nhấn button **Create a Kubernetes**.

![](/img/docs/1907fecc11cb-Picture6-7.png)

Chỉnh sửa Tag cho worker group

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn Cluster muốn chỉnh sửa Tag. 

![](/img/docs/fd7c4aed16dd-Picture7-7.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**

![](/img/docs/119a53dbcf2c-Picture8-6.png)

**Bước 3** : Add thêm Tag vào worker group và click button **Save**. 

![](/img/docs/041f86ef59bc-Picture9-5.png)

![](/img/docs/a318c11e2aea-Picture10-5.png)

![](/img/docs/1f1f1d05ae2a-Picture11-4.png)

Quá trình chỉnh sửa Tag sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất. 

Xóa Tag ra khỏi worker group 

**Bước 1** : Chọn **Node Pools** > **Edit Workers**

![](/img/docs/5468c29c2d61-Picture12-4.png)

**Bước 2** : Click dấu để xóa tag khỏi worker group, sau đó nhấn **Save**. 

![](/img/docs/fe7a1c46667d-Picture13-3.png)

![](/img/docs/ca5786f046b0-Picture14-3.png)

![](/img/docs/b7cb4e296f81-Picture15-3.png)

Quá trình xóa Tag sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.

[ Previous Audit Logs - Managed Kubernetes Cluster  ](./audit-log-vn) [ Next Tính năng Backup & Restore ](./backup-restore-vn)
