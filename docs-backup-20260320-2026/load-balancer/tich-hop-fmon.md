---
sidebar_class_name: hidden
sidebar_label: "Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)"
title: "Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)"
source: "https://fptcloud.com/documents/load-balancer/?doc=tich-hop-fmon"
parent: "https://fptcloud.com/documents/load-balancer"
lang: vi
converted: "2026-03-19"
---

# Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)


* * *

Là tính năng được tích hợp với dịch vụ FPT Monitoring (FMON) giúp người dùng có thể đẩy Access logs hoặc Metric của Load Balancer về các Workspace Monitoring nhằm xem và phân tích log/metric dễ dàng qua giao diện trực quan của Grafana đặc biệt khi cần troubleshoot các sự cố liên quan Để tích hợp Access logs/Metric Load Balancer với FMON, VPC khách hàng cần có sẵn workspace monitor của FMON với quota phù hợp với nhu cầu lưu trữ. Sau đó thực hiện các bước như sau:

**Bước 1** : Chọn xem chi tiết Load Balancer cần tích hợp > Integration Tại đây sẽ hiển thị danh sách các Monitoring workspace của VPC có thể sử dụng để tích hợp Metric/Logs LB ![file](/img/docs/67c451b9be90-image-1767671757981.png)

**Bước 2** : Bấm vào nút Integrate để tích hợp từ LB sang FMON > xuất hiện popup Confirmation > Confirm.

![file](/img/docs/dde39f33657e-image-1767671804027.png)

**Bước 3** : Sau khi tích hợp với FMON > màn hình sẽ chuyển trạng thái từ Disable sang Integrating, người dùng chờ 1-2 phút để tích hợp > Integrate status có trạng thái Enable

![file](/img/docs/b2aa25cbc722-image-1767671862366.png)

**Bước 4** : Người dùng bấm vào đường link **Dashboard URL** > xuất hiện trang Grafana để người dùng đăng nhập:

**4.1** Người dùng lấy thông tin User từ **Basic Authentication** – Username và Password từ Basic Authentication – Password sau đó bấm Log In. -> Xuất hiện trang chủ Grafana

**Đối với Access logs LB**

**4.2** Người dùng bấm vào thanh **Toggle Menu** cạnh Home > chọn **Explore** > chọn **Loki**

**4.3** Xuất hiện Label filter: chọn **Label** > chọn **Load Balancer** > bấm **Run Query** -> Màn hình sẽ xuất hiện logs của Load Balancer

**Đối với Metric LB**

Hệ thống đã tạo sẵn dashboard template đễ theo dõi metric LB trực quan nhất. Người dùng có thể sử dụng dashboard này hoặc tự build dashboard mới tùy theo nhu cầu sử dụng.

**4.2** Người dùng chọn **Home** > **Dashboard** > Chọn **LB_Dashboard**

**4.3** Chọn LB cần xem và **Run query** để theo dõi Dashboard

[ Previous Access logs cho Load balancer ](./access-logs) [ Next Quản lý Listener ](./quan-ly-listener)
