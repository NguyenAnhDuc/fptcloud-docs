"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[40139],{

/***/ 966101
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_scale_in_chi_dinh_node_md_54e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-scale-in-chi-dinh-node-md-54e.json
const site_docs_managed_fpt_kubernetes_engine_scale_in_chi_dinh_node_md_54e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/scale-in-chi-dinh-node","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng scale in chỉ định node trong cluster","source":"@site/docs/managed-fpt-kubernetes-engine/scale-in-chi-dinh-node.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/scale-in-chi-dinh-node","permalink":"/managed-fpt-kubernetes-engine/scale-in-chi-dinh-node","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Scale in chi dinh node","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=scale-in-chi-dinh-node","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Restore persistent volume tren k8s","permalink":"/managed-fpt-kubernetes-engine/restore-persistent-volume-tren-k8s"},"next":{"title":"Service type kb layer7 lbv2","permalink":"/managed-fpt-kubernetes-engine/service-type-kb-layer7-lbv2"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/scale-in-chi-dinh-node.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Scale in chi dinh node',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=scale-in-chi-dinh-node',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng scale in chỉ định node trong cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "I. Giới thiệu chung"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tài liệu này hướng dẫn quy trình cấu hình để chỉ định thứ tự ưu tiên của node khi manual scale in cluster. Các node trong cluster sẽ có thứ tự ưu tiên về độ quan trọng tăng dần từ 1 đến 3. Mặc định tất cả các node trong cluster có độ ưu tiên bằng nhau và bằng 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình giảm số lượng node (scale down), khi được kích hoạt qua MachineDeployment hoặc MachineSet, MCM (Machine Controller Manager) ưu tiên xóa các worker node có độ ưu tiên thấp nhất. Quản trị viên có thể giảm độ ưu tiên của các worker node cụ thể bằng cách thay đổi giá trị độ ưu tiên này xuống còn 1. Sau đó, khi tiến hành scale down trong các lần tiếp theo, MachineDeployment sẽ ưu tiên xóa các worker node có độ ưu tiên thấp nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "II. Các bước thiết lập"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Thực hiện đánh annotation cho node muốn xóa như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl annotate no  worker.fptcloud.com/nodepriority=1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(90069)/* ["default"] */ .A) + "",
        width: "1058",
        height: "114"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Sau đó thực hiện manual scale down worker group trên portal bằng việc điều chỉnh min-max node trong worker group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(391675)/* ["default"] */ .A) + "",
        width: "1918",
        height: "911"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(493586)/* ["default"] */ .A) + "",
        width: "1908",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi điều chỉnh min-max node hệ thống sẽ thực hiện scale-in đúng node đã được chỉ định. Quá trình scale-in sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), ". Cluster vẫn hoạt động bình thường."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(849530)/* ["default"] */ .A) + "",
        width: "1909",
        height: "911"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554282)/* ["default"] */ .A) + "",
        width: "1493",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có thể đánh annotation worker.fptcloud.com/nodepriority=1 cho nhiều node trong trường hợp cần scale down chỉ định nhiều node"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: Tính năng này không hỗ trợ trong trường hợp worker node được scale in bởi cluster auto scaler."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./trien-khai-ung-dung-tren-worker-pool",
        children: " Previous Triển khai ứng dụng trên worker pool "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./service-type-load-balancer",
        children: " Next Service Type Load-Balancer "
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

/***/ 391675
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0bcd57740cbd-Screenshot_2-2-95d77e67a1f83b8ca1554bfdabb255a8.png");

/***/ },

/***/ 493586
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27090c5d5881-Screenshot_3-1-897053835600a84e4337fcde5822d102.png");

/***/ },

/***/ 90069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 849530
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2b9a2dc4f86f-Screenshot_4-1-986c4dc5103d456f1899b82ff5568af7.png");

/***/ },

/***/ 554282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4b366a9b6f3f-Screenshot_5-1-98ab0b9f763ef73b480c21fd1766ff9f.png");

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