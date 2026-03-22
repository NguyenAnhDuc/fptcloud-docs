"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[54827],{

/***/ 872584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_cau_hinh_proxy_protocol_cho_nginx_ingress_md_2df_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-cau-hinh-proxy-protocol-cho-nginx-ingress-md-2df.json
const site_docs_managed_fpt_kubernetes_engine_cau_hinh_proxy_protocol_cho_nginx_ingress_md_2df_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress","title":"2. Managed – FPT Kubernetes Engine","description":"Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster","source":"@site/docs/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress","permalink":"/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cau hinh proxy protocol cho nginx ingress","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cau-hinh-proxy-protocol-cho-nginx-ingress","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh proxy protocol cho istio ingress","permalink":"/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-istio-ingress"},"next":{"title":"Cau hinh proxy protocol","permalink":"/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol-cho-nginx-ingress.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cau hinh proxy protocol cho nginx ingress',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cau-hinh-proxy-protocol-cho-nginx-ingress',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp người dùng sử dụng dịch vụ Managed Kubernetes của FPT Cloud và có nhu cầu lấy được thông tin IP public của người dùng cuối khi truy cập vào ứng dụng trong Kubernetes thông qua nginx ingress gateway, người dùng có thể cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [". Enable proxy protocol cho service ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nginx-ingress-controller"
      }), " bằng cách thêm annotation loadbalancer.fptcloud.com/proxy-protocol: \"true\" trong cấu hình của service."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [". Cấu hình thêm các trường trong configmap ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nginx-ingress-controller"
      }), " trong namespace mà người dùng chọn để deploy nginx ingress controller:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "allow-snippet-annotations: \"true\" \nproxy-protocol: \"True\" \nreal-ip-header: proxy_protocol \nuse-proxy-protocol: \"true\" \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: ". Restart nginx ingress controller để ingress controller nhận cấu hình configmap mới."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu ứng dụng người dùng cần gọi tới domain ingress port 443, cần cấu hình thêm annotation cho service LB ingress nginx controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "loadbalancer.fptcloud.com/enable-ingress-hostname: \"true\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi sử dụng service loại LoadBalancer với tính năng proxy protocol cho LB L4, các pod trong cluster không thể kết nối tới dịch vụ thông qua ingress domain port 443, còn từ internet bên ngoài vẫn truy cập bình thường. Nguyên nhân xuất phát từ hành vi mặc định của kube-proxy: thành phần này thêm địa chỉ ", (0,jsx_runtime.jsx)(_components.em, {
        children: "IP Public"
      }), " của LoadBalancer vào iptables trên các node và ánh xạ IP đó với một interface trong worker node. Kết quả là các yêu cầu từ pod tới ingress domain bị chặn lại tại interface của node và không thể tiếp tục ra mạng public. Cấu hình ingress hostname chính là cách khắc phục vấn đề này, đảm bảo kết nối hoạt động cả từ bên trong cluster lẫn từ internet bên ngoài."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-proxy-protocol-cho-istio-ingress",
        children: " Previous Cấu hình proxy protocol cho istio-ingress với Managed Kubernetes cluster  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./service-type-kb-layer7-lbv2",
        children: " Next Sử dụng service type Loadbalancer Layer 7 (LBv2) "
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