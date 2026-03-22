"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[30400],{

/***/ 877738
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_thuc_hien_dat_lich_snapshot_pvc_md_102_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-thuc-hien-dat-lich-snapshot-pvc-md-102.json
const site_docs_managed_fpt_kubernetes_engine_thuc_hien_dat_lich_snapshot_pvc_md_102_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc","title":"2. Managed – FPT Kubernetes Engine","description":"Thực hiện đặt lịch Snapshot PVC trên Kubernetes","source":"@site/docs/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc","permalink":"/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Thuc hien dat lich snapshot pvc","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thuc-hien-dat-lich-snapshot-pvc","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Them worker group","permalink":"/managed-fpt-kubernetes-engine/them-worker-group"},"next":{"title":"Thuc hien dat lich xoa pvc snapshot","permalink":"/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-xoa-pvc-snapshot"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/thuc-hien-dat-lich-snapshot-pvc.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Thuc hien dat lich snapshot pvc',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thuc-hien-dat-lich-snapshot-pvc',
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
    h1: "h1",
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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện đặt lịch Snapshot PVC trên Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bên cạnh tính năng Snapshot PV trên Kubernetes, FPTCloud cung cấp thêm cho khách hàng lựa chọn thực hiện đặt lịch Snapshot thông qua CronJob trên Kubernetes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Cài đặt Lịch Cronjob Snapshot PV"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Khách hàng cần cung cấp quyền trong cụm Kubernetes cho Cronjob với việc apply ClusterRoleBinding và ServiceAccount tương ứng:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1 \nkind: ServiceAccount \nmetadata: \n  name: snapshot-sa \n  namespace: default #or any other namespace that you want to deploy the cronjob \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Khách hàng apply ClusterRoleBinding với để cấp quyền tới các SA mà khách hàng vừa tạo, lưu ý rằng subjects cần phải có đủ các SA ở các namespace tương ứng mà người dùng vừa tạo ở trên:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: rbac.authorization.k8s.io/v1  \nkind: ClusterRoleBinding  \nmetadata:  \n  name: grant-snapshot-sa-admin  \nsubjects:  \n  - kind: ServiceAccount  \n    name: snapshot-sa  \n    namespace: default #or any other namespace that you want to deploy the cronjob  \n  - kind: ServiceAccount  \n    name: snapshot-sa  \n    namespace: namespace1 #if user wants to have multiple cronjob in multiple namespace \nroleRef:  \n  kind: ClusterRole  \n  name: cluster-admin  \n  apiGroup: rbac.authorization.k8s.io \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Người dùng có thể check lại ClusterRoleBinding bằng cách dùng câu lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get clusterrolebinding grant-snapshot-sa-admin -oyaml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Áp dụng CronJob để đặt lịch tự động Snapshot PVC theo format sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: batch/v1 \nkind: CronJob \nmetadata: \n  name: pvc-snapshot #or any other name that you want to set \n  namespace: default #or any other namespace that you want to deploy the cronjob, but must be in the same namespace with ServiceAccount and ClusterRoleBinding \nspec: \n  schedule: \"0 * * * *\" #Adjust this (minute hour day(month) month day(week)) \n    timeZone: “Asia/Saigon” \n  jobTemplate: \n    spec: \n      template: \n        spec: \n          serviceAccountName: snapshot-sa #Remember to match the name of ServiceAccount that deployed previously \n          containers: \n            - name: pvc-snapshot \n              image: registry.fke.fptcloud.com/xplat-fke/snapshot-pvc:v0.1.0 \n              env: \n                - name: PVC_NAME \n                  value: \"your-pvc-name\" #name of the PVC that you want to apply Cronjob to \n                - name: NAMESPACE \n                  value: \"your-pvc-namespace\" #namespace of the above PVC \n          restartPolicy: OnFailure \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Xóa lịch Cronjob cho Snapshot PV"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu như không còn nhu cầu đặt lịch cho việc tự động Snapchot cho PVC, người dùng có thể đơn giản xóa đi Cronjob tương ứng đã khởi tạo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get volumesnapshots.snapshot.storage.k8s.io -A \n\nNAMESPACE   NAME                             READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS          SNAPSHOTCONTENT                                    CREATIONTIME   AGE \n\nexample     wp-pv-claim-example-2412020736   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-045fe85e-7471-4bfb-9a55-2ed2ed2263dd   64m            64m \n\nexample     wp-pv-claim-example-2412020836   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-fd1333bc-70f6-417f-a91d-10349aa0647d   4m11s          4m11s \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ở đây, wp-pv-claim-default-2412020736 có ý nghĩa:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "wp-pv-claim: tên PVC"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "default: tên namespace"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2412020733: 24(năm), 12 (tháng), 02 (ngày), 07 (giờ), 36 (phút) (UTC +0)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉ có thể set một CronJob cho một PVC, vì vậy nếu người dùng mong muốn có thể đặt lịch cho nhiều PVC một lúc, hay tạo nhiều lịch cho một PVC, vui lòng tạo nhiều CronJob tương ứng với mong muốn của người dùng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi đến thời điểm 1 Job mới được chạy, một pod sẽ được tạo ra để tự động hóa việc tạo Snapshot cho PVC, người dùng có thể kiểm tra bằng các lệnh như:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl get volumesnapshots.snapshot.storage.k8s.io -n"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl get jobs.batch -n"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "v.v"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong image cung cấp của FPTCloud không có tính năng Retention, vậy nên khách hàng cần chủ động vào xóa các bản Snapshot của mình, tránh bị đầy disk storage quota."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-persistent-volume-tren-k8s",
        children: " Previous Tính năng restore volume từ snapshot trên kubernetes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./thuc-hien-dat-lich-xoa-pvc-snapshot",
        children: " Next Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes  "
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