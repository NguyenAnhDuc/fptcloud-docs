---
sidebar_class_name: hidden
sidebar_label: "2. FPT Monitoring – IP Access Control"
title: "2. FPT Monitoring – IP Access Control"
source: "https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=quy-tac-he-thong"
parent: "https://fptcloud.com/documents/fpt-monitoring-ip-access-control"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Monitoring – IP Access Control


Quy tắc hệ thống


* * *

  * Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập. 

  * Khi bật IP Access Control, tất cả truy cập từ ngoài FPT Cloud bị từ chối cho tới khi có IP trong whitelist. 

  * Mỗi endpoint (Grafana dashboard, Metric datasource, Log datasource, Trace datasource) có whitelist IP riêng biệt. 

  * Nếu bất kỳ IP trong bảng đang Whitelisting/Blacklisting thì các nút thao tác khác của bảng tương ứng bị vô hiệu hoá tạm thời. 

Các trạng thái whitelist của IP/dải IP và mô tả: 

Trạng thái whitelist | Mô tả  
---|---  
Whitelisting | Hệ thống đang xử lý whitelist IP/dải IP.  
Whitelisted | IP/dải IP đã được whitelist thành công, có quyền truy cập.  
Whitelist Failed | IP/dải IP whitelist thất bại, chưa có quyền truy cập, cần Retry.  
Blacklisting | Hệ thống đang chặn quyền truy cập.  
Blacklist Failed | IP/dải IP blacklist thất bại, vẫn còn quyền truy cập hệ thống, cần Retry.  
  
[ Previous Retry IP/dải IP đã thêm/xóa thất bại ](./retry-ip) [ Next Liên hệ hỗ trợ ](./lien-he-ho-tro)
