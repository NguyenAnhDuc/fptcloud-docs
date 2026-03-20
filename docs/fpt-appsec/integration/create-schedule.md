---
sidebar_label: "2. FPT AppSec"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=create-schedule"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


Hướng dẫn tạo schedule


* * *

**Bước 1:** Mở màn hình tạo 

Vào menu **Schedule** , hệ thống điều hướng sang màn hình **Schedule Management**. Nhấn **Create Schedule** : 

![Alt text](/img/docs/461969c32a32-1-1.png)

Hệ thống hiển thị màn hình tạo schedule gồm các trường cần điền về General information và Scope configuration:

![Alt text](/img/docs/6b45dd3e0c20-Screenshot-2025-11-14-141143.png)

**Bước 2:** Nhập các trường thông tin chung

**1\. Name (_bắt buộc_):** Nhập tên cho schedule để dễ nhận diện trong danh sách, tên không được trùng với schedule đã tồn tại. 

![Alt text](/img/docs/35523042710c-Picture3.png)

**2\. Description (_không bắt buộc_):** Nhập mô tả ngắn (tối đa 255 ký tự). 

![Alt text](/img/docs/0eb157247878-Picture4.png)

**3\. Frequency (_bắt buộc_):** Chọn tần suất chạy schedule: 

![Alt text](/img/docs/2f370489df41-Picture5.png)

  * **On-demand** : Chạy thủ công khi người dùng kích hoạt. Người dùng cần chọn ngày và giờ cụ thể (sau ngày hôm nay) và thời gian chạy mong muốn. Hệ thống sẽ kích hoạt chạy schedule vào đúng thời gian người dùng đã chọn (1 lần): 

![Alt text](/img/docs/1e0f1e55fe2a-Screenshot-2025-11-14-141242.png)

  * **Weekly** : Khi chọn đặt lịch chạy hàng tuần, người dùng cần chọn ngày trong tuần (Monday – Sunday) & giờ cần chạy.

![Alt text](/img/docs/2f26c4c819ec-Picture7.png)

  * **Monthly** : Chạy định kỳ hàng tháng. Người dùng cần chọn ngày và giờ cần chạy trong tháng trong tháng (1 → 31) hoặc chọn **Last** để lập lịch scan vào ngày cuối cùng của tháng: 

![Alt text](/img/docs/1e00c9a0aabe-Picture8.png)

**Bước 3:** Nhập thông tin về phạm vi (scope) chạy schedule 

**1\. Chọn Team:** Ở phần Team (bắt buộc), chọn team áp dụng schedule. 

![Alt text](/img/docs/2174c7e07a3a-Picture9.png)

**2\. Cấu hình Rule (Scope)**

  * **Asset Type:** Ở version hiện tại, rule chỉ áp dụng cho các asset thuộc loại **Repository**. Không thể chỉnh sửa. 

  * **Branch:** Version hiện tại chỉ áp dụng cho main/master branch 

  * **Source:** Xác định nguồn của repository (GitHub/GitLab/GitLab Server). Nếu người dùng không chọn, hệ thống sẽ mặc định quét tất cả repo từ mọi nguồn

![Alt text](/img/docs/ac960aef8764-Screenshot-2025-11-14-141405.png)

  * **Last Scan:** Xác định khoảng thời gian repo chưa được quét gần đây. Nếu không chọn, hệ thống sẽ mặc định quét toàn bộ repo hợp lệ, nếu chọn, hệ thống sẽ chỉ quét repo chưa được quét trong X ngày gần nhất (theo loại scan chọn ở phần Action)

![Alt text](/img/docs/dab921d9f1cc-Picture11.png)

  * **Add rule:** Nhấn để thêm loại rule mới mới (Source, Last Scan). Khi tất cả các loại rule đã được thêm, nút này bị vô hiệu hóa. 

![Alt text](/img/docs/97f4ebca29c7-Screenshot-2025-11-14-141528.png)

**Bước 4:** Chọn loại scan (Action) 

Trong phần Action, người dùng có thể chọn các loại scan: Code Analysis, Secret Scan, IaC Scan. Người dùng cần chọn ít nhất 1 loại scan. Nếu người dùng không chỉnh sửa, mặc định cả 3 được chọn. 

![Alt text](/img/docs/4a5f2bd8bfbf-Picture15.png)

**Bước 5:** Kiểm tra lại tất cả trường bắt buộc đã điền. Nhấn **Create** để lưu schedule. 

![Alt text](/img/docs/d4757f192a25-Picture13.png)

Khi ấn tạo schedule thành công, hệ thống sẽ chuyển về màn hình danh sách schedule và hiển thị thông báo _“Created schedule successfully”_.

[ Previous Schedule Management - Quản lý lịch chạy scan ](https://fptcloud.com) [ Next Hướng dẫn xem danh sách & chi tiết schedule  ](./schedule-detail)
