# 2. Cloud Advisor

Cloud Advisor là tính năng cung cấp các gợi ý và khuyến nghị để tối ưu hoá tài nguyên, cải thiện hiệu suất, tăng cường bảo mật, và giảm chi phí khi sử dụng FPT Cloud.

Các danh mục chính có trong FPT Cloud Advisor:

  * Bảo mật (Security)
  * Tối ưu chi phí (Cost Optimization)
  * Hiệu suất (Performace)
  * Khả năng chịu lỗi (Fault Tolerance)
  * Giới hạn dịch vụ (Service Limit)

---

## Cloud Advisor Dashboard

Dashboard hiển thị:

  * Action recommended: Số lượng vấn đề cần xử lý
  * Investigation recommended: Vấn đề cần kiểm tra thêm
  * Rules with excluded items: Các rule đã loại trừ cụ thể 1 số tài nguyên không cần kiểm tra

Mỗi nhóm được phân loại theo Security, Cost Optimization, Fault Tolerance.

Mỗi vấn đề bao gồm: Tên vấn đề, Thời gian cập nhật, Nút refresh, Nút download, Mô tả, Số lượng resource vi phạm.

Người dùng có thể: Chọn từng item, Exclude, Refresh lại kết quả.

---

## Security

Show những vấn đề liên quan đến Security, bao gồm:

### MFA on Tenant
  * Mô tả: Rule này kiểm tra Tenant Owner có bật MFA hay chưa

### Security Groups - Specific Ports Unrestricted
  * Mô tả: Rule này kiểm tra các Security Group cho phép truy cập không giới hạn (0.0.0.0/0) vào các port cụ thể.

---

## Cost Optimization

### Low utilization instances
  * Mô tả: danh sách Instance có mức sử dụng thấp

### Instances stopped
  * Mô tả: Danh sách Instance đã tắt hơn 30 ngày

---

## Fault Tolerance

### Instance Snapshot
  * Mô tả: Rule này kiểm tra các Instance chưa có snapshot
