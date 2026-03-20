---
sidebar_class_name: hidden
sidebar_label: "2. DdoS Protection"
title: "2. DdoS Protection"
source: "https://fptcloud.com/documents/ddos-protection/?doc=monitor-ip"
parent: "https://fptcloud.com/documents/ddos-protection"
lang: vi
converted: "2026-03-19"
---

# 2. DdoS Protection


Monitor các IP đang được bảo vệ


* * *

Người dùng có thể monitor hệ thống và sự bảo vệ thông qua dashboard do FPT Cloud Portal cung cấp.

**Bước 1** : Người dùng vào màn hình danh sách IP đang được bảo vệ và chọn IP cần kiểm tra

![file](/img/docs/2bd000bdb645-image-1750405781163.png)

**Bước 2a** : Với IP đang được bảo vệ và không có bị tấn công trong tháng, hệ thống sẽ hiện thị màn hình thông báo IP đang được bảo vệ an toàn và chưa ghi nhận sự tấn công.

![file](/img/docs/92b66506bb4e-image-1750405795153.png)

**Bước 2b** : Với trường hợp có ghi nhận đợt tấn công. Hệ thống sẽ thông tin các đợt tấn công gồm:

Thông tin nhanh sự bảo vệ trong tháng:

  * Total traffic: Tổng traffic vào IP trong tháng.

  * Block traffic: Tổng traffic tấn công bị phát hiện và ngăn chặn

  * Block packet: Tổng packet tấn công bị phát hiện và ngăn chặn

![file](/img/docs/ee4429cf6d95-image-1750405809600.png)

Thông tin nguồn tấn công: Hệ thống liệt kê các nguồn tấn công chủ yếu

![file](/img/docs/04f543c3bee1-image-1750405829915.png)

Thông tin các protocol bị tấn công: Hệ thống hiện tại đang hiển thị protocol theo ID, tham khảo thêm tại [**Link**](<https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml>)

  * 6: TCP

  * 17: UDP

![file](/img/docs/5868a949c2f1-image-1750405849332.png)

Thông tin độ dài các packet (Đơn vị: byte)

![file](/img/docs/aaacb4ed5663-image-1750406210587.png)

Thông tin port của nguồn tấn công

![file](/img/docs/3e4ba6d1dbb2-image-1750406239763.png)

Thông tin port bị tấn công của người dùng

![file](/img/docs/18e0987a5353-image-1750406261280.png)

Biểu đồ phân tích traffic tấn công bị chặn trong 30 ngày

![file](/img/docs/4b9b1d1add12-image-1750406346658.png)

Thông tin chi tiết các đợt tấn công đã chặn được

![file](/img/docs/25b57adb130f-image-1750406362941.png)

[ Previous Khởi tạo DDoS Protection ](./create-ddos)
