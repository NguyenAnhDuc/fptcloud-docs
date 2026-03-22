---
sidebar_class_name: hidden
sidebar_label: "1. Total Teams (Tổng số lượng team)"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-dashboard-overview"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


Hướng dẫn đọc các số liệu Dashboard - Organization overview


* * *

Section Organization overview thể hiện các chỉ số của organization (tổng dữ của tất cả các team). 

_Note_ : 

  * _Biểu đồ lấy dữ liệu từ lần quét thành công gần nhất._

  * _Ấn ‘Refresh’ để làm mới dữ liệu_

![anhfsec](/img/docs/85599f8b6bd8-nhan-refet.png)

Trường hợp không có dữ liệu, mặc định hiển thị dấu “-”.

## 1\. Total Teams (Tổng số lượng team)

Mô tả: Tổng số team trực thuộc tổ chức hiện tại. 

![anhfsec](/img/docs/b5b57fe36d03-total-team.png)

## 2\. Total Issues (Tổng số issue)

Mô tả: Tổng số issue được ghi nhận trong lần quét thành công gần nhất của toàn bộ asset trong org (bao gồm team và subteam). 

Định dạng hiển thị: 

  * 0 – 9,999: hiển thị đầy đủ (VD: 5, 1200) 

  * 10,000 – 999,999: rút gọn theo nghìn (k), 1 chữ số thập phân, làm tròn xuống 

![anhfsec](/img/docs/ef7d093cf479-total-issue.png)

## 3\. Total Assets (Tổng số asset)

Mô tả: Tổng số asset thuộc tổ chức, gồm: 

  * Source Control Asset (GitHub, GitLab) 

  * Container Registry Asset (FCR, Harbor) 

Định dạng hiển thị: giống như phần Total Issues 

![anhfsec](/img/docs/e730cbf3385c-total-asset.png)

## 4\. Total Scan Requests (Tổng số yêu cầu quét)

Mô tả: Tổng số lượt quét bảo mật (Code + Secret + IaC + Image) 

Phân loại: 

  * UI Scan Request 

  * CICD Scan Request 

Định dạng hiển thị: giống như phần Total Issues

![anhfsec](/img/docs/7f7d7250f67b-total-scan.png)

## 5\. Total Issues by Severity (Tổng số issue theo mức độ nghiêm trọng)

Mô tả: Thống kê số lượng issue theo 4 mức độ: Critical, High, Medium, Low, lấy từ lần quét thành công gần nhất. 

Định dạng hiển thị: giống như phần Total Issues 

![anhfsec](/img/docs/b0caeec26847-total-severy.png)

## 6\. Total Issues by Scan Type (Tổng số issue theo loại quét)

Mô tả: Thống kê số lượng issue theo loại quét: 

  * Code Analysis 

  * Secret Scanning 

  * IaC Scanning 

  * Image Scanning 

Định dạng hiển thị: giống như phần Total Issues 

![anhfsec](/img/docs/dd22f5d9176d-total-scan-type.png)

[ Previous Dashboard ](./detail-dasboard) [ Next Hướng dẫn đọc biểu đồ Issue by team ](./guide-issue-by-team)
