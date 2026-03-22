"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[9093],{

/***/ 726337
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_notifications_cau_hinh_whitelist_ip_md_dbf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-notifications-cau-hinh-whitelist-ip-md-dbf.json
const site_docs_fpt_argocd_3_notifications_cau_hinh_whitelist_ip_md_dbf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/notifications/cau-hinh-whitelist-ip","title":"2. FPT ArgoCD","description":"Cấu hình Whitelist IP","source":"@site/docs/fpt-argocd-3/notifications/cau-hinh-whitelist-ip.md","sourceDirName":"fpt-argocd-3/notifications","slug":"/fpt-argocd-3/notifications/cau-hinh-whitelist-ip","permalink":"/fpt-argocd-3/notifications/cau-hinh-whitelist-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cau hinh whitelist ip","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-whitelist-ip","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh webhook","permalink":"/fpt-argocd-3/notifications/cau-hinh-webhook"},"next":{"title":"Delete webhook secret","permalink":"/fpt-argocd-3/notifications/delete-webhook-secret"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/notifications/cau-hinh-whitelist-ip.md


const frontMatter = {
	sidebar_label: 'Cau hinh whitelist ip',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-whitelist-ip',
	parent: 'https://fptcloud.com/documents/fpt-argocd-3',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT ArgoCD';

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
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-argocd",
        children: "2. FPT ArgoCD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình Whitelist IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud hỗ trợ người dùng cấu hình whitelistIP truy cập vào URL ArgoCD thông qua giao diện Portal như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Vào màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security & Access"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Whitelist IP"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(754818)/* ["default"] */ .A) + "",
        width: "627",
        height: "374"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập IP cho phép truy cập vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Argo CD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Các IP cách nhau bởi dấu “,”"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(419911)/* ["default"] */ .A) + "",
        width: "627",
        height: "377"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Kết quả sau khi cấu hình ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(588133)/* ["default"] */ .A) + "",
        width: "627",
        height: "350"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Kiểm tra kết quả sau khi cấu hình"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập ArgoCD thông qua trình duyệt, xuất hiện lỗi 403 ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(280838)/* ["default"] */ .A) + "",
        width: "627",
        height: "149"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-rbac",
        children: " Previous Cấu hình RBAC policy  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./nang-goi-dich-vu-dang-su-dung",
        children: " Next Nâng gói dịch vụ đang sử dụng "
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

/***/ 754818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/66349b65bc75-Picture41-2-081a2ccffc6f47a5dc1c09a65c22868f.png");

/***/ },

/***/ 419911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a15b14d86374-Picture42-2-615a5ef7714280ac6e8e15da533859d1.png");

/***/ },

/***/ 588133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ba2e74dcc95f-Picture43-2-1581b77038e6babe3b271fdb25130c94.png");

/***/ },

/***/ 280838
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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