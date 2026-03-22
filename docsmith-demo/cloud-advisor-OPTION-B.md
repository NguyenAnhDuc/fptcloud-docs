# Sử Dụng Cloud Advisor để Bảo Vệ và Tối Ưu Hệ Thống Cloud

> **Loại tài liệu:** How-to Guide  
> **Phiên bản:** Option B — Generate từ Doc Input Form  
> **Cập nhật:** 2026-03-21  
> **Đối tượng:** Cloud Admin · DevOps · Finance Team

---

## Tại Sao Bạn Cần Đọc Hướng Dẫn Này?

Hầu hết các sự cố cloud — data breach, hóa đơn tăng đột biến, mất dữ liệu — đều **không xảy ra ngay lập tức**. Chúng âm thầm hình thành từ những cấu hình bị bỏ quên: một Security Group mở quá rộng, một server chạy không cần thiết suốt 2 tháng, một disk quan trọng chưa bao giờ được backup.

**Cloud Advisor** là công cụ giúp bạn **phát hiện những vấn đề này trước khi chúng thành sự cố** — không phải sau. Thay vì chờ đến lúc nhận bill shock hay nhận cuộc gọi "hệ thống sập", bạn có thể chủ động xử lý từng tuần.

Guide này hướng dẫn bạn từng bước — từ lần đầu mở Cloud Advisor đến việc xử lý và theo dõi kết quả.

---

## Bạn Cần Chuẩn Bị Gì?

Trước khi bắt đầu, hãy đảm bảo:

- **Tài khoản FPT Cloud** đang hoạt động
- **Role Admin hoặc Editor** trên Tenant của bạn *(Viewer chỉ xem được, không thể thực hiện action)*
- Khoảng **15–30 phút** cho lần review đầu tiên

Nếu bạn chưa có quyền truy cập phù hợp, liên hệ Tenant Owner để được cấp role.

---

## Hành Trình Sử Dụng Cloud Advisor

### Bước 1 — Vào Cloud Advisor

Đăng nhập [FPT Cloud Console](https://console.fptcloud.com) → Chọn **Cloud Advisor** từ menu điều hướng bên trái.

Trang Dashboard sẽ hiện ra ngay — không cần cấu hình thêm gì. Cloud Advisor đã tự động quét toàn bộ resource trong Tenant của bạn.

---

### Bước 2 — Đọc Dashboard: Biết Mình Đang Ở Đâu

Dashboard tổng quan cho bạn cái nhìn nhanh về "sức khỏe" hệ thống:

```
┌─────────────────────────┬──────────────────────────────┬─────────────────────────┐
│  Action Recommended     │  Investigation Recommended   │  Rules with Excluded    │
│  [Con số]               │  [Con số]                    │  Items [Con số]         │
│  → Cần xử lý ngay       │  → Cần xem xét thêm          │  → Đã bỏ qua có chủ đích│
└─────────────────────────┴──────────────────────────────┴─────────────────────────┘
```

**Cách đọc các con số này:**

- **Action Recommended cao** → Ưu tiên xử lý ngay. Đây là rủi ro hoặc lãng phí đang xảy ra.
- **Investigation Recommended cao** → Lên lịch review, không nhất thiết là vấn đề nhưng cần xác nhận.
- **Rules with Excluded Items** → Nhắc nhở bạn có những gì đang bị bỏ qua — nên review định kỳ.

> **Tip cho lần đầu dùng:** Đừng bị choáng ngợp nếu con số cao. Đây là tình trạng bình thường ở hệ thống lâu ngày chưa được review. Ưu tiên xử lý theo thứ tự: **Security trước → Cost → Fault Tolerance**.

---

### Bước 3 — Đi Sâu Vào Từng Category

Cloud Advisor tổ chức khuyến nghị thành 3 nhóm chính. Click vào từng nhóm để xem danh sách vi phạm cụ thể.

Mỗi vi phạm hiển thị đầy đủ thông tin bạn cần để ra quyết định:
- **Tên và mô tả vấn đề** — để hiểu _tại sao_ đây là vấn đề
- **Danh sách resource** đang bị ảnh hưởng — biết _cái gì_ cần xử lý
- **Thời gian cập nhật** — để biết dữ liệu có còn fresh không

---

### Bước 4 — Xem Resource Nào Bị Ảnh Hưởng

Khi click vào một vi phạm cụ thể, bạn sẽ thấy danh sách resource (instance, disk, IP, user...) đang trigger cảnh báo đó.

Đây là lúc bạn cần **phán đoán ngữ cảnh**: resource này là production hay test? Cấu hình này là lỗi hay cố ý?

Thông tin context quan trọng cần kiểm tra:
- Tên resource và naming convention của team
- Môi trường (prod/staging/dev)
- Người tạo và mục đích ban đầu

---

### Bước 5 — Ra Quyết Định và Hành Động

Với mỗi vi phạm, bạn có **3 lựa chọn**:

#### ✅ Fix ngay

Khi vi phạm là thật và cần xử lý. Thực hiện action theo hướng dẫn trong từng mục bên dưới.

#### 🚫 Exclude

Khi cấu hình đó là **cố ý** và không phải lỗi. Ví dụ: môi trường test cần port mở rộng, server standby cần kept stopped.

**Cách Exclude:**
1. Chọn resource cụ thể trong danh sách vi phạm
2. Nhấn **Exclude**
3. Ghi lý do ngắn gọn (không bắt buộc nhưng khuyến nghị cho audit sau này)

> **Lưu ý:** Exclude không xóa vấn đề — nó ẩn cảnh báo cho resource đó. Review lại Excluded list mỗi 1–2 tháng, đặc biệt khi resource đó đã "tốt nghiệp" lên Production.

#### 📥 Download báo cáo

Khi bạn cần chia sẻ với team hoặc lưu audit trail. Nhấn **Download Excel** để xuất toàn bộ vi phạm trong category đó.

---

## Các Vấn Đề Thường Gặp và Cách Xử Lý

### 🔒 Security — Bảo Mật Hệ Thống

> **Tại sao đặt Security lên đầu?** Vì hậu quả của security breach là nghiêm trọng nhất và khó khắc phục nhất. Một misconfiguration nhỏ có thể mở đường cho kẻ tấn công vào toàn bộ hệ thống — và đây là loại rủi ro bạn muốn biết hôm nay, không phải sau khi sự cố xảy ra.

---

**MFA on Tenant (Owner) — Chưa bật xác thực 2 lớp cho Tenant Owner**

Tenant Owner là tài khoản có quyền cao nhất. Không có MFA = bảo vệ tài khoản quan trọng nhất chỉ bằng một lớp password.

**Action:** Đăng nhập bằng Tenant Owner → **Profile → Security → Enable MFA** → Quét QR code bằng ứng dụng Authenticator.

*Business value: Ngăn chặn unauthorized access ngay cả khi password bị lộ.*

---

**MFA for IAM Users — Có IAM user chưa bật MFA**

Mỗi IAM user không có MFA là một điểm yếu tiềm năng. Phishing, password reuse, data breach từ service khác — tất cả đều có thể compromise tài khoản không có MFA.

**Action:** Vào **IAM → Users** → Kiểm tra từng user → Yêu cầu kích hoạt MFA, ưu tiên user có quyền cao (Admin/Editor) trước.

*Business value: Giảm attack surface, comply với security policy cơ bản.*

---

**Security Groups — Port mở cho toàn internet (0.0.0.0/0)**

Security Group có rule 0.0.0.0/0 trên port nhạy cảm (SSH :22, RDP :3389, MySQL :3306...) = mời toàn bộ internet vào thử tấn công server của bạn.

**Action:** Vào **Network → Security Groups** → Tìm rule có source 0.0.0.0/0 trên port không phải 80/443 → Thay bằng IP cụ thể (VPN, office IP) hoặc restrict theo whitelist.

*Business value: Giảm đáng kể nguy cơ brute force và unauthorized remote access.*

> **Nếu đây là môi trường test:** Exclude resource đó, ghi rõ lý do "dev/test environment — intentional".

---

### 💰 Cost Optimization — Tối Ưu Chi Phí

> **Tại sao đây quan trọng với Finance team?** Trung bình 15–20% cloud spend trong mỗi tổ chức là lãng phí — resource được tạo ra nhưng không được dọn dẹp. Cloud Advisor giúp bạn tìm đúng những khoản đó.

---

**Low Utilization Instances — CPU thấp kéo dài**

Instance đang chạy nhưng CPU gần như không hoạt động. Bạn đang trả tiền đầy đủ cho tài nguyên chỉ dùng một phần.

**Action:**
- Kiểm tra workload thực tế của instance
- Nếu đúng là nhàn: **resize xuống flavor nhỏ hơn** (tiết kiệm ngay từ tháng sau)
- Nếu không cần: **tắt hoặc xóa** (sau khi xác nhận với owner)

*Business value: Mỗi instance resize xuống 1 tier = tiết kiệm 30–50% chi phí instance đó.*

---

**Underutilized Storage Disk — Disk provision lớn nhưng dùng ít**

Storage tính phí theo dung lượng **provision**, không phải dùng thực. Disk 2TB dùng 200GB = bạn đang trả cho 1.8TB không ai dùng.

**Action:** Review lại nhu cầu thực tế → Shrink disk hoặc migrate sang disk nhỏ hơn phù hợp.

*Business value: Tối ưu storage spend, đặc biệt có ý nghĩa khi scale ra nhiều instance.*

---

**Instances Stopped > 30 ngày — Server tắt lâu ngày**

Instance stopped vẫn tính phí storage và giữ Floating IP (nếu có). Nếu server này không có kế hoạch dùng lại, nó đang tốn tiền vô ích mỗi tháng.

**Action:**
1. Xác nhận với team: còn cần không?
2. Nếu có: đặt kế hoạch cụ thể khi nào sẽ dùng lại
3. Nếu không: snapshot → xóa instance (giải phóng chi phí storage + IP)

*Business value: Mỗi instance stopped xóa đi = tiết kiệm storage + IP allocation fee.*

---

**Unassociated IP Addresses — Floating IP không gắn với server nào**

Floating IP tính phí theo tháng dù không được sử dụng. Một vài IP "trôi nổi" từ instance cũ bị xóa = tiền leak không ai chú ý.

**Action:** Vào **Network → Floating IPs** → Release IP không dùng.

*Business value: Quick win — nhỏ nhưng tích lũy đáng kể nếu nhiều IP.*

---

### 🛡️ Fault Tolerance — Phòng Ngừa Mất Dữ Liệu

> **Tại sao Fault Tolerance quan trọng?** Backup và snapshot không phải là thứ bạn cần đến — cho đến khi bạn cần đến và không có. Một snapshot tạo trước khi upgrade system có thể là sự khác biệt giữa "restore trong 10 phút" và "mất toàn bộ dữ liệu".

---

**Storage Disk — Chưa có Snapshot**

Disk chưa có snapshot = không có điểm restore nào. Nếu disk bị corrupt hoặc data bị xóa nhầm, không có cách lấy lại.

**Action:** Vào **Storage → Volumes** → Tạo snapshot cho disk quan trọng → Đặt lịch snapshot định kỳ nếu platform hỗ trợ.

*Business value: Phòng ngừa mất dữ liệu hoàn toàn — chi phí snapshot thường < 10% chi phí disk.*

---

**Instance — Chưa có Snapshot**

Instance không có snapshot = không có safety net. Mọi thay đổi lớn (OS upgrade, config change, deploy mới) đều có rủi ro không rollback được.

**Action:** Vào **Compute → Instances** → Tạo snapshot cho instance production → **Bắt buộc trước mỗi lần thay đổi lớn**.

*Business value: Giảm RTO (Recovery Time Objective) từ "rebuild từ đầu" xuống còn "restore trong vài phút".*

---

## Tips Thực Tế Khi Dùng Cloud Advisor

**Cho Cloud Admin — Review định kỳ:**
> Đặt lịch nhắc mỗi 2 tuần để check Cloud Advisor. 15 phút review thường xuyên tốt hơn 1 ngày chữa cháy.

**Cho DevOps — Trước mỗi release lớn:**
> Chạy Cloud Advisor trước khi go-live. Đảm bảo không có Security issue nào đang mở, và tất cả instance production đã có snapshot.

**Cho Finance team — Báo cáo hàng tháng:**
> Download Excel từ Cost Optimization category → Dùng làm input cho monthly cloud cost review với management.

---

## Những Điều Cần Biết Thêm

| Câu hỏi | Trả lời |
|---|---|
| Dữ liệu có real-time không? | Không — refresh theo chu kỳ. Nhấn nút Refresh để cập nhật thủ công. |
| Estimated savings có chắc không? | Đây là ước tính, không phải cam kết. Số thực tế phụ thuộc vào action bạn chọn. |
| Resource test bị cảnh báo liên tục? | Dùng Exclude với lý do rõ ràng — sẽ không bị cảnh báo lại. |
| Fix xong nhưng vẫn thấy vi phạm? | Nhấn Refresh. Nếu vẫn còn, kiểm tra lại xem action đã apply đúng chưa. |

---

## Bắt Đầu Ngay Hôm Nay

Nếu bạn chưa từng dùng Cloud Advisor, đây là checklist 15 phút để bắt đầu:

- [ ] Mở Cloud Advisor và ghi lại số Action/Investigation Recommended hiện tại
- [ ] Kiểm tra Security → Ưu tiên xử lý MFA và Security Groups trước
- [ ] Xem Cost Optimization → Tìm instance stopped lâu ngày và IP không gắn
- [ ] Xem Fault Tolerance → Tạo snapshot cho instance production chưa có
- [ ] Download báo cáo để chia sẻ với team

Từ lần thứ hai trở đi, bạn chỉ cần review những gì mới — nhanh hơn nhiều.

---

*Tài liệu này được tạo bởi DocSmith — FPT Cloud Documentation System.*
