---
sidebar_class_name: hidden
sidebar_label: "Alert"
title: "2. Relation management"
source: "https://fptcloud.com/documents/relation-management/?doc=alert"
parent: "https://fptcloud.com/documents/relation-management"
lang: vi
converted: "2026-03-19"
---

# 2. Relation management


Alert


* * *

Để tạo alert, bạn thao tác theo hướng dẫn sau:

**Bước 1** : Vào Home >> Alerting >> Alert rules >> Click New alert rule

![Alt text](/img/docs/ffd111327f5c-Picture37.png)

**Bước 2** : Người dùng config các thông tin alert

**Ví dụ demo tạo alert khi node k8s trong tag FMON-DEMO not ready.**

• Đầu tiên, nhập tên alert vào mục 1. Enter alert rule name

![Alt text](/img/docs/97d2242c6922-Picture39.png)

• Tiếp theo, config thông tin trong mục 2. Define query and alert condition

Với ví dụ trên, nhập query để lấy ra danh sách các node ready (Gọi là bảng A) >> Preview

![Alt text](/img/docs/2b9cb85f2497-Picture40.png)

• Tiếp theo, bạn Add query, chọn datasource là fci-relation-datasource >> Chọn tag, component và nhập response key. Lúc này, hệ thống sẽ trả ra các cluster nằm trong tag FMON-DEMO với component tương ứng (Gọi là bảng C)

![Alt text](/img/docs/7c9af83b998c-Picture41.png)

• Tiếp đến, bạn Add expression kiểu là Reduce, function= Last để lấy giá trị mới nhất của time series (Gọi là bảng D)

![Alt text](/img/docs/c225abfe534c-Picture42.png)

• Add expression với kiểu là Math, merge giữa hai bảng D và C để lọc ra những metric có cluster name trong component ở bảng C (Gọi là bảng E)

![Alt text](/img/docs/67131a9c4d70-Picture43.png)

• Cuối cùng, Add expression với kiểu là Threshold với input là E, điều kiện là IS_BELOW 1. Tức là nếu giá trị thỏa mãn điều kiện là <1 thì lúc này sẽ bắn alert, ngược lại >=1 là Normal.

![Alt text](/img/docs/c63498f21e23-Picture44.png)

Với ví dụ trên, ở bảng E các metric đều có giá trị bằng 1 nên trạng thái là Normal. 

**Bước 3** : Sau khi config các thông tin xong, bạn cần Save rule để bảo toàn thông tin.

[ Previous Dashboard ](./dashboard)
