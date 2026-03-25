---
sidebar_label: "Bật/Tắt Node Auto-repair"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=bat-tat-node-auto-repair"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Bật/Tắt Node Auto-repair


* * *

_Bên cạnh tính năng Cluster Autoscale, FPTCloud cung cấp tính năng Node Auto-repair hỗ trợ người dùng tự động reboot worker nodes bị NotReady quá 3 phút. Tính năng này mang đến hiệu quả trong trường hợp các worker nodes bị quá tải hoặc gặp vấn đề liên quan đến container runtime, kubelet dẫn đến tình trạng node NotReady. Nếu sau quá trình auto repair mà node không thể trở lại trạng thái Ready thì sau 10 phút hệ thống sẽ thay thế node notReady đó bằng một node mới có cấu hình tương tự. Tính năng này mặc định enable cho worker group base (là worker group chứa các thành phần system của cluster). Người dùng có thể lựa chọn enable hoặc disable tính năng này cho các worker group khác trong cluster._

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn bật/tắt Node Auto-repair. 

![](/img/docs/fa3d57223581-Picture31.png)

**Bước 2** : Chọn **Node Pools** > **Edit Workers**

![](/img/docs/1c81009b0702-Picture4-3.png)

**Bước 3** : Tại woker pool, thực hiện bật/tắt tính năng Node auto repair. 

![](/img/docs/8691df0e737c-Picture33.png)

**Lưu ý:** Chỉ có thể nâng cấp version, không thực hiện được việc hạ version.

**Bước 4** : Click button **Save**. 

![](/img/docs/0822dd519531-Picture34.png)

![](/img/docs/b4d390448a22-Picture35.png)

Quá trình chỉnh sửa Bật/Tắt Node auto repair sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.

[ Previous Chỉnh sửa label/taint cho worker group ](./chinh-sua-label-taint-cho-worker-group) [ Next Tính năng chuyển worker group base ](./chuyen-worker-group-base)
