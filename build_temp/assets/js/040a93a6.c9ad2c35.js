"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[48383],{

/***/ 391396
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_hpc_hpc_rest_machine_md_040_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-hpc-hpc-rest-machine-md-040.json
const site_docs_cloud_server_hpc_hpc_rest_machine_md_040_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/hpc/hpc-rest-machine","title":"Khởi động lại máy","description":"*","source":"@site/docs/cloud-server/hpc/hpc-rest-machine.md","sourceDirName":"cloud-server/hpc","slug":"/cloud-server/hpc/hpc-rest-machine","permalink":"/cloud-server/hpc/hpc-rest-machine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khởi động lại máy","title":"Khởi động lại máy","source":"https://fptcloud.com/documents/cloud-server/?doc=hpc-rest-machine","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Hướng dẫn nhanh","permalink":"/cloud-server/hpc/hpc-quick-start"},"next":{"title":"Đặt lịch tắt máy","permalink":"/cloud-server/hpc/hpc-schedule-shutdown"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/hpc/hpc-rest-machine.md


const frontMatter = {
	sidebar_label: 'Khởi động lại máy',
	title: 'Khởi động lại máy',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=hpc-rest-machine',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Khởi động lại máy';

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
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "khởi-động-lại-máy",
        children: "Khởi động lại máy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi khởi động máy, bạn kết nối tới máy thông qua Remote Desktop Connection file – RDP file. Tuy nhiên trong quá trình sử dụng bạn có thể gặp 1 vài sự cố như là màn hình đen, không thể kết nối tới remote server hoặc máy chủ bị treo. Cách xử lý trong trường hợp này là đợi trong vòng 2-3 phút, sau đó connect lại máy. Nếu như sau đó vẫn không khắc phục được bạn bắt buộc phải khởi động lại máy để tiếp tục sử dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để khởi động lại máy, thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tại màn hình Hosts ở HPC Portal, chọn image > Reset machine"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một hộp thoại xác nhận được mở ra, chọn Reset để tiến hành khởi động lại máy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "reset",
        src: (__webpack_require__(527943)/* ["default"] */ .A) + "",
        width: "908",
        height: "423"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đợi một vài phút sau khi reset máy thành công, bạn tiếp tục tải lại file RDP và thực hiện kết nối tới máy lại"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Tính năng Reset machine tương tự với khi bạn bấm nút restart đối với máy chủ vật lý khi máy không phản hồi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Tính năng hữu dụng trong trường hợp bạn không thể remote tới máy ngay sau khi boot máy thành công. Trong trường hợp reset máy xong vẫn chưa connect lại được với máy hãy liên hệ với quản trị viên của chúng tôi để hỗ trợ ngay."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Cân nhắc trước khi sử dụng tính năng trong quá trình sử dụng máy vì có thể gây mất mát dữ liệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./hpc-hardware-fixation",
        children: " Previous Cố định máy vật lý "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./hpc-schedule-shutdown",
        children: " Next Đặt lịch tắt máy "
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

/***/ 527943
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a4b229dd825-reset-4250a8acd2fecea5b819e319cb9f41c3.jpg");

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