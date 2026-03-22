---
sidebar_label: "FPT Container Registry"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-fcr"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


FPT Container Registry


* * *

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp FPT Container Registry (FCR)

_Xem thêm về phân quyền[tại đây](<https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member>)_

## 1\. Integrate FCR - Add VPC

**Bước 1** : Sau khi đã chọn org/team, nhấn vào **FPT Container Registry** để đến màn tích hợp:

![anhfsec](/img/docs/c3f2a38c2c16-fcr1-2.png)

**Bước 2** : Nhấn vào **Add VPC** để thêm VPC mới vào danh sách tích hợp

![anhfsec](/img/docs/53c9d4c2d850-fcr2-1.png)

**Bước 3** : Chọn VPC cần tích hợp

![anhfsec](/img/docs/ddd75d3244a7-infcr3.png)

**Bước 4** : Sau khi chọn VPC, nếu bạn đã có Robot Account, điền **Robot Account Name** , nếu bạn chưa có Robot Account, hãy xem phần hướng dẫn [tại đây](<https://fptcloud.com/documents/fpt-container-registry-2/?doc=tao-moi-robot-account>).

![anhfsec](/img/docs/55fd52f82154-infcr4.png)

**Bước 5** : Điền **tên** và **secret** của Robot Account 

![anhfsec](/img/docs/d546663caf97-lala1.png)

![anhfsec](/img/docs/91f84e574c3c-lala2.png)

**Bước 6** : Sau khi điền hết thông tin, nhấn **Test Connection**. Hệ thống sẽ kiểm tra thông tin các trường bắt buộc, nếu thông tin hợp lệ, hệ thống thông báo **Connected successfully** và nút **Integrate** được enabled

![anhfsec](/img/docs/08073379a295-lala3.png)

Trường hợp các thông tin không hợp lệ (sai Robot Account, secret), hệ thống thông báo "Connected failed".

**Bước 7** : Sau khi hệ thống thông báo test kết nốt thành công, nhấn **Integrate**

![anhfsec](/img/docs/c753c69cbbd0-infcr8.png)

VPC được kết nối thành công sẽ được thêm vào danh sách **Integrated VPCs**

![anhfsec](/img/docs/c2ef4bc41a7b-infcr9.png)

## 2\. Xem detail

Chỉ **Org Admin** và **Team Manager** có quyền xem chi tiết tích hợp

Sau khi đã chọn org/team, nhấn vào **Configured FPT Container Registry** để xem chi tiết

![anhfsec](/img/docs/c3f2a38c2c16-fcr1-2.png)

Ở đây, bạn có thể xem trạng thái của tích hợp, danh sách **Integrated VPCs** với các thông tin _VPC, Robot Account Name, Container Registry Name_ và **Access Key** phục vụ cho tích hợp CICD. 

![anhfsec](/img/docs/c2ef4bc41a7b-infcr9.png)

Bạn có thể tiến hành **Add VPC** , **Reconfigure** , và **Delete** VPCs hoặc **Disable** tích hợp với FPT Container Registry

[anhfsec](<https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png>)

## 3\. Reconfigure FPT Container Registry VPC

**Bước 1** : Để **reconfigure** FPT Container Registry VPC, ấn vào màn hình chi tiết của tích hợp FPT Container Registry. Chọn **Reconfigure** ở mục Action của 1 VPC

![anhfsec](/img/docs/fe8e1ce98cb2-lala4.png)

**Bước 2** : Thực hiện các thao tác giống **Add VPC**

## 4\. Xóa VPC

**Bước 1** : Chọn **Delete** ở mục Action của 1 VPC

[anhfsec](<https://fptcloud.com/wp-content/uploads/2025/05/rfcr2.png>)

**Bước 2** : Điền _delete_ rồi nhấn **Confirm**

[anhfsec](<https://fptcloud.com/wp-content/uploads/2025/05/rfcr3.png>)

## 5\. Vô hiệu hoá tích hợp FPT Container Registry

Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 6\. Access Key cho CI/CD pipeline

Ở phần detail, ngoài General Information, bạn sẽ được cung cấp **access key** của từng VPC để có thể tích hợp CI/CD Pipeline

[anhfsec](<https://fptcloud.com/wp-content/uploads/2025/05/rfcr4.png>)

Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline

[ Previous GitLab Server ](./guide-gitlabserver) [ Next Harbor ](./guide-harbor)
