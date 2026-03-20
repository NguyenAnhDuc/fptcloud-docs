---
sidebar_label: "2. FPT Jenkins CI"
title: "2. FPT Jenkins CI"
source: "https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent"
parent: "https://fptcloud.com/documents/fpt-jenkins-ci"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Jenkins CI


Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent


* * *

Tuỳ từng phiên bản của hệ thống Jenkins sẽ có các cách cấu hình khác nhau để phù hợp cho mỗi phiên bản.

Từ phiên bản 2.451.0 do FPT Cloud cung cấp, để sử dụng kubenetes agent cần phải tạo folder và cấu hình agent có thể sử dụng cho folder. Đối với việc quản lý các dự án được triển khai CI/CD trên Jenkins, người dùng nên tạo folder cho từng dự án và cấu hình các service trong folder dự án, hành động này sẽ giúp người dùng có thể phân quyền cho user vào từng project và dễ dàng quản lý các project.

Để tạo một jobs jenkins cần các thông tin sau:

  * * **Label của agent:** ![](/img/docs/c115e03cd260-Picture103.png) Trong trường hợp người dùng tạo một job bình thường loại freestyle và cấu hình chạy trên agent của FPT Cloud sẽ báo lỗi như sau: ![](/img/docs/4ee62b2a02d1-Picture104.png) Để có thể tạo job và chạy trên jenkins người dùng có thể thực hiện các bước như sau:

**Bước 1.** Tạo folder để quản lý các job trên Jenkins

***Trên Dashboard Jenkins > New Item: ![](/img/docs/468221820e81-Picture105.png)

***Tạo item dạng folder: ![](/img/docs/2d903e4d68f6-Picture106.png)

***Cấu hình kubenetes agent được sử dụng trong folder: ![](/img/docs/13b71bc6f81e-Picture107.png)

**Bước 2.** Tạo một job đơn giản chạy trên Jenkins:

* **Trong folder vừa tạo > Chọn** New item/ Create a job:** ![](/img/docs/8729b0b825a7-Picture108.png)

***Tạo jobs loại Freestyle để cấu hình jobs: ![](/img/docs/c5cac8422665-Picture110.png)

***Nhập label agent chạy jobs: ![](/img/docs/e24ed221ee16-Picture111.png)

***Cấu hình một execute shell để test jobs: ![](/img/docs/fd5e8c52c6f5-Picture112.png)

Cấu hình execute shell > Save jobs: ![](/img/docs/5be28d7407a0-Picture113.png)

**Bước 3.** Chạy thử jobs jenkins đã tạo ![](/img/docs/a0689b0d77a1-Picture114.png) **Bước 4.** Kết quả chạy jobs ![](/img/docs/145b00f747b4-Picture115.png) Kết quả chạy jobs: ![](/img/docs/7605e1499c7d-Picture116.png) ![](/img/docs/806d0758b66a-Picture117.png)

[ Previous Hướng dẫn đăng nhập vào FPT Cloud Jenkins CI ](./huong-dan-dang-nhap-vao-fpt-cloud-jenkins-ci) [ Next Hướng dẫn cấu hình Nodes Build trên Jenkins ](./huong-dan-cau-hinh-nodes-build-tren-jenkins)
