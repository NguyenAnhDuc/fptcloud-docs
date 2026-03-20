---
sidebar_class_name: hidden
sidebar_label: "2. FPT Container Registry"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=pull-docker-image-tu-fpt-container-registry-ve-local"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Pull docker image từ FPT Container Registry về local


* * *

Để thực hiện Pull images docker về local thực hiện như sau: 

**Bước 1** : Tại màn hình Repository > click vào images muốn pull để xem thông tin chi tiết images. 

![](/img/docs/f77f73c3f037-Picture13-2.png)

**Bước 2** : Chọn Detail Repository để xem thông tin chi tiết images. Kích chọn vào icon copy để copy lệnh pull images. 

  * Cách 1: FPT Cloud hỗ trợ người dùng pull theo tag và pull theo SHA. 

![](/img/docs/8f23c8c0ad91-Picture14-1.png)

  * Cách 2: Pull với tag images 

![](/img/docs/783da3a01598-Picture15-1.png)

Ví dụ: 
    
    
    docker pull registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind 

**Bước 3** : Sử dụng docker cli để pull images về local 

![](/img/docs/000c1df332cb-Picture16-1.png)

Mỗi lần pull images, số lượng **Pull-limit** sẽ được tính toán và trừ sau mỗi lần pull: 

![](/img/docs/bc8321eee2dc-Picture17-1.png)

[ Previous Tag và Push image lên FPT Container Registry ](./tag-va-push-image-len-fpt-container-registry) [ Next Quản lý Repositories trên FPT Portal ](./quan-ly-repositories-tren-fpt-portal)
