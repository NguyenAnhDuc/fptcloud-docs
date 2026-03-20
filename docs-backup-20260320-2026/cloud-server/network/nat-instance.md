---
sidebar_label: "NAT Instance"
title: "NAT Instance"
source: "https://fptcloud.com/documents/cloud-server/?doc=nat-instance"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# NAT Instance


* * *

Chức năng hỗ trợ các instance trong mạng cô lập (isolated network) có thể truy cập hệ thống bên ngoài Internet như cài đặt phần mềm hoặc truy cập về On-premise.

Cài đặt Nat instance như sau:

**Bước 1** : Tạo Nat instance từ image do FCI cung cấp

![file](/img/docs/8c2b0ddb47e4-image-1719483610635.png)

![file](/img/docs/3f0ad3a4aaf1-image-1744796146357.png)

**Lưu ý: Trường subnet, cần chọn subnet có thể truy cập Internet.**

![file](/img/docs/e2a7f4b219f8-image-1744796019571.png)

**Bước 2** : Gắn Floating IP cho Nat instance. Trong trường hợp instance đã gắn floating IP từ bước khởi tạo, người dùng không cần thực hiện thao tác này.

![file](/img/docs/722a763bc245-image-1719483638728.png)

![file](/img/docs/bcd8d209ea2b-image-1719483643946.png)

![file](/img/docs/91c835246e05-image-1719483648767.png)

**Bước 3** : Gắn security group cho Nat instance, người dùng mở các rule cần thiết cho instance trong isolated network truy cập ra Internet (có thể mở thêm port ICMP để test ping hệ thống). Trong trường hợp instance đã gắn vào security group từ bước khởi tạo, người dùng không cần thực hiện thao tác này.

![file](/img/docs/fbc71ad5b83a-image-1719483661177.png)

![file](/img/docs/93b5fa246dfb-image-1719483666245.png)

**Bước 4** : Add thêm Network interface card (NIC) thuộc subnet trùng với isolated subnet của instance cần truy cập Internet.

![file](/img/docs/c695fbb8d85d-image-1719483681542.png)

![file](/img/docs/68077f618c02-image-1719483686233.png)

![file](/img/docs/09b07e4b28b3-image-1719483693216.png)

**Bước 5** : Allow address pair 0.0.0.0/0 cho NIC thuộc isolated network

![file](/img/docs/51c12336ee5b-image-1719483704950.png)

![file](/img/docs/66dc215f22a2-image-1719483711778.png)

**Bước 6** : Truy cập vào instance thuộc isolated network, chuyển gateway về IP của NIC Nat instance. Trong ví dụ dùng, FCI dùng 1 instance thuộc hệ điều hành Windows.

![file](/img/docs/1d1e34d1319b-image-1719483727521.png)

![file](/img/docs/77084b429fcf-image-1719483733636.png)

![file](/img/docs/1b21dfa77c7a-image-1719483740704.png)

[ Previous Xóa template  ](./tutorials-xoa-template) [ Next Quản lý NIC (Network Interface Card) ](./nic-overview-1)
