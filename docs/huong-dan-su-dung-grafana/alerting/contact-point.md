---
sidebar_label: "Contact point"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=contact-point"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


6.2. Cấu hình contact point


* * *

Có nhiều contact point khác nhau như Slack, Discord, Webhook, Email, Teams, Telegram ... và mỗi contact point sẽ có cách cấu hình khác nhau.

Dưới đây là hướng dẫn cụ thể cho cấu hình Telegram để gửi thông báo khi kích hoạt alert.

Các cách cấu hình cho các contact point khác, bạn tham khảo hướng dẫn chi tiết tại trang chủ Grafana **[TẠI ĐÂY](<https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points>)**

Để tích hợp Grafana với Telegram, bạn cần có:

  * Telegram bot API token

  * Chat ID (ID của cuộc trò chuyện Telegram nơi bạn muốn nhận thông báo alert)

Để hoàn tất việc tích hợp, bạn cần sử dụng phiên bản Telegram trên trình duyệt (web).

**1\. Cách thiết lập Telegram bot**

Thực hiện các bước sau để thiết lập bot:

  * Mở ứng dụng Telegram trên thiết bị của bạn.

  * Tìm bot có tên BotFather.

  * Gõ hoặc chọn lệnh /newbot.

  * Chọn tên cho bot (tên phải kết thúc bằng bot hoặc _bot, ví dụ: my_bot).

  * Sao chép API token.

**2\. Cách lấy Chat ID**

Thêm bot vào một group chat theo các bước dưới đây. Sau khi bot được thêm vào group, bạn có thể định tuyến thông báo alert đến group đó.

  * Trong Telegram, mở một group có sẵn hoặc tạo group mới.

  * Tìm và thêm bot vào group.

  * Sao chép chat ID từ URL trên thanh địa chỉ của trình duyệt. 

URL sẽ có dạng: <https://web.telegram.org/a/#-4266674385>

Chat ID là dãy số nằm sau ký tự #, ví dụ: -4266674385.

**3\. Thực hiện cấu hình**

Để tạo tích hợp Telegram trong Grafana Alerting, thực hiện các bước sau:

**Bước 1:** Truy cập Alerts → Alerting → Contact points.

![Alt text](/img/docs/308c5dfa34ca-Screenshot_43.png)

**Bước 2:** Nhấn + Add contact point.

![Alt text](/img/docs/c0aae8f04dc3-Screenshot_44.png)

**Bước 3:** Nhập tên contact point.

**Bước 4:** Trong danh sách Integration, chọn Telegram.

  * Tại trường BOT API Token, dán bot API token.

  * Tại trường Chat ID, dán chat ID.

  * Nhấn Test để kiểm tra tích hợp hoạt động đúng.

**Bước 5:** Nhấn Save contact point.

Lúc này, Contact point Telegram đã sẵn sàng để nhận thông báo alert.

![Alt text](/img/docs/d7a0f2580212-Screenshot_45.png)

**Bước 6:** Để gán contact point này cho alert, thực hiện các bước sau:

  * Trong Grafana, truy cập Alerting → Alert rules.

  * Chỉnh sửa alert rule hiện có hoặc tạo alert rule mới.

  * Cuộn xuống phần Configure labels and notifications.

  * Tại mục Notifications, chọn Select contact point.

  * Chọn contact point Telegram đã tạo trước đó từ danh sách.

  * Nhấn Save rule and exit.

[ Previous 6.1. Tạo alert rule ](./tao-alert-rule) [ Next 7\. Hướng dẫn kiểm tra trạng thái usage (timeseries, log, trace) trên trang console portal ](./usage)
