---
sidebar_class_name: hidden
sidebar_label: "2. Managed – FPT Kubernetes Engine"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=snapshot-persistent-volume-tren-k8s"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng snapshot Persistent Volume trên kubernetes


* * *

  * Tính năng snapshot persistent volume (PV) giúp người dùng có thể tạo snapshot của một PV trên M-FKE kubernetes cluster bằng cách cấu hình và triển khai file yaml định nghĩa pvc mong muốn snapshot. Sau khi resource snapshot trong kubernetes cluster được tạo ra, một bản snapshot tương ứng sẽ được tạo mới ở VPC. Việc snapshot volume trên MFKE được thực hiện bởi thành phần VolumeSnapshotClass, người dùng chỉ cần định nghĩa tên của pvc cần snapshot. Người dùng cũng có thể chủ động lập lịch snapshot PV định kì bằng cách tạo script liên tục call api tạo snapshot trong kubernetes. Tài liệu tham khảo tính năng snapshot volume trên kubernetes [](<https://kubernetes.io/docs/concepts/storage/volume-snapshots/>)

  * Trong kubernetes, volume snapshot là một bản copy point-in-time của nội dùng PV trong cluster. Người dùng có thể sử dụng snapshot để backup dữ liệu của cluster hoặc copy dữ liệu tới các resource khác mà không cần tạo mới volume.

  * Trước tiên người dùng cần cấu hình VolumeSnapshotClass nếu trong cluster chưa tồn tại VolumeSnapshotClass nào:

    
    
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshotClass
    metadata:
      name: csi-cinder-snapclass
      annotations:
        snapshot.storage.kubernetes.io/is-default-class: "true"
    driver: cinder.csi.openstack.org
    deletionPolicy: Delete
    parameters:
      type: [type-storage-policy]
      force-create: "true"

Trong đó _[type-storage-policy]_ là loại storage policy người dùng sử dụng, có thể lấy thông tin này ở trường parametes/type trong cấu hình storageClass default.

Người dùng cần có một volume đang được sử dụng trong cluster (được tạo bởi PVC). Giả sử cấu hình của PVC như sau:
    
    
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: test-pvc
      namespace: default
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 20Gi

Người dùng tạo một bản snapshot volume bằng cách định nghĩa VolumeSnapshot trong kubernetes:
    
    
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: new-snapshot-test
      namespace: default
    spec:
      volumeSnapshotClassName: csi-cinder-snapclass
      source:
        persistentVolumeClaimName: test-pvc

Trong đó 

  * _volumeSnapshotClassName_ được cung cấp mặc định bởi FPTCloud, người dùng có thể sử dụng _volumeSnapshotClassName_ theo cấu hình nhu cầu mong muốn.
  * _persistentVolumeClaimName_ là tên PVC mong muốn tạo snapshot.

Sau khi tạo xong snapshot trong kubernetes, người dùng kiểm tra lại snapshot trên tab snapshot ở mục **Compute Engine** trên **Unify Portal** :

![](/img/docs/9ab1ccda6171-Picture1-6.png)

và kiểm tra trong kubernetes bằng câu lệnh:
    
    
    kubectl get volumesnapshots.snapshot.storage.k8s.io -n default

[ Previous Snapshot và restore persistent volume trong Kubernetes ](./snapshot-và-restore-pvc-trên-k8s-fpt) [ Next Tính năng restore volume từ snapshot trên kubernetes ](./restore-persistent-volume-tren-k8s)
