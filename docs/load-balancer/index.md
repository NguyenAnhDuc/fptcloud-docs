---
sidebar_label: "Load Balancer"
title: "Load Balancer"
source: "https://fptcloud.com/documents/load-balancer/"
lang: vi
converted: "2026-03-19"
---

# Load Balancer

Load Balancer

### Giới thiệu về dịch vụ Load Balancer trên FPT Cloud.

Cân bằng tải (Load Balancer) là việc thực hiện phân phối tải lên một nhóm máy chủ ảo hoặc nhóm tài nguyên backend (web server, web app, containers...) sao cho tối ưu nhất.

Các website hay web app hiện nay có thể phải phục vụ lên tới hàng trăm nghìn khách hàng trong một ngày với hàng triệu request đến cùng lúc. Nếu chỉ sử dụng một máy chủ đơn lẻ thì rất khó để đáp ứng được toàn bộ khối lượng công việc này. Phương án tốt nhất để giải quyết là mở rộng hệ thống lên nhiều máy chủ cùng nhau xử lý.

Sau khi được khởi tạo và cấu hình, FPT Load Balancer sẽ chịu trách nhiệm tự động điều phối traffic đến và phân chia đồng đều cho các máy chủ trong group, đảm bảo tất cả các request đều được tối ưu nhất về tốc độ và hiệu suất xử lý. FPT Load Balancer còn sẽ liên tục kiểm tra tính sẵn sàng của các máy chủ, trong trường hợp có một máy bị hỏng không thể kết nối được. Bộ điều khiển sẽ tự động chuyển toàn bộ traffic đến các máy còn lại cho đến khi máy bị hỏng trở lại hoạt động bình thường.

Do các đặc tính này của Load Balancer nên dịch vụ của bạn luôn được đảm bảo về hiệu năng, tốc độ xử lý và tính sẵn sàng của hệ thống sẽ ở mức cao nhất.

Bài viết này sẽ cung cấp cho bạn thông tin về những điều bạn cần biết trước khi tạo một FPT Load Balancer, cách bạn tạo và quản lý nó trên FPT Portal.

### Những điều cần lưu ý trước khi bạn tạo một Load Balancer.

  * **Số lượng máy chủ:** Bạn cần tính toán khối lượng công việc mà các máy chủ cần xử lý để chọn số máy chủ cho phù hợp.
  * **Kích thước của bộ điều khiển Load Balancer:** Hiện tại **FPT Cloud** đang cung cấp các gói khác nhau từ **Basic** cho đến **Premium**. Mỗi gói sẽ có thông số hỗ trợ tối đa khác nhau. Bạn có thể liên hệ với nhân viên hỗ trợ để được tư vấn gói phù hợp nhất.
  * **Vị trí địa lý đặt các máy ảo:** Vị trí địa lý (**Region**) có thể sẽ ảnh hưởng đến tốc độ đường truyền từ internet đến các máy chủ ảo trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ.
  * **Thuật toán cân bằng tải :** FPT đang cung cấp 2 thuật toán chính là **Round Robin** và **Least Connections**. Bạn nên tìm hiểu cơ chế hoạt động và ưu nhược điểm của 2 phương thức này để chọn được thuật toán tối ưu nhất với web/app của mình.

##  Trang chủ 

## Overview 

## Initial Setup 

  * [ Initial Setup ](./initial/initial-setup)

## Load Balancer (Tutorials) 

  * [ Quản lý Load Balancer ](./management/quan-ly-load-balancer)
    * [ Khởi tạo Load Balancer ](./initial/khoi-tao-load-balancer)
    * [ Update Load Balancer ](./management/cap-nhat-load-balancer)
    * [ Theo dõi biểu đồ giám sát Load Balancer ](./management/theo-doi-bieu-do-load-balancer)
    * [ Thêm External member cho Load Balancer ](./management/them-external-member)
    * [ Resize cho Load Balancer ](./management/resize-load-balancer)
    * [ Access logs cho Load balancer ](./management/access-logs)
    * [ Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON) ](./management/tich-hop-fmon)
  * [ Quản lý Listener ](./listener/quan-ly-listener)
    * [ Khởi tạo Listener ](./listener/khoi-tao-listener)
    * [ Cấu hình Timeout ](./listener/cau-hinh-timeout)
    * [ Cấu hình L7 policy cho Listener ](./listener/chinh-sua-listener)
    * [ Cấu hình redirect HTTP request sang HTTPS ](./listener/redirect-http-request-sang-https)
    * [ Redirect prefix ](./listener/redirect-prefix)
    * [ Enable HSTS to HTTPS Listener ](./listener/enable-hsts-to-http-listener)
    * [ Cấu hình Allow IP/CIDR ](./listener/allow-ip-cidr)
    * [ Cấu hình SNI trên Load balancer ](./listener/sni-load-balancer)
  * [ Quản lý Server Pool ](./server-pool/quan-ly-server-pool)
    * [ Khởi tạo Server Pool ](./server-pool/khoi-tao-server-pool)
    * [ Thêm/bớt member cho Server pool ](./server-pool/them-bot-member-cho-server-pool)
    * [ Chỉnh sửa cấu hình Health check ](./server-pool/chinh-sua-cau-hinh-health-check)
  * [ Quản lý SSL Certificate ](./ssl/quan-ly-ssl-certificate)
    * [ Import SSL Certificate cho Load Balancer ](./ssl/import-ssl-certificate-cho-load-balancer)
    * [ Xoá SSL Certificate ](./ssl/xoa-ssl-certificate)

## Classic Load Balancer (Tutorials) 

  * [ Quản lý Load Balancer ](./management/manage-load-balancer)
    * [ Khởi tạo một Load Balancer mới ](./initial/khoi-tao-mot-load-balancer-moi)
    * [ Thêm máy ảo vào Load Balancer ](./management/them-may-ao-vao-load-balancer)
    * [ Xóa máy ảo khỏi Load Balancer ](./management/xoa-may-ao-khoi-load-balancer)
    * [ Thay đổi thông tin cấu hình Load Balancer ](./management/thay-doi-thong-tin-cau-hinh-load-balancer)
    * [ Xóa Load Balancer ](./management/xoa-load-balancer)
  * [ Quản lý chứng chỉ SSL cho Load Balancer ](./ssl/ssl-load-balancer)
    * [ Tạo/Import SSL Certificate ](./ssl/tao-import-ssl-certificate)
    * [ Xem thông tin chi tiết SSL Certificate ](./ssl/xem-thong-tin-chi-tiet-ssl-certificate)

