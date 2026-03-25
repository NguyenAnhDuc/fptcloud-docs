---
sidebar_label: "Tính năng 'Quản lý độ ưu tiên' giúp bạn:"
title: "Manage Priority Rule of Security Group"
source: "https://fptcloud.com/documents/cloud-server/?doc=security-group-priority-rule"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Manage Priority Rule of Security Group


* * *

**Lưu ý:** Tính năng này chỉ dành riêng cho một số Tenant có cấu hình đặc biêt, vui lòng liên hệ để được hỗ trợ.

# Giới thiệu

Tính năng cho phép bạn thiết lập các rule để kiểm soát lưu lượng mạng (firewall rules). Độ ưu tiên (Priority) quyết định thứ tự rule được thực thi, ảnh hưởng trực tiếp đến việc Allow hoặc Deny traffic.

Tính năng "Quản lý độ ưu tiên" giúp bạn:

  * Sắp xếp thứ tự rule theo mức độ quan trọng
  * Đảm bảo rule chi tiết được xử lý trước rule tổng quát
  * Tránh xung đột hoặc sai hành vi firewall do rule đặt sai vị trí

# Cách hệ thống xử lý rule

Mỗi rule được gắn một chỉ số Priority. Priority càng nhỏ → Rule càng được ưu tiên xử lý trước. Khi traffic đi qua, hệ thống sẽ:

  * Đọc rule theo thứ tự từ priority nhỏ → lớn
  * Áp dụng rule đầu tiên match với traffic
  * Dừng, không tiếp tục xét các rule phía sau

Ví dụ:

  * Rule Allow SSH (priority 01)
  * Rule Deny All (priority 02) ⇒ Traffic SSH được Allow vì rule 01 được xét trước rule 02.

# Hướng dẫn sử dụng

**Bước 1** : Truy cập Security Group

  * Đăng nhập vào FPT Cloud Portal

  * Chọn Network

  * Chọn Security Groups

**Bước 2:** Mở danh sách Rules ![](/img/docs/dd79184241ab-list-SG-1024x558.png) ![](/img/docs/cdee0131abee-not-select-1024x513.png)

  * Chọn button Actions > Manage priority rule 

  * Hệ thống sẽ show modal danh sách rule theo gateway (nếu VPC có nhiều gateway, hệ thống sẽ tự động chọn Gateway đầu tiên và load danh sách rule của Security Group trong Gateway đó)

  * Danh sách rule sẽ hiển thị gồm:

    * Cột #: thự tự ưu tiên của Rule
    * (Direction (Inbound/Outbound)
    * Type
    * Protocol
    * Port range
    * Soure / Destination
    * Action (Allow/Deny)
    * Source / Destination
    * IP Type (IPv4/IPv6)

**Bước 3:** Thay đổi Priority ![](/img/docs/b2d3b2a0504d-selected-1024x511.png)

  * Click chuột vào rule muốn sắp xếp thứ tự
  * Bấm Move up / Move down để kéo rule lên hoặc xuống vị trí mong muốn. Hoặc Move to để kéo rule đến vị trí bất kì trong danh sách rule đang có
  * Hệ thống sẽ tự động cập nhật giá trị Priority theo vị trí mới

**Bước 4:** Lưu cấu hình

  * Sau khi sắp xếp xong, nhấn Save hoặc Apply Changes

  * Rule sẽ được áp dụng ngay lập tức

# FAQs

Thay đổi priority có gây downtime không? => Không. Rule được áp dụng theo cơ chế real-time, không ảnh hưởng đến VM uptime.

Tôi có thể đặt priority giống nhau không? => Không.

[ Previous Filter Security Group ](./security-group-filter) [ Next IaC (Terraform) ](./terraform)
