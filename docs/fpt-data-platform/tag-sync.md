---
sidebar_class_name: hidden
sidebar_label: "Tag Sync (OpenMetadata & Ranger Integration)"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=tag-sync"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


Tag Sync (OpenMetadata & Ranger Integration)


* * *

Tính năng **Tag Sync** cho phép đồng bộ tag từ **OpenMetadata** sang **Apache Ranger** , giúp mở rộng quản lý phân quyền trong **Trino** dựa trên tag (bên cạnh resource). 

**Các bước thực hiện**

**_Bước 1: Portal_**

Trên Portal, cần tạo đủ 3 thành phần: 

  1. OpenMetadata 
  2. Apache Ranger 
  3. Trino 

Khi tạo **Trino cluster** , phải tick chọn **Integrate Ranger** để cho phép Trino sử dụng phân quyền từ Ranger. 

**_Bước 2: Tạo Resource Policies cho Trino trong Ranger_**

Vào **Ranger > Service Manager > Tab Resource** → chọn service Trino vừa tạo (ví dụ: trino-msu9test). 

**Lưu ý:** Tên service phải trùng với cus_app_id của Trino. 

Đây là điều kiện bắt buộc để Trino có thể hoạt động và OpenMetadata có thể test connection thành công. Nếu thiếu các Resource Policies cơ bản, khi tạo Trino service trong OM → Test Connection sẽ thất bại. 

**_Bước 3: Tạo Trino Service trong OpenMetadata_**

  1. Vào **OpenMetadata > Settings > Services > Databases** → click **Add New Service**. 

![Alt text](/img/docs/de75fed4372b-41-scaled.png)

  2. Chọn **Trino** → click **Next**. 

  3. Điền thông tin service: 

**Service Name** (ví dụ: trino-tester). 

**Username, Password, Host, Port** (trỏ đến cluster Trino vừa tạo ở portal). 

  4. Nhấn **Test Connection** → nếu thành công thì **Save**. 

  5. Vào tab **Ingestion** của service Trino → click **Add Ingestion**.

Điền Database/Schema/Table Filter Pattern. 

Run ingestion.

  6. Sau khi ingestion thành công, DB Trino hiển thị trong **Explore**. 

  7. Vào **Explore > Database Trino** → gán tag cho column (VD: tag _Sensitive_ cho cột custkey trong bảng customer). 

![Alt text](/img/docs/ca0779df0e22-42-scaled.png)

**_Bước 4: Tạo Tag Service & Trino Service trong Ranger_**

  1. Vào **Ranger dashboard > Service Manager > Tab Tag** → click **Add New Service** để tạo **Tag Service** trước (VD: trino-msu9test-tag). 

![Alt text](https://fptcloud.com/wp-content/uploads/2024/07/43-scaled.png)

  2. Vào **Service Manager > Tab Resource** → edit **Service Trino** (VD: trino-msu9test). 

Trong config service Trino → field **Select Tag Service** = trino-msu9test-tag. 

![Alt text](/img/docs/7a3a8ebf450d-44-scaled.png)

  3. Vào **Settings > Users** → click **Add New User** : 

Tạo user (VD: usertest) với role = User. 

Username phải trùng với user đã tạo ở Trino portal. 

![Alt text](/img/docs/27e8146c2d4b-45-scaled.png)

![Alt text](/img/docs/89c22e3bb6ca-46-scaled.png)

  4. Vào **Resource Policies** → add user usertest vào các policy mặc định 

a. Kiểm tra/Thêm các policy mặc định: 

     * **all – trinouser**

     * **all - queryid**

b. Thêm policy mới (**policy-customer-access**): 

     * Catalog = tpch 

     * Schema = sf1, information_schema 

     * Table = customer, columns, schemata, tables 

     * Column = custkey 

**Lưu ý** : information_schema, columns, schemata, tables → cần thiết cho Trino đọc metadata (show tables, describe, etc). 

![Alt text](/img/docs/95aba7811553-47-scaled.png)

customer → bảng business mà bạn muốn allow. 

c. Trong **Allow Conditions** , add user (VD: usertest) → Permission = Select. 

d. Save policy. 

![Alt text](/img/docs/1465322ff876-49-scaled.png)

**_Bước 5: Cấu hình Tag Sync trên Ranger Service_**

  1. Vào **Data Platform > Data Governance (Ranger) > Advanced > Tag Sync**. 

  2. Tick chọn **Enable Tag Sync**. 

  3. Lấy **JWT Token** từ OpenMetadata: 

Vào **Settings > Bots** → chọn bot tagsync-bot → tab **Credentials** → copy token. 

Dán vào trường **JWT Token**. 

  4. Tại phần **Service mappings** , chọn: 

**OpenMetadata service** = Trino service vừa tạo ở OpenMetadata. 

**Ranger service** = service Trino vừa tạo trong Ranger. 

Bắt buộc ≥ 1 mapping, tối đa 5 mapping. 

  5. Nhấn **Test Connection**. 

Nếu thành công → hiển thị _“Connection successful”_ , nút **Save** bật. 

Nếu thất bại → hiển thị lỗi, không thể Save. 

  6. Khi **Test Connection** thành công, nhấn **Save** để lưu cấu hình. 

![Alt text](/img/docs/6f349e0e194b-50-scaled.png)

**_Bước 6:_** Vào **Tag Policies** → chọn tag _Sensitive_ → click **Add New Policy** : 

  1. Policy Name: allow-sensitive. 

  2. Allow Conditions: user = usertest, component = TRINO, tích tất cả permission. 

  3. Save. 

![Alt text](/img/docs/24cf16758549-51-scaled.png)

**_Bước 7: Kiểm thử quyền truy cập bằng query_**

**_Chỉ cấp quyền cho usertest vào bảng customer, bảng orders usertest không có quyền query_**

**Case 1 – User được Allow & có quyền query cột custkey**

  1. Dùng **DataGrip** kết nối Trino bằng user usertest. 

  2. Chạy query: 

`SELECT custkey FROM tpch.sf1.customer LIMIT 1;`

  3. **Kết quả mong đợi:** dữ liệu bảng được trả về. 

**Case 2 – User được Allow & không quyền query bảng**

  1. **DataGrip** kết nối Trino bằng user usertest. 

  2. Chạy query: 

`SELECT * FROM tpch.sf1.customer LIMIT 1;`

  3. **Kết quả mong đợi:** query bị từ chối, thông báo _không có quyền_. 

**Case 3 – User bị Deny & không có quyền query cột custkey**

  1. Tạo thêm user khác (VD: usertest2). 

  2. Gán tag Personal cho cột custkey 

  3. Trong **Tag Policies** → tạo policy Deny - tag Personal - cho user usertest2. 

  4. Dùng **DataGrip** kết nối Trino bằng user usertest2. 

  5. Chạy query: 

`SELECT custkey FROM tpch.sf1.customer LIMIT 1;`

  6. **Kết quả mong đợi:** query bị từ chối, thông báo _không có quyền_.

[ Previous Truy cập và cấu hình quản lý Query Engine  ](./cau-hinh-va-quan-ly-query-engine) [ Next Xóa Ranger ](./xoa-ranger)
