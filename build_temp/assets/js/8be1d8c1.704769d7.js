"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[41623],{

/***/ 423092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_container_registry_2_huong_dan_su_dung_robot_account_md_8be_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-container-registry-2-huong-dan-su-dung-robot-account-md-8be.json
const site_docs_fpt_container_registry_2_huong_dan_su_dung_robot_account_md_8be_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-container-registry-2/huong-dan-su-dung-robot-account","title":"2. FPT Container Registry","description":"Hướng dẫn sử dụng Robot Account","source":"@site/docs/fpt-container-registry-2/huong-dan-su-dung-robot-account.md","sourceDirName":"fpt-container-registry-2","slug":"/fpt-container-registry-2/huong-dan-su-dung-robot-account","permalink":"/fpt-container-registry-2/huong-dan-su-dung-robot-account","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan su dung robot account","title":"2. FPT Container Registry","source":"https://fptcloud.com/documents/fpt-container-registry-2/?doc=huong-dan-su-dung-robot-account","parent":"https://fptcloud.com/documents/fpt-container-registry-2","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan nang goi dich vu dang su dung","permalink":"/fpt-container-registry-2/huong-dan-nang-goi-dich-vu-dang-su-dung"},"next":{"title":"Huong dan su dung tren docker cli","permalink":"/fpt-container-registry-2/huong-dan-su-dung-tren-docker-cli"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-container-registry-2/huong-dan-su-dung-robot-account.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan su dung robot account',
	title: '2. FPT Container Registry',
	source: 'https://fptcloud.com/documents/fpt-container-registry-2/?doc=huong-dan-su-dung-robot-account',
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
    img: "img",
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
      children: "Hướng dẫn sử dụng Robot Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo một Robot Account, người dùng có thể sử dụng Robot Account để thực hiện login tới FPT Container Registry với docker login để sử dụng với các permission (Pull/Push) đã được cấu hình."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng sử dụng token đã copy qua portal/ thông tin trong file đã export chứa account/secret để sử dụng:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556419)/* ["default"] */ .A) + "",
        width: "602",
        height: "19"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra thông thông tin đang nhập sử dụng docker login như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(443173)/* ["default"] */ .A) + "",
        width: "602",
        height: "119"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng docker pull/push để kiểm tra các permission đã cấu hình."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp robot account bị xoá/disable/expire khi dùng docker login/pull/push sẽ báo “unauthorized to access repository”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./refresh-robot-account",
        children: " Previous Refresh Robot Account  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-goi-dich-vu",
        children: " Next Quản lý Gói dịch vụ "
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

/***/ 443173
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/69496c13f228-Picture84-0127db1384e0bd2b53cd13d51d573345.png");

/***/ },

/***/ 556419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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