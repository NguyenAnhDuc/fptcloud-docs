---
sidebar_label: "Docker Login"
title: "Docker Login"
source: "https://fptcloud.com/en/documents/fpt-container-registry/?doc=docker-login"
parent: "https://fptcloud.com/en/documents/fpt-container-registry"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Docker Login


* * *

**Step 1:** On the sidebar menu, choose **Container Registry** > click **Get Token** to get the authorization details: **Username** and **Secret Key**.

![](https://fptcloud.com/wp-content/uploads/2022/10/Userguide-Container-registry-2022-21-1024x538.png)

**Step 2** : Hover on the **Help Icon** to get Docker Login, Tag, and Push image commands:

![](https://fptcloud.com/wp-content/uploads/2022/10/Userguide-Container-registry-2022-22-1024x538.png)

**Step 3** : On the Docker CLI, use the _docker login_ command to sign in with the authorization details above.

_Example:_
    
    
    docker login registry.fke.fptcloud.com

![](https://fptcloud.com/wp-content/uploads/2022/10/Userguide-Container-registry-2022-10.png)

[ Previous Docker CLI ](./docker-cli) [ Next Tagging and Pushing Images to FPT Container Registry ](./tagging-and-pushing-images-to-fpt-container-registry)
