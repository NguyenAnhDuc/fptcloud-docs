"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[41968],{

/***/ 174918
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_scheduling_delete_instance_schedule_md_c4b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-scheduling-delete-instance-schedule-md-c4b.json
const site_docs_cloud_server_scheduling_delete_instance_schedule_md_c4b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/scheduling/delete-instance-schedule","title":"Xóa một instance schedule","description":"*","source":"@site/docs/cloud-server/scheduling/delete-instance-schedule.md","sourceDirName":"cloud-server/scheduling","slug":"/cloud-server/scheduling/delete-instance-schedule","permalink":"/cloud-server/scheduling/delete-instance-schedule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Xóa một instance schedule","title":"Xóa một instance schedule","source":"https://fptcloud.com/documents/cloud-server/?doc=delete-instance-schedule","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tạo lịch snapshot ổ đĩa","permalink":"/cloud-server/scheduling/createschedule-snapshotstorage"},"next":{"title":"Xóa lịch snapshot ổ đĩa","permalink":"/cloud-server/scheduling/deleteschedule-snapshotstorage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/scheduling/delete-instance-schedule.md


const frontMatter = {
	sidebar_label: 'Xóa một instance schedule',
	title: 'Xóa một instance schedule',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=delete-instance-schedule',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Xóa một instance schedule';

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
        id: "xóa-một-instance-schedule",
        children: "Xóa một instance schedule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Thao tác này sẽ không thực hiện được nếu lịch đã & đang chạy dở chưa xong. Việc xóa instance schedule này sẽ không thể khôi phục lại được. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Schedule Management,"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(799074)/* ["default"] */ .A) + "",
        width: "939",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên schedule và yêu cầu người dùng xác nhận. Gõ chữ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delete"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete schedule"
      }), " để tiến hành xóa, sau đó hệ thống sẽ xóa hoàn toàn schedule và các máy ảo đang attach (nếu có) thì sẽ được giải phóng & giữ nguyên status nó đang đứng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(398757)/* ["default"] */ .A) + "",
        width: "408",
        height: "245"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./detach-schedule-to-instance",
        children: " Previous Gỡ một hoặc nhiều máy ảo vào instance schedule "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./schedule-snapshotvm",
        children: " Next Lịch snapshot máy ảo "
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

/***/ 398757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/74aa2b28e7a4-image-1695609061103-74f530e981322f9afed36d69d5692854.png");

/***/ },

/***/ 799074
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8754accf0670-image-1695609049584-369472e94e6e6856082f3529069bf047.png");

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