---
sidebar_class_name: hidden
sidebar_label: "Tạo rule NAT"
title: "2. CheckPoint – FPT NGFW"
source: "https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-rule-nat"
parent: "https://fptcloud.com/documents/checkpoint-fpt-ngfw"
lang: vi
converted: "2026-03-19"
---

# 2. CheckPoint – FPT NGFW


Tạo rule NAT


* * *

**Bước 1:** Trên **Object Pane** (**F11**) > tìm Object cần SNAT > chuột phải chọn **Edit.**

![Userguide Checkpoint FPT NGFW 2022 60](/img/docs/90ecad9b88da-Userguide-Checkpoint-FPT-NGFW-2022-60.png)

**Bước 2:** Trên Menu chọn **NAT** > tích **Add automatic address translation rules** > tích **Hide behind IP address** > điền IP muốn SNAT > chọn gateway để apply

![Userguide Checkpoint FPT NGFW 2022 61](/img/docs/4c5589345d80-Userguide-Checkpoint-FPT-NGFW-2022-61.png)

**Bước 3:** Trên Menu chọn **Security Policies** (**Ctrl + 2**) > chọn **Access Control** > chọn **NAT** > Kiểm tra rule đã được tạo.

![Userguide Checkpoint FPT NGFW 2022 62](/img/docs/dc17c5460d1c-Userguide-Checkpoint-FPT-NGFW-2022-62-1024x141.png)

**Bước 4:** Install Policy

**Bước 1:** Trên Menu chọn **Security Policies** (**Ctrl + 2**) > chọn **Access Control** > chọn **NAT.**

![Userguide Checkpoint FPT NGFW 2022 63](/img/docs/ac53aa0ffd1c-Userguide-Checkpoint-FPT-NGFW-2022-63-1024x286.png)

**Bước 2:** Chọn **Add rule above/ to top/ to bottom** để thêm rule vào vị trí phù hợp.

![Userguide Checkpoint FPT NGFW 2022 64](/img/docs/a10726e9d3de-Userguide-Checkpoint-FPT-NGFW-2022-64-1024x251.png)

**Bước 3:** Thiết lập thông tin cho rule mới:

![Userguide Checkpoint FPT NGFW 2022 65](/img/docs/b8780102eb34-Userguide-Checkpoint-FPT-NGFW-2022-65-1024x181.png)

  * **Name** (tên rule):![Userguide Checkpoint FPT NGFW 2022 66](/img/docs/56f58df1cf6e-Userguide-Checkpoint-FPT-NGFW-2022-66-1024x50.png)
  * **Original Source** (IP nguồn khi chưa NAT):![Userguide Checkpoint FPT NGFW 2022 67](/img/docs/85cf6d50eb57-Userguide-Checkpoint-FPT-NGFW-2022-67-1024x107.png)
  * **Original Destination** (IP đích khi chưa NAT):![Userguide Checkpoint FPT NGFW 2022 68](/img/docs/e30c8c041551-Userguide-Checkpoint-FPT-NGFW-2022-68-1024x142.png)
  * **Original Services** (Dịch vụ/ port khi chưa NAT):![Userguide Checkpoint FPT NGFW 2022 69](/img/docs/a48979cb5a9a-Userguide-Checkpoint-FPT-NGFW-2022-69-1024x151.png)
  * **Translated Source** (IP nguồn sau khi NAT):![Userguide Checkpoint FPT NGFW 2022 70](/img/docs/9a29270a9d7d-Userguide-Checkpoint-FPT-NGFW-2022-70-1024x52.png)

Giữ nguyên IP nguồn

  * **Translated Destination** (IP đích sau khi NAT):![Userguide Checkpoint FPT NGFW 2022 71](/img/docs/3ed249b08343-Userguide-Checkpoint-FPT-NGFW-2022-71-1024x114.png)
  * **Translated Services** (Dịch vụ/ port sau khi NAT):![Userguide Checkpoint FPT NGFW 2022 72](/img/docs/d9e3bb2ba53e-Userguide-Checkpoint-FPT-NGFW-2022-72-1024x90.png)
  * **Install On** (Thiết bị chứa rule NAT):![Userguide Checkpoint FPT NGFW 2022 73](/img/docs/5d70b6f5ced2-Userguide-Checkpoint-FPT-NGFW-2022-73-1024x95.png)

Rule DNAT sau khi tạo:

![Userguide Checkpoint FPT NGFW 2022 74](/img/docs/4254a83f9b1c-Userguide-Checkpoint-FPT-NGFW-2022-74-1024x67.png)

**Bước 4:** Tạo Firewall rule cho phép kết nối DNAT đã tạo.

![Userguide Checkpoint FPT NGFW 2022 75](/img/docs/32e9c82c54ce-Userguide-Checkpoint-FPT-NGFW-2022-75-1024x248.png)

**Bước 5:** Install Policy.

[ Previous Tạo rule Firewall ](./tao-rule-firewall) [ Next Điều tra Log ](./dieu-tra-log)
