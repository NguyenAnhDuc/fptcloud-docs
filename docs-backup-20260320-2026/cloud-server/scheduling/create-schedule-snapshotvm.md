---
sidebar_label: "Tạo lịch snapshot máy ảo"
title: "Tạo lịch snapshot máy ảo"
source: "https://fptcloud.com/documents/cloud-server/?doc=create-schedule-snapshotVM"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Tạo lịch snapshot máy ảo


* * *

Để tạo mời một Lịch snapshot máy ảo bạn thao tác như sau

**Bước 1:** Ở menu chọn Compute Engine > Schedule Management, chọn tab Instance snapshot schedule

![file](/img/docs/e224453bf4f4-image-1766044251626.png)

**Bước 2:** Nhập các thông tin theo yêu cầu của hệ thống

  * Name: tên lịch 

  * Time: chỉ có chọn time sau ít nhất 2h kể từ thời điểm chỉnh sửa để đảm bảo lịch chạy chính xác

  * Start date: ngày bắt đầu lặp lịch snapshot, nếu bỏ trống thì tính từ thời điểm tạo lịch thành công

  * End date: ngày kết thúc lịch snapshot, nếu bỏ trống thì lịch không có giới hạn

  * Frequency: tần suất cho việc thực hiện hành động snapshot

  *     * Daily: lịch chạy theo giờ mỗi ngày
  *     * Weekly: lịch chạy theo tuần, bạn có thể chọn ngày trong tuần
  * Applied Instance: Các máy ảo được gắn vào lịch (Lưu ý: mỗi máy ảo cùng lúc chỉ được cho phép gắn với 1 lịch)

![file](/img/docs/49bb8a07f39d-image-1766044359045.png)

**Bước 3:** Chọn Create Schedule. Hệ thống sẽ tiền hành khởi tạo và thông báo kết quả. Nếu thành công, lịch mới sẽ được hiển thị ở trang Instance snapshot schedule

![file](/img/docs/79f5a3e3f5dd-image-1766044391396.png)

[ Previous Lịch snapshot máy ảo ](./schedule-snapshotvm) [ Next Xem chi tiết lịch snapshot máy ảo ](./viewschedule-snapshotvm)
