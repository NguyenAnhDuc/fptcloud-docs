"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89556],{

/***/ 300583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_theo_doi_bieu_do_load_balancer_md_89d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-theo-doi-bieu-do-load-balancer-md-89d.json
const site_docs_load_balancer_theo_doi_bieu_do_load_balancer_md_89d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/theo-doi-bieu-do-load-balancer","title":"Theo dõi biểu đồ giám sát Load Balancer","description":"*","source":"@site/docs/load-balancer/theo-doi-bieu-do-load-balancer.md","sourceDirName":"load-balancer","slug":"/load-balancer/theo-doi-bieu-do-load-balancer","permalink":"/load-balancer/theo-doi-bieu-do-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Theo dõi biểu đồ giám sát Load Balancer","title":"Theo dõi biểu đồ giám sát Load Balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=theo-doi-bieu-do-load-balancer","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Load Balancer","permalink":"/load-balancer/them"},"next":{"title":"Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)","permalink":"/load-balancer/tich-hop-fmon"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/theo-doi-bieu-do-load-balancer.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Theo dõi biểu đồ giám sát Load Balancer',
	title: 'Theo dõi biểu đồ giám sát Load Balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=theo-doi-bieu-do-load-balancer',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Theo dõi biểu đồ giám sát Load Balancer';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "theo-dõi-biểu-đồ-giám-sát-load-balancer",
        children: "Theo dõi biểu đồ giám sát Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để theo dõi biểu đồ giám sát ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " , trong màn hình hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " , nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " mà bạn muốn xem biểu đồ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitor"
      }), " , người dùng theo dõi trạng thái của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " , có các đồ thị biểu diễn trạng thái của từng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener, nhóm Server"
      }), " theo thời gian thực."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  -[Listener]Request/s: Số lượng request gửi đến Frontend trong thời gian 1s.\n\n  -[Listener]Response Code: Thống kê http status code do Frontend trả về. Các mã theo dõi gồm:\n\n                 +2xx: Phản hồi thành công (ví dụ: 200 OK)\n\n                 +3xx: Chuyển hướng (ví dụ: 301 Di chuyển vĩnh viễn)\n\n                 +4xx: Lỗi của khách hàng (ví dụ: 404 Không tìm thấy)\n\n                 +5xx: Lỗi của máy chủ (ví dụ: 500 Lỗi máy chủ nội bộ) Bằng cách theo dõi mã phản hồi, bạn có thể xác định các vấn đề tiềm ẩn với máy chủ backend, chẳng hạn như tỷ lệ lỗi cao.\n\n   -[Listener] Data Transfer: Thống kê lưu lượng dữ liệu truyền tải qua frontend theo thời gian thực .Đơn vị dữ liệu: Byte.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pool"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   -[Pool] Request/s: Lượng request được gửi đến nhóm máy chủ backend trên mỗi giây. Cho biết tổng khối lượng công việc mà bộ cân bằng tải đang phân phối.\n\n   -[Pool]Response Code: Thống kê http status code do Backend trả về .\n\n   -[Pool]Data Transfer: Thống kê lưu lượng dữ liệu truyền tải qua Backend theo thời gian thực. \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Active server:"
      }), " Số lượng máy chủ Backend hiện đang active (Healthy) của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer."
      }), " Số lượng này có thể thay đổi theo thời gian dựa trên nhu cầu lưu lượng truy cập và cấu hình cân bằng tải."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cap-nhat-load-balancer",
        children: " Previous Update Load Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./them-external-member",
        children: " Next Thêm External member cho Load Balancer "
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