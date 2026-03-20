---
sidebar_class_name: hidden
sidebar_label: "2. FPT Container Registry"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=docker-login"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Docker Login


* * *

Để thực hiện login tới FPT Container Registry thực hiện như sau: 

**Bước 1** : Trên Menu **FPT Portal** > **Container Registry** > Chọn **Get Token** để lấy thông tin đăng nhập gồm **Username/Secret**

![](/img/docs/23a4563b2d98-Picture8-1.png)

**Bước 2** : Di chuột vào icon help ⓘ để lấy câu lệnh Login. 

![](/img/docs/4bf5cdaf5f4d-Picture9-1.png)

**Bước 3** : Sử dụng docker cli để login với thông tin đăng nhập trên Portal 

![](/img/docs/aec1f1a9b8f1-Picture10-1.png)

Ví dụ: 

Sử dụng lệnh: 
    
    
    docker login registry.fke.fptcloud.com 

[ Previous Hướng dẫn sử dụng trên Docker CLI ](./huong-dan-su-dung-tren-docker-cli) [ Next Tag và Push image lên FPT Container Registry ](./tag-va-push-image-len-fpt-container-registry)
