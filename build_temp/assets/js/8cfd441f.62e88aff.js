"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[61843],{

/***/ 939797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_gpu_la_gi_md_8cf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-gpu-la-gi-md-8cf.json
const site_docs_managed_fpt_kubernetes_engine_gpu_la_gi_md_8cf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/gpu-la-gi","title":"2. Managed – FPT Kubernetes Engine","description":"GPU là gì?","source":"@site/docs/managed-fpt-kubernetes-engine/gpu-la-gi.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/gpu-la-gi","permalink":"/managed-fpt-kubernetes-engine/gpu-la-gi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Gpu la gi","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=gpu-la-gi","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Gioi thieu chung ve quy trinh quan ly version","permalink":"/managed-fpt-kubernetes-engine/gioi-thieu-chung-ve-quy-trinh-quan-ly-version"},"next":{"title":"Gpu sharing","permalink":"/managed-fpt-kubernetes-engine/gpu-sharing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/gpu-la-gi.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Gpu la gi',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=gpu-la-gi',
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
    p: "p",
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
      children: "GPU là gì?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU là gì?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graphics processing units – GPU, là bộ vi xử lý sử dụng khả năng xử lý song song và băng thông bộ nhớ cao để thực hiện các tác vụ chuyên biệt như tăng tốc tạo đồ họa, tính toán đồng thời. GPU trở nên thiết yếu đối với các ứng dụng như trò chơi điện tử, xử lý hình ảnh 3D, chỉnh sửa video, khai thác tiền điện tử và học máy. GPU nhanh hơn và hiệu quả hơn CPU nhiều trong việc xử lý các phép tính toán số lượng lớn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đặt vấn đề: Nhu cầu sử dụng GPU trên Kubernetes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cùng với sự phát triển của công nghệ, đặc biệt là các mô hình học sâu (Deep Learning), nhu cầu sử dụng GPU ngày càng tăng cao khi các hãng công nghệ đầu tư mạnh vào AI. Với sự ra đời của ChatGPT và các công cụ xử lý ngôn ngữ/hình ảnh/video khác chủ yếu dựa vào khả năng xử lý của AI, GPU cho thấy thế mạnh của mình, đây cũng chính là lý do tại sao các công ty công nghệ lớn muốn sử dụng ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.thegioimaychu.vn/blog/thuat-ngu/gpu/?utm_source=tmblog&utm_medium=inlinekwd",
        children: "GPU"
      }), " để đáp ứng các yêu cầu AI đang phát triển của họ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU nhanh hơn nhiều so với CPU trong Deep Learning, vì giai đoạn training tốn nhiều tài nguyên. Trong kiến trúc của GPU, vi xử lý có nhiều core và băng thông bộ nhớ cao nên quá trình deep learning hiệu quả hơn nhiều so với CPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết hợp với GPU, Kubernetes là giải pháp phù hợp cho AI, ngày càng có nhiều data scientists lựa chọn Kubernetes để tối ưu hóa việc đào tạo và triển khai mô hình AI, bởi các lý do sau: tự động triển khai, dễ dàng mở rộng quy mô, cộng đồng phát triển đông đảo và hỗ trợ nhiều tính năng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./microservices-architecture-on-fke",
        children: " Previous Microservices Architecture on FKE "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tai-sao-nen-su-dung-gpu-tren-cloud",
        children: " Next Tại sao nên sử dụng GPU trên Cloud?  "
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