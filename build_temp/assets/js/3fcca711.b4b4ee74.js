"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[76840],{

/***/ 29119
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_quan_ly_fpt_cloud_agent_md_3fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-quan-ly-fpt-cloud-agent-md-3fc.json
const site_docs_fpt_jenkins_ci_quan_ly_fpt_cloud_agent_md_3fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/quan-ly-fpt-cloud-agent","title":"2. FPT Jenkins CI","description":"Quản lý FPT Cloud Agent","source":"@site/docs/fpt-jenkins-ci/quan-ly-fpt-cloud-agent.md","sourceDirName":"fpt-jenkins-ci","slug":"/fpt-jenkins-ci/quan-ly-fpt-cloud-agent","permalink":"/fpt-jenkins-ci/quan-ly-fpt-cloud-agent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly fpt cloud agent","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=quan-ly-fpt-cloud-agent","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly credential","permalink":"/fpt-jenkins-ci/quan-ly-credential"},"next":{"title":"Tao moi fpt jenkinsci","permalink":"/fpt-jenkins-ci/tao-moi-fpt-jenkinsci"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/quan-ly-fpt-cloud-agent.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly fpt cloud agent',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=quan-ly-fpt-cloud-agent',
	parent: 'https://fptcloud.com/documents/fpt-jenkins-ci',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Jenkins CI';

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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-jenkins-ci",
        children: "2. FPT Jenkins CI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý FPT Cloud Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chức năng này cho phép người dùng có thể tạo, sửa, xoá agent thông qua giao diện FPT Portal. Để sử dụng chức năng, người dùng có thể thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-chi-tiet-jenkins-ci-instance",
        children: " Previous Xem thông tin chi tiết Jenkins CI instance "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./them-moi-mot-agent",
        children: " Next Thêm mới một Agent "
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