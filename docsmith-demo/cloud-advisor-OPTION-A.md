# Cloud Advisor — Hướng Dẫn Sử Dụng

> **Phiên bản:** Option A — Chuẩn hóa từ raw content  
> **Cập nhật lần cuối:** 2026-03-21  
> **Đối tượng:** Cloud Admin, DevOps Engineer, IT Manager

---

## Giới Thiệu

**Cloud Advisor** là công cụ giám sát chủ động tích hợp sẵn trong FPT Cloud Console, cung cấp các khuyến nghị có thể hành động ngay để giúp bạn:

- 🔒 **Bảo vệ hệ thống** khỏi các lỗ hổng bảo mật phổ biến do misconfiguration
- 💰 **Tiết kiệm chi phí** bằng cách phát hiện tài nguyên đang lãng phí
- 🛡️ **Tăng độ ổn định** bằng cách phòng ngừa mất dữ liệu trước khi sự cố xảy ra

**Ai nên dùng Cloud Advisor?**

| Đối tượng | Mục đích sử dụng |
|---|---|
| Cloud Admin | Kiểm tra định kỳ toàn bộ hạ tầng |
| DevOps Engineer | Review trước khi go-live hoặc sau khi deploy lớn |
| IT Manager / Finance | Xem báo cáo chi phí tối ưu hàng tháng |

**Khi nào nên chạy Cloud Advisor?**
- Trước mỗi kỳ review ngân sách (hàng tháng/quý)
- Sau khi onboard thêm member mới vào hệ thống
- Sau khi tạo nhiều resource trong một sprint
- Định kỳ ít nhất 2 tuần/lần như một health check thông thường

---

## Yêu Cầu Trước Khi Sử Dụng

- ✅ Có tài khoản FPT Cloud đang hoạt động
- ✅ Role **Admin** hoặc **Editor** trên Tenant
- ✅ Đã đăng nhập vào FPT Cloud Console

> **Note:** Nếu bạn chỉ có role Viewer, bạn có thể xem các khuyến nghị nhưng không thể thực hiện hành động Fix hoặc Exclude.

---

## Bắt Đầu Sử Dụng

### Bước 1 — Truy cập Cloud Advisor

Đăng nhập vào [FPT Cloud Console](https://console.fptcloud.com) → Tìm mục **Cloud Advisor** trong menu điều hướng bên trái.

### Bước 2 — Đọc Dashboard tổng quan

Trang chủ Cloud Advisor hiển thị 3 nhóm chỉ số:

| Chỉ số | Ý nghĩa |
|---|---|
| **Action Recommended** | Số vấn đề cần xử lý ngay — có rủi ro hoặc lãng phí rõ ràng |
| **Investigation Recommended** | Số vấn đề cần xem xét thêm — có thể ổn, nhưng nên kiểm tra |
| **Rules with Excluded Items** | Số rule bạn đã chủ động bỏ qua (Exclude) |

### Bước 3 — Xem chi tiết từng category

Click vào từng nhóm (Security / Cost Optimization / Fault Tolerance) để xem danh sách vi phạm cụ thể. Mỗi mục hiển thị:

- **Tên vấn đề** và mô tả ngắn
- **Thời gian cập nhật** lần cuối
- **Số lượng resource** đang vi phạm
- **Nút Refresh** — cập nhật dữ liệu thủ công
- **Nút Download Excel** — xuất báo cáo

### Bước 4 — Xử lý từng vi phạm

Với mỗi vấn đề phát hiện, bạn có 3 lựa chọn:

1. **Fix ngay** — Thực hiện hành động khắc phục theo hướng dẫn
2. **Exclude** — Bỏ qua nếu đây là cấu hình cố ý (xem phần Exclude bên dưới)
3. **Download báo cáo** — Xuất ra Excel để review hoặc chia sẻ team

### Bước 5 — Theo dõi tiến độ

Sau khi xử lý, nhấn **Refresh** để cập nhật trạng thái. Số "Action Recommended" sẽ giảm khi các vấn đề được giải quyết.

---

## Dashboard Metrics — Ý Nghĩa Thực Tế

### 🔴 Action Recommended

Con số này là **tín hiệu đỏ** — tức là hệ thống đang có vấn đề rõ ràng cần xử lý. Đừng để con số này tăng cao.

> **Business insight:** Mỗi "Action Recommended" về Security có thể là một attack vector đang mở. Mỗi "Action Recommended" về Cost là tiền đang chảy ra mà không tạo ra giá trị.

### 🟡 Investigation Recommended

Không nguy hiểm ngay, nhưng cần **ai đó xác nhận** là ổn. Thường gặp với các resource ở môi trường staging hoặc cấu hình đặc thù của team.

### ⚪ Rules with Excluded Items

Những rule bạn đã chọn bỏ qua có chủ đích. Nên **review định kỳ** danh sách này — resource được Exclude hôm nay có thể đã lên Production và cần được đưa vào giám sát lại.

---

## Giải Thích Chi Tiết Từng Category

---

### 🔒 Security

**Tại sao Security quan trọng ở đây?**

Hầu hết các vụ data breach không đến từ hacker tinh vi — chúng đến từ **lỗ hổng cấu hình đơn giản** như quên bật MFA hoặc để port mở toàn bộ internet. Cloud Advisor phát hiện chính xác những lỗi này.

#### MFA on Tenant (Owner)

**Vấn đề:** Tenant Owner chưa bật Multi-Factor Authentication.

**Tại sao nguy hiểm?** Tenant Owner có quyền cao nhất trong hệ thống. Nếu tài khoản này bị compromise (dù chỉ bị lộ password), kẻ tấn công có thể xóa toàn bộ resource, thay đổi cấu hình billing, hoặc tạo backdoor.

**Cách xử lý:** Đăng nhập bằng tài khoản Tenant Owner → Vào phần **Profile / Security** → Kích hoạt MFA (ứng dụng Authenticator).

> **⚠️ Ưu tiên cao nhất:** Đây là rule nên fix **ngay hôm nay** nếu chưa làm.

---

#### MFA for IAM Users

**Vấn đề:** Một hoặc nhiều IAM user trong hệ thống chưa bật MFA.

**Tại sao nguy hiểm?** IAM user không có MFA = tài khoản chỉ được bảo vệ bằng password. Một password yếu, bị phishing, hoặc bị leak trong database breach là đủ để attacker vào được.

**Cách xử lý:** Vào **IAM** → Xem danh sách user chưa bật MFA → Yêu cầu từng user tự kích hoạt, hoặc enforce MFA policy ở cấp Tenant.

> **Tip:** Với team lớn, ưu tiên enforce MFA cho các user có role Admin/Editor trước.

---

#### Security Groups — Specific Ports Unrestricted (0.0.0.0/0)

**Vấn đề:** Một hoặc nhiều Security Group đang cho phép traffic từ **toàn bộ internet** (0.0.0.0/0) vào các port nhạy cảm (SSH :22, RDP :3389, database ports...).

**Tại sao nguy hiểm?** Port mở toàn internet = mục tiêu brute force 24/7. Bot scanner trên internet liên tục quét và thử tấn công các port này.

**Cách xử lý:** Vào **Network → Security Groups** → Tìm rule có source 0.0.0.0/0 → Thay bằng IP cụ thể của team (VPN IP, office IP) hoặc dùng bastion host.

> **Note:** Nếu service cần public (web server port 80/443), đó là bình thường. Cloud Advisor chủ yếu cảnh báo với các port quản trị như SSH, RDP, database.

---

### 💰 Cost Optimization

**Tại sao Cost Optimization quan trọng ở đây?**

Theo thống kê ngành, trung bình **15–20% cloud spend** là lãng phí — resource tạo ra rồi quên, hoặc over-provision. Cloud Advisor giúp bạn tìm và xử lý số tiền đang "bốc hơi" này.

#### Low Utilization Instances

**Vấn đề:** Instance đang chạy nhưng CPU utilization rất thấp trong thời gian dài.

**Ý nghĩa business:** Bạn đang trả tiền cho một server "ngủ gật". Có thể downsize (chọn flavor nhỏ hơn) hoặc consolidate workload.

**Cách xử lý:**
1. Xem danh sách instance bị flag
2. Kiểm tra lại workload thực tế trên instance đó
3. Nếu đúng là nhàn: resize xuống flavor nhỏ hơn, hoặc tắt nếu không cần

> **Tip:** Một số instance CPU thấp nhưng Memory cao (cache server, database nhỏ) — kiểm tra kỹ trước khi resize.

---

#### Underutilized Storage Disk

**Vấn đề:** Volume storage đang attached nhưng dung lượng sử dụng thực tế rất thấp.

**Ý nghĩa business:** Storage được tính phí theo dung lượng provision, không phải dung lượng dùng thực. Một disk 1TB dùng 50GB là lãng phí 950GB chi phí.

**Cách xử lý:** Review lại disk, shrink nếu cloud provider hỗ trợ, hoặc migrate data sang disk nhỏ hơn phù hợp.

---

#### Instances Stopped > 30 ngày

**Vấn đề:** Instance đã bị stop liên tục hơn 30 ngày.

**Ý nghĩa business:** Instance dừng vẫn tốn phí storage và IP (nếu có Floating IP attached). Nếu không có kế hoạch khởi động lại, nên xem xét xóa hoặc snapshot rồi xóa.

**Cách xử lý:**
1. Xác nhận với team xem instance còn cần không
2. Nếu không cần: xóa (sau khi snapshot nếu cần backup)
3. Nếu cần giữ data: snapshot → xóa instance → restore khi cần

> **Note:** Trước khi xóa instance stopped lâu ngày, **luôn snapshot** để tránh mất dữ liệu.

---

#### Unassociated IP Addresses

**Vấn đề:** Floating IP đang được allocate nhưng không gắn với instance nào.

**Ý nghĩa business:** Floating IP tính phí theo tháng dù không dùng. Một vài IP "trôi nổi" có thể tích lũy thành chi phí đáng kể theo thời gian.

**Cách xử lý:** Vào **Network → Floating IPs** → Release các IP không còn dùng.

---

### 🛡️ Fault Tolerance

**Tại sao Fault Tolerance quan trọng ở đây?**

Fault Tolerance không phải là vấn đề cho đến khi **sự cố xảy ra** — và lúc đó đã quá muộn. Snapshot là "bảo hiểm" rẻ nhất cho hệ thống của bạn. Cloud Advisor nhắc bạn mua bảo hiểm trước khi cần dùng đến.

#### Storage Disk — Chưa Có Snapshot

**Vấn đề:** Volume disk chưa có snapshot nào.

**Rủi ro:** Nếu disk bị corrupt, instance crash, hoặc thao tác nhầm — không có cách restore. Dữ liệu mất hoàn toàn.

**Cách xử lý:** Vào **Storage → Volumes** → Chọn disk cần bảo vệ → Tạo snapshot. Nên set lịch snapshot tự động nếu platform hỗ trợ.

---

#### Instance — Chưa Có Snapshot

**Vấn đề:** Instance chưa có snapshot nào.

**Rủi ro:** Tương tự disk, nhưng ảnh hưởng toàn bộ server (OS + data + config). Nếu instance bị lỗi nghiêm trọng, bạn phải setup lại từ đầu.

**Cách xử lý:** Vào **Compute → Instances** → Chọn instance → Tạo snapshot. Đặc biệt quan trọng trước khi upgrade OS, deploy version mới, hoặc thay đổi cấu hình lớn.

> **Best practice:** Tạo snapshot trước **mọi thay đổi lớn** trên production. Chi phí snapshot thường thấp hơn nhiều so với chi phí downtime và recovery.

---

## Sử Dụng Tính Năng Exclude

### Khi nào nên Exclude?

Exclude là tính năng cho phép bạn **bỏ qua một vi phạm có chủ đích** — khi cấu hình đó là cố ý, không phải lỗi.

**Ví dụ hợp lý để Exclude:**
- Security Group mở port rộng cho môi trường **dev/test** nội bộ
- Instance CPU thấp vì đây là **standby server** chờ failover
- Instance stopped vì đang trong giai đoạn **freeze trước production release**

### Cách Exclude

1. Click vào vi phạm cụ thể
2. Chọn resource bạn muốn Exclude
3. Nhấn nút **Exclude** và điền lý do (optional nhưng khuyến nghị)

> **⚠️ Lưu ý quan trọng:** Exclude không có nghĩa là vấn đề biến mất — nó chỉ ẩn cảnh báo cho resource đó. **Review danh sách Excluded định kỳ** (mỗi 1-2 tháng) để đảm bảo các Excluded item không đã lên Production mà quên đưa vào giám sát.

---

## Download Báo Cáo

Mỗi category trong Cloud Advisor đều có nút **Download Excel** để xuất báo cáo chi tiết về tất cả vi phạm. Tính năng này hữu ích để:

- Chia sẻ với team về những gì cần xử lý
- Gửi cho manager/Finance team để justify budget optimization
- Lưu lại audit trail

---

## Câu Hỏi Thường Gặp

**Q: Dữ liệu trong Cloud Advisor có real-time không?**  
A: Không. Dữ liệu được refresh theo chu kỳ. Bạn có thể nhấn nút **Refresh** để cập nhật thủ công, nhưng đây không phải monitoring real-time.

**Q: Estimated savings có chính xác không?**  
A: Đây là **ước tính dựa trên cấu hình hiện tại**, không phải cam kết. Số thực tế phụ thuộc vào việc bạn chọn action nào và thời điểm thực hiện.

**Q: Nếu tôi Fix xong nhưng vẫn thấy vi phạm?**  
A: Nhấn **Refresh** để cập nhật dữ liệu. Nếu vẫn hiển thị sau khi refresh, kiểm tra lại xem action đã được apply đúng chưa.

---

*Tài liệu này được tạo bởi DocSmith — FPT Cloud Documentation System.*
