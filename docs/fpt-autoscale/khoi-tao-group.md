---
sidebar_class_name: hidden
sidebar_label: "2. FPT Autoscale"
title: "2. FPT Autoscale"
source: "https://fptcloud.com/documents/fpt-autoscale/?doc=khoi-tao-group"
parent: "https://fptcloud.com/documents/fpt-autoscale"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Autoscale


Khởi tạo Group


* * *

## **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Chọn **Create group**.

![create group](/img/docs/aeae77df8658-Screenshot-2024-10-02-014656.png)

## **Bước 2:** Một hộp thoại sẽ xuất hiện. Thực hiện cấu hình các thông số.

![create group form](/img/docs/401c4b95ba26-create_group.png)

**Group name** : Nhập tên group sao cho dễ quản lý nhất. Tên phải từ 6 đến 20 kí tự, chỉ bao gồm kí tự chữ cái latin, số, và dấu gạch dưới.

**Group profile** : Chọn profile đã tạo trước đó làm tham chiếu cơ sở cho group.

**Desired capacity** : Số node mong muốn khởi tạo trong group, bắt buộc phải lớn hơn hoặc bằng **Min size** và nhỏ hơn hoặc bằng **Max size** của group. Đây là số lượng node sẽ được khởi tạo dựa trên profile đã chọn khi group được khởi tạo.

**Min size** : Thông số chặn dưới của group, đảm bảo số node tối thiểu trong quá trình vận hành group (tránh gây gián đoạn dịch vụ). Giá trị mặc định là 0, tuy nhiên giá trị được đề xuất là 2 để đảm bảo group sẽ luôn có 2 nodes được duy trì trong group trước bất kỳ hành động gây giảm số lượng node nào.

**Max size** : Thông số chặn trên của group, đảm bảo số node tối đa trong quá trình vận hành group (tránh gây tiêu tốn tài nguyên mà không có kiểm soát). Giá trị mặc định là 10 đảm bảo group chỉ chứa tối đa 10 nodes được khởi tạo trong group trước bất kỳ hành động gây tăng số lượng node nào.

## **Bước 3:** Chọn **Create**.

Hệ thống sẽ thực hiện kiểm tra lại thông tin về hạn ngạch tài nguyên còn lại trong VPC và tạo group. Group được tạo sẽ hiển thị trong trang danh sách groups với trạng thái **Creating**.

![list group creating](/img/docs/969654923942-creating-group.png)

Tùy vào số node đã điền ở Desired capacity mà thời gian tạo group nhanh hay chậm. Khi trạng thái chuyển từ **Creating** sang **Active** , group đã sẵn sàng.

![list group active](/img/docs/e4a39361fb28-active-group.png)

Có thể xem thông tin chi tiết của group bằng cách click vào tên group tương ứng trên danh sách:

![view group detail](/img/docs/5b0574c3c465-Screenshot-2024-10-02-023725.png)

![group detail page](/img/docs/d1bf88fa827c-screencapture-console-fptcloud-000823-INFRA-AUTOMA.png)

[ Previous Quản lý Group ](./quan-ly-group) [ Next Giám sát Group ](./giam-sat-group)
