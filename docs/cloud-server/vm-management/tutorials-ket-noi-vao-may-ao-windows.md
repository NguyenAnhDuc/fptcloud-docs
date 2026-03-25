---
sidebar_label: "Kết nối vào máy ảo Windows"
title: "Kết nối vào máy ảo Windows"
source: "https://fptcloud.com/documents/cloud-server/?doc=tutorials-ket-noi-vao-may-ao-windows"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Kết nối vào máy ảo Windows


* * *

Khi một máy ảo **Windows** được tạo thành công trên **FPT** **Portal** , người dùng mặc định có thể dùng **Web Console** được cung cấp sẵn để truy cập. Ngoài ra người dùng còn có thể đăng nhập từ bên ngoài bằng **Remote Desktop Connection** nếu máy chủ đấy được gắn với một Public IP.

## **Kết nối vào máy ảo Windows bằng Web Console**

**Web Console** hỗ trợ điều khiển tất cả các máy ảo **Windows** trên **FPT Cloud** , kể cả máy ảo chưa được gắn **Public IP**.

Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần kết nối, chọn **Console.**

![Userguide FPT Cloud Server 2022 22](/img/docs/8e9a3fe1ef86-Userguide-FPT-Cloud-Server-2022-22-1024x457.png)

Ngay lập tức trình duyệt sẽ mở 1 cửa sổ mới chứa màn hình của máy chủ, từ màn hình này người dùng có thể toàn quyền điều khiển và thao tác với máy chủ đang kết nối.

![Userguide FPT Cloud Server 2022 23](/img/docs/27ea7392091d-Userguide-FPT-Cloud-Server-2022-23-297x300.png)

## **Kết nối tới server Windows bằng Remote Desktop Connection**

Để kết nối bằng **RDC** (**Remote Desktop Connection**), máy ảo cần được gắn **Floating IP** và đã mở port 3389 cho RDP Connection. **FPT Cloud** hỗ trợ mở port cho máy ảo bằng cách gắn một **Security Group**.

**Người thực hiện các bước sau để cấu hình kết nối:**

**Bước 1** : Khởi tạo một máy ảo HĐH **Windows** , gắn **Floating IP** theo hướng dẫn ở phần [**Gắn Floating Ip vào máy**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip>) và khởi chạy. 

![Userguide FPT Cloud Server 2022 24](/img/docs/d7f8ec18e379-Userguide-FPT-Cloud-Server-2022-24-1024x375.png)

**Bước 2** : Gắn vào máy ảo một **Security Group** đã mở port RDP 3389, nếu chưa có **Security Group** có thể tạo mới theo hướng dẫn ở phần [**Quản lý Security Group**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>)

![Userguide FPT Cloud Server 2022 26](/img/docs/d2598fa06bfa-Userguide-FPT-Cloud-Server-2022-26-1024x535.png)

**Bước 3** : Sau khi cấu hình thành công, người dùng có thể connect vào máy ảo bằng Remote Desktop Connection với các thông số như sau:

![Userguide FPT Cloud Server 2022 27](/img/docs/461bd875b6e2-Userguide-FPT-Cloud-Server-2022-27-258x300.png)

Nếu **Remote Desktop Connection** báo không thể kết nối, người dùng nên kiểm tra lại máy ảo đã bật chưa, **Floating IP** có chính xác không và mở lại port 3389 theo các hướng dẫn ở phần [**Quản lý Security Group**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>).

[ Previous Clone instance ](./clone-instance) [ Next Kết nối vào máy ảo Linux ](./tutorials-ket-noi-vao-may-ao-linux)
