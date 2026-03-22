---
sidebar_class_name: hidden
sidebar_label: "Bước 1: Truy cập trang Autoscaling > Autoscale Policy. Trên dòng tương ứng với policy cần xóa, chọn biểu tượng delete."
title: "2. FPT Autoscale"
source: "https://fptcloud.com/documents/fpt-autoscale/?doc=xoa-policy"
parent: "https://fptcloud.com/documents/fpt-autoscale"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Autoscale


Xóa Policy


* * *

## **Bước 1:** Truy cập trang **Autoscaling > Autoscale Policy**. Trên dòng tương ứng với policy cần xóa, chọn biểu tượng **delete**.

![delete policy](/img/docs/37f913432a70-Screenshot-2024-10-02-071116.png)

## **Bước 2:** Một hộp thoại sẽ xuất hiện. Nếu tên policy cần xóa là chính xác, chọn **Delete policy** để xác nhận. Ngược lại, chọn **Cancel** để hủy thao tác.

![delete policy confirmation dialog](/img/docs/f062f4caaa11-Screenshot-2024-10-02-071213.png)

## Lưu ý

Trong trường hợp nhận được thông báo sau:

![delete policy failed becase still linked to a group](/img/docs/ee662fd26cad-Screenshot-2024-10-02-071245.png)

Điều này có nghĩa là policy đang được liên kết với một hoặc nhiều Autoscale Group. Hãy đảm bảo policy đã được detach hoàn tất khỏi tất cả các group trước khi thực hiện lại việc xóa Autoscale Policy.

[ Previous Detach Policy khỏi Group ](./detach-policy-khoi-group)
