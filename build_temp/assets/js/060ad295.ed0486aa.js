"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[12044],{

/***/ 496307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_xoa_may_chu_waf_md_060_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-xoa-may-chu-waf-md-060.json
const site_docs_fpt_cloud_waf_xoa_may_chu_waf_md_060_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/xoa-may-chu-waf","title":"2. FPT Cloud WAF","description":"Xóa máy chủ WAF","source":"@site/docs/fpt-cloud-waf/xoa-may-chu-waf.md","sourceDirName":"fpt-cloud-waf","slug":"/fpt-cloud-waf/xoa-may-chu-waf","permalink":"/fpt-cloud-waf/xoa-may-chu-waf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Xoa may chu waf","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=xoa-may-chu-waf","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xem thong tin chi tiet proxy host","permalink":"/fpt-cloud-waf/xem-thong-tin-chi-tiet-proxy-host"},"next":{"title":"Xoa proxy host","permalink":"/fpt-cloud-waf/xoa-proxy-host"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/xoa-may-chu-waf.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Xoa may chu waf',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=xoa-may-chu-waf',
	parent: 'https://fptcloud.com/documents/fpt-cloud-waf',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAF';

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
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-waf",
        children: "2. FPT Cloud WAF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xóa máy chủ WAF"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Thao tác này sẽ xóa toàn bộ dữ liệu của máy chủ WAF và không thể phục hồi lại được. Vui lòng kiểm tra kỹ trước khi thực hiện xóa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Để xóa 1 máy chủ WAF đã tạo, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete WAF"
      }), " tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Web Application Firewall Management."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT WAF 2022 13",
          src: (__webpack_require__(594864)/* ["default"] */ .A) + "",
          width: "1024",
          height: "538"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " tại popup xác nhận xóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT WAF 2022 14",
          src: (__webpack_require__(292105)/* ["default"] */ .A) + "",
          width: "439",
          height: "182"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./chinh-sua-may-chu-waf",
        children: " Previous Chỉnh sửa máy chủ WAF "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Next Quản trị máy chủ WAF với WAF Dashboard "
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

/***/ 594864
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02cafd3673e5-Userguide-FPT-WAF-2022-13-1024x538-30b4187545962cce85a61936f7e025eb.png");

/***/ },

/***/ 292105
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/73224f6832b4-Userguide-FPT-WAF-2022-14-7e60a0ade81a72711690e1fd25e7e9c8.png");

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