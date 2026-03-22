"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[42634],{

/***/ 662904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_bat_tat_alert_md_9f7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-bat-tat-alert-md-9f7.json
const site_docs_cloud_guard_bat_tat_alert_md_9f7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/bat-tat-alert","title":"2. FPT Cloud Guard","description":"Bật/Tắt Alert","source":"@site/docs/cloud-guard/bat-tat-alert.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/bat-tat-alert","permalink":"/cloud-guard/bat-tat-alert","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Bat tat alert","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=bat-tat-alert","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/bat-tat-alert.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Bat tat alert',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=bat-tat-alert',
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
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bật/Tắt Alert"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Bật/Tắt trạng thái hoạt động của Alert cho phép người dùng điều chỉnh trạng thái hoạt động của Alert để tạm thời không sử dụng và nhận cảnh báo từ 1 Alert bất kỳ mà không cần phải xóa Alert đó đi."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Management"
      }), " , chọn Alert cần bật/tắt. Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "switch"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Alert 2022 5",
        src: (__webpack_require__(769980)/* ["default"] */ .A) + "",
        width: "47",
        height: "27"
      }), " để thay đổi trạng thái bật/tắt tùy theo nhu cầu người dùng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(832531)/* ["default"] */ .A) + "",
        width: "1236",
        height: "532"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trạng thái hoạt động của Alert được hiển thị tại bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Management"
      }), " , trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " với 2 giá trị:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bật"
        }), " : Hệ thống tự động tính toán để gửi thông báo cho người dùng nếu mức sử dụng đạt ngưỡng theo cấu hình của người dùng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tắt"
        }), " : Hệ thống dừng tính toán và sẽ không gửi thông báo tự động."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./kiem-tra-trang-thai-cua-alert",
        children: " Previous Kiểm tra trạng thái của Alert "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./chinh-sua-alert",
        children: " Next Chỉnh sửa Alert "
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

/***/ 769980
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAbCAIAAABjrkFAAAACfElEQVRIie2Xz2sTQRTH5+1MdrPZ1A1pWqUHTai29SRSiBQRWnoVPOnBsyB48v/w4Mn/peCvYyEFL1pFiSlUgzXVtJsmm0wy+56HoLR0d3ZtQu3B72Ev++bNZ2ferwUiYmdGxr8GOKL/NNE6WzRijL6I6HhOAAAAnCoNEbW6WKmpVx8Gm3X82SFLsNKUsTTLVxZSpSmekAlGz3BErDWCZy/lei04/vb8Obh/I3W3bCUBGpUGEd/XB0/W5MedSD+uDXeui4fLlmEYeiDdTfl9qn7HaiPY9wnD9iLCZhs3ttTXPR2x16W1dyrvwL2yxRjTAEXmlNel9aqqbKlmJxyFEckB1fcCPcpQjRY931S1htKbhdP4ffq0g1s/ULOSiDo9rO/pbA5r94A2agoRNbERTtORbLsZEpJHYBj1BtTsJIRhrR5Vd3UokTR9RZ6vjW5ijJhC6qmktUQq1uywk9AkE7G/zseQ8hhPYwpwM/EfzQ1K86RxY3LKpWOMw2kci13M8zj/YHHmpmPS5I8mLFYskL7ehNNkTJi7YJQK0fcIjAHLWDCTSwjDChNs8VJM9Yvcz7Vh6bIol0TeASPEAwCDtMlnXJi2/ViUvB3cLPZnp1N6mpN3BiJCRCnlm88HT19gvZ2JsnRSavWKfLSacRxHCHGSWhyrYRc0TfNaMfN4ZTCX2w81c83+7XnvwS1h2zbnMbE4hq4ZBIGUcvtb8/Xb/cqXdN13/cASEEya7auTB8sLfHF+OpvNCiFiu+Z4JgpEVEp1u91Wq+V5npSSc57NZnO5nOM4pmlynmjEGQMN+x1Dw9lvCAcAw5MYPk9v2jrMNOIkOk6a0XW2/hl+AeWnP+oFH5TqAAAAAElFTkSuQmCC");

/***/ },

/***/ 832531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdc78b79b799-image-1725532697828-af8b34eae358daee0d33b5080b77b75f.png");

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