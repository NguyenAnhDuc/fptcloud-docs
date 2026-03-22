"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89906],{

/***/ 117343
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_affinity_anti_affinity_delete_instance_group_md_b3f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-affinity-anti-affinity-delete-instance-group-md-b3f.json
const site_docs_affinity_anti_affinity_delete_instance_group_md_b3f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"affinity-anti-affinity/delete-instance-group","title":"2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity","description":"Xóa một Instance Group","source":"@site/docs/affinity-anti-affinity/delete-instance-group.md","sourceDirName":"affinity-anti-affinity","slug":"/affinity-anti-affinity/delete-instance-group","permalink":"/affinity-anti-affinity/delete-instance-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Delete instance group","title":"2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity","source":"https://fptcloud.com/documents/affinity-anti-affinity/?doc=delete-instance-group","parent":"https://fptcloud.com/documents/affinity-anti-affinity","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Create instance group","permalink":"/affinity-anti-affinity/create-instance-group"},"next":{"title":"Quản lý Instance Group với chính sách Affinity & Anti-Affinity","permalink":"/affinity-anti-affinity/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/affinity-anti-affinity/delete-instance-group.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Delete instance group',
	title: '2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity',
	source: 'https://fptcloud.com/documents/affinity-anti-affinity/?doc=delete-instance-group',
	parent: 'https://fptcloud.com/documents/affinity-anti-affinity',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity';

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
        id: "2-quản-lý-instance-group-với-chính-sách-affinity--anti-affinity",
        children: "2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xóa một Instance Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Thao tác này sẽ đồng thời gỡ instance group khỏi các instances đã gắn với nó. Việc xóa instance group này sẽ không thể khôi phục lại được."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(277378)/* ["default"] */ .A) + "",
        width: "939",
        height: "264"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên Instance Group và yêu cầu người dùng xác nhận. Gõ chữ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delete"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete instance group"
      }), " để tiến hành xóa, sau đó hệ thống sẽ xóa hoàn toàn Instance group và các máy ảo đang gắn với nó (nếu có) thì sẽ được giải phóng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(270215)/* ["default"] */ .A) + "",
        width: "505",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./create-instance-group",
        children: " Previous Khởi tạo một Instance Group mới "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./add-instance-instance-group",
        children: " Next Gắn máy ảo vào Instance Group "
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

/***/ 277378
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2af9c584b64b-image-1705025148984-b874fda7451648b29d40058d6204eba7.png");

/***/ },

/***/ 270215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/59abb769e24e-image-1705025187846-7997676c83d1f8cd427de51a25ac81a2.png");

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