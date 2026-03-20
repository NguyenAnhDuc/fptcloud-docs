---
sidebar_label: "2. Managed – FPT Database Engine"
title: "2. Managed – FPT Database Engine"
source: "https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Thao-tac-voi-DB-Proxy"
parent: "https://fptcloud.com/documents/managed-fpt-database-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engine


Thao tác với DB Proxy


* * *

**Bước 1:** Xem danh sách DB Proxy

  * Status = **Running** : DB Proxy đã tạo thành công
  * Status = **Processing** : DB Proxy đang được tạo 
    * Có action: **Start/Stop/Restart/Resize/Delete/Detail**
  * Status = **Failed** : DB Proxy bị tạo lỗi 
    * Có action: **Delete.**

![](/img/docs/9688a7246d7c-DBThta-1.png)

**Trường hợp 1: Stop DB Proxy**

  * DB Proxy phải ở trạng thái = Running.
  * Chọn Actions ở DB Proxy cluster ID quý khách muốn stop
  * Chọn **Stop**

![](/img/docs/5603f1dc67d6-DB-Stop1.png)

• Xuất hiện popup **Stop Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Stop.**

![](/img/docs/5a8afe964c98-DB-Stop2.png)

  * DB Proxy sẽ ở trạng thái **Stopping** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

![](/img/docs/b375b7c08b1d-DB-Stop3.png)

**Trường hợp 2: Start DB Proxy**

  * DB Proxy ở trạng thái **Stopped**
  * Tại cột Action quý khách bấm **Start**

![](/img/docs/ad5fc12ba4fa-DB-Start1.png)

  * Xuất hiện popup **Start Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Start**

![](/img/docs/b12a86fab757-DB-Start2.png)

  * DB Proxy sẽ ở trạng thái **Starting** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

![](/img/docs/1a85e282ba6a-DB-Start3.png)

**Trường hợp 3: Restart DB Proxy**

• **DB Proxy** ở trạng thái Running.

• Tại cột **Action** quý khách bấm **Restart**

![](/img/docs/20aee5889393-DB_restart.png)

• Xuất hiện popup **Restart Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Restart.**

![](/img/docs/ca969ed60aa9-DB_restart2.png)

• **DB Proxy** sẽ ở trạng thái **Restarting** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

![](/img/docs/76af49ff221d-DB_restart3.png)

**Trường hợp 4: Resize DB Proxy**

  * DB Proxy ở trạng thái **Running**.
  * Tại cột Action quý khách bấm **Resize.**

![](/img/docs/26443919d942-DB_resize1.png)

  * Xuất hiện popup **Resize DB Proxy** , quý khách nhập thông tin vCPU và RAM, bấm **Resize DB Proxy.**

![](/img/docs/46fc1c9b5bc2-DB_resize2.png)

  * DB Proxy sẽ ở trạng thái **Resizing** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

![Alt text](/img/docs/1d61f76b209c-DB_resize3.png)

**Trường hợp 5: Delete DB Proxy**

  * DB Proxy ở trạng thái **Running** /**Stopped/Failed**
  * Tại cột Action quý khách bấm **Delete**

![](/img/docs/79ffa16dadb7-DB_delete1.png)

  * Xuất hiện popup **Delete Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Delete**

![](/img/docs/e50a6b16218e-DB_delete2.png)

  * DB Proxy sẽ ở trạng thái **Deleting** và không thể thao tác gì thêm cho tới khi hệ thống process xong

![](/img/docs/14ab9e834c47-DB_delete3.png) **Trường hợp 6: Detail DB Proxy**

  * DB Proxy ở trạng thái **Running**
  * Tại cột Action quý khách bấm **Detail**

![](/img/docs/98be4280d12a-DB_Detail1.png)

  * Xuất hiện popup **DB Proxy Detail** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Close** để tắt popup

![](/img/docs/8b026bcec87b-DB_Detail2.png)

[ Previous Khởi tạo DB Proxy ](./khoi-tao-db-proxy)
