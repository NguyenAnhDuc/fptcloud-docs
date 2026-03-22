---
sidebar_label: "Initial Setup"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=Initial-setup"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Initial Setup


* * *

Nếu đây là lần đầu tiên bạn sử dụng **FPT** **Kubernetes Engine** , trước tiên hãy kiểm tra và hoàn thành các công việc sau:

### 1\. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal

Để đăng ký tài khoản FPT Cloud, bạn hãy truy cập trang chủ tại <https://fptcloud.com/>.

Sau đó chọn chức năng **Sign Up** và nhập các thông tin theo hướng dẫn của hệ thống. Bạn sẽ được bộ phận hỗ trợ liên hệ ngay sau đó và xác nhận các thông tin để tạo tài khoản.

Để đăng nhập vào FPT Portal, bạn hãy truy cập vào <https://console.fptcloud.com/>.

Sau khi đăng nhập bằng tài khoản và mật khẩu đã được cấp, chọn đúng Tenant, Region, VPC.

Nếu không chắc chắn về các thông tin trên hoặc hệ thống phản hồi lỗi sau 3 lần thử thì hãy liên hệ ngay cho đội ngũ Support của chúng tôi để được hỗ trợ.

### 2\. Tạo Subnets với Static Pool

Kubernetes Cluster chỉ hoạt động với Subnets đã bật tùy chọn Static Pool, vì vậy bạn cần tạo một Subnets với Static Pool theo hướng dẫn sau:

**Bước 1:** Ở phần **Network** chọn tab **Subnets**

![Subnet K8s](/img/docs/7d3142bd5edf-Screenshot-2025-01-10-at-10.35.34.png)

**Bước 2** : Chọn **Create Subnet** ở trang **Subnets Management**

![Subnet K8s](/img/docs/b09ab0a1d74d-Screenshot-2025-01-10-at-10.39.58.png) **Bước 3:** Nhập các thông tin sau:

  * **Name:** Nhập Tên gợi nhớ của Subnet
  * **CIDR:** Nhập **CIDR** hợp lệ
  * Tích chọn vào tùy chọn **Advanced settings**
  * **Static IP Pool:** Nhập 1 dải IP hợp lệ được lấy từ CIDR.

Chọn **Save** để tạo Subnet mới. Hệ thống sẽ tiến hành xử lý và thông báo kết quả.

![Userguide K8s 3](/img/docs/9bccff9a1ffe-Initial-setup-3.png)

### 3\. Yêu cầu kích hoạt dịch vụ FKE và cấp quota tài nguyên

Nếu đây là lần đầu tiên sử dụng FPT Cloud, một số dịch vụ có thể chưa được mở cho tài khoản của bạn. Hãy liên hệ với đội ngũ hỗ trợ của chúng tôi và cung cấp các thông tin về cấu hình bạn mong muốn. Chúng tôi sẽ cấp cho bạn các tài nguyên cần thiết như Ram + CPU, Storage, Public IP,… để bạn sử dụng dịch vụ FKE.
