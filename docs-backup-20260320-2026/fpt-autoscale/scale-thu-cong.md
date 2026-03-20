---
sidebar_class_name: hidden
sidebar_label: "2. FPT Autoscale"
title: "2. FPT Autoscale"
source: "https://fptcloud.com/documents/fpt-autoscale/?doc=scale-thu-cong"
parent: "https://fptcloud.com/documents/fpt-autoscale"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Autoscale


Scale thủ công


* * *

## **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng tương ứng với group cần điều chỉnh, click vào biểu tượng **Action menu**.

![open group action menu](/img/docs/8d0f15212bfe-Screenshot-2024-10-02-023008.png)

## Trường hợp 1: Scale in

### **Bước 2:** Chọn **Scale in**.

![scale in](/img/docs/d604a3de6731-scalein-1.png)

### **Bước 3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình thông số và chọn **Scale in**.

![](/img/docs/cc48c910fadc-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FBKIHwzwp.png)

**Count:** Số lượng node cần giảm bớt.

## Trường hợp 2: Scale out

### **Bước 2:** Chọn **Scale out**.

![scale out](/img/docs/cd3d34b8203b-scalein.png)

### **Bước 3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình thông số và chọn **Scale out**.

![](/img/docs/908f7d33d949-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FVEzU9hTG.png)

**Count:** số lượng node cần thêm vào.

## Trường hợp 3: Resize

### **Bước 2:** Chọn **Resize**.

![resize](/img/docs/6be7c5a69d10-scaleout.png)

### **Bước 3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình thông số và chọn **Resize**.

![](/img/docs/aaf0f4ff93b1-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2Fy6MqTMhJ.png)

**Change type** : Lựa chọn hình thức điều chỉnh cho group.

**Number** : Tùy vào **Change type** được chọn, giá trị này sẽ có ý nghĩa khác nhau.

  * Exact capacity: Nhập công suất mới của group (số nguyên dương). Sau khi điều chỉnh, số lượng node trong group sẽ bằng đúng giá trị này.
  * Change in capacity: Nhập số node cần thêm vào (số nguyên dương) hoặc cần loại bỏ (số nguyên âm) khỏi group. Sau khi điều chỉnh, số lượng node trong group sẽ bằng công suất trước khi điều chỉnh cộng thêm hoặc trừ đi giá trị tuyệt đối của **Number**.
  * Change in percentage: Nhập tỷ lệ (%) cần thêm vào (số thực dương) hoặc cần loại bỏ (số thực âm) dựa trên công suất hiện tại của group. Ví dụ: Công suất hiện tại của group là 4, giá trị của **Number** là 50%. Suy ra, số node được thêm vào là 50% của 4, tức là 2 nodes mới sẽ được sinh ra và tổng công suất sau khi điều chỉnh là 6.

**Min size** và **Max size** : Resize còn cho phép điều chỉnh thông số chặn dưới và chặn trên của group.

Hệ thống sẽ kiểm tra lại thông tin và thực hiện resize group nếu hợp lệ. Sau khi thực hiện thành công, status của group sẽ chuyển từ **Resizing** sang **Active**.

[ Previous Thay đổi Profile cho Group ](./thay-doi-profile-cho-group) [ Next Scale tự động theo lịch trình ](./scale-tu-dong-theo-lich-trinh)
