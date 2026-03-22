---
sidebar_label: "Index"
title: "2. FPT Object Storage"
source: "https://fptcloud.com/documents/object-storage/"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Object Storage


FPT Object Storage



## Giới thiệu về Object Storage trên FPT Cloud

**FPT Object Storage** là một dịch vụ lưu trữ đám mây cung cấp bởi FPT Cloud, được thiết kế để lưu trữ và quản lý dữ liệu phi cấu trúc như hình ảnh, video, tài liệu, và các tệp tin lớn khác. Dịch vụ này mang đến khả năng lưu trữ dữ liệu trên quy mô lớn với độ tin cậy cao, tính khả dụng cao và khả năng mở rộng linh hoạt

Được thiết kế và phát triển theo hướng tương thích hoàn toàn với giao thức S3 của Amazon/Azure Blob... Vì vậy khách hàng có thể dễ dàng tích hợp với các ứng dụng và dịch vụ hiện có mà doanh nghiệp đang sử dụng, đồng thời mang lại sự linh hoạt và tiện lợi trong việc quản lý và lưu trữ dữ liệu.

![overview](/img/docs/f482e951d960-2-FPT-Object-Storage-Service_anh-sp-1.png)

## Các đặc điểm chính của FPT Object Storage:

  * **Khả năng mở rộng linh hoạt:** Đáp ứng yêu cầu lưu trữ dữ liệu lớn và có khả năng mở rộng linh hoạt theo nhu cầu của khách hàng mà không gặp giới hạn về mặt kỹ thuật.
  * **Đảm bảo an toàn dữ liệu:** Dữ liệu được mã hóa cả khi lưu trữ và trong quá trình truyền tải, đảm bảo an toàn tuyệt đối cho thông tin của khách hàng. Hỗ trợ các tính năng nâng cao như Versioning, SSE-C,…
  * **Khả năng tích hợp:** Tương thích với giao thức Amazon S3 và Azure Blob, cho phép kết nối và sử dụng trên các S3 client/SDK, API phổ biến. Điều này giúp dễ dàng tích hợp với các ứng dụng hiện có của doanh nghiệp và chuyển dịch hệ thống về FPT Cloud.
  * **Quản lý truy cập chặt chẽ:** Hỗ trợ các tính năng phân quyền như FPT IAM, bucket policy, bucket ACL, Object ACL, SubUser, giúp người dùng kiểm soát chặt chẽ việc truy cập và quản lý dữ liệu.
  * **Quản lý dễ dàng trên Unify Portal:** Giao diện trực quan của FPT Unify Portal giúp người dùng dễ dàng quản lý, theo dõi và thao tác với dữ liệu.
  * **Tối ưu hóa chi phí:** Khách hàng chỉ phải trả chi phí cho tài nguyên thực tế sử dụng (Pay-As-You-Go). Có thể tối ưu chi phí với các gói khác nhau phù hợp với nhu cầu sử dụng.

### Lợi ích:

  * **Độ tin cậy cao:** Với hệ thống lưu trữ phân tán, dữ liệu luôn được bảo vệ và có thể truy cập bất cứ lúc nào, ngay cả khi xảy ra sự cố phần cứng.
  * **Hiệu suất cao:** Được thiết kế để xử lý khối lượng dữ liệu lớn với tốc độ nhanh, đáp ứng yêu cầu về thời gian truy cập của các ứng dụng hiện đại.
  * **Dễ sử dụng:** Giao diện quản lý trực quan, giúp người dùng dễ dàng thao tác và quản lý dữ liệu.

FPT Object Storage là giải pháp lý tưởng cho doanh nghiệp cần lưu trữ dữ liệu mạnh mẽ, an toàn và dễ dàng tích hợp với các hệ thống hiện có.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Sử dụng Object Storage trên FPT Portal ](./initial/tutorials-su-dung-object-storage-tren-fpt-portal)
    * [ Bucket ](./initial/tutorials-bucket)
    * [ Object ](./initial/tutorials-object)
    * [ Permissions ](./advanced/tutorials-permissions)
    * [ Bucket Config ](./initial/tutorials-bucket-config)
    * [ Encryption ](./advanced/tutorials-encryption)
  * [ Quản lý Access Key ](./initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal)
  * [ Quản lý SubUser ](./advanced/tutorials-quan-ly-subuser)
  * [ Sử dụng Object Storage trên S3 Browser ](./advanced/tutorials-su-dung-object-storage-tren-s3-client)
  * [ Tích hợp FPT Object Storage với các S3-Client ](./advanced/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client)
  * [ SDK API Reference ](./use-cases/sdk-api-reference)
  * [ Migrate bucket data ](./advanced/migrate-bucket-data)

## Các câu hỏi thường gặp (FAQs) 

## Một số gợi ý mẫu (Samples) 

  * [ Sử dụng FPT Object Storage làm media server ](./use-cases/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application)
  * [ Xây dựng một website tĩnh bằng FPT Object Storage ](./use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage)
  * [ Mount bucket thành ổ đĩa trên máy local ](./advanced/mount-bucket-thanh-o-dia-tren-may-local)
  * [ Clone dữ liệu giữa hai bucket khác nhau ](./advanced/clone-du-lieu-giua-hai-bucket-khac-nhau)
  * [ Phân quyền sử dụng bucket cho các subuser ](./advanced/phan-quyen-su-dung-bucket-cho-cac-subuser)

## Release note

### Object Storage version 2.6

  * **Update UI/UX:** Cải thiện giao diện và trải nghiệm người dùng để thao tác thuận tiện và trực quan hơn.
  * **Update region code in Access Key page:** Hiển thị mã vùng chính xác trên trang Access Key, hỗ trợ quản lý thông tin dễ dàng hơn.

### Object Storage version 2.5

Trước đây người dùng khi sử dụng FPT Object Storage sẽ phải sử dụng tại 2 Portal giữa FPT Cloud và Cloudian. Nhưng giờ đây, người dùng có thể sử dụng dịch vụ trên một giao diện của FPT Cloud Portal. Thêm vào đó, giao diện đã được tối ưu hiển thị các thông số khi khởi tạo access key hay truy cập endpoints, giúp tăng cường độ bảo mật và dễ dàng cho người dùng trên FPT Cloud Portal. 

Ngoài ra, FPT Object Storage cũng tối giản các thao tác cấu hình, tải dữ liệu và khởi tạo Object bucket nhanh chóng giúp tiết kiệm thời gian và dễ dàng sử dụng cho người dùng và quản trị viên. 

Lưu ý: Dịch vụ này chỉ được kích hoạt bởi nhà cung cấp.
