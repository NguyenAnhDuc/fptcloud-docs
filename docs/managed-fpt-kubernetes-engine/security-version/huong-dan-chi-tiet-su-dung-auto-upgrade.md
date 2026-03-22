---
sidebar_label: "Hướng dẫn chi tiết sử dụng tính năng auto upgrade version"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=huong-dan-chi-tiet-su-dung-auto-upgrade"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Hướng dẫn chi tiết sử dụng tính năng auto upgrade version


* * *

  * Với các Managed Kubernetes Cluster đang sử dụng version đã end of standard support quá một minor version so với version cũ nhất được support bởi FPT Cloud sẽ không thể sử dụng tính năng auto upgrade version, người dùng cần tự chủ động upgrade version cho các cluster này. 

  * Ví dụ cluster đang sử dụng version 1.24.14 mà FPT Cloud đang support version kubernetes từ 1.26 đến 1.29, cluster này sẽ không thể sử dụng tính năng này, nếu muốn sử dụng tính năng này cần tự chủ động upgrade cluster lên version 1.25. 

  * Cơ chế upgrade version được tuân thủ theo cơ chế Rolling Update. Các worker chạy minor version mới hơn sẽ đồng thời được tạo ra ở tất cả các worker group, sau khi các worker này ở trạng thái Ready và sẵn sàng để chạy workload, kubernetes drain các worker chạy minor version cũ. Cuối cùng sau khi drain hoàn tất, các worker cũ sẽ bị xóa đi, quá trình này lặp lại lần lượt đến khi tất cả các worker trong group được thay thế. 

**1\. Khởi tạo Managed Kubernetes Cluster:**

Khi khởi tạo một Managed Kubernetes Cluster tính năng Auto Upgrade Version sẽ mặc định bị disable như hình bên dưới: 

![](/img/docs/341fc3c78702-Picture1-5.png)

Để xem thông tin chi tiết về các mốc thời gian quan trọng của một Kubernetes version được hỗ trợ bởi FPT cloud, click vào biểu tượng “?”. 

![](/img/docs/cf1843f2a808-Picture2-4.png)

Nếu enable tính năng Auto Upgrade Version mà không cấu hình thời gian upgrade, mặc định thời điểm upgrade sẽ là 07:00 GMT+7 vào ngày đầu tiên khi version đó end of standard support 

![](/img/docs/648a0a238828-Picture3-4.png)

Sau khi cấu hình thời gian sẽ thực hiện auto upgrade, có thể xem thời điểm version hiện tại sẽ end of support, thời điểm gần nhất sẽ thực hiện auto upgrade và tổng hợp về lập lịch auto upgrade. 

![](/img/docs/a5f4e49f2c69-Picture4-4.png)

Hoàn tất việc cấu hình lập lịch auto upgrade version trong quá trình khởi tạo cluster, click “Next” để tiếp tục sang bước cấu hình “Nodes Pool”. 

**2\. Thay đổi cấu hình Auto Upgrade Version với các cluster đã tồn tại**

_Lưu ý:_

_\- Với các Managed Kubernetes Cluster đã tồn tại và được cấu hình auto upgrade version, người dùng vẫn có thể upgrade version chủ động theo cách bình thường như đối với các cluster không enable tính năng này._

_\- Để hủy lịch auto upgrade version cho một Managed Kubernetes Cluster được cấu hình thời gian auto upgrade, user cần phải disable tính năng auto upgrade hoặc thay đổi lịch auto upgrade trước 01:00 GMT+7 của ngày mà FPT Cloud tự động upgrade version. Ví dụ: cluster A được enable tính năng auto upgrade version và cấu hình thời điểm tự động upgrade vào 04:00 GMT+7 ngày 25/6/2024, để hủy bỏ lịch tự động upgrade cần phải disable tính năng auto upgrade hoặc thay đổi lịch auto upgrade trước 01:00 GMT+7 ngày 25/6/2024, bất cứ thay đổi nào sau thời điểm này đều sẽ không có hiệu lực và việc tự động upgrade version vẫn sẽ được thực hiện vào 04:00 GMT+7 ngày 25/6/2024._

  * Enable tính năng auto upgrade: 

![](/img/docs/f125a3914027-Picture5-4.png)

![](/img/docs/8611699f85b4-Picture6-4.png)

![](/img/docs/0307b0ad119a-Picture7-4.png)

[ Previous Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud ](./gioi-thieu-chung-ve-quy-trinh-quan-ly-version) [ Next FPT cloud managed kubernetes release calendar ](./fpt-cloud-managed-kubernetes-release-calendar)
