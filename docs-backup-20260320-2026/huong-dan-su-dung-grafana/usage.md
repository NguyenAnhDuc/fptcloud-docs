---
sidebar_class_name: hidden
sidebar_label: "2. Hướng dẫn sử dụng Grafana"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=usage"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


7\. Hướng dẫn kiểm tra trạng thái usage (timeseries, log, trace) trên trang console portal


* * *

Để kiểm tra lượng timeseries/logs/trace đã sử dụng, bạn thực hiện các bước sau:

**Bước 1:** Truy cập vào console portal, trên menu chọn dịch vụ Monitoring

**Bước 2:** Vào trang chi tiết workspace đó, chọn tab Quota and Package

**Bước 3:** Kiểm tra thông tin usage time series/log/trace

_Giao diện hiển thị như sau_

![Alt text](/img/docs/3d3c58d2a219-Screenshot_46.png)

  * **Trường hợp 1:** Workspace đã sử dụng hết quota cho phép của gói hiện tại. Khi đó, metric/logs sẽ không thể tiếp tục được đẩy về Grafana Dashboard.

Bạn cần nâng cấp gói dịch vụ để tiếp tục sử dụng Monitoring.

  * **Trường hợp 2:** Workspace chưa sử dụng hết quota nhưng metric/logs vẫn không hiển thị trên dashboard.

Vui lòng liên hệ đội ngũ support của chúng tôi để được hỗ trợ kiểm tra và xử lý.

[ Previous 6.2. Cấu hình contact point ](./contact-point) [ Next 8\. Các câu hỏi thường gặp (FAQs) ](./cau-hoi-thuong-gap)
