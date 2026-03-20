---
sidebar_label: "Lưu ý khi tạo máy ảo từ file iso"
title: "Lưu ý khi tạo máy ảo từ file iso"
source: "https://fptcloud.com/documents/cloud-server/?doc=create-vm-iso"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Lưu ý khi tạo máy ảo từ file iso


* * *

Hiện tại hệ thống Unify Portal hỗ trợ khách hàng tạo máy ảo từ file ISO 

**1) Các lưu ý khi tạo máy ảo từ file ISO**

  * Khi tạo máy ảo từ file ISO, hệ thống sẽ tự động tạo thêm một ổ đĩa để boot cho ổ Root, không xóa ổ đĩa này khi đang tạo máy ảo. 

  * Người dùng cần để trống dung lượng ổ đĩa tối thiểu bằng hoặc lớn hơn dung lượng file ISO, hệ thống sẽ làm tròn đến hàng đơn vị (Ví dụ: file 0.5 GB -> cần 1GB, file 1.5 GB -> cần 2 GB, file 2 GB cần tối thiểu 2 GB)

**Lưu ý: Xóa ổ đĩa tạm sau khi tạo máy từ file ISO**

  * Người dùng xóa ổ đĩa boot sau khi đã tạo máy thành công. (cần Un-mount ổ đĩa khỏi máy ảo trước khi xóa)

**2) Hỗ trợ tính năng sử dụng disk bus SATA cho ổ Root**

  * Hệ thống mặc định sử dụng disk bus Virtio cho ổ Root. Tuy nhiên, đối với một số file ISO cũ không được Virtio hỗ trợ, người dùng cần chuyển sang chế độ SATA bằng cách chọn vào ô checkbox tương ứng. 

  * Lưu ý rằng việc sử dụng disk bus SATA có thể làm giảm hiệu suất của ổ đĩa, vì vậy chỉ nên sử dụng tính năng này khi file ISO của bạn không tương thích với Virtio. Vui lòng tham khảo hướng dẫn từ nhà sản xuất để chọn chế độ phù hợp.

![file](/img/docs/13e63751306f-image-1724300919876.png)

[ Previous Tạo một máy ảo ](./quick-starts-tao-mot-may-ao) [ Next Clone instance ](./clone-instance)
