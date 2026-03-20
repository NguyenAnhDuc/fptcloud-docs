---
sidebar_label: "Tạo một instance schedule mới"
title: "Tạo một instance schedule mới"
source: "https://fptcloud.com/documents/cloud-server/?doc=create-new-instance"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Tạo một instance schedule mới


* * *

Để tạo mới một**Instance Schedule** bạn thao tác như sau

**Bước 1** : Ở menu chọn **Compute Engine > Instance Schedule** , chọn **Create schedule** ![file](/img/docs/81286d570dcb-image-1695608969930.png)

**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống: 

  * **Name** : Tên instance schedule

  * **Description** : Mô tả về instance schedule

  * **Start time** : Thời gian bật máy ảo

  * **Stop time** : Thời gian tắt máy ảo

  * **Start Date** : Ngày bắt đầu việc thực hiện lịch tự động tắt/ bật máy ảo _(Lưu ý: Nếu để trống, lịch trình sẽ chạy vô thời hạn kể từ khi bắt đầu)_

  * **End Date** : Ngày kết thúc việc thực hiện lịch tự động tắt/ bật máy ảo _(Lưu ý: Nếu để trống, lịch trình sẽ chạy vô thời hạn cho đến khi bị xóa.)_

  * **Frequency** : Tần suất cho việc thực hiện hành động tắt/ bật máy ảo (hàng ngày/ hàng tuần/ hàng tháng)

  * **Applied instances** : Các máy ảo được gắn vào lịch _(Lưu ý: mỗi máy ảo cùng lúc chỉ được cho phép gắn với 1 lịch)_

![file](/img/docs/0ca4b6ed6428-image-1695608983434.png)

**Bước 3** : Chọn **Create schedule**. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. 

Nếu thành công, instance schedule mới sẽ được hiển thị ở trang **Instance Schedule Management**

![file](/img/docs/75646c284f51-image-1695608998324.png)

[ Previous Auto schedule to on-off Instance ](./instance-schedule) [ Next Xem chi tiết một instance schedule ](./view-detail-instance)
