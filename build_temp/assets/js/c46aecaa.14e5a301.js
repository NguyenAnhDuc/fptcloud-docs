"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[8755],{

/***/ 903808
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_auto_schedule_to_on_off_instance_attach_schedule_to_instance_md_c46_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-auto-schedule-to-on-off-instance-attach-schedule-to-instance-md-c46.json
const site_docs_auto_schedule_to_on_off_instance_attach_schedule_to_instance_md_c46_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"auto-schedule-to-on-off-instance/attach-schedule-to-instance","title":"2. Auto Schedule To On-Off Instance","description":"Gắn một hoặc nhiều máy ảo vào instance schedule","source":"@site/docs/auto-schedule-to-on-off-instance/attach-schedule-to-instance.md","sourceDirName":"auto-schedule-to-on-off-instance","slug":"/auto-schedule-to-on-off-instance/attach-schedule-to-instance","permalink":"/auto-schedule-to-on-off-instance/attach-schedule-to-instance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Attach schedule to instance","title":"2. Auto Schedule To On-Off Instance","source":"https://fptcloud.com/documents/auto-schedule-to-on-off-instance/?doc=attach-schedule-to-instance","parent":"https://fptcloud.com/documents/auto-schedule-to-on-off-instance","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Bước 1: Truy cập trang Autoscaling > Autoscale Profile. Trên dòng tương ứng với profile cần xóa, chọn biểu tượng Delete.","permalink":"/fpt-autoscale/xoa-profile"},"next":{"title":"Create new instance","permalink":"/auto-schedule-to-on-off-instance/create-new-instance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/auto-schedule-to-on-off-instance/attach-schedule-to-instance.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Attach schedule to instance',
	title: '2. Auto Schedule To On-Off Instance',
	source: 'https://fptcloud.com/documents/auto-schedule-to-on-off-instance/?doc=attach-schedule-to-instance',
	parent: 'https://fptcloud.com/documents/auto-schedule-to-on-off-instance',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Auto Schedule To On-Off Instance';

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
        id: "2-auto-schedule-to-on-off-instance",
        children: "2. Auto Schedule To On-Off Instance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gắn một hoặc nhiều máy ảo vào instance schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo ra instance schedule, bạn cần gắn các máy ảo vào trong schedule đó để sử dụng tính năng tự động tắt/bật."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Schedule Management,"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply instances"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(169828)/* ["default"] */ .A) + "",
        width: "940",
        height: "317"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn tên các instances muốn gắn vào schedule & chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply instances"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(653870)/* ["default"] */ .A) + "",
        width: "685",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./use-instance-schedules-for-virtual-machines",
        children: " Previous Sử dụng instance schedules cho các máy ảo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./detach-schedule-to-instance",
        children: " Next Gỡ một hoặc nhiều máy ảo ra khỏi instance schedule "
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

/***/ 169828
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03ac0ac2d268-image-1695609073911-b9a7950852d1a72817124064c5de3f4f.png");

/***/ },

/***/ 653870
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c567a73dd984-image-1695609084366-f76eefa27203b5c95375092aec9c8257.png");

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