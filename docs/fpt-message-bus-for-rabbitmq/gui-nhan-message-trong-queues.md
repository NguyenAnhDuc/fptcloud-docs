---
sidebar_class_name: hidden
sidebar_label: "Gui nhan message trong queues"
title: "2. FPT Message Bus for RabbitMQ"
source: "https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq/?doc=gui-nhan-message-trong-queues"
parent: "https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Message Bus for RabbitMQ


Gửi - nhận messages trong queues


* * *

**Bước 1** : Ở menu **Application** > **Queues** > Chọn một queue bạn cần thao tác > **Preview**

![](/img/docs/73852024d9a3-View-1-1.png)

**Bước** **2** : Bạn nhập message cần publish vào ô **Payload** trong tab **Send**

![](/img/docs/349ef695a98b-View-2-2.png)

Bạn có thể chọn 1 trong 2 kiểu dữ liệu text là **String** và **Base64**

  * **String** : bao gồm 1 chuỗi các kí tự (không nhập số)
  * **Base64** : mã hóa chuỗi ký tự bằng cách dùng thay thế các ký tự trong bảng mã ASCII 8 bit thông dụng thành bảng mã 6 bit.

**Bước 3** : Chọn nút **Send** để gửi 

Lúc này bạn đã publish messages thành công vào hàng đợi. Để có thể nhận messages, bạn thực hiện như sau: 

**Bước 1** : Bạn vào tab **Receive** > Sau đó chọn nút **Receive**. 

![](/img/docs/cf01752c0c7f-Recei-1.png)

[ Previous Xem queues ](./xem-queues) [ Next Xóa queues ](./xoa-queues)
