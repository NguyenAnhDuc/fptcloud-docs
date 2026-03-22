---
sidebar_class_name: hidden
sidebar_label: "Restore persistent volume tren k8s"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=restore-persistent-volume-tren-k8s"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng restore volume từ snapshot trên kubernetes


* * *

  * Tính năng restore volume trên MFKE giúp người dùng restore dữ liệu trong PV sử dụng các bản snapshot đã có của PV. Cách thao tác để restore dữ liệu hoàn toàn native với kubernetes, người dùng chỉ cần cấu hình PVC dựa trên snapshot đã có, sau đó chỉnh sửa cấu hình pvc hoặc volumeMount của ứng dụng bằng PVC mới tạo. Tài liệu tham khảo tính năng restore volume trên kubernetes <https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource>

Người dùng thực hiện restore volume bằng cấu hình PVC yaml file:
    
    
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name:  
      namespace: 
    spec:
      dataSource:
        name: new-snapshot-test
        kind: VolumeSnapshot
        apiGroup: snapshot.storage.k8s.io
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 20Gi

Sau đó thực hiện cấu hình PVC này trong ứng dụng mong muốn.

[ Previous Tính năng snapshot Persistent Volume trên kubernetes ](./snapshot-persistent-volume-tren-k8s) [ Next Thực hiện đặt lịch Snapshot PVC trên Kubernetes ](./thuc-hien-dat-lich-snapshot-pvc)
