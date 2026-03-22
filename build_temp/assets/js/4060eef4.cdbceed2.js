"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[36625],{

/***/ 114000
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_monitoring_ip_access_control_initial_setup_md_406_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-monitoring-ip-access-control-initial-setup-md-406.json
const site_docs_fpt_monitoring_ip_access_control_initial_setup_md_406_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-monitoring-ip-access-control/initial-setup","title":"2. FPT Monitoring – IP Access Control","description":"Initial Setup","source":"@site/docs/fpt-monitoring-ip-access-control/initial-setup.md","sourceDirName":"fpt-monitoring-ip-access-control","slug":"/fpt-monitoring-ip-access-control/initial-setup","permalink":"/fpt-monitoring-ip-access-control/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Initial setup","title":"2. FPT Monitoring – IP Access Control","source":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=initial-setup","parent":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"FPT Monitoring – IP Access Control","permalink":"/fpt-monitoring-ip-access-control/"},"next":{"title":"Lien he ho tro","permalink":"/fpt-monitoring-ip-access-control/lien-he-ho-tro"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-monitoring-ip-access-control/initial-setup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Initial setup',
	title: '2. FPT Monitoring – IP Access Control',
	source: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=initial-setup',
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
    p: "p",
    strong: "strong",
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
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu đây là lần đầu tiên bạn sử dụng dịch vụ của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Monitoring"
      }), " , trước tiên hãy kiểm tra và hoàn thành các công việc sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-tai-khoan-fpt-cloud-va-dang-nhap-vao-fpt-portal",
        children: " Next Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal "
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