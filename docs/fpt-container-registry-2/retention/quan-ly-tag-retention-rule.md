---
sidebar_label: "Quan ly tag retention rule"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=quan-ly-tag-retention-rule"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Quản lý Tag Retention Rule 


* * *

FPT Cloud hỗ trợ người dùng quản lý các Tag Retention Rule đã được tạo bao gồm Edit enable/disable/delete. 

**_1\. Cập nhật một Tag Retention Rule đã tạo_**

Trường hợp người dùng cần thay đổi một retentions rule đã tạo, có thể thực hiện như sau: 

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Edit** : 

![](/img/docs/011e1b7cef77-Picture34-1.png)

**Bước 2** : Thực hiện cập nhật thông tin cấu hình retention rule: 

![](/img/docs/86268cbd3646-Picture35-1.png)

Trong hộp thoại Edit, cho phép người dùng thay đổi cấu hình của một tag retention rule tương tự việc tạo mới một retentions. 

Ví dụ người dùng có thể thay đổi các repo được áp dụng quy tắc, hoặc thay đổi số lượng artifact được giữ lại, …. 

**Bước 3** : Kết quả sau khi cập nhật một retentions: 

![](/img/docs/de8e7ba187d8-Picture36-1.png)

Ví dụ: 

**For the repositories matching **** **** , **retain the most recently pushed 50 artifacts with tags matching **** **** **with untagged:**

Người dùng vừa thực hiện thay đổi số lượng artifact được giữ lại từ 20 lên 50 artifacts 

**_2\. Disable một Tag Retention Rule_**

Người dùng muốn Disable một Tag Retention Rule đang được cấu hình trong repository có thể thực hiện như sau: 

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Disable** : 

![](/img/docs/24e9ec988fbe-Picture37.png)

**Bước 2** : Kết quả sau khi disable tag retention rule: 

![](/img/docs/1c93acbf968b-Picture38-1.png)

**_3\. Enable Tag Retention Rule đã disable_**

Người dùng muốn Enable một Tag Retention Rule đang được cấu hình trong repository có thể thực hiện như sau: 

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Enable** : 

![](/img/docs/7345b6d1599c-Picture39-1.png)

**Bước 2** : Kết quả sau khi enable Tag Retention Rule 

![](/img/docs/d39631721a19-Picture40-1.png)

**_4\. Delete Tag Retention Rule_**

Người dùng muốn Delete một Tag Retention Rule đang được cấu hình trong repository có thể thực hiện như sau: 

**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Delete** : ![](/img/docs/1a763d9c4a33-Picture41-1.png)

**Bước 2** : Kết quả sau khi delete Tag Retention Rule:

![](/img/docs/004f9073eb1d-Picture42-1.png)

[ Previous Thêm mới Tag Retention Rule  ](./them-moi-tag-retention-rule) [ Next Cấu hình lập lịch chạy Retention Rule  ](./cau-hinh-lap-lich-chay-retention-rule)
