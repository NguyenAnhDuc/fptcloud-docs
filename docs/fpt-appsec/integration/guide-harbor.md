---
sidebar_label: "2. FPT AppSec"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-harbor"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


Harbor


* * *

## 1\. Tạo Robot Account - Harbor

**Bước 1** : Truy cập Harbor Server của bạn, chọn tab Administration > Robot Accounts

**Bước 2** : Nhấn **New Robot Account** để tạo mới

![anhfsec](/img/docs/312b60583075-hb1-1.png)

**Bước 3** : Điền các thông tin như **Name** , **Description** và **Expiration time** sau đón nhấn **Next**

![anhfsec](/img/docs/184c1f489fb3-hb2.png)

**Bước 4** : Chọn các quyền hệ thống cần thiết sau đó nhấn **Next**

![anhfsec](/img/docs/752643bd0436-hb3.png)

**Bước 5** : Chọn các Project mà Robot Account cần có quyền sau đó chọn **Permission** cho Robot Account đó. Cần đảm bảo Robot Account có quyền **List, Read Artifacts** và quyền **List, Pull, Read Repository**

![anhfsec](/img/docs/238ff62a1852-hb4.png)

![anhfsec](/img/docs/12df39e44c85-hb5.png)

**Bước 6** : Sau khi điền hết thông tin, nhấn **Finish**

![anhfsec](/img/docs/bf0aa7ff25dc-hb6-1.png)

**Bước 7** : Sau khi Robot Account được tạo thành công, copy **Robot Account name** và **secret** dùng cho tích hợp tại màn hình của **FPT Portal**

![anhfsec](/img/docs/13cec7b9e4ed-hb7.png)

## 2\. Tích hợp Harbor

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp Harbor

_Xem thêm về phân quyền[tại đây](<https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member>)_

**Bước 1** : Sau khi đã chọn org/team, nhấn vào **Harbor** để đến màn tích hợp:

![anhfsec](/img/docs/88b6c13676ee-hb8.png)

**Bước 2** : Điền **Container Registry Name** (URL Harbor server) của bạn, **Robot Account Name** và **Robot Account Secret** (đã tạo từ Harbor)

![Alt text](/img/docs/c25dbb06196d-hb9.png)

**Bước 3** : Sau khi điền hết thông tin, nhấn **Test Connection**. Hệ thống sẽ kiểm tra thông tin các trường bắt buộc, nếu thông tin hợp lệ, hệ thống thông báo **Connected successfully** và nút **Integrate** được **enabled**

![Alt text](/img/docs/b1a89abe05d6-hb10.png)

**Bước 4** : Sau khi hệ thống thông báo test kết nốt thành công, nhấn **Integrate**

![Alt text](/img/docs/85d22a70a635-hb11.png)

## 3\. Xem chi tiết tích hợp Harbor

Chỉ **Org Admin** và **Team Manager** có quyền xem chi tiết tích hợp

Sau khi đã chọn org/team, nhấn vào **Configured Harbor** để xem chi tiết

![anhfsec](/img/docs/85d22a70a635-hb11.png)

Ở đây, bạn có thể xem trạng thái của tích hợp, danh sách **Integrated VPCs** với các thông tin _VPC, Robot Account Name, Container Registry Name_ và **Access Key** phục vụ cho tích hợp CICD. 

![anhfsec](/img/docs/b9f618ce2ae3-hb13.png)

Bạn có thể tiến hành **Reintegrate** hoặc **Disable** tích hợp Harbor

[anhfsec](<https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png>)

## 3\. Reintegrate Harbor

**Bước 1** : Để **reintegrate Harbor** , ấn vào màn hình chi tiết của tích hợp Harbor. Chọn biểu tượng **Edit** cạnh mục **Account Credentials**

![anhfsec](/img/docs/f00160344485-hb14.png)

**Bước 2** : Thực hiện các thao tác giống **Integrate Harbor**

## 4\. Vô hiệu hoá tích hợp FPT Container Registry

Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 6\. Access Key cho CI/CD pipeline

Ở phần detail, ngoài General Information, bạn sẽ được cung cấp **access key** để có thể tích hợp CI/CD Pipeline

[anhfsec](<https://fptcloud.com/wp-content/uploads/2025/05/hb15.png>)

Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline

[ Previous FPT Container Registry ](./guide-fcr) [ Next DevOps Pipeline Integration ](./cicd-guideline)
