---
sidebar_class_name: hidden
sidebar_label: "2. Gateway"
title: "2. Gateway"
source: "https://fptcloud.com/documents/gateway/?doc=tinh-nang-khac"
parent: "https://fptcloud.com/documents/gateway"
lang: vi
converted: "2026-03-19"
---

# 2. Gateway


Các tính năng khác liên quan đến Gateway


* * *

## **1\. Allocate IP Address**

  * Ở màn hình Floating IP, hệ thống cho phép người dùng chọn Gateway khi Allocate IP, hover vào tooltip ở thông tin của Gateway để biết được Gateway loại Basic hay Custom 

    * Nếu người dụng chọn Gateway loại Custom, hệ thống chỉ cho phép allocate IP mà gắn vào resource nào (hệ thống ẩn phần Resource, IP Port, Instance Port)

![file](/img/docs/5ea9341b8ab8-image-1754291575833.png)

  * Nếu người dùng chọn Gateway loại Basic , hệ thống cho phép allocate IP và đồng thời gắn vào resource

![file](/img/docs/25711f9bbb4f-image-1754291610069.png)

  * Ở màn hình Floating IP (trên cột Actions), với IP thuộc Gateway loại Custom, người dùng sẽ không được gán vào 1 Instance

  * Ở màn hình Instance Detail, trường hợp Instance chưa được gán IP mà người dùng bấm allocate IP, nếu Instance thuộc Gateway lại custom, người dùng sẽ không được gán IP. Để gán được IP, người dùng cần tạo NAT Rule

## **2\. Instance**

  * Khi tạo Instance, hệ thống auto fill thông tin Gateway dựa trên Subnet đã chọn trước đó (Gateway được gán vào Subnet). Nếu Gateway loại Custom, người dùng sẽ không được chọn Floating IP (hệ thống sẽ disable field này)

![file](/img/docs/1768f41de40c-image-1754291630097.png)

## **3\. Subnet**

  * Ở màn hình tạo Subnet, hệ thống cho phép người dùng chọn Gateway. Nếu Gateway loại Custom, hệ thống sẽ thông báo người dùng tự tạo NAT rule

![file](/img/docs/8ba52a8bb00a-image-1754291640291.png)

## **4\. Security Group**

  * Ở màn hình tạo Security Group, hệ thống cho phép người dùng chọn Gateway, các Security Rule được tạo ra sẽ được quản lý bởi Gateway đã chọn

![file](/img/docs/309bd36fc6aa-image-1754291651290.png)

## **5\. Load Balancer**

  * Hệ thống cho phép user xem thông tin gateway khi sử dụng Load Balancer Classic

![file](/img/docs/45935b91fff8-image-1754291661656.png)

## **6\. VPN Site to Site**

  * Hệ thống cho phép user chọn Gateway khi tạo và sử dụng dịch vụ VPN Site to Site

![file](/img/docs/cfe24f877c20-image-1754291672602.png)

[ Previous Hệ thống cho phép người dùng quản lý NO NAT rule trong từng Gateway ](./quan-ly-no-nat-rule-theo-gateway)
