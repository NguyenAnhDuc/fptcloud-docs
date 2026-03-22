"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37103],{

/***/ 69593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_scale_worker_nodes_md_d3d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-scale-worker-nodes-md-d3d.json
const site_docs_dedicated_fpt_kubernetes_engine_scale_worker_nodes_md_d3d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/scale-worker-nodes","title":"2. Dedicated – FPT Kubernetes Engine","description":"Scale worker nodes","source":"@site/docs/dedicated-fpt-kubernetes-engine/scale-worker-nodes.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/scale-worker-nodes","permalink":"/dedicated-fpt-kubernetes-engine/scale-worker-nodes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Scale worker nodes","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=scale-worker-nodes","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Retry timeout rule","permalink":"/dedicated-fpt-kubernetes-engine/retry-timeout-rule"},"next":{"title":"A. Public LB","permalink":"/dedicated-fpt-kubernetes-engine/service-type-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/scale-worker-nodes.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Scale worker nodes',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=scale-worker-nodes',
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
    img: "img",
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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scale worker nodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771419)/* ["default"] */ .A) + "",
        width: "1377",
        height: "663"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn Cluster muốn thực hiện scale worker nodes trên danh sách."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(559747)/* ["default"] */ .A) + "",
        width: "1377",
        height: "663"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto Scale"
      }), " chọn icon ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(493842)/* ["default"] */ .A) + "",
        width: "22",
        height: "22"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290931)/* ["default"] */ .A) + "",
        width: "627",
        height: "396"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 4: Màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto Scale Nodes Of Cluster"
      }), " hiện ra. Người dùng nhập các trường thông tin yêu cầu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Min node/ Max node: Nhập số lượng worker nodes muốn thêm/bớt."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363423)/* ["default"] */ .A) + "",
        width: "442",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quá trình Scale Cluster sẽ thực hiện, trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./thay-doi-cau-hinh-k8s-cluster",
        children: " Previous Thay đổi cấu hình K8s Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./thay-doi-flavor-cau-hinh-nodes",
        children: " Next Thay đổi Flavor (cấu hình) Nodes "
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

/***/ 290931
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/042905c44e54-Picture33-aaf2b2184361c1e6d1d8be63cf2f055d.png");

/***/ },

/***/ 363423
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/53f1906b3968-Picture34-8f98a0efdb972d0943a4a76bffc48d26.png");

/***/ },

/***/ 493842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeUExURf///+7u7rq6unV1daioqNzc3IaGhpiYmNTU1AAAAFZ9FNIAAAAKdFJOU////////////wCyzCzPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAfklEQVQoU4WR2w7AIAhDAUX//4/HpWZsC9l5Ko1CRfqBxWAUNzIMQXEz3Z4oAp1MutweSjwVtjlpGq7Tja6VnIBii5w7HohTxhFczJzb1A7lY44kNY3EfvwkaexXkwzYjIQ91jNg95xoeDCNx5dVrbqq4LvYICaga6H5tArRBf/hAwihrwAlAAAAAElFTkSuQmCC");

/***/ },

/***/ 771419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c657a04c7116-Picture30-343b0fc8c342767a650f69b382fa2f8a.png");

/***/ },

/***/ 559747
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3d03b46eaeb-Picture31-454b5ef6feea380629dd0c4cbc4c567f.png");

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