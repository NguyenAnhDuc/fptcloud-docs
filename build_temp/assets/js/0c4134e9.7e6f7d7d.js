"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[65090],{

/***/ 187613
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_security_version_cac_luu_y_khi_su_dung_m_fke_md_0c4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-security-version-cac-luu-y-khi-su-dung-m-fke-md-0c4.json
const site_docs_managed_fpt_kubernetes_engine_security_version_cac_luu_y_khi_su_dung_m_fke_md_0c4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/security-version/cac-luu-y-khi-su-dung-m-fke","title":"2. Managed – FPT Kubernetes Engine","description":"Các lưu ý khi sử dụng M-FKE","source":"@site/docs/managed-fpt-kubernetes-engine/security-version/cac-luu-y-khi-su-dung-m-fke.md","sourceDirName":"managed-fpt-kubernetes-engine/security-version","slug":"/managed-fpt-kubernetes-engine/security-version/cac-luu-y-khi-su-dung-m-fke","permalink":"/managed-fpt-kubernetes-engine/security-version/cac-luu-y-khi-su-dung-m-fke","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cac luu y khi su dung m fke","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cac-luu-y-khi-su-dung-m-fke","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Audit log vn","permalink":"/managed-fpt-kubernetes-engine/security-version/audit-log-vn"},"next":{"title":"Cau hinh proxy protocol cho istio ingress","permalink":"/managed-fpt-kubernetes-engine/security-version/cau-hinh-proxy-protocol-cho-istio-ingress"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/security-version/cac-luu-y-khi-su-dung-m-fke.md


const frontMatter = {
	sidebar_label: 'Cac luu y khi su dung m fke',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cac-luu-y-khi-su-dung-m-fke',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "1. Sử dụng Namespaces",
  "id": "1-sử-dụng-namespaces",
  "level": 3
}, {
  "value": "2. Sử dụng worker group",
  "id": "2-sử-dụng-worker-group",
  "level": 3
}, {
  "value": "3. Sử dụng Readiness &amp; Liveness Probes",
  "id": "3-sử-dụng-readiness--liveness-probes",
  "level": 3
}, {
  "value": "4. Đặt Resource Requests &amp; Limits",
  "id": "4-đặt-resource-requests--limits",
  "level": 3
}, {
  "value": "5. Sử dụng Autoscale",
  "id": "5-sử-dụng-autoscale",
  "level": 3
}, {
  "value": "6. Sử dụng nhiều Pod (&gt;=2)",
  "id": "6-sử-dụng-nhiều-pod-2",
  "level": 3
}, {
  "value": "7. Sử dụng Persistent Volume",
  "id": "7-sử-dụng-persistent-volume",
  "level": 3
}, {
  "value": "8. Backup",
  "id": "8-backup",
  "level": 3
}, {
  "value": "9. Monitoring &amp; Logging",
  "id": "9-monitoring--logging",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
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
      children: "Các lưu ý khi sử dụng M-FKE"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-sử-dụng-namespaces",
      children: "1. Sử dụng Namespaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo namespace để phân chia ứng dụng hoặc môi trường để dễ dàng quản lý. Tránh sử dụng các namespace được hệ thống tạo sẵn để deploy ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-sử-dụng-worker-group",
      children: "2. Sử dụng worker group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi tạo k8s cluster, hệ thống yêu cầu tối thiểu 01 worker group (base) để chưa các thành phần hệ thống (connector, metrics-server…). Với môi trường Production yêu cầu HA cao, nên cấu hình tối thiểu 03 worker cho group base và sử dụng worker group riêng cho ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-sử-dụng-readiness--liveness-probes",
      children: "3. Sử dụng Readiness & Liveness Probes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giúp đảm bảo tính sẵn sàng của ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Readiness Probes đảm bảo request được điều hướng tới pod chỉ khi pod đó ở trạng thái sẵn sàng để nhận request. Các Pod thường tốn thời gian để start ứng dụng, việc đặt Readiness Probes giúp service không điều hướng request đến các Pod khi start (ứng dụng chưa ready)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Liveness Probes đảm bảo Pod chạy ứng dụng đang ở trạng thái Running, nếu Liveness Probes fail, pod sẽ được restart."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-đặt-resource-requests--limits",
      children: "4. Đặt Resource Requests & Limits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giúp container đảm bảo đủ lượng resources để chạy và không chạy quá lượng resource cho phép. Nếu không có limits, pod có thể sử dụng nhiều resource quá tài nguyên cho phép, có thể làm Node crash."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-sử-dụng-autoscale",
      children: "5. Sử dụng Autoscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng tính năng Autoscale của FKE dựa trên Kubernetes HPA giúp ứng dụng đáp ứng nhanh khi lượng truy cập tăng cao. Khi lưu lượng sử dụng sử dụng thấp, hệ thống sẽ tự động giảm các Pod/Nodes về mức tối thiểu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-sử-dụng-nhiều-pod-2",
      children: "6. Sử dụng nhiều Pod (>=2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đảm bảo HA, nên sử dụng >=2 Pod cho mỗi service. Sử dụng anti-affinity để các replica pods nằm trên các Nodes khác nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-sử-dụng-persistent-volume",
      children: "7. Sử dụng Persistent Volume"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE hỗ trợ Block Storage. Block Storage là lựa chọn mặc định cho hệ thống, hỗ trợ RWO, đáp ứng performance tốt theo Storage Policy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-backup",
      children: "8. Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người sử dụng cần tự thực hiện việc backup dữ liệu trên PVC (nếu có). Có thể backup ra VM sau đó thực hiện backup VM sử dụng giải pháp FCloud Backup & Recovery."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-monitoring--logging",
      children: "9. Monitoring & Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng FMON để tích hợp monitor & log với Kubernetes cluster. Đặt cảnh báo cho hệ thống."
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