---
sidebar_class_name: hidden
sidebar_label: "2. FPT Message Bus for RabbitMQ"
title: "2. FPT Message Bus for RabbitMQ"
source: "https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq/?doc=tao-queues"
parent: "https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Message Bus for RabbitMQ


Tạo queues


* * *

**Bước 1** : Ở menu **Application** > **Queues** > **Create**

![](/img/docs/31f765f3ad2d-que_create.png)

**Bước 2** : Nhập các thông tin cần thiết: 

  * **Name (required)** : tên queue.
  * **Max length** : Tổng số messages có thể chứa trong một queue
  * **Message TTL** : Thời gian messages tồn tại từ khi được publish. Nếu vượt quá thời gian này, message sẽ bị mất.
  * **Overflow** : Có thể chọn các chế độ drop_head, reject_publish, reject_publish_DLX
  * **Maximum priority** : Nhập từ 0 -10.

![](/img/docs/1df0d53b6bd6-que_create_1.png)

**Lưu ý** : Tên queue được đặt theo quy tắc: q.QUEUE_NAME.

  * Nếu chọn đồng thời **Is Quorum** và **single active consumer** thì không dùng được Receive, nên chọn 1 thuộc tính mới dùng được.

**Bước 3** : Chọn **OK** để tiến hành tạo queue.

[ Previous Quản lý Queues ](./quan-ly-queues) [ Next Xem queues ](./xem-queues)
