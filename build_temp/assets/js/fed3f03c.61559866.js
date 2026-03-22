"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[30279],{

/***/ 92884
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fortigate_fpt_ngfw_cau_hinh_static_routes_md_fed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fortigate-fpt-ngfw-cau-hinh-static-routes-md-fed.json
const site_docs_fortigate_fpt_ngfw_cau_hinh_static_routes_md_fed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fortigate-fpt-ngfw/cau-hinh-static-routes","title":"2. Fortigate – FPT NGFW","description":"Cấu hình Static Routes","source":"@site/docs/fortigate-fpt-ngfw/cau-hinh-static-routes.md","sourceDirName":"fortigate-fpt-ngfw","slug":"/fortigate-fpt-ngfw/cau-hinh-static-routes","permalink":"/fortigate-fpt-ngfw/cau-hinh-static-routes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cau hinh static routes","title":"2. Fortigate – FPT NGFW","source":"https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=cau-hinh-static-routes","parent":"https://fptcloud.com/documents/fortigate-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh network interfaces","permalink":"/fortigate-fpt-ngfw/cau-hinh-network-interfaces"},"next":{"title":"Faq","permalink":"/fortigate-fpt-ngfw/faq"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fortigate-fpt-ngfw/cau-hinh-static-routes.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cau hinh static routes',
	title: '2. Fortigate – FPT NGFW',
	source: 'https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=cau-hinh-static-routes',
	parent: 'https://fptcloud.com/documents/fortigate-fpt-ngfw',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Fortigate – FPT NGFW';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "2-fortigate--fpt-ngfw",
        children: "2. Fortigate – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình Static Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static Routes"
      }), ". Ở phần cấu hình ban đầu trên CLI đã tạo sẵn static route cho WAN port có gateway 10.0.0.1.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 5",
        src: (__webpack_require__(519392)/* ["default"] */ .A) + "",
        width: "1024",
        height: "265"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Người dùng có thể tạo static route trên giao diện web. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New"
      }), " > Chọn Interface cần Route > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gateway"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destination"
      }), " (Destination có thể để default nếu không có destination cụ thể)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 6",
        src: (__webpack_require__(828581)/* ["default"] */ .A) + "",
        width: "1024",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-network-interfaces",
        children: " Previous Cấu hình Network Interfaces "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-firewall-policy",
        children: " Next Tạo Firewall Policy "
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

/***/ 828581
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/701e228efe0e-Userguide-Fortigate-FPT-NGFW-2022-6-1024x411-43fb0b224130d2a6ed47b319edb949ac.png");

/***/ },

/***/ 519392
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0a1691a9c39-Userguide-Fortigate-FPT-NGFW-2022-5-1024x265-64d5cb91e145e4abfa568904c26f4d46.png");

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