---
sidebar_class_name: hidden
sidebar_label: "Tạo Profile"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=tao-profile"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


Tạo Profile


* * *

Sau khi đăng nhập Jupyterhub, người dùng có vai trò **Admin** lựa chọn Menu **Service** > **Profile** , ấn tab **Create Profile**

  * **Profile Name** : tên profile 

  * **Slug** : nhập tên các thư viện cần sử dụng khi Spawn server 

  * **Image** : chọn image sử dụng khi chạy profile từ danh sách 

  * **MODE** : chọn **local**

  * **S3_ACCESSIBLE** : chọn **false** nếu không sử dụng **S3** , chọn **true** nếu sử dụng **S3** và nhập các thông tin 

    * **S3_ENDPOINT** : URL endpoint của S3 service 

    * **S3_ACCESS_KEY** : Access key ID để xác thực với S3 service 

    * **S3_SECRET_KEY** : Secret access key để xác thực với S3 service 

  * **LAKEHOUSE_ENABLED** : chọn **false** nếu không sử dụng kết nối **lakehouse** , chọn **true** nếu sử dụng **lakehouse** và nhập các thông tin 

    * **CATALOG_TYPE** : Loại metadata catalog được sử dụng, lựa chọn Hive hoặc Nessie

    * **CATALOG_URI** : URI kết nối đến metadata catalog 

    * **SPARK_WAREHOUSE_DIR** : Đường dẫn thư mục warehouse cho Apache Spark 

  * **Additional Environment Variables**

    * KEY: nhập tên biến môi trường 

    * Value: nhập giá trị của biên môi trường tương ứng 

  * **CPU Guarantee** : nhập thông tin lượng CPU đảm bảo cho profile khi khởi tạo 

  * **CPU Limit** : nhập thông tin ngưỡng tối đa của CPU khi sử dụng proflie 

  * **Memory Guarantee** : nhập thông tin lượng RAM đảm bảo cho profile khi khởi tạo 

  * **Memory Limit** : nhập thông tin ngưỡng tối đa của RAM khi sử dụng proflie 

  * **Available Worker Pools** : lựa chọn từ danh sách **Worker Pool** từ **service Processing** để chọn môi trường khi Spawn của profile 

  * **Active profile** : tích chọn để profile sau khi tạo ở trạng thái **Active**

Sau khi nhập đầy đủ các thông tin, ấn Create Prolife để hoàn thành tạo mới 

![Hình ảnh](/img/docs/b62967963ee4-image12.png)

Để đảm bảo quyền truy cập của người dùng với catalog của lakehouse, thực hiện phân quyền thư mục trên FPT Cloud Storage: 

  * **Bước 1** : Truy cập <https://console.fptcloud.com/> , chọn menu **Object Storage**

  * **Bước 2** : Tại giao diện **Object Storage Management** , chọn tab **Sub user** , ấn **Create** **SubUser**

![Hình ảnh](/img/docs/3f749a4b5fae-image13-2.png)

  * **Bước 3** : Nhập **Name** cho **Subuser** , **Access level for sub user** chọn **Full**

![Hình ảnh](/img/docs/64db07273eb5-image14-2.png)

  * **Bước 4** : Tại giao diện danh sách **Sub User,** bấm xem chi tiết thông tin, ấn **Generate Key,** sau đó lưu lại thông tin **Access Key** và **Secret Key**

![Hình ảnh](/img/docs/9b85630f69e1-image15-2.png)

  * **Bước 5** : Quay lại giao diện **Object Storage Management** , chọn tab **Buckets.** Tại bucket cần phân quyền cho subuser, chọn Action **Config**

![Hình ảnh](/img/docs/62bd9c6c8348-image16-1.png)

  * **Bước 6** : Tại giao diện chi tiết bucket chọn tab **Bucket Plolicy** , ấn **Add Policy Statement**

![Hình ảnh](/img/docs/bd65e274febf-image17-1.png)

  * **Bước 7** : Tại giao diện **Add Policy Statement**

    * **Sid** : nhập statement ID 

    * **Effect** : chọn **Allow**

    * **Principal** : chọn danh sách subuser 

    * **Action** : Tích chọn **Action** , tích chọn *_All S3 Actions (s3._)** 

    * **Resource (ARN)** : nhập thông tin resource theo format, chỉ định subuser tới chính xác thư mục chứa **catalog** được quyền 

Ấn **Add** để hoàn thành cấu hình **Policy Statement**

Sau khi tạo, thông tin profile hiện thị tại tab **Profile List**

![Hình ảnh](/img/docs/4376c6f5b349-image18-1.png)

[ Previous Thêm người dùng ](./them-nguoi-dung) [ Next Phân quyền người dùng sử dụng profile ](./phan-quyen-nguoi-dung-su-dung-profile)
