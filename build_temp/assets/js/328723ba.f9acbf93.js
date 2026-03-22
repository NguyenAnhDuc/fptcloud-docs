"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[90193],{

/***/ 615784
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_dfke_faqs_md_328_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-dfke-faqs-md-328.json
const site_docs_dedicated_fpt_kubernetes_engine_dfke_faqs_md_328_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/dfke-faqs","title":"2. Dedicated – FPT Kubernetes Engine","description":"FAQs","source":"@site/docs/dedicated-fpt-kubernetes-engine/dfke-faqs.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/dfke-faqs","permalink":"/dedicated-fpt-kubernetes-engine/dfke-faqs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Dfke faqs","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-faqs","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Dfke advanced firewall","permalink":"/dedicated-fpt-kubernetes-engine/dfke-advanced-firewall"},"next":{"title":"Dedicated – FPT Kubernetes Engine","permalink":"/dedicated-fpt-kubernetes-engine/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/dfke-faqs.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Dfke faqs',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-faqs',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D-FKE hỗ trợ ở các regions nào?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại FPTCloud đang hỗ trợ 02 Regions là HAN (Hanoi) và SGN (Saigon/HCM). D-FKE hỗ trợ tương ứng ở cả 02 Regions trên."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một cluster D-FKE có thể trải trên nhiều regions không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D-FKE không hỗ trợ một cluster chạy trên nhiều regions. Bạn có thể tạo cluster trên mỗi region cho cùng một ứng dụng để thực hiện BC&DR.;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D-FKE có hỗ trợ nhiều cấu hình VM trong một cluster không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D-FKE hiện tại không hỗ trợ nhiều cầu hình VM trong một cluster. Các Worker Nodes có cấu hình giống nhau (CPU, RAM, DISK), các Master Nodes có cấu hình giống nhau (CPU, RAM, DISK). Bạn có thể tăng cấu hình Nodes trong quá trình sử dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D-FKE hỗ trợ bao nhiêu Worker Nodes trong một cluster?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D-FKE mặc định giới hạn 100 Worker Nodes / Cluster. Bạn cần liên hệ với FPT Cloud để tăng giới hạn Worker Nodes nếu có nhu cầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D-FKE có tương thích với các ứng dụng Kubernetes hiện có của tôi không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D-FKE sử dụng native Kubernetes nên hoàn toàn tương thích với các nên tảng Kubernetes trên các Cloud khác như AWS, Azure, GCP, DO… cũng như cluster Kubernetes được bạn cài đặt trên hạ tầng của bạn. Điều này giúp bạn dễ dàng di chuyển ứng dụng giữa FPT Cloud và DC của bạn cũng như các Cloud khác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Làm thế nào để tôi có thể public ứng dụng ra bên ngoài cluster?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Có nhiều cách để bạn có thể public ứng dụng ra ngoài cluster để khách hàng có thể sử dụng. Một trong những cách đơn giản là sử dụng Svc Type LoadBalancer theo hướng dẫn sau: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=service-type-load-balancer",
        children: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=service-type-load-balancer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Làm thế nào để tôi có thể giám sát hiệu năng và cấu hình cảnh báo cho cluster?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPTCloud cung cấp sản phẩm FMON giúp bạn giám sát hiệu năng và cấu hình cảnh báo cho Kubernetes cluster. Ngoài ra, FMON cung cấp logging & tracing dễ dàng tích hợp với FKE."
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