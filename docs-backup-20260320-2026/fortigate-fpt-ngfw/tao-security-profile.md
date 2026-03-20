---
sidebar_class_name: hidden
sidebar_label: "2. Fortigate – FPT NGFW"
title: "2. Fortigate – FPT NGFW"
source: "https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=tao-security-profile"
parent: "https://fptcloud.com/documents/fortigate-fpt-ngfw"
lang: vi
converted: "2026-03-19"
---

# 2. Fortigate – FPT NGFW


Tạo Security Profile


* * *

## 1\. AntiVirus

**Bước 1:** **Security Profiles** > **AntiVirus.**

![Userguide Fortigate FPT NGFW 2022 13](/img/docs/881981db2feb-Userguide-Fortigate-FPT-NGFW-2022-13-1024x305.png)  
**Bước 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của **Fortigate**.  
![Userguide Fortigate FPT NGFW 2022 14](/img/docs/d5b64418497f-Userguide-Fortigate-FPT-NGFW-2022-14-1024x663.png)  
Tùy chọn các **Giao Thức Inspected** , **Feature** và **Action**.

## 2\. Web Filter

**Bước 1:** **Security Profiles** > **Web Filter**.

![Userguide Fortigate FPT NGFW 2022 15](/img/docs/5d2b8463e033-Userguide-Fortigate-FPT-NGFW-2022-15-1024x308.png)

**Bước 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của **Fortigate.**

![Userguide Fortigate FPT NGFW 2022 16](/img/docs/7d7928a3f008-Userguide-Fortigate-FPT-NGFW-2022-16-1024x724.png)  
**Bước 3:**

Bật **URL Filter** > **Create New.**

  * Tạo profile chỉ cho phép truy cập đến trang web cụ thể, ví dụ fptsmartcloud.com.

  * ![Userguide Fortigate FPT NGFW 2022 17](/img/docs/064d7203d191-Userguide-Fortigate-FPT-NGFW-2022-17-1024x563.png)**Tạo profile chặn tất cả các truy cập còn lại:** Sử dụng dạng Regex: [^.] để chặn các trang còn lại.

![Userguide Fortigate FPT NGFW 2022 18](/img/docs/0730e9d992bc-Userguide-Fortigate-FPT-NGFW-2022-18-1024x494.png)

![Userguide Fortigate FPT NGFW 2022 19](/img/docs/17350cd92512-Userguide-Fortigate-FPT-NGFW-2022-19.png)

## 3\. Application Control

**Bước 1:** **Security Profiles** > **Application Control.**

![Userguide Fortigate FPT NGFW 2022 20](/img/docs/4e4f0ebad9ef-Userguide-Fortigate-FPT-NGFW-2022-20-1024x310.png)

**Bước 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn truy cập các trang mạng xã hội.

![Userguide Fortigate FPT NGFW 2022 21](/img/docs/f6520a679e71-Userguide-Fortigate-FPT-NGFW-2022-21-1024x750.png)

![Userguide Fortigate FPT NGFW 2022 22](/img/docs/568d50f42c76-Userguide-Fortigate-FPT-NGFW-2022-22-1024x555.png)

**Bước 3:** Sử dụng các signature có sẵn hoặc tạo mới **Create New** > **Custom Application Signature**.

![Userguide Fortigate FPT NGFW 2022 23](/img/docs/8c16436a6beb-Userguide-Fortigate-FPT-NGFW-2022-23-1024x557.png)

## 4\. Intrusion Prevention – IPS

**Bước 1:** **Security Profiles** > **Intrusion Prevention**.

![Userguide Fortigate FPT NGFW 2022 24](/img/docs/a9517010bfce-Userguide-Fortigate-FPT-NGFW-2022-24-1024x309.png)

**Bước 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn truy cập đến các C&C; server (Botnet).

![Userguide Fortigate FPT NGFW 2022 25](/img/docs/d20e176d400a-Userguide-Fortigate-FPT-NGFW-2022-25-1024x616.png)

![Userguide Fortigate FPT NGFW 2022 26](/img/docs/c379afe0241a-Userguide-Fortigate-FPT-NGFW-2022-26-1024x598.png)

**Bước 3:** Sử dụng các IPS signature có sẵn hoặc tạo mới **IPS Signature and Filter** > **Create New.**

![Userguide Fortigate FPT NGFW 2022 27](/img/docs/ccc83cc58fae-Userguide-Fortigate-FPT-NGFW-2022-27-1024x601.png)

## 5\. WebApplication FireWall – WAF

**Bước 1:** **Security Profiles** > **Web Application FireWall**  
![Userguide Fortigate FPT NGFW 2022 28](/img/docs/3da9bc27426e-Userguide-Fortigate-FPT-NGFW-2022-28-1024x309.png)  
**Bước 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn các cuộc tấn công đến webserver (Sql Injection, Cross Site Scripting)

![Userguide Fortigate FPT NGFW 2022 29](/img/docs/2ec3ddddc50a-Userguide-Fortigate-FPT-NGFW-2022-29-1024x796.png)

**Bước 3:** Bật các signatures **Edit** > **Sql Injection** (Extended), **Cross Site** (Extended)  
![Userguide Fortigate FPT NGFW 2022 30](/img/docs/dd9edd126856-Userguide-Fortigate-FPT-NGFW-2022-30-1024x533.png)

[ Previous Xóa Firewall Policy ](./xoa-firewall-policy) [ Next Quản Lý System User – User Profile ](./quan-ly-system-user-user-profile)
