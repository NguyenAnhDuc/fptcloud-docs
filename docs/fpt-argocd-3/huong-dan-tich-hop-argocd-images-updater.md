---
sidebar_class_name: hidden
sidebar_label: "Huong dan tich hop argocd images updater"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-tich-hop-argocd-images-updater"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Hướng dẫn tích hợp Argo CD Images Updater


* * *

Trong phần này sẽ hướng dẫn người dùng deploy ứng dụng trên ArgoCD sử dụng Images Updater. Để sử dụng tính năng Argo CD Images updater, người dùng thực hiện enable service thông qua portal, thực hiện cấu hình các thông tin để xác thực cần dùng như secret/secret registry/Container registry theo hướng dẫn tại mục 5.5

Chuẩn bị:

**a. Bước 1: Chuẩn bị source deployment**

  * Source deployment là helm chart

Ví dụ người dùng muốn deploy service nginx với helm chart tới argocd. Chuẩn bị chart để deploy: ![](/img/docs/e854d3aa6cf5-Picture100-2.png)

  * Images deploy được quản lý trên container registry. Trong phần demo này sẽ sử dụng container registry của FPT Cloud.

  * Argo CD images updater hỗ trợ phương thức Git write-back để lưu trữ các tham số deploy ứng dụng. Mặc định Argo CD images updater sẽ lưu các tham số trong file name .argocd-source-.yaml trong đường dẫn được sử dụng với Applications cấu hình trong đường dẫn manifest trên ArgoCD. Điều này cho phép ArgoCD triển khai ứng dụng theo tham số đã được lưu trữ trên Git.

VD: Tạo file **.argocd-source-demo-images-updater.yaml** với các thông tin sau:
    
    
    helm:
      parameters:
      - name: image.name
        value: registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx
        forcestring: true
      - name: image.tag
        value: dev-742b0343
        forcestring: true

**b. Bước 2: Cấu hình images pullSecret trên Portal**

Ví dụ: Người dùng sử dụng Secret Registry để kiểm tra thay đổi trên Container Registry. pullSecret được đặt tên: **habor-secret** ![](/img/docs/f17431708e58-Picture101-2.png) ![](/img/docs/03b9e902b1d3-Picture102-2.png)

Secret Registry sẽ được sử dụng trong annotations của applications

**c. Bước 3: Tạo applications trên ArgoCD** ![](/img/docs/db71904f2f59-Picture103-2.png) ![](/img/docs/805da965efd1-Picture104-2.png) ![](/img/docs/6eac2ef3f5fb-Picture105-2.png)

Sau đó sử dụng chức năng Edit as yaml để cấu hình annotations: ![](/img/docs/d13a50e525f8-Picture106-2.png) ![](/img/docs/79a37b709320-Picture107-2.png) Bổ sung annotations để sử dụng images updater:

|   
---|---  
argocd-image-updater.argoproj.io/demo-images-updater.allow-tags: regexp:^dev-[0-9a-f]{8}$  | Chỉ định những tag name được cho phép để update tới repository.   
VD ở đây chỉ cho phép cập nhật với các tag với biểu thức chính quy khớp với “dev-“ và chuỗi thập lục phân có 8 chữ số.   
VD: dev- a5fb3d31  
argocd-image-updater.argoproj.io/****.pull-secret: pullsecret:argocd-ebwa49tw/habor-secret | pullSecret để argocd images updater kiểm tra các tag images trên registry. Được cấu hình theo mẫu:   
Ví dụ: : demo-images-updater   
pullsecret:argocd-[argocd-id]/[Secret-registry-name]   
argocd-image-updater.argoproj.io/****.update-strategy: latest | Xác định cách Argo CD images updater tìm phiên bản mới của images được cập nhật trên registry. Có một số stragy:   
\- **Semver**: Cập nhật lên phiên bản mới nhất của images khi xem xét các ràng buộc về phiên bản ngữ nghĩa   
\- **Latest**: Cập nhật lên tag được đẩy lên gần đây nhất được tìm thấy trong container registry   
\- **Digest**: Cập nhật lên phiên bản mới nhất của tag sử dụng SHA digest của tag images   
\- **Name**: sắp xếp tag theo thứ tự bảng chữ cái để tìm ra tag được phép cập nhật  
argocd-image-updater.argoproj.io/git-branch: master | Nhánh để cập nhật thay đổi trong manifest   
argocd-image-updater.argoproj.io/write-back-method: git  | Phương thức để cập nhật thay đổi của images.  
argocd-image-updater.argoproj.io/image-list: =registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx  | Phương thức để cập nhật thay đổi của images.  
  
**Bước 4: Cấu hình webhook tới git để kiểm tra thay đổi khi update tag images trên Container Registry**

  * Tạo webhook gitlab trên portal: ![](/img/docs/a587e8564cd2-Picture108-2.png)
  * Cấu hình webhook trong gitlab: ![](/img/docs/08f7eb65122d-Picture109-2.png)

Test push event: ![](/img/docs/549132191bbc-Picture110-2.png) **Bước 5: Kiểm tra ứng dụng**

Kiểm tra images đang chạy ứng dụng trước khi push một images mới: ![](/img/docs/cd39a52c3f2e-Picture111-2.png)

Push images mới tới registry: ![](/img/docs/1564bd2500d4-Picture112-2.png)

Argo CD images updater sẽ cập nhật images mới tới git: ![](/img/docs/40533aa3e6f0-Picture113-2.png)

Webhook gitlab sẽ phát hiện thay đổi và thực hiện deploy images mới: ![](/img/docs/e9f6c6655dc6-Picture114-2.png) ![](/img/docs/3de5e72c4342-Picture115-2.png)

Kiểm tra push images không đúng định dạng được cho phép tới registry: ![](/img/docs/41d45fd3d003-Picture116-2.png) Kiểm tra không có sự thay đổi tới ứng dụng: ![](/img/docs/ace9c50e27bf-Picture117-2.png) ![](/img/docs/9804afe29222-Picture118-2.png)

[ Previous Demo ](./demo)
