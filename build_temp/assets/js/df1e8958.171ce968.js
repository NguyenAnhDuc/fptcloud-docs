"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[47845],{

/***/ 719842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_initial_overviews_vpn_md_df1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-initial-overviews-vpn-md-df1.json
const site_docs_vpn_site_to_site_0_initial_overviews_vpn_md_df1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/initial/overviews-vpn","title":"Giới thiệu chi tiết","description":"*","source":"@site/docs/vpn-site-to-site-0/initial/overviews-vpn.md","sourceDirName":"vpn-site-to-site-0/initial","slug":"/vpn-site-to-site-0/initial/overviews-vpn","permalink":"/vpn-site-to-site-0/initial/overviews-vpn","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Giới thiệu chi tiết","title":"Giới thiệu chi tiết","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=overviews-vpn","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial Setup","permalink":"/vpn-site-to-site-0/initial/initial-setup"},"next":{"title":"Hướng dẫn phân quyền sử dụng dịch vụ","permalink":"/vpn-site-to-site-0/initial/service-authorization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/initial/overviews-vpn.md


const frontMatter = {
	sidebar_label: 'Giới thiệu chi tiết',
	title: 'Giới thiệu chi tiết',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=overviews-vpn',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Giới thiệu chi tiết';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    hr: "hr",
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
        id: "giới-thiệu-chi-tiết",
        children: "Giới thiệu chi tiết"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Với VPN Site-to-Site, các công ty có thể xây dựng một hệ thống mạng riêng ảo hoàn chỉnh cho các địa điểm đa dạng. Dịch vụ này kết nối các mạng nội bộ khác nhau một cách liên tục và bảo mật, cho phép nhân viên chia sẻ tài nguyên một cách thuận tiện và an toàn giữa các mạng nội bộ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FPT Cloud Site-to-Site VPN là một dịch vụ VPN quản lý đầy đủ, cho phép tạo kết nối bảo mật giữa mạng văn phòng và tài nguyên đám mây của FPT. Sử dụng tunnel IPSec, dịch vụ này kết nối trung tâm dữ liệu của doanh nghiệp với các văn phòng chi nhánh, giúp truy cập các ứng dụng và dịch vụ dựa trên đám mây mà không tiết lộ dữ liệu mật."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điều cần lưu ý trước khi bạn tạo VPN Site-to-Site"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiến trúc mạng: Đảm bảo kiến trúc mạng On-Premise của bạn phù hợp với việc triển khai VPN S2S. Điều này bao gồm xác định địa chỉ IP, phân vùng mạng, và các thiết bị mạng phù hợp để xây dựng kết nối VPN."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floating IP: Hệ thống Cloud FPT cần 1 IP public để kết nối VPN S2S. IP public được sử dụng chưa được gán cho bất kỳ dịch vụ nào khác"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP addressing: Đảm bảo rằng các địa chỉ IP được sử dụng trong VPN S2S không gây xung đột với các mạng khác trong tổ chức hoặc các mạng công cộng. Xác định địa chỉ IP đầu cuối cho các cổng kết nối VPN và cấu hình tường lửa để cho phép lưu lượng truy cập."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Giao thức và mã hóa: Chọn giao thức và cấu hình mã hóa phù hợp cho VPN S2S. Phổ biến nhất là IPSec với mã hóa AES hoặc 3DES, cùng với giao thức xác thực như IKEv1 hoặc IKEv2. Đảm bảo cấu hình bảo mật tương ứng để đảm bảo tính bảo mật cao."
      }), "\n"]
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