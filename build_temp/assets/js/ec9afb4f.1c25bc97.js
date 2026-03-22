"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45991],{

/***/ 539993
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_hub_clone_model_md_ec9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-hub-clone-model-md-ec9.json
const site_docs_model_hub_clone_model_md_ec9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-hub/clone-model","title":"2. Model Hub","description":"Clone model (v1.1)","source":"@site/docs/model-hub/clone-model.md","sourceDirName":"model-hub","slug":"/model-hub/clone-model","permalink":"/model-hub/clone-model","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Clone model","title":"2. Model Hub","source":"https://fptcloud.com/documents/model-hub/?doc=clone-model","parent":"https://fptcloud.com/documents/model-hub","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chi tiet model","permalink":"/model-hub/chi-tiet-model"},"next":{"title":"Create organization","permalink":"/model-hub/create-organization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-hub/clone-model.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Clone model',
	title: '2. Model Hub',
	source: 'https://fptcloud.com/documents/model-hub/?doc=clone-model',
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
      children: "Clone model (v1.1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục đích: Nhân bản 1 model giống với model đã có."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Click vào 1 model để xem chi tiết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Click vào Actions > Chọn action Clone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239714)/* ["default"] */ .A) + "",
        width: "624",
        height: "309"
      }), " Bước 3: Sau khi click Clone, hiển thị màn hình clone model với các thông tin là thông tin của model gốc mà người dùng đang thực hiện clone. Tại đây, người dùng thực hiện chỉnh sửa lại Model title để đảm bảo model name là duy nhất, điền các thông tin cần thiết khác"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 4: Click Save. Hệ thống trở lại màn hình model list với model mới vừa thực hiện clone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-share",
        children: " Previous Delete share "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./base-model",
        children: " Next Base model (v1.1) "
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

/***/ 239714
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d1085098af50-anh-7-643495115f05c2fb0a88af475c580bd1.png");

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