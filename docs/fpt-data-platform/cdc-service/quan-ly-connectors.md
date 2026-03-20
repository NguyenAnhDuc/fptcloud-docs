---
sidebar_label: "2. FPT Data Platform"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=quan-ly-connectors"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


Quản lý Connectors


* * *

Hiển thị thông tin các **Connector** của **Query engine**

![Hình ảnh](/img/docs/fe5e6ffeb712-image4a.png)

**Thêm Connector:**

  * **Bước 1** : Tại màn hình **Connectors** , Ấn **Create a connector** , Chọn **Connector Type** là **Iceberg Catalog – Hive**

  * **Bước 2** : Nhập thông tin cho **Connector**

    * **Enable S3 SSE:**

      * Mọi file ghi lên S3 được mã hoá tự động. Khi bạn xem hoặc tải file, Workspace tự giải mã. → Tăng mức bảo mật dữ liệu. 

      * Keyvault: chọn keystore bạn đã tạo (Tạo Keystore) 

      * Không bật S3 SSE → file lưu nguyên bản, không mã hoá. 

    * **Catalog name** : tên Catalog

    * **Catalog type** : nhập hive

    * **Catalog URL** : địa chỉ kết nối Hive Metastore

    * **File Format** : định dạng file (parquet/orc/avro)

    * **Default Warehouse Directory** : đường dẫn thư mục (**s3a:// /path**)

    * **S3 Endpoint** : địa chỉ truy cập S3 (https://)

    * **S3 Access Key** : Khoá truy cập

    * **S3 Secret Key** : Mã truy cập

  * **Bước 3** : Ấn **Create** để tạo **Connector** , ấn **Cancel** để huỷ bỏ (sau khi Create Connector, Query Engine chuyển trạng thái **Processing** và thực hiện tạo cấu hình **~3 phút**)

![Hình ảnh](/img/docs/2524d553d964-image4b.png)

**Xoá Connector**

  * **Bước 1** : Tại màn hình **Connectors** , chọn connector name cần xoá, chọn Action > Delete

  * **Bước 2** : Xác nhận xoá hoặc huỷ bỏ thao tác xoá tại hộp thoại xác nhận

![Hình ảnh](/img/docs/9b9658e3c236-image4c.png)

[ Previous Xóa Query Engine  ](./xoa-query-engine) [ Next Quản lý Users ](./quan-ly-users)
