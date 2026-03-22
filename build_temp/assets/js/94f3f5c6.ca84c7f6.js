"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[96057],{

/***/ 856762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_cau_hinh_webhook_md_94f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-cau-hinh-webhook-md-94f.json
const site_docs_fpt_argocd_3_cau_hinh_webhook_md_94f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/cau-hinh-webhook","title":"2. FPT ArgoCD","description":"Cấu hình webhook","source":"@site/docs/fpt-argocd-3/cau-hinh-webhook.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/cau-hinh-webhook","permalink":"/fpt-argocd-3/cau-hinh-webhook","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cau hinh webhook","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-webhook","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh timereconcile","permalink":"/fpt-argocd-3/cau-hinh-timereconcile"},"next":{"title":"Cau hinh whitelist ip","permalink":"/fpt-argocd-3/cau-hinh-whitelist-ip"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/cau-hinh-webhook.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cau hinh webhook',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=cau-hinh-webhook',
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
      children: "Cấu hình webhook"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArgoCD sẽ tự động kiểm tra các thay đổi của các manifest trên Git Repository ba phút một lần. ArgoCD hỗ trợ Git webhook notifications từ Github, GitLab, Bitbucket, Bitbucket Server and Gogs để mỗi lần Git Repository có thay đổi ArgoCD sẽ tự động phát hiện và đồng bộ các thay đổi này."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Mỗi một loại webhook chỉ được tạo 1 lần và có thể update cho các lần sau. ArgoCD không hỗ trợ cấu hình nhiều secret cho mỗi loại webhook"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-container-registry",
        children: " Previous Quản lý Container Registry "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./add-moi-webhook-secret",
        children: " Next Add mới một Webhook Secret  "
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