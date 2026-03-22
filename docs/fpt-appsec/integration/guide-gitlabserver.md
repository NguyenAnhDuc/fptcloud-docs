---
sidebar_label: "1. Configure GitLab Server"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-gitlabserver"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


GitLab Server


* * *

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp GitLab Server

_Xem thêm về phân quyền[tại đây](<https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member>)_

## 1\. Configure GitLab Server

**Bước 1** : Sau khi đã chọn org/team, nhấn vào GitLab Server để đến màn tích hợp:

![anhfsec](/img/docs/34ab92279a40-labs1.png)

**Bước 2** : Nhập URL của phiên bản GitLab Enterprise. Nút **Create a personal access token** sẽ được enable sau khi nhập URL.

![anhfsec](/img/docs/017fd4b0decc-labs2.png)

**Bước 3** : Sau khi thiết lập quyền truy cập vào Private/public repository, nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitLab Login để tạo token

![anhfsec](/img/docs/9887d816662a-labs3.png)

**Bước 4** : Điền thông tin như **Token name** và **Token Description** và tích vào **read_api**

![anhfsec](/img/docs/255803a15959-lab3.png)

![anhfsec](/img/docs/d1e2310bdcba-lab4.png)

**Bước 5** : Copy **personal access token**

![anhfsec](/img/docs/9887d816662a-labs3.png)

**Bước 6** : Điền **Personal Access Token** vừa tạo và nhấn **Test Connection**

![anhfsec](/img/docs/281c798cb2f6-labs4.png)

Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)

Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**

**Bước 7** : Nhấn vào **Integrate**

![anhfsec](/img/docs/cd5671348686-labs6.png)

## 2\. Xem detail

Tương tự hướng dẫn xem chi tiết [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 3\. Reconfigure GitLab Cloud

Tương tự hướng dẫn reconfigure [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 4\. Vô hiệu hoá tích hợp GitLab Cloud

Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

## 5\. Access Key cho CI/CD pipeline

Tương tự [tích hợp GitHub](<https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github>)

[ Previous GitLab Cloud ](./guide-gitlab) [ Next FPT Container Registry ](./guide-fcr)
