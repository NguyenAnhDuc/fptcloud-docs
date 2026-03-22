"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[59040],{

/***/ 677967
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_add_them_worker_group_md_8bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-add-them-worker-group-md-8bb.json
const site_docs_fpt_managed_gpu_cluster_add_them_worker_group_md_8bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/add-them-worker-group","title":"2. Managed GPU Cluster (Kubernetes)","description":"Add thêm Worker Group","source":"@site/docs/fpt-managed-gpu-cluster/add-them-worker-group.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/add-them-worker-group","permalink":"/fpt-managed-gpu-cluster/add-them-worker-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Add them worker group","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=add-them-worker-group","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Vgpu for container","permalink":"/fpt-managed-gpu-cluster/gpu-workload/vgpu-for-container"},"next":{"title":"Chinh sua label taint cho worker group managed gpu cluster","permalink":"/fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/add-them-worker-group.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Add them worker group',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=add-them-worker-group',
	parent: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed GPU Cluster (Kubernetes)';

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
        id: "2-managed-gpu-cluster-kubernetes",
        children: "2. Managed GPU Cluster (Kubernetes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add thêm Worker Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Managed GPU Cluster cho phép người dùng add thêm worker group vào cụm cluster theo nhu cầu sử dụng. Để add thêm worker khách hàng có thể thao tác trên portal như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Infrastructure"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed GPU Cluster"
      }), " hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed GPU Management"
      }), ". Chọn Cluster muốn thêm Worker Group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56807)/* ["default"] */ .A) + "",
        width: "1554",
        height: "693"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Workers"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13463)/* ["default"] */ .A) + "",
        width: "1919",
        height: "907"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Worker Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417100)/* ["default"] */ .A) + "",
        width: "1559",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Nhập các trường thông tin theo yêu cầu và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147892)/* ["default"] */ .A) + "",
        width: "1566",
        height: "714"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Group Name"
      }), " : Đặt tên cho Worker Group để phân biệt các Worker Group với nhau"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Container Runtime"
      }), " : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Flavor"
      }), " : Flavor resource của Worker GPU"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Number of Server"
      }), " : Số Metal Cloud Server được tạo ra để chạy Worker trong Cluster"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Label"
      }), " : Đánh Label cho Worker Group"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Taint"
      }), " : Đánh Taint cho Worker Group"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Quá trình thêm mới Cluster sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), ". Cluster vẫn hoạt động bình thường khi thực hiện thêm Worker Group mới."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./thay-doi-cau-hinh-k8s",
        children: " Previous Thay đổi cấu hình K8S Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-manual-scale-managed-gpu-cluster",
        children: " Next Tính năng Manual Scale "
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

/***/ 13463
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13f798d70e7e-18-20e33b0493def014cdc0ee85dfc74997.png");

/***/ },

/***/ 417100
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/437d9b852b53-19-94b391d2cedf68cfb6bdd9374b8bf8db.png");

/***/ },

/***/ 56807
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/502dd1f384f2-17-2708e07fc3092a27b47f696b6595a463.png");

/***/ },

/***/ 147892
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d9c3a1fa888d-20-b7237281394903be034d422dd2b8b429.png");

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