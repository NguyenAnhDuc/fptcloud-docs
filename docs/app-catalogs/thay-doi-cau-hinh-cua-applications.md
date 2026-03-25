---
sidebar_class_name: hidden
sidebar_label: "Thực hiện thay đổi cấu hình của applications"
title: "2. FPT App Catalogs"
source: "https://fptcloud.com/documents/app-catalogs/?doc=thay-doi-cau-hinh-cua-applications"
parent: "https://fptcloud.com/documents/app-catalogs"
lang: vi
converted: "2026-03-19"
---

# 2. FPT App Catalogs


Thực hiện thay đổi cấu hình của applications


* * *

Tại màn hình xem chi tiết thông tin của app, thực hiện thay đổi cấu hình applications bằng cách thay đổi giá trị **User Define Values** như sau:

**Bước 1:** Xem chi tiết thông tin applications như mục 5.5.2

**Bước 2** : Tạo màn xem chi tiết > Chọn **Reconfig**

![](/img/docs/da64c67047ec-Picture25-1.png)

**Bước 3** : Thay đổi giá trị **User Define Values** :

![](/img/docs/464bd36affc1-Picture26-1.png)

**Bước 4** : Chọn **Confirm** để thực hiện Reconfig và kiểm tra kết quả deploy của config

![](/img/docs/2f7ff50696e8-Picture27-1.png)

**Bước 5** : Kiểm tra thông tin reconfig dưới cluster
    
    
    helm -n cert-manager get values cert-manager

![](/img/docs/e0ab09a2eee3-Picture28-1.png)
    
    
    kubectl -n cert-manager get pods

![](/img/docs/431076fb9512-Picture29-1.png)

Số lượng replicas thay đổi theo số lượng đã được config.

[ Previous Xem chi tiết một App đã được deploy ](./xem-chi-tiet-app-da-deploy) [ Next Thực hiện rollback app về cấu hình cũ ](./rollback-app-ve-cau-hinh-cu)
