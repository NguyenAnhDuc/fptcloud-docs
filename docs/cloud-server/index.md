---
sidebar_label: "Cloud Server"
title: "Cloud Server"
source: "https://fptcloud.com/documents/cloud-server/"
lang: vi
converted: "2026-03-19"
---

# Cloud Server

Cloud Server

Với lợi thế rất lớn của mình, dịch vụ máy chủ ảo FPT (FPT Cloud Server) sẽ giúp bạn chủ động phát triển và triển khai các ứng dụng nhanh hơn mà không cần đầu tư trước quá nhiều vào phần cứng. Bạn có thể sử dụng FPT Cloud Server để khởi tạo một hoặc nhiều máy ảo tùy ý. Bạn cũng có thể tự mua thêm và thay đổi thông số, cài đặt mạng, storage nhanh chóng ngay trên giao diện FPT Portal mà không cần thuê nhân sự duy trì. Những điều cần lưu ý trước khi bạn tạo một máy chủ ảo ?

Hệ điều hành chạy trên máy ảo: Mỗi HĐH đều có những điểm mạnh và điểm yếu khác nhau. Tùy vào nhu cầu và mục đích sử dụng mà bạn nên chọn HĐH cho phù hợp nhất. Tham khảo bài viết: <https://fptcloud.com/windows-server-va-linux-server/> Số lượng máy chủ sẽ tạo: Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định về số lượng tài nguyên được tạo, bạn nên xác định số lượng tối đa máy chủ sẽ tạo để FPT Cloud hỗ trợ bạn tốt nhất. Cấu hình RAM/CPU/Storage ban đầu: Tùy vào khối lượng công việc cần xử lý mà bạn nên chọn thông số phù hợp, tránh tình trạng thiếu hoặc thừa quá nhiều. Ngoài ra FPT Cloud hiện đã hỗ trợ resize không giới hạn máy chủ nên bạn hoàn toàn yên tâm nếu tương lai muốn mở rộng hệ thống. Vị trí địa lý đặt máy ảo: Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ đường truyền từ internet đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. Các tài nguyên liên quan khác: Ví dụ tài nguyên Network (VPC, Public IP v4, IP v6…), GPU, Storage Disk, …

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./initial-setup)

## Hướng dẫn nhanh (Quick Starts) 

  * [ Tạo một máy ảo ](./quick-starts/quick-starts-tao-mot-may-ao)
    * [ Lưu ý khi tạo máy ảo từ file iso ](./quick-starts/create-vm-iso)
  * [ Clone instance ](./quick-starts/clone-instance)
  * [ Tắt/Bật máy ảo ](./quick-starts/quick-starts-tatbat-may-ao)
  * [ Khởi động lại máy ảo ](./quick-starts/quick-starts-khoi-dong-lai-may-ao)
  * [ Lock & Unlock Instance Deletion ](./quick-starts/lock-unlock-instance-deletion)
  * [ Xóa máy ảo ](./quick-starts/quick-starts-xoa-may-ao)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Quản lý máy ảo ](./vm-management/quan-ly-may-ao)
    * [ Khởi tạo một máy ảo mới ](./vm-management/tutorials-khoi-tao-mot-may-ao-moi)
    * [ Clone instance ](./quick-starts/clone-instance)
    * [ Kết nối vào máy ảo Windows ](./vm-management/tutorials-ket-noi-vao-may-ao-windows)
    * [ Kết nối vào máy ảo Linux ](./vm-management/tutorials-ket-noi-vao-may-ao-linux)
    * [ Gắn thêm card mạng (NIC) vào máy ảo ](./network/attach-a-network-card-to-the-virtual-machine)
    * [ Gỡ card mạng (NIC) khỏi máy ảo ](./network/remove-the-network-card-from-the-virtual-machine)
    * [ Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo ](./vm-management/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao)
    * [ Thay đổi thông tin, cấu hình máy chủ ](./vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu)
    * [ Backup máy chủ với Snapshot ](./vm-management/tutorials-backup-may-chu-voi-snapshot)
    * [ Lock & Unlock Instance Deletion ](./quick-starts/lock-unlock-instance-deletion)
    * [ Xóa máy ảo ](./vm-management/tutorials-xoa-may-ao)
  * [ Quản lý GPU với Portal Console ](./gpu/gpu)
    * [ Quản lý GPU với Console Portal ](./gpu/gpu-general)
    * [ Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific ](./gpu/gpu-specific)
  * [ Quản lý GPU Server với HPC Portal ](./gpu/quan-ly-gpu-voi-hpc-portal)
    * [ Hướng dẫn nhanh ](./hpc/hpc-quick-start)
    * [ Đổi cấu hình máy ](./hpc/hpc-change-package)
    * [ Đặt thời gian thuê cố định ](./hpc/hpc-fixed-rental)
    * [ Sao lưu image ](./hpc/hpc-snapshot-backup)
    * [ Cố định máy vật lý ](./hpc/hpc-hardware-fixation)
    * [ Khởi động lại máy ](./hpc/hpc-rest-machine)
    * [ Đặt lịch tắt máy ](./hpc/hpc-schedule-shutdown)
    * [ Clone image ](./hpc/hpc-clone-image)
    * [ Đặt mật khẩu cấp 2 ](./hpc/hpc-level-2-password)
    * [ Xoá image ](./hpc/hpc-delete-image)
  * [ Block Storage ](./storage/block-storage)
    * [ Tạo Storage Disk ](./storage/tao-storage-disk)
    * [ Gắn Storage Disk vào máy ảo ](./storage/gan-storage-disk-vao-may-ao)
    * [ Cấu hình ổ đĩa cho máy ảo chạy Windows ](./storage/cau-hinh-o-dia-cho-may-ao-chay-windows)
    * [ Gỡ Storage Disk khỏi máy ảo ](./storage/go-storage-disk-khoi-may-ao)
    * [ Edit Storage Disk ](./storage/edit-storage-disk)
    * [ Xóa Storage Disk ](./storage/xoa-storage-disk)
  * [ Profile SSH Key ](./other/profile-ssh-key)
  * [ Token ](./token/token)
    * [ Create token ](./token/create-token)
    * [ Revoke token đã khởi tạo ](./token/revoke-token)
    * [ FQAs ](./other/fqas)
  * Custom Images 
    * [ Custom Images Overview ](./custom-images/custom-images-overview)
    * [ Tải lên Custom Image ](./custom-images/tai-len-custom-image)
    * [ Xóa Custom Image ](./custom-images/xoa-custom-image)
  * [ Quản lý Instance Template ](./vm-management/tutorials-quan-ly-instance-template)
    * [ Khởi tạo template từ máy ảo ](./vm-management/tutorials-khoi-tao-template-tu-may-ao)
    * [ Quản lý template được tạo từ máy ảo trên trang Custom Images ](./vm-management/tutorials-quan-ly-template-duoc-tao-tu-may-ao)
    * [ Tạo instance từ template ](./vm-management/tutorials-tao-instance-tu-template)
    * [ Xóa template ](./vm-management/tutorials-xoa-template)
  * [ NAT Instance ](./network/nat-instance)
  * [ Quản lý NIC (Network Interface Card) ](./network/nic-overview-1)
    * [ Overview ](./network/overview-nic)
    * [ Khởi tạo card Network Interface Card - Primary ](./network/create-card-nic--primary)
    * [ Disable Network Interface Card ](./network/disable-nic-card)
    * [ Enable Network Interface Card ](./network/enable-nic-card)
    * [ Thêm Network Interface Card mới ](./network/add-card-nic--new)
    * [ Chuyển card thường thành card Primary ](./network/convert-card)
    * [ Edit IP Address ](./network/edit-ip-address)
    * [ Thay đổi địa chỉ MAC ](./network/change-address-mac)
    * [ Xóa Network Interface Card ](./network/delete-card-nic)
    * [ Change Network Config ](./network/change-network-config)
  * [ Networking ](./network/network-all)
    * [ Networking Overview ](./network/networking-overview)
    * [ Gateway ](./network/gateway)
    * [ Quản lý Floating IP ](./network/quan-ly-floating-ip)
    * [ Quản lý Subnets ](./quản-lý-subnets)
    * [ Allow address pair ](./network/allow-address-pair)
  * [ Quản lý Security Group ](./network/quan-ly-security-group)
    * [ Filter Security Group ](./network/security-group-filter)
    * [ Manage Priority Rule of Security Group ](./network/security-group-priority-rule)
  * [ IaC (Terraform) ](./other/terraform)
  * [ Quản lý Instance Group với chính sách Affinity & Anti-Affinity ](./instance-group/instance-group)
    * [ Giới thiệu ](./instance-group/overview-affinity)
    * [ Khởi tạo một Instance Group mới ](./instance-group/create-instance-group)
    * [ Chỉnh sửa Instance Group ](./instance-group/edit-instance-group-specific)
    * [ Gắn máy ảo vào Instance Group ](./instance-group/add-instance-instance-group)
    * [ Xóa một Instance Group ](./instance-group/delete-instance-group)
  * [ Notification Bell ](./other/overview-bell)
    * [ Create token ](./token/create-token)
    * [ Revoke token đã khởi tạo ](./token/revoke-token)
    * [ FQAs ](./other/fqas)
  * [ Quản lý Project ](./other/project-structure)
    * [ Quản lý Project ](./other/quan-ly-project)
    * [ Chọn Project khi tạo VPC ](./network/select-project-when-creating-vpc)
    * [ Thay đổi giao diện header ](./vm-management/header-project)
  * [ Sử dụng dịch vụ tính tiền theo phương thức PAYG ](./other/new-quota)
    * [ ](<>)
  * [ Auto schedule to on-off Instance ](./scheduling/instance-schedule)
    * [ Instance Schedule Overview ](./scheduling/schedule-overview)
    * [ Tạo một instance schedule mới ](./scheduling/create-new-instance)
    * [ Xem chi tiết một instance schedule ](./vm-management/view-detail-instance)
    * [ Gắn một hoặc nhiều máy ảo vào instance schedule ](./scheduling/attach-schedule-to-instance)
    * [ Gỡ một hoặc nhiều máy ảo vào instance schedule ](./scheduling/detach-schedule-to-instance)
    * [ Xóa một instance schedule ](./scheduling/delete-instance-schedule)
  * [ Lịch snapshot máy ảo ](./scheduling/schedule-snapshotvm)
    * [ Tạo lịch snapshot máy ảo ](./scheduling/create-schedule-snapshotvm)
    * [ Xem chi tiết lịch snapshot máy ảo ](./scheduling/viewschedule-snapshotvm)
    * [ Chỉnh sửa lịch snapshot máy ảo ](./scheduling/editschedule-snapshotvm)
    * [ Xóa lịch snapshot máy ảo ](./scheduling/deleteschedule-snapshotvm)
  * [ Lịch snapshot ổ đĩa ](./scheduling/schedule-snapshotstorage)
    * [ Tạo lịch snapshot ổ đĩa ](./scheduling/createschedule-snapshotstorage)
    * [ Xem chi tiết lịch snapshot ổ đĩa ](./scheduling/viewschedule-snapshotstorage)
    * [ Chỉnh sửa lịch snapshot ổ đĩa ](./scheduling/editschedule-snapshotstorage)
    * [ Xóa lịch snapshot ổ đĩa ](./scheduling/deleteschedule-snapshotstorage)

## Các câu hỏi thường gặp (FAQs) 

  * [ Tôi có thể tùy chỉnh toàn bộ rule trong các security group không? ](./other/question-2)
  * [ Tôi có thể hiệu chỉnh các address pair đã khởi tạo không? ](./other/question-1)
  * [ Nat Instance có thể được sử dụng như 1 instance thông thường không? ](./other/question-)

## Một số gợi ý mẫu (Samples) 

