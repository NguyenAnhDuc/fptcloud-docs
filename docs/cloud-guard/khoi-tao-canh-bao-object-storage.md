---
sidebar_class_name: hidden
sidebar_label: "Khoi tao canh bao object storage"
title: "2. FPT Cloud Guard"
source: "https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-object-storage"
parent: "https://fptcloud.com/documents/cloud-guard"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud Guard


Khởi tạo cảnh báo cho Object Storage


* * *

#### Bước 1: Ở menu chọn Security > Cloud Guard, mở tab Resource Alerts và chọn Create Alert.

Để thực hiện tạo cảnh báo cho dịch vụ Object Storage đang sử dụng, chọn **Type** là **Object Storage** ![file](/img/docs/27725bb45f49-image-1696235964781.png) Chọn **Metric Type** , **Apply to** , **Severity** ,cấu hình điều kiện cảnh báo tại **Configure Condition** và chọn người nhận cảnh báo tại **Notify to**
    
    
    Lưu ý: Đối với các cảnh báo cho Object Storage, người nhận cảnh báo phải là Recipient mức Tenant, những Recipient này sẽ được sử dụng chung cho các VPC thuộc Tenant tạo

#### Bước 2: Chọn người nhận cảnh báo hoặc chọn Create recipient here để tạo người nhận mức Tenant

![file](/img/docs/9bb270d8874b-image-1696236659925.png) Tích chọn **Tenant-level recipient** để tạo người nhận cho cả Tenant

#### Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create

![file](/img/docs/bfaa420dc3d6-image-1696237048466.png) Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn.

[ Previous Khởi tạo cảnh báo cho Virtual Machine (VM) ](./khoi-tao-canh-bao-virtual-machine) [ Next Khởi tạo cảnh báo cho Load Balancer ](./khoi-tao-canh-bao-load-balancer)
