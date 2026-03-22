---
sidebar_label: "Quan ly retention run"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=quan-ly-retention-run"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Quản lý Retention Run 


* * *

Người dùng có thể quản lý danh sách các Retention Run đã chạy quy tắc. Ngoài ra người dùng có thể chạy thủ công các quy tắc, chạy DRY RUN để kiểm tra cấu hình quy tắc, ABORT một retentions đang chạy, xem chi tiết mỗi lần chạy quy tắc và logs đã chạy. 

**_1\. Chạy các quy tắc thử công với RUN NOW_**

Để thực hiện chạy quy tắc, người dùng có thể thực hiện như sau: 

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > **RUN NOW**

![](/img/docs/1310d2d83907-Picture48-1.png)

**Bước 2** : Click **OK** để confirm chạy Retentions: 

![](/img/docs/ad9995a4cd15-Picture49-1.png)

**Bước 3** : Kết quả sau khi chạy Retention 

![](/img/docs/67a919038911-Picture50-1.png)

**_2\. Chạy Retention với DRY RUN_**

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > **DRY RUN**

![](/img/docs/6b16d900d818-Picture51-1.png)

**Bước 2** : Kết quả sau khi chạy DRY RUN 

![](/img/docs/b8c3c76aa00a-Picture52-1.png)

Khác với chạy **RUN NOW, DRY RUN** sẽ không thực sự xoá các images trên repository 

**_3\. Abort một Retention Run_**

Người dùng có thể Abot một Retention đang Running thực hiện như sau: **Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > click retentions đang **Running** > **ABORT**

![](/img/docs/aedc2cf257e5-Picture53-1.png)

**Bước 2** : Click **OK** để confirm hành động Abort 

![](/img/docs/a4f9fc84035e-Picture54.png)

**Bước 3** : Kết quả sau khi thực hiện Abort 

![](/img/docs/6ea6d35a6c4c-Picture55.png)

**_4\. Xem danh sách các retention run_**

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy**

![](/img/docs/d461b01d0e65-Picture56.png)

**_5\. Xem logs một retention run_**

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Click vào một Retention run để xem chi tiết một task run

![](/img/docs/cd40bdbde7ad-Picture57.png)

**Bước 2** : Kiểm tra logs chạy retentions run cho một repository: 

![](/img/docs/6d27606aa4d0-Picture58.png)

[ Previous Cấu hình lập lịch chạy Retention Rule  ](./cau-hinh-lap-lich-chay-retention-rule) [ Next Quản lý Robot Account  ](./quan-ly-robot-account)
