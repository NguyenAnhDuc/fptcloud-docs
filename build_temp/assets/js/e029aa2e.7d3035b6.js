"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[72018],{

/***/ 351157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_hub_initial_create_organization_md_e02_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-hub-initial-create-organization-md-e02.json
const site_docs_model_hub_initial_create_organization_md_e02_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-hub/initial/create-organization","title":"2. Model Hub","description":"Create organization (v1.1)","source":"@site/docs/model-hub/initial/create-organization.md","sourceDirName":"model-hub/initial","slug":"/model-hub/initial/create-organization","permalink":"/model-hub/initial/create-organization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create organization","title":"2. Model Hub","source":"https://fptcloud.com/documents/model-hub/?doc=create-organization","parent":"https://fptcloud.com/documents/model-hub","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Khởi tạo & Tổ chức","permalink":"/model-hub/initial/"},"next":{"title":"Dang nhap","permalink":"/model-hub/initial/dang-nhap"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-hub/initial/create-organization.md


const frontMatter = {
	sidebar_label: 'Create organization',
	title: '2. Model Hub',
	source: 'https://fptcloud.com/documents/model-hub/?doc=create-organization',
	parent: 'https://fptcloud.com/documents/model-hub',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Model Hub';

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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-model-hub",
        children: "2. Model Hub"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create organization (v1.1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục đích: Sau khi tenant được active, người dùng lần đầu truy cập vào dịch vụ Model Hub trên tenant sẽ cần làm bước này, thực hiện create organization, sau đó mới sử dụng dịch vụ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Tại màn hình dịch vụ Private Model, người dùng sẽ thấy hiển thị form Create organizaton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756647)/* ["default"] */ .A) + "",
        width: "624",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Người dùng thực thiện điền đầy đủ thông tin Owner email, Organization name, upload Logo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: thông tin Owner email, Organization name là bắt buộc, người dùng có thể bỏ trống trường Logo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Click button Create, hệ thống điều hướng đến màn hình dịch vụ Private Model, tại đây, người dùng có thể bắt đầu sử dụng dịch vụ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./base-model",
        children: " Previous Base model (v1.1) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./view-update-organization",
        children: " Next View/Update organization (v1.1) "
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

/***/ 756647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d2d971ad66e5-anh-12-6f3b12f270f53f9980ae34994423bb3b.png");

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