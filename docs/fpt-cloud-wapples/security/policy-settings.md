---
sidebar_label: "2. FPT Cloud WAPPLES"
title: "2. FPT Cloud WAPPLES"
source: "https://fptcloud.com/documents/fpt-cloud-wapples/?doc=policy-settings"
parent: "https://fptcloud.com/documents/fpt-cloud-wapples"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Cloud WAPPLES


Policy Settings


* * *

Sử dụng để thiết lập các policy và rule nhằm lựa chọn các event để chặn hoặc ghi lại vào trong log tại phần View Logs – Detection Logs ![file](/img/docs/153567a2c9c0-image-1714115314016.png)

Các thành phần chính bao gồm

Policy List: Thực hiện chặn hoặc ghi lại các event dựa trên policy. Wapples có 7 policies cơ bản bao gồm:

  1. **Bypass Without Detection** : không ghi lại các sự kiện

  2. **Detect Without Blocking** : ghi lại mà không có các biện pháp ngăn chặn

     * Basic Security Policy: Sau khi detect, thực hiện ngăn chặn các sự kiện theo các rule
     * Directory Listing
     * Invalid HTTP
     * SQL Injection
  3. **Standard Security Policy** : Sau khi detect, thực hiện ngăn chặn các sự kiện theo các rule

     * Cross Site Scripting
     * Directory Listing
     * Directory Traversal
     * Error Handling
     * File Inclusion
     * File Upload
     * Invalid HTTP
     * Invalid URL
     * Request Method Filtering
     * SQL Injection
  4. **Advanced & PCI-DSS Security Policy:**

     * Thực hiện hành động ứng phó dựa trên thiết lập
     * Cho phép kiểm tra một rule cụ thể bằng cách nhấp vào policy tương ứng
     * Phản hồi lại dựa trên counter measure được thiết lập
  5. **Block All Traffic**

     * Block phản hồi được yêu cầu đến website
     * Không ghi lại log vì các request đã bị block trước khi được detect

Rule list: Hiển thị các rule và countermeasure đang có sẵn trong Policy được chọn ![file](/img/docs/7946dbab2b6c-image-1714115324089.png)

  * **Add Policy/Website** : Tạo policy tự custom hoặc thêm các website vào policy nhằm áp dụng riêng cho từng website bằng cách chọn vào dấu 

![file](/img/docs/fdfd7e9137a3-image-1714115330781.png)

  * Tạo policy dựa trên 1 policy có sẵn

  * Add policy cho 1 website (Có thể chỉ định subdirectory cụ thể)

  * Add rule cho policy ![file](/img/docs/121d4fcb66f7-image-1714116584852.png)

  * **Snort** ![file](/img/docs/1a7806342836-image-1714116637131.png)

  * Chọn User-defined

  * Add Rule Name

  * Chọn Countermeasure

  * Chọn Risk Level (Nếu chọn Disconnect/Error Code/Page Redirection)

  * Upload rule đã được thiết lập trong [Security Settings] - [Pattern Storage] - [Snort].

  * Chọn Apply và chọn Save ![file](/img/docs/e6d7de680012-image-1714116644103.png)

  * **Threat Protection Profile** ![file](/img/docs/729ff3954a14-image-1714116657982.png)

  * Chọn Detection hoặc Do Not Detection

  * Chọn Countermeasure (Nếu chọn Detection)

  * Chọn Risk Level (Nếu chọn Detection/Disconnect/Error Code/Page Redirection)

  * Upload rule đã được thiết lập trong [Security Settings] - [Security Patch] - [Threat Protection Profile].

  * Chọn Apply và chọn Save

  * **Manually Input** ![file](/img/docs/7012fe2f8304-image-1714116666121.png)

  * Chọn User-defined

  * Add Rule Name

  * Chọn Countermeasure

  * Chọn Risk Level (Nếu chọn Disconnect/Error Code/Page Redirection)

  * Thiết lập Pattern thủ công rồi chọn Apply và chọn Save

[ Previous Network Filters Scheduling ](./network-filters-scheduling) [ Next Additional Policy Settings ](https://fptcloud.com)
