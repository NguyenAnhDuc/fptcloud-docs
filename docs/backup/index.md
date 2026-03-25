---
sidebar_label: "Backup"
title: "Backup"
source: "https://fptcloud.com/documents/backup/"
lang: vi
converted: "2026-03-19"
---

# Backup

Backup

## 1.1. Backup Native là gì?

Backup Native là dịch vụ sao lưu dữ liệu dành cho Cloud Server (VM) và Volume trên FPT Cloud.

Dịch vụ giúp người dùng tạo ra các bản sao lưu (backup) theo lịch hẹn hoặc thủ công, và có thể khôi phục lại hệ thống về thời điểm mong muốn khi xảy ra lỗi, sự cố, hay nhầm lẫn thao tác.

Các bản sao lưu được quản lý ngay trong giao diện Backup Management, dễ theo dõi, dễ thao tác, và hoàn toàn tự động.

## 1.2. Những lợi ích khi sử dụng

Backup Native mang đến cho bạn các lợi ích sau:

  * **Bảo vệ dữ liệu toàn diện**

Các bản sao lưu định kỳ giúp bạn luôn có điểm khôi phục an toàn khi VM hoặc Volume gặp sự cố.

  * **Khôi phục nhanh chóng**

Chỉ vài thao tác là có thể đưa hệ thống trở lại trạng thái trước đó mà không cần xử lý thủ công phức tạp.

  * **Hoạt động tự động**

Các job sao lưu được tạo theo lịch, chạy ngầm, không làm gián đoạn ứng dụng đang sử dụng.

  * **Hỗ trợ cả VM và Volume**

Linh hoạt cho nhiều loại workload: ứng dụng, database, file server, môi trường dev/test…

  * **Dễ quản lý, dễ theo dõi**

Toàn bộ trạng thái job, lịch sử chạy, report… được hiển thị rõ ràng trong một giao diện duy nhất.

  * **An tâm vận hành dài hạn**

Hạn chế rủi ro mất dữ liệu do lỗi thao tác, lỗi phần mềm, hoặc sự cố bất ngờ.

## 1.3. Các đối tượng được hỗ trợ

Backup Native hiện hỗ trợ hai nhóm tài nguyên chính:

### Cloud Server (VM)

  * Sao lưu toàn bộ trạng thái VM tại thời điểm backup.
  * Phù hợp cho các ứng dụng, website, hệ thống chạy trực tiếp trên máy chủ.

### PVC của FPT Kubernetes Engine (FKE)

  * Chỉ các volume được tạo ra bởi dịch vụ **FKE** mới được phép tạo job backup.
  * Hỗ trợ sao lưu dữ liệu ứng dụng đang chạy trong cluster K8S (database, file storage, ứng dụng stateful…).
  * Phù hợp cho workload containerized cần đảm bảo tính toàn vẹn dữ liệu.

## 1.4. Các usecase phổ biến

Dưới đây là những tình huống mà khách hàng thường sử dụng Backup Native:

  * **Khôi phục dữ liệu khi xóa nhầm file hoặc config**

Bạn có thể restore volume về bản sao gần nhất.

  * **Rollback ứng dụng khi update lỗi**

Khi deploy phiên bản mới gây lỗi, bạn có thể khôi phục VM về snapshot an toàn.

  * **Bảo vệ dữ liệu định kỳ**

Lên lịch backup mỗi ngày/tuần/tháng để đảm bảo hệ thống luôn có điểm an toàn.

  * **Sao lưu trước khi thực hiện thay đổi lớn**

Ví dụ nâng cấp hệ điều hành, thay đổi cấu trúc database, nâng cấp phần mềm.

  * **Lưu bản backup cho môi trường test/dev**

Giúp đội dev/QA dễ dàng quay lại trạng thái ban đầu khi test chức năng.

##  Trang chủ 

## Initial Setup 

  * [ Initial Setup ](./backup-initial-setup)

## Hướng dẫn chi tiết (Tutorials) 

  * [ Quản lý Backup job ](./quan-ly-backup-job)
  * [ Restore lại VM từ các Restore Point ](./restore-lai-vm-tu-cac-restore-point)
  * [ Tạo VM mới từ các Restore Point ](./clone-vm-tu-cac-restore-point)
  * [ Xem lịch sử Backup & Recovery ](./xem-lich-su-backup-and-recovery)
  * [ Kiểm tra thông tin backup và restore của VM. ](./kiem-tra-thong-tin-backup-va-restore-cua-vm)
  * [ Report ](./backup-report)
  * [ Backup Volume ](./backup-volume)

## Các câu hỏi thường gặp (FAQs) 

  * [ Tôi được hỗ trợ những gì khi thuê máy chủ và dùng dịch vụ Backup trên FPT Cloud? ](./toi-duoc-ho-tro-nhung-gi-khi-thue-may-chu-va-dung-dich-vu-backup-tren-fpt-cloud)
  * [ Incremental backup là gì và lợi ích khi sử dụng? ](./incremental-backup-la-gi-va-loi-ich-khi-su-dung)
  * [ Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo? ](./tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao)
  * [ Tôi muốn tìm hiểu về Backup, FPT Cloud có chính sách dùng thử không? ](./toi-muon-tim-hieu-ve-backup-fpt-cloud-co-chinh-sach-dung-thu-khong)

