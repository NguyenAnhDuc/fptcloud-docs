---
sidebar_label: "2. Incident Management"
title: "2. Incident Management"
source: "https://fptcloud.com/documents/incident-management/?doc=microsoft-teams"
parent: "https://fptcloud.com/documents/incident-management"
lang: vi
converted: "2026-03-19"
---

# 2. Incident Management


G. Microsoft Teams


* * *

Liên kết công cụ Microsoft Teams với incident giúp người dùng dễ dàng và nhanh chóng phát hiện sự cố. 

Đầu tiên, bạn cần có URL Webhook. Người dùng có thể theo dõi hướng dẫn cách lấy/tạo Webhook **[TẠI ĐÂY](<https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet>)**

Sau khi có URL, người dùng thực hiện các bước sau để liên kết tích hợp Microsoft Team với incident management. 

**Bước 1:** Trên menu của Incident Management, click Integration => Vào phần **Microsoft Teams** , click **Integration**

**Bước 2:** Click **Show details** > Click “**Run when an event fires** ” 

**Bước 3:** Điền**Name, URL**

![Alt text](/img/docs/4bed69c6b54f-Screenshot_9-1.png)

Trong đó: 

  * **Name** : Tên người dùng tự đặt 

  * **URL** : là URL người dùng đã lấy/tạo bên trên 

**Bước 4:** Click **Add event action** để hoàn tất. 

Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click “**Run when an event fires** ” để tạo 1 trigger mới. 

Sau khi liên kết, hệ thống sẽ tự động gửi tin nhắn qua công cụ Microsoft Teams mỗi khi có sự cố được khai báo kèm theo link của incident tương ứng. 

Ví dụ như sau:

![Alt text](/img/docs/0b2b9825a105-Screenshot_10-1.png)

[ Previous F. Telegram ](./telegram) [ Next Cấu hình Settings ](./cau-hinh-settings)
