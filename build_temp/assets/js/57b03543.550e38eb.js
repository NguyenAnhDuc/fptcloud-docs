"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67350],{

/***/ 193351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_huong_dan_su_dung_grafana_tao_alert_rule_md_57b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-huong-dan-su-dung-grafana-tao-alert-rule-md-57b.json
const site_docs_huong_dan_su_dung_grafana_tao_alert_rule_md_57b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"huong-dan-su-dung-grafana/tao-alert-rule","title":"2. Hướng dẫn sử dụng Grafana","description":"6.1. Tạo alert rule","source":"@site/docs/huong-dan-su-dung-grafana/tao-alert-rule.md","sourceDirName":"huong-dan-su-dung-grafana","slug":"/huong-dan-su-dung-grafana/tao-alert-rule","permalink":"/huong-dan-su-dung-grafana/tao-alert-rule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao alert rule","title":"2. Hướng dẫn sử dụng Grafana","source":"https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tao-alert-rule","parent":"https://fptcloud.com/documents/huong-dan-su-dung-grafana","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Query metric data","permalink":"/huong-dan-su-dung-grafana/query-metric-data"},"next":{"title":"Tich hop alert rule template","permalink":"/huong-dan-su-dung-grafana/tich-hop-alert-rule-template"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/huong-dan-su-dung-grafana/tao-alert-rule.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao alert rule',
	title: '2. Hướng dẫn sử dụng Grafana',
	source: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tao-alert-rule',
	parent: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Hướng dẫn sử dụng Grafana';

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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-hướng-dẫn-sử-dụng-grafana",
        children: "2. Hướng dẫn sử dụng Grafana"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.1. Tạo alert rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dưới đây là hướng dẫn cơ bản để tạo alert rule. Ngoài ra, bạn có thể tham khảo hướng dẫn chi tiết tại link chính thức của Grafana ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-grafana-managed-rule",
          children: "TẠI ĐÂY"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập Alerting"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vào Grafana"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Menu trái → Alerting → Alert rules"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(288242)/* ["default"] */ .A) + "",
        width: "265",
        height: "645"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click New alert rule >> Nhập alert rule name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(827195)/* ["default"] */ .A) + "",
        width: "1432",
        height: "692"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(427488)/* ["default"] */ .A) + "",
        width: "748",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tên này:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Được hiển thị trong danh sách alert rule"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đồng thời là giá trị của label alertname cho mọi alert instance được tạo từ rule này"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Định nghĩa query và điều kiện"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xác định query để lấy dữ liệu cần theo dõi và điều kiện phải thỏa mãn trước khi alert rule được kích hoạt."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Data source (ví dụ: Prometheus)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhập query metric. Query này sẽ là đầu vào cho alert condition."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ: cpu_usage_percent > 80"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(606467)/* ["default"] */ .A) + "",
        width: "1239",
        height: "750"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó, định nghĩa Condition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình hành vi đánh giá alert (Alert evaluation behavior)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thiết lập tần suất đánh giá alert và cách alert chuyển trạng thái."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn folder hoặc nhấn + New folder: Chọn một thư mục để lưu alert rule của bạn."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn evaluation group hoặc tạo mới: Các rule trong cùng một group sẽ được đánh giá đồng thời trong cùng một khoảng thời gian."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu tạo mới, chỉ định interval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhập pending period: Là khoảng thời gian alert phải vi phạm điều kiện trước khi firing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(435596)/* ["default"] */ .A) + "",
        width: "1238",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Thêm Annotations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng annotations để bổ sung thông tin cho alert message."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(461566)/* ["default"] */ .A) + "",
        width: "1240",
        height: "522"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các annotation tuỳ chọn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Summary: Tóm tắt ngắn gọn sự cố"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Description: Mô tả alert rule"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Runbook URL: Link runbook xử lý"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Custom annotation: Thông tin bổ sung"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Link dashboard & panel: Liên kết tới dashboard/panel liên quan"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ:"
      }), " summary = High CPU usage"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description = CPU usage is above 80% for more than 5 minutes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Labels and notifications"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Lưu Alert Rule"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click Save ở góc phải màn hình"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alert rule được tạo thành công."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kiểm tra alert sau khi tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vào Alerting → Alert rules"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xem trạng thái: Normal / Pending / Firing"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./alerting",
        children: " Previous 6. Thiết lập cảnh báo (Alerting) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./contact-point",
        children: " Next 6.2. Cấu hình contact point "
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

/***/ 427488
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ebfed078636-Screenshot_38-1ecd19e9db2658dac1c2a467a42037c6.png");

/***/ },

/***/ 606467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6a7312e75a0d-Screenshot_40-316dc1aa641391c7693dd7f0bb91f4f8.png");

/***/ },

/***/ 827195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b5a342e11cb-Screenshot_37-019f12a4409e617eb3c9a264e77a1484.png");

/***/ },

/***/ 435596
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c8ff1356ddbf-Screenshot_41-f3145e263c76d859c8e33244430ed661.png");

/***/ },

/***/ 461566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e2a059986de7-Screenshot_42-33c4d729947e000e0f5f9c7e88c46699.png");

/***/ },

/***/ 288242
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f903362ff7bd-Screenshot_36-6dd686318b740e78f16ec407e8a10d7b.png");

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