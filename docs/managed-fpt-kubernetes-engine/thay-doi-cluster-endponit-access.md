---
sidebar_class_name: hidden
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thay-doi-cluster-endponit-access"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Thay đổi Cluster Endpoint Access


* * *

**Để thay đổi Access Mode của cụm Kubernetes trên FPT Cloud, khách hàng làm theo hướng dẫn sau:**

Lưu ý: 

  * M-FKE chỉ hỗ trợ chuyển đổi Access Mode từ Public & Privae ➔ Private và ngược lại.
  * M-FKE không hỗ trợ chuyển đổi Access Mode nếu cụm Kubernetes đang ở mode Public.

**Bước 1:** Chọn cluster muốn thay đổi Access Mode, click vào cluster name

![](/img/docs/d5cf37cbfd14-Screenshot-2025-03-20-151549.png)

**Bước 2:** Tại mục Cluster Endpoint Access, click button Edit

![](/img/docs/7e9b842b9722-Screenshot-2025-03-20-151934-2.png)

**Bước 3:** Chọn Access Mode mong muốn, nhập Allow CIDR hợp lệ và click button Confirm.

![](/img/docs/8d2271bf5481-Screenshot-2025-03-20-152635.png)

**Để update lại Allow CIDR, khách hàng làm theo hướng dẫn sau:**

**Bước 1:** Chọn cluster muốn thay đổi Access Mode, click vào cluster name

![](/img/docs/d5cf37cbfd14-Screenshot-2025-03-20-151549.png)

**Bước 2:** Tại mục Cluster Endpoint Access, click button Edit

![](/img/docs/7e9b842b9722-Screenshot-2025-03-20-151934-2.png)

**Bước 3:** Nhập thêm dải CIDR hợp lệ và click button Confirm.

![](/img/docs/cab3a4aa4b3d-Screenshot-2025-03-20-153324.png)

**Để xóa bỏ Allow CIDR, khách hàng làm theo hướng dẫn sau:**

**Bước 1:** Chọn cluster muốn thay đổi Access Mode, click vào cluster name

![](/img/docs/d5cf37cbfd14-Screenshot-2025-03-20-151549.png)

**Bước 2:** Tại mục Cluster Endpoint Access, click button Edit

![](/img/docs/7e9b842b9722-Screenshot-2025-03-20-151934-2.png)

**Bước 3:** Xóa bỏ toàn bộ CIDR đã có và click button Confirm

![](/img/docs/e5b8d33b83a8-Screenshot-2025-03-20-153755.png)

![](/img/docs/95e50f54ee7c-Screenshot-2025-03-20-153912.png)

Quá trình update Access Mode sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện chuyển Access Mode mới.

[ Previous Thay đổi cấu hình K8s Cluster ](./thay-doi-cau-hinh-k8s-cluster) [ Next Thêm Worker Group ](./them-worker-group)
