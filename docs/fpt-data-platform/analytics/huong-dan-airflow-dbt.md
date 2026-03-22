---
sidebar_label: "Huong dan airflow dbt"
title: "2. FPT Data Platform"
source: "https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-airflow-dbt"
parent: "https://fptcloud.com/documents/fpt-data-platform"
lang: vi
converted: "2026-03-19"
---

# 2. FPT Data Platform


Hướng dẫn Airflow & dbt


* * *

**Bước 1** : Upload project dbt vào thư mục mount path đã cấu hình cho Orchestration service

![Hình ảnh, Hình ảnh](/img/docs/f0af7c1018e9-image23.png)

![Hình ảnh, Hình ảnh](/img/docs/c826942e40ac-image24.png)

**Bước 2** : Tạo DAG theo mẫu để thực hiện job dbt

dbt_clickhouse_example.py

Thay đổi đường dẫn trỏ đến thư mục chứa project dbt:
    
    
    DBT_PROJECT_DIR = "/mnt/<WORKSPACE-STORAGE-NAME>/<DBT-PROJECT-DIRECTORY>"  |

**Bước 3** : Upload file DAG chạy job dbt vào thư mục dags tại dịch vụ Orchestration

![Hình ảnh, Hình ảnh](/img/docs/19affd969b56-image25.png)

**Bước 4** : Truy cập, đăng nhập theo đường dẫn Airflow của dịch vụ Orchestration Service để tiến hành chạy DAG

![Hình ảnh, Hình ảnh](/img/docs/67ddce4fbaf7-image26.png)

![Hình ảnh, Hình ảnh](/img/docs/368a95538d7e-image27.png)

[ Previous Xóa Orchestration ](./xoa-orchestration) [ Next Hướng dẫn Airflow & My Workspace ](./huong-dan-airflow-my-workspace)
