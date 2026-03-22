"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[60244],{

/***/ 910172
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_dieu_chinh_cau_hinh_coredns_trong_kubernetes_service_md_c40_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-dieu-chinh-cau-hinh-coredns-trong-kubernetes-service-md-c40.json
const site_docs_managed_fpt_kubernetes_engine_dieu_chinh_cau_hinh_coredns_trong_kubernetes_service_md_c40_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service","title":"2. Managed – FPT Kubernetes Engine","description":"Điều chỉnh cấu hình CoreDNS trong Kubernetes Service","source":"@site/docs/managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service","permalink":"/managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Dieu chinh cau hinh coredns trong kubernetes service","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=dieu-chinh-cau-hinh-coredns-trong-kubernetes-service","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Dich vu gpu tren k8s","permalink":"/managed-fpt-kubernetes-engine/dich-vu-gpu-tren-k8s"},"next":{"title":"Fpt cloud managed kubernetes release calendar","permalink":"/managed-fpt-kubernetes-engine/fpt-cloud-managed-kubernetes-release-calendar"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Dieu chinh cau hinh coredns trong kubernetes service',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=dieu-chinh-cau-hinh-coredns-trong-kubernetes-service',
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
      children: "Điều chỉnh cấu hình CoreDNS trong Kubernetes Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Managed Kubernetes Engine (M-FKE) sử dụng Coredns để quản lý và phân giải domain cho cluster. Thành phần Coredns được quản lý bởi FPT nên người dùng không thể thay đổi Corefile của Coredns. Bài hướng dẫn này chỉ ra cách mà người dùng có thể sử dụng configmap để điều chỉnh cấu hình CoreDNS mong muốn trong M-FKE."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rewrite DNS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể điều chỉnh CoreDNS với M-FKE để thực hiện ghi đè DNS bằng cách cấu hình configmap ", (0,jsx_runtime.jsx)(_components.em, {
        children: "coredns-custom"
      }), " trong namespace ", (0,jsx_runtime.jsx)(_components.em, {
        children: "kube-system"
      }), " như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns-custom\n  namespace: kube-system\ndata:\n  test.server: |\n    .com:8053 {\n    log\n    errors\n    rewrite stop {\n      name regex (.*)\\..com {1}.default.svc.cluster.local\n      answer name (.*)\\.default\\.svc\\.cluster\\.local {1}..com\n    }\n    forward . /etc/resolv.conf # you can redirect this to a specific DNS server such as 10.0.0.10, but that server must be able to resolve the rewritten domain name\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom forward server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu người dùng cần chỉ định DNS server để phân giải domain trong cluster có thể cấu hình như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns-custom\n  namespace: kube-system\ndata:\n  test.server: | # you may select any name here, but it must end with the .server file extension\n    .com:8053 {\n        forward foo.com 1.1.1.1\n        forward . 2.2.2.2\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó 1.1.1.1 và 2.2.2.2 là dns server mà người dùng định nghĩa. “forward . 2.2.2.2” nghĩa là CoreDNS sẽ gửi yêu cầu phân giải domain *.com tới dns server 2.2.2.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom domains:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu người dùng muốn cấu hình custom domain mà chỉ có thể phân giải nội bộ cluster, ví dụ phân giải domain puglife.local (không phải là domain hợp lệ), nếu không cấu hình coredns-custom configmap, M-FKE cluster sẽ không thể phân giải domain đó. Người dùng có thể cấu hình như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns-custom\n  namespace: kube-system\ndata:\n  puglife.server: | # you may select any name here, but it must end with the .server file extension\n    puglife.local:8053 {\n        errors\n        cache 30\n        forward . 192.11.0.1  # this is my test/dev DNS server\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stub domain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreDNS có thể sử dụng để cấu hình stub domain như sau và hãy đảm bảo cập nhật custom domain và địa chỉ IP đúng với giá trị trong môi trường hạ tầng của người dùng:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns-custom\n  namespace: kube-system\ndata:\n  test.server: | # you may select any name here, but it must end with the .server file extension\n    abc.com:8053 {\n     errors\n     cache 30\n     forward . 1.2.3.4\n    }\n    my.cluster.local:8053 {\n        errors\n        cache 30\n        forward . 2.3.4.5\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hosts plugin:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể sử dụng coreDNS để khai báo thêm bản ghi DNS bằng cách:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns-custom # this is the name of the configmap you can overwrite with your changes\n  namespace: kube-system\ndata:\n    test.override: | # you may select any name here, but it must end with the .override file extension\n          hosts { \n              10.0.0.1 example1.org\n              10.0.0.2 example2.org\n              10.0.0.3 example3.org\n              fallthrough\n          }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable DNS query logging:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể sử dụng DNS logging để hỗ trợ debug phân giải domain trong coreDNS bằng cách thêm cấu hình vào trong configmap ", (0,jsx_runtime.jsx)(_components.em, {
        children: "custom-coredns"
      }), " trong namespace ", (0,jsx_runtime.jsx)(_components.em, {
        children: "kube-system"
      }), " như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns-custom\n  namespace: kube-system\ndata:\n  log.override: | # you may select any name here, but it must end with the .override file extension\n        log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./dich-vu-gpu-tren-k8s",
        children: " Previous Dịch vụ GPU trên K8s FPT Cloud  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./snapshot-v%C3%A0-restore-pvc-tr%C3%AAn-k8s-fpt",
        children: " Next Snapshot và restore persistent volume trong Kubernetes "
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