---
sidebar_label: "Tạo lịch snapshot ổ đĩa"
title: "Tạo lịch snapshot ổ đĩa"
source: "https://fptcloud.com/documents/cloud-server/?doc=createschedule-snapshotstorage"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Tạo lịch snapshot ổ đĩa


* * *

Để tạo mời một Lịch snapshot ổ đĩa bạn thao tác như sau **Bước 1:** Ở menu chọn Compute Engine > Schedule Management, chọn tab Storage snapshot schedule

![file](/img/docs/47ffb5e03568-image-1766044844669.png)

Bước 2: Nhập các thông tin theo yêu cầu của hệ thống

  * Name: tên lịch 

  * Time: chỉ có chọn time sau ít nhất 2h kể từ thời điểm chỉnh sửa để đảm bảo lịch chạy chính xác

  * Start date: ngày bắt đầu lặp lịch snapshot, nếu bỏ trống thì tính từ thời điểm tạo lịch thành công

  * End date: ngày kết thúc lịch snapshot, nếu bỏ trống thì lịch không có giới hạn

  * Frequency: tần suất cho việc thực hiện hành động snapshot

  *     * Daily: lịch chạy theo giờ mỗi ngày
  *     * Weekly: lịch chạy theo tuần, bạn có thể chọn ngày trong tuần
  * Applied Storage: Các ổ đĩa được gắn vào lịch (Lưu ý: mỗi ổ đĩa cùng lúc chỉ được cho phép gắn với 1 lịch)

![file](/img/docs/12b00e984840-image-1766044938913.png)

**Bước 3:** Chọn Create Schedule. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. Nếu thành công, lịch mới sẽ được hiển thị ở trang Storage snapshot schedule

![file](/img/docs/8510c5bdccf2-image-1766044968475.png)

[ Previous Lịch snapshot ổ đĩa ](./schedule-snapshotstorage) [ Next Xem chi tiết lịch snapshot ổ đĩa ](./viewschedule-snapshotstorage)
