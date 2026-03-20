---
sidebar_class_name: hidden
sidebar_label: "2. Managed – FPT Database Engine"
title: "2. Managed – FPT Database Engine"
source: "https://fptcloud.com/documents/managed-fpt-database-engine/?doc=tạo-subnets"
parent: "https://fptcloud.com/documents/managed-fpt-database-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engine


Tạo Subnets


* * *

**Subnets** là một mạng con được tạo ra trong VPC của bạn. Nó tương đương với mạng LAN ở hệ thống vật lý. Bạn có thể đính kèm một hoặc nhiều Subnet vào máy ảo tùy vào nhu cầu.

**Bước 1:** Tại thanh Menu > Chọn **Networking** > chọn **Subnets**

![](/img/docs/1e1f2f32e2d6-Sub1.png)

**Bước 2:** bấm **Create** , xuất hiện màn hình Create Subnets

![](/img/docs/a3119de5035b-Sub2.png)

Trong đó:

  * **Name:** tên thông tin subnets, ngoài tên gợi ý người dùng có thể chỉnh sửa theo tên dễ nhớ hơn.
  * **Type:**
    * Routed to the internet via a NAT gateway: kết nối internet qua cổng NAT.
    * Isolated subnet won’t route to the internet: sử dụng mạng nội bộ.
  * **CIDR:** nhập IP gateway, được gợi ý theo hệ thống hoặc chỉnh sửa theo giới hạn.
  * **Static IP Pool:** nhập static trong khoảng gợi ý cung cấp CIDR.

**Bước 3:** sau khi nhập các thông tin cần thiết, bấm **Create subnet:**

![](/img/docs/273cbe12cac2-Sub3.png)

**Lưu ý:** \- Khi tạo xong subnets, người dùng không nên đổi tên subnets.

[ Previous Tạo Floating IP ](./tạo-floating-ip) [ Next Phân quyền tính năng Database ](./phan-quyen-tinh-nang-database)
