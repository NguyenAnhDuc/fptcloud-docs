---
sidebar_class_name: hidden
sidebar_label: "Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-cau-hinh-notifications-de-nhan-thong-bao"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi


* * *

**_1\. Telegram_**

Để thực hiện cấu hình thông báo tới telegram thực hiện các bước sau: Bước 1: Lấy API token sử dụng @Botfather. Sử dụng ứng dụng Telegram, tìm kiếm @BotFather

![](/img/docs/ce5f72d1edbd-Picture93-1.png)

Gõ **/help** để xem các options được sử dụng

![](/img/docs/1e58a9d99814-Picture94-1.png)

Gõ **/newbot** để tạo bot mới:

![](/img/docs/ca767ba662b0-Picture95-1.png)

Nhập tên bot _Lưu ý tên bot phải kết thúc bằng “bot”_

![](/img/docs/bd26e3a24af8-Picture96-1.png)

Token access được sử dụng để cấu hình token Telegram trên Portal. Tương tự mục 5.12.2 (mục a)

**Bước 2** : Cấu hình Token trên FPT Cloud để gửi thông báo tới telegram theo mục 5.12.2.1

**Bước 3** : Tạo một channel để nhận thông báo 

![](/img/docs/2ce6eac44eb2-Picture97-1.png)

Chọn private channel:

![](/img/docs/38531c73f897-Picture98-1.png)

**Bước 4** : Thêm account bot vừa tạo tới channel

![](/img/docs/7d3819fc4d09-Picture99-1.png)

**Bước 5** : Sử dụng **ChatID** trong subscription để tích hợp telegram: 

![](/img/docs/bcafb00aff42-Picture100-1.png)

**Bước 6** : Cấu hình Notifications telegram trong applications:

![](/img/docs/1d6a048a3ad2-Picture101-1.png)

**Bước 7** : Thực hiện Sync Applications và xem message gửi tới telegram:

![](/img/docs/cb19eee7feb2-Picture102-1.png)

**_2\. Slack_**

**Bước 1** : Tạo workspace slack:

![](/img/docs/5d03b1369a89-Picture103-1.png)

**Bước 2** : Tạo channel:

![](/img/docs/6d217f241aaa-Picture104-1.png)

**Bước 3** : Tạo mới app trong slack để sử dụng theo [link](<https://api.slack.com/apps>). 

![](/img/docs/c0c068441393-Picture105-1.png)

Tạo App **From scratch**(click)

![](/img/docs/fa3dbfc28ec5-Picture106-1.png)

**Bước 4** : Thực hiện cấu hình **OAuth & Permissions**:

![](/img/docs/92d32a17cc11-Picture107-1.png)

Thực hiện cấu hình OAuth Scope để cho phép ArgoCD Notifictions gửi thông báo tới Channel:

![](/img/docs/5ea1dd4e5879-Picture108-1.png)

**Bước 5** : Thực hiện cấu hình **OAuth Tokens for Your Workspace** :

![](/img/docs/d8859cb002ea-Picture109-1.png) ![](/img/docs/3d87cff7429a-Picture110-1.png)

Slack sẽ tạo một **Bot User OAuth Token**. 

![](/img/docs/32b4632654ff-Picture111-1.png)

**Bước 6** : Cấu hình Slack token trên Portal FPT Cloud để gửi thông báo từ ArgoCD Notifications tới Slack sử dụng **Bot User OAuth Token**. Thực hiện tương tự mục 5.12.2.2

**Bước 7** : Thêm Apps tới channel:

![](/img/docs/15069836c3cc-Picture112-1.png)

**Bước 8** : Thực hiện cấu hình ArgoCD Applications để gửi thông báo tới slack:

Sau khi applications được tạo, thực hiện Edit app thêm annotations, thông báo sẽ được gửi tới channel:

![](/img/docs/8b39278ccae0-Picture113-1.png) ![](/img/docs/1a2667772862-Picture114-1.png)

Thực hiện Sync Applications để test notifiations:

![](/img/docs/6b2804beb21e-Picture115-1.png)

Channel của slack sẽ nhận được thông báo lên quan đến trạng thái của Applications:

![](/img/docs/e420e94818dd-Picture116-1.png)

**_3\. Email_**

**Bước 1** : Thực hiện cấu hình thông tin email tương tự mục 5.12.2.3 trên Portal

**Bước 2** : Thực hiện cấu hình ArgoCD Applications để gửi thông báo đến mail bằng cách thêm annotations như sau:

![](/img/docs/a00e335a160d-Picture117-1.png)

**Bước 3** : Thực hiện sync ứng dụng thông báo sẽ được gửi đến email của người nhận đã được config:

![](/img/docs/deb1583a4cc7-Picture118-1.png)

[ Previous Hướng dẫn sử dụng applicationset để deploy ](./huong-dan-su-dung-applicationset-de-deploy) [ Next Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD ](./huong-dan-tich-hop-oidc-de-quan-ly-account)
