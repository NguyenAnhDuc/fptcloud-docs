---
sidebar_label: "Hướng dẫn phân quyền sử dụng dịch vụ"
title: "Hướng dẫn phân quyền sử dụng dịch vụ"
source: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=service-authorization"
parent: "https://fptcloud.com/documents/vpn-site-to-site-0"
lang: vi
converted: "2026-03-19"
---

# Hướng dẫn phân quyền sử dụng dịch vụ


* * *

Để thực hiện phân quyền cho user khác sử dụng dịch vụ **VPN Site to Site** trong cùng project, Quý khách thao tác theo các bước sau:

**Bước 1:** Login bằng tài khoản quản lý trên trang console của FCI tại đường link: <https://console.fptcloud.com/>

**Bước 2:** Truy cập dịch vụ **IAM → Roles** ![](/img/docs/36845f2b1ef9-list_role.png) **Bước 3:** Click khởi tạo role và chọn service VPN và gán các quyền sử dụng của dịch vụ ![](/img/docs/859ad22a7fbc-2-1.png) **Bước 4:** Tạo thêm 1 permission và lựa chọn dịch vụ **Network** kèm quyền **“Network:List”**   
  
**Note** : Đối với các dải mạng sử dụng máy chủ baremetal, quý khách hàng cần bổ sung thêm permission ở dịch vụ **HPC** kèm quyền “**ListSubnet** ” ![](/img/docs/5b07fe07ab0e-3-2.png) Sau khi hoàn thành các thông tin, click **"Create role"** để tạo.

**Bước 5:** Khởi tạo user group và chọn roles “VPN_user” vừa khởi tạo ở bước trên ![](/img/docs/fdfbf0f85dc9-4-2.png)

**Bước 6:** Chọn tab **User** và click **“Invite user”** ![](/img/docs/454403cbd8e9-5.png)

**Bước 7:** Điền user muốn sử dụng VPN và lựa chọn user group, roles ![](/img/docs/e975ba121ee8-6-1.png)

**Bước 8:** Check mail của tài khoản được invite và truy cập dịch vụ để sử dụng ![](/img/docs/22b3d9cb38bf-h.png)

[ Previous Hướng dẫn xoá Customer gateway ](./delete-customergw) [ Next Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard ](./set_alert)
