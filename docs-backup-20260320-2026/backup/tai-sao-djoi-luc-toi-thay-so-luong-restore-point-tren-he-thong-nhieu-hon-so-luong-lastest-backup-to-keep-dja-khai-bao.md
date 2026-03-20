---
sidebar_class_name: hidden
sidebar_label: "Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo?"
title: "Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo?"
source: "https://fptcloud.com/documents/backup/?doc=tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao"
parent: "https://fptcloud.com/documents/backup"
lang: vi
converted: "2026-03-19"
---

# Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo?


* * *

Do bản chất của phương thức **Incremental backup** là chỉ lưu lại sự thay đổi của hệ thống hiện tại với bản backup gần nhất. Vì vậy nếu muốn Restore một bản **Incremental backup** cần phải có các Restore Point cũ hơn. Tùy vào chế độ backup bạn đã chọn mà **FPT Cloud** sẽ luôn tự động xóa các Restore Point không còn cần thiết để tối ưu dung lượng lưu trữ.

[ Previous Incremental backup là gì và lợi ích khi sử dụng? ](./incremental-backup-la-gi-va-loi-ich-khi-su-dung) [ Next Tôi muốn tìm hiểu về Backup, FPT Cloud có chính sách dùng thử không? ](./toi-muon-tim-hieu-ve-backup-fpt-cloud-co-chinh-sach-dung-thu-khong)
