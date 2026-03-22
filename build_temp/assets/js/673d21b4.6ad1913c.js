"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[90758],{

/***/ 442424
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_proxy_host_monitor_waf_voi_dashboard_overview_md_673_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-proxy-host-monitor-waf-voi-dashboard-overview-md-673.json
const site_docs_fpt_cloud_waf_proxy_host_monitor_waf_voi_dashboard_overview_md_673_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/proxy-host/monitor-waf-voi-dashboard-overview","title":"2. FPT Cloud WAF","description":"Monitor WAF với Dashboard Overview","source":"@site/docs/fpt-cloud-waf/proxy-host/monitor-waf-voi-dashboard-overview.md","sourceDirName":"fpt-cloud-waf/proxy-host","slug":"/fpt-cloud-waf/proxy-host/monitor-waf-voi-dashboard-overview","permalink":"/fpt-cloud-waf/proxy-host/monitor-waf-voi-dashboard-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Monitor waf voi dashboard overview","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=monitor-waf-voi-dashboard-overview","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cap nhat thong tin cho proxy host","permalink":"/fpt-cloud-waf/proxy-host/cap-nhat-thong-tin-cho-proxy-host"},"next":{"title":"Quan ly proxy host","permalink":"/fpt-cloud-waf/proxy-host/quan-ly-proxy-host"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/proxy-host/monitor-waf-voi-dashboard-overview.md


const frontMatter = {
	sidebar_label: 'Monitor waf voi dashboard overview',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=monitor-waf-voi-dashboard-overview',
	parent: 'https://fptcloud.com/documents/fpt-cloud-waf',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAF';

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
        id: "2-fpt-cloud-waf",
        children: "2. FPT Cloud WAF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor WAF với Dashboard Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Home dashboard"
      }), " là trang tổng quan cho phép người quản trị có một góc nhìn khái quát về hệ thống bằng cách theo dõi các thông số, số liệu của máy chủ WAF."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Home dashboard"
      }), " bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WAF Dashboard"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      }), ". Ở màn hình này sẽ hiển thị các thông số được thống kê và update liên tục."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Hosts"
      }), " | Số lượng Proxy Host đã tạo thuộc máy chủ WAF", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Redirection"
      }), " | Số lượng Redirection Host đã tạo thuộc máy chủ WAF", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Stream"
      }), " | Số lượng Stream Host đã tạo thuộc máy chủ WAF", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Not Found Hosts"
      }), " | Số lượng 404 Not Found Host đã tạo thuộc máy chủ WAF", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Connections"
      }), " | Số connection đang kết nối đến các proxy host.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Events"
      }), " | Tổng số lượng security events máy chủ WAF đã chặn và ghi nhận cho các proxy host", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top By Attack Type"
      }), " | Những loại tấn công nhiều nhất đã được máy chủ WAF chặn và ghi nhận.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top By RuleID"
      }), " | Những loại rule đã vi phạm nhiều nhất của máy chủ WAF", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top By Host"
      }), " | Những proxy host đã chặn và ghi nhận nhiều security event nhất", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top By Source Attack"
      }), " | Những IP nhiều là nguồn tấn công nhiều lần nhất do máy chủ WAF ghi nhận"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 9",
        src: (__webpack_require__(473889)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-dang-nhap-waf-dashboard",
        children: " Previous Đăng nhập WAF Dashboard "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-proxy-host",
        children: " Next Quản lý Proxy Host "
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

/***/ 473889
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d28bf8272b35-Userguide-FPT-WAF-2022-9-1024x538-33350baf95f87a432a8e68da40d23507.png");

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