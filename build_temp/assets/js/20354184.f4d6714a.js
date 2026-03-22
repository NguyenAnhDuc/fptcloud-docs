"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[34232],{

/***/ 436720
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_gpu_gpu_md_203_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-gpu-gpu-md-203.json
const site_docs_cloud_server_gpu_gpu_md_203_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/gpu/gpu","title":"Quản lý GPU với Portal Console","description":"*","source":"@site/docs/cloud-server/gpu/gpu.md","sourceDirName":"cloud-server/gpu","slug":"/cloud-server/gpu/","permalink":"/cloud-server/gpu/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quản lý GPU với Portal Console","title":"Quản lý GPU với Portal Console","source":"https://fptcloud.com/documents/cloud-server/?doc=GPU","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific","permalink":"/cloud-server/gpu/gpu-specific"},"next":{"title":"Quản lý GPU Server với HPC Portal","permalink":"/cloud-server/gpu/quan-ly-gpu-voi-hpc-portal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/gpu/gpu.md


const frontMatter = {
	sidebar_label: 'Quản lý GPU với Portal Console',
	title: 'Quản lý GPU với Portal Console',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=GPU',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý GPU với Portal Console';

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
        id: "quản-lý-gpu-với-portal-console",
        children: "Quản lý GPU với Portal Console"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• FPT GPU Server là dịch vụ máy chủ ảo triển khai trên FPT Cloud với GPU card chuyên dụng, đem đến khả năng xử lý nhiều tác vụ tính toán cũng như đồ họa phức tạp. Dịch vụ kết hợp hoàn hảo giữa tính linh hoạt của FPT Cloud Server với hiệu năng mạnh mẽ của các dòng GPU Card như NVIDIA Tesla A10, A30, A100, RTX 3090 và 4090 đem đến khả năng xử lý tính toán vượt trội, giúp tăng tốc những ứng dụng trí tuệ nhân tạo (AI), Machine Learning, kết xuất đồ họa, xử lý hình ảnh… • Hiện tại FPT đã hỗ trợ gắn thêm các dòng GPU cao cấp lên máy ảo của khách hàng. Nếu bạn có nhu cầu sử dụng GPU, hoặc có vấn đề kỹ thuật trong quá trình sử dụng, hãy liên hệ ngay với đội ngũ CSKH để được hỗ trợ tốt nhất."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-xoa-may-ao",
        children: " Previous Xóa máy ảo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu-general",
        children: " Next Quản lý GPU với Console Portal "
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