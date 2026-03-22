"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7187],{

/***/ 722220
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_set_alert_md_fba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-set-alert-md-fba.json
const site_docs_vpn_site_to_site_0_set_alert_md_fba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/set_alert","title":"Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard","description":"*","source":"@site/docs/vpn-site-to-site-0/set_alert.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/set_alert","permalink":"/vpn-site-to-site-0/set_alert","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard","title":"Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=set_alert","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Hướng dẫn phân quyền sử dụng dịch vụ","permalink":"/vpn-site-to-site-0/service-authorization"},"next":{"title":"Hướng dẫn download file config VPN","permalink":"/vpn-site-to-site-0/tai-file-cau-hinh-vpn"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/set_alert.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard',
	title: 'Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=set_alert',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "hướng-dẫn-cài-đặt-cảnh-báo-thông-qua-dịch-vụ-cloud-guard",
        children: "Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tích hợp dịch vụ Cloud Guard để thiết lập ngưỡng cảnh báo cho VPN"
      }), " là chức năng cho phép người dùng cài đặt các ngưỡng giám sát (threshold) cho dịch vụ VPN. Khi hệ thống đạt hoặc vượt ngưỡng đã cấu hình, Cloud Guard sẽ gửi thông báo cảnh báo đến người dùng qua các kênh được thiết lập (Email, Telegram,...)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện chức năng, Quý khách thao tác theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security > Cloud Guard"
      }), " , mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recipients"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Recipient."
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(663026)/* ["default"] */ .A) + "",
        width: "1353",
        height: "473"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Recipient"
      }), " , Quý khách điền các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Nhập tên người nhận."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Method"
          }), " : Chọn phương thức gửi cảnh báo. FPT Alert đang hỗ trợ các phương thức ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Email, Telegram, Slack, Teams."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Khai báo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Address:"
          }), " nhận cảnh báo tương ứng với ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " đã chọn, đây là địa chỉ hệ thống sẽ gửi thông báo đến khi mức sử dụng của tài nguyên vượt ngưỡng mà người dùng tùy chỉnh khi tạo mới Alert."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Email:"
      }), " Nhập địa chỉ email của người nhận. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678171)/* ["default"] */ .A) + "",
        width: "548",
        height: "387"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Slack:"
      }), " Chọn Slack Channel cần nhận cảnh báo. Bạn cần đăng nhập vào tài khoản Slack, chọn Channel từ danh sách sau đó FPT Portal sẽ tự động nhận Slack Channel ID."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753750)/* ["default"] */ .A) + "",
        width: "633",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Teams:"
      }), " Nhập URL của Teams bạn cần nhận cảnh báo và ấn Send test message"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769437)/* ["default"] */ .A) + "",
        width: "799",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Telegram:"
      }), " Nhập Telegram ID của người nhận cảnh báo, nếu chưa có ID có thể lấy theo hướng dẫn của hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(221102)/* ["default"] */ .A) + "",
        width: "818",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Khi đã điền đủ thông tin, Quý khách nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recipient"
      }), " mới. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(322686)/* ["default"] */ .A) + "",
        width: "1074",
        height: "574"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiếp theo, để thiết lập cảnh báo cho dịch vụ VPN, Quý khách thao tác theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở thanh menu ngang chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Guard >"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource alert > Create alarm"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(622005)/* ["default"] */ .A) + "",
        width: "1365",
        height: "528"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Quý khách nhập các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " Tên hiển thị của alert"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " Chọn type là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VPN Site-to-Site"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(336100)/* ["default"] */ .A) + "",
            width: "1008",
            height: "532"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập các trường thông tin tương ứng của ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure condition:"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình điều kiện cảnh báo (Configure condition) như sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metric type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn loại metric của VPN Site-to-Site để đặt cảnh báo"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud Guard hỗ trợ cảnh báo cho những VPN Site-to-Site metric sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Usage (%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tỷ lệ phần trăm mức sử dụng CPU của thiết bị VPN Gateway."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet loss (packet/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng gói tin bị mất trong quá trình truyền dữ liệu giữa hai điểm VPN (tính theo giây)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAM Usage (%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tỷ lệ phần trăm bộ nhớ RAM đang được sử dụng bởi VPN Gateway."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN Connection Status phase 1 Offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trạng thái offline khi thiết lập Phase 1 (IKE – Internet Key Exchange) của kết nối VPN."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN Connection Status phase 2 Offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trạng thái offline khi thiết lập Phase 2 (IPsec Configuration) của kết nối VPN."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN Gateway Status Offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trạng thái offline của VPN Gateway."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply to:"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Với 3 metrics: CPU Usage (%), Packet loss (packet/s), RAM Usage (%) được áp dụng cho chính VPN Gateway của Quý khách"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["-Với 3 metrics: VPN Connection Status phase 1 Offline, VPN Connection Status phase 2 Offline, VPN Gateway Status Offline, Quý khách chọn các VPN Connection có trong list: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(611424)/* ["default"] */ .A) + "",
        width: "471",
        height: "361"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Severity:"
          }), " Chọn mức độ nghiêm trọng của cảnh báo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Notify to:"
          }), " Chọn người nhận cảnh báo"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sau khi hoàn thiện điền các thông tin, Quý khách chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn, ví dụ như ảnh bên dưới (phương thức nhân cảnh báo qua Email). ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(498681)/* ["default"] */ .A) + "",
        width: "569",
        height: "501"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505833)/* ["default"] */ .A) + "",
        width: "565",
        height: "505"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./service-authorization",
        children: " Previous Hướng dẫn phân quyền sử dụng dịch vụ "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./logging",
        children: " Next Theo dõi dịch vụ thông qua tính năng logging "
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

/***/ 336100
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08dacceab200-q-1-6022b58b224d1023baefb049e75db3e7.jpg");

/***/ },

/***/ 663026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/274a0eae8d38-62-482c622fdd7e7234af467a9f5484d0b5.jpg");

/***/ },

/***/ 322686
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/58adaaa55bdb-u-1-60bfe1ee6f7778098dea77282c4187ad.jpg");

/***/ },

/***/ 753750
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5bc7f36a2793-v-1-7344722ca7a7d066ccca2a065887a4eb.jpg");

/***/ },

/***/ 678171
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/738000ae6c58-z-2-51af9ea3f79e1b38c45585d73b64901e.jpg");

/***/ },

/***/ 505833
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7f81c9fa2100-m-ea2da8922388b734eb8c2ee57972d76f.jpg");

/***/ },

/***/ 221102
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/875cce30f209-y-1-895525bfe6011d6cc03ab624b60489ba.jpg");

/***/ },

/***/ 769437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/896a297158a8-t-1-d3de0626a2dc2cdfb7c496e29397cb73.jpg");

/***/ },

/***/ 611424
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cc13892da249-k-abe6ef8e65eca73a029e97322e9a64a5.jpg");

/***/ },

/***/ 498681
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/eb2b2e19cfce-l-01832e6c444aab587e0e64aea7b7a5cd.jpg");

/***/ },

/***/ 622005
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f817fb3cee61-p-1-542eb5b0ca40953507ec385ac624329b.jpg");

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