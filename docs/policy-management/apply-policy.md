---
sidebar_class_name: hidden
sidebar_label: "Áp dụng policy"
title: "2. Policy Management"
source: "https://fptcloud.com/documents/policy-management/?doc=apply-policy"
parent: "https://fptcloud.com/documents/policy-management"
lang: vi
converted: "2026-03-19"
---

# 2. Policy Management


Áp dụng policy


* * *

Kịch bản:

_Chặn người dùng khởi tạo rule SSH với source IP bằng All IPv4 (Any)_

**Bước 1** : Ở menu chọn **Security Group** , sau đó chọn **Create security group**

![file](/img/docs/9fd79d5a70b6-image-1719821228097.png)

**Bước 2** : Tại màn hình **Create security group** , chọn **Add rule**

![file](/img/docs/ab40b63e83f6-image-1719821250324.png)

**Bước 3** : Điền các thông tin tương ứng của rule. 

  * **Type** : SSH

  * **Sources** : All IPv4

![file](/img/docs/f0a280a9877e-image-1719821264190.png)

**Bước 4** : Nhấn Create security group. Hệ thống sẽ báo lỗi: hành động bị cấm bởi policy

![file](/img/docs/01f0978c13d9-image-1719821276342.png)

[ Previous Khởi tạo nhanh Policy Management ](./create-overview-policy)
