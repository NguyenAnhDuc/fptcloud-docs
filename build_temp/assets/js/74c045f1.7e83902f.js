"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[13405],{

/***/ 244195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_trien_khai_ung_dung_tren_worker_pool_md_74c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-trien-khai-ung-dung-tren-worker-pool-md-74c.json
const site_docs_managed_fpt_kubernetes_engine_trien_khai_ung_dung_tren_worker_pool_md_74c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool","title":"2. Managed – FPT Kubernetes Engine","description":"Triển khai ứng dụng trên worker pool","source":"@site/docs/managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool","permalink":"/managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình file manifest để triển khai ứng dụng","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=trien-khai-ung-dung-tren-worker-pool","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tinh nang workload scan","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-workload-scan"},"next":{"title":"Truy cap thong tin chi tiet cua cluster","permalink":"/managed-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình file manifest để triển khai ứng dụng',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=trien-khai-ung-dung-tren-worker-pool',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "Cấu hình file manifest để triển khai ứng dụng",
  "id": "cấu-hình-file-manifest-để-triển-khai-ứng-dụng",
  "level": 2
}, {
  "value": "Triển khai ứng dụng",
  "id": "triển-khai-ứng-dụng",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
      children: "Triển khai ứng dụng trên worker pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sản phẩm Managed FKE quản lý worker theo các worker pool, hỗ trợ cho khách hàng thuận tiện triển khai các ứng dụng trên đó và không cần quan tâm đến vấn đề scale tài nguyên."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-file-manifest-để-triển-khai-ứng-dụng",
      children: "Cấu hình file manifest để triển khai ứng dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ triển khai ứng dụng trên cluster có 02 worker pools:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 30",
        src: (__webpack_require__(889588)/* ["default"] */ .A) + "",
        width: "604",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi worker pool đang có một worker node:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 31",
        src: (__webpack_require__(130669)/* ["default"] */ .A) + "",
        width: "846",
        height: "85"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các worker nodes được đánh các label để phục vụ cho việc phân biệt node và dễ dàng triển khai ứng dụng lên các worker node có chung label:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 32",
        src: (__webpack_require__(430010)/* ["default"] */ .A) + "",
        width: "921",
        height: "440"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các worker nodes thuộc worker pool ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "worker-1zx5wqdu"
        })
      }), " được đánh label ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "worker.fptcloud/pool=worker-1zx5wqdu"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể copy tên của worker pool khi ấn vào detail của cấu hình worker pool:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 33",
        src: (__webpack_require__(378830)/* ["default"] */ .A) + "",
        width: "1024",
        height: "558"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi sử dụng các resources để triển khai ứng dụng trong Kubernetes (Pod, Deployment, StatefulSet, DaemonSet, Replicaset), người dùng có thể thêm Node Affinity Rule hoặc Node Selector trong phần Specification của file cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-test\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n        resources:\n          requests:\n            memory: \"700Mi\"\n            cpu: \"800m\"\n          limits:\n            memory: \"900Mi\"\n            cpu: \"900m\"\n        affinity:\n          nodeAffinity:\n            requiredDuringSchedulingIgnoredDuringExecution:\n              nodeSelectorTerms:\n              - matchExpressions:\n                - key: worker.fptcloud/pool\n                  operator: In\n                  values:\n                  - worker-1zx5wqdu\n\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-test\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n        resources:\n          requests:\n            memory: \"700Mi\"\n            cpu: \"800m\"\n          limits:\n            memory: \"900Mi\"\n            cpu: \"900m\"\n        nodeSelector:\n          worker.fptcloud/pool: worker-1zx5wqdu\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó, giá trị điền vào phần values trong hình thứ nhất (sử dụng Node Affinity Rule) và giá trị phần nodeSelector là tên của worker pool mà người dung muốn triển khai ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triển-khai-ứng-dụng",
      children: "Triển khai ứng dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi triển khai ứng dụng nginx sử dụng file manifest."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 36",
        src: (__webpack_require__(803021)/* ["default"] */ .A) + "",
        width: "726",
        height: "86"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi đó, 1 pod bị pending do thiếu tài nguyên của worker nodes trong pool để chạy pod:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 37",
        src: (__webpack_require__(450659)/* ["default"] */ .A) + "",
        width: "1024",
        height: "88"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thành phần Cluster Autoscaler nằm ở phía quản trị của FPT Cloud sẽ thực hiện hành động scale thêm worker node trong pool đó để phục vụ pod nginx bị pending."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide M FKE 38",
        src: (__webpack_require__(467416)/* ["default"] */ .A) + "",
        width: "850",
        height: "273"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi 1 worker nodes được thêm vào trong worker pool, pod nginx khi trước bị Pending bây giờ đã chuyển sang trạng thái Running."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi scale ứng dụng sử dụng ít pod hơn, tài nguyên trống của các worker nodes sẽ tăng lên, cho đến khi lượng sử dụng tài nguyên về CPU, Memory so với tài nguyên tối đã của node đó giảm xuống dưới 50% trong khoảng thời gian 10 phút, node đó sẽ được tự động xóa khỏi worker pool, tiết kiệm chi phí cho người dùng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cluster-autoscale",
        children: " Previous Cluster Autoscale "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./scale-in-chi-dinh-node",
        children: " Next Tính năng scale in chỉ định node trong cluster "
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

/***/ 467416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1408a3cf7edd-Userguide-M-FKE-38-39c016807add955e17878266279e3bd9.png");

/***/ },

/***/ 803021
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 430010
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7a9414e63d80-Userguide-M-FKE-32-7151963bae4220428a00a8e50069d35a.png");

/***/ },

/***/ 130669
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/80027e2ebdfa-Userguide-M-FKE-31-81a0f7046c43fb659cca7e31ff76fbd0.png");

/***/ },

/***/ 378830
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad024fb29951-Userguide-M-FKE-33-1024x558-8d4a059bc6fe2da3bd8927d9d5ce1abd.png");

/***/ },

/***/ 450659
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cd236bc87141-Userguide-M-FKE-37-1024x88-76af5d5b2d4bf69363763410bcff3f2e.png");

/***/ },

/***/ 889588
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3f4045c2b5d-Userguide-M-FKE-30-4b2570012711bb4bf62676c8e6cab708.png");

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