---
sidebar_class_name: hidden
sidebar_label: "Tinh nang dat lich hibernate wake up"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-dat-lich-hibernate-wake-up"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng Đặt lịch Hibernate & Wake-up


* * *

Tiếp nối với tính năng Hibernate & Wake-up trực tiếp trên Portal, FPT Cloud cung cấp dịch vụ Đặt lịch Hibernate & Wake-up, giúp người dùng có thể Hibernate & Wake-up cụm một cách tự động.

FPTCloud cho phép người dùng có thể cài đặt, chỉnh sửa xoá một hoặc nhiều lịch cùng lúc tuỳ theo nhu cầu.

**Bước 1:** Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management** ![](/img/docs/0109824e4c11-Picture13-1.png)

**Bước 2:** Truy cập vào trang thông tin chi tiết của cụm và lựa chọn Schedule Hibernation trong mục Advanced để cài đặt lịch ![](/img/docs/2c3c6a86fd16-Picture14-1.png)

**Bước 3:** Truy cập vào trang thông tin chi tiết của cụm và lựa chọn Schedule Hibernation trong mục Advanced để cài đặt lịch ![](/img/docs/f144a48406d9-Picture15-1.png)

**Bước 4:** Lựa chọn thời điểm để Wake-up cụm và Hibernate cụm (Timezone: UTC +7)

  * _Cách 1: Bấm vào icon lịch ở mỗi trường để cài đặt thời gian_ ![](/img/docs/47d859ec38fb-Picture16-1.png)

  * _Cài đặt theo đồng hồ_ ![](/img/docs/2ecfd828be04-Picture17-1.png)

  * _Cách 2: Nhập trực tiếp thời gian theo diện text_ ![](/img/docs/8c63c9fb98da-Picture18-1.png)

**Bước 5:** Thêm/ xóa lịch

  * _Thêm lịch_ ![](/img/docs/971ccfe94d28-Picture19-1.png)

  * _Xóa lịch_ ![](/img/docs/22355561ea37-Picture20-1.png)

**Bước 6:** Lưu lịch mới sau khi khởi tạo/ thay đổi ![](/img/docs/10c054b13f04-Picture21-1.png) Lúc này, hệ thống sẽ trả về trạng thái _Success_ nếu như lịch của người dùng đã được cập nhật vào hệ thống thành công. Bên cạnh đó, ở phần hiển thị sẽ hiện lên khoảng thời gian cho đến thời điểm Hibernate/ Wakeup gần nhất. ![](/img/docs/9ff6a66aa858-Picture22-1.png) _Chú ý:_ Người dùng có thể tạo hoặc xoá nhiều lịch cùng 1 lúc, với nhiều ngày, nhiều thời gian khác nhau. Tuy nhiên, chú ý các khoảng thời gian giữa thời điểm Hibernate và Wake-up cần cách nhau ít nhất 15 phút.

[ Previous Tính năng Hibernate & Wake-up  ](./tinh-nang-hibernate-wakeup) [ Next Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version) ](./tu-dong-nang-cap-version)
