---
sidebar_label: "2. FPT Container Registry"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=huong-dan-su-dung-robot-account"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Hướng dẫn sử dụng Robot Account 


* * *

Sau khi tạo một Robot Account, người dùng có thể sử dụng Robot Account để thực hiện login tới FPT Container Registry với docker login để sử dụng với các permission (Pull/Push) đã được cấu hình. 

Người dùng sử dụng token đã copy qua portal/ thông tin trong file đã export chứa account/secret để sử dụng: 

![](/img/docs/e270d618517b-Picture83.png)

Kiểm tra thông thông tin đang nhập sử dụng docker login như sau: 

![](/img/docs/69496c13f228-Picture84.png)

Sử dụng docker pull/push để kiểm tra các permission đã cấu hình. 

Trong trường hợp robot account bị xoá/disable/expire khi dùng docker login/pull/push sẽ báo “unauthorized to access repository”

[ Previous Refresh Robot Account  ](./refresh-robot-account) [ Next Quản lý Gói dịch vụ ](./quan-ly-goi-dich-vu)
