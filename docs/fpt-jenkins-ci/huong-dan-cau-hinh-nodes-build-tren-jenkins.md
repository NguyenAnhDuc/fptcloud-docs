---
sidebar_class_name: hidden
sidebar_label: "Hướng dẫn cấu hình Nodes Build trên Jenkins"
title: "2. FPT Jenkins CI"
source: "https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-cau-hinh-nodes-build-tren-jenkins"
parent: "https://fptcloud.com/documents/fpt-jenkins-ci"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Jenkins CI


Hướng dẫn cấu hình Nodes Build trên Jenkins


* * *

Hiện tại, trên FPT Cloud Portal chỉ cho phép người dùng tạo Jenkins Agent loại Cloud. Để có thể thêm mới một Agent do khách hàng quản lý,có thể thực hiện như sau:

  * **Thêm mới Agent loại Node**

**Bước 1.** Chuẩn bị VM để làm agent cho Jenkins

-Agent cho Jenkins có thể chạy một số hệ điều hành sau: Windows, Linux (Ubuntu/Centos,… )

-Cài đặt Java trên VM để kết nối tới Jenkins:

**Đối với Linux:** VM trên FPT Cloud đang support ubuntu, trong hướng dẫn người dùng cài java trên ubuntu. Tuỳ nhu cầu sử dụng của người dùng có thể cài các phiên bản java khác nhau. Ví dụ người dùng muốn cài java 11, thực hiện cài đặt như sau:

**sudo apt update**

**sudo apt install openjdk-11-jdk**

Kiểm tra version java được cài đặt:

**Java –version** ![](/img/docs/271362651e2d-Picture118.png)

**Đối với windows:** Download java version phù hợp: <https://www.oracle.com/java/technologies/downloads/?er=221886> ![](/img/docs/e4468e482731-Picture119.png) Thực hiện cài đặt trên máy client

Cấu hình JAVA_PATH trong enviroment

Kiểm tra version

**Bước 2.** Đăng nhập vào Jenkins instance với username/password trên Portal ![](/img/docs/e4468e482731-Picture119.png)

**Bước 3.** Thực hiện tạo mới một Node như sau: ![](/img/docs/0c00ad8aeea1-Picture120.png) ![](/img/docs/8e3020131117-Picture121.png) Tiếp tục cấu hình các thông tin: ![](/img/docs/83cc3c7dd7e8-Picture122.png)

**Bước 4.** Sau khi tạo nodes lấy thông tin để kết nối tới nodes như sau ![](/img/docs/fbb1d582f9a4-Picture123.png) Thông tin để connect agent: ![](/img/docs/91fc45b19433-Picture124.png)

**Bước 5.** Chỉnh sửa commad để connect Agent như sau:

FPT Cloud sử dụng websocket để connect Agent Jenkins. Vì vậy, để có thể connect tới Agent Jenkins cần thêm options **“-webSocket”** để có thể kết nối đến Agent:

**Ví dụ:** curl -sO [](<https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/jnlpJars/agent.jar>) java -jar agent.jar -url <https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/> -secret secretData -name "Jenkins VM customize" -webSocket -workDir "/root/jenkins-home"

**Bước 6.** Kiểm tra kết quả khi kết nối đến node:

Logs kết nối agent: ![](/img/docs/504e5577ed68-Picture125.png) Kết quả connect trên Jenkins:  Tạo một jobs sử dụng Agent. Kết quả như sau: ![](/img/docs/5f697d59ce27-Picture126.png)

[ Previous Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent ](./huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent) [ Next Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal ](./huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal)
