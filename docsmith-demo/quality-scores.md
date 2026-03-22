# FPT Cloud Documentation Quality Scores

> **Tiêu chí scoring** (mỗi tiêu chí 0/10/20 điểm, tổng 100):
> 1. **Intro** — Có giới thiệu đủ context (tính năng làm gì, ai dùng)
> 2. **Steps** — Có hướng dẫn sử dụng với steps rõ ràng (hoặc link đến sub-pages)
> 3. **WHY** — Giải thích business value, không chỉ liệt kê features
> 4. **Notes** — Có lưu ý, warning, hoặc tip khi cần
> 5. **Tone** — Tiếng Việt chuẩn, không có WP artifacts (Share/Print/breadcrumb thừa)

---

## Bảng điểm (Sort theo điểm tăng dần)

| # | Module | Score | Tier | Intro | Steps | WHY | Notes | Tone | Điểm yếu chính |
|---|--------|-------|------|-------|-------|-----|-------|------|-----------------|
| 1 | `iac-old` | **10** | 🔴 | 0 | 0 | 0 | 0 | 10 | Chỉ có 1 link "Giới thiệu", không có nội dung gì, không intro, không steps, không WHY, không notes |
| 2 | `gateway` | **20** | 🔴 | 0 | 20 | 0 | 0 | 0 | Không có intro, không WHY, không notes; tên tính năng mơ hồ, tiêu đề tiếng Anh |
| 3 | `global-search` | **30** | 🔴 | 10 | 10 | 0 | 0 | 10 | Overview ngắn gọn nhưng thiếu WHY và notes; steps chỉ link 1 trang |
| 4 | `sso-single-sign-on` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Không có intro/mô tả, không WHY, không notes |
| 5 | `endpoint-monitoring` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY, không notes |
| 6 | `fpt-monitoring-ip-access-control` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Không intro ở index, không WHY, không notes |
| 7 | `fpt-va` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Không intro, không WHY, không notes |
| 8 | `fpt-jenkins-ci` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY, không notes |
| 9 | `fpt-cloud-monitoring` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY, không notes |
| 10 | `fpt-appsec` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY, không notes |
| 11 | `fpt-cloud-wapples` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Không có intro hay WHY; chỉ là tree menu thuần túy |
| 12 | `model-hub` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY, không notes |
| 13 | `relation-management` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY, không notes |
| 14 | `reporting` | **30** | 🔴 | 10 | 20 | 0 | 0 | 0 | Intro quá ngắn, không WHY rõ ràng, tiêu đề nửa tiếng Anh |
| 15 | `token` | **30** | 🔴 | 0 | 20 | 0 | 0 | 10 | Không intro, không WHY, không notes; overview link-only |
| 16 | `checkpoint-fpt-ngfw` | **30** | 🔴 | 10 | 20 | 0 | 0 | 0 | Intro chỉ 1 câu, không WHY, không notes, FAQs và Samples rỗng |
| 17 | `trellix-customer-guide` | **40** | 🔴 | 20 | 20 | 0 | 0 | 0 | Intro ok nhưng không WHY, không notes, tiêu đề tiếng Anh |
| 18 | `file-storage-high-performance` | **40** | 🔴 | 0 | 20 | 0 | 0 | 20 | Không intro, không WHY, không notes; trang chủ rỗng |
| 19 | `nat_instance` | **40** | 🔴 | 10 | 20 | 0 | 10 | 0 | Intro ngắn, có FAQs, nhưng không WHY; tiêu đề Anh-Việt lẫn lộn |
| 20 | `notification-bell` | **40** | 🔴 | 10 | 20 | 0 | 0 | 10 | Intro ngắn, không WHY, không notes rõ ràng |
| 21 | `fortigate-fpt-ngfw` | **40** | 🔴 | 10 | 20 | 0 | 0 | 10 | Intro chỉ liệt kê tính năng, không WHY, không notes |
| 22 | `lock-unlock-instance-deletion` | **50** | 🟡 | 20 | 20 | 10 | 0 | 0 | Không notes, tên tiếng Anh hoàn toàn |
| 23 | `create_vpc` | **50** | 🟡 | 10 | 20 | 0 | 0 | 20 | Intro rất ngắn, không WHY, không notes |
| 24 | `affinity-anti-affinity` | **50** | 🟡 | 20 | 20 | 10 | 0 | 0 | Không notes, không giải thích WHY dùng affinity vs anti-affinity |
| 25 | `fpt-message-bus-for-rabbitmq` | **50** | 🟡 | 0 | 20 | 0 | 0 | 10 | Trang chủ rỗng, không intro, không WHY; cần giải thích RabbitMQ là gì |
| 26 | `fpt-event-gateway` | **50** | 🟡 | 20 | 20 | 10 | 0 | 0 | Không notes, thiếu WHY bussiness cụ thể |
| 27 | `tagging` | **50** | 🟡 | 20 | 20 | 10 | 0 | 0 | Intro ok, có WHY ngắn, không notes/warning |
| 28 | `billing` | **50** | 🟡 | 10 | 20 | 0 | 0 | 20 | Intro ngắn, không WHY (chỉ mô tả tính năng), không notes |
| 29 | `cost-explorer` | **50** | 🟡 | 10 | 20 | 0 | 10 | 10 | Intro rất ngắn, không WHY, có note ngắn về data drift |
| 30 | `fpt-autoscale` | **50** | 🟡 | 10 | 20 | 10 | 0 | 10 | Thiếu notes/warning, WHY còn mờ nhạt |
| 31 | `policy-management` | **50** | 🟡 | 20 | 20 | 10 | 0 | 0 | Không notes/warning, thiếu ví dụ WHY |
| 32 | `auto-schedule-to-on-off-instance` | **60** | 🟡 | 10 | 20 | 0 | 20 | 10 | Intro là notes kỹ thuật, không phải WHY; thiếu giới thiệu lợi ích |
| 33 | `allow-address-pair` | **60** | 🟡 | 20 | 20 | 10 | 10 | 0 | Thiếu WHY rõ ràng về business value; tiêu đề Anh-Việt |
| 34 | `change-network-config-0` | **60** | 🟡 | 20 | 20 | 10 | 10 | 0 | Intro tốt, có notes, nhưng thiếu WHY business, tiêu đề tiếng Anh |
| 35 | `app-catalogs` | **60** | 🟡 | 10 | 20 | 10 | 0 | 20 | Intro ngắn, có steps, WHY mờ nhạt, không notes |
| 36 | `ddos-protection` | **60** | 🟡 | 20 | 20 | 10 | 10 | 0 | Tốt nhưng thiếu WHY doanh nghiệp cụ thể, tiêu đề tiếng Anh |
| 37 | `fpt-api-gateway` | **60** | 🟡 | 20 | 20 | 10 | 0 | 10 | Intro tốt, steps rõ, nhưng thiếu notes/warning |
| 38 | `fpt-api-management` | **60** | 🟡 | 20 | 20 | 10 | 0 | 10 | Intro ok, steps đủ, thiếu notes/warning rõ ràng |
| 39 | `cloud-advisor` | **60** | 🟡 | 20 | 20 | 10 | 0 | 10 | Intro ok, steps link đầy đủ, thiếu WHY mạnh, không notes |
| 40 | `terraform` | **60** | 🟡 | 20 | 20 | 20 | 0 | 0 | WHY tốt, nhưng không notes, không steps chi tiết, tiêu đề tiếng Anh |
| 41 | `fpt-argocd-3` | **60** | 🟡 | 20 | 20 | 10 | 0 | 10 | Steps rất đầy đủ, nhưng thiếu notes/warning, WHY ngắn |
| 42 | `huong-dan-su-dung-grafana` | **60** | 🟡 | 20 | 20 | 10 | 0 | 10 | Intro ok, steps đầy đủ, WHY ngắn, không notes |
| 43 | `incident-management` | **60** | 🟡 | 20 | 20 | 10 | 0 | 10 | Intro ok, steps đầy đủ, WHY mờ nhạt, không notes |
| 44 | `nic` | **60** | 🟡 | 20 | 20 | 10 | 10 | 0 | Tốt, có notes kỹ thuật, tiêu đề tiếng Anh, thiếu WHY business |
| 45 | `budget-alert` | **70** | 🟡 | 20 | 20 | 20 | 10 | 0 | Intro tốt, WHY rõ, notes ok nhưng format lộn xộn, tiêu đề Anh |
| 46 | `fpt-backup-as-a-service` | **70** | 🟡 | 20 | 20 | 20 | 10 | 0 | Intro ok, WHY tốt, có notes, tiêu đề tiếng Anh, không notes kỹ thuật |
| 47 | `fpt-key-vault` | **70** | 🟡 | 20 | 20 | 20 | 0 | 10 | Intro ngắn nhưng có WHY, Release note dài, không notes warning |
| 48 | `end-user-request-resource` | **70** | 🟡 | 20 | 20 | 20 | 10 | 0 | Intro tốt, WHY rõ, notes về VPC/dates, tiêu đề tiếng Anh |
| 49 | `fpt-cloud-waf` | **70** | 🟡 | 20 | 20 | 20 | 0 | 10 | WHY tốt (Release note), nhưng không notes warning riêng, tiêu đề Anh |
| 50 | `fpt-cloud-desktop` | **70** | 🟡 | 20 | 20 | 20 | 10 | 0 | Intro tốt, concept rõ, WHY ok, tiêu đề Anh-Việt, không notes kỹ thuật |
| 51 | `fpt-container-registry-2` | **70** | 🟡 | 20 | 20 | 20 | 10 | 0 | Intro tốt, có notes, WHY trong release note, tiêu đề Anh |
| 52 | `fpt-data-platform` | **70** | 🟡 | 10 | 20 | 20 | 0 | 20 | Intro ngắn, WHY ok, steps rất đầy đủ, không notes/warning |
| 53 | `vpn-site-to-site-0` | **70** | 🟡 | 20 | 20 | 20 | 10 | 0 | Intro tốt, WHY ok, notes về kỹ thuật, tiêu đề tiếng Anh, tone Anh-Việt |
| 54 | `iam` | **70** | 🟡 | 20 | 20 | 20 | 0 | 10 | Intro tốt, WHY rõ, không notes/warning, tiêu đề Anh |
| 55 | `fpt-kubernetes-engine-with-gpu` | **70** | 🟡 | 20 | 20 | 10 | 20 | 0 | Notes kỹ thuật tốt, bảng GPU profile đầy đủ, thiếu WHY business, tiêu đề Anh |
| 56 | `fpt-managed-gpu-cluster` | **70** | 🟡 | 20 | 20 | 10 | 20 | 0 | Intro ok, notes tốt, thiếu WHY business rõ, tiêu đề Anh |
| 57 | `load-balancer` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Rất tốt, tiêu đề tiếng Anh, 1 số thuật ngữ Anh không giải thích |
| 58 | `cloud-server` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Steps rất đầy đủ, notes tốt, WHY rõ, tiêu đề Anh-Việt lẫn lộn |
| 59 | `cloud-guard` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Intro tốt, WHY rõ, notes trước khi dùng tốt, Release note dài-thừa |
| 60 | `dedicated-fpt-kubernetes-engine` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Intro tốt, WHY ok, notes tốt, nhưng Release note có step ảnh không render |
| 61 | `object-storage` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Intro và WHY rất tốt, notes đủ, Samples rõ, tiêu đề tiếng Anh |
| 62 | `managed-fpt-database-engine` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Intro tốt, bảng thuật ngữ rõ, WHY ok, notes, tiêu đề Anh |
| 63 | `managed-fpt-kubernetes-engine` | **80** | 🟢 | 20 | 20 | 20 | 20 | 0 | Intro tốt, notes rõ, steps đầy đủ, WHY ok, tiêu đề Anh |
| 64 | `backup` | **90** | 🟢 | 20 | 20 | 20 | 20 | 10 | Gần như chuẩn: intro, WHY, usecase, notes, steps; tiêu đề "Backup" đơn giản |
| 65 | `managed-fpt-database-engines-new` | **90** | 🟢 | 20 | 20 | 20 | 20 | 10 | Chuẩn nhất: intro, kiến trúc, WHY, notes, glossary, steps đầy đủ |

---

## Summary

| Tier | Số lượng | Modules |
|------|----------|---------|
| 🔴 < 50 | **21** | iac-old, gateway, global-search, sso-single-sign-on, endpoint-monitoring, fpt-monitoring-ip-access-control, fpt-va, fpt-jenkins-ci, fpt-cloud-monitoring, fpt-appsec, fpt-cloud-wapples, model-hub, relation-management, reporting, token, checkpoint-fpt-ngfw, trellix-customer-guide, file-storage-high-performance, nat_instance, notification-bell, fortigate-fpt-ngfw |
| 🟡 50–70 | **34** | lock-unlock-instance-deletion, create_vpc, affinity-anti-affinity, fpt-message-bus-for-rabbitmq, fpt-event-gateway, tagging, billing, cost-explorer, fpt-autoscale, policy-management, auto-schedule-to-on-off-instance, allow-address-pair, change-network-config-0, app-catalogs, ddos-protection, fpt-api-gateway, fpt-api-management, cloud-advisor, terraform, fpt-argocd-3, huong-dan-su-dung-grafana, incident-management, nic, budget-alert, fpt-backup-as-a-service, fpt-key-vault, end-user-request-resource, fpt-cloud-waf, fpt-cloud-desktop, fpt-container-registry-2, fpt-data-platform, vpn-site-to-site-0, iam, fpt-kubernetes-engine-with-gpu, fpt-managed-gpu-cluster |
| 🟢 > 70 | **10** | load-balancer, cloud-server, cloud-guard, dedicated-fpt-kubernetes-engine, object-storage, managed-fpt-database-engine, managed-fpt-kubernetes-engine, backup, managed-fpt-database-engines-new |

> **Tổng:** 65 modules | 🔴 21 | 🟡 34 | 🟢 10

---

## Top 10 cần chuẩn hóa ngay

> Ưu tiên cao nhất = điểm thấp nhất + impact lớn (module quan trọng với nhiều user)

| Thứ tự | Module | Score | Lý do ưu tiên |
|--------|--------|-------|---------------|
| 1 | **`iac-old`** | 10 🔴 | Gần như trống hoàn toàn — cần viết lại từ đầu |
| 2 | **`gateway`** | 20 🔴 | Module networking quan trọng nhưng không có intro, WHY, notes nào |
| 3 | **`sso-single-sign-on`** | 30 🔴 | Tính năng bảo mật quan trọng nhưng không có intro hay WHY |
| 4 | **`endpoint-monitoring`** | 30 🔴 | Hoàn toàn thiếu intro và context; trang chủ rỗng |
| 5 | **`fpt-monitoring-ip-access-control`** | 30 🔴 | Tính năng bảo mật, nhưng trang index rỗng không intro |
| 6 | **`fpt-jenkins-ci`** | 30 🔴 | CI/CD tool phổ biến nhưng trang index trống hoàn toàn |
| 7 | **`fpt-cloud-monitoring`** | 30 🔴 | Dịch vụ monitoring core nhưng không intro, không WHY |
| 8 | **`model-hub`** | 30 🔴 | AI/ML product quan trọng nhưng trang index rỗng hoàn toàn |
| 9 | **`fpt-cloud-wapples`** | 30 🔴 | WAF/security product nhưng chỉ là menu tree, không có context |
| 10 | **`checkpoint-fpt-ngfw`** | 30 🔴 | Security product quan trọng nhưng FAQs/Samples rỗng, intro 1 câu |

---

## Ghi chú về pattern lỗi phổ biến

1. **"Trang chủ rỗng"** — ~15 modules có section `## Trang chủ` hoặc `## Overviews` không có nội dung
2. **Thiếu WHY** — 40+ modules chỉ mô tả tính năng, không giải thích tại sao doanh nghiệp cần
3. **Thiếu Notes/Warning** — 35+ modules không có lưu ý trước khi dùng
4. **Tiêu đề/thuật ngữ tiếng Anh** — hầu hết modules có sidebar_label tiếng Anh hoặc Anh-Việt lẫn lộn
5. **Intro copy-paste** — nhiều modules có câu "FPT Smart Cloud chính thức ra mắt..." lặp lại như template

*Ngày score: 2026-03-21 | Reviewer: Claude Code Subagent*
