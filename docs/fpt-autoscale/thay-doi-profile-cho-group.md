---
sidebar_class_name: hidden
sidebar_label: "Bước 1: Truy cập trang Autoscaling > Autoscale Group. Trên dòng tương ứng với group cần thay đổi profile, click vào biểu tượng Action menu."
title: "2. FPT Autoscale"
source: "https://fptcloud.com/documents/fpt-autoscale/?doc=thay-doi-profile-cho-group"
parent: "https://fptcloud.com/documents/fpt-autoscale"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Autoscale


Thay đổi Profile cho Group


* * *

## **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng tương ứng với group cần thay đổi profile, click vào biểu tượng **Action menu**.

![](/img/docs/25c9a481bd00-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2Fns3XeTfn.png)

## **Bước 2:** Trong menu, chọn **Update profile**.

![](/img/docs/9ce539d371e4-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FK44KGdgG.png)

## **Bước 3:** Lựa chọn profile mới cho group và chọn **Update**.

![](/img/docs/55e71374d316-spaces-2F18Kpdo0VNH9pUQatMCfo-2Fuploads-2FveDMLeM7.png)

**Current profile** : Profile hiện tại đang được group tham chiếu.

**Change to** : Chọn profile mới sẽ áp dụng cho group.

## Lưu ý

Chỉ các nodes được tạo mới của group được tham chiếu đến profile mới. Các node đã tồn tại trước đó, tiếp tục duy trì tham chiếu tới profile cũ. Có nghĩa là tại một thời điểm, group chỉ tham chiếu một profile, nhưng các nodes thuộc group có thể tham chiếu đến các profiles khác nhau.

[ Previous Giám sát Group ](./giam-sat-group) [ Next Scale thủ công ](./scale-thu-cong)
