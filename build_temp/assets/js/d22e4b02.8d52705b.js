"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[23458],{

/***/ 432021
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_scheduling_instance_schedule_md_d22_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-scheduling-instance-schedule-md-d22.json
const site_docs_cloud_server_scheduling_instance_schedule_md_d22_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/scheduling/instance-schedule","title":"Auto schedule to on-off Instance","description":"*","source":"@site/docs/cloud-server/scheduling/instance-schedule.md","sourceDirName":"cloud-server/scheduling","slug":"/cloud-server/scheduling/instance-schedule","permalink":"/cloud-server/scheduling/instance-schedule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Auto schedule to on-off Instance","title":"Auto schedule to on-off Instance","source":"https://fptcloud.com/documents/cloud-server/?doc=instance-schedule","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chỉnh sửa lịch snapshot máy ảo","permalink":"/cloud-server/scheduling/editschedule-snapshotvm"},"next":{"title":"Instance Schedule Overview","permalink":"/cloud-server/scheduling/schedule-overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/scheduling/instance-schedule.md


const frontMatter = {
	sidebar_label: 'Auto schedule to on-off Instance',
	title: 'Auto schedule to on-off Instance',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=instance-schedule',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Auto schedule to on-off Instance';

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
        id: "auto-schedule-to-on-off-instance",
        children: "Auto schedule to on-off Instance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để chạy xong hết hoàn toàn hành động tắt/ bật các máy ảo trong 1 Lịch thì có thể cần tới 15 phút sau start time hoặc stop time đã chọn. Theo đó, nếu bạn cần toàn bộ các máy ảo của bạn phải được bật/ tắt không trễ hơn một thời điểm cụ thể, hãy đặt lịch sớm hơn 15 phút so với mức cần thiết và mỗi lịch cách nhau ít nhất 15 phút. Lịch sau khi tạo ra thì ko thể chỉnh sửa lại được thông tin về thời gian, tần suất, chỉ có thể thay đổi thông tin máy ảo được gắn/ gỡ vào lịch. Do đó, nếu bạn muốn thay đổi lịch thì hãy xóa lịch hiện tại & tạo ra một lịch mới. Hệ thống chỉ cho phép bạn tạo lịch trước 1 giờ so với start time/ stop time mà bạn chọn. Trong khoảng thời gian 1 giờ duration thì hệ thống chỉ cho phép bạn thao tác 1 action là tắt hoặc bật thôi."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Previous "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./schedule-overview",
        children: " Next Instance Schedule Overview "
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