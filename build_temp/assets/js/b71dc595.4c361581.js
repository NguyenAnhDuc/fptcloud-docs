"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10639],{

/***/ 235873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_monitoring_xem_danh_sach_workspaces_md_b71_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-monitoring-xem-danh-sach-workspaces-md-b71.json
const site_docs_fpt_cloud_monitoring_xem_danh_sach_workspaces_md_b71_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-monitoring/xem-danh-sach-workspaces","title":"2. FPT Cloud Monitoring","description":"2\\\\. Xem danh sách Workspaces","source":"@site/docs/fpt-cloud-monitoring/xem-danh-sach-workspaces.md","sourceDirName":"fpt-cloud-monitoring","slug":"/fpt-cloud-monitoring/xem-danh-sach-workspaces","permalink":"/fpt-cloud-monitoring/xem-danh-sach-workspaces","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Xem danh sach workspaces","title":"2. FPT Cloud Monitoring","source":"https://fptcloud.com/documents/fpt-cloud-monitoring/?doc=xem-danh-sach-workspaces","parent":"https://fptcloud.com/documents/fpt-cloud-monitoring","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xem chi tiet workspace","permalink":"/fpt-cloud-monitoring/xem-chi-tiet-workspace"},"next":{"title":"Khởi tạo & Truy cập","permalink":"/huong-dan-su-dung-grafana/initial/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-monitoring/xem-danh-sach-workspaces.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Xem danh sach workspaces',
	title: '2. FPT Cloud Monitoring',
	source: 'https://fptcloud.com/documents/fpt-cloud-monitoring/?doc=xem-danh-sach-workspaces',
	parent: 'https://fptcloud.com/documents/fpt-cloud-monitoring',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Monitoring';

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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-monitoring",
        children: "2. FPT Cloud Monitoring"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2. Xem danh sách Workspaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Đăng nhập vào FPT portal cloud ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Trên menu của FPT Cloud Console Portal, click Monitoring. Danh sách workspace hiển thị như hình bên dưới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(718628)/* ["default"] */ .A) + "",
        width: "1904",
        height: "888"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin một Workspace gồm có:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workspace name"
        }), " : tên của Workspace. Tên này bạn không thể sửa đổi trong quá trình sử dụng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Type"
        }), " : gói dịch vụ của Workspace. Hiện FMON đang cung cấp 4 gói dịch vụ cho bạn chọn: TRIAL, BASE, PRO, ADVANCE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status"
        }), " : trạng thái hoạt động của Workspace."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Created At"
        }), " : thời gian khởi tạo Workspace."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric Usages"
        }), " : số lượng dữ liệu metric dùng hiện tại. Đơn vị tính là metric records."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log Usages"
        }), " : số lượng dữ liệu log dùng hiện tại. Đơn vị tính là GB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace Usages"
        }), " : số lượng dữ liệu trace dùng hiện. Đơn vị tính là GB."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./kich-hoat-dich-vu-fcmon",
        children: " Previous 1. Kích hoạch dịch vụ FPT Cloud Monitoring "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-workspace",
        children: " Next 3. Quản lý một Workspace "
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

/***/ 718628
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2e29b6c0daf7-Screenshot-2025-04-16-145353-f32a5f8a99fd9aad63682d0e14ef4df2.png");

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