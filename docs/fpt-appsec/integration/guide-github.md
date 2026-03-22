---
sidebar_label: "1. Configure GitHub"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-github"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


GitHub Personal/Enterprise Cloud


* * *

Chỉ **Org Admin** có quyền chỉnh sửa tích hợp **GitHub**

_Xem thêm về phân quyền[tại đây](<https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member>)_

## 1\. Configure GitHub

**Bước 1** : Sau khi đã chọn org/team, nhấn vào **GitHub** để đến màn tích hợp GitHub:

![anhfsec](/img/docs/1e066503dd83-in-git.png)

**Bước 2** : Sau khi thiết lập quyền truy cập vào **Private/public repository** , nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitHub để tạo token

![anhfsec](/img/docs/b087642bf8ce-G4.png)

**Bước 3** : Chọn **Tokens (classic)** ở thanh Menu bên trái và chọn **Generate new token (Classic)**

![anhfsec](/img/docs/1a2f74b6395b-G5.png)

![anhfsec](/img/docs/94657d49c130-G6.png)

**Bước 4** : Điền **Note** và tích chọn repo để sử dụng được các tính năng

![anhfsec](/img/docs/399bf273704a-G7.png)

**Bước 5** : Nhấn **Generate Token** để tạo token

![anhfsec](/img/docs/cf628d37d236-G8.png)

**Bước 6** : **Copy link** của token

![anhfsec](/img/docs/0bca59fa0d6d-G9.png)

**Bước 7** : Paste **link token** vào phần **Personal Access Token** và nhấn **Test Connection**

![anhfsec](/img/docs/ace18550680b-G10.png)

![anhfsec](/img/docs/96b6199e575a-G11.png)

Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)

Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**

**Bước 8** : Nhấn vào **Integrate**.

## 2\. Xem detail

Chỉ **Org Admin** hoặc **Team Manager** có quyền xem chi tiết các loại tích hợp

Sau khi đã chọn org/team, nhấn vào **Configured GitHub** để xem tình trạng configure

![anhfsec](/img/docs/849778ed6c8b-in-git2.png)

Ở đây, bạn có thể thấy các thông tin như **Personal Access Token** , **Repository Access** , **Integrated at** , và **Access Key** phục vụ cho tích hợp CICD

![anhfsec](/img/docs/8d5a45e01dd1-Screenshot-2025-06-17-155316.png)

Bạn có thể tiến hành **Reintegrate** hoặc **Disable** tích hợp GitHub

## 3\. Reconfigure GitHub

**Bước 1** : Nhấn **Reconfigure** trong màn hình chi tiết của tích hợp GitHub

![anhfsec](/img/docs/ac8ba336dc12-in-git3.png)

**Bước 2** : Thực hiện lại các thao tác giống khi tích hợp GitHub

## 4\. Vô hiệu hoá tích hợp GitHub

**Bước 1** : Nhấn **Disable** trong màn hình chi tiết của tích hợp GitHub

![anhfsec](/img/docs/cd794a676c36-in-git4.png)

**Bước 2** : Điền “disable" và nhấn **Confirm** để thực hiện vô hiệu hóa

![anhfsec](/img/docs/d7098984e579-Screenshot-2025-06-17-160052.png)

## 5\. Access Key cho CI/CD pipeline

Ở phần detail bạn sẽ được cung cấp access key để có thể tích hợp CI/CD Pipeline. Hướng dẫn tích hợp [tại đây](<https://fptcloud.com/documents/fpt-security-platform/?doc=cicd-guideline>)

![anhfsec](/img/docs/0f0523e9f602-in-git5.png)

Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline

![anhfsec](/img/docs/c0ffda22dcba-in-git6.png)

[ Previous Integration Management - Quản lý tích hợp ](./guide-integration) [ Next GitLab Cloud ](./guide-gitlab)
