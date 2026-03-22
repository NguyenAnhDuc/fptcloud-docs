---
sidebar_class_name: hidden
sidebar_label: "Cau hinh sonarqube servers"
title: "2. FPT Jenkins CI"
source: "https://fptcloud.com/documents/fpt-jenkins-ci/?doc=cau-hinh-sonarqube-servers"
parent: "https://fptcloud.com/documents/fpt-jenkins-ci"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Jenkins CI


Cấu hình SonarQube servers


* * *

FPT Cloud hỗ trợ người dùng cấu hình SonarQube Server trong hệ thống Jenkins phục vụ việc tích hợp scan source code thông qua giao diện Portal. Để thực hiện cấu hình, người dùng thực hiện như sau:

  * **Thêm mới một SonarQube servers**

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > **Add SonarQube :** ![](/img/docs/633dc912b708-Picture71.png) **Bước 2.** Nhập thông tin các thông tin cần thiết để tạo mới một SonarQube bao gồm:

  * Name: Nhập tên SonarQube muốn tạo

  * Server URL: Nhập server URL domain public của hệ thống sonar

  * Server authentication token: thông tin credential để xác thực hệ thống sonar. Thông tin xác thực sẽ được lấy trong danh sách các credential với type **Secret Text**. Trong trường hợp người dùng chưa thêm credential, thực hiện tạo thông tin xác thực trước khi cấu hình SonarQube ![](/img/docs/129945add285-Picture72.png) **Bước 3.** Kết quả sau khi thêm mới cấu hình SonarQube Servers ![](/img/docs/5b081a3bde4b-Picture73.png) Kiểm tra kết quả dưới Jenkins: ![](/img/docs/888bade3d4df-Picture74.png) ![](/img/docs/fccead948599-Picture75.png)

  * **Chỉnh sửa cấu hình SonarQube servers**

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > Chọn **SonarQube server cần chỉnh sửa:** ![](/img/docs/8dd1855458cc-Picture76.png) **Bước 2.** Nhập thông tin các thông tin muốn sửa ![](/img/docs/d96ace12eee0-Picture77.png) FPT Cloud cho phép chỉnh sửa thông tin server url hoặc chọn lại credential authen tới hệ thống sonarqube. **Bước 3.** Kết quả sau khi chỉnh sửa ![](/img/docs/bd49a38ccfa2-Picture78.png)

  * **Xóa SonarQube servers**

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > Chọn **SonarQube server muốn xóa:** ![](/img/docs/550edce0851b-Picture79.png) **Bước 2.** Nhập confirm text để xác thực hành động ![](/img/docs/0e42955d294d-Picture80.png) **Bước 3.** Kết quả sau khi xoá SonarQube config ![](/img/docs/2069cb0692ed-Picture81.png) Kết quả dưới hệ thống Jenkins: ![](/img/docs/307c9acec97f-Picture82.png) ![](/img/docs/1b0ac94a025e-Picture83.png)

[ Previous Cấu hình Email Notifications ](./cau-hinh-email-notifications) [ Next Cấu hình Telegram Bots ](./cau-hinh-telegram-bots)
