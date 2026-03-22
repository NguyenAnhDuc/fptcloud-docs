---
sidebar_class_name: hidden
sidebar_label: "Hướng dẫn cài đặt GPU Driver trên Kubernetes"
title: "2. FPT Kubernetes Engine with GPU"
source: "https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=driver-installation-self-install"
parent: "https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Kubernetes Engine with GPU


Hướng dẫn cài đặt GPU Driver trên Kubernetes


* * *

Người dùng có thể tự cài đặt GPU Driver mong muốn trên cụm FPT Kubernetes Engine tích hợp GPU.

Các bước thực hiện như sau:

**Bước 1: Khởi tạo GPU Cluster với Driver Installation là User-Install**

  * _Tạo Cluster chọn Driver Installation là User-Install_

**Bước 2: Khách hàng tự install các phần mềm để sử dụng được GPU (Driver, Toolkit, Device Plugin, …)**

**Tham khảo các phiên bản GPU driver:**

  * **Release Notes** : <https://docs.nvidia.com/datacenter/tesla/index.html> <https://docs.nvidia.com/datacenter/tesla/drivers/releases.json>

  * **Document** : <https://docs.nvidia.com/datacenter/tesla/drivers/index.html>

  * **Bộ cài đặt** : <https://download.nvidia.com/XFree86/Linux-x86_64/>

  * _Khách hàng có thể tham khảo DaemonSet cài đặt Driver dưới đây:_

    
    
    # Copyright 2023 FPT Cloud - PaaS
    # worker.fptcloud/type=gpu
    
    apiVersion: apps/v1
    kind: DaemonSet
    metadata:
      name: fptcloud-gpu-driver-installer
      namespace: kube-system
      labels:
        k8s-app: gpu-driver
    spec:
      selector:
        matchLabels:
          k8s-app: gpu-driver
      updateStrategy:
        type: RollingUpdate
      template:
        metadata:
          labels:
            name: nvidia-driver-installer
            k8s-app: gpu-driver
        spec:
          priorityClassName: system-node-critical
          affinity:
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                - matchExpressions:
                  - key: worker.fptcloud/type
                    operator: In
                    values: ["gpu"]
          tolerations:
          - operator: "Exists"
          containers:
            - image: docker.io/alpine:3.13
              name: nvidia-driver-installer
              command:
                - 'nsenter'
                - '-t'
                - '1'
                - '-m'
                - '-u'
                - '-i'
                - '-n'
                - '--'
                - 'bash'
                - '-l'
                - '-c'
                - 'curl -Ls https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.sh | bash -s -- -p admin'
              resources:
                requests:
                  cpu: 150m
              env:
              - name: NVIDIA_DRIVER_VERSION
                value: "535.54.03"
              - name: NVIDIA_TOOLKIT_INSTALL
                value: "true"
              imagePullPolicy: IfNotPresent
              securityContext:
                privileged: true
                allowPrivilegeEscalation: true
          hostPID: true
          hostNetwork: true
          hostIPC: true

Với tham số biến môi trường:

  * **NVIDIA_DRIVER_VERSION** : Phiên bản của Driver
  * **NVIDIA_TOOLKIT_INSTALL** : “true” hoặc “false”, mặc định là “true”. Tự động tự cài đặt toolkit hoặc không.

  * _Để apply fptcloud daemonset vào cụm K8s dùng lệnh sau:_

    
    
    kubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.yaml

  * _Kiểm tra trạng thái Pod của DaemonSet_

    
    
    kubectl get pod -n kube-system | grep "gpu-driver"
    
    
    NAME                                                 READY   STATUS    RESTARTS        AGE
    fptcloud-gpu-driver-installer-7tj55                  1/1     Running   0               2d17h

DaemonSet fptcloud-gpu-driver-installer sẽ shedule pod ở tất cả các worker trong Worker Group (có label worker.fptcloud/type: gpu) để tiến hành cài đặt Driver/Toolkit.

  * _Kiểm tra logs của pod fptcloud-gpu-driver-installer-7tj55 xem Installer đã cài đặt xong hay chưa_

    
    
    kubectl logs fptcloud-gpu-driver-installer-7tj55 -n kube-system
    
    
    Verifying Nvidia installation... DONE.
    Clean Nvidia installation... DONE.

Nếu cài đặt thành công sẽ có logs như trên. Quá trình cài đặt thường diễn ra trong khoảng một vài phút.

[ Previous Tăng thêm Worker Group sử dụng GPU ](./tang-them-worker-group-su-dung-gpu) [ Next Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric ](./huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric)
