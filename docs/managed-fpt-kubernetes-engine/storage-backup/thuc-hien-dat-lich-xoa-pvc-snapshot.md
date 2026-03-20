---
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thuc-hien-dat-lich-xoa-pvc-snapshot"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes 


* * *

FPTCloud cung cấp thêm cho khách hàng lựa chọn đặt lịch xóa các Snapshot PVC dựa trên tên PVC, namespace tương ứng, và khoảng thời gian mong muốn xóa, được tính theo giờ (hours), hoặc ngày (days). 

**Cài đặt lịch Cronjob Cleanup Snapshot PVC**

**Bước 1** : Khách hàng cần cung cấp quyền trong cụm Kubernetes cho Cronjob với việc apply ServiceAccount và ClusterRoleBinding tương ứng:
    
    
    apiVersion: v1 
    kind: ServiceAccount 
    metadata: 
      name: cleanup-snapshot-sa 
      namespace: default #or any other namespace that you want to deploy the cronjob 

**Bước 2** : Khách hàng apply ClusterRoleBinding để cấp quyền tới các ServiceAccount (SA) mà khách hàng vừa tạo, lưu ý rằng _subjects_ cần phải có đủ các SA ở các namespace tương ứng mà người dùng vừa tạo ở trên:
    
    
    apiVersion: rbac.authorization.k8s.io/v1  
    kind: ClusterRoleBinding  
    metadata:  
      name: grant-cleanup-snapshot-sa-admin  
    subjects:  
      - kind: ServiceAccount  
        name: cleanup-snapshot-sa  
        namespace: default #or any other namespace that you want to deploy the cronjob  
    
     - kind: ServiceAccount  
        name: cleanup-snapshot-sa  
        namespace: namespace1 #if user wants to have multiple cronjob in multiple namespace 
    roleRef:  
      kind: ClusterRole  
      name: cluster-admin  
      apiGroup: rbac.authorization.k8s.io 

✓ Người dùng có thể check lại ClusterRoleBinding bằng cách dùng câu lệnh: 
    
    
    kubectl get clusterrolebinding grant-cleanup-snapshot-sa-admin 
    

**Bước 3** : Áp dụng Cronjob để tự động xóa Snapshot PVC theo format sau: 
    
    
    apiVersion: batch/v1 
    
    kind: CronJob 
    
    metadata: 
    
      name: cleanup-snapshots 
    
    spec: 
    
      schedule: "0 2 * * *" #Adjust this (minute hour day(month) month day(week)) 
    
      timeZone: "Asia/Saigon" 
    
      jobTemplate: 
    
        spec: 
    
          template: 
    
            spec: 
    
              serviceAccountName: cleanup-snapshot-sa #match with service account name 
    
              containers: 
    
              - name: snapshot-cleanup 
    
                image: registry.fke.fptcloud.com/xplat-fke/cleanup-snapshot-pvc:v0.1.0   
    
                env: 
    
                - name: NAMESPACE 
    
                  value: "your-pvc-namespace" #Replace with your PVC namespace 
    
                - name: PVC_NAME 
    
                  value: "your-pvc"  #Replace with your PVC name 
    
                - name: RETENTION_MAX 
    
                  value: "7" #or any int > 0 
    
                - name: RETENTION_UNITS 
    
                  value: "days" #or "hours" 
    
              restartPolicy: OnFailure 
    

**Xoá lịch Cleanup cho Snapshot PVC**

Nếu như không còn nhu cầu đặt lịch cho việc tự động xóa Snapchot cho PVC, người dùng có thể đơn giản xóa đi Cronjob tương ứng đã khởi tạo.

[ Previous Thực hiện đặt lịch Snapshot PVC trên Kubernetes ](./thuc-hien-dat-lich-snapshot-pvc) [ Next Cấu hình proxy protocol ](./cau-hinh-proxy-protocol)
