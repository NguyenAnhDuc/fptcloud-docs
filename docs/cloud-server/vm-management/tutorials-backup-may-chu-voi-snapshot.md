---
sidebar_label: "Backup máy chủ với Snapshot"
title: "Backup máy chủ với Snapshot"
source: "https://fptcloud.com/documents/cloud-server/?doc=tutorials-backup-may-chu-voi-snapshot"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Backup máy chủ với Snapshot


* * *

**Snapshot** là hành động chụp nhanh lại hiện trạng của máy ảo tại một thời điểm cụ thể. Kết quả tạo ra những bản sao chứa toàn bộ nội dung của hệ thống ở thời điểm chụp. 

Nếu người dùng có nhu cầu lưu trữ định kỳ ở nhiều thời điểm khác nhau, hãy tham khảo dịch vụ FPT Backup.

Người dùng có thể chọn thời điểm hệ thống chạy ổn định nhất, tạo một bản **Snapshot**. Sau này nếu trong hệ thống có một phần mềm nào đấy bị lỗi không thể khắc phục hoặc dữ liệu quan trọng bị xóa nhầm. Người dùng chỉ cần khôi phục lại máy ảo về thời điểm tạo Snapshot là đã giải quyết được vấn đề.

## **Khởi tạo và quản lý snapshot từ máy ảo**

### **1\. Khởi tạo snapshot**

**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần tạo snapshot. Chọn **Snapshot** > chọn **Create snapshot**

![file](/img/docs/805aff756e0e-image-1712656669900.png)

**Bước 2** : Nhấn **Create snapshot** , hiển thị modal **Create instance snapshot**

![file](/img/docs/4982aec64dd6-image-1734595203830.png)

**Bước 3** : Nhấn **Create snapshot** để tạo snapshot. Sau khi xác nhận tạo snapshot, hệ thống sẽ tiến hành kiểm tra tài nguyên, tạo image snapshot và thông báo kết quả xử lý.

![file](/img/docs/974ca75eb8fe-image-1734595376651.png)

### **2\. Khởi tạo máy ảo từ snapshot**

**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Launch as Instance**

![file](/img/docs/f0bc6c134240-image-1734595412087.png)

**Bước 2** : Hiển thị modal **Create instance** từ snapshot.

![file](/img/docs/23f6c72562a6-image-1712653436496.png)

**Bước 3** : Tạo máy ảo từ snapshot thành công, hệ thống hiển thị máy ảo tại màn hình **Instance Management**

![file](/img/docs/0444976fe354-image-1734595491154.png)

### **3\. Xóa snapshot đã tạo**

**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Delete Image**

![file](/img/docs/0f965a421567-image-1734595518655.png)

**Bước 2** : Chọn **Delete snapshot**

Sau khi xác nhận xóa snapshot, hệ thống sẽ tiến hành xóa image, trả lại tài nguyên snapshot đã chiếm dụng cho VPC. Người dùng sẽ được thông báo khi quá trình xóa snapshot hoàn thành.

Nếu người dùng tích chọn vào ô “ _Delete all volume snapshots attached to this image_ ” thì những snapshot được tạo từ storage disk gắn trong máy ảo đó sẽ bị xóa.

![file](/img/docs/c3a5551d5777-image-1712653461557.png)

## **Khởi tạo và quản lý snapshot từ storage disk**

### **1\. Khởi tạo snapshot**

**Bước 1** : Ở menu chọn **Storage Disk** , trong phần **Actions** của máy ảo cần tạo snapshot. Chọn **Snapshot** > chọn **Create volume snapshot**

![file](/img/docs/e2a9d5626599-image-1734595578696.png)

**Bước 2** : Nhấn **Create volume snapshot** để tạo

![file](/img/docs/c56185cff578-image-1744797304260.png)

**Bước 3** : Tạo snapshot thành công, hiển thị tại màn hình **Snapshots** trong phần **Storage snapshot**

![file](/img/docs/9cda83377f0f-image-1734595691770.png)

### **2\. Tạo storage disk từ snapshot đã có**

**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Create storage disk**

![file](/img/docs/9bdc6a8e2778-image-1734595729279.png)

**Bước 2** : Nhấn **Create storage disk** để tạo 

![file](/img/docs/03166cff4d90-image-1712653495975.png)

### **3\. Xóa snapshot tạo từ storage disk**

**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Delete Snapshot**

![file](/img/docs/c6454938b3f9-image-1734595780158.png)

**Bước 2** : Nhấn **Delete snapshot** để tiến hành xóa

![file](/img/docs/050d524eaf53-image-1712653549274.png)

## **Khởi tạo và quản lý snapshot đối với loại dịch vụ Specific**

### **1\. Tạo Snapshot cho máy ảo**

**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần tạo snapshot, chọn **Create snapshot**.

![file](/img/docs/1f53740cc3cd-image-1734595898541.png)

**Bước 2** : Chọn **Create** trong popup xác nhận để tiến hành tạo snapshot.

![file](/img/docs/797847d87983-image-1712818258855.png)

Sau khi xác nhận tạo snapshot, hệ thống sẽ tiến hành kiểm tra tài nguyên, tạo image snapshot và thông báo kết quả xử lý.

Trung bình khi khởi tạo snapshot sẽ mất tầm 30 phút, tùy thuộc vào dòng máy và dữ liệu hiện tại trên máy ảo. Người dùng sẽ được thông báo khi quá trình tạo snapshot đã hoàn thành.

Lưu ý: Mỗi instance sẽ được tạo và lưu trữ 1 snapshot. Snapshot tạo được mới nhất sẽ ghi đè lên snapshot đã tạo của instance.

### **2\. Khôi phục máy ảo từ snapshot**

Lưu ý: Thao tác này chỉ áp dụng được cho instance đã tạo snapshot thành công. Người dùng vui lòng kiểm tra instance cần thiết đã có snapshot hay chưa.

**Bước 1** : Ở menu chọn **Instance Management** , , trong phần **Actions** của máy ảo cần khôi phục, chọn **Restore snapshot**.

![file](/img/docs/1725e2ff4982-image-1734596025787.png)

**Bước 2** : Chọn **Restore instance** trong popup xác nhận để tiến hành khôi phục.

![file](/img/docs/db082ce3d098-image-1712818286728.png)

Sau khi xác nhận khôi phục máy ảo từ snapshot, hệ thống sẽ tiến hành khôi phục sau khi kiểm tra dữ liệu snapshot. Trung bình khi khôi phục máy ảo từ snapshot sẽ mất tầm 30 phút, tùy thuộc vào dòng máy và dữ liệu hiện tại trên máy. Trong suốt quá trình này, máy ảo có thể sẽ được tắt, người dùng sẽ không thể thao tác với máy tạm thời cho đến khi quá trình khôi phục hoàn thành.

Người dùng sẽ được thông báo khi quá trình restore đã hoàn tất và máy ảo được bật lại.

### **3\. Xóa instance snapshot**

Lưu ý: Thao tác này chỉ áp dụng được cho instance đã tạo snapshot thành công. Người dùng vui lòng kiểm tra instance cần thiết đã có snapshot hay chưa. Snapshot đã xóa không thể khôi phục lại được. 

Hãy cẩn thận khi thực hiện thao tác này.

**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần xóa image, chọn **Delete snapshot**.

![file](/img/docs/5bcf4544dabf-image-1734596064066.png)

**Bước 2:** Chọn **Delete snapshot**.

![file](/img/docs/c575dc0cb446-image-1712818777331.png)

Sau khi xác nhận xóa snapshot, hệ thống sẽ tiến hành xóa image, trả lại tài nguyên snapshot đã chiếm dụng cho VPC. Người dùng sẽ được thông báo khi quá trình xóa snapshot hoàn thành.

[ Previous Thay đổi thông tin, cấu hình máy chủ ](./tutorials-thay-doi-thong-tin-cau-hinh-may-chu) [ Next Lock & Unlock Instance Deletion ](./lock-unlock-instance-deletion)
