---
sidebar_label: "Huong dan tich hop database"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=huong-dan-tich-hop-database"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


5.1. Hướng dẫn tích hợp


* * *

**Bước 1: Truy cập chức năng**

  * Sau khi active dịch vụ Monitoring và khởi tạo workspace thành công, trên Console portal, bạn vào detail một cụm Database và chọn Monitoring

  * Hệ thống hiển thị danh sách các metrics và logs theo loại database. Các metric hoặc log chưa được tích hợp với FPT Monitoring sẽ có Status = “Disabled”.

![Alt text](/img/docs/828878edf694-Screenshot_33.png)

**Bước 2: Tích hợp/huỷ tích hợp**

  1. **Tích hợp (Integrate)** : Bật thu thập metrics/logs cho cluster. 

  * Tại màn hình Monitoring, chọn hành động “Integrate” ứng với workspace cần tích hợp

<ảnh đang được update>

  * Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. 

<ảnh đang được update>

  * Sau khi tích hợp thành công, Integrated Status sẽ chuyển sang **“Enabled”** , hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng.

<ảnh đang được update>

  2. **Huỷ tích hợp (Disintegrate)** : Tắt thu thập metrics/logs cho database cluster. 

  * Tại màn hình Monitoring, chọn hành động **“Disintegrate”** ứng với workspace cần huỷ giám sát. 

  * Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.

  * Sau khi huỷ tích hợp thành công, Integrated Status sẽ chuyển sang **“Disabled”** , hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng.

<ảnh đang được update>

**Bước 3: Truy cập dashboard Grafana và xem thông tin monitoring**

  * Sau khi tích hợp giám sát thành công (Integrated Status = “Enabled”), click vào Dashboard URL để đi tới trang Grafana

  * Sau đó tích hợp các dashboard template tương ứng, tham khảo hướng dẫn tại mục [**3.1. Tích hợp Dashboard Template**](<https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tich-hop-dashboard-template>)

  * Mở dashboard đã tích hợp và xem thông tin monitor

![Alt text](/img/docs/e8f6a87c2ad9-Screenshot_34.png)

[ Previous 5\. Hướng dẫn tích hợp Monitoring Database ](./tich-hop-monitoring-database) [ Next 5.2. Xem thông tin metric/log/trace/query data  ](./xem-thong-tin-monitor)
