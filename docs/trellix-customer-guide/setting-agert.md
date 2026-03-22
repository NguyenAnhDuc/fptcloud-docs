---
sidebar_class_name: hidden
sidebar_label: "Setting agert"
title: "2. Trellix Customer Guide"
source: "https://fptcloud.com/documents/trellix-customer-guide/?doc=setting-agert"
parent: "https://fptcloud.com/documents/trellix-customer-guide"
lang: vi
converted: "2026-03-19"
---

# 2. Trellix Customer Guide


Tạo gói cài đặt Agent, cài đặt Agert


* * *

**Bước 1** : Chọn tab System Tree > New System: (cài trên máy chủ cần bảo vệ, hỗ trợ Windows, Linux và MAC OS)

![file](/img/docs/e55af87a5f34-image-1765765451271.png)

**Bước 2** : Copy URL mới được tạo

![file](/img/docs/7e2edd821703-image-1765765488808.png)

Windows-Agent URL:

<https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=d0ace512f20025972b13c8554162e74fe3d6ecdc>

**Bước 3** : Truy cập URL > Install (Thao tác trên máy cần cài đặt Anti-Virus)

![file](/img/docs/5c9a5e0a5c47-image-1765765515152.png)

**Bước 4** : Click next/install và và chờ đến khi agent cài đặt xong.

![file](/img/docs/0b2d8afcbd15-image-1765765529674.png)

**Bước 5** : Kiểm tra cài đặt, trạng thái agent. Kiểm tra biểu tượng mũi tên trên task bar nếu chưa có icon của Trellix, Chạy câu lệnh bên dưới, click “Collect and send Props, Send Events, Check New Policies.”

![file](/img/docs/9292647f5636-image-1765765546061.png)

“C:\Program Files\McAfee\Agent\cmdagent.exe” -s

![file](/img/docs/94d9fac14a7b-image-1765765560155.png)

*Đối với Hệ điều hành linux: Tải về file script từ [Link cài đặt agent] 

<https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=e50140e04eea0aa17f171feca9864bf06cedf0f4>

Sau khi wget thành công thực hiện đổi file name vừa wget được

`# mv [file vừa get được] trellix.sh`

`file agent (.sh file) thực hiện chạy file cài đặt .sh để cài đặt agent` `# sudo chmod +x ./trellix.sh`

`# sudo ./trellix.sh -i` (lưu ý: cần quyền root để chạy file cài đặt) 

![file](/img/docs/7265ceeb1287-image-1765771828456.png)

`# sudo /opt/McAfee/cma/bin/cmdagent –f` (kiểm tra kết nối tới server)

Lưu ý sau khi thực hiện các thao tác trên, server Trellix sẽ tự động chạy các task cài đặt Endpoint Security (ngay lập tức) và cập nhật ENS (12AM). (Các task đã được setup sẵn trước khi cấp dịch vụ cho user, user có thể xem và tùy chỉnh các task gán cho cho client ở phần tiếp theo)

[ Previous Truy cập giao diện quản trị ](./truy-cap-giao-dien-quan-tri) [ Next Quản lý các tác vụ chạy trên máy chủ (Client Tasks) ](./client-task)
