---
sidebar_label: "Them moi mot agent"
title: "2. FPT Jenkins CI"
source: "https://fptcloud.com/documents/fpt-jenkins-ci/?doc=them-moi-mot-agent"
parent: "https://fptcloud.com/documents/fpt-jenkins-ci"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Jenkins CI


Thêm mới một Agent


* * *

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > **Detail Cluster** > **Agent Managements** :

![](/img/docs/182410273330-Picture9.png)

**Bước 2.** Nhấn chọn **Add Agent** để nhập thông tin thêm mới một Agent:

![](/img/docs/003a6a70fd34-Picture10.png)

Trong đó:

  * **Agent name** : Nhập tên Agent name

  * **Resources** : Lựa chọn tài nguyên sử dụng cho Agent

  * **Descriptions** : Nhập mô tả cho Agent nếu có

**Bước 3.** Nhấn chọn **Add** để thêm mới một Agent. Hệ thống sẽ tạo một Agent theo yêu cầu và hiển thị kết quả trên Portal

![](/img/docs/47d0c51370dc-Picture11.png)

Sau khi tạo xong trạng thái của Agent sẽ chuyển sang **Successed**.

![](/img/docs/216368ab7c48-Picture12.png)

**Bước 4.** Kiểm tra Agent đã được tạo dưới Jenkins instance:

Đăng nhập vào hệ thống Jenkins > **Manage Jenkins** > **Cloud** :

![](/img/docs/e69681223946-Picture13.png)

Kết quả Jenkins Agent được tạo dưới Jenkins:

![](/img/docs/c2b336f75279-Picture14.png)

Người dùng có thể xem thông tin chi tiết cấu hình Agent:

![](/img/docs/1ba3bbd53f31-Picture15.png)

![](/img/docs/c793efd38102-Picture16.png)

Lưu ý: Khi tạo agent, hệ thống sẽ tự động tạo labels cho agent và cấu hình ở lựa chọn “Only build jobs with label expressions matching this node”. Do đó trong jobs Jenkins người dùng cần lưu ý nhập đúng lables. 

Ngoài ra, trong quá trình tạo agent, hệ thống sẽ tự động tạo một secret để kết nối đến cụm kubenetes manage agent, nếu người dùng xoá secret này hệ thống sẽ không thể kết nối đến agent: ![](/img/docs/def5a338bd06-Picture17.png)

[ Previous Quản lý FPT Cloud Agent ](./quan-ly-fpt-cloud-agent) [ Next Cập nhật thông tin cấu hình Agent ](./cap-nhat-thong-tin-cau-hinh-agent)
