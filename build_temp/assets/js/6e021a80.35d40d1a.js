"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[73512],{

/***/ 389334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_wapples_security_detection_log_analysis_md_6e0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-wapples-security-detection-log-analysis-md-6e0.json
const site_docs_fpt_cloud_wapples_security_detection_log_analysis_md_6e0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-wapples/security/detection-log-analysis","title":"2. FPT Cloud WAPPLES","description":"Detection Log Analysis","source":"@site/docs/fpt-cloud-wapples/security/detection-log-analysis.md","sourceDirName":"fpt-cloud-wapples/security","slug":"/fpt-cloud-wapples/security/detection-log-analysis","permalink":"/fpt-cloud-wapples/security/detection-log-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Detection log analysis","title":"2. FPT Cloud WAPPLES","source":"https://fptcloud.com/documents/fpt-cloud-wapples/?doc=detection-log-analysis","parent":"https://fptcloud.com/documents/fpt-cloud-wapples","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Detection exceptions","permalink":"/fpt-cloud-wapples/security/detection-exceptions"},"next":{"title":"Detection logs","permalink":"/fpt-cloud-wapples/security/detection-logs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-wapples/security/detection-log-analysis.md


const frontMatter = {
	sidebar_label: 'Detection log analysis',
	title: '2. FPT Cloud WAPPLES',
	source: 'https://fptcloud.com/documents/fpt-cloud-wapples/?doc=detection-log-analysis',
	parent: 'https://fptcloud.com/documents/fpt-cloud-wapples',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAPPLES';

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
        id: "2-fpt-cloud-wapples",
        children: "2. FPT Cloud WAPPLES"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detection Log Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lọc tìm kiếm tất cả các log gồm các log truy cập các url dir và các log khai thác vuln web dựa trên policy đã thiết lập ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(691151)/* ["default"] */ .A) + "",
        width: "940",
        height: "414"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Có thể lọc theo từng web destination tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Condition"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(706198)/* ["default"] */ .A) + "",
        width: "975",
        height: "397"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./graphical-analysis",
        children: " Previous Graphical Analysis "
      })
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

/***/ 706198
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12b536828a61-image-1714112428666-3130e1f7254eba6addad636abb0b268c.png");

/***/ },

/***/ 691151
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b85a7127fee7-image-1714120758618-27329ce3958802355ec87d0dc0c79d5e.png");

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