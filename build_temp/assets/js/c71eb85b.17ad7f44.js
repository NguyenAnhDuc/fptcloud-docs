"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[68860],{

/***/ 817904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_chinh_sua_label_taint_cho_worker_group_managed_gpu_cluster_md_c71_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster-md-c71.json
const site_docs_fpt_managed_gpu_cluster_chinh_sua_label_taint_cho_worker_group_managed_gpu_cluster_md_c71_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster","title":"2. Managed GPU Cluster (Kubernetes)","description":"Chỉnh sửa label/taint cho Worker Group","source":"@site/docs/fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster","permalink":"/fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Chinh sua label taint cho worker group managed gpu cluster","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Add them worker group","permalink":"/fpt-managed-gpu-cluster/add-them-worker-group"},"next":{"title":"File storage high performance","permalink":"/fpt-managed-gpu-cluster/file-storage-high-performance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Chinh sua label taint cho worker group managed gpu cluster',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster',
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
      children: "Chỉnh sửa label/taint cho Worker Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Label và Taint là hai cơ chế quan trọng giúp quản lý và phân phối workload hiệu quả trong hệ thống có nhiều Worker Group giúp dễ dàng nhóm các worker theo mục đích sử dụng, hiệu suất, hoặc khu vực địa lý. Managed GPU Cluster hỗ trợ người dùng thêm mới, sửa, xóa label/taint ngay trên Unify Portal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Infratstucture"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed GPU Cluster"
      }), " hệ thống sẽ hiển thị trang Managed GPU Cluster Management. Chọn Cluster muốn chỉnh sửa Label/Taint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210970)/* ["default"] */ .A) + "",
        width: "1568",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Workers"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(781003)/* ["default"] */ .A) + "",
        width: "1572",
        height: "704"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập Labels và Taints muốn thêm vào Worker Group và click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171187)/* ["default"] */ .A) + "",
        width: "602",
        height: "86"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24858)/* ["default"] */ .A) + "",
        width: "602",
        height: "80"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(651805)/* ["default"] */ .A) + "",
        width: "1591",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình chỉnh sửa Labels và Taints sẽ thực hiện trong vòng vài phút, trạng thái của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), " , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-manual-scale-managed-gpu-cluster",
        children: " Previous Tính năng Manual Scale "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-chuyen-worker-base-managed-gpu-cluster",
        children: " Next Tính năng chuyển Worker Group base "
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

/***/ 24858
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 210970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2bafdf1700f1-24-6f6ce31cb5baa1768ece3fc0fb2992b5.png");

/***/ },

/***/ 781003
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/62db851269af-25-5c4f3813ac64c652b98602b1a517ad5d.png");

/***/ },

/***/ 171187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAABWCAYAAAAXBji4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABTfSURBVHhe7d15cBRXYgbwrUqlKlXJf9mESqXyT7JOancrSSXxH7u2sxVf8dreeJfdxNnYu2aT2NjYxtjmMvgI+OAyAsR9SEiAkJBAJ4dAQtLoPkCgA0kzQkI3utGJbvRFX9MNwyCBkKZhEN+v6hXTPa9fj6Cb/vRe95vvwM21a9dw9epV408RERERmTpmKgUtERERERsoaImIiIjYREFLRERExCYKWiIiIiI2UdASERERsYmCloiIiIhNFLREREREbKKgJSIiImITBS0RERERmyhoiYiIiNhEQUtERETEJgpaIiIiIjZR0BIRERGxiYKWiIiIiE0UtERERERsoqAlIiIiYhMFLRERERGbKGiJiIiI2ERBS0RERMQmCloiIiIiNlHQEhEREbGJgpaIiIiITRS0RERERGzilaA1MjKCkpISnD59GklJSbcUrmNxuVxm7fENNxTgvY+/wZGCFnPNxM4lhOE3c4NQN2CuuIPqzCi8vmQHyjpGzDUiIiIi94dXglZbWxsOHTqErKws5OXl3Va4PiIiAhUVFeYWtxssO4E//+tnseJElblmYke3foLf/+4HcPWbK+7gXOhX+L0fzoHj8rC5RkREROT+8ErQampqwuHDh82l8RUVFRl1urq6zDW3GixPxA8e/znWJNaYa67raXJi7aKF+MkLv8XCTTHoHh6FY/9qfPcvXsPcBR/hn386FwGOi0bdke4qbFi2AE/+5N/x8fqjuDr2I5RF++GPf/wu8q6MovNiNj6b+w5efOltfLo9EVf6NDwqIiIi9vFK0GpubjZC1MDAxGN5bC85ORkpKSkYHr69d2n8oNWP4KX/g3990x/pKdF48vsvYV2EC1nRG/BHs36O1cHR2LhgLr739wvhbOtA8KL38fi/rUDc0Sj89MnZ+CSqApXxW/AnT32I4sYGLP71bPx43m5kph3HG798CwdyLpv7EREREfG++xa0qL29HaGhoaisrDTX3DR+0BpFT3MVMsbCWUxsOJ577BdY4peDlOhvMeuvlqKRVWoy8Pysl7En7iR+9czzePq9IByPd+C1J36G5984gvzEHZj15AcoautE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");

/***/ },

/***/ 651805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8da95fc4002a-28-a14a8af2218246c0b24ba0e65935b7c4.png");

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