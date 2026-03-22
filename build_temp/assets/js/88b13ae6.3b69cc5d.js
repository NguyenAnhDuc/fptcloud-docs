"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[87301],{

/***/ 344758
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_notification_bell_initial_setup_md_88b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-bell-initial-setup-md-88b.json
const site_docs_notification_bell_initial_setup_md_88b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"notification-bell/initial-setup","title":"2. Notification Bell","description":"Initial Setup","source":"@site/docs/notification-bell/initial-setup.md","sourceDirName":"notification-bell","slug":"/notification-bell/initial-setup","permalink":"/notification-bell/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Initial setup","title":"2. Notification Bell","source":"https://fptcloud.com/documents/notification-bell/?doc=initial-setup","parent":"https://fptcloud.com/documents/notification-bell","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Notification Bell","permalink":"/notification-bell/"},"next":{"title":"See notification bell","permalink":"/notification-bell/see-notification-bell"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/notification-bell/initial-setup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Initial setup',
	title: '2. Notification Bell',
	source: 'https://fptcloud.com/documents/notification-bell/?doc=initial-setup',
	parent: 'https://fptcloud.com/documents/notification-bell',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Notification Bell';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-notification-bell",
        children: "2. Notification Bell"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu đây là lần đầu tiên bạn sử dụng, trước tiên hãy kiểm tra và hoàn thành các công việc sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để bắt đầu sử dụng dịch vụ FPT Cloud, bạn cần đăng nhập vào FPT Portal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hãy truy cập vào ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "https://console.fptcloud.com"
        })
      }), " và đăng nhập bằng tài khoản/mật khẩu FPT Cloud đã được cấp. Chọn đúng Tenant, Region, VPC cần sử dụng dịch vụ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu chưa có tài khoản FPT Cloud, bạn hãy truy cập trang chủ tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "https://fptcloud.com/"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó chọn chức năng Sign Up và nhập các thông tin theo hướng dẫn của hệ thống. Bạn sẽ được bộ phận hỗ trợ liên hệ ngay sau đó và xác nhận các thông tin để tạo tài khoản."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trình thao tác nếu gặp bất kỳ lỗi nào hãy liên hệ ngay cho đội ngũ Support của chúng tôi để được hỗ trợ."
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