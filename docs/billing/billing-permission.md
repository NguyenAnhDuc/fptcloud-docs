---
sidebar_class_name: hidden
sidebar_label: "Billing permission"
title: "2. Bills"
source: "https://fptcloud.com/documents/billing/?doc=billing-permission"
parent: "https://fptcloud.com/documents/billing"
lang: vi
converted: "2026-03-19"
---

# 2. Bills


Phân quyền xem billing


* * *

Để xem được billing, người dùng cần có role Tenant owner (Super Admin) hoặc role có permission billing.

Với những user không có role Tenant owner (Super Admin) cần xem billing, user Tenant owner (Super Admin) có thể phân quyền theo hướng dẫn dưới đây:

**Bước 1:** User có quyền Tenant Owner (Super Admin) đăng nhập vào Console.FPTcloud > chọn IAM > chọn Roles > chọn button Create Role.

![file](/img/docs/52e42c98a62c-image-1733807046462.png)

**Bước 2:** Tại màn hình Create Role, đặt tên cho role tại field “Name” > Chọn filter để chọn permission cho role này > Chọn type = billing > chọn permission cho role này > chọn button Create.

![file](/img/docs/b839d87ffdd5-image-1733807051725.png)

![file](/img/docs/9e09ce9cb15c-image-1733807059640.png)

![file](/img/docs/d4a99dea91e1-image-1733807063820.png)

**Bước 3:** Tại IAM, chọn User Groups > Chọn Create user group.

![file](/img/docs/1c03291ae60c-image-1733807067997.png)

**Bước 4:** Tại màn hình Create user group, điền Name cho user group > chọn roles billing mà bạn đã tạo ở bước 1-2 > chọn các user mà bạn muốn phân quyền với role đã chọn > bấm Create user group. 

![file](/img/docs/9336da11c902-image-1733807076636.png)

[ Previous Tải file đối soát chi tiết ](./download-bills)
