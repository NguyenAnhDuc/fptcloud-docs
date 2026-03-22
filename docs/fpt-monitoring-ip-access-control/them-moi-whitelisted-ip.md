---
sidebar_class_name: hidden
sidebar_label: "Them moi whitelisted ip"
title: "2. FPT Monitoring – IP Access Control"
source: "https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=them-moi-whitelisted-ip"
parent: "https://fptcloud.com/documents/fpt-monitoring-ip-access-control"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Monitoring – IP Access Control


Thêm mới whitelisted IP/dải IP


* * *

  * Click nút 'Whitelist IP/Range' trên bảng tương ứng. 

  * Nhập IP hoặc dải IP, ngăn cách bởi Enter. 

  * Hệ thống kiểm tra format IP, loại trừ IP đã whitelist hoặc bị trùng.

![Add whitelisted IP 1](/img/docs/6b6299ec96cf-Screenshot_4.png)

  * Click nút Save để xác nhận

![Add whitelisted IP 2](/img/docs/e4ea3b186f4f-Screenshot_5.png)

Toàn bộ IP sẽ có trạng thái 'Whitelisting', mọi thao tác trên bảng tương ứng sẽ bị vô hiệu hoá tạm thời cho đến khi hoàn tất.

  * Nếu IP/dải IP đã được **whitelist thành công** , sẽ chuyển trạng thái thành **‘Whitelisted’**. Mọi truy cập vào endpoint bằng địa chỉ IP/thuộc dải IP này được thực hiện bình thường. 

  * Nếu IP/dải IP **whitelist không thành công** , sẽ chuyển trạng thái thành **‘Whitelist failed’**. Mọi truy cập vào endpoint bằng địa chỉ IP/thuộc dải IP này vẫn bị chặn. Người dùng cần thao tác retry để whitelist lại.

[ Previous Xem danh sách whitelisted IP/dải IP ](./xem-danh-sach-whitelisted-ip) [ Next Xóa bỏ whitelisted IP/dải IP ](./xoa-whitelisted-ip)
