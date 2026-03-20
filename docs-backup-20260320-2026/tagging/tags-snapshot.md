---
sidebar_class_name: hidden
sidebar_label: "2. Tagging"
title: "2. Tagging"
source: "https://fptcloud.com/documents/tagging/?doc=tags-snapshot"
parent: "https://fptcloud.com/documents/tagging"
lang: vi
converted: "2026-03-19"
---

# 2. Tagging


Manage tag to Snapshot


* * *

## **1\. Gắn tag trong lúc tạo snapshot từ instance**

**Bước 1** : Ở menu chọn **Instance Management** , chọn **Actions** > chọn **Create snapshot**

![file](/img/docs/c4ddd33ba758-image-1721015609867.png)

**Bước 2** : Tại hộp thoại **Create instance snapshot** người dùng có thể chọn tag ở trường **Add tag (optional)** để gắn tag vào snapshot.

![file](/img/docs/b9f22c970854-image-1721015621343.png)

## **2\. Gắn tag trong lúc tạo snapshot từ storage disk**

**Bước 1** : Ở menu chọn **Storage disk** > chọn **Actions** > chọn **Create volume snapshot**

![file](/img/docs/79c2804c2c5e-image-1721015651110.png)

**Bước 2** : Tại hộp thoại **Create volume snapshot** người dùng có thể chọn tag ở trường **Add tag (optional)** để gắn tag vào máy ảo.

![file](/img/docs/733cc8b63fdc-image-1721015663094.png)

## **3\. Manage tag cho snapshot**

**Bước 1** : Ở menu chọn **Snapshot**. Ở tab **Instance snapshot** chọn **Manage tags**

![file](/img/docs/371220cc7f2b-image-1721015686871.png)

**Bước 2** : Hộp thoại hiện ra, người dùng chọn tag để gắn vào snapshot

![file](/img/docs/5c976a3c5d6b-image-1721015699377.png)

**Bước 3** : Nếu người dùng muốn gỡ tag ra khỏi instance snapshot

Chọn dấu “x” bên cạnh tên các tag muốn gỡ để thực hiện thao tác gỡ tag (người dùng cũng có thể click vào dấu “x” ở cuối listbox để gỡ cùng lúc toàn bộ tag khỏi instance snapshot), sau đó chọn **Save**.

**Lưu ý rằng khi người dùng xóa snapshot, điều này sẽ dẫn đến việc hệ thống tự động gỡ bỏ các tag liên kết và cập nhật lại danh sách tag trên màn hình Tagging.**

![file](/img/docs/1c3d39b965c6-image-1721015718376.png)

[ Previous Manage tag to Storage disk ](./tags-storage-disk) [ Next Manage tag to Custom image ](./tags-custom-image)
