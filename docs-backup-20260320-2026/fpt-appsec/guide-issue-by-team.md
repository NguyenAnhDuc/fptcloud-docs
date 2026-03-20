---
sidebar_class_name: hidden
sidebar_label: "2. FPT AppSec"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-issue-by-team"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


Hướng dẫn đọc biểu đồ Issue by team


* * *

Biểu đồ phân tích số lượng issue theo từng team, được phân loại theo độ nghiêm trọng (Severity) hoặc loại quét (Scan Type). 

_Note_ : 

  * _Biểu đồ lấy dữ liệu từ lần quét thành công gần nhất._

  * _Ấn ‘Refresh’ để làm mới dữ liệu_

## 1\. Chọn chế độ xem

Mặc định có 2 biểu đồ: 

  * Issues by Severity 

  * Issues by Scan Type 

Mỗi biểu đồ là một biểu đồ cột chồng, thể hiện số lượng issue theo từng team. 

![anhfsec](/img/docs/f80ed4eff88e-map-issue.png)

## 2\. Cấu trúc biểu đồ

Thành phần | Mô tả  
---|---  
Trục Y | Danh sách team/subteam (dựa trên bộ lọc Team)  
Trục X | Tổng số lượng issue  
Legend | \- Severity: Critical, High, Medium, Low   
\- Scan Type: Code Analysis, Secret Scanning, IaC Scanning, Image Scanning  
Dữ liệu | Phân lớp theo mức độ nghiêm trọng hoặc loại scan  
  
## 3\. Lọc dữ liệu theo nhu cầu

Tùy chọn legend (góc phải dưới): 

  * Click để ẩn/hiện dữ liệu theo từng mức severity hoặc scan type. 

  * VD: bỏ chọn “Low” sẽ chỉ hiển thị các issue có severity từ Medium trở lên. 

Có thể áp dụng filter team ở phần trên của dashboard để thu hẹp dữ liệu theo bộ phận cụ thể.

[ Previous Hướng dẫn đọc các số liệu Dashboard - Organization overview ](./guide-dashboard-overview) [ Next Hướng dẫn đọc biểu đồ Asset by team  ](./guide-asset-by-team)
