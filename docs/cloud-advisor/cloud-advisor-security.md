---
sidebar_class_name: hidden
sidebar_label: "Security"
title: "2. Cloud Advisor"
source: "https://fptcloud.com/documents/cloud-advisor/?doc=cloud-advisor-security"
parent: "https://fptcloud.com/documents/cloud-advisor"
lang: vi
converted: "2026-03-19"
---

# 2. Cloud Advisor


Security


* * *

Show những vấn đề liên quan đến Security, bao gồm:

### MFA on Tenant

  * Mô tả: Rule này kiểm tra Tenant Owner có bật MFA hay chưa

  * Danh sách vi phạm hiển thị: 

    * Tenant owner

    * Email

    * MFA Status: enable/disable

### MFA should be enabled for all IAM users

  * Mô tả: Rule này kiểm tra IAM users có bật MFA hay chưa

  * Danh sách vi phạm hiển thị: 

    * IAM Users

    * Email

    * MFA Status: enable/disable

### Security Groups - Specific Ports Unrestricted

  * Mô tả: Rule này kiểm tra các Security Group cho phép truy cập không giới hạn (0.0.0.0/0) vào các port cụ thể.

  * Danh sách vi phạm hiển thị: 

    * Project

    * Region

    * VPC

    * Security Group name

    * Protocol

    * Port range

    * IP Range

    * Associations

### Security Groups - Specific Ports Unrestricted to a resource

  * Mô tả: Rule này kiểm tra các Security Group cho phép truy cập không giới hạn (0.0.0.0/0) vào một tài nguyên.

  * Danh sách vi phạm hiển thị: 

    * Project

    * Region

    * VPC

    * Security Group name

    * Protocol

    * Port range

    * IP Range

    * Associations

[ Previous Cloud Advisor Dashboard ](./cloud-advisor-dashboard) [ Next Cost Optimization ](./cloud-advisor-cost-optimization)
