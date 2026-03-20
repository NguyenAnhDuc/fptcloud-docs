---
sidebar_label: "2. Managed – FPT Database Engine"
title: "2. Managed – FPT Database Engine"
source: "https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Quan-ly-Restore"
parent: "https://fptcloud.com/documents/managed-fpt-database-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engine


Quản lý Restore


* * *

**1 Tạo Restore Point**

Để có thể sử dụng được tính năng restore, quý khách cần có • Một Database Engine đã được tạo (provision) thành công • Ít nhất một job backup đã được tạo và chạy qua 1 mốc thời gian schedule

**Bước 1:** Chọn **Database Engine** > Chọn một **ID Cluster** > trên *_Database Detail_ , chọn tab **Restore**

![](/img/docs/0a621b7a000b-6.3_buoc-1.png)

• Sau khi có một bản Backup được chạy, tại tab **Available Restore point** hiển thị **Restore Point** có một bản **Backup Type.**

o Job Full sẽ tạo ra 1 restore point với backup type **Full**

o Job Diff sẽ tạo ra 1 restore point với backup type **Diff**

![](/img/docs/69d07b9242bb-6.3-buoc1.1.png)

• Tại cột **Actions** bấm vào dấu 3 chấm > chọn **Restore**

![](/img/docs/8262cfcb6ee4-6.3-buoc1.2.png)

![](/img/docs/028093c262b2-6.3-buoc1.3.png)

• Màn hình xuất hiện popup **Restore Database** , quý khách có thể lựa chọn cấu hình lại cho Restored Database bằng cấu hình có sẵn Preset Configuration hoặc cấu hình Custom Configuation do khách hàng tự nhập theo quota cho sẵn. • Sau đó nhấn **Restore**

![](/img/docs/c1e933e8f23b-6.3-buoc1.4.png)

![](/img/docs/42e59be4d554-6.3-buoc1.5.png)

• Sau khi một Restore tạo thành công, trên Database Management sẽ xuất hiện Id Cluster mới có tên Restore + tên ID Cluster mới from Id Cluster cũ.

![](/img/docs/4b4c88c37b56-6.3-buoc1.6.png)

[ Previous Cập nhật và xóa Backup Service ](./cap-nhat-va-xoa-backup-service) [ Next Quản lý Resource ](./quan-ly-resource)
