---
sidebar_label: "Slack"
title: "2. Incident Management"
source: "https://fptcloud.com/documents/incident-management/?doc=slack"
parent: "https://fptcloud.com/documents/incident-management"
lang: vi
converted: "2026-03-19"
---

# 2. Incident Management


E. Slack


* * *

Tích hợp Slack giúp bạn nhận thông báo một cách **tự động** ngay khi có sự cố được khai báo. 

Để có thể tích hợp Slack với Incident, bạn cần có **Webhook URL**. 

Note: Theo dõi cách lấy Webhook URL tại đây: **[LINK](<https://medium.com/fortum-tech/step-by-step-guide-to-create-a-slack-app-for-incoming-webhooks-3d9b799e8ae1>)**

Sau khi đã có Webhook URL, bạn quay trở lại trang danh sách Incident Management và làm theo hướng dẫn sau đây: 

**Bước 1:** Trên menu của Incident Management, click **Integration** => Vào phần **Slack** , click **Integration**

![Alt text](/img/docs/00d7a0b442ea-Screenshot_1-1.png)

**Bước 2:** Click **Show details** > Click “**Run when an event fires** ” 

**Bước 3** : Người dùng điền **Name, URL**

![Alt text](/img/docs/0e317a420b09-Screenshot_2-1.png)

Trong đó: 

  * **Name** : tên người dùng tự đặt 

  * **URL** : là Webhook URL mà bạn đã tạo ở bên trên.

**Bước 4:** Click **Add event action** để hoàn tất. 

Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click “**Run when an event fires** ” để tạo 1 trigger mới. 

Sau khi thực hiện xong, khi người dùng khai báo một incident mới, hệ thống sẽ tự động gửi thông báo vào kênh chanel trên slack mà bạn đã liên kết kèm theo link incident tương ứng. 

Ví dụ như sau: 

![Alt text](/img/docs/b266990c719f-Screenshot_3-1.png)

**Xóa trigger**

Người dùng có thể xóa trigger khi không có nhu cầu sử dụng. 

**Bước 1:** Click **Integration** > **Show details**

**Bước 2:** Click vào icon **Trash** của trigger bạn muốn xóa

![Alt text](/img/docs/8286678a5481-Screenshot_4-1.png)

**Bước 3:** Xuất hiện hộp thoại xác nhận, chọn **Yes** để xóa.

[ Previous D. Atlassian Jira ](./jira) [ Next F. Telegram ](./telegram)
