---
sidebar_label: "Khởi động lại máy"
title: "Khởi động lại máy"
source: "https://fptcloud.com/documents/cloud-server/?doc=hpc-rest-machine"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Khởi động lại máy


* * *

Sau khi khởi động máy, bạn kết nối tới máy thông qua Remote Desktop Connection file – RDP file. Tuy nhiên trong quá trình sử dụng bạn có thể gặp 1 vài sự cố như là màn hình đen, không thể kết nối tới remote server hoặc máy chủ bị treo. Cách xử lý trong trường hợp này là đợi trong vòng 2-3 phút, sau đó connect lại máy. Nếu như sau đó vẫn không khắc phục được bạn bắt buộc phải khởi động lại máy để tiếp tục sử dụng.

Để khởi động lại máy, thực hiện các bước sau:

  1. Tại màn hình Hosts ở HPC Portal, chọn image > Reset machine

Một hộp thoại xác nhận được mở ra, chọn Reset để tiến hành khởi động lại máy

![reset](/img/docs/1a4b229dd825-reset.jpg)

  2. Đợi một vài phút sau khi reset máy thành công, bạn tiếp tục tải lại file RDP và thực hiện kết nối tới máy lại

**Lưu ý** : 

– Tính năng Reset machine tương tự với khi bạn bấm nút restart đối với máy chủ vật lý khi máy không phản hồi

– Tính năng hữu dụng trong trường hợp bạn không thể remote tới máy ngay sau khi boot máy thành công. Trong trường hợp reset máy xong vẫn chưa connect lại được với máy hãy liên hệ với quản trị viên của chúng tôi để hỗ trợ ngay.

– Cân nhắc trước khi sử dụng tính năng trong quá trình sử dụng máy vì có thể gây mất mát dữ liệu

[ Previous Cố định máy vật lý ](./hpc-hardware-fixation) [ Next Đặt lịch tắt máy ](./hpc-schedule-shutdown)
