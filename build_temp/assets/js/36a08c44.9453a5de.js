"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[16284],{

/***/ 59395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_khoi_tao_canh_bao_load_balancer_md_36a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-khoi-tao-canh-bao-load-balancer-md-36a.json
const site_docs_cloud_guard_khoi_tao_canh_bao_load_balancer_md_36a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/khoi-tao-canh-bao-load-balancer","title":"2. FPT Cloud Guard","description":"Khởi tạo cảnh báo cho Load Balancer","source":"@site/docs/cloud-guard/khoi-tao-canh-bao-load-balancer.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/khoi-tao-canh-bao-load-balancer","permalink":"/cloud-guard/khoi-tao-canh-bao-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"| Total packet In/Out per second | packet/s | Tổng lượng packet được Load balancer xử lý theo hướng In hoặc Out. Chỉ số giúp người dùng nắm bắt mức độ tải thực tế qua LB từ đó phát hiện thời điểm hệ thống tăng tải bất thường","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-load-balancer","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/khoi-tao-canh-bao-load-balancer.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: '| Total packet In/Out per second | packet/s | Tổng lượng packet được Load balancer xử lý theo hướng In hoặc Out. Chỉ số giúp người dùng nắm bắt mức độ tải thực tế qua LB từ đó phát hiện thời điểm hệ thống tăng tải bất thường',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-load-balancer',
	parent: 'https://fptcloud.com/documents/cloud-guard',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

const assets = {

};



const toc = [{
  "value": "Bước 1: Ở menu chọn Security &gt; Cloud Guard, mở tab Resource Alerts và chọn Create Alert.",
  "id": "bước-1-ở-menu-chọn-security--cloud-guard-mở-tab-resource-alerts-và-chọn-create-alert",
  "level": 4
}, {
  "value": "| Total packet In/Out per second | packet/s | Tổng lượng packet được Load balancer xử lý theo hướng In hoặc Out. Chỉ số giúp người dùng nắm bắt mức độ tải thực tế qua LB từ đó phát hiện thời điểm hệ thống tăng tải bất thường",
  "id": "-total-packet-inout-per-second--packets--tổng-lượng-packet-được-load-balancer-xử-lý-theo-hướng-in-hoặc-out-chỉ-số-giúp-người-dùng-nắm-bắt-mức-độ-tải-thực-tế-qua-lb-từ-đó-phát-hiện-thời-điểm-hệ-thống-tăng-tải-bất-thường",
  "level": 2
}, {
  "value": "| Drop packet In/Out per second | packet/s | Tổng lượng packet qua Load balancer nhưng bị rớt mỗi giây. Chiều In/Out vượt ngưỡng sẽ bắn cảnh báo. Chỉ số phản ánh tình trạng rớt gói dùng để phát hiện lỗi gián đoạn kết nối qua LB hoặc quá tải LB",
  "id": "-drop-packet-inout-per-second--packets--tổng-lượng-packet-qua-load-balancer-nhưng-bị-rớt-mỗi-giây-chiều-inout-vượt-ngưỡng-sẽ-bắn-cảnh-báo-chỉ-số-phản-ánh-tình-trạng-rớt-gói-dùng-để-phát-hiện-lỗi-gián-đoạn-kết-nối-qua-lb-hoặc-quá-tải-lb",
  "level": 2
}, {
  "value": "| Provisioning status Pending | N/A | Khi Load balancer có trạng thái provisioning (khởi tạo/cập nhật/thay đổi cấu hình) - Provisioning status là Pending, hệ thống sẽ gửi cảnh báo. Giúp người dùng nhanh chóng phát hiện trạng thái bất thường của LB để kịp thời xử lý",
  "id": "-provisioning-status-pending--na--khi-load-balancer-có-trạng-thái-provisioning-khởi-tạocập-nhậtthay-đổi-cấu-hình---provisioning-status-là-pending-hệ-thống-sẽ-gửi-cảnh-báo-giúp-người-dùng-nhanh-chóng-phát-hiện-trạng-thái-bất-thường-của-lb-để-kịp-thời-xử-lý",
  "level": 2
}, {
  "value": "| Operating status Unhealthy | N/A | Khi Load balancer có trạng thái hoạt động - Operating status là Unhealthy, hệ thống sẽ gửi cảnh báo. Giúp người dùng nhanh chóng phát hiện trạng thái bất thường của LB để kịp thời xử lý.",
  "id": "-operating-status-unhealthy--na--khi-load-balancer-có-trạng-thái-hoạt-động---operating-status-là-unhealthy-hệ-thống-sẽ-gửi-cảnh-báo-giúp-người-dùng-nhanh-chóng-phát-hiện-trạng-thái-bất-thường-của-lb-để-kịp-thời-xử-lý",
  "level": 2
}, {
  "value": "Bước 2: Tạo người nhận cảnh báo mức VPC",
  "id": "bước-2-tạo-người-nhận-cảnh-báo-mức-vpc",
  "level": 4
}, {
  "value": "Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create",
  "id": "bước-3-quay-trở-lại-màn-tạo-alert-chọn-người-nhận-mới-tạo-và-nhấn-create",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo cảnh báo cho Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-ở-menu-chọn-security--cloud-guard-mở-tab-resource-alerts-và-chọn-create-alert",
      children: "Bước 1: Ở menu chọn Security > Cloud Guard, mở tab Resource Alerts và chọn Create Alert."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thực hiện tạo cảnh báo cho dịch vụ Load balancer đang sử dụng, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(368006)/* ["default"] */ .A) + "",
        width: "1919",
        height: "954"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric Type"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply to"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity"
      }), " , cấu hình điều kiện cảnh báo tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure Condition"
      }), " và chọn người nhận cảnh báo tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notify to"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud Guard hỗ trợ đặt cảnh báo cho những Load balancer metric như sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Đơn vị"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "·Số lượng request/s đến Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP code 1xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng HTTP response code trả về là 1xx trên giây của Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP code 2xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng HTTP response code trả về là 2xx trên giây của Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP code 3xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng HTTP response code trả về là 3xx trên giây của Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP code 4xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng HTTP response code trả về là 4xx trên giây của Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP code 5xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng HTTP response code trả về là 5xx trên giây của Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng connection đang kết nối tới Load balancer, một connection có thể có nhiều request (ccu)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Percentage of backend down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% (percentage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phần trăm số backend đang down (unhealthy) của Load balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of backends down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number of backends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng backend đang down (unhealthy) của Load balancer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-total-packet-inout-per-second--packets--tổng-lượng-packet-được-load-balancer-xử-lý-theo-hướng-in-hoặc-out-chỉ-số-giúp-người-dùng-nắm-bắt-mức-độ-tải-thực-tế-qua-lb-từ-đó-phát-hiện-thời-điểm-hệ-thống-tăng-tải-bất-thường",
      children: "| Total packet In/Out per second | packet/s | Tổng lượng packet được Load balancer xử lý theo hướng In hoặc Out. Chỉ số giúp người dùng nắm bắt mức độ tải thực tế qua LB từ đó phát hiện thời điểm hệ thống tăng tải bất thường"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-drop-packet-inout-per-second--packets--tổng-lượng-packet-qua-load-balancer-nhưng-bị-rớt-mỗi-giây-chiều-inout-vượt-ngưỡng-sẽ-bắn-cảnh-báo-chỉ-số-phản-ánh-tình-trạng-rớt-gói-dùng-để-phát-hiện-lỗi-gián-đoạn-kết-nối-qua-lb-hoặc-quá-tải-lb",
      children: "| Drop packet In/Out per second | packet/s | Tổng lượng packet qua Load balancer nhưng bị rớt mỗi giây. Chiều In/Out vượt ngưỡng sẽ bắn cảnh báo. Chỉ số phản ánh tình trạng rớt gói dùng để phát hiện lỗi gián đoạn kết nối qua LB hoặc quá tải LB"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-provisioning-status-pending--na--khi-load-balancer-có-trạng-thái-provisioning-khởi-tạocập-nhậtthay-đổi-cấu-hình---provisioning-status-là-pending-hệ-thống-sẽ-gửi-cảnh-báo-giúp-người-dùng-nhanh-chóng-phát-hiện-trạng-thái-bất-thường-của-lb-để-kịp-thời-xử-lý",
      children: "| Provisioning status Pending | N/A | Khi Load balancer có trạng thái provisioning (khởi tạo/cập nhật/thay đổi cấu hình) - Provisioning status là Pending, hệ thống sẽ gửi cảnh báo. Giúp người dùng nhanh chóng phát hiện trạng thái bất thường của LB để kịp thời xử lý"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-operating-status-unhealthy--na--khi-load-balancer-có-trạng-thái-hoạt-động---operating-status-là-unhealthy-hệ-thống-sẽ-gửi-cảnh-báo-giúp-người-dùng-nhanh-chóng-phát-hiện-trạng-thái-bất-thường-của-lb-để-kịp-thời-xử-lý",
      children: "| Operating status Unhealthy | N/A | Khi Load balancer có trạng thái hoạt động - Operating status là Unhealthy, hệ thống sẽ gửi cảnh báo. Giúp người dùng nhanh chóng phát hiện trạng thái bất thường của LB để kịp thời xử lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình điều kiện cảnh báo (Configure condition) như sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metric type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn loại metric của load balancer để đặt cảnh báo (như bảng trên)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn điều kiện so sánh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn ngưỡng cảnh báo, khi hệ thống phát hiện vượt ngưỡng theo điều kiện sẽ bắn cảnh báo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn thời gian lặp lại tính toán của hệ thống (nhỏ nhất là 3 phút)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn thời gian lặp lại cảnh báo nếu chỉ số duy trì vượt ngưỡng"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-tạo-người-nhận-cảnh-báo-mức-vpc",
      children: "Bước 2: Tạo người nhận cảnh báo mức VPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu chưa có người nhận cho cảnh báo Load balancer, nhấn Create recipient here để tạo mới người nhận mức VPC như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(406576)/* ["default"] */ .A) + "",
        width: "1917",
        height: "954"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-3-quay-trở-lại-màn-tạo-alert-chọn-người-nhận-mới-tạo-và-nhấn-create",
      children: "Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(730343)/* ["default"] */ .A) + "",
        width: "1920",
        height: "954"
      }), " Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-canh-bao-object-storage",
        children: " Previous Khởi tạo cảnh báo cho Object Storage "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-canh-bao-vpn",
        children: " Next Khởi tạo cảnh báo cho VPN site-to-site "
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

/***/ 730343
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/73b8678d1a28-image-1722329874375-79ae2a82829384c04edbc2a3309bcc46.png");

/***/ },

/***/ 368006
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b58a81be230b-image-1722327850097-5a98e0a2dc817bc159e1380c74d0fca2.png");

/***/ },

/***/ 406576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fa58b299cc19-image-1722328406388-0b6d50da77eb22b734d1ce410144adb7.png");

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