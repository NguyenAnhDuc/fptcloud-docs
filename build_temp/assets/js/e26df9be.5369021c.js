"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[87632],{

/***/ 734419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_khoi_tao_mot_alert_moi_activity_alert_md_e26_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-khoi-tao-mot-alert-moi-activity-alert-md-e26.json
const site_docs_cloud_guard_khoi_tao_mot_alert_moi_activity_alert_md_e26_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/khoi-tao-mot-alert-moi-activity-alert","title":"2. FPT Cloud Guard","description":"Khởi tạo một Activity Alert mới","source":"@site/docs/cloud-guard/khoi-tao-mot-alert-moi-activity-alert.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/khoi-tao-mot-alert-moi-activity-alert","permalink":"/cloud-guard/khoi-tao-mot-alert-moi-activity-alert","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Khoi tao mot alert moi activity alert","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-mot-alert-moi-activity-alert","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/khoi-tao-mot-alert-moi-activity-alert.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Khoi tao mot alert moi activity alert',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-mot-alert-moi-activity-alert',
	parent: 'https://fptcloud.com/documents/cloud-guard',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo một Activity Alert mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Guard"
      }), " , mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Activity"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alerts"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Alert"
      }), ". ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(143169)/* ["default"] */ .A) + "",
        width: "1917",
        height: "952"
      }), " Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng thực hiện các bước tiếp theo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Cấu hình cảnh báo theo nhu cầu bằng cách nhập thông tin vào trường dữ liệu tương ứng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Field"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " | Nhập tên của Alert", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource Type"
      }), " | Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loại tài nguyên"
      }), " sẽ cảnh báo", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " | Chọn các loại tác động mà hệ thống bắn cảnh báo"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Mỗi loại tài nguyên sẽ có những action khác nhau cho phép đặt cảnh báo. Khi đặt cảnh báo Activity log sẽ mặc định apply cho toàn bộ VPC | | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity"
      }), " | Chọn mức độ nghiêm trọng của cảnh báo, có các mức: Critical, High, Medium, Low | | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notify to"
      }), " | Chọn người nhận cảnh báo |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(951222)/* ["default"] */ .A) + "",
        width: "1919",
        height: "954"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Chọn Create để thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo dựa vào các thông tin đã chọn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi khởi tạo thành công, người dùng có thể thấy Alert mới tạo và kiểm tra thông tin trên bảng quản trị."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-canh-bao-vpn",
        children: " Previous Khởi tạo cảnh báo cho VPN site-to-site "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-mot-alert-moi-threat-alert",
        children: " Next Khởi tạo một Threat Alert mới "
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

/***/ 951222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/58b580bc4d8b-image-1725532405898-933b745ec3b56b11186e4de178b3b553.png");

/***/ },

/***/ 143169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/78ca8f1c314a-image-1725532325024-0e22ca1eef438bf4e4291e24b1c346b7.png");

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