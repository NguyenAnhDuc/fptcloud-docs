---
sidebar_label: "D. Atlassian Jira"
title: "2. Incident Management"
source: "https://fptcloud.com/documents/incident-management/?doc=jira"
parent: "https://fptcloud.com/documents/incident-management"
lang: vi
converted: "2026-03-19"
---

# 2. Incident Management


D. Atlassian Jira


* * *

**C. Atlassian Jira**

Tích hợp Atlassian Jira giúp bạn duy trì trạng thái dự án Jira chính xác và tin cậy trong quá trình ứng phó sự cố. Liên kết tài khoản Jira của bạn sẽ tự động tạo **bug issue** khi một incident được khai báo. 

Cài đặt Jira

![](/img/docs/e85cc06178af-Picture12.png)

  * **Atlassian Server URL** : URL truy cập vào hệ thống Atlassian Jira 

  * **User email** : Email của tài khoản đã đăng ký với Atlassian Jira 

  * **Access Token** : Access Token của tài khoản trên

**Note** : Xem hướng dẫn tạo/lấy Access Token **[tại đây](<https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/>)**

Sau khi điền đầy đủ thông tin, click **“Integration”** để tích hợp jira vào hệ thống incident. 

Sau khi cài đặt Jira thành công, xem chi tiết thông tin Jira webhook, click **Show details**

**Kích hoạt sự kiện (trigger event)**

Click **“Run when an event fires”** để tạo 1 trigger

![](/img/docs/0aab59a93216-Picture15.png)

  * **Jira Project** : Chọn dự án jira mong muốn khởi tạo issue 

  * **Issue Type** : Loại issue khi khởi tạo 

  * **Incident active stattus** : Trạng thái khởi tạo của issue khi incident có trạng thái active 

  * **Incident resolved stattus** : Trạng thái khởi tạo của issue khi incident có trạng thái resolved 

**Run this action when:**

  * **Incident is declared** : incident được khai báo

Sau khi điền đầy đủ thông tin, click **“Add event action”** để tạo trigger 

Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click **“Run when an event fires”** để tạo 1 trigger mới. 

Liên kết tài khoản Jira của bạn sẽ **tự động** tạo **bug issue** khi một incident được khai báo kèm theo link incident tương ứng. 

Ví dụ như sau: 

![Alt text](/img/docs/3905656cebf2-Screenshot_11-1.png)

**Xóa trigger**

Click icon **Trash** để xóa trigger

![](/img/docs/d289c674c587-Picture17.png)

[ Previous C. Outgoing webhook ](./outgoing-webhook) [ Next E. Slack ](./slack)
