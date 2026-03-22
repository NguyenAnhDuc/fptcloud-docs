"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15045],{

/***/ 938329
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_service_type_load_balancer_md_a5b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-service-type-load-balancer-md-a5b.json
const site_docs_managed_fpt_kubernetes_engine_service_type_load_balancer_md_a5b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/service-type-load-balancer","title":"2. Managed – FPT Kubernetes Engine","description":"Service Type Load-Balancer","source":"@site/docs/managed-fpt-kubernetes-engine/service-type-load-balancer.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/service-type-load-balancer","permalink":"/managed-fpt-kubernetes-engine/service-type-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Service type load balancer","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=service-type-load-balancer","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Service type kb layer7 lbv2","permalink":"/managed-fpt-kubernetes-engine/service-type-kb-layer7-lbv2"},"next":{"title":"Snapshot persistent volume tren k8s","permalink":"/managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/service-type-load-balancer.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Service type load balancer',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=service-type-load-balancer',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "1. Tạo service type LoadBalancer chỉ định floatingIP gắn vào LoadBalancer:",
  "id": "1-tạo-service-type-loadbalancer-chỉ-định-floatingip-gắn-vào-loadbalancer",
  "level": 4
}, {
  "value": "2. Giới hạn quyền truy cập vào Load Balancer bằng cấu hình <em>“loadBalancerSourceRanges”</em> trong phần <em>“spec”</em> của cấu hình service:",
  "id": "2-giới-hạn-quyền-truy-cập-vào-load-balancer-bằng-cấu-hình-loadbalancersourceranges-trong-phần-spec-của-cấu-hình-service",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h4: "h4",
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
      children: "Service Type Load-Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sản phẩm Managed FKE được phát triển từ Kubernetes Native và tích hợp thêm thêm các thành phần cloud provider vào Kubernetes trong đó có thành phần FPT Cloud Controller Manager. Thành phần này nhằm mục đích quản lý các worker nodes trong cluster và các service dạng Load Balancer. Người dùng có thể có nhiều cách để expose một ứng dụng của mình ra bên ngoài internet để khách hàng của người dùng đó có thể truy cập vào ứng dụng, dịch vụ. Các cách đó có thể bao gồm việc tạo ingress cho service, hoặc tạo service dạng node port và gắn floating cho VM worker node, hoặc có thể sử dụng service dạng Load Balancer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPTCloud hỗ trợ người dùng tạo service dạng load balancer với các option đi kèm annotation trong cấu hình của service:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|  |  |", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---|---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nservice.beta.kubernetes.io/fpt-load-balancer-internal | \"true\"/\"false\" | \"false\" | Nếu không muốn expose service ra ngoài internet, cấu hình value là \"true\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/keep-floatingip  | \"true\"/\"false\" | \"false\" | Nếu muốn giữ floating IP của service LoadBalancer ở lại trong VPC sau khi xóa service đó, cấu hình value là \"true\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/proxy-protocol | \"true\"/\"false\" | \"false\" | Nếu muốn LoadBalancer sử dụng protocol là PROXY, hãy cấu hình value là “true”.", (0,jsx_runtime.jsx)(_components.br, {}), "\nChú ý: Proxy protocol chỉ sử dụng với LoadBalancer layer4", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/enable-health-monitor | \"true\"/\"false\" | \"true\" | Muốn disable health monitor cho LoadBalancer Pool, cấu hình value là “false”", (0,jsx_runtime.jsx)(_components.br, {}), "\nservice.beta.kubernetes.io/fpt-load-balancer-type | - LBv1 bao gồm:", (0,jsx_runtime.jsx)(_components.br, {}), "\nbasic/ advanced/ standard/ premium ( đã dừng hỗ trợ LBv1 )", (0,jsx_runtime.jsx)(_components.br, {}), "\n- LBv2 bao gồm:", (0,jsx_runtime.jsx)(_components.br, {}), "\nStarter/Basic-1/ Basic-2/ Standard/ Advanced/ Premium/ Extra-1/ Extra-2/ Extra-3/ Extra-S/ Extra-M/ Extra-L | LBv1: \"basic\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nLBv2: \"Basic-1\" | Cấu hình flavor của LoadBalancer để đáp ứng tải tương ứng của ứng dụng đằng sau backend của LoadBalancer pool", (0,jsx_runtime.jsx)(_components.br, {}), "\nChú ý:  Nếu cấu hình annotation key \"service.beta.kubernetes.io/fpt-load-balancer-type\" có value khác với những giá trị cho phép có thể gây lỗi", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/enable-ingress-hostname | \"true\"/\"false\" | \"false\" | Muốn enable ingress hostname cho service type LoadBalancer, cấu hình value là \"true\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/load-balancer-version | \"v1\"/\"v2\" | \"v2\" | Muốn sử dụng LBv1 cho service type LoadBalancer, cấu hình value là “v1”. Mặc định LBv2 sẽ được tạo ra nếu không cấu hình annotation này", (0,jsx_runtime.jsx)(_components.br, {}), "\nChú ý: Không thể sử dụng proxy protocol và x-forwarded-for cùng một lúc", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/x-forwarded-for | \"true\"/\"false\" | \"false\" | Muốn forward header của request tới LoadBalancer pool backend khi sử dụng LoadBalancer layer7, cấu hình value là “true”.", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/node-selector | mảng các cặp key=value", (0,jsx_runtime.jsx)(_components.br, {}), "\ne.g: \"env=prod, region=han\" |  | Chọn node để đưa vào member pool của LoadBalancer, các node được chọn sẽ chứa tất cả các cặp key=value mà người dùng sử dụng", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/connection-limit | integer | -1 | Giới hạn số kết nối đồng thời tối đa. -1 là không giới hạn", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/timeout-client-data | integer (ms) | 50000 | Thời gian chờ dữ liệu từ phía client. Đơn vị ms", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/timeout-member-connect | integer (ms) | 5000 | Thời gian chờ kết nối giữa load balancer và backend. Đơn vị ms", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/timeout-member-data | integer (ms) | 50000 | Thời gian chờ dữ liệu giữa load balancer và backend. Đơn vị ms", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/timeout-tcp-inspect | integer (ms) | 0 | Thời gian chờ để kiểm tra TCP. 0ms là tắt chức năng kiểm tra TCP.", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/health-monitor-delay | integer (s) | 60 | Khoảng thời gian giữa các lần healthcheck member trong pool", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/health-monitor-timeout | integer (s) | 30 | Thời gian tối đa cho một lần healthcheck", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/health-monitor-max-retries | integer | 5 | Số lần healthcheck thất bại trước khi đánh dấu backend là DOWN.", (0,jsx_runtime.jsx)(_components.br, {}), "\nloadbalancer.fptcloud.com/health-monitor-max-retries-down | integer | 3 | Số lần healthcheck thành công để đánh dấu backend hoạt động trở lại (UP)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, MFKE hỗ trợ người dùng cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-tạo-service-type-loadbalancer-chỉ-định-floatingip-gắn-vào-loadbalancer",
      children: "1. Tạo service type LoadBalancer chỉ định floatingIP gắn vào LoadBalancer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kind: Service\napiVersion: v1\nmetadata:\n  name: hello-world\n  namespace: example\nspec:\n  type: LoadBalancer\n  loadBalancerIP: 103.160.90.207\n  selector:\n    app: hello-world\n  ports:\n    - name: http\n      protocol: TCP\n      port: 443\n      targetPort: web\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lưu ý: IP public cần được allocate vào VPC và ở trạng thái Inactive. Người dùng vào mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking -> Floating Ips"
      }), " để kiểm tra."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "2-giới-hạn-quyền-truy-cập-vào-load-balancer-bằng-cấu-hình-loadbalancersourceranges-trong-phần-spec-của-cấu-hình-service",
      children: ["2. Giới hạn quyền truy cập vào Load Balancer bằng cấu hình ", (0,jsx_runtime.jsx)(_components.em, {
        children: "“loadBalancerSourceRanges”"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.em, {
        children: "“spec”"
      }), " của cấu hình service:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kind: Service\napiVersion: v1\nmetadata:\n  name: hello-world\n  namespace: example1\nspec:\n  loadBalancerSourceRanges:\n  - 14.233.234.0/24\n  - 10.250.0.0/24\n  type: LoadBalancer\n  selector:\n    app: hello-world\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: web\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Cấu hình “loadBalancerSourceRanges” chứa mảng các dải IP public được phép truy cập vào Load Balancer. Mặc định M-FKE tạo service type Load Balancer với cấu hình dải IP source là 0.0.0.0/0."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./scale-in-chi-dinh-node",
        children: " Previous Tính năng scale in chỉ định node trong cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./persistent-storage",
        children: " Next Persistent Storage "
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