"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[32536],{

/***/ 436800
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_mfke_faqs_md_766_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-mfke-faqs-md-766.json
const site_docs_managed_fpt_kubernetes_engine_mfke_faqs_md_766_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/mfke-faqs","title":"2. Managed – FPT Kubernetes Engine","description":"FAQs","source":"@site/docs/managed-fpt-kubernetes-engine/mfke-faqs.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/mfke-faqs","permalink":"/managed-fpt-kubernetes-engine/mfke-faqs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Mfke faqs","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=mfke-faqs","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Lay thong tin truy cap cluster","permalink":"/managed-fpt-kubernetes-engine/lay-thong-tin-truy-cap-cluster"},"next":{"title":"Microservices architecture on fke","permalink":"/managed-fpt-kubernetes-engine/microservices-architecture-on-fke"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/mfke-faqs.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Mfke faqs',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=mfke-faqs',
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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. M-FKE hỗ trợ ở các regions nào?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại FPTCloud đang hỗ trợ 04 Regions bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAN (Hanoi)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SGN (Saigon/HCM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAN2 (HoaLac)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JPN01 (Japan)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE hỗ trợ tương ứng ở cả 04 Regions trên."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Một cluster M-FKE có thể trải trên nhiều regions không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE không hỗ trợ một cluster chạy trên nhiều regions. Bạn có thể tạo cluster trên mỗi region cho cùng một ứng dụng để thực hiện BC&DR.;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. M-FKE có hỗ trợ nhiều cấu hình VM trong một cluster không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE hỗ trợ nhiều cầu hình VM trong một cluster bằng cách sử dụng worker groups, mỗi worker groups có thể có cấu hình khác nhau. Các Worker Nodes trong cùng một worker group có cấu hình giống nhau (CPU, RAM, DISK)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. M-FKE hỗ trợ bao nhiêu Worker Nodes trong một cluster?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE mặc định giới hạn tối đa 100 Worker Nodes / Woker Group & 100 Worker Groups / Cluster. Bạn cần liên hệ với FPT Cloud để tăng giới hạn Worker Nodes nếu có nhu cầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. M-FKE có tương thích với các ứng dụng Kubernetes hiện có của tôi không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE sử dụng native Kubernetes nên hoàn toàn tương thích với các nên tảng Kubernetes trên các Cloud khác như AWS, Azure, GCP, DO… cũng như cluster Kubernetes được bạn cài đặt trên hạ tầng của bạn. Điều này giúp bạn dễ dàng di chuyển ứng dụng giữa FPT Cloud và DC của bạn cũng như các Cloud khác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Làm thế nào để tôi có thể public ứng dụng ra bên ngoài cluster?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Có nhiều cách để bạn có thể public ứng dụng ra ngoài cluster để khách hàng có thể sử dụng. Một trong những cách đơn giản là sử dụng Svc Type LoadBalancer theo hướng dẫn sau: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../documents/managed-fpt-kubernetes-engine/?doc=service-type-load-balancer",
        children: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=service-type-load-balancer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Làm thế nào để tôi có thể giám sát hiệu năng và cấu hình cảnh báo cho cluster?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPTCloud cung cấp sản phẩm FMON giúp bạn giám sát hiệu năng và cấu hình cảnh báo cho Kubernetes cluster. Ngoài ra, FMON cung cấp logging & tracing dễ dàng tích hợp với FKE."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Worker group base là gì? Có xóa được worker group base không?"
      }), " M-FKE cluster luôn luôn có một worker group base chứa các thành phần hệ thống nằm trong namespace kube-system như là coredns, cni-controller, metrics-server. Worker group base không được phép xóa khỏi cluster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "9. Làm thế nào để thay đổi cấu hình flavor, disk của các worker group hiện tại?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE không hỗ trợ thay đổi trực tiếp cấu hình flavor, disk size của các worker group hiện tại. Để thay đổi cấu hình flavor, disk theo mong muốn, người dùng tạo worker group với cấu hình tương ứng và chuyển ứng dụng từ worker group cũ sang worker group mới, cuối cùng xóa worker group cũ không dùng đến."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "10. Tài nguyên cpu, memory của các node trong worker group sắp quả tải, tại sao cluster lại không scale thêm node mới?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cluster Autoscale (CA) không scale in/out dựa vào tài nguyên thực dùng của các node mà dựa vào lượng tài nguyên request của các pod (bao gồm CPU và Memory) đặt trên node. Cluster Autoscaler thực hiện scale thêm node mới trong trường hợp có pod pending do không có node nào đủ tài nguyên request đáp ứng pod đó. Khi đó CA scale thêm node mới và pod pending trước đó sẽ được đặt trên node mới này."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "11. Tài nguyên cpu, memory của các node trong worker group rất ít, tại sao cluster lại không scale bớt các worker nodes?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cluster Autoscale (CA) không scale in/out dựa vào tài nguyên thực dùng của các node mà dựa vào lượng tài nguyên request của các pod (bao gồm CPU và Memory) đặt trên node. Cluster Autoscaler thực hiện scale bớt các node không đáp ứng đủ lượng utilization 50% (tài nguyên request / tài nguyên allocate) trong vòng 30 phút."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12. Quá trình upgrade cluster có hoàn toàn tự động và đảm bảo thành công 100% hay không? Liệu có thể gây downtime dịch vụ không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE upgrade cluster theo cơ chế rollout worker node. Các worker nodes version k8s mới hơn sẽ được tạo và join vào cluster. Sau đó các pod ở worker nodes version k8s cũ sẽ được chuyển sang các worker nodes version k8s mới. Hầu hết quá trình upgrade cluster đều tự động và thành công. Tuy nhiên người dùng cần để ý trường hợp M-FKE không thể tự động evict các pod ở worker nodes version k8s cũ ví dụ như khi pod vi phạm PDB. Quá trình upgrade cluster có thể gây downtime dịch vụ từ khi các pod trên worker nodes k8s version cũ bị xóa cho đến khi các pod mới được triển khai lên các worker nodes k8s version mới. Quá trình đợi pod cũ bị evict và pod mới running hoàn toàn có thể kéo dài trong trường hợp pod sử dụng Persistent Volume. Vì thế người dùng cần chủ động theo dõi quá trình upgrade để đảm bảo tính ổn định của hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "13. Có đánh taints cho worker group base được không?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker group base chỉ hỗ trợ đánh label, không hỗ trợ đánh taints. Vì khi đánh taints cho worker group base trong khi các worker nodes trong group base không có tolerations để triển khai các pod của hệ thống lên trên worker base đó dẫn đến hoạt động của cluster sẽ gặp vấn đề. MFKE khuyến nghị người quản trị nên triển khai ứng dụng lên các worker group khác để tránh ảnh hưởng hoạt động của hệ thống."
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