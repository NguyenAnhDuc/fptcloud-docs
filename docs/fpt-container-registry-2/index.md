---
sidebar_label: "Trang chủ"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


FPT Container Registry



**FPT Container Registry** là dịch vụ máy chủ cung cấp tài nguyên lưu trữ các container image được cung cấp bới FPT Cloud. Người dùng có thể đơn giản hóa và thống nhất quản lý toàn bộ vòng đời của sản phẩm, bao gồm lưu trữ, bảo mật, tạo bản sao, quản trị.., và có thể tích hợp với các công cụ DevOps, CI/CDs, Kubernetes Engine, các Virtual Machines.

Bài viết này sẽ cung cấp cho bạn thông tin về những điều bạn nên cân nhắc trước khi sử dụng **FPT Container Registry** , cách bạn tạo và quản lý nó.

**Những điều cần lưu ý trước khi sử dụng FPT Container Registry?**

  * **_Vị trí địa lý đặt Container Registry_** : Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ pull, push image đến máy chủ Container Registry trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ.

  * **_Số lượng Repository và dung lượng của từng Repository cần sử dụng_** : Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho Container Registry, bạn nên xác định số lượng Repository cần tạo và dung lượng tối đa của từng Repository để FPT Cloud hỗ trợ bạn tốt nhất.

##  Trang chủ 

## Overviews 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Kích hoạt dịch vụ FPT Container Registry ](./initial/kich-hoat-dich-vu-fpt-container-registry)
    * [ Kiểm tra thông tin gói dịch vụ ](./initial/kiem-tra-thong-tin-goi-dich-vu)
    * [ Kích hoạt dịch vụ ](./kich-hoat-dich-vu)
  * [ Hướng dẫn sử dụng trên Docker CLI ](./images/huong-dan-su-dung-tren-docker-cli)
    * [ Docker Login ](./images/docker-login)
    * [ Tag và Push image lên FPT Container Registry ](./images/tag-va-push-image-len-fpt-container-registry)
    * [ Pull docker image từ FPT Container Registry về local ](./images/pull-docker-image-tu-fpt-container-registry-ve-local)
  * [ Quản lý Repositories trên FPT Portal ](./images/quan-ly-repositories-tren-fpt-portal)
    * [ Xem danh sách Repositories ](./images/xem-danh-sach-repositories)
    * [ Xóa Image hoặc Artifact trong Repositories ](./images/xoa-image-hoac-artifact-trong-repositories)
  * [ Quản lý Retention Rule ](./retention/quan-ly-retention-rule)
    * [ Thêm mới Tag Retention Rule ](./retention/them-moi-tag-retention-rule)
    * [ Quản lý Tag Retention Rule ](./retention/quan-ly-tag-retention-rule)
    * [ Cấu hình lập lịch chạy Retention Rule ](./retention/cau-hinh-lap-lich-chay-retention-rule)
    * [ Quản lý Retention Run ](./retention/quan-ly-retention-run)
  * [ Quản lý Robot Account ](./robot-account/quan-ly-robot-account)
    * [ Tạo mới Robot Account ](./robot-account/tao-moi-robot-account)
    * [ Xem danh sách Robot Account ](./robot-account/xem-danh-sach-robot-account)
    * [ Cập nhật Robot Account ](./robot-account/cap-nhat-robot-account)
    * [ Disable Robot Account đang sử dụng ](./robot-account/disable-robot-account-dang-su-dung)
    * [ Enable Robot Account ](./robot-account/enable-robot-account)
    * [ Xoá một Robot Account ](./robot-account/xoa-mot-robot-account)
    * [ Refresh Robot Account ](./robot-account/refresh-robot-account)
    * [ Hướng dẫn sử dụng Robot Account ](./robot-account/huong-dan-su-dung-robot-account)
  * [ Quản lý Gói dịch vụ ](./initial/quan-ly-goi-dich-vu)
    * [ Xem chi tiết Quota dịch vụ ](./cem-chi-tiet-quota-dich-vu)
    * [ Hướng dẫn nâng gói dịch vụ đang sử dụng ](./initial/huong-dan-nang-goi-dich-vu-dang-su-dung)
  * [ Scan Images ](./images/scan-image)
    * [ Scan Image ](./images/scan-image-1)
    * [ Stop Scan ](./images/stop-scan)
    * [ Quản lý kết quả Scan images ](./images/quan-ly-ket-qua-scan-images)

## Các câu hỏi thường gặp (FAQs) 

## Một số gợi ý mẫu (Samples) 

## Release note

### Ra mắt dịch vụ FPT Container Registry

FPT Cloud chính thức ra mắt dịch vụ Container Registry trên giao diện Portal. Dịch vụ FPT Container Registry cung cấp cho khách hàng dịch vụ lưu trữ các image container của tổ chức và doanh nghiệp. Sử dụng dịch vụ FPT Container Registry, khách hàng có thể đơn giản hóa và thống nhất quản lý toàn bộ vòng đời của container, bao gồm lưu trữ, bảo mật, tạo bản sao, quản trị container image, thuận tiện cho việc quản lý số lượng lớn docker image, đồng thời có thể tích hợp qua các môi trường khác, như các công cụ DevOps, Kubernetes engine, các Virtual Machines. 

_Lưu ý: Dịch vụ này chỉ được kích hoạt bởi Tenant Owner._

**Các lợi ích của việc sử dụng FPT Cloud Container Registry**

  * Khách hàng được cung cấp kho lưu trữ image đồng nhất với các dịch vụ mà FPT Cloud đang cung cấp, trên nền tảng dịch vụ lưu trữ S3.

  * Dễ dàng tích hợp vào các hệ thống CI/CD giúp triển khai ứng dụng lên các môi trường khác nhau.

  * Không giới hạn số lần pull/push imageFPT Cloud có các region Hà Nội và TP HCM, cho phép doanh nghiệp có thể lưu trữ thuận tiện cho việc tải và nạp image với tốc độ cao.

