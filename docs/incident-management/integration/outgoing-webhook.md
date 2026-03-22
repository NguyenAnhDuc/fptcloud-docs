---
sidebar_label: "Outgoing webhook"
title: "2. Incident Management"
source: "https://fptcloud.com/documents/incident-management/?doc=outgoing-webhook"
parent: "https://fptcloud.com/documents/incident-management"
lang: vi
converted: "2026-03-19"
---

# 2. Incident Management


C. Outgoing webhook


* * *

**B. Outgoing webhook**

**Outgoing webhook** cho phép bạn nhận thông báo và cập nhật theo thời gian thực khi bạn cần. Nó có thể kích hoạt sự kiện (trigger events) khi một sự cố được tạo (created), cập nhật (updated), đóng (closed) và sự cố sẽ được thông báo tới URL được khai báo. 

Sau khi cài đặt Outgoing webhook thành công, xem chi tiết thông tin Outgoing webhook, click **Show details**

![](/img/docs/498dd7c99785-Screenshot_4.png)

**Kích hoạt sự kiện (trigger event)**

![](/img/docs/b599aa7e2b35-Picture8.png)

Click **“Run when an event fires”** để tạo 1 trigger

  * **Name** : tên trigger 

  * **URL** : URL để POST event tới 

  * **Run this action when:**

    * **Incident is declared** : incident được khai báo 

    * **Incident changes** : thay đổi trạng thái incident 

Sau khi điền đầy đủ thông tin, click **“Add event action”** để tạo trigger

Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click **“Run when an event fires”** để tạo 1 trigger mới. 

**Xóa trigger**

Click icon Trash để xóa trigger

![](/img/docs/2bd7c6328bab-Picture10.png)

[ Previous B. Grafana webhook ](./grafana-webhook) [ Next D. Atlassian Jira ](./jira)
