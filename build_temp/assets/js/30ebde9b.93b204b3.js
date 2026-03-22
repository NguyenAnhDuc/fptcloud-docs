"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[58031],{

/***/ 285274
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_network_all_md_30e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-network-all-md-30e.json
const site_docs_cloud_server_network_network_all_md_30e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/network-all","title":"Networking","description":"*","source":"@site/docs/cloud-server/network/network-all.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/network-all","permalink":"/cloud-server/network/network-all","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Networking","title":"Networking","source":"https://fptcloud.com/documents/cloud-server/?doc=network-all","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"NAT Instance","permalink":"/cloud-server/network/nat-instance"},"next":{"title":"Networking Overview","permalink":"/cloud-server/network/networking-overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/network-all.md


const frontMatter = {
	sidebar_label: 'Networking',
	title: 'Networking',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=network-all',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Networking';

const assets = {

};



const toc = [{
  "value": "<strong>Tổng quan Networking</strong>",
  "id": "tổng-quan-networking",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "networking",
        children: "Networking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tổng-quan-networking",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tổng quan Networking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống mạng của FPT Smart Cloud (FCI) mang đến giải pháp toàn diện cho doanh nghiệp, cho phép xây dựng và quản lý hạ tầng mạng trên đám mây một cách linh hoạt và an toàn. Với Virtual Private Cloud (VPC) làm nền tảng, hệ thống này hỗ trợ kết nối tài nguyên nội bộ, phân chia mạng qua Subnets, đồng thời cung cấp khả năng truy cập từ bên ngoài thông qua Floating IP. Các công cụ bảo mật như Security Group giúp kiểm soát và bảo vệ tài nguyên, trong khi tính năng quản lý truy cập Identity & Access Management (IAM) đảm bảo quyền hạn cho người dùng. Kết nối an toàn giữa các mạng nội bộ (on-premise) và đám mây được duy trì qua VPN Site-to-Site, và Load Balancer giúp phân phối lưu lượng hiệu quả, đảm bảo hiệu suất cao cho các dịch vụ và ứng dụng của doanh nghiệp."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiến trúc hiện tại của FCI được thiết kế để đáp ứng đa dạng nhu cầu, từ hệ thống mạng truyền thống đến việc xây dựng mạng riêng ảo, hoặc thậm chí các mô hình đặc thù như No-gateway."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Với mô hình No-gateway, khách hàng có thể tự thiết lập hệ thống riêng, quản lý thông qua một máy chủ đóng vai trò như router, ví dụ như Check-point firewall. Trong cấu hình này, IP sẽ được chỉ định trực tiếp vào máy chủ, và toàn bộ traffic sẽ được điều hướng thông qua Check-point mà không cần đi qua gateway do FCI cung cấp."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-card-nic",
        children: " Previous Xóa Network Interface Card "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./networking-overview",
        children: " Next Networking Overview "
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