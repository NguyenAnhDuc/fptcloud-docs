---
sidebar_class_name: hidden
sidebar_label: "2. Hướng dẫn sử dụng Grafana"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=huong-dan-tich-hop-k8s"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


4.1. Hướng dẫn tích hợp


* * *

**Bước 1:** Truy cập chức năng Monitoring

  * Trên Console Portal, truy cập chi tiết một Cluster

  * Chọn tab Monitoring

Hệ thống hiển thị màn hình tích hợp Monitoring.

![Alt text](/img/docs/99aa1fa8a042-Screenshot_20.png)

**Bước 2:** Tích hợp/huỷ tích hợp

**1\. Tích hợp (Integrate)** : Bật thu thập metrics/logs cho cluster. 

  * Tại màn hình Monitoring, chọn hành động **“Integrate”** ứng với workspace cần tích hợp

<ảnh minh họa đang cập nhật>

  * Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. 

<ảnh minh họa đang cập nhật>

  * Sau khi tích hợp thành công, Integrated Status sẽ chuyển sang **“Enabled”** , hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng.

<ảnh minh họa đang cập nhật>

**2\. Huỷ tích hợp (Disintegrate)** : Tắt thu thập metrics/logs cho database cluster. 

  * Tại màn hình Monitoring, chọn hành động **“Disintegrate”** ứng với workspace cần huỷ giám sát. 

  * Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.

  * Sau khi huỷ tích hợp thành công, Integrated Status sẽ chuyển sang **“Disabled”** , hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng.

<ảnh minh họa đang cập nhật>

**Bước 3:** Truy cập dashboard Grafana và xem thông tin monitoring

  * Sau khi tích hợp giám sát thành công (Integrated Status = “Enabled”), click vào Dashboard URL

<ảnh minh họa đang cập nhật>

  * Sau đó tích hợp các dashboard template tương ứng, tham khảo hướng dẫn tại mục **3.1. Tích hợp Dashboard Template**

  * Mở dashboard đã tích hợp và xem thông tin Monitoring

_Ảnh minh họa_

![Alt text](/img/docs/31d7364e9895-Screenshot_21.png)

[ Previous 4\. Hướng dẫn tích hợp Monitoring Kubernetes ](./tich-hop-monitoring-kubernetes) [ Next 4.2. Xem thông tin metric ](./xem-thong-tin-metric)
