---
sidebar_label: "2. Hướng dẫn sử dụng Grafana"
title: "2. Hướng dẫn sử dụng Grafana"
source: "https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=xem-thong-tin-metric"
parent: "https://fptcloud.com/documents/huong-dan-su-dung-grafana"
lang: vi
converted: "2026-03-19"
---

# 2. Hướng dẫn sử dụng Grafana


4.2. Xem thông tin metric


* * *

Người dùng có thể theo dõi các chỉ số hiệu suất, tài nguyên và trạng thái của Cluster trực tiếp trên Dashboard Grafana.

**Bước 1:** Trên menu, bạn chọn Explore

![Alt text](/img/docs/f2b7b75d09ea-Screenshot_22.png)

**Bước 2:** Chọn datasource: mimir

  * Chọn loại metric 

  * Chọn label filters mong muốn

![Alt text](/img/docs/b0dab0dfe423-Screenshot_23.png)

  * Bạn có thể thêm nhiều label bằng cách click icon ![Alt text](/img/docs/7ed16aa52cfa-Screenshot_24.png)

  * Hoặc xem metric trong một khoảng thời gian mong muốn, chọn filter thời gian

![Alt text](/img/docs/639736f9262e-Screenshot_25.png)

**Bước 3:** Nhấn **Run query** và hệ thống sẽ trả ra kết quả tương ứng

_Ảnh minh họa_

![Alt text](/img/docs/0072eac57cbd-Screenshot_26.png)

[ Previous 4.1. Hướng dẫn tích hợp ](./huong-dan-tich-hop-k8s) [ Next 4.3. Xem thông tin logs ](./xem-thong-tin-logs)
