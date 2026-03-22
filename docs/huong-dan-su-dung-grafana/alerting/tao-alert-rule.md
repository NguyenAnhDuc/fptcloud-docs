---
sidebar_label: "6.1. Tạo alert rule"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tao-alert-rule"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


6.1. Tạo alert rule


* * *

Dưới đây là hướng dẫn cơ bản để tạo alert rule. Ngoài ra, bạn có thể tham khảo hướng dẫn chi tiết tại link chính thức của Grafana **[TẠI ĐÂY](<https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-grafana-managed-rule>)**

**Bước 1:** Truy cập Alerting

  * Vào Grafana

  * Menu trái → Alerting → Alert rules

![Alt text](/img/docs/f903362ff7bd-Screenshot_36.png)

  * Click New alert rule >> Nhập alert rule name

![Alt text](/img/docs/9b5a342e11cb-Screenshot_37.png)

![Alt text](/img/docs/4ebfed078636-Screenshot_38.png)

Tên này:

  * Được hiển thị trong danh sách alert rule

  * Đồng thời là giá trị của label alertname cho mọi alert instance được tạo từ rule này

**Bước 2:** Định nghĩa query và điều kiện

Xác định query để lấy dữ liệu cần theo dõi và điều kiện phải thỏa mãn trước khi alert rule được kích hoạt.

  * Chọn Data source (ví dụ: Prometheus)

  * Nhập query metric. Query này sẽ là đầu vào cho alert condition.

Ví dụ: cpu_usage_percent > 80

![Alt text](/img/docs/6a7312e75a0d-Screenshot_40.png)

Sau đó, định nghĩa Condition

**Bước 3:** Cấu hình hành vi đánh giá alert (Alert evaluation behavior)

Thiết lập tần suất đánh giá alert và cách alert chuyển trạng thái.

  * Chọn folder hoặc nhấn + New folder: Chọn một thư mục để lưu alert rule của bạn.

  * Chọn evaluation group hoặc tạo mới: Các rule trong cùng một group sẽ được đánh giá đồng thời trong cùng một khoảng thời gian.

Nếu tạo mới, chỉ định interval

  * Nhập pending period: Là khoảng thời gian alert phải vi phạm điều kiện trước khi firing

![Alt text](/img/docs/c8ff1356ddbf-Screenshot_41.png)

**Bước 4:** Thêm Annotations

Sử dụng annotations để bổ sung thông tin cho alert message.

![Alt text](/img/docs/e2a059986de7-Screenshot_42.png)

Các annotation tuỳ chọn:

  * Summary: Tóm tắt ngắn gọn sự cố

  * Description: Mô tả alert rule

  * Runbook URL: Link runbook xử lý

  * Custom annotation: Thông tin bổ sung

  * Link dashboard & panel: Liên kết tới dashboard/panel liên quan

**Ví dụ:** summary = High CPU usage

description = CPU usage is above 80% for more than 5 minutes

**Bước 5** : Labels and notifications

**Bước 6:** Lưu Alert Rule

  * Click Save ở góc phải màn hình

Alert rule được tạo thành công.

Để kiểm tra alert sau khi tạo:

  * Vào Alerting → Alert rules

  * Xem trạng thái: Normal / Pending / Firing

[ Previous 6\. Thiết lập cảnh báo (Alerting) ](./alerting) [ Next 6.2. Cấu hình contact point ](./contact-point)
