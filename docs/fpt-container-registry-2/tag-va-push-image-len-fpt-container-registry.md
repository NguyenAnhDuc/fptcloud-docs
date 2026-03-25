---
sidebar_class_name: hidden
sidebar_label: "Tag và Push image lên FPT Container Registry"
title: "2. FPT Container Registry"
source: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=tag-va-push-image-len-fpt-container-registry"
parent: "https://fptcloud.com/documents/fpt-container-registry-2"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Container Registry


Tag và Push image lên FPT Container Registry


* * *

Để thực hiện tag và push một images tới FPT Container Registry, người dùng thực hiện như sau: 

**Bước 1** : Tag một images ở máy local đến URI của FPT Container Registry bằng câu lệnh sau: 
    
    
    docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<> /REPOSITORY[:TAG] 

Trong đó: 

<> sẽ được tự động điền nếu bạn lấy câu lệnh từ FPT Portal 

Ví dụ: 
    
    
    docker tag docker:20.10.12-dind registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind 

**Bước 2** : Sau khi tag xong images tới URI Registry FPT Cloud, thực hiện push images 
    
    
    docker push registry.fke.fptcloud.com//<>/REPOSITORY[:TAG] 

Trong đó: 

<> sẽ được tự động điền nếu bạn lấy câu lệnh từ FPT Portal 

Ví dụ: 
    
    
    docker push registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind 

Bước 3: Kiểm tra kết quả push images 

![](/img/docs/9de7f6f9c317-Picture11-1.png)

![](/img/docs/6e60be56925c-Picture12-2.png)

[ Previous Docker Login ](./docker-login) [ Next Pull docker image từ FPT Container Registry về local ](./pull-docker-image-tu-fpt-container-registry-ve-local)
