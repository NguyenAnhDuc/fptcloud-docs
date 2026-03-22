"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79705],{

/***/ 376645
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_vertical_scaling_md_d1f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-vertical-scaling-md-d1f.json
const site_docs_managed_fpt_database_engines_new_management_vertical_scaling_md_d1f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/vertical-scaling","title":"2. Managed – FPT Database Engines","description":"Vertical Scaling","source":"@site/docs/managed-fpt-database-engines-new/management/vertical-scaling.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/vertical-scaling","permalink":"/managed-fpt-database-engines-new/management/vertical-scaling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Vertical scaling","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=vertical-scaling","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Version policy","permalink":"/managed-fpt-database-engines-new/management/version-policy"},"next":{"title":"View db list","permalink":"/managed-fpt-database-engines-new/management/view-db-list"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/vertical-scaling.md


const frontMatter = {
	sidebar_label: 'Vertical scaling',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=vertical-scaling',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Quyền cần thiết:",
  "id": "quyền-cần-thiết",
  "level": 3
}, {
  "value": "1. Kích hoạt dịch vụ Vertical Scaling",
  "id": "1-kích-hoạt-dịch-vụ-vertical-scaling",
  "level": 3
}, {
  "value": "Điều kiện tiên quyết:",
  "id": "điều-kiện-tiên-quyết",
  "level": 4
}, {
  "value": "Bước 1: Truy cập chức năng Vertical Scaling",
  "id": "bước-1-truy-cập-chức-năng-vertical-scaling",
  "level": 4
}, {
  "value": "Bước 2: Kích hoạt dịch vụ",
  "id": "bước-2-kích-hoạt-dịch-vụ",
  "level": 4
}, {
  "value": "2. Thiết lập mở rộng tài nguyên compute",
  "id": "2-thiết-lập-mở-rộng-tài-nguyên-compute",
  "level": 3
}, {
  "value": "3. Thiết lập mở rộng Storage",
  "id": "3-thiết-lập-mở-rộng-storage",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vertical Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vertical Scaling"
      }), " cho phép tự động điều chỉnh tài nguyên của cơ sở dữ liệu bao gồm vCPU, RAM và Storage theo thời gian thực, dựa trên yêu cầu hiệu suất hoặc mức độ sử dụng thực tế. Tính năng này giúp hệ thống chủ động mở rộng tài nguyên khi cần thiết, đảm bảo tính linh hoạt, hiệu quả vận hành và không yêu cầu can thiệp thủ công từ người dùng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quyền-cần-thiết",
      children: "Quyền cần thiết:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling, ...)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-kích-hoạt-dịch-vụ-vertical-scaling",
      children: "1. Kích hoạt dịch vụ Vertical Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để kích hoạt dịch vụ Vertical Scaling, bạn có thể thực hiện trực tiếp trong bước cấu hình dịch vụ bổ sung (Additional Service) khi khởi tạo cơ sở dữ liệu (xem chi tiết tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=create-db",
        children: "Khởi tạo cơ sở dữ liệu"
      }), ") hoặc kích hoạt sau khi cơ sở dữ liệu đã được khởi tạo thành công theo hướng dẫn dưới đây."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kích hoạt Vertical Scaling, bạn bắt buộc phải bật dịch vụ Notification và hoàn tất cấu hình danh sách Email hoặc Telegram để nhận cảnh báo liên quan đến hoạt động scale. Nếu Notification chưa được cấu hình, hệ thống sẽ hiển thị hộp thoại yêu cầu cấu hình trước khi tiếp tục."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710784)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1418"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Go to Notification"
      }), " để chuyển đến tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " và thực hiện cấu hình theo hướng dẫn tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=Notification",
        children: "Notification"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-chức-năng-vertical-scaling",
      children: "Bước 1: Truy cập chức năng Vertical Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " ” > “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Databases"
      }), " ”. Nhấn vào ID của database cluster cần quản lý > chuyển sang tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vertical Scaling"
      }), " để truy cập trang quản lý cấu hình Vertical Scaling. Nếu dịch vụ chưa được kích hoạt, màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vertical Scaling"
      }), " sẽ hiển thị trạng thái ban đầu (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23046)/* ["default"] */ .A) + "",
        width: "2560",
        height: "804"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-kích-hoạt-dịch-vụ",
      children: "Bước 2: Kích hoạt dịch vụ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi database cluster được tạo thành công, nếu Vertical Scaling chưa được kích hoạt, trạng thái dịch vụ sẽ là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), ". Nhấn vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable Vertical Scaling"
      }), " (biểu tượng bánh răng) tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Information"
      }), " để mở hộp thoại xác nhận."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " trên hộp thoại để kích hoạt dịch vụ. Sau khi hoàn tất, dịch vụ sẽ chuyển sang trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436552)/* ["default"] */ .A) + "",
        width: "2560",
        height: "984"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi kích hoạt, bạn cần thiết lập các ngưỡng tài nguyên CPU/RAM hoặc Storage làm căn cứ để hệ thống tự động mở rộng tài nguyên. Chi tiết được trình bày tại mục 2 và mục 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-thiết-lập-mở-rộng-tài-nguyên-compute",
      children: "2. Thiết lập mở rộng tài nguyên compute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vertical Scaling"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Flavor Scaling"
      }), " (biểu tượng dấu cộng) trong mục", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Scaling"
      }), " , hệ thống sẽ hiển thị hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Compute Scaling"
      }), " để cấu hình tự động mở rộng vCPU và RAM cho cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573683)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1422"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thông số cần cài đặt bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU Threshold (%)"
        }), " : Ngưỡng CPU xác định điểm mà tại đó hệ thống sẽ kích hoạt mở rộng tài nguyên dựa trên mức sử dụng CPU. Ví dụ: Nếu ngưỡng CPU được thiết lập là 60%, hệ thống sẽ tự động kích hoạt mở rộng khi mức sử dụng CPU vượt quá 60%."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM Threshold (%)"
        }), " : Tương tự như CPU, ngưỡng RAM xác định điểm kích hoạt mở rộng tài nguyên khi mức sử dụng bộ nhớ vượt quá giá trị này. Ví dụ: Khi mức sử dụng RAM vượt quá 50%, hệ thống sẽ tự động mở rộng tài nguyên."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracing Interval"
        }), " : Khoảng thời gian (theo phút) mà hệ thống kiểm tra mức sử dụng tài nguyên. Ví dụ: chọn 5 phút → hệ thống sẽ theo dõi CPU/RAM trung bình mỗi 5 phút."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current flavor"
        }), " : Hiển thị cấu hình hiện tại của instance, bao gồm số lượng CPU và dung lượng RAM được cấp phát. (ví dụ: Medium-4 (2 vCPU - 4GB RAM))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "List flavor scaling"
        }), " : chọn một hoặc nhiều flavor mà hệ thống được phép mở rộng lên. Các flavor trong danh sách này sẽ được chọn tuần tự khi vượt ngưỡng. Ví dụ: Current flavor: Medium-4 và List flavor scaling: Medium-8, Large-2 → Khi CPU hoặc RAM vượt ngưỡng, hệ thống sẽ nâng lên Medium-8, sau đó có thể lên Large-2 nếu tiếp tục vượt ngưỡng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi hoàn tất cấu hình, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " để lưu lại. Hệ thống bắt đầu giám sát tài nguyên và tự động mở rộng khi điều kiện được thoả mãn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi thiết lập cấu hình thành công, người dùng có thể:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chỉnh sửa cấu hình"
        }), " : nhấn vào Edit Compute Scaling (biểu tượng bút chì ở mục Compute Scaling) để điều chỉnh các giá trị đã thiết lập cho cấu hình."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Xoá cấu hình"
        }), " : nhấn vào Delete Compute Scaling (biểu tượng thùng rác ở mục Compute Scaling) để dừng cơ chế tự động mở rộng tài nguyên."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý quan trọng:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Giới hạn tài nguyên"
        }), " : chỉ có thể scale trong phạm vi Available Resource (hạn mức khả dụng). Nếu vượt quá giới hạn này, hệ thống sẽ không thực hiện scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ngưỡng kích hoạt"
        }), " : Không nên đặt ngưỡng quá thấp (dưới 60%) để tránh việc hệ thống tự động scale liên tục."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Khởi động lại dịch vụ (Restart database cluster)"
        }), " : một số engine như PostgreSQL và ClickHouse yêu cầu khởi động lại cơ sở dữ liệu khi tăng tài nguyên compute để áp dụng cấu hình mới. Sau khi quá trình scale hoàn tất, người dùng cần chủ động thực hiện thêm thao tác restart để cấu hình mới có hiệu lực"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Theo dõi thường xuyên mức sử dụng"
        }), " CPU, RAM để chủ động quản lý các yêu cầu mở rộng tài nguyên."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-thiết-lập-mở-rộng-storage",
      children: "3. Thiết lập mở rộng Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên màn hình quản lý cấu hình Vertical Scaling, nhấn vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Storage Scaling"
      }), " (biểu tượng dấu cộng) ở mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Scaling"
      }), " , hệ thống sẽ hiển thị hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Storage Scaling"
      }), " để thiết lập cơ chế tự động mở rộng tài nguyên storage cho cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446675)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thông số cần cài đặt bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage Threshold (%)"
        }), " : ngưỡng lưu trữ xác định điểm kích hoạt mở rộng khi mức sử dụng lưu trữ vượt quá giá trị này. Ví dụ: Khi mức sử dụng lưu trữ vượt quá 55%, hệ thống sẽ tự động kích hoạt mở rộng tài nguyên lưu trữ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage Scale (%)"
        }), " : tỷ lệ phần trăm dung lượng sẽ được mở rộng. Ví dụ: Khi tỷ lệ mở rộng là 20% → Hệ thống sẽ tự động tăng dung lượng thêm 20% so với tổng dung lượng hiện tại. (Nếu dung lượng hiện tại là 100 GB → Sau khi scale, dung lượng mới là 120 GB)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi thiết lập, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " để xác nhận lưu cấu hình. Hệ thống sẽ tự động theo dõi mức sử dụng storage theo chu kỳ mặc định. Khi dung lượng sử dụng vượt ngưỡng (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Threshold"
      }), "), hệ thống sẽ mở rộng dung lượng theo tỷ lệ (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Scale"
      }), ") đã chọn. Quá trình mở rộng diễn ra trực tuyến (online), không gây gián đoạn dịch vụ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi thiết lập cấu hình thành công, người dùng có thể:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chỉnh sửa cấu hình: nhấn vào Edit Scaling Scaling (biểu tượng bút chì ở mục Scaling Scaling) để điều chỉnh các giá trị đã thiết lập cho cấu hình."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xoá cấu hình: nhấn vào Delete Scaling Scaling (biểu tượng thùng rác ở mục Scaling Scaling) để dừng cơ chế tự động mở rộng tài nguyên."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Giới hạn tài nguyên"
        }), " : Việc mở rộng chỉ có thể thực hiện trong phạm vi Available Resource (hạn mức khả dụng). Nếu vượt quá giới hạn, hệ thống sẽ không thực hiện scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tần suất mở rộng"
        }), " : Không nên đặt ngưỡng quá thấp (ví dụ dưới 70%) để tránh việc mở rộng liên tục gây tốn tài nguyên."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tính không thể thu hẹp"
        }), " : Sau khi mở rộng, dung lượng storage không thể giảm trở lại."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./db-proxy",
        children: " Previous DB Proxy "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./maintenance-window",
        children: " Next Maintenance Window "
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

/***/ 446675
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/284acda6f65a-add-storage-scaling-scaled-4e1a5d8354195fa1856aa78c9033c893.png");

/***/ },

/***/ 573683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8921f622e730-add-compute-scaling-1-scaled-86c7cb48db0802585cd60b076052b766.png");

/***/ },

/***/ 436552
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c48b62a69384-scaling-enabled-scaled-0883d3e177b070fcf5c30fab32a47f3b.png");

/***/ },

/***/ 710784
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d20a3fb77531-scale-noti-warning-scaled-09a8330c49ec61fcf6640b94852afbf0.png");

/***/ },

/***/ 23046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d7dc0524e8d3-vertical-scaling-inactive-scaled-3c38d221c96d90e7b077b992121a035b.png");

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