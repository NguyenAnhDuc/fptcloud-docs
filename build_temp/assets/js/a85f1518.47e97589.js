"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[17044],{

/***/ 801110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_analytics_huong_dan_airflow_workflow_md_a85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-analytics-huong-dan-airflow-workflow-md-a85.json
const site_docs_fpt_data_platform_analytics_huong_dan_airflow_workflow_md_a85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/analytics/huong-dan-airflow-workflow","title":"2. FPT Data Platform","description":"Hướng dẫn Airflow Workflow","source":"@site/docs/fpt-data-platform/analytics/huong-dan-airflow-workflow.md","sourceDirName":"fpt-data-platform/analytics","slug":"/fpt-data-platform/analytics/huong-dan-airflow-workflow","permalink":"/fpt-data-platform/analytics/huong-dan-airflow-workflow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan airflow workflow","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-airflow-workflow","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan airflow my workspace","permalink":"/fpt-data-platform/analytics/huong-dan-airflow-my-workspace"},"next":{"title":"Huong dan secert backends","permalink":"/fpt-data-platform/analytics/huong-dan-secert-backends"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/analytics/huong-dan-airflow-workflow.md


const frontMatter = {
	sidebar_label: 'Huong dan airflow workflow',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-airflow-workflow',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "<strong>1. Truy cập Workflow Engine</strong>",
  "id": "1-truy-cập-workflow-engine",
  "level": 3
}, {
  "value": "<strong>2. Danh sách Workflow</strong>",
  "id": "2-danh-sách-workflow",
  "level": 3
}, {
  "value": "Các chức năng chính",
  "id": "các-chức-năng-chính",
  "level": 3
}, {
  "value": "Thông tin hiển thị",
  "id": "thông-tin-hiển-thị",
  "level": 3
}, {
  "value": "<strong>3. Tạo mới Workflow</strong>",
  "id": "3-tạo-mới-workflow",
  "level": 3
}, {
  "value": "Khởi tạo Workflow",
  "id": "khởi-tạo-workflow",
  "level": 3
}, {
  "value": "Giao diện chi tiết Workflow",
  "id": "giao-diện-chi-tiết-workflow",
  "level": 3
}, {
  "value": "<strong>Các nút chức năng</strong>",
  "id": "các-nút-chức-năng",
  "level": 3
}, {
  "value": "<strong>4. Cấu hình Task</strong>",
  "id": "4-cấu-hình-task",
  "level": 3
}, {
  "value": "<strong>4.1 Thêm Task mới vào Workflow</strong>",
  "id": "41-thêm-task-mới-vào-workflow",
  "level": 4
}, {
  "value": "<strong>4.2. Task Type: Python</strong>",
  "id": "42-task-type-python",
  "level": 4
}, {
  "value": "Các trường cấu hình",
  "id": "các-trường-cấu-hình",
  "level": 4
}, {
  "value": "Trigger Rules",
  "id": "trigger-rules",
  "level": 4
}, {
  "value": "Các bước thực hiện",
  "id": "các-bước-thực-hiện",
  "level": 4
}, {
  "value": "<strong>4.3. Task Type: PySpark</strong>",
  "id": "43-task-type-pyspark",
  "level": 4
}, {
  "value": "Các trường cấu hình",
  "id": "các-trường-cấu-hình-1",
  "level": 4
}, {
  "value": "Các bước thực hiện",
  "id": "các-bước-thực-hiện-1",
  "level": 4
}, {
  "value": "<strong>4.4. Task Type: Jar</strong>",
  "id": "44-task-type-jar",
  "level": 4
}, {
  "value": "Các trường cấu hình",
  "id": "các-trường-cấu-hình-2",
  "level": 4
}, {
  "value": "Các bước thực hiện",
  "id": "các-bước-thực-hiện-2",
  "level": 4
}, {
  "value": "<strong>4.5. Task Type: DBT</strong>",
  "id": "45-task-type-dbt",
  "level": 4
}, {
  "value": "Các trường cấu hình",
  "id": "các-trường-cấu-hình-3",
  "level": 4
}, {
  "value": "Các bước thực hiện",
  "id": "các-bước-thực-hiện-3",
  "level": 4
}, {
  "value": "<strong>4.6. Task Type: Dask</strong>",
  "id": "46-task-type-dask",
  "level": 4
}, {
  "value": "Các trường cấu hình",
  "id": "các-trường-cấu-hình-4",
  "level": 4
}, {
  "value": "Các bước thực hiện",
  "id": "các-bước-thực-hiện-4",
  "level": 4
}, {
  "value": "<strong>4.6. Xóa Task</strong>",
  "id": "46-xóa-task",
  "level": 4
}, {
  "value": "Các bước thực hiện",
  "id": "các-bước-thực-hiện-5",
  "level": 4
}, {
  "value": "<strong>5. Cập nhật thông tin Workflow</strong>",
  "id": "5-cập-nhật-thông-tin-workflow",
  "level": 3
}, {
  "value": "<strong>5.1. Cập nhật Basic Information</strong>",
  "id": "51-cập-nhật-basic-information",
  "level": 4
}, {
  "value": "<strong>5.2. Cập nhật Schedule</strong>",
  "id": "52-cập-nhật-schedule",
  "level": 4
}, {
  "value": "<strong>5.3. Cập nhật Notifications (Workflow level)</strong>",
  "id": "53-cập-nhật-notifications-workflow-level",
  "level": 4
}, {
  "value": "<strong>5.4. Cập nhật Notifications (Task level)</strong>",
  "id": "54-cập-nhật-notifications-task-level",
  "level": 4
}, {
  "value": "<strong>6. Cấu hình Notification Channels</strong>",
  "id": "6-cấu-hình-notification-channels",
  "level": 3
}, {
  "value": "<strong>6.1. Truy cập Notification Management</strong>",
  "id": "61-truy-cập-notification-management",
  "level": 4
}, {
  "value": "<strong>6.2. Cấu hình Email Notification</strong>",
  "id": "62-cấu-hình-email-notification",
  "level": 4
}, {
  "value": "<strong>6.3. Cấu hình Telegram Notification</strong>",
  "id": "63-cấu-hình-telegram-notification",
  "level": 4
}, {
  "value": "<strong>7. Chạy Workflow</strong>",
  "id": "7-chạy-workflow",
  "level": 3
}, {
  "value": "<strong>Chạy thủ công (Manual Trigger)</strong>",
  "id": "chạy-thủ-công-manual-trigger",
  "level": 4
}, {
  "value": "<strong>Chạy tự động theo lịch</strong>",
  "id": "chạy-tự-động-theo-lịch",
  "level": 4
}, {
  "value": "<strong>Xem lịch sử chạy</strong>",
  "id": "xem-lịch-sử-chạy",
  "level": 4
}, {
  "value": "<strong>8. Xóa Workflow</strong>",
  "id": "8-xóa-workflow",
  "level": 3
}, {
  "value": "<strong>Các bước thực hiện</strong>",
  "id": "các-bước-thực-hiện-6",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn Airflow Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workflow Engine là thành phần lõi của nền tảng Data Platform, cho phép người dùng định nghĩa, quản lý và thực thi các quy trình xử lý dữ liệu dưới dạng workflow. Mỗi workflow bao gồm nhiều task có quan hệ phụ thuộc lẫn nhau, được mô hình hóa theo dạng DAG (Directed Acyclic Graph)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn này sẽ giúp :"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Truy cập và quản lý danh sách workflow"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo mới và cấu hình workflow"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thiết lập các task với nhiều loại khác nhau (Python, PySpark, Jar, DBT, Dask)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cấu hình lịch chạy và thông báo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quản lý và xóa workflow"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-truy-cập-workflow-engine",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Truy cập Workflow Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để truy cập vào chức năng Workflow Engine, thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên thanh menu chính của Data Platform, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Engine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Dropdown menu hiển thị 2 tùy chọn:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Jobs"
          }), " : Quản lý danh sách workflow"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Notifications"
          }), " : Cấu hình kênh thông báo (Email, Telegram)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jobs"
      }), " để truy cập vào danh sách workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-danh-sách-workflow",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Danh sách Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(153684)/* ["default"] */ .A) + "",
        width: "1280",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giao diện danh sách workflow hiển thị toàn bộ các workflow trong hệ thống với các thông tin tổng quan."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-chức-năng-chính",
      children: "Các chức năng chính"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chức năng"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tạo mới một workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kích hoạt chạy workflow thủ công"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xem chi tiết và lịch sử chạy của workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xóa workflow khỏi hệ thống"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sắp xếp danh sách theo Name, Description, Number of tasks (tăng dần/giảm dần)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lọc kết quả theo các điều kiện: contains, equals, starts with, ends with, is empty, is any of"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hide column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ẩn các cột không cần thiết"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Manage columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tùy chỉnh các cột hiển thị trên danh sách"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rows per page"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn số lượng workflow hiển thị mỗi trang (10, 25, 50)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thông-tin-hiển-thị",
      children: "Thông tin hiển thị"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi workflow trong danh sách hiển thị các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên workflow (có thể click để xem chi tiết)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " : Mô tả ngắn gọn về workflow"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of tasks"
          }), " : Số lượng task trong workflow"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Actions"
          }), " : Các thao tác nhanh (Run, View graph, Delete)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-tạo-mới-workflow",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Tạo mới Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "khởi-tạo-workflow",
      children: "Khởi tạo Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện danh sách workflow, click vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Workflow"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Hệ thống tự động khởi tạo workflow với thông tin mặc định:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow ID"
          }), " : Tự động tạo theo thứ tự tăng dần (duy nhất trong hệ thống)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow name"
          }), " : Tự động tạo theo pattern workflow- + 8 ký tự ngẫu nhiên (chữ cái và số)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " : Trống (có thể bổ sung sau)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tag"
          }), " : Trống (có thể thêm sau)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), " : Mặc định là \"Manual trigger\""]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Hệ thống hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow initialized successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chuyển sang giao diện chi tiết workflow để cấu hình task"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "giao-diện-chi-tiết-workflow",
      children: "Giao diện chi tiết Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(50891)/* ["default"] */ .A) + "",
        width: "1280",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giao diện chi tiết workflow bao gồm 2 phần chính:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: Khu vực Graph View (bên trái)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hiển thị sơ đồ DAG của các task"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cho phép zoom in/zoom out để xem chi tiết"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click vào task để xem hoặc chỉnh sửa cấu hình"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add task"
          }), " để thêm task mới"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Khu vực thông tin (bên phải)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Basic Information"
          }), " : Tên, mô tả, tags của workflow"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), " : Lịch chạy tự động"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Notifications"
          }), " : Cấu hình thông báo khi workflow chạy"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-nút-chức-năng",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các nút chức năng"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nút"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chức năng"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kích hoạt chạy workflow ngay lập tức"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "History"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xem lịch sử các lần chạy workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xóa workflow và toàn bộ dữ liệu liên quan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zoom in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phóng to graph view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zoom out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thu nhỏ graph view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thêm task mới vào workflow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-cấu-hình-task",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Cấu hình Task"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workflow Engine hỗ trợ 5 loại task khác nhau, mỗi loại phù hợp với một mục đích xử lý cụ thể."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-thêm-task-mới-vào-workflow",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1 Thêm Task mới vào Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(675307)/* ["default"] */ .A) + "",
        width: "1280",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện chi tiết workflow, tìm nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      }), " trên Graph View"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Hệ thống hiển thị form cấu hình task ở phía dưới với Type mặc định là \"Python\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn loại task phù hợp từ dropdown ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Python"
          }), " : Script Python đơn giản"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PySpark"
          }), " : Spark job viết bằng Python"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Jar"
          }), " : Ứng dụng Java/Scala đã đóng gói"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DBT"
          }), " : DBT (Data Build Tool) project"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dask"
          }), " : Dask distributed computing job"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Form cấu hình sẽ thay đổi tương ứng với loại task đã chọn"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Điền đầy đủ thông tin bắt buộc (xem chi tiết từng loại task bên dưới)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      }), " để lưu cấu hình"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Task mới sẽ xuất hiện trên Graph View"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu form task hiện tại đang ở trạng thái chỉnh sửa và chưa lưu, khi click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add task"
        }), " hệ thống sẽ hiển thị cảnh báo:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Message: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Please save the current task before creating a new one"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Task mới sẽ không có dependencies mặc định, cần cấu hình phần \"Depends on\" nếu muốn task chạy sau các task khác"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Có thể thêm nhiều task vào workflow, không giới hạn số lượng"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-task-type-python",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.2. Task Type: Python"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(165734)/* ["default"] */ .A) + "",
        width: "1280",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task Python cho phép thực thi các script Python đơn giản, phù hợp cho các tác vụ xử lý dữ liệu nhỏ, automation script, hoặc logic nghiệp vụ đơn giản."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-trường-cấu-hình",
      children: "Các trường cấu hình"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin cơ bản:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task name"
          }), " (bắt buộc): Tên task, chỉ chứa chữ cái, số, dấu gạch dưới (_), dấu gạch ngang (-), tối đa 100 ký tự"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (bắt buộc): Chọn \"Python\" từ dropdown list"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " (bắt buộc): Chọn đường dẫn file Python (*.py) từ thư mục"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Depends on"
          }), " : Chọn các task mà task hiện tại phụ thuộc (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger rule"
          }), " : Quy tắc kích hoạt task dựa trên trạng thái của upstream tasks"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường thực thi:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute"
        }), " (bắt buộc):"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn Compute thực thi script"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn từ danh sách compute của Processing service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn là duy nhất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image"
        }), " (bắt buộc): Chọn runtime image phù hợp:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Python Spark 3.4.2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Spark 3.5.0 with Python 3.10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " DBT Core 1.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Spark 3.5.0 with Python3 for Openmetadata with Lakehouse"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " RAPIDS Spark GPU Accelerated"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Python Dask 2025.4.1 (Beta)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Init scripts"
        }), " : Script thực thi trước khi chạy Python script (tùy chọn)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài nguyên:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU"
          }), " (bắt buộc): Số lượng CPU core (Min: 1, Max: 64)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RAM (GB)"
          }), " (bắt buộc): Dung lượng RAM (Min: 1, Max: 128)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thư viện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pypi"
          }), " : File requirements.txt chứa danh sách thư viện Python cần cài đặt"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wheel"
          }), " : Các file .whl (có thể chọn nhiều file)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arguments"
        }), " : Các tham số truyền vào khi thực thi script (tối đa 255 ký tự)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : Chọn loại thông báo (Telegram hoặc Email)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Channel"
          }), " : Kênh Telegram hoặc địa chỉ email nhận thông báo (5-254 ký tự, format email hợp lệ)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event"
          }), " : Chọn trạng thái để gửi thông báo (running, success, failed) - có thể chọn nhiều"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "At most"
          }), " (bắt buộc): Số lần thử lại khi script chạy thất bại (Min: 0, Max: 10)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delay"
          }), " (bắt buộc): Thời gian chờ giữa các lần thử lại, đơn vị phút (Min: 1, Max: 10)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "trigger-rules",
      children: "Trigger Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger Rule"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "all_success"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chỉ chạy khi tất cả upstream tasks đều thành công"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "all_failed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chỉ chạy khi tất cả upstream tasks đều FAILED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "all_done"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy khi tất cả upstream tasks kết thúc (ở bất kỳ trạng thái nào: success, failed, skipped)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "all_done_setup_success"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chỉ chạy khi tất cả upstream tasks đã kết thúc và tất cả SETUP tasks thành công"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "one_success"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy nếu ít nhất một upstream task SUCCESS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "one_fail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy nếu ít nhất một upstream task FAILED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "one_done"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy nếu ít nhất một upstream task DONE (đã kết thúc, bất kể trạng thái gì)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "none_failed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy khi không có upstream nào FAILED, nhưng có thể có SKIPPED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "none_failed_or_skipped"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy khi không có FAILED và cũng không có SKIPPED. Chỉ chấp nhận SUCCESS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "none_skipped"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy khi không có upstream task nào bị SKIPPED. Có thể FAILED hoặc SUCCESS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "dummy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không thực hiện hành động nào. Nó luôn chạy bất kể các task trước đó thành công, thất bại hay bị bỏ qua"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "always"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task luôn chạy, bất kể upstream status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "none_failed_min_one_success"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy khi không có FAILED và ít nhất một task SUCCESS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "all_skipped"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task chạy khi tất cả upstream tasks bị SKIPPED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện",
      children: "Các bước thực hiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện chi tiết workflow, click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Hệ thống hiển thị form cấu hình task với Type mặc định là \"Python\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền đầy đủ thông tin bắt buộc:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Task name"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Path đến file Python"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute cluster"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image runtime"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPU và RAM"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " (Tùy chọn) Cấu hình thêm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dependencies (Depends on)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trigger rule"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Init scripts"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thư viện (Pypi, Wheel)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Arguments"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Notifications"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retry policy"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Hệ thống hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "{{task_name}} created successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Task mới xuất hiện trên Graph View"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-task-type-pyspark",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.3. Task Type: PySpark"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task PySpark cho phép thực thi các job Spark viết bằng Python, phù hợp cho xử lý dữ liệu lớn với distributed computing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(902110)/* ["default"] */ .A) + "",
        width: "1156",
        height: "1280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-trường-cấu-hình-1",
      children: "Các trường cấu hình"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin cơ bản:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task name"
          }), " (bắt buộc): Tên task, chỉ chứa chữ cái, số, dấu gạch dưới (_), dấu gạch ngang (-), tối đa 100 ký tự"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (bắt buộc): Chọn \"PySpark\" từ dropdown list"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " (bắt buộc): Chọn đường dẫn file Python (*.py) từ thư mục"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Depends on"
          }), " : Chọn các task mà task hiện tại phụ thuộc (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger rule"
          }), " : Quy tắc kích hoạt task dựa trên trạng thái của upstream tasks"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường thực thi:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute"
        }), " (bắt buộc):"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn Compute thực thi script"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn từ danh sách compute của Processing service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn là duy nhất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image"
        }), " (bắt buộc): Chọn runtime image phù hợp:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Python Spark 3.4.2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Spark 3.5.0 with Python 3.10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Spark 3.5.0 with Python3 for Openmetadata with Lakehouse"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Init scripts"
          }), " : Script thực thi trước khi chạy PySpark script (tùy chọn)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spark configuration"
          }), " : Cấu hình tham số Spark theo định dạng JSON Key-Value (tham khảo:", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://spark.apache.org/docs/latest/configuration.html",
            children: " https://spark.apache.org/docs/latest/configuration.html"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Environment variables"
          }), " : Cấu hình biến môi trường theo định dạng JSON Key-Value"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài nguyên (Spark-specific):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Driver CPU"
          }), " (bắt buộc): CPU cho Spark Driver (Min: 1, Max: 64)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Driver RAM (GB)"
          }), " (bắt buộc): RAM cho Spark Driver (Min: 1, Max: 128)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Executor CPU"
          }), " (bắt buộc): CPU cho mỗi Executor (Min: 1, Max: 64)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Executor RAM (GB)"
          }), " (bắt buộc): RAM cho mỗi Executor (Min: 1, Max: 128)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thư viện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pypi requirements"
          }), " : File requirements.txt"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wheel"
          }), " : Các file .whl (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Jar"
          }), " : Các file .jar cho Java runtime (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arguments"
        }), " : Các tham số truyền vào khi thực thi script (tối đa 255 ký tự)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : Chọn loại thông báo (Telegram hoặc Email)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Channel"
          }), " : Kênh Telegram hoặc địa chỉ email nhận thông báo (5-254 ký tự, format email hợp lệ)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event"
          }), " : Chọn trạng thái để gửi thông báo (running, success, failed) - có thể chọn nhiều"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "At most"
          }), " (bắt buộc): Số lần thử lại khi script chạy thất bại (Min: 0, Max: 10)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delay"
          }), " (bắt buộc): Thời gian chờ giữa các lần thử lại, đơn vị phút (Min: 1, Max: 10)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-1",
      children: "Các bước thực hiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      }), " tại giao diện workflow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn Type = \"PySpark\" từ dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền đầy đủ thông tin bắt buộc bao gồm cả tài nguyên cho Driver và Executor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " (Tùy chọn) Cấu hình:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Spark configuration"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Environment variables"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thư viện Jar (nếu cần)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      }), " để lưu cấu hình"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "44-task-type-jar",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.4. Task Type: Jar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task Jar cho phép thực thi các ứng dụng Java/Scala đã được đóng gói dưới dạng JAR file, phù hợp cho các job Spark viết bằng Scala hoặc Java."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(148985)/* ["default"] */ .A) + "",
        width: "1213",
        height: "1280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-trường-cấu-hình-2",
      children: "Các trường cấu hình"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin cơ bản:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task name"
          }), " (bắt buộc): Tên task, chỉ chứa chữ cái, số, dấu gạch dưới (_), dấu gạch ngang (-), tối đa 100 ký tự"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (bắt buộc): Chọn \"Jar\" từ dropdown list"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " (bắt buộc): Chọn đường dẫn file JAR (*.jar) từ thư mục"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Main class"
          }), " (bắt buộc): Tên lớp Java chứa phương thức main() để bắt đầu thực thi (tối đa 255 ký tự, chỉ chữ cái, số, dấu chấm (.), dấu gạch dưới (_))"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Depends on"
          }), " : Chọn các task mà task hiện tại phụ thuộc (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger rule"
          }), " : Quy tắc kích hoạt task dựa trên trạng thái của upstream tasks"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường thực thi:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute"
        }), " (bắt buộc):"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn Compute thực thi script"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn từ danh sách compute của Processing service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn là duy nhất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image"
        }), " (bắt buộc): Chọn runtime image phù hợp:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Scala Spark 3.4.2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Spark 3.5.0 with Scala 2.12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Init scripts"
          }), " : Script thực thi trước khi chạy Jar script (tùy chọn)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Spark configuration:"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Cấu hình tham số spark"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Định dạng Json Key – value", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://spark.apache.org/docs/latest/configuration.html",
        children: " https://spark.apache.org/docs/latest/configuration.html"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment variables:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Cấu hình tham số môi trường"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Định dạng Json Key - value"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài nguyên:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Driver CPU"
          }), " (bắt buộc): Cấu hình tài nguyên Driver CPU cho chạy job (Min: 1, Max: 64)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Driver RAM (GB)"
          }), " (bắt buộc): Cấu hình tài nguyên Driver RAM cho chạy job (Min: 1, Max: 128)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Executor CPU"
          }), " (bắt buộc): Cấu hình tài nguyên Executor CPU cho chạy job (Min: 1, Max: 64)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Executor RAM (GB)"
          }), " (bắt buộc): Cấu hình tài nguyên Executor RAM cho chạy job (Min: 1, Max: 128)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thư viện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pypi requirements"
          }), " : Lựa chọn tệp cài đặt thư viện python requirements.txt"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wheel"
          }), " : Lựa chọn tệp cài đặt thư viện python *.whl"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Jar"
          }), " : Lựa chọn tệp cài đặt thư viện cho Java runtime *.jar (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arguments"
        }), " : Các tham số truyền vào khi thực thi script (tối đa 255 ký tự)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : Chọn loại thông báo (Telegram hoặc Email)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Channel"
          }), " : Kênh Telegram hoặc địa chỉ email nhận thông báo (5-254 ký tự, format email hợp lệ)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event"
          }), " : Chọn trạng thái để gửi thông báo (running, success, failed) - có thể chọn nhiều"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "At most"
          }), " (bắt buộc): Số lần thử lại khi script chạy thất bại (Min: 0, Max: 10)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delay"
          }), " (bắt buộc): Thời gian chờ giữa các lần thử lại, đơn vị phút (Min: 1, Max: 10)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-2",
      children: "Các bước thực hiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      }), " tại giao diện workflow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn Type = \"Jar\" từ dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền đầy đủ thông tin bắt buộc:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Task name"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Path đến file JAR"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Main class (ví dụ: com.example.MainApp)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute, Image"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tài nguyên Driver và Executor"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " (Tùy chọn) Thêm các file JAR phụ thuộc nếu cần"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "45-task-type-dbt",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.5. Task Type: DBT"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task DBT cho phép thực thi các DBT (Data Build Tool) project, phù hợp cho việc transform dữ liệu trong data warehouse theo mô hình ELT."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(563551)/* ["default"] */ .A) + "",
        width: "1280",
        height: "1142"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-trường-cấu-hình-3",
      children: "Các trường cấu hình"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin cơ bản:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task name"
          }), " (bắt buộc): Tên task, chỉ chứa chữ cái, số, dấu gạch dưới (_), dấu gạch ngang (-), tối đa 100 ký tự"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (bắt buộc): Chọn \"DBT\" từ dropdown list"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " (bắt buộc): Đường dẫn đến thư mục chứa DBT project"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Depends on"
          }), " : Chọn các task mà task hiện tại phụ thuộc (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger rule"
          }), " : Quy tắc kích hoạt task dựa trên trạng thái của upstream tasks"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường thực thi:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute"
        }), " (bắt buộc):"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn Compute thực thi script"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn từ danh sách compute của Processing service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Lựa chọn là duy nhất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image"
        }), " (bắt buộc): Chọn runtime image phù hợp:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " DBT Core 1.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Init scripts"
        }), " : Script thực thi trước khi chạy DBT script (tùy chọn)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài nguyên:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU"
          }), " (bắt buộc): Số lượng CPU core cho DBT (Min: 1, Max: 64)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RAM (GB)"
          }), " (bắt buộc): Dung lượng RAM cho DBT (Min: 1, Max: 128)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DBT Commands:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commands"
        }), " (bắt buộc): Danh sách các lệnh DBT cần thực thi"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Mỗi lệnh: 7-100 ký tự, chỉ chữ cái, số, gạch ngang (-), gạch dưới (_), khoảng trắng"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Tối đa 20 lệnh"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Ví dụ: dbt run, dbt test, dbt snapshot"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thư viện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pypi requirements"
          }), " : Lựa chọn tệp cài đặt thư viện python requirements.txt"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wheel"
          }), " : Lựa chọn tệp cài đặt thư viện python *.whl"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment variables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu hình biến môi trường theo định dạng JSON Key-Value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arguments"
        }), " : Các tham số truyền vào khi thực thi script (tối đa 255 ký tự)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : Chọn loại thông báo (Telegram hoặc Email)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Channel"
          }), " : Kênh Telegram hoặc địa chỉ email nhận thông báo (5-254 ký tự, format email hợp lệ)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event"
          }), " : Chọn trạng thái để gửi thông báo (running, success, failed) - có thể chọn nhiều"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "At most"
          }), " (bắt buộc): Số lần thử lại khi script chạy thất bại (Min: 0, Max: 10)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delay"
          }), " (bắt buộc): Thời gian chờ giữa các lần thử lại, đơn vị phút (Min: 1, Max: 10)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-3",
      children: "Các bước thực hiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      }), " tại giao diện workflow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn Type = \"DBT\" từ dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền đầy đủ thông tin:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Task name"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Path đến thư mục DBT project"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute, Image"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPU và RAM"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập các lệnh DBT cần thực thi (ví dụ: dbt run, dbt test)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " (Tùy chọn) Cấu hình environment variables nếu cần"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "46-task-type-dask",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.6. Task Type: Dask"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task Dask cho phép thực thi các job xử lý dữ liệu song song với Dask framework, phù hợp cho xử lý dữ liệu lớn với Python trong môi trường distributed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(41703)/* ["default"] */ .A) + "",
        width: "1266",
        height: "1280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-trường-cấu-hình-4",
      children: "Các trường cấu hình"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin cơ bản:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task name"
          }), " (bắt buộc): Tên task, chỉ chứa chữ cái, số, dấu gạch dưới (_), dấu gạch ngang (-), tối đa 100 ký tự"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (bắt buộc): Chọn \"Dask\" từ dropdown list"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " (bắt buộc): Chọn đường dẫn file Python (*.py) từ thư mục"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Depends on"
          }), " : Chọn các task mà task hiện tại phụ thuộc (có thể chọn nhiều)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger rule"
          }), " : Quy tắc kích hoạt task dựa trên trạng thái của upstream tasks"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường thực thi:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute"
        }), " (bắt buộc): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "o"
        }), " Lựa chọn Compute thực thi script ", (0,jsx_runtime.jsx)(_components.code, {
          children: "o"
        }), " Lựa chọn từ danh sách compute của Processing service ", (0,jsx_runtime.jsx)(_components.code, {
          children: "o"
        }), " Lựa chọn là duy nhất"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image"
        }), " (bắt buộc): Chọn runtime image phù hợp: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "o"
        }), " Python Dask 2025.4.1 (Beta)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Init scripts"
        }), " : Script thực thi trước khi chạy Python script (tùy chọn)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài nguyên (Dask-specific):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Job - CPU"
        }), " (bắt buộc): CPU cho Job (Min: 1, Max: 64)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Job - RAM (GB)"
        }), " (bắt buộc): RAM cho Job (Min: 1, Max: 128)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduler - CPU"
        }), " (bắt buộc): CPU cho Dask Scheduler (Min: 1, Max: 64)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduler - RAM (GB)"
        }), " (bắt buộc): RAM cho Dask Scheduler (Min: 1, Max: 128)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker - CPU"
        }), " (bắt buộc): CPU cho mỗi Dask Worker (Min: 1, Max: 64)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker - RAM (GB)"
        }), " (bắt buộc): RAM cho mỗi Dask Worker (Min: 1, Max: 128)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker instances"
        }), " (bắt buộc): Số lượng Worker (Min: 1, Max: 100)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thư viện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pypi"
        }), " : File requirements.txt chứa danh sách thư viện Python cần cài đặt"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wheel"
        }), " : Các file .whl (có thể chọn nhiều file)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arguments"
        }), " : Các tham số truyền vào khi thực thi script (tối đa 255 ký tự)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " : Chọn loại thông báo (Telegram hoặc Email)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Channel"
        }), " : Kênh Telegram hoặc địa chỉ email nhận thông báo (5-254 ký tự, format email hợp lệ)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event"
        }), " : Chọn trạng thái để gửi thông báo (running, success, failed) - có thể chọn nhiều"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "At most"
        }), " (bắt buộc): Số lần thử lại khi script chạy thất bại (Min: 0, Max: 10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delay"
        }), " (bắt buộc): Thời gian chờ giữa các lần thử lại, đơn vị phút (Min: 1, Max: 10)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-4",
      children: "Các bước thực hiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add task"
      }), " tại giao diện workflow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn Type = \"Dask\" từ dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền đầy đủ thông tin về tài nguyên cho:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Job"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduler"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worker (bao gồm số lượng instances)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Cấu hình các thông tin khác như Python Task"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "46-xóa-task",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.6. Xóa Task"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xóa task sẽ loại bỏ task khỏi workflow và tất cả các dependencies liên quan."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-5",
      children: "Các bước thực hiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện chi tiết workflow, click vào task cần xóa trên Graph View"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Form cấu hình task sẽ hiển thị bên dưới"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " (màu đỏ) ở góc dưới bên trái form"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(681418)/* ["default"] */ .A) + "",
        width: "1280",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Popup xác nhận hiển thị với nội dung:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Title: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete task"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Are you sure you want to delete task \"{{task_name}}\"? This action cannot be undone."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để xác nhận xóa hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy bỏ"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(478518)/* ["default"] */ .A) + "",
        width: "616",
        height: "178"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Sau khi xác nhận, hệ thống thực hiện:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xóa task khỏi workflow"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xóa tất cả dependencies liên quan đến task này"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hiển thị thông báo:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Success"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "o"
      }), " Message: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task deleted successfully!"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Task biến mất khỏi Graph View"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thao tác xóa không thể hoàn tác"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu có task khác phụ thuộc vào task bị xóa (downstream tasks), cần cập nhật lại dependencies cho các task đó"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xóa task sẽ ảnh hưởng đến luồng thực thi của workflow, cần kiểm tra kỹ trước khi xóa"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nên backup cấu hình task trước khi xóa (chụp màn hình hoặc ghi chú lại các thông số)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-cập-nhật-thông-tin-workflow",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Cập nhật thông tin Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo workflow, có thể cập nhật các thông tin cơ bản, lịch chạy và cấu hình thông báo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-cập-nhật-basic-information",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.1. Cập nhật Basic Information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(981296)/* ["default"] */ .A) + "",
        width: "618",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện chi tiết workflow, tìm phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Information"
      }), " bên phải"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " (biểu tượng bút chì) ở góc phải phần Basic Information"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup \"Workflow Basic Information\" hiển thị với các trường:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trường"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yêu cầu"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc. 3-100 ký tự, chỉ chữ cái, số, _, -. Không trùng với workflow khác trong hệ thống"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tùy chọn. Tối đa 255 ký tự"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gắn tag cho workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tùy chọn. Mỗi tag 1-30 ký tự, chỉ chữ cái, số, -, _. Không trùng tag trong cùng workflow. Tối đa 10 tags"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chỉnh sửa thông tin cần thiết"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu thay đổi hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Hệ thống hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow updated successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nếu tên workflow đã tồn tại, hệ thống sẽ báo lỗi:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Error"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow with name '{{workflow_name}}' already exists"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-cập-nhật-schedule",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.2. Cập nhật Schedule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(619907)/* ["default"] */ .A) + "",
        width: "913",
        height: "585"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Schedule cho phép thiết lập lịch chạy tự động cho workflow."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện chi tiết workflow, tìm phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule"
      }), " bên phải"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " ở góc phải phần Schedule"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup \"Schedule\" hiển thị với các tùy chọn:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual trigger:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checkbox \"Manual trigger (do not run on schedule)\" - Workflow chỉ chạy khi được kích hoạt thủ công"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule interval (nếu không chọn Manual trigger):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Minutes"
          }), " : Chạy theo phút"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hourly"
          }), " : Chạy theo giờ"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Daily"
          }), " : Chạy hàng ngày"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Weekly"
          }), " : Chọn các ngày trong tuần (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monthly"
          }), " : Chạy hàng tháng"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom"
          }), " : Nhập cron expression tùy chỉnh"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start time:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn giờ và phút bắt đầu chạy workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron expression preview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống hiển thị cron expression tương ứng với lựa chọn của"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ví dụ: 0 0 __ * (chạy lúc 12:00 AM mỗi ngày)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Cấu hình lịch chạy theo nhu cầu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu thay đổi hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Hệ thống hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule updated successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cron expression phải đúng cú pháp 5 field (minute, hour, day-of-month, month, day-of-week)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các ký tự hợp lệ: * , - / ;"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Không cho phép xuống dòng"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tối đa 100 ký tự"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-cập-nhật-notifications-workflow-level",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.3. Cập nhật Notifications (Workflow level)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(977948)/* ["default"] */ .A) + "",
        width: "1210",
        height: "379"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình thông báo cho toàn bộ workflow khi có các sự kiện xảy ra."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện chi tiết workflow, tìm phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications"
      }), " bên phải"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " ở góc phải phần Notifications"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup \"Notifications\" hiển thị với các trường:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trường"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn loại thông báo: Telegram hoặc Email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Channel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kênh Telegram hoặc địa chỉ Email nhận thông báo (5-254 ký tự, định dạng email hợp lệ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn trạng thái để gửi thông báo: running, success, failed (có thể chọn nhiều)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " (dấu +) để thêm cấu hình thông báo mới"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Điền thông tin cho mỗi notification:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Type (Telegram/Email)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhập Channel (tên kênh Telegram hoặc email)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Event (running, success, failed)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Có thể thêm nhiều notification khác nhau bằng cách click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " nhiều lần"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Để xóa một notification, click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " (thùng rác) bên cạnh notification đó"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu cấu hình hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 9:"
      }), " Hệ thống hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Notifications updated successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "54-cập-nhật-notifications-task-level",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.4. Cập nhật Notifications (Task level)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(459873)/* ["default"] */ .A) + "",
        width: "1280",
        height: "211"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài notification ở workflow level, mỗi task cũng có thể cấu hình notification riêng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click vào task trên Graph View để mở form cấu hình task"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Scroll xuống phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications"
      }), " trong form task"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Click vào icon mở rộng (dropdown) phần Notifications"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " để thêm notification mới"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Điền thông tin notification (giống như workflow level):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Type (Telegram/Email)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Channel"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Event (running, success, failed)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Có thể thêm nhiều notification cho task"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save Task"
      }), " để lưu cấu hình task"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Notification của task độc lập với notification của workflow"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu cả workflow và task đều có notification, cả hai sẽ được gửi khi có sự kiện tương ứng"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-cấu-hình-notification-channels",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Cấu hình Notification Channels"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi sử dụng notification trong workflow/task, cần cấu hình kênh thông báo (Notification Channels) trước."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-truy-cập-notification-management",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.1. Truy cập Notification Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(359801)/* ["default"] */ .A) + "",
        width: "1280",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên thanh menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Engine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Trong dropdown menu, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notifications"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Giao diện danh sách notification channels hiển thị với các thông tin:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : Loại notification (email/telegram)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên cấu hình"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " : Mô tả"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kích hoạt"
          }), " : Trạng thái active/inactive"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Actions"
          }), " : Các thao tác (Edit)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-cấu-hình-email-notification",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.2. Cấu hình Email Notification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(836787)/* ["default"] */ .A) + "",
        width: "639",
        height: "774"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại danh sách Notifications, tìm dòng có Type = \"email\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " (bút chì) ở cột Actions"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup \"Email Notification Configuration\" hiển thị với các trường:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trường"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yêu cầu"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên cấu hình email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả cấu hình"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tùy chọn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMTP Server Host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Địa chỉ SMTP server (ví dụ: smtp.gmail.com)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMTP Server Port"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port của SMTP server (ví dụ: 587, 465)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMTP Username"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên đăng nhập SMTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMTP Password"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mật khẩu SMTP (có nút show/hide)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle để bật/tắt cấu hình"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Điền đầy đủ thông tin SMTP server:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Host: Địa chỉ SMTP server của nhà cung cấp email"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Port: Thường là 587 (TLS) hoặc 465 (SSL)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Username: Email hoặc username đăng nhập"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Password: Mật khẩu ứng dụng hoặc mật khẩu email"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Bật toggle ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable configuration"
      }), " để kích hoạt"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu cấu hình hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với Gmail, cần tạo \"App Password\" thay vì sử dụng mật khẩu thường"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với Office 365, cần cấu hình SMTP authentication"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test kết nối SMTP trước khi sử dụng trong production"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-cấu-hình-telegram-notification",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.3. Cấu hình Telegram Notification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(377884)/* ["default"] */ .A) + "",
        width: "633",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại danh sách Notifications, tìm dòng có Type = \"telegram\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " ở cột Actions"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup \"Telegram Notification Configuration\" hiển thị với các trường:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trường"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yêu cầu"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên cấu hình Telegram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả cấu hình"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tùy chọn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telegram Bot Token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token của Telegram Bot (có nút show/hide)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt buộc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle để bật/tắt cấu hình"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Lấy Telegram Bot Token:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mở Telegram và tìm @BotFather"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gửi lệnh /newbot để tạo bot mới"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đặt tên và username cho bot"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BotFather sẽ trả về Bot Token (dạng: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Copy Bot Token và paste vào trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Telegram Bot Token"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Bật toggle ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable configuration"
      }), " để kích hoạt"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu cấu hình hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Lấy Chat ID/Channel:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thêm bot vào group/channel muốn nhận thông báo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gửi một tin nhắn bất kỳ trong group/channel"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Truy cập URL:", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://api.telegram.org/bot%3cYOUR_BOT_TOKEN%3e/getUpdates",
            children: " https://api.telegram.org/bot/getUpdates"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tìm chat.id trong response JSON"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sử dụng Chat ID này khi cấu hình notification trong workflow/task"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bot cần được thêm vào group/channel trước khi có thể gửi thông báo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với channel, bot cần có quyền \"Post Messages\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chat ID âm là group/channel, Chat ID dương là chat cá nhân"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-chạy-workflow",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Chạy Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có 2 cách để chạy workflow: thủ công và tự động theo lịch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chạy-thủ-công-manual-trigger",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chạy thủ công (Manual Trigger)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 1: Từ danh sách workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện danh sách workflow, tìm workflow cần chạy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger workflow"
      }), " (nút play ) ở cột Actions"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Workflow sẽ được kích hoạt chạy ngay lập tức"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 2: Từ chi tiết workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click vào tên workflow để vào giao diện chi tiết"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run"
      }), " ở góc trên bên phải"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Workflow sẽ được kích hoạt chạy ngay lập tức"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chạy-tự-động-theo-lịch",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chạy tự động theo lịch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workflow sẽ tự động chạy theo lịch đã cấu hình trong phần Schedule (xem mục 5.5.2)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xem-lịch-sử-chạy",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xem lịch sử chạy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 1: Từ danh sách workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "View graph"
      }), " (biểu tượng graph) ở cột Actions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 2: Từ chi tiết workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "History"
      }), " ở góc trên bên phải"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin hiển thị:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Danh sách các lần chạy workflow"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thời gian bắt đầu và kết thúc"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trạng thái (success, failed, running)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chi tiết log của từng task"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-xóa-workflow",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Xóa Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xóa workflow sẽ xóa toàn bộ workflow, các task bên trong và tất cả dữ liệu liên quan (lịch sử chạy, log)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-6",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước thực hiện"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 1: Từ danh sách workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(416577)/* ["default"] */ .A) + "",
        width: "1280",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện danh sách workflow, tìm workflow cần xóa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " (thùng rác) ở cột Actions"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup xác nhận hiển thị:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Title: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete workflow"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Are you sure you want to delete workflow \"{{workflow_name}}\"? This action cannot be undone."
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để xác nhận xóa hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Hệ thống thực hiện xóa workflow và hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow deleted successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Quay lại màn hình danh sách workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 2: Từ chi tiết workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(830032)/* ["default"] */ .A) + "",
        width: "671",
        height: "188"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Click vào tên workflow để vào giao diện chi tiết"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " ở góc trên bên phải"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup xác nhận hiển thị:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Title: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete workflow"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Are you sure you want to delete workflow \"{{workflow_name}}\"? This action cannot be undone."
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để xác nhận xóa hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Hệ thống thực hiện xóa workflow và hiển thị thông báo:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Subject: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Success"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow deleted successfully!"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Quay lại màn hình danh sách workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thao tác xóa không thể hoàn tác"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tất cả lịch sử chạy và log sẽ bị xóa cùng workflow"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu workflow đang chạy, nên dừng trước khi xóa"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-secert-backends",
        children: " Previous Hướng dẫn Secret backends "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cai-dat-ingestion-service",
        children: " Next Ingestion service "
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 41703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/042aaea2b42d-photo_2026-01-19_08-4d6a9166612840d9608089a9dbb761cc.jpg");

/***/ },

/***/ 416577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05b9ade76ef4-photo_2026-01-19_19-4b8fd78783dfe12827dd5cbf6fc3eb19.jpg");

/***/ },

/***/ 902110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0cf619d01a3b-photo_2026-01-19_05-757bc7e0850ad5eb3249af308cefdf30.jpg");

/***/ },

/***/ 478518
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCACyAmgDASIAAhEBAxEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAYEAgMHAQX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/9oADAMBAAIQAxAAAAHq7em3JlaCL+WoilqIpaiKWoilqIpaiKWoilqIpaiKWoilqIpaiKWoilqIpaiKWoi1oIxZiMWYjFmIxZiMWYjFmIxZiMWYjFmIxZiMWYjFmIxZiMWYjFmIxZiMWYjFmI3oueJ5+7BmvoC/NID8bUb2HtNLBqO10flH7jp4mhg3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEG+DH6B5/6AaQTWC0ER8uBH4b4cZmoERztBE2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQL4MnoPn3oJpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAPgy+g+fegmkGXll5mvj1ZDd3fn6Rzwdhp7cHM7e3J8NnHrzGr7n5nb2Zuw488/UbeOTsN2bsyGz5j7Tv6t2Q5ccg/Vy8uk59nf1mf53ZDY6OBq6uPw7ueDafePDEfofen4dn3q7Dn3flbj786es7+zF3nf3/AJn6JyAAAAAAAB5+DL6D5/6AaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAefgy+g+f8AoBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5+DN6B5/6AaQAAAAAAAAAAAAAAAAAAAAAAAAM+jCG4YW4YW4YW4YdXZhO7H+F+Dj0rtCK6XaEF2hBd8oIens2nflefiYz38BfmkAAAAAAAAAAAAAAAAAAAAAAAADDuwm78/9D88cOvCfqfOHE7ef5f6xtw7sJOfg/vfg+Xu7+fHuR18tX2aZunv0H4Ap6/RdWXV6/nfPxNc9/AX5pAAAAAAAAAAAAAAAAAAAAAAAAAw7s5oYRuYRuYRuYRuwtRJfg+j48elCLtXSEXYhF2IRd8jTpN+V5++pjNcw/M9EQvEvEEL1Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkCL5Ai+QIvkD9L1BfS84w3UcHWPvAOHEPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH0OXMOQP/xAAoEAABBAIBAwQCAwEAAAAAAAAEAAECAxQVNBESEwUQUGAwMyEiQDH/2gAIAQEAAQUCVdU7XwSVgkrBJWASsAlYBKwCVgErAJWASsAlYBKwCVgErAJWASsAlYBKwCVgErAJWASsAlYBKwCVgErAJWASsAlYBKwCVgErAJWASsElYJKwSVgkrBJWCSsElYJKwSVgkrBJWCSsElYJKwSVgkrBJWCSsElYJKwSVgkrBJWCSsElYJKwSVgkrBJWCSsElYJKwSVgkrBJWCSsElYJKwSVYPbU3sJW0BvpLs0msj2WofjfSr+Sh+N7WGXMSMVAiq0mMRfPBq7S6qiHtrad0rIVjmkX2QtrsXmrkhyWtG+dv5KH43tk0jeqWxssG6Qeuz+pHbCmdkW749e2EuwUd4yNElCN3pvWqfzt/JQ/F+lX8lD8X6URyUPxfpRHJQ3F9p3dlvmraULI2N5YdGvrkmkzvkVKVsILz19e5mlkVLyRUrIwT3VxTkVMzXRe7zw8kLI2KREGn54LzwTEQUbIyjEqt63urZ4XNJ5WPGzzWeRiK3jkR6t/LPbKM2uk6rsexo22POJMZVeWHkndCtPdW04kNNZFTqFsLF5q+/IqdZFXb56+zIh3zvjXY99cU8mZSvripX1xixMOzz197XQef+Ejkobi+1gz2O9EpV01vBNS9kpU2zVUZxfHs6eKyU5ju9xUXk1lM09NnddU9kmHsjXTRKCqqlXKymUp1wn5PDZ1iLJncWXdOiUlTX44+C3sx7GauiVdylXJ5sPNONOa8rsu2173/wCVR7Kmg/dIeTw8U8gimy1RrshJqZLHseuMHa1oWRnjWu1lMpWPTPyRpnF7IWeZxJdLIO8IVTabU2QWPY1b0v0gO8LI9e3/AAEclDcX6URyUPxvpRHJQ/F+lEclD8b6URyUPxvk7LoVLLrWXWsutZday61l1rLrWXWsutQnGyNt9VDbEVbEVbEVbEVbEVbEVbEVbEVMeK7+xHJQ/G+Tjzvw0ft9W5X4R+KiOSh+N8nHnIm6cJwnfBROg7Um13TqNrtnWbVbYJbK6hUfu9W5SHqrsjMeEq3ElCUhOt0AusYh2Th7DcVEclD8b5OPORNE7JPUXbVAC1k4snsHpJrYb0+VFgtMqKFR+71blIa2uuOVXWrjYzUTo9cquU4Hxar2G4qI5KH43yced+Gj9vq3K/CPxURyUPxvk7KYWrErWJWsStYlaxK1iVrErWJWsStQhGuNtFV7a4Va4Va4Va4Va4Va4Va4Va4VMAKz+1/JQdjWC/SXdotZLvtULZ1PsClsC1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sS1sC1sClYTdc307//xAAjEQABAwMDBQEAAAAAAAAAAAABAAIDERRRBBJQECEyM2CA/9oACAEDAQE/AfxjDo2PYHEqwjyVYR5KsI8lWEeSiKGnBab1NTt+7st01KoumHR/keCh1jGMDSFfx4Kv48FX8eCr+PBRNTX5D//EACERAAIBAwMFAAAAAAAAAAAAAAABEwIDIhARUCExMmCA/9oACAECAQE/AfjGq40yVkrJWSvg6/I6bGJjou3BVW22RMiZEyJ+o//EADwQAAECBAMEBgcHBAMAAAAAAAEAAgMREjMhoaIQIjFyEzJBYZPRBFBRYHFzsSMwQlKBkcIFFEBiweHw/9oACAEBAAY/AlJjSVbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCt5hW8wreYVvMK3mFbzCm9hA2sl2iZ9ypHgU9vsMtkLkHuXF5zshcg2vgwvRukoAJNck58iwtMnB3YokaG5r6BPApjnvayodpUOC4ib59vBBhe0OPZPFThQ+kd+WqSI/tKWtdS93ScEejiNdLjSZp1ERri3iAVCiPpaYnAT9fRec7IXINvpPSvpm1sl6THDXNZEitMiPwjtkvS3w4rHDoZEQ4dLU4xnw2tdCbQYkOrCWMl/T3RcWScC5zf2XpLI0RrIjomE4VTj7JIT4yX9RNFf2zt32oUuYWmC4HoWSUOHD6OKKDvtZS5nxUB3pGIiMlBd+Xu9fRec7IXIPcuLznZC5B7lxec7IXIPcuLznZC5BtYyXW4n2Jwq6vHuW6UDVgVg7u4IgdnFHe4dyNTuCAqxPcqZ48UN7jiuPbT+qNRlITXWQNXHHgujE+E5p7DhSJkrdPBBgxNUk4AzITZmRICfOYoMuCqBwQeZifcgKuKkeMyJfBBtM+9FrmMAAmTX2fsiauHchjukEz+GwTZul1M54p0ofDv75J2Ei0y4pwMNop473/SqBFVM5FUT3lvGSoqxQl+anFHe4Yo0mclRVvJ291RPgiasAqqsJy4JgEzX2yQa7gRNCbuOKE+3BYu7ZcEDVxEwmFxkXNB+Coq3pyVAdj/hRec7IXINsRxeQ49WR9iigkTeZ/ROJEif9i76qP2NxDMPbxRcaA7CQ+BmohfKbjPD4J4mGgjgDMT/AOEXOpGLeB9ic7AtcQesfomBs6py/TtT2sppe2kz7FIU0Vh/emEdhx+CkHfi9sphCcuDh+5TeFsNP6KJKUntA/ZOiPlMgCQQbu0CJXPtUsJCcjUfouwgynvEJ/DF4eMUZiRJnxJTWzEhMdYhQ6aQWtAqBP8A4ovBG8TVsiOaZVMkM0+YaZywLyeHemVPxbOWM/h8VIw3T7gqyGFv4ceGxrZASHYop/Nw/ZNGGEKj6KsSAnjI8f0RDTulsusQjKilxmZocJCIXfVBhpk1ha3vVXZTJGVNBdVM8U6oiZhls6iVUJS3cjNGI2mddQB+Ekx27OZJ/VCIynBpGKEpO3KTvEfRNolNpnig51PWJwW7Qd2kzVAp3mBru5P4bzw76eSngQCSDUfohVKfbL/Bi852QuQe5cXnOyFyD3Li85XFQuQe5cXnOyFyD3Li852QuQetAHEzPAATK6sbwX+S6sbwX+S6sbwX+S6sbwX+S6sbwX+S6sbwX+S6sbwX+S6sbwX+S6sbwX+SqYZhfaPlNXdJV3SVd0lXdJV3SVd0lXdJV3SVLpcjti852QuQetIvy2fV33XpPzP4tTeT7qFyDZF5zshcg9aRfls+rtkKFCA6SIcKuAT/AO4a0taJh7O39FEqZEYWMrLXDGSppe2bahUJTCa0NiAO6ri3Bya0B4Duq4jByrdxqcM9npPzP4tTeTZFdEqkwT3UyJALiHOopdxmmzcxzaqTSeCi0lrIbXSm8qNW9rHQ/ag6bJkTDZ4nbC5Bsi852QuQetIvy2fV2yHEhECLDOFXAqNXFaxzmyYGfh/VRj9m2uD0YAcTioBJEmQyxyZCe6H0TBLDi5Q5tg0s/HjUVQ6U6icPjs9J+Z/FqbybIrYlUniW6obYLXUtdWauJQk6Id+qRAUUb7Q59QIAUeuumIOPamAmIC1spNlI7YXINkXnOyFyD1pF+Wz6u+69J+Z/FqbyfdQuQbIvOdkLkHrQFwMxwIMiutG8Z/mutG8Z/mutG8Z/mutG8Z/mutG8Z/mutG8Z/mutG8Z/mutG8Z/mutG8Z/mqWCQX2jJyVrUVa1FWtRVrUVa1FWtRVrUVa1FT6LM7YvOdjJdgkfcokmQCe72meycNxarukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukK7pCu6QrukKUR5I9z/wD/xAAqEAABAwQBAgYDAQEBAAAAAAABABHwITFR0UFhcRBggZGhwTBQsUDh8f/aAAgBAQABPyFOXPRS7lLuU+5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lHuUe5R7lPuRam+VLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5S7lLuUu5QblBuXUyFx4teqI2SfJRyMEDEFCA2P7D4QOPJchlFTuPG07hb+hCdQFTiYyhystyHHZApUIgDCCrDJyADM91YR0Yu9EUYrc+qIMCbSXi9Gqu3jFiDaDnBkhGyDVbjgfvpHKKnceJMhcOJehwr/AHMU0iipK5S5xzdCAk2QA2FVC6NM81fi8J9uJEgXI3QgMnYcrgH9kCq6BGPbqUwBwuAm9PRUP4yG5fuOf30zlFSuPJc7lFSuPJcblFSuPJcblFQuPEVX5Hp9yiYWGqkt6kSFxixBDEeit1UIJ6XQp+QVEL0CJo5Nugs/2gTpXNVumVbhQ9M2VSsYuXNnx6ojSYQIDoP/AFEVdIgKGxsThMvjxexc0SfZDCTY1gTeyKKkWMRojp4QNIsXTDwzMFG7p+rcgQQR7oyDoHQt7ovsbJZrteqA2PsbD9UWaS7JKsdEb4L0r7IhgLQ90VFgEMCQxtXhWJNlzuuhlMC12X0gAdE9UJ/ogRJmA1PW1Lqzg9zozgPtEwRY5Q6ZaLg5ZreqLiUmzKr6OqZShgOBPdD3V4GeHQvAABuAfyvou+zWLPdns6NgVwexLDJwgMroFuTaqFkLV0SM2p0QoNslQ2F2z6IyGcoQiB+41qPh0ACFLgutkZ9FkNALg82X9UDvhrp27BgJqKk4S4Ak0bgIUYWFhFaZ7KtjOZ3WRHMBEuEWINSATTPRNRmEVNWTwiB7AMb910ONvv8AxRuUVC48WZA8AcH9aoSwCLE8D7BNpMbfMQYVK6Nl3yRFmaYkjILJsLRjdqB9JxyqASR1Cx/hV5xKxDceiDhwjjZm4UNkxiNggWIN8P4iqSNUPS1M0TnUnhJsajN0RVABc80FvgJj4mogG1DAOKjhVdNqQk8vKLZJgVfl1vdEwhchuCRb0qqAYCVwwfaZE5gJuLt8q4ipz3fsF1gBFzZg1heyboLKhguAAxbtdGCA5G+aUWfVQB7g09aIA5EmCNL0sHdFWKYTw7hvAcEwHwRd8puZgW8idwuhx0MicwuD2KK4UL1h6JtFFAJgjyWa6uNdWbAGsQTwM3+CDcvIXf6UTNT3EWlubH6o2BcMLA5pdAp4UznFACG9ECQJaUvVj/0nBCUAS7gwfHyrK0fmg3fRxnRlXDeZ4S1a2twioj3PqkhHxUChHxJwhANct2JgpuIMi5HTogAlQCIfPqvZDmhgBULI9bnYLIQYVhJwWFSQRTqnUxg6JNgYkZ+EeMGhuw/6IdIEqc79gvddEPQf/DG5RULjyXG5RCnceS43KI6lK48lxuUVO48lxuUVO4/aFuSTm9BX8QQIECBAgQIEHxT8hDBFxckqLQotCi0KLQotCi0KLQotCCgBzkH14xuUVO4/aeya/EUi4aoqPR/T+I3KYjwjcoqdx+28lQSgVgA5JVtgJPcLi6JdAQyzHsgUS3NtmCf5jTmsFPgxDa1gqn3gBwCA8Pg1fDf0+HGVIgCfdWGQQxDqZDV3YKOIzKxD4RKDAMVO56IZhPnTdB4xuPCNyip3H7byafI8QQxBQYqapurk6doP/IpUkqgg2GpcAU9lcvbe0zDshgUUkAegpYfKeCXuQj9+Hwavhv6fAIfGgce6Y19w6tv4gwC2EEAANqXQrx/eHsQVc+MADEGt0VJj7UFqm3jG48I3KKncftPdNfiKzcNUFXo/p/ELBMR4RuUVO4/aFuSTi9RX8QQIECBAgQIEHxR8BDAFxcEKLYotii2KLYotii2KLYotiCgBxkn34zuUU9OohYI8lDLAOSUEbY/uKKe9OnKMx9KTQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQodCh0KHQpNCEx9LoYiw+EEUUfJAQQX/2gAMAwEAAgADAAAAEBLHPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPHMPPNMMMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAIPLDPDDHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDAPMCCCEMINBJHGPPBJGBNDOJAICBOOPPPPPPPPPCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLEM8849gAPPPPPPPPPPPPPPPPPPPPPPPPPPKLCGPA9snwPPCPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOBDzzy3sPMOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOMMMHPIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAPP/EACURAAEDAgQHAQAAAAAAAAAAAAEAEdFR8SExUKEQQWBhcYDw4f/aAAgBAwEBPxD0xKSc0aFdBCughXQQvkEJ4o0LZIhPH2ozShkmP6N8+SBEgOcPGU8NwdCKScUaVZBKsglWQSvkEp4q6Q//xAAdEQEAAwACAwEAAAAAAAAAAAABABFhMVAQQWCA/9oACAECAQE/EPxigAmJMSYkxINl9FyQ9kq1QF44OiQIzUmpNSakCivkP//EACoQAQEAAgEDBAEEAgMBAAAAAAERACExQVHwEGFxgVAwYJGhIECxwdHx/9oACAEBAAE/EFxEFlY0fLwfg9NJBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAnEeA6h+78MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEssMWqSgfKKGDi5JsjDYLv8AmfX7KSywCiOIxRz3EP8ArFzznb+y34PXizwHb66a+h0NJscPXAROT8mOiTdyHRETBYtTL4jcKgwqXnBqgCiBNnW0O8zj6lz4E1wDBIIIXbQhMU79JgPA0pxiITUFD7xZhq1YVO4NMFaiCbHk5fzz8zrxZ5jt9RzpSsZQAL1MqpwpgICKLtOofeLXrdpKloSUnZ9sGWwhEKByGctPud1pW0w1TsXj2y7g8KpLDJIHG7iEyBiKzbOmOLOh2BFs3Iq+w4kS2RADNVPXuayJy4AHo8q9W7v5U6J8eDwHHqeBfzz8Trx55Lt/xAOCYg8l9IUZs9QAgTACw55/P+Y7/T5bt/ZfiO/OOeW7f2X4rvzjnhu31qwU8IrVnXgMnPeyRB3E4Trv6xh20lEsUCaTN6ISiENTeJN3FOgOEK+FLF4eMm5co7BH8B+80LVEQEMVTQWUuLkHr0y04HVHE3gUAJ0KNnoQ4U5cB2gLeNR/OBoaRqOYTR6LMTJEFbaSB/Y/nF4NhDo8ucAJq4yoAFVBYZTgmoIYsCkebx1wPAsJVSMnBz7zkcbb2HLW8JqffThwNqkFlOKAY9HrgmxFALyERTtbjQu1gFxERR5izCDkGFOmIIV0WXLKBCgkJNbViG/pMblcQwJyMUfaXE2YirpywKhTfHvh26yoCJBAvCy4hgx6oIK1o4262GbbpzAUHU6e7rlKK+hAoRstlPnKXGBO+gir0hvpjX2KTaQiUatO9YNFASEf4dmEFETuDhq2+XWZYLYdLOcmiGt6evVjZqDgOoKbnGkdazRJJ93KEXk6mDmCkghd8A6ocGh2npHQcG5blKZNPiAMe7DDBjgpDgMQXoLXGRFaPs+w8oybsdYwAayQ8hSA+WVhAIdRsShRjE1rBYCE1CKKIKdLc3lA4CeaGnvWCaZFFKiiWLw8Z1h0PufDtNyZYYiqCpHWm6bxNzLBgVCQkF4VvSZr6qiPeQZ7mGaWx6bVwf1iUYgoAVABWDiiSNwDqhps2wxowggA6gQWlZxieQB6QgQYgok3vGpErFRTkIinUGn+l4rv9Phu31g92WDFlN8186x0T7IIopGV46OPv1QlA1dnV4D7yiRkIVCxlJPmOMdtpnrAO3XDPfDLIlIBFUK/DA3XtIBjaEaJt9smsmmQY7Rtutf+4BG1OYHJ0SKke8xS0aVEEU0RUvUc5tSAIAKgCbNFI5Y60Lgr4Hdb9dcmRkerUHy/Xc0iXwmHygCZ1vfBbxTlIdiuubu9+clsalTkabGuZxl0ZAaxpNrls4wBj8MlVVCqvpqZYrQKAVxJRW7sODHSDKMpBs2iru9i4pMjSjJRwMCWbxe3wrIGFDoC88axpES2kDe9YHQPbAvRwaqXTacrjecCIl1dJjqIRK4V8Yo7pdNJWnDXevTZfrquVE41/hwYWVEqa2U0RDXbqjHuqjMVCBLYuvrXHQPc9aZT6wlmSGPcRe+vGtbUKEUMrN5sDuOoQ3F276u8fNVQtINtdzAb1JWWwmu7/JrC0dm5iKck0brjNYKXr3YOqIR0TrcqOiamAiN4KkvDMn0RHVyJNI9/Gb1baCsZ0czZwSni5zRPbjeWX1gqBREdmm67aw5rrVeJEO2uHv0BwAxN9odmHv2x6QBQQWKDVFEH+8a4aYAdbm5DmX2zkqQdoERceOuWwGhaVZwb7Tjnbm3iaDgIu00u95MYKBAIAULJ7Y+INDCyBXlTVhvC39JijM0joeWV216ut8dc/wDIYlgeBuo3sWO1LquJsRKEo6ou5/o+I7/T4bt/Zfiu/C7Z5rt/Zfiu/G/+H/meS7f2X4rvzjnmu39l+K78455rt/KN4CoUkqGoKVkL+k5cuXLly5cuVcgh0EYiciIiOxwFmtUfgAL+iEEEEEEEEZGkEz7UB94IgjR6+niu/OOea7fyhFkr8Jbz5h/B+kAIgkHBUf7V+8bYYMH6WyBVZXrr6eK78455rt/LDq5/U05jbCAU285FguNHe2gJ0o3vidfEShYVHkbTeaQRZjKl6U5nfjBQI2ibO7sLsKcYoS7eaUt2FKFDWWC+mx/wwH+N6ewMc7ASaOEWwxolNkETzssYvsZ7BHnElr9qQMazDlC0XabJyHSdcaEueHdw9mb6evlu308R35wzzXb+WHEs2g8SbZTqcJhEiIpurQJcaNHFccbigRaA1G7f6eWJZ0lLWnG3M6Y7E+dg2RJJti1MaGejW8sXe2jsZzK7tSG8huC/43p7YA7ZsvUY6qnRo6a0HD+O20g2qpkcl8pj6YSRpGgcBx1wggLDU0mujp8e+CJdZxRQXSXT6+W7fTxHf6fMdv5RgSx+Ul58U/k/SQE1SThgP9ifWNoMSH9LYAiEj019PEd/p8R2/lC8BQKWUHAMKWM/ScuXLly5cuXKuQU6itVeVVVXa4CzW6vwER/RCCCCCCCCcjSgZ9ih+8AAAgdPTzHf6F8WtNgDfzL9/sp+xFoAdcIeDx6CP/eDG6CRXoe5w/eA4wn9jVJJLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLJJGVJ5yjNqsgz7gBwf4B9H9iH+A/9k=");

/***/ },

/***/ 830032
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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k/uYLhSbgTcY+SAV4irN2sPgaXAC4ecr4DCgPJ/hqYoEwXrKAQp8P8wgrxDyHyqftvHyNgqbCHYQwrQEFYArFe7Fe7E1lYQ7DeLQEFYAppLDxsvu/HyNgqf5OksuhMXIx8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9R8f1Hx/UfH9RqULyBdgqbKPyLKnxbQs8vmwVWePxYa/Kyiw1QU+gHn5mk+9ips//aAAwDAQACAAMAAAAQ888888888888888888888888888888886++++4888088888888888888888888888888888888+4966+8c8U8888888888888888888888888888888859c7ZNAgEY888888888884888888888888888888888884s8888wccsssssss8cc88w808888888888888888884c4oA0wccsssssss8cc4YUgEAA8088888888888888o9yyyyCccsssssss8ccs8888888888888888888888I/wD68NAnHLLLLLLLPHHOOPGMOOPPPPPPPPPPPPPPPPLOPvvvh3HLLLLLLLPHHOLPLPHLPPPPPPPPPPPPPPPPKFGMMJONNOOOOOOONNNPOOMMMPPPPPPPPPPPPPPPPPPDPPPPNNNOOOOOOOPNNPLDHPDPPPPPPPPPPPPPPPPPPPPPPPFNOOOOOOOPNNNLPPPPPPPPPPPPPPPPPPPPPPPPPPPHFP/EACIRAQABBQAABwEAAAAAAAAAAAEAESExYZFAQVBRYHChcf/aAAgBAwEBPxD4XSViqVmVJlSPozRzKy0t8+YqF1N7k3uTe5N7kRIUT0VkDeuAK5gstq1u81FBfc93Xc9gjQ/bW93jzXk833n7nwjRI5Yp5f3wOaYFZqcZqcZqcZRjsjhmIdX6p//EACQRAAIBAwMDBQAAAAAAAAAAAAABETFRYSFQ8EBB0WBwkaHh/9oACAECAQE/ENgSIVyFchXIVyM7L2Kzge9xTVHX98WGy1OaeSrZYlaDvnQYBNaSNvWRJqvr1bLQYhiGIYgmmpWyom1dztz4GrBFoWZClj6nSS5x0LskmHJzNHM0czQ8dzKHMKx7U//EACsQAQACAQMDAgYDAQEBAAAAAAEAESEQMfFBUdFhoXGBkbHB8CBAUGAw4f/aAAgBAQABPxCpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVCENhlf8DcDZddguAEpz9MXS/p/5GTJkyZMmTJlZEqGgFpFeg5/n7v8f8F+z7tUShdCArJYdTD/AOHvurkhdHvgnph/h7v8f8F+z7tXOvoI6SbRMJgMvhth9Wgbbq2/uzDEKPbzjCy2bNm1wtclVEBbvdw7JrOwQQeuGnvur5uBhe7tnrf8Pd/j/gv2fdq2pd+1L7vRtjrAbAoAoDS8hYthTZs3TeDyW7+sNM5WDionAqEl2lW7H69YBqXlZCoVtupcf1sblz57I4/Pb4ekuXLnu/x/wSGABXulSg7nwT8QR+X8zBgwYMWGWHT48cKXtusAsF8JSUlJSUgJd8f8Qf8AiFmejeAMlvrOMnHTjpx046cdOOnpvpMWcL6S6cj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5TkfKcj5RURgW7eZyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlOR8pyPlKn5fKUGmybnf4/+Vz/eGWECKFkNnx20CoEkwnSdNAgKXd66BLtNtl9PTQETZGqOhpTVtQJ2Pr+99EVQim0OuNv3toEUJWZNAqBRTc6QKAu/XQNCl3dAi2m2y+npPePt/obIv0uuo8uVVuLKurx3m7yA9F2S7ptsvpcI/s8P1buqOr0shwRsQfctbHZUg0VV2X6n1Jg5mqrcq63q8Xp7J9n+ye8fb+KMwLVaAggII5E665rpVkF/ySq2Q5Pj/g7GfsO+pwaQJrayVnGzNwn1j/pGqRsC+ktbbONheYbclWlqmReZBWZWsWyjjBmUcTqaDFO4OFYu4JcmQsQoD2X5A09k+zoYMi7N+159tMjDDF7XDbOmBceqttNyxviu2hktNld9NnJg33v9vRysKvd2rp860wZF2b6WthdYuF0Xv1rTqAvppkbG+K7T3j7aLVE6VlsFoZ2yhmW6KDFlF6Rpze6sR5hUUPSUuwVttmPiU5dkje+PwKzLQ1wyi1Cinm2rMMJSyrdywepfWM0yUJTYRvW/TO+0KpkQhlsEM7MOfSCt8CMIy1Mi4bdbg7VoqoPUCkW5sxRVrkssqyQOqHZp69W5nMetaFrarKHrN/CyKkQsuJVnJnGWHrHMcIWoL+RUVZxwfVSqE7t2Ru4CAACyNpuYvsf39jP0Hf8AnbA69VjhJW+0lB6Gnsn2f7J7x9tExe6wTYom43IVWZhBRBBQLavEa/5V1CGIlO7uuKs2OyJsg2tG4x8bIn827QELLaQEtzAb00K4FWq1fVhYpwkUUWg6s9PSHF130ATYzuqqhvRUe5F7DkwX0jJFvJaQ2YKG95uKUWAlIDhlo7V1hr1yUX1FVqrFlGYCa3iMkiod2475uVp6RCg8MJR6/TEo2NgnsAAKuOpiQoLYyA1V3Y69/wC/sZ+g7xbDYsg9rnOZzmc5nOZzmc5nOZzmO1RTVIl2JoJDcbMXXXRIkWhgvedNEobHUu9Et3TOM7mgthoFU3vpbU6DbezoqNLC5b2K0SF2L2utEiQtrB3hdFlPbRLax2u9Eq3SnGdye8fbTYA+LOanNTmpzU5qc1OanNTmpzU5qc1OanNTmpzU5qc1OanNTmpzU5qc1OanNTmpzU5qc1OanNTmpzU5qc1OanNTmpzU5qc1OanNTmpS/NGkN6nrEVFfSsCcaxvPg4roAAc+s41i+xrEUh9ggjDPIymg+c41nGsv4FE2N/2rHvH2/wBDYz9B3n6HoaBc4gBWnsG9vaHYRBRKUnc7wC3viI3k9Wr6mWXviJ1EDUoK3dTWC2VCcMuxZG7dYC98S20wzXee+fc1sULpchgvd0VlFougtm5pQUS+iU6ZGEprJoWVHFZrGmzRyLdY0aIpbVg2x10oXS5DBeisaWi6INg/fTIUnolaWHCU1k3nvH203NjI1b2ICDEIOS9rIXVrEsTQKAwGyREWQad0LQ/8CwtaKA/wdjP0Hefoeh/GsVr759z+1Y94+2iiLY+IvCvnGXtse7t7VFKiqKQF7HXOM9pWbFsAhuzrFcA6kUDM3b+mO8C6ZUI52C9iMzmFjlLR3DpFBHK9gyfW4MgdN7lN1/GAb15bIC7YN9toVyjxZlm+k6KlixzS76Hpt6RWgMgr2X6qoxtmAZxOCabidM3hzttctF3B2/wNkYzsC/WDuHgjY1nJ0n6vLP1eWfq8s/V5Z+ryz9Xln6vLGrhuJjMD0qFZexDANoCwz3WjQGQAWr0hks0BIK2TSwsNNNdHQRBKUp20oNywoen6migKCqL6tX+HQG0BYW6IRKAtWCII2OliBHqaIIhtTXRnvH20QREsdxnWXDUqm1HSptI7NT4QEpUFGWtrmEKtUGPY7QYDNkHox2m0DpRfFiqEpVKe59cH0h1CoFiS0BZZM07nwhFoQAI7j6RVu5Y1mu3wmE+xKfB2gAUYP8E4lxKd59guo/z2bNmzZs2YFL1PNAnnd2UH9j3j7aUizULL/nevXr169evXr169evXr169evXr169evXr169evXr169evXr169evXpWaG/PKw+/J/8Aty5OXJy5OXJy5ORgpFiufmLAHaba6/iUf2PePtp+67/59LjeU7SnaU7SnaU7SnaBt9cqdpV8f8aA0AsaS8jZ76IgEKRLElUUaAhBsBQaWFBbbRu6AIAVC1l0sNVBCmQeDRQgVWk2arHyXQGgFjSXoCAIlI9YAABQbBpQkHQK0QUC1tG7PePtp+476QYPJD1c+zCK6AhqyA/NSjdiklguNQLRZdnSXzTrBzUsD6O9zpSqw3FA2G2VfTeFVYbjAq0NHq0SmHAlBueo+kvJmI2LVn5MvwzChRuyrnYPp/m+/afu/wAf2fePtp+476SEqcYpofWVeAhDSxX0URnqOkaRqT6wYU2VF9PWB1y0S0qN9nD0W+kocJiEuqp6UztFAl67ASyWuovriAcO0ilam7afIi78IpB5ls2pD73kbigrTtf+b79p+7/GgClTI4a2b0BFYJWGmbGgEFQ7tugWpct5b0AKzbXXH00pWzYJvj6fLRCSuVlNdKz30AUqZHDWgsG8lYagUB276BUVPVvQE0uW8tz3j7afuO/+v9+0/d/j+z7x9tHM03YCNXnpsTm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082nm082kGSiFWaTdDounu/xokFKP5DRI402p7Q2NGrKr3dEuavR6aJrtqijtvorRbVsfTRpQoOXrh0aYqNmT46XKGmnM2Lba0ahVXOXRq3V6PTBPePt/t+7/Gn/2Q==");

/***/ },

/***/ 148985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29ba1b51c1a8-photo_2026-01-19_06-8fb37912eebb056c2fa6e408e9ca8eb0.jpg");

/***/ },

/***/ 165734
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/402438a76660-photo_2026-01-19_04-bc90ecf25f25012b5421a32339acfa3d.jpg");

/***/ },

/***/ 377884
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40daf3523523-photo_2026-01-19_18-95822fc91a689254c527fdaadff4b783.jpg");

/***/ },

/***/ 981296
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/43349dd130c5-photo_2026-01-19_11-0bf4c59050ec72f810908512f1bb77d3.jpg");

/***/ },

/***/ 563551
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/563bb57c8e6c-photo_2026-01-19_07-b201361357210423e791ce4db7724491.jpg");

/***/ },

/***/ 459873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/616257f48e81-photo_2026-01-19_14-3f3b02e5779a8aef413cb300f2c8a82e.jpg");

/***/ },

/***/ 153684
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8d760c6b1c68-photo_2026-01-19_01-47919b5e4fa5546758273ce137e3acbf.jpg");

/***/ },

/***/ 619907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/95613cdec1b1-photo_2026-01-19_12-c3f540192281c2d24c621afac21d2f4b.jpg");

/***/ },

/***/ 977948
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b530c2121a92-photo_2026-01-19_13-c32ff558af35053a105958cbbc414fb9.jpg");

/***/ },

/***/ 836787
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b6239c390d8e-photo_2026-01-19_17-44dea997c13863c79db0441686acc5b8.jpg");

/***/ },

/***/ 50891
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d924a5ded060-photo_2026-01-19_02-21ab677be18cab8e0f5f9c742706b224.jpg");

/***/ },

/***/ 359801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ddc371af7d20-photo_2026-01-19_15-001fdb5e02f35189c7ad19c63d8902fa.jpg");

/***/ },

/***/ 675307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e909a71f7c61-photo_2026-01-19_03-26e20b54cee189a5655787fbab379975.jpg");

/***/ },

/***/ 681418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeE8J4TwnhPCeCqoy5A44444444tuuUUnhPCeE8J4TwnhPCeE4P/aAAwDAQACAAMAAAAQ4s8o888888888888888888888888888888888888888888888888888888888888888888888888888o88M8888888888888888888888888888888888888888888888888888888888888888888888888888os04888888888888888888888888w0A48s8888888888888888888888888888888888888888888888oEMc888888888888888888888884ccMMMc8888888888888888888888888888888888888888888888o88888888888888888888888888U8088888888888888888888888o88888888888888888888888888owAwwwwwwwwwwwwwwwwwwwwwww0cgwwwwwwwwwwwwwwwwwwwwwwwwk88888888888888888888888888o8888888888888888888888888888888888888888888888888888888888888888888888888888888o0888888888888888888888888888888888888888888888888888888888888888888888zyyy28888s888888888888888888888888888888888888888888888888888888888888888888V8+w4RwwgX/wC+z/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFHLLqYQUw7fnfv/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPDjDDFHffWv/vvjP/EACYRAAICAAQGAgMAAAAAAAAAAAABEWEhMXGRQVFggaHwsdGQwfH/2gAIAQMBAT8Q/DtIC0XNi5sXNhNJo06MRyeDZeUVv0srfpZS/SxaShp8W+D5l5eXl48h9CoEoPKfAjJZfafbIcOef59CCmDHDU8L4ChgQ5CcEOXQpBBA0A5ymnGfY0vdDS90NL3QSldosJ/SCgrKysS5D//EACMRAAIBAwMFAQEAAAAAAAAAAAABESFh8DGx0UFRYJHhcZD/2gAIAQIBAT8Q/js5iAsCwLATnCTwhwuhNiV2JsUmjotjKEZQjKENUW3MjfJkb5MTfJkb5FdMV8D1CSU2pGrUQJpSg2VsQKCPY0RBuLcc0HBQgaiamwNH98DkSJEhN2a2Ly9fS8vX0vL19Et0nb6YIMEGCDBBSXk//8QAKxAAAgECBQMDBQEBAQAAAAAAAAER8PEhMcHR4UFRoRBhsVBwcYGRIDBg/9oACAEBAAE/ECVMTiSpicewsk2UOE74Eor2L9xCJtemI8lmV0YMUFLVumUojI8un2Y8p8ekxythhZL2OjFd1U00DFJyhdyeDmTZekdnhjAsGS/JjWFg2maNPsFtqEsE1OJKVGSNVKp4ZMu+JJujsjIMTLqwnFjxiIHeGK3BMzyZCPzkxFBmZ4uV9lvKfH+EgGwQOzTJZCJyuRQ5dJWBPHGPZOLxQkoFlRTUGv3htT7iVnWpbVMLuSl/0+XSOBdRzeqSKN93H2W8p8faDynx6JGpTTXdfVU2B3Ynj6SsEHDhzD7ejaRttJLFtiaQxNPFNEPFJpKXEt9P8yEDhw4eT/8APeU+Bi5CFngFE/39CrLIIupmTSMb9ogKKiyTeKJvtkzD/i0k2sGOeIjJDTjajQ/BM56kjASB3mwwKUKE05lyI09vsnpvFMJ+oJ+ojqUhBNYvGMDDWi1zGJo+qXGPYSY0ydzSSnBSUrpI2j4KwcYBrvg22JdZtnebT/sJv+iM1s0NKUqSloSFBeIRbWUfh5kAjAgCZlCmVExwB0ZKlnLBptkeGaapmEiFLwzwFEtJpYlnTzUuj75kDafyhmf7X8P/AD3lPg7LGEy7r3Gzb1rNLls/w9jt0MDCMoXsYpcEq4lEN92oX8PZ3GBh8jKQRS/I1izGQbcBJeeC+oOTZctYz/MSZB7Mf4HmjogieX7Fn7mBFppCR5Xg3/REzxCM17r3E2KlJkvDlPcaXbozLLayf5XQSypSctLiTLXZ4vH3Y1ujbMN54pdTrBhD3IiJ9zP0Bef4ysP0K82gY+iShJe27/8APeU+CESMwlwiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYaFM3smn4FLcklDaSbeSEskSeKTafgnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2J5rYnmtiea2EBlE8HKadn9W8p8Hz/j6p4n4PLHgr6nQu/wBWeU+D5/x6OyImuWTMheyIcrBiOoRnZtG/qPifg8seChJa9J6JopYSk1h3GKIrzASaeKiPx9RoXf6s8p8Hz/j0TpEqUq3KSnglvPuJJCSSSwSXT6j4n4PLHgofENEjcgcpprFNMx3wzjolt4vBfUaF3+rPKfAjDSNy+xYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYBYA4cHvsnLY7CDSJ/wVoLNpoWUwShpoaLALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALALAFNUxD6Nqd/q3lPj7QeU+PtB5T4+0HlPgbktzfVothbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwthbC2FsLYWwtg2tUcLM27JdfR9nlnlnlnlnlnlnksrQ0Cb7SWwthbC2FsLYWwthbBUklCTYL8fYWbTYyMk8ujxwf/CbNmzZs2a1j2Z0sPdBGHbClM4SX7bQ5nEfSVNvG3jbxt428UtNbBKbBSodSROY0Uohigo6f+Hd3d3aYSqWLUmZOZfWL2f2Hwy2uAm/x/hZZCW24SQhrISmng0Vjt6lYDGcpF6NBtCENEOJjD0oHaeT8RJuCTbbwSMP2TDk/VXdWSJbFRIbhNin0anVMaQwbWan9r7EyMICIZiMh1zPuSKrdFRNhTEzwuG5UMTjDAMJPpObORdCYewJnlKTUPumBwvblSqMC4cobx9zBR4CsdvQr4owqZjNQJo/acsIHDBCAzmP7SEkKOfFNDnGFLn2QKOuASbii20+uKnLAbWAwonBrG/AknJQO08n4kkLkcbtPR9vcYIIbiySbaahh4JOJawFD3GSFozMSwG+oxHotl2iKHCg9j2Ivw0xmNLFs47MTP3fQnaEzG3j3YixrnlWOBJSeRsOeYNM0e6FkurGmm01DWa7fY6RhWO3qVhL/ADQO08n4jHjniR9jJD+JeIgRZYYf8AggggggnkX3bCzeLwIaXPkIiGsejQ53CF/pVq1atWgX46hDJvEW0yNBk8JwfQsncsncsncsncsncsncsncsncQRtyxSRT5HKG6nnl1Eeq8Gkl+ittSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttSttRoYJrFPG8ku7/pLuyXdku7Jd2S7sl3ZLuxzgDNyfgrbUrbUrbUrbUrbUrbUrbUrbUrbUbU03p1Zn/9k=");

/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);