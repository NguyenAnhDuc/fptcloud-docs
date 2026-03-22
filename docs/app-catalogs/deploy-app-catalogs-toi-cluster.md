---
sidebar_class_name: hidden
sidebar_label: "Deploy app catalogs toi cluster"
title: "2. FPT App Catalogs"
source: "https://fptcloud.com/documents/app-catalogs/?doc=deploy-app-catalogs-toi-cluster"
parent: "https://fptcloud.com/documents/app-catalogs"
lang: vi
converted: "2026-03-19"
---

# 2. FPT App Catalogs


Deploy App Catalogs tới Cluster


* * *

Sau khi tìm kiếm chart mong muốn thực hiện deploy app tới k8s cluster như sau:

**Bước 1** : Click **Deploy** để thực hiện deploy app catalog

![](/img/docs/c7b08d31cb2e-Picture13-1.png)

**Bước 2** : Nhập thông tin để deploy app bao gồm:

Với mỗi một App sẽ cần một số thông tin để deploy bao gồm:

  * Release name: name được sử dụng để deploy chart

_Lưu ý: Release name là duy nhất với mỗi chart trên từng namespace_

  * Versions: version của chart được sử dụng để deploy

_Lưu ý: Cần kiểm tra tính tương thích của version app và version của k8s_

  * Clusters: Chọn cluster trong manage clusters

  * Namespace: Nhập tên namespace để deploy app. Trong trường hợp namespace chưa tồn tại trên k8s cluster, namespace sẽ được tự động tạo trong quá trình install chart

  * User Define Values: Nhập giá trị values cần thay đổi trong quá trình deploy. Nếu giá trị này để trống, app sẽ được install với giá trị mặc định

![](/img/docs/42e55883192d-Picture14-1.png)

Click **Install App** để hoàn thành Sau khi deploy xong app sẽ được quản lý trong mục **Deployed Apps**

![](/img/docs/0f840ff43f81-Picture15-1.png)

**Bước 3** : Kiểm tra app đã được deploy trên cluster

  * Kiểm tra chart được deploy tới namespace:

    
    
    helm -n cert-manager list

![](/img/docs/038b9b9fe8b7-Picture16-1.png)

  * Kiểm tra value được sử dụng để deploy

    
    
    helm -n cert-manager get values cert-manager

![](/img/docs/39cc0cef5492-Picture17-1.png)

  * Kiểm tra trạng thái pods,service đã được deploy:

![](/img/docs/1a158bc4610a-Picture18-1.png)

[ Previous Search app catalogs trong repository ](./search-app-catalogs-trong-repository) [ Next Quản lý applications đã được deploy tới cluster ](./quan-ly-applications-da-duoc-deploy)
