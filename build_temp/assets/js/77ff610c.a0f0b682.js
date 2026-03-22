"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86957],{

/***/ 94253
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_hub_sharing_deploy_share_detail_invited_md_77f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-hub-sharing-deploy-share-detail-invited-md-77f.json
const site_docs_model_hub_sharing_deploy_share_detail_invited_md_77f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-hub/sharing-deploy/share-detail-invited","title":"2. Model Hub","description":"Share detail (invited)","source":"@site/docs/model-hub/sharing-deploy/share-detail-invited.md","sourceDirName":"model-hub/sharing-deploy","slug":"/model-hub/sharing-deploy/share-detail-invited","permalink":"/model-hub/sharing-deploy/share-detail-invited","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Share detail invited","title":"2. Model Hub","source":"https://fptcloud.com/documents/model-hub/?doc=share-detail-invited","parent":"https://fptcloud.com/documents/model-hub","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Model deployment","permalink":"/model-hub/sharing-deploy/model-deployment"},"next":{"title":"Share detail joined","permalink":"/model-hub/sharing-deploy/share-detail-joined"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-hub/sharing-deploy/share-detail-invited.md


const frontMatter = {
	sidebar_label: 'Share detail invited',
	title: '2. Model Hub',
	source: 'https://fptcloud.com/documents/model-hub/?doc=share-detail-invited',
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
      children: "Share detail (invited)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Click vào 1 model để xem chi tiết > Chọn tab Share"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 2: Click vào dấu 3 chấm cột Action > Chọn Detail ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892379)/* ["default"] */ .A) + "",
        width: "624",
        height: "170"
      }), " Bước 3: Hiển thị thông tin user đã được add, bao gồm: Email, Role, Date invited. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491438)/* ["default"] */ .A) + "",
        width: "624",
        height: "247"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Previous Share detail "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./share-detail-joined",
        children: " Next Share detail (joined) "
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

/***/ 892379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/105c08d5afbc-Picture30-c48398c1df91ac41563ee0e79c37feb0.png");

/***/ },

/***/ 491438
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b5a3da4df9f9-Picture31-98552529c5660333537477281cb4bec2.png");

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