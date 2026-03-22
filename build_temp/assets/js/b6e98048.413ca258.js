"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[83881],{

/***/ 426011
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_monitoring_ip_access_control_xoa_whitelisted_ip_md_b6e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-monitoring-ip-access-control-xoa-whitelisted-ip-md-b6e.json
const site_docs_fpt_monitoring_ip_access_control_xoa_whitelisted_ip_md_b6e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-monitoring-ip-access-control/xoa-whitelisted-ip","title":"2. FPT Monitoring – IP Access Control","description":"Xóa bỏ whitelisted IP/dải IP","source":"@site/docs/fpt-monitoring-ip-access-control/xoa-whitelisted-ip.md","sourceDirName":"fpt-monitoring-ip-access-control","slug":"/fpt-monitoring-ip-access-control/xoa-whitelisted-ip","permalink":"/fpt-monitoring-ip-access-control/xoa-whitelisted-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Xoa whitelisted ip","title":"2. FPT Monitoring – IP Access Control","source":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=xoa-whitelisted-ip","parent":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xem danh sach whitelisted ip","permalink":"/fpt-monitoring-ip-access-control/xem-danh-sach-whitelisted-ip"},"next":{"title":"Alert","permalink":"/relation-management/alert"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-monitoring-ip-access-control/xoa-whitelisted-ip.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Xoa whitelisted ip',
	title: '2. FPT Monitoring – IP Access Control',
	source: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=xoa-whitelisted-ip',
	parent: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Monitoring – IP Access Control';

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
        id: "2-fpt-monitoring--ip-access-control",
        children: "2. FPT Monitoring – IP Access Control"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xóa bỏ whitelisted IP/dải IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Xóa bỏ whitelisted IP",
        src: (__webpack_require__(926860)/* ["default"] */ .A) + "",
        width: "1232",
        height: "319"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn 1 hoặc nhiều IP đã được whitelist, click nút Remove."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trạng thái sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "'Blacklisting'"
          }), " , mọi thao tác trên bảng tương ứng sẽ bị vô hiệu hoá tạm thời cho đến khi hoàn tất."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu blacklist IP/dải IP ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "thành công"
          }), " , IP/dải IP sẽ bị xoá khỏi bảng, và mọi truy cập từ IP/dải IP này tới ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "endpoint sẽ bị chặn"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu blacklist ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "không thành công"
          }), " , IP/dải IP sẽ chuyển trạng thái thành ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "‘Blacklist failed’"
          }), ". Mọi truy cập vào endpoint bằng địa chỉ IP/thuộc dải IP này được ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "thực hiện bình thường"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./them-moi-whitelisted-ip",
        children: " Previous Thêm mới whitelisted IP/dải IP "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./retry-ip",
        children: " Next Retry IP/dải IP đã thêm/xóa thất bại "
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

/***/ 926860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/57331a11d010-Screenshot_6-c7d456ae8caf30b5f91a60bba897029f.png");

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