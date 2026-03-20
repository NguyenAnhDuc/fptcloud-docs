---
sidebar_label: "2. FPT Jenkins CI"
title: "2. FPT Jenkins CI"
source: "https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal"
parent: "https://fptcloud.com/documents/fpt-jenkins-ci"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Jenkins CI


Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal


* * *

Trong hướng dẫn này sẽ hướng dẫn người dùng tạo một CI/CD flow cơ bản như sau: ![](/img/docs/aecf39ae690f-Picture127.png) Luồng triển khai CI/CD diễn ra các hoạt động như sau:

**Bước 1.** Sự kiện kích hoạt luồng: developer có thể kích hoạt luồng triển khai CI/CD với sự kiện **Push commit/Merge request build**

**Bước 2.** Hệ thống mã nguồn (source control management) sẽ gửi thông điệp trigger tới hệ thống CI/CD. Hệ thống mã nguồn sẽ gửi thông điệp build qua webhook để kích hoạt một jobs build trên Jenkins

**Bước 3.** Hệ thống CI/CD sử dụng FPT Jenkins CI và sử dụng FPT Cloud Agent sẽ tiến hành thực hiện các bước bao gồm: Scan code với sonarqube, Unittest, Build images.

**Bước 4.** Nếu Pass qua các bài kiểm thử và build images thành công, images sẽ được đẩy tới hệ thống FPT Container Registry (FCR) để lưu trữ images phục vụ việc deploy ứng dụng.

**Bước 5.** Sau khi images được đẩy lên FCR, hệ thống sẽ thực hiện cập nhật tag images mới tới source code chứa config được quản lý bởi FPT Argo CD

**Bước 6.** Hệ thống FPT Argo CD thực hiện deploy ứng dụng lên môi trường dev/test/staging

**Bước 7.** Sau khi deploy ứng dụng, hệ thống CI/CD thực hiện chạy Automations test để kiểm thử tự động trên môi trường staging

**Bước 8.** Sau khi chạy xong luồng CI/CD pipeline, hệ thống CI/CD trả kết quả build về cho developer.

Mô hình hệ thống CI/CD sử dụng các thành phần bao gồm:

STT | Tên hệ thống | Công cụ sử dụng  
---|---|---  
1 | Source code Management | Gitlab  
2 | CI server | FPT Jenkins CI  
3 | CD | FPT ArgoCD  
  
  1. Login vào Jenkins với username/pass trên portal:
  2. Trên FPT Cloud Portal tạo credential để sử dụng trong pipeline bao gồm: -Credential với kind User with Password để authenticator cho gitlab, Container Registry: ![](/img/docs/ceb629a560c0-Picture128.png) ![](/img/docs/78a57dc5ee90-Picture129.png) -Credential với kind Secret Text để authen cho SonarQube: ![](/img/docs/62a2764614a9-Picture130.png)
  3. Cấu hình sonarqube server để thực hiện Scan Code trong pipeline ![](/img/docs/81a306f277c5-Picture131.png)
  4. Cấu hình Email Notifications trên FPT Cloud Portal để tích hợp trong pipeline ![](/img/docs/77753ca61d80-Picture132.png)
  5. Tạo job với loại Pipeline để thiết lập một luồng CI/CD cơ bản: Click **New Item** hoặc **Create a job** để tạo một pipeline jobs CI/CD: ![](/img/docs/102cb0ac6dc2-Picture133.png) Nhập thông tin tạo jobs: ![](/img/docs/2b34d23c78a4-Picture134.png) Cấu hình pipeline jobs với pipeline script. Có 2 lựa chọn để cấu hình jenkinsfile: Cách 1: Nhập script pipeline qua giao diện Jenkins: ![](/img/docs/40b308ac488e-Picture135.png) Cách 2: Sử dụng Jenkinsfile để cấu hình pipeline script từ source code: ![](/img/docs/4cae1695461f-Picture136.png) ![](/img/docs/0425bb844d78-Picture137.png) Pipeline chạy jobs: ![](/img/docs/384988caf6f2-Picture138.png)

[ Previous Hướng dẫn cấu hình Nodes Build trên Jenkins ](./huong-dan-cau-hinh-nodes-build-tren-jenkins)
