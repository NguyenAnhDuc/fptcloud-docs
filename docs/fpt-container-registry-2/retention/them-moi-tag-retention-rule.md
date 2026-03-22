---
sidebar_label: "Them moi tag retention rule"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=them-moi-tag-retention-rule"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Thêm mới Tag Retention Rule 


* * *

Để thêm mới một Tag Retention Rule, người dùng có thể thực hiện như sau: 

**Bước 1** : Trên Menu **FPT Portal** chọn **Container Registry**. Chọn tab **Policy**

![](/img/docs/62a35e57e508-Picture27.png)

**Bước 2** : Chọn **ADD RULES** và nhập thông tin để tạo một tag retention rule: 

![](/img/docs/01eeb19b72e4-Picture28-1.png)

**Bước 3** : Trong menu drop-down Repositories, lựa chọn **matching** hoặc **excluding**. 

![](/img/docs/2c469e515020-Picture29-1.png)

**Bước 4** : Trong text-box Repositories, cấu hình thông tin để xác định các repository được áp dụng các quy tắc: 

Người dùng có thể xác định các repository được áp dụng các quy tắc bằng cách nhập thông tin sau: 

  * Một repository name, ví dụ: **my_repo_1**

  * Danh sách repository được phân tách bằng dấu phẩy, ví dụ: **my_repo_1, my_repo_2, your_repo_3**

  * Một phần repository name với ký tự đại diện

Ví dụ: 

![](/img/docs/4a6d1e327769-Screenshot_6.png)

  * ** để áp dụng cho tất cả các repository trong FPT Container Registry mà người dùng quản lý 

Nếu lựa chọn **matching** , quy tắc sẽ được áp dụng cho tất cả các repository mà bạn xác định. Ngược lại nếu lựa chọn **excluding** , quy tắc sẽ được áp dụng cho tất cả các repository trong dự án ngoại trừ những repository mà bạn xác định. 

**Bước 5** : Trong drop-down menu **By image count or number of days** , xác định số lượng tag cần giữ lại hoặc khoảng thời gian để giữ lại tag 

![](/img/docs/78d8e53ad093-Picture30-1.png)

Lựa chọn | Mô tả  
---|---  
retain the most recently pushed # images | Nhập số lượng tối đa image cần giữ lại, giữ lại những tag được push gần đây nhất, không phân biệt độ tuổi tối đa cho một image  
retain the most recently pulled # images | Nhập số lượng tối đa image cần giữ lại, chỉ giữ lại những images được pull gần đây, không phân biệt độ tuổi tối đa cho một image  
retain the images pushed within the last # days | Nhập số ngày giữ lại image, chỉ giữ lại những image đã được push trong khoảng thời gian này, không phân biệt lượng tối đa image được lưu  
retain the images pulled within the last # days | Nhập số ngày giữ lại image, chỉ giữ lại những image đã được pull trong khoảng thời gian này, không phân biệt số lượng image được lưu  
retain always | Luôn giữ lại những hình ảnh đã được xác định theo quy tắc này  
  
**Bước 6** : Trong drop-down menu Tag, lựa chọn **matching/excluding**

![](/img/docs/82b19f69aaad-Picture31-1.png)

**Bước 7** : Trong text-box Tag, xác định các tag được áp dụng quy tắc 

Người dùng có thể xác định các tag áp dụng rule bằng cách nhập các thông tin sau: 

  * Nhập một tag name, ví dụ: **my_tag_1**

  * Danh sách các tag phân tách nhau bởi dấu phẩy, ví dụ: **my_tag_1, my_tag_2, your_tag_3**

Một phần tag name với ký tự đại diện Ví dụ: ![](/img/docs/6f3add0ae054-Screenshot_7.png)

** để áp dụng quy tắc cho tất cả các tag trong FPT Container Registry mà người dùng quản lý 

Nếu lựa chọn **matching** , quy tắc sẽ được áp dụng cho tất cả các tag mà bạn xác định. Ngược lại nếu lựa chọn **excluding** , quy tắc sẽ được áp dụng cho tất cả các tag trong repository ngoại trừ những tag mà bạn xác định 

**Bước 8** : Click **Add** để lưu lại quy tắc 

![](/img/docs/7c5cce38b024-Picture32-1.png)

**Bước 9** : Kết quả Tag Retention Rule được tạo: 

![](/img/docs/37c6a3a09787-Picture33-1.png)

Ví dụ retention rule: 

**For the repositories matching **** **** , **retain the most recently pushed 20 artifacts with tags matching **** **** **with untagged:**

Đối với các repositories, giữ lại 20 artifacts được push gần nhất với tất cả các tag

[ Previous Quản lý Retention Rule  ](./quan-ly-retention-rule) [ Next Quản lý Tag Retention Rule  ](./quan-ly-tag-retention-rule)
