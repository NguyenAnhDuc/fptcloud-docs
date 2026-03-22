"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[68235],{

/***/ 284193
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_notifications_cau_hinh_timereconcile_md_559_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-notifications-cau-hinh-timereconcile-md-559.json
const site_docs_fpt_argocd_3_notifications_cau_hinh_timereconcile_md_559_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/notifications/cau-hinh-timereconcile","title":"2. FPT ArgoCD","description":"Cấu hình TimeReconcile","source":"@site/docs/fpt-argocd-3/notifications/cau-hinh-timereconcile.md","sourceDirName":"fpt-argocd-3/notifications","slug":"/fpt-argocd-3/notifications/cau-hinh-timereconcile","permalink":"/fpt-argocd-3/notifications/cau-hinh-timereconcile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cau hinh timereconcile","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-timereconcile","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh notifications","permalink":"/fpt-argocd-3/notifications/cau-hinh-notifications"},"next":{"title":"Cau hinh webhook","permalink":"/fpt-argocd-3/notifications/cau-hinh-webhook"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/notifications/cau-hinh-timereconcile.md


const frontMatter = {
	sidebar_label: 'Cau hinh timereconcile',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-timereconcile',
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
      children: "Cấu hình TimeReconcile"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Argo CD hỗ trợ người dùng cấu hình thời gian kiểm tra các thay đổi của k8s cluster với repository deployment thông qua cấu hình TimeReconcile trên Portal. Mặc định ArgoCD sẽ kiểm tra các thay đổi mỗi 3 phút 1 lần. FPT Cloud hỗ trợ người dùng cấu hình thông qua giao diện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TimeReconcile"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390388)/* ["default"] */ .A) + "",
        width: "627",
        height: "371"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Thực hiện cấu hình TimeReconcile như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Người dùng nhập thời gian để reconcile. Ví dụ: 10s,20s,30s,1h,…"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537164)/* ["default"] */ .A) + "",
        width: "627",
        height: "368"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(781959)/* ["default"] */ .A) + "",
        width: "627",
        height: "367"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Kết quả sau khi cấu hình ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(99024)/* ["default"] */ .A) + "",
        width: "627",
        height: "368"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-build-option-cho-kustomize",
        children: " Previous Cấu hình Build Options cho Kustomize "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-rbac",
        children: " Next Cấu hình RBAC policy  "
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

/***/ 781959
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/21be09d36d35-Picture39-4-48327b96f3b5f207157ed1007d08eb14.png");

/***/ },

/***/ 390388
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2e5b428529e4-Picture37-4-9648605dcd8549bb42411123d02cdf11.png");

/***/ },

/***/ 99024
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/90742bf43934-Picture40-2-d80675bc4e4b2f650cc8f95bf268ae80.png");

/***/ },

/***/ 537164
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e381d9c9a6f-Picture38-4-592154dfdf6b31528d0695f6835c439b.png");

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