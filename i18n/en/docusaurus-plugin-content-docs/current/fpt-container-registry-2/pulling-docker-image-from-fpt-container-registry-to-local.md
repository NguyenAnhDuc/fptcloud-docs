---
sidebar_label: "Pulling Docker Image from FPT Container Registry to local"
title: "Pulling Docker Image from FPT Container Registry to local"
source: "https://fptcloud.com/en/documents/fpt-container-registry/?doc=pulling-docker-image-from-fpt-container-registry-to-local"
parent: "https://fptcloud.com/en/documents/fpt-container-registry"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Pulling Docker Image from FPT Container Registry to local


* * *

**Step 1** : Click **Detail Repository** to view details of the image > Click on the **Copy Icon** to copy the pull image command:

![](https://fptcloud.com/wp-content/uploads/2023/11/image07-1.png)

**Step 2** : On the CLI interface of Docker, use the command that you have copied to pull the image to local:

_Example:_
    
    
    docker pull registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest

[ Previous Tagging and Pushing Images to FPT Container Registry ](./tagging-and-pushing-images-to-fpt-container-registry)
