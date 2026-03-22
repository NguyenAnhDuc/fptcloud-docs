---
sidebar_label: "Workspace crasset"
title: "2. FPT AppSec"
source: "https://fptcloud.com/documents/fpt-appsec/?doc=workspace-crasset"
parent: "https://fptcloud.com/documents/fpt-appsec"
lang: vi
converted: "2026-03-19"
---

# 2. FPT AppSec


Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image)


* * *

## 1\. Add Asset

**Org Admin** và **Users của team** có quyền thêm mới asset

**Bước 1** : Sau khi chọn Team, nhấn **Add Asset**

![anhfsec](/img/docs/b5c086ace21c-19.png)

**Bước 2** : Chọn FPT Container Registry/Harbor

![anhfsec](/img/docs/565cbb9b9468-20.png)

_Lưu ý: Pop-up add asset chỉ hiện lên khi loại asset source (FPT Container Registry/Harbor) được tích hợp tại màn**Integration**. Trường hợp ấn vào 1 souce chưa được tích hợp, màn hình sẽ chuyển sang tab **Integration** của loại source đó _.

**Bước 3** : Chọn **project** chứa image cần scan

![anhfsec](/img/docs/8f69016c6238-21.png)

Lúc này, màn hình sẽ hiển thị **Image** và **Image Tags**

**Bước 4** : Chọn Image bạn muốn và ấn **Add**

![anhfsec](/img/docs/0c6ab90e88b1-23.png)

Sau khi add thành công, hệ thống sẽ tự động scan lần đầu, trả về kết quả ra màn Asset Management tab All Assets và xem lịch sử add asset trong tab History

## 2\. Xem thông tin tổng quan của Assets

**Bước 1** : Tại màn hình Asset Management > All , chọn 1 asset bất kỳ bằng cách click vào textlink CR Asset Name

**Bước 2** : Tại màn hình Asset Overview, người dùng có thể xem các thông tin tổng quan:

  * Thông tin chung (General Information):

    * Asset Name, Asset Access (Public/Private), Status (Active/Inactive)

    * Owner: Người sở hữu asset (User name + email hoặc pipeline CICD)

    * Added By: Người thực hiện add asset (User name + email hoặc pipeline CICD)

    * Added At: Thời gian thực hiện add asset

  * Meta data (Issue Information):

    * Image ID, Manifest Digest, Image Tag, Image VPC, Base Image, Platform, Target OS, Image Size
  * Thông tin scan gần nhất (Issue Overview):

    * Scan Type (logo + tên scan, click để xem chi tiết theo từng loại)

    * Scan Time, Total Open Issues, No. Severity

    * Biểu đồ Scanning Times By Day (7 ngày gần nhất)

  * Latest Request: Danh sách tối đa 3 request scan gần nhất (Scanned By, Scanned At, kết quả scan)

## 3\. Xem thông tin các Issues

### 3.1. Truy cập màn hình Issue List

Tương tự hướng dẫn đối với [SCM assets](<https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset>)

### 3.2. Xem thông tin Issue

  * Tại màn hình Issue List, mỗi issue được hiển thị dưới dạng Issue Info Card với các thông tin:

    * Severity: Critical/High/Medium/Low

    * Package Name hoặc Secret Name

    * Issue Title (nếu có “:”, lấy phần sau dấu “:”)

    * Vul References: CWE/CVE/CVSS

    * Score: 0–10 (làm tròn đến 1 chữ số thập phân)

    * Issue Status: Trạng thái hiện tại của issue theo lần scan gần nhất.

    * Exploit Status: Cho biết issue đã bị khai thác hay chưa.

    * Image Layer: Dòng lệnh hoặc layer trong Dockerfile/Image gây ra issue.

    * Fixed in Version: Phiên bản package đã khắc phục issue. Nếu chưa có phiên bản vá → hiển thị Not available.

### 3.3. Lọc, Tìm kiếm và Sắp xếp Issue

#### 3.3.1. Filter

Cho phép lọc theo: Severity, Status, Priority Score (0–10), Issue Type, "Fixed in" available, Image Layer, Exploit Maturity, Exploit Status. Người dùng có thể chọn nhiều điều kiện cùng lúc

#### 3.3.2.

  * Nhập từ khóa tìm theo: Issue ID, Issue Title

  * Nhấn Enter để tìm kiếm, Clear để xóa và reset danh sách 

#### 3.3.3. Sort

  * Sắp xếp theo: Severity (C→H→M→L), Score, Created Time 

  * Mặc định: Sort theo Score giảm dần

### 3.4. Xem thông tin chi tiết của một issue

**Bước 1** : Chọn Details tại một issue card bất kỳ (thuộc Image ) để mở popup Issue Detail.

**Bước 2** : Tại màn hình Issue Detail, người dùng có thể xem thông tin chi tiết của issue:

  * Thông tin chung (Issue Detail):

    * Severity: Mức độ nghiêm trọng của issue (Critical, High, Medium, Low).

    * Package Name: Tên package gây ra issue (đối với Vulnerability issue).

    * Vulnerability Type: Loại lỗ hổng/vulnerability của issue.

    * Link (Copy icon): Copy đường dẫn của issue theo ID. Khi paste đường dẫn này lên tab mới, hệ thống mở màn hình Issue List và tự động gán giá trị issue_id vào search bar.

    * Issue Status: Trạng thái hiện tại của issue theo scan version (Opened, Ignored).

  * Thông tin chi tiết:

    * Issue Description – Mô tả chi tiết về issue.

    * Issue Remediation – Hướng dẫn fix issue, bao gồm:

    * Current package – Phiên bản package đang được sử dụng.

    * Fixed in version – Phiên bản đã được vá (nếu có, nếu không hiển thị “Not available”).

    * Security Information – Điểm CVSS, vector tấn công

    * References – Danh sách link tham chiếu liên quan, click để mở.

    * Manifest Layer – Hiển thị toàn bộ layer trong Dockerfile, highlight vị trí chứa lỗi và tự động cuộn dòng lỗi vào giữa màn hình.

    * Code Block (nếu là source code) – Hiển thị file code, highlight dòng chứa lỗi và từ khóa gây lỗi.

    * Activity: Lịch sử thay đổi trạng thái issue

## 4\. Rescan asset

Tương tự hướng dẫn đối với [SCM assets](<https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset>)

## 5\. Disable/Enable Asset

Tương tự hướng dẫn đối với [SCM assets](<https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset>)

## 6\. Delete Asset

Tương tự hướng dẫn đối với [SCM assets](<https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset>)

[ Previous Hướng dẫn thực hiện các thao tác cơ bản với Source Code anagement asset (repo/project) ](./workspace-scmasset) [ Next Hướng dẫn thay đổi trạng thái issue tại màn Issue list  ](./guide-change-status-issue-list)
