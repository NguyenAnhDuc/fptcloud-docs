"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[75627],{

/***/ 30797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_container_registry_2_initial_kich_hoat_dich_vu_fpt_container_registry_md_cb3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-container-registry-2-initial-kich-hoat-dich-vu-fpt-container-registry-md-cb3.json
const site_docs_fpt_container_registry_2_initial_kich_hoat_dich_vu_fpt_container_registry_md_cb3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-container-registry-2/initial/kich-hoat-dich-vu-fpt-container-registry","title":"2. FPT Container Registry","description":"Kích hoạt dịch vụ FPT Container Registry","source":"@site/docs/fpt-container-registry-2/initial/kich-hoat-dich-vu-fpt-container-registry.md","sourceDirName":"fpt-container-registry-2/initial","slug":"/fpt-container-registry-2/initial/kich-hoat-dich-vu-fpt-container-registry","permalink":"/fpt-container-registry-2/initial/kich-hoat-dich-vu-fpt-container-registry","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Kich hoat dich vu fpt container registry","title":"2. FPT Container Registry","source":"https://fptcloud.com/documents/fpt-container-registry-2/?doc=kich-hoat-dich-vu-fpt-container-registry","parent":"https://fptcloud.com/documents/fpt-container-registry-2","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"FPT Container Registry","permalink":"/fpt-container-registry-2/initial/initial-setup"},"next":{"title":"Kiem tra thong tin goi dich vu","permalink":"/fpt-container-registry-2/initial/kiem-tra-thong-tin-goi-dich-vu"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-container-registry-2/initial/kich-hoat-dich-vu-fpt-container-registry.md


const frontMatter = {
	sidebar_label: 'Kich hoat dich vu fpt container registry',
	title: '2. FPT Container Registry',
	source: 'https://fptcloud.com/documents/fpt-container-registry-2/?doc=kich-hoat-dich-vu-fpt-container-registry',
	parent: 'https://fptcloud.com/documents/fpt-container-registry-2',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Container Registry';

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
        id: "2-fpt-container-registry",
        children: "2. FPT Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kích hoạt dịch vụ FPT Container Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn là owner của tenant hoặc là admin của VPC và user được cấp quyền ContainerRegistry:Active trong role IAM (thường user thuộc role SuperAdmin sẽ có quyền IAM để kích hoạt dịch vụ) thì có thể kích hoạt dịch vụ ngay trên giao diện FPT Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./kiem-tra-thong-tin-goi-dich-vu",
        children: " Next Kiểm tra thông tin gói dịch vụ "
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