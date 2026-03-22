"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[58369],{

/***/ 62925
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_listener_cau_hinh_timeout_md_319_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-listener-cau-hinh-timeout-md-319.json
const site_docs_load_balancer_listener_cau_hinh_timeout_md_319_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/listener/cau-hinh-timeout","title":"Cấu hình Timeout","description":"*","source":"@site/docs/load-balancer/listener/cau-hinh-timeout.md","sourceDirName":"load-balancer/listener","slug":"/load-balancer/listener/cau-hinh-timeout","permalink":"/load-balancer/listener/cau-hinh-timeout","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình Timeout","title":"Cấu hình Timeout","source":"https://fptcloud.com/documents/load-balancer/?doc=cau-hinh-timeout","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình Allow IP/CIDR","permalink":"/load-balancer/listener/allow-ip-cidr"},"next":{"title":"Cấu hình L7 policy cho Listener","permalink":"/load-balancer/listener/chinh-sua-listener"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/listener/cau-hinh-timeout.md


const frontMatter = {
	sidebar_label: 'Cấu hình Timeout',
	title: 'Cấu hình Timeout',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=cau-hinh-timeout',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình Timeout';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cấu-hình-timeout",
        children: "Cấu hình Timeout"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeout"
      }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " cho phép bạn định rõ thời gian tối đa mà một kết nối hoặc yêu cầu có thể tồn tại trước khi bị đóng. Điều này quan trọng để quản lý tài nguyên và đảm bảo hiệu suất ổn định của hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách hoạt động"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Khi một kết nối hoặc yêu cầu được gửi đến ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Load Balancer"
        }), " , hệ thống bắt đầu tính toán thời gian cho phép kết nối đó tồn tại."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu kết nối không hoàn thành hoặc yêu cầu không được phản hồi trong khoảng thời gian này, nó sẽ bị đóng."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Việc cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeout"
        }), " giúp tránh tình trạng kết nối hoặc yêu cầu bị treo và tiêu tốn tài nguyên."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeout"
      }), " được cấu hình cùng khi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " , người dùng tham khảo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener",
          children: "tại đây."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-listener",
        children: " Previous Khởi tạo Listener "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./chinh-sua-listener",
        children: " Next Cấu hình L7 policy cho Listener "
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