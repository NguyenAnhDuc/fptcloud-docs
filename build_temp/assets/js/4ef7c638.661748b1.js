"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[58441],{

/***/ 731077
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_thuc_hien_dat_lich_xoa_pvc_snapshot_md_4ef_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-thuc-hien-dat-lich-xoa-pvc-snapshot-md-4ef.json
const site_docs_managed_fpt_kubernetes_engine_thuc_hien_dat_lich_xoa_pvc_snapshot_md_4ef_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot","title":"2. Managed – FPT Kubernetes Engine","description":"Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes","source":"@site/docs/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot","permalink":"/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Thuc hien dat lich xoa pvc snapshot","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thuc-hien-dat-lich-xoa-pvc-snapshot","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Thuc hien dat lich snapshot pvc","permalink":"/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc"},"next":{"title":"Tinh nang benchmark cluster","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-benchmark-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Thuc hien dat lich xoa pvc snapshot',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thuc-hien-dat-lich-xoa-pvc-snapshot',
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
      children: "Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPTCloud cung cấp thêm cho khách hàng lựa chọn đặt lịch xóa các Snapshot PVC dựa trên tên PVC, namespace tương ứng, và khoảng thời gian mong muốn xóa, được tính theo giờ (hours), hoặc ngày (days)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt lịch Cronjob Cleanup Snapshot PVC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Khách hàng cần cung cấp quyền trong cụm Kubernetes cho Cronjob với việc apply ServiceAccount và ClusterRoleBinding tương ứng:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1 \nkind: ServiceAccount \nmetadata: \n  name: cleanup-snapshot-sa \n  namespace: default #or any other namespace that you want to deploy the cronjob \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Khách hàng apply ClusterRoleBinding để cấp quyền tới các ServiceAccount (SA) mà khách hàng vừa tạo, lưu ý rằng ", (0,jsx_runtime.jsx)(_components.em, {
        children: "subjects"
      }), " cần phải có đủ các SA ở các namespace tương ứng mà người dùng vừa tạo ở trên:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: rbac.authorization.k8s.io/v1  \nkind: ClusterRoleBinding  \nmetadata:  \n  name: grant-cleanup-snapshot-sa-admin  \nsubjects:  \n  - kind: ServiceAccount  \n    name: cleanup-snapshot-sa  \n    namespace: default #or any other namespace that you want to deploy the cronjob  \n\n - kind: ServiceAccount  \n    name: cleanup-snapshot-sa  \n    namespace: namespace1 #if user wants to have multiple cronjob in multiple namespace \nroleRef:  \n  kind: ClusterRole  \n  name: cluster-admin  \n  apiGroup: rbac.authorization.k8s.io \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Người dùng có thể check lại ClusterRoleBinding bằng cách dùng câu lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get clusterrolebinding grant-cleanup-snapshot-sa-admin \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Áp dụng Cronjob để tự động xóa Snapshot PVC theo format sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: batch/v1 \n\nkind: CronJob \n\nmetadata: \n\n  name: cleanup-snapshots \n\nspec: \n\n  schedule: \"0 2 * * *\" #Adjust this (minute hour day(month) month day(week)) \n\n  timeZone: \"Asia/Saigon\" \n\n  jobTemplate: \n\n    spec: \n\n      template: \n\n        spec: \n\n          serviceAccountName: cleanup-snapshot-sa #match with service account name \n\n          containers: \n\n          - name: snapshot-cleanup \n\n            image: registry.fke.fptcloud.com/xplat-fke/cleanup-snapshot-pvc:v0.1.0   \n\n            env: \n\n            - name: NAMESPACE \n\n              value: \"your-pvc-namespace\" #Replace with your PVC namespace \n\n            - name: PVC_NAME \n\n              value: \"your-pvc\"  #Replace with your PVC name \n\n            - name: RETENTION_MAX \n\n              value: \"7\" #or any int > 0 \n\n            - name: RETENTION_UNITS \n\n              value: \"days\" #or \"hours\" \n\n          restartPolicy: OnFailure \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xoá lịch Cleanup cho Snapshot PVC"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu như không còn nhu cầu đặt lịch cho việc tự động xóa Snapchot cho PVC, người dùng có thể đơn giản xóa đi Cronjob tương ứng đã khởi tạo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./thuc-hien-dat-lich-snapshot-pvc",
        children: " Previous Thực hiện đặt lịch Snapshot PVC trên Kubernetes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-proxy-protocol",
        children: " Next Cấu hình proxy protocol "
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