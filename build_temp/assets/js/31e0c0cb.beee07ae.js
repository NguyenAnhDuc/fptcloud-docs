"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37678],{

/***/ 525148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_affinity_anti_affinity_add_instance_instance_group_md_31e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-affinity-anti-affinity-add-instance-instance-group-md-31e.json
const site_docs_affinity_anti_affinity_add_instance_instance_group_md_31e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"affinity-anti-affinity/add-instance-instance-group","title":"2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity","description":"Gắn máy ảo vào Instance Group","source":"@site/docs/affinity-anti-affinity/add-instance-instance-group.md","sourceDirName":"affinity-anti-affinity","slug":"/affinity-anti-affinity/add-instance-instance-group","permalink":"/affinity-anti-affinity/add-instance-instance-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Add instance instance group","title":"2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity","source":"https://fptcloud.com/documents/affinity-anti-affinity/?doc=add-instance-instance-group","parent":"https://fptcloud.com/documents/affinity-anti-affinity","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"View detail instance","permalink":"/auto-schedule-to-on-off-instance/view-detail-instance"},"next":{"title":"Create instance group","permalink":"/affinity-anti-affinity/create-instance-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/affinity-anti-affinity/add-instance-instance-group.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Add instance instance group',
	title: '2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity',
	source: 'https://fptcloud.com/documents/affinity-anti-affinity/?doc=add-instance-instance-group',
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
      children: "Gắn máy ảo vào Instance Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi bạn khởi chạy một máy ảo, bạn có thể truyền thông tin về nhóm máy chủ như một gợi ý để thực hiện việc đặt máy ảo theo chính sách mong muốn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý là mỗi instance group chỉ có thể gắn với tối đa 10 instances."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện điều này, bạn cần tiến hành các thao tác đơn giản sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " của instance group bạn muốn đặt máy ảo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(106170)/* ["default"] */ .A) + "",
        width: "940",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), ". Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. Nếu thành công, thông tin về instance group sẽ được hiển thị ở trang Instance Detail. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(616326)/* ["default"] */ .A) + "",
        width: "940",
        height: "218"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-instance-group",
        children: " Previous Xóa một Instance Group "
      })
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

/***/ 616326
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8edf7a7bfa22-image-1705025498532-c2fb1d32f28a6854748de20a6461549f.png");

/***/ },

/***/ 106170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fa794fe3e413-image-1705025405311-77cdf26e1afc15e851d6e98f3f7e1926.png");

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