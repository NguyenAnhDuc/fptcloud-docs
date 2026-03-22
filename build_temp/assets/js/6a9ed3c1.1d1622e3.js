"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[97913],{

/***/ 263923
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_monitoring_ip_access_control_xem_danh_sach_whitelisted_ip_md_6a9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-monitoring-ip-access-control-xem-danh-sach-whitelisted-ip-md-6a9.json
const site_docs_fpt_monitoring_ip_access_control_xem_danh_sach_whitelisted_ip_md_6a9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip","title":"2. FPT Monitoring – IP Access Control","description":"Xem danh sách whitelisted IP/dải IP","source":"@site/docs/fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip.md","sourceDirName":"fpt-monitoring-ip-access-control","slug":"/fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip","permalink":"/fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Xem danh sach whitelisted ip","title":"2. FPT Monitoring – IP Access Control","source":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=xem-danh-sach-whitelisted-ip","parent":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Truy cap tinh nang","permalink":"/fpt-monitoring-ip-access-control/truy-cap-tinh-nang"},"next":{"title":"Xoa whitelisted ip","permalink":"/fpt-monitoring-ip-access-control/xoa-whitelisted-ip"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Xem danh sach whitelisted ip',
	title: '2. FPT Monitoring – IP Access Control',
	source: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=xem-danh-sach-whitelisted-ip',
	parent: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Monitoring – IP Access Control';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-monitoring--ip-access-control",
        children: "2. FPT Monitoring – IP Access Control"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xem danh sách whitelisted IP/dải IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mỗi endpoint (Dashboard, Metric, Log, Trace) có bảng IP riêng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click biểu tượng phía góc trái từng bảng để mở rộng (hoặc đóng) bảng IP của từng endpoint."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click các biểu tượng cạnh endpoint để đi tới Grafana dashboard, hoặc copy endpoint URL vào clipboard."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Danh sách IP/dải IP hỗ trợ phân trang, tìm kiếm theo IP/dải IP, và lọc theo trạng thái whitelist."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click biểu tượng cạnh IP/dải IP để copy IP/dải IP vào clipboard."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-li-danh-sach-whitelisted-ip",
        children: " Previous Quản lý danh sách whitelisted IP "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./them-moi-whitelisted-ip",
        children: " Next Thêm mới whitelisted IP/dải IP "
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