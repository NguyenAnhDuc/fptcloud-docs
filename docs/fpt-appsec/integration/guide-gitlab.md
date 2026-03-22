---
sidebar_label: "1. Configure GitLab"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-gitlab"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


GitLab Cloud


* * *

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp GitLab

_Xem thêm về phân quyền[tại đây](<https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member>)_

## 1\. Configure GitLab

**Bước 1** : Sau khi đã chọn org/team, nhấn vào GitLab để đến màn tích hợp GitLab Cloud:

![anhfsec](/img/docs/0a091c8d37b1-lab1-1.png)

**Bước 2** : Sau khi thiết lập quyền truy cập vào Private/public repository, nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitLab Login để tạo token

![anhfsec](/img/docs/176588cd333d-lab2.png)

**Bước 3** : Điền thông tin như **Token name** và **Token Description** và tích vào **read_api**

![anhfsec](/img/docs/255803a15959-lab3.png)

![anhfsec](/img/docs/d1e2310bdcba-lab4.png)

**Bước 4** : Copy **personal access token**

![anhfsec](/img/docs/61555338aafb-lab5.png)

**Bước 5** : Điền **Personal Access Token** vừa tạo và nhấn **Test Connection**

![anhfsec](/img/docs/fc2f157e4136-lab6.png)

Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)

Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**

**Bước 6** : Nhấn vào **Integrate**

![anhfsec](/img/docs/aab31bf06da1-lab9.png)

## 2\. Xem detail

Tương tự hướng dẫn xem chi tiết [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 3\. Reconfigure GitLab Cloud

Tương tự hướng dẫn reconfigure [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 4\. Vô hiệu hoá tích hợp GitLab Cloud

Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 5\. Access Key cho CI/CD pipeline

Tương tự [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

[ Previous GitHub Personal/Enterprise Cloud ](./guide-github) [ Next GitLab Server ](./guide-gitlabserver)
