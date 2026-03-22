---
sidebar_label: "Cấu hình lập lịch chạy Retention Rule"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=cau-hinh-lap-lich-chay-retention-rule"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Cấu hình lập lịch chạy Retention Rule 


* * *

FPT Cloud cho phép người dùng cấu hình để lập lịch chạy các quy tắc đối với repository. Người dùng có thể thực hiện như sau: 

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > **Schedule** > **Edit**

![](/img/docs/fe4aeec39128-Picture43-1.png)

**Bước 2** : Chọn tần suất chạy Tag Retention Rule: 

![](/img/docs/1535ba88c7cb-Picture44-1.png)

Người dùng có các lựa chọn sau: 

  * None: Không lập lịch chạy các quy tắc, người dùng vào FPT Container Registry để RUN retentions 

  * Hourly: Chạy mỗi giờ một lần 

  * Daily: Chạy mỗi ngày 1 lần vào lúc 7h00 a.m 

  * Weekly: Chạy mỗi tuần 1 lần 

  * Custom: Nhập cron job command để lên lịch chạy quy tắc 

**LƯU Ý** : _Nếu bạn xác định nhiều quy tắc, lịch trình sẽ được áp dụng cho tất cả các quy tắc. Bạn không thể lên lịch các quy tắc khác nhau để chạy vào các thời điểm khác nhau._

**Ví dụ** : Cấu hình Schedule Custom như sau: 

![](/img/docs/20717af07c95-Picture45-1.png)

**Bước 3** : Nhấn **Save** > **OK** để lưu lại quy tắc 

![](/img/docs/c68ab5ea767a-Picture46-1.png)

**Bước 4** : Kết quả sau khi cấu hình lập lịch: 

![](/img/docs/373e4e1a4dc4-Picture47-1.png)

[ Previous Quản lý Tag Retention Rule  ](./quan-ly-tag-retention-rule) [ Next Quản lý Retention Run  ](./quan-ly-retention-run)
