---
sidebar_label: "Persistent Storage"
title: "Persistent Storage"
source: "https://fptcloud.com/en/documents/dedicated-fpt-kubernetes-engine-2/?doc=persistent-storage"
parent: "https://fptcloud.com/en/documents/dedicated-fpt-kubernetes-engine-2"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Persistent Storage


* * *

FKE provides 02 types of Persistent Storage:

### A. Block Persistent Storage

When creating a Kubernetes Cluster, the system automatically creates a Storage Class corresponding to the Storage Policy that user chose when creating the Kubernetes Cluster. Users can use this Storage Class to create RWO Persistent Volumes.

Block Storage is suitable for applications that need to read and write quickly, databases...

To list the available Storage Class, run this command:
    
    
    kubectl get sc 

For example, to create a PVC (persistent volume claim) using the available Storage Class, applies a manifest as follows:
    
    
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: app-disk
    spec:
      accessModes:
        - ReadWriteOnce
      storageClassName: premium-ssd
      resources:
        requests:
          storage: 5Gi

Then apply the manifest file:
    
    
    kubectl apply -f app-disk.yaml 

To list the created PVC
    
    
    kubectl get pvc 

PVC will be in **Pending** state until a Pod use it.

### B. File Persistent Storage

When creating a Kubernetes Cluster, users can choose to enable NFS or enable it after creation. After enabling NFS, Storage Class `xplat-nfs` will be created in the cluster with the storage size as entered by the user when enabling NFS.

To list the available Storage Class, run this command:
    
    
    kubectl get sc 

For example, to create a PVC using the available Storage Class, applies a manifest as follows:
    
    
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: app-disk
    spec:
      accessModes:
        - ReadWriteMany
      storageClassName: xplat-nfs
      resources:
        requests:
          storage: 5Gi 

Then apply the manifest file:
    
    
    kubectl apply -f app-disk.yaml 

To list the created PVC
    
    
    kubectl get pvc 

[ Previous AutoScale ](./auto-scale) [ Next Load Balancer Services ](./load-balancer-services)
