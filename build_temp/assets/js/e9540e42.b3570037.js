"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[93717],{

/***/ 514347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_wapples_auto_blocking_filter_md_e95_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-wapples-auto-blocking-filter-md-e95.json
const site_docs_fpt_cloud_wapples_auto_blocking_filter_md_e95_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-wapples/auto-blocking-filter","title":"2. FPT Cloud WAPPLES","description":"Auto Blocking Filter","source":"@site/docs/fpt-cloud-wapples/auto-blocking-filter.md","sourceDirName":"fpt-cloud-wapples","slug":"/fpt-cloud-wapples/auto-blocking-filter","permalink":"/fpt-cloud-wapples/auto-blocking-filter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Auto blocking filter","title":"2. FPT Cloud WAPPLES","source":"https://fptcloud.com/documents/fpt-cloud-wapples/?doc=auto-blocking-filter","parent":"https://fptcloud.com/documents/fpt-cloud-wapples","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Audit logs","permalink":"/fpt-cloud-wapples/audit-logs"},"next":{"title":"Automatic backup","permalink":"/fpt-cloud-wapples/automatic-backup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-wapples/auto-blocking-filter.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Auto blocking filter',
	title: '2. FPT Cloud WAPPLES',
	source: 'https://fptcloud.com/documents/fpt-cloud-wapples/?doc=auto-blocking-filter',
	parent: 'https://fptcloud.com/documents/fpt-cloud-wapples',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAPPLES';

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
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-wapples",
        children: "2. FPT Cloud WAPPLES"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Auto Blocking Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện đưa vào ‘Blocking list’ các ip thỏa mãn theo 'HTTP Dos/Risk Level by Rule' đã thiết lập"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(78906)/* ["default"] */ .A) + "",
        width: "939",
        height: "417"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Risk Level by Rule: thiết lập các trường điều kiện để đưa ip vào blocklist bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration: Phạm vi thời gian tích lũy risk level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cumulative Risk Level: Mức độ rủi ro tích lũy tương ứng với mỗi rule risk trong Policy Settings. Khi đạt đến ngưỡng, tự động block ip và đưa vào ‘Blocking list’"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocking Duration: Thời gian thực hiện block. Tự động xóa bỏ khỏi IP Filter và danh sách block khi hết thời gian HTTP DoS: Thiết lập các trường điều kiện nhằm chống DoS và đưa ip attack vào blacklist bao gồm:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Slow HTTP Header DoS, Slow HTTP Read DoS:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Duration: Thời gian ghi nhận attack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Traffic Latency: Thời gian trì hoãn, kéo dài từ cùng mội IP Source"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No. of Attempts: Số lần trì hoãn, kéo dài được ghi nhận trong giới hạn. Nếu vượt quá số lần, đưa ip vào blocklist"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Blocking Duration: Thời gian thực hiện block"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Slow HTTP POST DoS (tính năng thêm)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Duration(s): Thời gian ghi nhận attack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Traffic Volume(bytes): Nếu lưu lượng thấp hơn mức đặt, đó là một cuộc attack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exclude from Auto Blocking: Thiết lập ngoại lệ"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./access-control",
        children: " Previous Access Control "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./web-access-management",
        children: " Next Web Access Management "
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

/***/ 78906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ec997656f5cf-image-1714116699139-2d71585a45f1ee4f456cc1495ec86acf.png");

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