---
sidebar_class_name: hidden
sidebar_label: "Backup and restore cluster"
title: "2. Dedicated – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=backup-and-restore-cluster"
parent: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Dedicated – FPT Kubernetes Engine


Backup & Restore Cluster


* * *

Để backup k8s cluster, thực hiện backup master nodes sử dụng dịch vụ **Backup & Recovery**.

**Bước 1** : Ở menu chọn **Backup & Recovery**, hệ thống sẽ hiển thị trang **Backup & Recovery**.

![Userguide K8s 41](/img/docs/9ffaa95c14a9-Userguide-K8s-41-1024x538.png)

**Bước 2:** Chọn **Create Backup Job**.

![Userguide K8s 39 1](/img/docs/8b3260282d36-Userguide-K8s-39-1.png)

**Bước 3** : Màn hình **New Backup Job** hiện ra. Chọn tất cả VM master nodes tương ứng với cluster cần backup. Cấu hình **Retention** và **Schedule** phù hợp với nhu cầu và chọn **Create**.

![Userguide K8s 40](/img/docs/e5b5a0c61c8a-Userguide-K8s-40.png)

[ Previous Advanced Firewall ](./dfke-advanced-firewall) [ Next Best Practice Upgrade FKE Cluster Version ](./best-practice-upgrade-fke-cluster-version)
