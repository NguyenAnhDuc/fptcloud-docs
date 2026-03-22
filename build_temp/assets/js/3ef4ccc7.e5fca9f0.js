"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[50005],{

/***/ 533366
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cost_explorer_question_1_md_3ef_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cost-explorer-question-1-md-3ef.json
const site_docs_cost_explorer_question_1_md_3ef_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cost-explorer/question-1","title":"2. Cost Explorer","description":"Vì sao tôi không xem được phần Cost Explore?","source":"@site/docs/cost-explorer/question-1.md","sourceDirName":"cost-explorer","slug":"/cost-explorer/question-1","permalink":"/cost-explorer/question-1","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Question 1","title":"2. Cost Explorer","source":"https://fptcloud.com/documents/cost-explorer/?doc=question-1","parent":"https://fptcloud.com/documents/cost-explorer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Hướng dẫn nhanh (Quick Starts)","permalink":"/cost-explorer/"},"next":{"title":"How to add credits?","permalink":"/ai-factory-billing/add-credits"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cost-explorer/question-1.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Question 1',
	title: '2. Cost Explorer',
	source: 'https://fptcloud.com/documents/cost-explorer/?doc=question-1',
	parent: 'https://fptcloud.com/documents/cost-explorer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Cost Explorer';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-cost-explorer",
        children: "2. Cost Explorer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vì sao tôi không xem được phần Cost Explore?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có 3 trường hợp dẫn tới việc bạn không xem được module Billing nói chung và tính năng Cost Explorer nói riêng, cụ thể:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Trường hợp account của bạn là role Tenant Owner nhưng dữ liệu bill bị trống."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hãy liên hệ với Sale Support của FCI để được hỗ trợ setup giá dịch vụ và hiển thị đối soát lên Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Trường hợp account của bạn không phải role Tenant Owner."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn có thể yêu cầu người có quyền Tenant Owner thuộc tổ chức của bạn thực hiện phân quyền IAM theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/billing/?doc=billing-permission",
        children: "Phân quyền xem billing."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Trường hợp account của bạn có đủ quyền view billing."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn hãy kiểm tra lại project hoặc region mà bạn đang lựa chọn. Hãy thử chọn Project default và region tài nguyên được tính billing. Hoặc liên hệ với FCI để được hỗ trợ thêm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./fqas-2",
        children: " Next Tôi muốn xem Cost Explorer của 1 vài Instance hoặc Security Group nhưng Customize Filter không cho phép chọn ? "
      })
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