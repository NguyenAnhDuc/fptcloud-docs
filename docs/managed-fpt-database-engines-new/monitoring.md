---
sidebar_class_name: hidden
sidebar_label: "Monitoring"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=monitoring"
parent: "https://fptcloud.com/documents/managed-fpt-database-engines-new"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Monitoring


* * *

Tính năng Monitoring cung cấp khả năng quan sát theo thời gian thực về tình trạng vận hành, hiệu năng và mức sử dụng tài nguyên của các cớ ở dữ liệu trên FPT Cloud. Monitoring thu thập và trực quan hóa các chỉ số (metrics) và log quan trọng, giúp:

  * Phát hiện sớm các bất thường.
  * Đánh giá tải truy vấn.
  * Chủ động đưa ra quyết định để tối ưu hiệu năng và tính sẵn sàng.

Monitoring trong FPT Database Engine được tích hợp với hệ thống FPT Monitoring để thu thập metrics và logs, đồng thời cung cấp dashboard và cảnh báo khi cần thiết.

Hướng dẫn này mô tả cách truy cập, cấu hình và sử dụng Monitoring để theo dõi sức khỏe và hiệu suất của database clusters trên FPT Cloud Portal.

### Bước 1: Truy cập chức năng

Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn “**Database Platform** ” → “**All Database** ”. Trên trang Database list, chọn cụm cơ sở dữ liệu cần giám sát > chọn tab “**Monitor** ” để vào chức năng. Tùy theo trạng thái kích hoạt Monitoring, màn hình hiển thị như sau:

  * Chưa kích hoạt monitoring: Hệ thống hiển thị màn hình yêu cầu liên hệ FPT Support. Khách hàng cần liên hệ đội hỗ trợ để kích hoạt Monitoring.

![](/img/docs/665c70e9988b-monitor-not-available-scaled.png)

  * Đã kích hoạt monitoring: Hệ thống hiển thị danh sách các metrics và logs theo loại database. Các metric hoặc log chưa được tích hợp với FPT Monitoring sẽ có Intergrated Status = “**Disabled** ”.

![](/img/docs/ba8960c74e23-monitor-enable.png)

### Bước 2: Tích hợp/huỷ tích hợp giám sát

  * **Tích hợp giám sát (Integrate)** : Bật thu thập metrics/logs cho database cluster. Để thực hiện, trên **Workspace List** , chọn hành động “**Integrate** ” ứng với workspace cần giám sát. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. Sau khi tích hợp thành công, **Integrated Status** sẽ chuyển sang “**Enabled** ”, hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng.
  * **Huỷ tích hợp giám sát (Disintegrate)** : Tắt thu thập metrics/logs cho database cluster. Để thực hiện, trên **Workspace List** , chọn hành động “**Disintegrate** ” ứng với workspace cần huỷ giám sát. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. Sau khi huỷ tích hợp thành công, **Integrated Status** sẽ chuyển sang “**Disabled** ”, hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng.

### Bước 3: Xem thông tin workspace

Sau khi tích hợp giám sát thành công (Integrated Status = “**Enabled** ”), nhấn vào workspace name để mở trang chi tiết workspace. Tại đây, bạn có thể xem các thông tin liên quan: Monitoring dashboards, Contact points và Datasources.

![](/img/docs/4d7a2af8abdc-view-workspace-detail.png)

### Bước 4: Xem thông tin monitoring

Bạn có thể xem các dashboards hiển thị metrics theo thời gian thực và dữ liệu lịch sử trên Grafana bằng cách nhấn vào Dashboard URL để chuyển đến trang đăng nhập:

![](/img/docs/ee39a38df211-login-grafana.png)

Nhập thông tin đăng nhập là **Basic Authentication – Username** và **Basic Authentication – Password** được cung cấp trên trang chi tiết workspace và nhấn **Login** để vào trang chủ Grafana:

![](/img/docs/ff1e4760e11f-grafana-home.png)

#### Xem Metrics:

Nhấn vào “**Toggle Menu** ” > chọn “**Dashboards** ”. Màn hình Dashboards được hiển thị. Chọn Template tương ứng với loại database engine để xem các folders có sẵn.

![](/img/docs/19d10d375e54-metric-dashboard.png)

Chọn folder cần xem để hiển thị các metric:

![](/img/docs/81a755686a0a-metric-dashboard1.png)

#### Xem Logs:

Nhấn vào “**Toggle Menu** ” > chọn “**Explore** ”:

![](/img/docs/649998253122-dashboard-log1-1.png)

Chọn “Loki”:

![](/img/docs/8404b97b30e2-dashboard-log2.png)

Trong ô label filter, chọn nhãn cần xem log:

![](/img/docs/51eae0b532a9-dashboard-log-filter.png)

Trong ô value, chọn đối tượng cần xem log:

![](/img/docs/1becce67ea2d-dashboard-log-runquery.png)

Thông tin log được hiển thị như sau:

![](/img/docs/9c882ffabb5a-dashboard-log-view.png)

[ Previous Notification ](./notification) [ Next Event Logs ](./log)
