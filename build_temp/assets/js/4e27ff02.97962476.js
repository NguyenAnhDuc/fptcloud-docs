"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[4157],{

/***/ 82583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_gpu_tai_sao_nen_su_dung_gpu_tren_kubernetes_md_4e2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-gpu-tai-sao-nen-su-dung-gpu-tren-kubernetes-md-4e2.json
const site_docs_managed_fpt_kubernetes_engine_gpu_tai_sao_nen_su_dung_gpu_tren_kubernetes_md_4e2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/gpu/tai-sao-nen-su-dung-gpu-tren-kubernetes","title":"2. Managed – FPT Kubernetes Engine","description":"Tại sao nên sử dụng GPU Kubernetes?","source":"@site/docs/managed-fpt-kubernetes-engine/gpu/tai-sao-nen-su-dung-gpu-tren-kubernetes.md","sourceDirName":"managed-fpt-kubernetes-engine/gpu","slug":"/managed-fpt-kubernetes-engine/gpu/tai-sao-nen-su-dung-gpu-tren-kubernetes","permalink":"/managed-fpt-kubernetes-engine/gpu/tai-sao-nen-su-dung-gpu-tren-kubernetes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tai sao nen su dung gpu tren kubernetes","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tai-sao-nen-su-dung-gpu-tren-kubernetes","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tai sao nen su dung gpu tren cloud","permalink":"/managed-fpt-kubernetes-engine/gpu/tai-sao-nen-su-dung-gpu-tren-cloud"},"next":{"title":"Bảo mật & Phiên bản","permalink":"/managed-fpt-kubernetes-engine/security-version/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/gpu/tai-sao-nen-su-dung-gpu-tren-kubernetes.md


const frontMatter = {
	sidebar_label: 'Tai sao nen su dung gpu tren kubernetes',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tai-sao-nen-su-dung-gpu-tren-kubernetes',
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
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
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
      children: "Tại sao nên sử dụng GPU Kubernetes?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes hiện tại đã hỗ trợ GPU, giúp dễ dàng cấu hình và sử dụng tài nguyên GPU để tăng tốc xử lý cho các workloads như data science, machine learning và đặc biệt là deep learning. Kubernetes cung cấp GPU như một loại tài nguyên, device plug-ins cho phép Pod truy cập vào các tính năng phần cứng chuyên dụng như GPU và hiển thị chúng dưới dạng tài nguyên có thể lập lịch (schedule). GPU kế thừa được toàn bộ ưu điểm của K8s :"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "– Containerization: Container có tính lighweith không cần hệ điều hành đầy đủ và thay vào đó chạy với shared OS kernel, nên các container nhỏ gọn, nhanh và di động hơn so với các máy ảo truyền thống."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "– Microservices: Phù hợp với các ứng dụng sử dụng kiến trúc microservices, kubernetes điều phối và tự động hóa vận hành workload resouces. Hầu hết các dự án ML được viết bằng các ngôn ngữ lập trình như Python hoặc R và các ứng dụng có thể được viết bằng các ngôn ngữ lập trình khác, mô hình Containers-based có vai trò quan trọng trong trường hợp này, developers có thể chạy các thử nghiệm độc lập các ngôn ngữ khác nhau."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "– Autoscaling: Cơ chế tự động mở rộng linh hoạt là một tính năng quan trọng và được nhắc đến nhiều nhất của Kubernetes. Ứng dụng trên Kubernetes có ba khả năng tự động thay đổi quy mô: Horizontal Pod Autoscaler (HPA) sẽ tự động tăng/giảm số lượng các pod có sẵn tùy thuộc vào việc sử dụng tài nguyên, Vertical Pod Autoscaler (VPA) tự động điều chỉnh CPU và bộ nhớ cho các pod hiện có, Cluster Autoscaler tự động mở rộng số lượng các worker node khi các pod không có tài nguyên để khởi tạo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "– Triển khai tự động: Kubernetes cung cấp các giải pháp triển khai tự động , kết hợp với CI/CD việc triển khai mô hình ứng dụng lên các môi trường trở nên rất dễ dàng."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với số lượng ngày càng nhiều ứng dụng và dịch vụ AI, nhu cầu sử dụng GPU trên Kubernetes ngày càng tăng. NVIDIA đã xây dựng library và phần mềm của mình để tối ưu hóa GPU sử dụng trong môi trường container. Kubernetes sử dụng GPU NVIDIA cho phép các cụm mở rộng một cách liền mạch với việc triển khai, bảo trì, lên lịch và vận hành tự động các cotainer GPU trên các worker nodes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tai-sao-nen-su-dung-gpu-tren-cloud",
        children: " Previous Tại sao nên sử dụng GPU trên Cloud?  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu-sharing",
        children: " Next Tính năng GPU Sharing  "
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