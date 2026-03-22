"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67311],{

/***/ 709394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_huong_dan_su_dung_grafana_xem_thong_tin_trace_md_a5d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-huong-dan-su-dung-grafana-xem-thong-tin-trace-md-a5d.json
const site_docs_huong_dan_su_dung_grafana_xem_thong_tin_trace_md_a5d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"huong-dan-su-dung-grafana/xem-thong-tin-trace","title":"2. Hướng dẫn sử dụng Grafana","description":"4.4. Xem thông tin trace","source":"@site/docs/huong-dan-su-dung-grafana/xem-thong-tin-trace.md","sourceDirName":"huong-dan-su-dung-grafana","slug":"/huong-dan-su-dung-grafana/xem-thong-tin-trace","permalink":"/huong-dan-su-dung-grafana/xem-thong-tin-trace","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Xem thong tin trace","title":"2. Hướng dẫn sử dụng Grafana","source":"https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=xem-thong-tin-trace","parent":"https://fptcloud.com/documents/huong-dan-su-dung-grafana","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xem thong tin monitor","permalink":"/huong-dan-su-dung-grafana/xem-thong-tin-monitor"},"next":{"title":"Khởi tạo & Cấu hình","permalink":"/incident-management/initial/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/huong-dan-su-dung-grafana/xem-thong-tin-trace.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Xem thong tin trace',
	title: '2. Hướng dẫn sử dụng Grafana',
	source: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=xem-thong-tin-trace',
	parent: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Hướng dẫn sử dụng Grafana';

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
        id: "2-hướng-dẫn-sử-dụng-grafana",
        children: "2. Hướng dẫn sử dụng Grafana"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.4. Xem thông tin trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu, bạn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Explore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(287957)/* ["default"] */ .A) + "",
        width: "248",
        height: "464"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn datasource: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tempo"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hệ thống mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TraceQL"
      }), " cho phép bạn nhập câu query"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(40306)/* ["default"] */ .A) + "",
        width: "1244",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Run query"
      }), " để hiển thị kết quả"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Ảnh minh họa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(102672)/* ["default"] */ .A) + "",
        width: "1237",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hướng dẫn chi tiết, vui lòng tham khảo tài liệu chính thức của Grafana ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://grafana.com/docs/tempo/latest",
        children: "TẠI ĐÂY"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-logs",
        children: " Previous 4.3. Xem thông tin logs "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./query-metric-data",
        children: " Next 4.5. Hướng dẫn Query Metric Data "
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

/***/ 40306
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a8f6ab7df8a6-Screenshot_29-aa29c2f2b4cfa4bb21e1a6d62b2bf6ef.png");

/***/ },

/***/ 102672
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e54fb90fced9-Screenshot_30-3a2e245301464f98796f722ca2be050c.png");

/***/ },

/***/ 287957
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f2b7b75d09ea-Screenshot_22-0c442eeebbd0e8677c4419c2fb9fe839.png");

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