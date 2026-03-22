"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[2253],{

/***/ 729817
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_initial_nang_cap_goi_dich_vu_md_723_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-initial-nang-cap-goi-dich-vu-md-723.json
const site_docs_fpt_jenkins_ci_initial_nang_cap_goi_dich_vu_md_723_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/initial/nang-cap-goi-dich-vu","title":"2. FPT Jenkins CI","description":"Nâng cấp gói dịch vụ","source":"@site/docs/fpt-jenkins-ci/initial/nang-cap-goi-dich-vu.md","sourceDirName":"fpt-jenkins-ci/initial","slug":"/fpt-jenkins-ci/initial/nang-cap-goi-dich-vu","permalink":"/fpt-jenkins-ci/initial/nang-cap-goi-dich-vu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Nang cap goi dich vu","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=nang-cap-goi-dich-vu","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Kiem tra thong tin goi dich vu","permalink":"/fpt-jenkins-ci/initial/kiem-tra-thong-tin-goi-dich-vu"},"next":{"title":"Tao moi fpt jenkinsci","permalink":"/fpt-jenkins-ci/initial/tao-moi-fpt-jenkinsci"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/initial/nang-cap-goi-dich-vu.md


const frontMatter = {
	sidebar_label: 'Nang cap goi dich vu',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=nang-cap-goi-dich-vu',
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
    em: "em",
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
        id: "2-fpt-jenkins-ci",
        children: "2. FPT Jenkins CI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nâng cấp gói dịch vụ"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi số lượng jobs trên Jenkins chạy vượt quá tài nguyên được dùng để chạy ứng dụng, người dùng có nhu cầu tăng tài nguyên cho cụm Jenkins Controller đang chạy có thể thực hiện chọn các gói tài nguyên đã được cung cấp bởi FPT Cloud như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Vào menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Essential Properties"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(991776)/* ["default"] */ .A) + "",
        width: "627",
        height: "283"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Chọn gói tài nguyên muốn nâng cấp: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283316)/* ["default"] */ .A) + "",
        width: "627",
        height: "379"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Hệ thống chỉ cho phép update lên gói dịch vụ cao hơn, không hỗ trợ downgrade resource *", (0,jsx_runtime.jsx)(_components.em, {
        children: "Bước 3."
      }), " Kết quả sau khi update resource: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392079)/* ["default"] */ .A) + "",
        width: "627",
        height: "331"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./upgrade-version",
        children: " Previous Upgrade version "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-jenkins-instance-khi-khong-muon-su-dung",
        children: " Next Xóa Jenkins instance khi không muốn sử dụng "
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

/***/ 991776
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/650c22b25bd9-Picture93-42c84c3c75974b8185a40aa132489064.png");

/***/ },

/***/ 283316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/74bdab8d4405-Picture94-dfa1265faba2cff764d735bad03fe31d.png");

/***/ },

/***/ 392079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a73deeabdbb7-Picture95-ece1d53c9b6e91a4b3d42db3e89c9869.png");

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