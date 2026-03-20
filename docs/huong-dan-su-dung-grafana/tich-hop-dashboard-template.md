---
sidebar_class_name: hidden
sidebar_label: "2. Hướng dẫn sử dụng Grafana"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tich-hop-dashboard-template"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


3.1. Tích hợp Dashboard Template


* * *

Người dùng cần tích hợp các Dashboard Template phù hợp với từng dịch vụ để theo dõi thông tin monitoring. 

Các bước thực hiện: 

**Bước 1:** Open menu ở góc trái màn hình ![Alt text](/img/docs/a5fead322aff-Picture3.png)

**Bước 2:** Chọn **App** >> **Fmon – Templates** >> chọn tab **Dashboard Template**

![Alt text](/img/docs/b3e58395bd6c-Screenshot_2.png)

Màn hình sẽ hiển thị danh sách toàn bộ các dashboard template.

_Giao diện hiển thị danh sách Template_

![Alt text](/img/docs/0152f81369b7-Screenshot_3.png)

**Bước 3:** Chọn **Topic** tương ứng (ví dụ: Kubernetes) 

Hệ thống hiển thị danh sách các Dashboard phù hợp với topic đã chọn.

![Alt text](/img/docs/9a1e9a31c444-Screenshot_4.png)

**Bước 4:** Click **Integrate** để tích hợp Dashboard

![Alt text](/img/docs/f0ee84d18976-Screenshot_18.png)

  * Tích hợp thành công, dashboard chuyển trạng thái thành **Integrated**

![Alt text](/img/docs/0864e4dfbaa8-Screenshot_19.png)

  * Nếu quá trình tích hợp xảy ra lỗi, vui lòng liên hệ đội ngũ hỗ trợ. 

**Lưu ý:**

Số lượng Dashboard được tích hợp phụ thuộc vào gói dịch vụ đang sử dụng. 

Ví dụ: Workspace bạn đang sử dụng gói V3_P1 cho phép tích hợp tối đa 02 Dashboard. Khi vượt quá giới hạn, hệ thống sẽ hiển thị thông báo hết quota. 

**Bước 5:** Sau khi tích hợp thành công, refresh lại Grafana → mở menu → chọn **Dashboard**

Hệ thống hiển thị danh sách các Dashboard đã được tích hợp. Người dùng có thể mở và theo dõi các thông tin monitoring tương ứng. 

![Alt text](/img/docs/624450fbdefd-Screenshot_6.png)

[ Previous 3\. Tích hợp Dashboard Template và Alert rule template ](./tich-hop-template) [ Next 3.2. Tích hợp Alert rule template ](./tich-hop-alert-rule-template)
