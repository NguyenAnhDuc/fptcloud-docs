---
sidebar_label: "Tinh nang runtime security cluster"
title: "2. Managed – FPT Kubernetes Engine"
source: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-runtime-security-cluster"
parent: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Kubernetes Engine


Tính năng Runtime Security cho Managed Kubernetes Cluster 


* * *

**1\. Giới thiệu chung tính năng Runtime Security**

Để đảm bảo bảo về an toàn bảo mật thông tin cho FPT Cloud Managed Kubernetes cluster, FPT Cloud phát triển tính năng cho phép tích hợp công cụ hỗ trợ Runtime Security cung cấp khả năng phát hiện các hành động bất thường trong K8S cluster có thể gây rủi ro cho lớp runtime và kernel của worker node.

Falco là một công cụ mã nguồn mở mạnh mẽ dùng để giám sát và phát hiện các hoạt động bất thường trong hệ thống container và Kubernetes. Falco được phát triển bởi Sysdig và hiện là một dự án được đảm bảo của CNCF (Cloud Native Computing Foundation). Tính năng chính của Falco là cung cấp "runtime security" - bảo mật thời gian thực - cho các hệ thống bằng cách theo dõi các hành vi của hệ điều hành và các container, sau đó dựa vào các rule đã được xác định trước để phát hiện các hoạt động bất thường hoặc tiềm ẩn rủi ro cho hệ thống.

FPT Cloud cung cấp tích hợp tính năng Runtime Security cho phép người dùng cấu hình nhận cảnh báo chi tiết của các hành vi qua Telegram hoặc Gmail. Bằng cách sử dụng các kênh cảnh báo, Security Runtime giúp đảm bảo rằng các sự kiện bảo mật được phát hiện kịp thời và các quản trị viên có thể hành động nhanh chóng để bảo vệ hệ thống.

**2\. Hướng dẫn sử dụng tính năng trên Unify Portal:**

_Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))_

**A**. Tích hợp Falco Engine:

**1\. Enable Falco Engine**

  * Bước 1: Truy cập portal FPT Cloud console.fptcloud.com, chọn mục **Kubernetes**

![](/img/docs/88d55a793dbc-Picture1-8.png)

  * Bước 2: Chọn cluster cần tích hợp Runtime 

![](/img/docs/525544d91276-Picture2-6.png)

  * Bước 3: Chọn tab Security > Chọn Runtime Security rồi thực hiện enable:

![](/img/docs/ce7293838b27-Picture3-6.png)

  * Bước 4: Chọn Confirm để hoàn thành

![](/img/docs/10290f0dcc32-Picture4-5.png)

Runtime Security được enable thành công nhưng người dùng sẽ không nhận được cảnh báo do chưa cấu hình các kênh nhận cảnh báo.

![](/img/docs/87c9c8f9cd8e-Picture5-5.png)

**B**. Disable Falco Engine

Khi không có nhu cầu tích hợp Runtime Security, người dùng có thể Disable dịch vụ ngay trên portal.

  * Bước 1: Bấm vào button đang ở trạng thái Enable

![](/img/docs/912fbb007791-Picture6-5.png)

  * Bước 2: Nhập tên cụm và bấm Disable

![](/img/docs/5b1a139607b5-Picture7-5.png)

Kết quả sau khi Disable:

![](/img/docs/8025d23871da-Picture8-4.png)

**C**. Tích hợp tính năng Falco UI

**1\. Enable Falco UI**

  * Bước 1: Chọn tab Security Chọn Runtime Security rồi thực hiện enable

![](/img/docs/e4bf5847ebf0-Picture9-3.png)

  * Bước 2: Thực hiện Enable UI

![](/img/docs/95f69088152e-Picture10-3.png)

  * Bước 3: Nhập User Name và Password để truy cập vào Falco UI, sau đó bấm Confirm để hoàn thành

![](/img/docs/5d7802036f30-Picture11-2.png)

![](/img/docs/2a273fdfc87b-Picture12-3.png)

  * Bước 4: Download file kubeconfig và thực hiện port-forward cho service “falco-falcosidekick-ui". Người dùng có thể sử dụng công cụ Lens IDE để thực hiện port-forward trên giao diện dashboard bằng cách > chọn Network > chọn Services > Filter theo Namespace fptcloud-runtime-security

![](/img/docs/7145e35754fc-Picture13-2.png)

Chọn Service falco-falcosidekick-ui, chọn Forward

![](/img/docs/bb48a8d7419a-Picture14-2.png)

Nhập port forward và bấm Start để truy cập

![](/img/docs/8f8f127c7189-Picture15-2.png)

  * Bước 5: Nhập Username và Password đã cấu hình khi enable dịch vụ 

![](/img/docs/d46d7febffac-Picture16-2.png)

Kết quả sau khi login:

![](/img/docs/1e73f1f57c6c-Picture17-2.png)

Màn hình dashboard khi có cảnh báo:

![](/img/docs/9e9a042d5728-Picture18-2.png)

**2\. Update Username và Password**

  * Bước 1: Bấm Edit Rutime 

![](/img/docs/b353e77976c1-Picture19-2.png)

  * Bước 2: Thực hiện edit Username và Password và bấm Confirm

![](/img/docs/1434324af658-Picture20-2.png)

![](/img/docs/6d5e1e2f7d48-Picture21-2.png)

**3\. Disable Falco UI**

Để thực hiện disable Falco UI, chọn Edit Runtime > Bấm button đang Enable > Bấm Confirm

![](/img/docs/35ccf2824818-Picture22-2.png)

![](/img/docs/5cd992439a9c-Picture23-2.png)

![](/img/docs/1d7bb0790d9d-Picture24-2.png)

Kết quả sau khi Disable Falco UI:

![](/img/docs/4684d6eb0e48-Picture25-2.png)

**D**. Tích hợp Runtime Security Event Notification

**1\. Telegram**

1.1. Enable Runtime Security Event Notification

Bước 1: Đăng nhập Telegram, search BotFather

![](/img/docs/9f59ef7d7332-Picture26-2.png)

Bước 2: Nhập /newbot và tiến hành đặt tên cho bot

![](/img/docs/6ee2ba650d29-Picture27-2.png)

Bước 3: Tạo group chat để nhận thông báo

![](/img/docs/f21f0f24380e-Picture28-2.png)

![](/img/docs/89f24d134795-Picture29-2.png)

![](/img/docs/e9df26bed65c-Picture30-2.png) ![](/img/docs/c94025082b76-Picture31-2.png)

![](/img/docs/b4cf9d92a075-Picture32-2.png)

Bước 4: Trên Unify portal, thực hiện enable Runtime Security Event Notification

![](/img/docs/710ec259c32e-Picture33-2.png)

Bước 5: Chọn kênh nhận cảnh báo là Telegram, nhập ChatID và Token ID sau đó bấm Confirm

![](/img/docs/bdf2572fd1ec-Picture34-2.png)

Kết quả sau khi cấu hình xong:

![](/img/docs/94806381504c-Picture35-2.png)

Khi phát hiện sự bất thường, telegram của người dùng sẽ nhận được cảnh báo như hình dưới đây:

![](/img/docs/b799e46ed7fc-Picture36-2.png)

1.2 Thay đổi kênh nhận thông báo qua Gmail

Lưu ý: Trước khi tạo Application Token cho Gmail, cần phải bật tính năng “Xác minh 2 bước” trên Tài khoản Google của mình.

Bước 1: Truy cập [Link](<https://accounts.google.com/v3/signin/challenge/pwd?TL=AKeb6mwAuh3qaC1eKc7XewCMQU6V6lDuv3Om7ECAlm5R3MUftowOoR4MX-XbD84l&cid=3&continue=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&ifkv=Ab5oB3ob8hiIojOpjbbdnRQCMUP-nN9e1JkarHYVPJC5rqHF2C0uV-5LfGO3o3CngznWNb750rsr&osid=1&rart=ANgoxcdw5cHl3-8KJUueNT-AOeg1uh0cFuqiMIYcsOFhdFZ3OLrYh76YA6MaQzOzIUzWMD0eRq9U2sOrd54eBwDGwp59FrpO-d9ALceCMK6WKkSUeohZqCs&rpbg=1&service=accountsettings>) để tạo Application Token 

![](/img/docs/80332a4ab749-Picture37-2.png)

![](/img/docs/c92796bc9007-Picture38-2.png)

Bước 2: Chọn Edit Runtime

![](/img/docs/b7ff93b3ce6d-Picture39-1.png)

Bước 3: Nhập thông tin để nhận thông báo qua Gmail và bấm Confirm

![](/img/docs/517093c106aa-Picture40-1.png)

Kết quả sau khi cấu hình xong:

![](/img/docs/65717d16d430-Picture41-1.png)

Khi có bất thường, hệ thống sẽ gửi cảnh báo về Gmail như ví dụ bên dưới:

![](/img/docs/0d8044e6f49d-Picture42-1.png)

1.3. Disable Runtime Security Event Notification

Khi không có nhu cầu nhận thông báo qua Telegram hoặc Gmail, người dùng vào tab Security > chọn Edit Runtime và thực hiện disable Runtime Security Event Notification > Bấm Confirm

![](/img/docs/fdc9e740d3de-Picture43-1.png) ![](/img/docs/c148eb98097d-Picture44-1.png) ![](/img/docs/059e399cb71e-Picture45-1.png) ![](/img/docs/cb38d13e0490-Picture46-1.png)

Sau khi disable Runtime Security Event Notification, người dùng sẽ không còn nhận bất kỳ cảnh báo nào khi có bất thường xảy ra.

[ Previous Tính năng Benchmark Managed Kubernetes Cluster ](./tinh-nang-benchmark-cluster) [ Next Tính năng Workload Managed Kubernetes Cluster ](./tinh-nang-workload-scan)
