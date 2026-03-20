---
sidebar_label: "IaC (Terraform)"
title: "IaC (Terraform)"
source: "https://fptcloud.com/documents/cloud-server/?doc=terraform"
parent: "https://fptcloud.com/documents/cloud-server"
lang: vi
converted: "2026-03-19"
---

# IaC (Terraform)


* * *

# **Overview**

FPT Smart Cloud giới thiệu Terraform như một giải pháp quản lý hạ tầng tiên tiến, giúp người dùng tự động hóa việc triển khai và quản lý cơ sở hạ tầng đám mây một cách hiệu quả. Với Terraform, người dùng có thể định nghĩa hạ tầng dưới dạng mã (Infrastructure as Code), giúp việc triển khai trở nên nhất quán, dễ dàng mở rộng và quản lý trên nhiều nền tảng đám mây khác nhau như AWS, Azure, và Google Cloud. Giải pháp này không chỉ giảm thiểu rủi ro mà còn tăng cường khả năng kiểm soát và tối ưu hóa tài nguyên, từ đó hỗ trợ doanh nghiệp đạt được mục tiêu công nghệ một cách nhanh chóng và bền vững.

# **Set up**

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

# **Document**

  * Terraform Provider Docs: 

    * <https://registry.terraform.io/providers/fpt-corp/fptcloud/latest/docs/>
  * FPT Cloud Terraform Source:

    * <https://github.com/fpt-corp/terraform-provider-fptcloud>

# **Các lệnh cơ bản**

## **1\. Instance**

  * Script tạo instance:

![file](/img/docs/b7530cf55451-image-1723437678446.png)

  * Kết quả sau khi chạy script tạo instance thành công:

![file](/img/docs/2eb8bf11e44a-image-1723437688217.png)

  * Hủy instance đã tạo:

![file](/img/docs/b35fddad89ed-image-1723437700286.png)

## **2\. Floating IP**

  * Script tạo floating IP:

![file](/img/docs/6c0be5da1445-image-1723437714387.png)

  * Kết quả sau khi chạy script tạo floating IP thành công:

![file](/img/docs/f78e85aefbcb-image-1723437730547.png)

  * Hủy floating IP đã tạo:

![file](/img/docs/363beff3040b-image-1723437746142.png)

## **3\. Security group**

  * Script tạo security group:

![file](/img/docs/a8b23b4a57cb-image-1723437759616.png)

  * Kết quả sau khi chạy script tạo security group thành công:

![file](/img/docs/7e2c545ba184-image-1723437770927.png)

  * Hủy security group đã tạo:

![file](/img/docs/b15cbbf671ac-image-1723437790818.png)

## **4\. Storage disk**

  * Script tạo storage:

![file](/img/docs/91108bc0971f-image-1723437806000.png)

  * Kết quả sau khi chạy script tạo storage thành công:

![file](/img/docs/769b79b9e844-image-1723437818502.png)

  * Hủy storage đã tạo:

![file](/img/docs/dc6858eeb935-image-1723437832407.png)

## **5\. Database**

  * Script tạo database:

![file](/img/docs/737c6b5f53d5-image-1728455233157.png)

  * Kết quả khi tạo thành công:

![file](/img/docs/ab53f3750881-image-1728455257294.png)

  * Script quản lý trạng thái chạy/dừng của database:

![file](/img/docs/5698c24618ee-image-1728455276595.png)

## **6\. Dedicated FKE**

  * Script tạo cụm Dedicated FKE:

![file](/img/docs/2f0d39fe000e-image-1728875321308.png)

  * Kết quả khi tạo thành công:

![file](/img/docs/4c7925af681b-image-1728875338930.png)

## **7\. Managed FKE**

  * Script tạo cụm Managed FKE:

![file](/img/docs/1b9ead1e7d15-image-1728875363303.png)

  * Kết quả khi tạo thành công:

![file](/img/docs/c368341c8943-image-1728875375510.png)

[ Previous Manage Priority Rule of Security Group ](./security-group-priority-rule) [ Next Quản lý Instance Group với chính sách Affinity & Anti-Affinity ](./instance-group)
