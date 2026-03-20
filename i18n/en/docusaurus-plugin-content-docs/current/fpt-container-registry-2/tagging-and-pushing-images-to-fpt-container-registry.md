---
sidebar_label: "Tagging and Pushing Images to FPT Container Registry"
title: "Tagging and Pushing Images to FPT Container Registry"
source: "https://fptcloud.com/en/documents/fpt-container-registry/?doc=tagging-and-pushing-images-to-fpt-container-registry"
parent: "https://fptcloud.com/en/documents/fpt-container-registry"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Tagging and Pushing Images to FPT Container Registry


* * *

**Step 1** : **Tag** the local image with the FPT Container Registry URI with the command:
    
    
    docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/||registry-id||/REPOSITORY[:TAG]

Where `||registry-id||` will be auto-filled if you copied the command from the FPT Cloud Portal.

_Example:_
    
    
    docker tag hello-world:latest registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest

**Step 2** : **Push** the image to FPT Container Registry with the command:
    
    
    docker push registry.fke.fptcloud.com/||registry-id||/REPOSITORY[:TAG]

Where `||registry-id||` will be auto-filled if you copied the command from the FPT Cloud Portal.

_Example:_
    
    
    docker push registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest

After you have successfully pushed the image, it will show up on the management page:

![](https://fptcloud.com/wp-content/uploads/2023/11/image06-1.png)

[ Previous Docker Login ](./docker-login) [ Next Pulling Docker Image from FPT Container Registry to local ](./pulling-docker-image-from-fpt-container-registry-to-local)
