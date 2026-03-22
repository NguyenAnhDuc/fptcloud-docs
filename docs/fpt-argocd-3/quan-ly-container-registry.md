---
sidebar_class_name: hidden
sidebar_label: "Quan ly container registry"
title: "2. FPT ArgoCD"
source: "https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-container-registry"
parent: "https://fptcloud.com/documents/fpt-argocd-3"
lang: vi
converted: "2026-03-19"
---

# 2. FPT ArgoCD


Quản lý Container Registry


* * *

**_A. Thêm mới Container Registry_**

  * **Bước 1:** Tại màn hình **Image Updater** > **Container Registry** > **Add Container Registry** , thực hiện thêm mới Container Registry như sau: ![](/img/docs/327acd352d21-Picture27-5.png)
  * **Bước 2:** Nhập thông tin Container Registry cần tạo: ![](/img/docs/ff1fe795021c-Picture29-4.png)

Trong đó: 

✓ Name: Tên container registry. Giá trị này người dùng đặt tuỳ ý 

Ví dụ: My Custom Registry 

✓ Prefix: Prefix của registry, tên này phải khớp với DNS và phải là duy nhất 

Ví Dụ: docker.io 

✓ API URL: API url của docker registry. Phải là http/https 

VD: https://registry-1.docker.io 

✓ Default namespace: Một số registry có một default namespace ( đặc biệt là docker hub) 

VD: library 

✓ Credentials: được sử dụng để xác thực tới registry 

VD: pullsecret:argocd-[argocd-id]/dockerhub-secret. Trong đó dockerhub-secret là secret registry được thêm qua portal 

[argocd-id] được lấy trên url truy cập vào argocd 

![](/img/docs/f3ce82fa6916-Picture1-6.png)

✓ Set Default: Nếu set là true, registry này là default registry 

✓ Set insecure: được sử dụng để disable xác minh TLS cho registry 

  * **Bước 3:** Kết quả sau khi thêm mới Container Registry: ![](/img/docs/214ebb118de2-Picture30-4.png)

**_B. Cập nhật Container Registry_**

  * **Bước 1:** Tại màn hình **Image Updater** > Chọn **Conrtainer Registry** muốn cập nhật > **Edit** , thực hiện cập nhật Container Registry như sau: ![](/img/docs/35d409d0a57e-Picture31-4.png)

  * **Bước 2:** Thực hiện chỉnh sửa cấu hình Container Registry đã thêm: ![](/img/docs/9f6e263cf38c-Picture32-4.png)

Thực hiện chỉnh sửa các tham số cấu hình cho container registry. Ví dụ: thay đổi name/Prefix/ set default/insecure

Lưu ý: Các container registry được thêm vào chỉ có duy nhất 1 container registry là default

  * **Bước 3:** Kết quả sau khi cập nhật ![](/img/docs/d034784369e4-Picture33-4.png)

**_C. Xoá Container Registry_**

  * **Bước 1:** Tại màn hình **Image Updater** > **Container Registry** > **Chọn Container Registry muốn xoá** : ![](/img/docs/b862bf0113c3-Picture34-4.png)
  * **Bước 2:** Nhập confirm text ![](/img/docs/1e53ea64ebbe-Picture35-4.png)
  * **Bước 3:** Kết quả sau khi xoá container registry ![](/img/docs/b81d7d020cab-Picture36-4.png)

[ Previous Quản lý registry secret ](./quan-ly-registry-secret) [ Next Cấu hình webhook  ](./cau-hinh-webhook)
