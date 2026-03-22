"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[94098],{

/***/ 121023
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_index_md_3f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-index-md-3f5.json
const site_docs_gpu_virtual_machine_index_md_3f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/index","title":"GPU Virtual Machine","description":"GPU Virtual Machine (GPU VM) là dịch vụ máy chủ ảo được trang bị GPU của FPT Cloud, phù hợp cho các tác vụ AI/ML, deep learning, rendering và xử lý đồ họa hiệu suất cao.","source":"@site/docs/gpu-virtual-machine/index.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/","permalink":"/gpu-virtual-machine/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GPU Virtual Machine","sidebar_label":"GPU Virtual Machine","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/","lang":"vi","converted":"2026-03-22"},"sidebar":"defaultSidebar","previous":{"title":"FPT Images","permalink":"/gpu-virtual-machine/fpt_images"},"next":{"title":"Manage GPU VMs","permalink":"/gpu-virtual-machine/manage-gpu-vms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/index.md


const frontMatter = {
	title: 'GPU Virtual Machine',
	sidebar_label: 'GPU Virtual Machine',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/',
	lang: 'vi',
	converted: '2026-03-22'
};
const contentTitle = 'GPU Virtual Machine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "gpu-virtual-machine",
        children: "GPU Virtual Machine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU Virtual Machine (GPU VM) là dịch vụ máy chủ ảo được trang bị GPU của FPT Cloud, phù hợp cho các tác vụ AI/ML, deep learning, rendering và xử lý đồ họa hiệu suất cao."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tham khảo tài liệu tiếng Anh để biết hướng dẫn chi tiết."
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