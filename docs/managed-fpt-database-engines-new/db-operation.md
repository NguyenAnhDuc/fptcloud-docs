---
sidebar_class_name: hidden
sidebar_label: "Vận hành cơ sở dữ liệu"
title: "2. Managed – FPT Database Engines"
source: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-operation"
parent: "https://fptcloud.com/documents/managed-fpt-database-engines-new"
lang: vi
converted: "2026-03-19"
---

# 2. Managed – FPT Database Engines


Vận hành cơ sở dữ liệu


* * *

Mục này giúp bạn biết cách vận hành các cơ sở dữ liệu trên FPT Cloud Portal. Bạn có thể thực hiện các thao tác start, stop, restart và delete phù hợp với trạng thái vòng đời của cluster.

### Thao tác vận hành

  * **Start** : khởi động một cụm cơ sở dữ liệu đang ở trạng thái đã dừng. Khi thao tác được thực hiện, trạng thái của cụm chuyển sang "Starting" và sau đó là "Running" khi sẵn sàng phục vụ.
  * **Stop** : dừng một cụm cơ sở dữ liệu ở trạng thái đang chạy. Khi dừng, cluster sẽ tạm ngưng xử lý workload. Trạng thái chuyển sang "Stopping" và sau đó là "Stopped". Ở trạng thái này, cơ sở dữ liệu không phục vụ truy cập nhưng có thể được khởi động lại khi cần.
  * **Restart** : khởi động lại một cụm cơ sở dữ liệu đang chạy. Thao tác này sẽ dừng và khởi động lại cụm, thường được sử dụng để áp dụng thay đổi cấu hình hoặc khắc phục sự cố tạm thời. Trạng thái hiển thị "Restarting" và quay lại "Running" khi hoàn tất.
  * **Delete** : xoá một cụm cơ sở dữ liệu và toàn bộ dữ liệu liên quan. Hành động này không thể hoàn tác. Sau khi xóa thành công, cluster sẽ bị loại bỏ khỏi danh sách và các tài nguyên liên quan được giải phóng.

### Trạng thái và khả năng thao tác:

Trạng thái | Ý nghĩa | Các thao tác được thực hiện  
---|---|---  
Processing | Cơ sở dữ liệu đang được khởi tạo. | Delete  
Running | Cơ sở dữ liệu đang hoạt động bình thường. | Stop, Restart, Delete  
Stopped | Cơ sở dữ liệu đã dừng hoạt động. | Start, Delete  
Warning | Cơ sở dữ liệu đang hoạt động không ổn định. | Delete  
Failed | Cơ sở dữ liệu gặp lỗi không xác định. Nếu không còn sử dụng, hãy xóa cơ sở dữ liệu để dọn dẹp tài nguyên, hoặc liên hệ FPT Support để được hỗ trợ xử lý. | Delete  
  
### Thực hiện thao tác vận hành

Để thực hiện các thao tác vận hành, mở trang Database list, sau đó chọn biểu tượng "⋯" (More actions) trong cột "Action" của cơ sở dữ liệu cần thao tác. Danh sách các hành động khả dụng sẽ được hiển thị:

![](/img/docs/ed761eb4e83d-db-list-action.png)

Khi chọn một hành động, hệ thống sẽ hiển thị hộp thoại xác nhận. Bạn cần xác nhận thủ công để tiếp tục, nhằm tránh thực hiện các thao tác không mong muốn, đặc biệt với các hành động không thể hoàn tác.

Sau khi xác nhận, hệ thống sẽ thực hiện hành động trong khoảng 5–7 phút. Trong thời gian này, các thao tác khác đối với cơ sở dữ liệu sẽ tạm thời bị vô hiệu hóa cho đến khi quá trình hoàn tất.

[ Previous Kết nối cơ sở dữ liệu ](./db-connect) [ Next Nâng cấp phiên bản cho cơ sở dữ liệu ](./upgrade-version)
