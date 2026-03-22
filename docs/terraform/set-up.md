---
sidebar_class_name: hidden
sidebar_label: "Setup"
title: "2. Terraform"
source: "https://fptcloud.com/documents/terraform/?doc=set-up"
parent: "https://fptcloud.com/documents/terraform"
lang: vi
converted: "2026-03-19"
---

# 2. Terraform


Setup


* * *

## **1\. Yêu cầu hệ thống**

  * Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows.

  * Phiên bản: Phiên bản mới nhất của Terraform, đảm bảo tương thích với các nhà cung cấp dịch vụ đám mây bạn đang sử dụng.

  * Quyền truy cập internet: Để tải về Terraform và các plugin.

## **2\. Cài Đặt Terraform**

**Trên macOS:**

  * Sử dụng Homebrew:

    
    
    brew tap hashicorp/tap
    brew install hashicorp/tap/terraform

**Trên Ubuntu:**
    
    
    sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
    
    curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
    
    sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
    
    sudo apt-get update && sudo apt-get install terraform

**Trên Windows:**

  * Tải xuống từ Terraform Download Page.

  * Giải nén file và thêm đường dẫn Terraform vào biến môi trường PATH.

## **3\. Kiểm Tra Cài Đặt**
    
    
    terraform -v

## **4\. Cách lấy token sử dụng cho terraform FPTCloud**

Vào **Sidebar** -> chọn mục **Token**

![file](/img/docs/91f0c47610b5-image-1723437528179.png)

## **5\. Khởi tạo FPT Cloud Provider**

  * Kiểm tra phiên bản và hướng dẫn cài đặt FPT Cloud Provider trên trang Terraform

![file](/img/docs/3c8ce6d5a5b5-image-1723437534957.png)

  * Sử dụng lệnh “terraform init” để cài đặt FPT Cloud Provider:

![file](/img/docs/e0e540d012ce-image-1723437542169.png)

  * Script kết nối FPT Cloud:

![file](/img/docs/a137448d7c3c-image-1723437548914.png)

  * Tạo access token để kết nối FPT Cloud:

![file](/img/docs/20c74723e393-image-1723437556421.png)

  * Sử dụng accrss token để kết nối đến FPT Cloud:

![file](/img/docs/348f066d3f3e-image-1723437566706.png)

[ Next Document ](./document-terraform)
