"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[4570],{

/***/ 591508
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sso_single_sign_on_overview_md_cb1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sso-single-sign-on-overview-md-cb1.json
const site_docs_sso_single_sign_on_overview_md_cb1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sso-single-sign-on/overview","title":"2. SSO – Single sign-on","description":"Overview","source":"@site/docs/sso-single-sign-on/overview.md","sourceDirName":"sso-single-sign-on","slug":"/sso-single-sign-on/overview","permalink":"/sso-single-sign-on/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"SSO – Single sign-on","title":"2. SSO – Single sign-on","source":"https://fptcloud.com/documents/sso-single-sign-on/?doc=overview","parent":"https://fptcloud.com/documents/sso-single-sign-on","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Overviews","permalink":"/sso-single-sign-on/"},"next":{"title":"Use sso","permalink":"/sso-single-sign-on/use-sso"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sso-single-sign-on/overview.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'SSO – Single sign-on',
	title: '2. SSO – Single sign-on',
	source: 'https://fptcloud.com/documents/sso-single-sign-on/?doc=overview',
	parent: 'https://fptcloud.com/documents/sso-single-sign-on',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. SSO – Single sign-on';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tổng quan:</strong>",
  "id": "1-tổng-quan",
  "level": 4
}, {
  "value": "<strong>2. Ưu điểm</strong>",
  "id": "2-ưu-điểm",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-sso--single-sign-on",
        children: "2. SSO – Single sign-on"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-tổng-quan",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tổng quan:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSO (Single Sign – on) là một cơ chế xác thực cho phép người dùng truy cập một cách an toàn vào nhiều ứng dụng, dịch vụ chỉ với sử dụng duy nhất một ID. Với SSO, người dùng sẽ có thể truy cập rất nhiều ứng dụng đồng thời mà không cần phải đăng nhập mỗi lúc. SSO được xây dựng trên ý tưởng được gọi là “danh tính liên kết” (federated identity). Nó cho phép chia sẻ thông tin định danh xuyên suốt các hệ thống đáng tin cậy nhưng độc lập."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-ưu-điểm",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Ưu điểm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một vài lợi ích có thể kể đến của single sign-on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Giảm số lượng username và pasword mà người dùng cần phải ghi nhớ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Giảm số lần phải nhập thông tin username và pasword"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rủi ro về việc lộ thông tin người dùng cũng được tiết chế lại"
        }), "\n"]
      }), "\n"]
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