---
sidebar_label: "Monitor Infrastructure Platform"
title: "2. FPT Cloud Monitoring"
source: "https://fptcloud.com/documents/fpt-cloud-monitoring/?doc=monitor-infrastructure-platform"
parent: "https://fptcloud.com/documents/fpt-cloud-monitoring"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud Monitoring


4\. Monitor Infrastructure & Platform


* * *

**Bước 1** : Đăng nhập vào FPT portal cloud **<https://console.fptcloud.com>**

**Bước 2** : Trên menu của FPT Cloud Portal, click **Monitoring**. 

**Bước 3** : Click chi tiết vào một Workspace, sau đó di chuyển tới **Add Data** tab.

**Bước 4** : Trong tab **Infrastructure services** , hiển thị danh sách các dịch vụ infrastructure đang sẵn có, click vào một dịch vụ bạn muốn monitor.

![Alt text](/img/docs/102fff273e92-Picture8-2.png)

**Bước 5**. Click **Manual** và sau đó làm theo hướng dẫn.

![Alt text](/img/docs/575519edf303-Picture9-2.png)

Ngoài ra, FPT Monitoring hỗ trợ **tích hợp tự động** **Kubernetes Dedicated** và **Kubernetes Managed**. 

Việc tích hợp này giúp người dùng có thể cấu hình tích hợp theo dõi **metric và log** của từng cụm cluster dễ dàng và chuyên nghiệp. 

Để sử dụng tính năng này, người dùng thao tác như sau: 

**Bước 1** : Trong tab **Infrastructure service** , click **Kubernetes**

![Alt text](/img/docs/4251b3d07670-Picture1-4.png)

**Bước 2** : Click **Auto**. Tại đây, hiển thị bảng danh sách các cụm cluster **Dedicated** và **Managed**. 

![Alt text](/img/docs/ab6aaf3f8b79-Picture3-4.png)

**Lưu ý:**

Trong trường hợp người dùng chưa có cụm cluster nào hiển thị, người dùng vào phần **Kubernetes** trên menu, click **Create a Kubernetes Engine** để tạo. 

Hướng dẫn chi tiết khởi tạo Kubernetes người dùng có thể tham khảo tại link sau: 

<https://fptcloud.com/documents/managed-fpt-kubernetes-engine/>

<https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/>

Nếu tenant của bạn không có quyền tạo, hãy liên hệ với đội ngũ admin của chúng tôi để hỗ trợ. 

  * Để tích hợp **Dedicated kubernetes** , bạn thao tác như sau: 

1, Click tab **Dedicated**

![Alt text](/img/docs/8f2ee7aa2f4f-Picture4-4.png)

2, Chọn cụm cluster và loại datasource bạn muốn tích hợp. Mỗi cụm cluster sẽ có 2 loại datasource là metric và log. Chỉ những cụm cluster đang hoạt động và datasource ở trạng thái active thì người dùng mới có thể tích hợp. 

3, Click **Integrate**

![Alt text](/img/docs/c89903337e23-Picture5-4.png)

Xuất hiện hộp thoại xác nhận người dùng có muốn tích hợp logs/metrics của cluster lên workspace tương ứng hay không. 

Để xác nhận, người dùng click button **Confirm**. 

![Alt text](/img/docs/e64b483ef95a-Picture6-4.png)

Sau khi click, trạng thái tích hợp là **Integrating**. 

![Alt text](/img/docs/aad01789ad6c-Picture7-4.png)

Người dùng đợi 1-2 phút hệ thống sẽ tự động cập nhật lại trạng thái cuối cùng (thành công hoặc thất bại). 

![Alt text](/img/docs/5a74c485c8f4-Picture8-4.png)

4, Tiếp đến, người dùng đăng nhập vào trang Dashboard bằng cách chọn tab **Configuration** > Click vào link **Dashboard URL** và đăng nhập bằng username, password được hiển thị. 

![Alt text](/img/docs/8516bd17f414-Picture9-4.png)

5, Sau khi truy cập vào trang Dashboard, người dùng click **Home** > chọn **Dashboard** > chọn Folder Fmon – Kubernetes và sử dụng. 

![Alt text](/img/docs/a10f8a9955c8-Picture10-4.png)

  * Để tích hợp **Managed kubernetes** , người dùng chọn tab **Managed** và thực hiện các bước **tương tự** như phần Dedicated Kubernetes. 

![Alt text](/img/docs/db200ae1fcad-Picture11-4.png)

[ Previous 3.5. Quota and Package Tab ](./quota-and-package-tab) [ Next 5\. Monitor Applications ](./monitor-applications)
