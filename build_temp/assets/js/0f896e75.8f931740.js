"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[5627],{

/***/ 350149
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_tang_them_worker_group_su_dung_gpu_md_0f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-tang-them-worker-group-su-dung-gpu-md-0f8.json
const site_docs_fpt_kubernetes_engine_with_gpu_tang_them_worker_group_su_dung_gpu_md_0f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu","title":"2. FPT Kubernetes Engine with GPU","description":"Tăng thêm Worker Group sử dụng GPU","source":"@site/docs/fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu","permalink":"/fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tang them worker group su dung gpu","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=tang-them-worker-group-su-dung-gpu","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"FPT Kubernetes Engine with GPU","permalink":"/fpt-kubernetes-engine-with-gpu/"},"next":{"title":"Thay doi worker group su sung gpu","permalink":"/fpt-kubernetes-engine-with-gpu/thay-doi-worker-group-su-sung-gpu"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/tang-them-worker-group-su-dung-gpu.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tang them worker group su dung gpu',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=tang-them-worker-group-su-dung-gpu',
	parent: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Kubernetes Engine with GPU';

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
        id: "2-fpt-kubernetes-engine-with-gpu",
        children: "2. FPT Kubernetes Engine with GPU"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tăng thêm Worker Group sử dụng GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình Worker Group mới mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node tăng thêm mong muốn."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần thay đổi, mục Node Pools, bấm vào “Edit Workers”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(727913)/* ["default"] */ .A) + "",
        width: "624",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Bấm vào Add worker group để tạo thêm Worker Group"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537935)/* ["default"] */ .A) + "",
        width: "624",
        height: "510"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài các thông tin khởi tạo cho Kubernetes thông thường, cần chọn cấu hình cho GPU trong Worker Group:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn lnstance type: GPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn GPU type (A30, A100..)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn cấu hình GPU sharing (None/Single/Mixed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn cấu hình type GPU (CPU/RAM/GPU RAM)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206880)/* ["default"] */ .A) + "",
        width: "624",
        height: "613"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Kiểm tra lại các thông tin khởi tạo và Ấn Save."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(883696)/* ["default"] */ .A) + "",
        width: "624",
        height: "510"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Theo dõi trạng thái khởi tạo thêm Worker Group vào cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-cac-che-do-gpu-sharing",
        children: " Previous Hướng dẫn sử dụng các chế độ GPU sharing  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./driver-installation-self-install",
        children: " Next Hướng dẫn cài đặt GPU Driver trên Kubernetes "
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

/***/ 537935
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3779376bfec1-Picture5-2-15dbc75b4f0072c75dbb64277cfb49f3.png");

/***/ },

/***/ 206880
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4a875296dc55-Picture6-2-eed5d23295f6f2162fc144aa75d0634b.png");

/***/ },

/***/ 727913
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aa3ce5ce6665-Picture4-3-a086ee6469ff5c903d838af115ee885c.png");

/***/ },

/***/ 883696
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef376286b947-Picture7-1-550f55da1373bb21ab54b83ef84fd125.png");

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