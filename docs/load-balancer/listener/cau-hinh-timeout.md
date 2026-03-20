---
sidebar_label: "Cấu hình Timeout"
title: "Cấu hình Timeout"
source: "https://fptcloud.com/documents/load-balancer/?doc=cau-hinh-timeout"
parent: "https://fptcloud.com/documents/load-balancer"
lang: vi
converted: "2026-03-19"
---

# Cấu hình Timeout


* * *

Tính năng cấu hình **Timeout** cho **Load Balancer** cho phép bạn định rõ thời gian tối đa mà một kết nối hoặc yêu cầu có thể tồn tại trước khi bị đóng. Điều này quan trọng để quản lý tài nguyên và đảm bảo hiệu suất ổn định của hệ thống.

**Cách hoạt động**

  * Khi một kết nối hoặc yêu cầu được gửi đến **Load Balancer** , hệ thống bắt đầu tính toán thời gian cho phép kết nối đó tồn tại.
  * Nếu kết nối không hoàn thành hoặc yêu cầu không được phản hồi trong khoảng thời gian này, nó sẽ bị đóng.
  * Việc cấu hình **Timeout** giúp tránh tình trạng kết nối hoặc yêu cầu bị treo và tiêu tốn tài nguyên.

Cấu hình **Timeout** được cấu hình cùng khi tạo **Listener** , người dùng tham khảo **[tại đây.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener)**

[ Previous Khởi tạo Listener ](./khoi-tao-listener) [ Next Cấu hình L7 policy cho Listener ](./chinh-sua-listener)
