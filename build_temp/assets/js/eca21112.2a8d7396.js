"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[421],{

/***/ 97088
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_cluster_management_cluster_autoscale_md_eca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-cluster-management-cluster-autoscale-md-eca.json
const site_docs_managed_fpt_kubernetes_engine_cluster_management_cluster_autoscale_md_eca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/cluster-management/cluster-autoscale","title":"2. Managed – FPT Kubernetes Engine","description":"Cluster Autoscale","source":"@site/docs/managed-fpt-kubernetes-engine/cluster-management/cluster-autoscale.md","sourceDirName":"managed-fpt-kubernetes-engine/cluster-management","slug":"/managed-fpt-kubernetes-engine/cluster-management/cluster-autoscale","permalink":"/managed-fpt-kubernetes-engine/cluster-management/cluster-autoscale","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Bật tính năng Cluster Autoscale","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cluster-autoscale","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý Cluster","permalink":"/managed-fpt-kubernetes-engine/cluster-management/"},"next":{"title":"Microservices architecture on fke","permalink":"/managed-fpt-kubernetes-engine/cluster-management/microservices-architecture-on-fke"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/cluster-management/cluster-autoscale.md


const frontMatter = {
	sidebar_label: 'Bật tính năng Cluster Autoscale',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cluster-autoscale',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "Bật tính năng Cluster Autoscale",
  "id": "bật-tính-năng-cluster-autoscale",
  "level": 2
}, {
  "value": "Tắt tính năng Cluster Autoscale",
  "id": "tắt-tính-năng-cluster-autoscale",
  "level": 2
}, {
  "value": "Thay đổi cấu hình Cluster Autoscale",
  "id": "thay-đổi-cấu-hình-cluster-autoscale",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cluster Autoscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Cluster Autoscale của sản phẩm Managed FKE giúp tự động scale thêm các worker mới trong một worker pool nếu như ứng dụng chạy trên worker pool đó không được đáp ứng đủ tài nguyên (CPU, Memory) bởi các worker nodes của pool đó. Khi đó, những pod bị pending do node không đủ tài nguyên sẽ được phục vụ bởi các worker nodes mới sau khi scale lên. Tính năng Cluster Autoscale cũng tự động xóa các nodes không sử dụng đủ lượng utilization (mặc định là 50%) của node đó. Chú ý số lượng worker nodes của một worker pool chỉ được scale trong khoảng min-max được người dùng định nghĩa sẵn trên FPTCloud Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bật-tính-năng-cluster-autoscale",
      children: "Bật tính năng Cluster Autoscale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " muốn bật tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster Autoscale"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558675)/* ["default"] */ .A) + "",
        width: "688",
        height: "326"
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
        src: (__webpack_require__(991255)/* ["default"] */ .A) + "",
        width: "602",
        height: "285"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Điều chỉnh số lượng worker min-max theo sizing mà người dùng lựa chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(424572)/* ["default"] */ .A) + "",
        width: "684",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Khi số lượng worker max lớn hơn worker min, tính năng cluster autoscale sẽ tự động được bật."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Kiểm tra lại thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để thực hiện bật tính năng Cluster AutoScale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(444624)/* ["default"] */ .A) + "",
        width: "683",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tắt-tính-năng-cluster-autoscale",
      children: "Tắt tính năng Cluster Autoscale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " muốn tắt tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster Autoscale"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(842709)/* ["default"] */ .A) + "",
        width: "685",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodes Pool"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit workers"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127071)/* ["default"] */ .A) + "",
        width: "685",
        height: "325"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Điều chỉnh số lượng worker min-max bằng nhau."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862343)/* ["default"] */ .A) + "",
        width: "684",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Khi số lượng worker min và worker max trong một worker pool bằng nhau, tính năng cluster autoscale tự động bị tắt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Kiểm tra lại thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426174)/* ["default"] */ .A) + "",
        width: "685",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thay-đổi-cấu-hình-cluster-autoscale",
      children: "Thay đổi cấu hình Cluster Autoscale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " muốn tùy chỉnh cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster Autoscale"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109736)/* ["default"] */ .A) + "",
        width: "688",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodes Pool"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit workers"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664831)/* ["default"] */ .A) + "",
        width: "686",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Điều chỉnh số lượng worker theo nhu cầu sử dụng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48585)/* ["default"] */ .A) + "",
        width: "688",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Kiểm tra lại thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840975)/* ["default"] */ .A) + "",
        width: "685",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./nang-cap-k8s-version",
        children: " Previous Nâng cấp K8S version "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./trien-khai-ung-dung-tren-worker-pool",
        children: " Next Triển khai ứng dụng trên worker pool "
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

/***/ 444624
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/173646fdec84-Picture47-474ede4dee2f52b7cdbf7c8d6d299d48.png");

/***/ },

/***/ 109736
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/39af7576965e-Picture52-cce03f98205131a248460d4847d02060.png");

/***/ },

/***/ 664831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4178c5add978-Picture53-5e72833423a589fed0c80ebcaee080ee.png");

/***/ },

/***/ 127071
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44ab28e432a2-Picture49-41dcb586d238c4961964f37f82b89a4e.png");

/***/ },

/***/ 558675
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6cc619685477-Picture44-a26fdbf63edf9f78cd809e05612a6aa3.png");

/***/ },

/***/ 862343
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/840f09a1dd8e-Picture50-1d18c1a3eb7bb5d8cc607e04d8b41537.png");

/***/ },

/***/ 424572
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/88c23a885ad7-Picture46-1b6e54d5583541dc0f6984633b4b92ff.png");

/***/ },

/***/ 48585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/969dcae3f969-Picture54-b7a0232174ee3415075587f22822ec4c.png");

/***/ },

/***/ 842709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a1ae1266b1e4-Picture48-1f415bdbc8cabdf54f4cf97c3c12ddbe.png");

/***/ },

/***/ 426174
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e16b0e3d1a5c-Picture51-beb2d81ab512af2a094bcadb8003a99d.png");

/***/ },

/***/ 840975
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f877e43a77f6-Picture55-79d4adc94612fe736c93f995c4403c11.png");

/***/ },

/***/ 991255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f8bef870dfed-Picture8-3-7842093e2bcbe95d72c3c4a71fa27ff0.png");

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