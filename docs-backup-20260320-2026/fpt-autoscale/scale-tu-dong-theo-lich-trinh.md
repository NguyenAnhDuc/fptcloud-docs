---
sidebar_class_name: hidden
sidebar_label: "2. FPT Autoscale"
title: "2. FPT Autoscale"
source: "https://fptcloud.com/documents/fpt-autoscale/?doc=scale-tu-dong-theo-lich-trinh"
parent: "https://fptcloud.com/documents/fpt-autoscale"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Autoscale


Scale tự động theo lịch trình


* * *

## Tạo Autoscale Schedule

### **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Click vào tên group cần lập lịch.

![open group details](/img/docs/72202578c35f-Screenshot-2024-10-02-042416.png)

### **Bước 2:** Chuyển đến tab **Schedule** , chọn **Create schedule.**

![create schedule](/img/docs/98d1b215b906-Screenshot-2024-10-02-042548.png)

### **Bước 3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình các thông tin.

**Schedule name** : Nhập tên Schedule. Tên phải có 6 đến 20 kí tự và chỉ chứa kí tự chữ cái latin, số và dấu gạch dưới.

**Frequency** : Tần suất thực hiện resize group.

**Desired capacity** : Số node mong muốn của group tại thời điểm lịch được thực thi.

**Min size** và **Max size** : Thông số chặn dưới và chặn trên của group.

#### Trường hợp 1: Daily

![](/img/docs/afae040969dd-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FnhPQ0o5u.png)

**From time:** Thời điểm trong ngày thực hiện resize theo thông số đã đưa ra trong lịch.

**To time:** Thời điểm trong ngày kết thúc chu kỳ và resize về thông số ban đầu.

**Start date:** Ngày lịch bắt đầu có hiệu lực.

**End date:** Ngày lịch hết hiệu lực.

**Lưu ý:**

  * Nếu Start Date là ngày hiện tại, From Time phải lớn hơn thời điểm hiện tại.
  * To Time phải lớn hơn From Time ít nhất 30 phút.

#### Trường hợp 2: Weekly

![](/img/docs/3aaf30c1fe97-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FVjUJHgvg.png)

Tương tự như **Daily**. Ngoài ra, còn có thêm 2 thông số:

**From weekday:** Ngày trong tuần thực hiện resize theo thông số đã đưa ra trong lịch.

**To weekday:** Ngày trong tuần kết thúc chu kỳ và resize về thông số ban đầu.

#### Trường hợp 3: Monthly

![](/img/docs/6b958596cb0d-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FClQJZx4j.png)

Tương tự như **Daily**. Ngoài ra, còn có thêm 2 thông số:

**From date:** Ngày trong tháng thực hiện resize theo thông số đã đưa ra trong lịch.

**To date:** Ngày trong tháng kết thúc chu kỳ và resize về thông số ban đầu.

**Lưu ý:**

  * Với ngày 31, sẽ chỉ xảy ra ở một số tháng.
  * Với tháng 2, sẽ chỉ có 28 hoặc 29 ngày.

### **Bước 4:** Chọn **Create**.

Hệ thống sẽ thực hiện kiểm tra lại thông tin và thực hiện tạo lịch cho Autoscale Group.

![](/img/docs/5028a31ed6c1-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2Fi3N4EFwM.png)

**Name** : Tên lịch trình.

**Size** : Thông số resize group khi lịch được thực thi.

**Frequency** : Tần suất thực thi của lịch.

**Start time** : Thời gian lịch bắt đầu có hiệu lực.

**Stop time** : Thời gian lịch hết hiệu lực.

**First Execution** : Thời điểm lịch được thực thi lần đầu.

**Next Execution** : Thời điểm lịch được thực thi lần tiếp theo.

**Remaining Executions** : Số lần thực thi còn lại.

## Xóa Autoscale Schedule

### **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Click vào tên group cần xóa lịch.

![open group details](/img/docs/72202578c35f-Screenshot-2024-10-02-042416.png)

### **Bước 2:** Chuyển đến tab **Schedule**. Trên dòng chứa lịch trình cần xóa, click biểu tượng **Action menu**.

![schedule menu action](/img/docs/6435951129d1-Screenshot-2024-10-02-043704.png)

### **Bước 3:** Trong menu, chọn **Delete**.

![delete schedule](/img/docs/ac1fa26ec41b-Screenshot-2024-10-02-043812.png)

### **Bước 4:** Một hộp thoại sẽ xuất hiện. Nếu tên lịch cần xóa là chính xác, chọn **Delete** để xác nhận.

![delete schedule confirmation dialog](/img/docs/0919459f5eb9-Screenshot-2024-10-02-044127.png)

## Lưu ý

Không đặt các lịch trùng với thời điểm bắt đầu và kết thúc thực thi trong cùng một group để tránh các xung đột không mong muốn.**

[ Previous Scale thủ công ](./scale-thu-cong) [ Next Xóa Group ](./xoa-group)
