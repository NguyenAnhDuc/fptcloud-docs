---
sidebar_label: "2. Incident Management"
title: "2. Incident Management"
source: "https://fptcloud.com/documents/incident-management/?doc=telegram"
parent: "https://fptcloud.com/documents/incident-management"
lang: vi
converted: "2026-03-19"
---

# 2. Incident Management


F. Telegram


* * *

Tích hợp Telegram giúp bạn dễ dàng nhận tin nhắn **tự động** trên ứng dụng Telegram khi có bất cứ sự cố nào được khai báo. 

**Bước 1:** Trên menu của Incident Management, click **Integration** =>Vào phần **Telegram** , click **Integration**

![Alt text](/img/docs/3ee11c8fd489-Screenshot_5-1.png)

**Bước 2:** Click **Show details** > Click “**Run when an event fires** ” 

**Bước 3:** Điền **Name** , **Chat ID** , **Bot API Token**

![Alt text](/img/docs/d525e397474d-Screenshot_6-1.png)

Trong đó: 

  * **Name** : là tên người dùng tự đặt 

  * **Chat ID** : là ID của group telegram sẽ nhận thông báo khi có incident được khai báo 

  * **Bot API Token** : người dùng làm theo hướng dẫn sau để lấy token: 

    * Trong telegram, người dùng search từ khóa “BotFather” > Nhấn Start > Click /newbot để tạo bot mới 

    * Sau đó hệ thống sẽ sinh ra token, người dùng sẽ dùng token này để paste vào trong trường Bot API Token. 

**Bước 4:** Click **Add event action** để hoàn tất. 

Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click “**Run when an event fires** ” để tạo 1 trigger mới. 

Sau khi liên kết, hệ thống sẽ tự động gửi tin nhắn qua công cụ Telegram mỗi khi có sự cố được khai báo kèm theo link tương ứng. 

Ví dụ như sau: 

![Alt text](/img/docs/163bac3e501b-Screenshot_7-1.png)

**Xóa trigger**

Người dùng có thể xóa trigger khi không có nhu cầu sử dụng. 

**Bước 1:** Click **Integration** > **Show details**

**Bước 2:** Click vào icon **Trash** của trigger bạn muốn xóa 

![Alt text](/img/docs/c75df4c5dfb5-Screenshot_8-1.png)

**Bước 3:** Xuất hiện hộp thoại xác nhận, chọn **Yes** để xóa.

[ Previous E. Slack ](./slack) [ Next G. Microsoft Teams ](./microsoft-teams)
