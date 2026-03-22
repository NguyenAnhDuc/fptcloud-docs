"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88508],{

/***/ 472966
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_budget_alert_index_md_794_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-budget-alert-index-md-794.json
const site_docs_budget_alert_index_md_794_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"budget-alert/index","title":"2. Budget Alert","description":"Budget Alert","source":"@site/docs/budget-alert/index.md","sourceDirName":"budget-alert","slug":"/budget-alert/","permalink":"/budget-alert/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Hướng dẫn nhanh","title":"2. Budget Alert","source":"https://fptcloud.com/documents/budget-alert/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Ch nh","permalink":"/budget-alert/ch-nh"},"next":{"title":"Kh i","permalink":"/budget-alert/kh-i"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/budget-alert/index.md


const frontMatter = {
	sidebar_label: 'Hướng dẫn nhanh',
	title: '2. Budget Alert',
	source: 'https://fptcloud.com/documents/budget-alert/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Budget Alert';

const assets = {

};



const toc = [{
  "value": "1. Tạo Budget và cài đặt cảnh báo:",
  "id": "1-tạo-budget-và-cài-đặt-cảnh-báo",
  "level": 4
}, {
  "value": "2. Xem lịch sử ngân sách và cảnh báo:",
  "id": "2-xem-lịch-sử-ngân-sách-và-cảnh-báo",
  "level": 4
}, {
  "value": "Hướng dẫn nhanh",
  "id": "hướng-dẫn-nhanh",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-budget-alert",
        children: "2. Budget Alert"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Budget Alert"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Budget Alert cho phép người dùng có thể triển khai hệ thống cảnh báo ngân sách chủ động dựa trên thiết lập thời gian, ngân sách, dịch vụ liên quan trên FCI Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-tạo-budget-và-cài-đặt-cảnh-báo",
      children: "1. Tạo Budget và cài đặt cảnh báo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cho phép người dùng cài đặt mức ngân sách theo kỳ ngày/tháng/quý hoặc năm dựa trên ngân sách sử dụng thực tế tính tới thời điểm hiện tại hoặc ngân sách dự kiến tới cuối kỳ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cho phép người dùng chọn và quy hoạch nhóm tài nguyên để cảnh báo theo hạn mức đã đặt ra."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cho phép người dùng cài đặt ngưỡng cảnh báo và cách thức gửi cảnh báo (qua thông báo từ hệ thống hoặc email) tùy theo mục đích cảnh báo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-xem-lịch-sử-ngân-sách-và-cảnh-báo",
      children: "2. Xem lịch sử ngân sách và cảnh báo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với mỗi nhóm budget, người dùng theo dõi chi phí được tính tới thời điểm hiện tại, số chênh lệch giữa chi phí thực và budget, chi phí dự kiền tới cuối kỳ, tỉ lệ phần trăm giữa chi phí thực tế và bugdet, tỉ lệ phần trăm giữa chi phí dự kiến với budget."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Người dùng cũng có thể xem lịch sử gửi cảnh báo với nội dung dựa trên ngưỡng cảnh báo đã được cài đặt."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-nhanh",
      children: "Hướng dẫn nhanh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./kh%E1%BB%9Fi-t%E1%BA%A1o-bugdet-alert",
          children: " Khởi tạo Bugdet Alert "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./xem-th%C3%B4ng-tin-cost-v%C3%A0-l%E1%BB%8Bch-s%E1%BB%AD-c%E1%BA%A3nh-b%C3%A1o",
          children: " Xem thông tin cost và lịch sử cảnh báo "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./t%E1%BA%A1m-d%E1%BB%ABng-c%E1%BA%A3nh-b%C3%A1o-c%E1%BB%A7a-1-budget-alert",
          children: " Tạm dừng cảnh báo của 1 Budget Alert "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./ch%E1%BB%89nh-s%E1%BB%ADa-budget-alert",
          children: " Chỉnh sửa Budget Alert "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./x%C3%B3a-budget-alert",
          children: " Xóa Budget Alert "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./c%C3%A0i-%C4%91%E1%BA%B7t-ng%C4%83n-ch%E1%BA%B7n-t%E1%BA%A1o-resource-compute/network-m%E1%BB%9Bi-khi-%C4%91%C3%A3-%C4%91%E1%BA%A1t-ng%C6%B0%E1%BB%A1ng-ng%C3%A2n-s%C3%A1ch",
          children: " Cài đặt ngăn chặn tạo resource Compute/Network mới khi đã đạt ngưỡng ngân sách "
        })
      }), "\n"]
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