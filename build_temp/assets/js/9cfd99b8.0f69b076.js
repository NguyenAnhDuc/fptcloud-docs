"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[8865],{

/***/ 974842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_demo_cloud_advisor_demo_cloud_advisor_dashboard_md_9cf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-demo-cloud-advisor-demo-cloud-advisor-dashboard-md-9cf.json
const site_docs_demo_cloud_advisor_demo_cloud_advisor_dashboard_md_9cf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"demo/cloud-advisor-demo/cloud-advisor-dashboard","title":"Cloud Advisor Dashboard","description":"Dashboard hiển thị tổng quan các vấn đề cần xử lý theo từng category.","source":"@site/docs/demo/cloud-advisor-demo/cloud-advisor-dashboard.md","sourceDirName":"demo/cloud-advisor-demo","slug":"/demo/cloud-advisor-demo/cloud-advisor-dashboard","permalink":"/demo/cloud-advisor-demo/cloud-advisor-dashboard","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Cloud Advisor Dashboard","sidebar_label":"Cloud Advisor Dashboard","source":"notion","last_synced":"2026-03-22T01:46:28Z"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/demo/cloud-advisor-demo/cloud-advisor-dashboard.md


const frontMatter = {
	title: 'Cloud Advisor Dashboard',
	sidebar_label: 'Cloud Advisor Dashboard',
	source: 'notion',
	last_synced: '2026-03-22T01:46:28Z'
};
const contentTitle = 'Cloud Advisor Dashboard';

const assets = {

};



const toc = [{
  "value": "Các chỉ số trên Dashboard",
  "id": "các-chỉ-số-trên-dashboard",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
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
        id: "cloud-advisor-dashboard",
        children: "Cloud Advisor Dashboard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dashboard hiển thị tổng quan các vấn đề cần xử lý theo từng category."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-chỉ-số-trên-dashboard",
      children: "Các chỉ số trên Dashboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action recommended: Số vấn đề cần xử lý ngay"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Investigation recommended: Vấn đề cần kiểm tra thêm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rules with excluded items: Các rule đã loại trừ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "💡 💡 Mỗi vấn đề có nút Download để xuất báo cáo Excel cho báo cáo nội bộ."
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