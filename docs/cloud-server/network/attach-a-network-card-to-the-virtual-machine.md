---
sidebar_label: "Gắn thêm card mạng (NIC) vào máy ảo"
title: "Gắn thêm card mạng (NIC) vào máy ảo"
source: "https://fptcloud.com/documents/cloud-server/?doc=attach-a-network-card-to-the-virtual-machine"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# Gắn thêm card mạng (NIC) vào máy ảo


* * *

Bạn có thể gắn tối đa 10 card mạng vào một máy ảo. Để gắn thêm card mạng vào máy ảo bạn thao tác như sau:

**Bước 1** : Trên menu chọn **Compute Engine** > **Instance Management**. Chọn máy ảo cần gắn **Subnet** để vào trang **Instance Detail**.

![file](/img/docs/d937e2822b3f-image-1712722975848.png)

**Bước 2** : Mở tab **Network Interface**. Hệ thống sẽ hiển thị danh sách các card mạng đang được gắn với máy ảo cũng như thông tin của **Subnet** mà card mạng ấy đang kết nối đến. Chọn **Add NIC**.

![file](/img/docs/f9e5bd81558a-image-1744793401110.png)

**Bước 3** : Chọn **Subnet** trong **VPC** cần gắn với máy ảo. Chọn **Add NIC** để xác nhận. 

![file](/img/docs/4919d058c1fd-image-1712723037304.png)

Hệ thống sẽ xử lý và thông báo kết quả.

Nếu thành công, card mạng mới sẽ được hiển thị ở bảng **Network**.

![file](/img/docs/729a9887403d-image-1744793530914.png)

Sau khi add ở FPT Portal, thường thì các máy ảo Windows và Linux sẽ tự động nhận card mạng mới, người dùng sẽ không cần thực hiện bất kỳ cấu hình thủ công nào.

Tuy nhiên, trong một số trường hợp nếu người dùng Linux đang thực hiện một thao tác nào đó trên máy ảo hoặc có lỗi từ Hệ điều hành thì card mạng có thể sẽ không hiển thị. Bạn hãy khởi động lại máy để các config có hiệu lực. Nếu vẫn chưa được khắc phục bạn hãy cài đặt thủ công theo hướng dẫn sau: 

### **Xem địa chỉ IP hiện tại**

Để xem địa chỉ IP hiện tại của máy, người dùng Linux có thể sử dụng một trong các câu lệnh sau: 
    
    
    $ ip a

Hoặc
    
    
    $ ip addr

![file](/img/docs/b482495f64ba-image-1712723100683.png)

### **Đặt địa chỉ IP tĩnh**

Ubuntu 20.04 sử dụng netplan làm trình quản lý mạng mặc định. Tệp cấu hình cho netplan được lưu trữ trong thư mục / etc / netplan . Bạn có thể tìm thấy tệp cấu hình này được liệt kê trong thư mục / etc / netplan lệnh sau:
    
    
    $ ls / etc / netplan

Lệnh trên sẽ trả về tên của tệp cấu hình có phần mở rộng .yaml, trong trường hợp ví dụ dưới đây là 01-network-manager-all.yaml.

Trước khi thực hiện bất kỳ thay đổi nào đối với tệp này, cần đảm bảo tạo một bản sao lưu của tệp. Sử dụng lệnh cp để làm như vậy:
    
    
    $ sudo cp / etc / netplan / 01-network- manager- all .yaml 01-network- manager- all .yaml.ba

Lưu ý: có thể có tệp cấu hình có tên không phải là 01-network-manager-all.yaml. Vì vậy, người dùng cần sử dụng đúng tên tệp cấu hình trong các lệnh.

Sau đó, thêm các dòng sau bằng cách thay thế tên giao diện, địa chỉ IP, cổng và thông tin DNS phù hợp với nhu cầu mạng.

![file](/img/docs/6dc03fdb5132-image-1712723133085.png)

[ Previous Kết nối vào máy ảo Linux ](./tutorials-ket-noi-vao-may-ao-linux) [ Next Gỡ card mạng (NIC) khỏi máy ảo ](./remove-the-network-card-from-the-virtual-machine)
