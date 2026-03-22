"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74886],{

/***/ 201157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_cluster_management_service_type_load_balancer_md_92c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-cluster-management-service-type-load-balancer-md-92c.json
const site_docs_dedicated_fpt_kubernetes_engine_cluster_management_service_type_load_balancer_md_92c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/cluster-management/service-type-load-balancer","title":"2. Dedicated – FPT Kubernetes Engine","description":"Service Type Load-Balancer","source":"@site/docs/dedicated-fpt-kubernetes-engine/cluster-management/service-type-load-balancer.md","sourceDirName":"dedicated-fpt-kubernetes-engine/cluster-management","slug":"/dedicated-fpt-kubernetes-engine/cluster-management/service-type-load-balancer","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/service-type-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"A. Public LB","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=service-type-load-balancer","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Scale worker nodes","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/scale-worker-nodes"},"next":{"title":"Start kubernetes cluster","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/start-kubernetes-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/cluster-management/service-type-load-balancer.md


const frontMatter = {
	sidebar_label: 'A. Public LB',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=service-type-load-balancer',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "A. Public LB",
  "id": "a-public-lb",
  "level": 2
}, {
  "value": "B. Private LB",
  "id": "b-private-lb",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service Type Load-Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["D-FKE hỗ trợ tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service type Load Balancer"
      }), " giúp user có thể dễ dàng public ứng dụng ra ngoài cluster. Hệ thống hỗ trợ cả public và private LB."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public LB:"
        }), " Mặc định svc type LB khi được tạo dưới dạng public, service được gán Public IP để có thể truy cập từ internet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private LB:"
        }), " Service được gắn Private IP để có thể truy cập từ các hệ thống nội bộ tenant đến ứng dụng (service). Không được gán Public IP nên không truy cập được từ internet."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a-public-lb",
      children: "A. Public LB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service type LoadBalacer dạng Public để có thể truy cập từ internet. Dạng này cần có Public IP free để sử dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD file yaml:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: Service\nmetadata:  \n  name: web  \n  namespace: default\nspec:  \n  selector:    \n    app: web  \n  ports:    \n    – protocol: TCP      \n      name: http      \n      port: 80      \n      targetPort: 80    \n    – protocol: TCP      \n      name: https      \n      port: 443      \n      targetPort: 443  \n  type: LoadBalancer \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b-private-lb",
      children: "B. Private LB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service type LoadBalacer dạng Private với mục đích sử dụng để truy cập nội bộ, không truy cập từ internet. Dạng này không cần có Public IP free để sử dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD file yaml:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: Service\nmetadata:  \n  annotations:\n    service.beta.kubernetes.io/fpt-load-balancer-internal: “true”\n  name: web  \n  namespace: default\nspec:  \n  selector:    \n    app: web  \n  ports:    \n    – protocol: TCP      \n      name: http      \n      port: 80      \n      targetPort: 80    \n    – protocol: TCP      \n      name: https      \n      port: 443      \n      targetPort: 443  \n  type: LoadBalancer \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra service tạo thành công."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get svc \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa lại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal IP"
      }), " của Load Balancer. Nhập dải IP bạn muốn hệ thống cấp tự động cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LB Virtual IP"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "startIP: IP bắt đầu của subnet. Vd 10.100.1.2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "endIP: IP kết thúc của subnet. Vd 10.100.1.253"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Dải IP này không được trùng với các subnet đã tạo trên hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl edit cm fptcloud-ccm-configmap -n kube-system \n\n\nloadbalancer:\n      oneArm:\n        startIP: “169.254.64.1”\n        endIP: “169.254.127.254” \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉnh sửa lại startIP và endIP theo dải IP mong muốn và thực hiên save."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện rollout để nhận config mới."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl rollout restart deployment fptcloud-ccm -n kube-system \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./persistent-storage",
        children: " Previous Persistent Storage "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./dfke-advanced-firewall",
        children: " Next Advanced Firewall "
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