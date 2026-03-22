"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[1625],{

/***/ 102301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_storage_backup_persistent_storage_md_e03_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-storage-backup-persistent-storage-md-e03.json
const site_docs_dedicated_fpt_kubernetes_engine_storage_backup_persistent_storage_md_e03_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/storage-backup/persistent-storage","title":"2. Dedicated – FPT Kubernetes Engine","description":"Persistent Storage","source":"@site/docs/dedicated-fpt-kubernetes-engine/storage-backup/persistent-storage.md","sourceDirName":"dedicated-fpt-kubernetes-engine/storage-backup","slug":"/dedicated-fpt-kubernetes-engine/storage-backup/persistent-storage","permalink":"/dedicated-fpt-kubernetes-engine/storage-backup/persistent-storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"A. Block Persistent Storage:","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=persistent-storage","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Backup and restore cluster","permalink":"/dedicated-fpt-kubernetes-engine/storage-backup/backup-and-restore-cluster"},"next":{"title":"Tang storage size cua nfs","permalink":"/dedicated-fpt-kubernetes-engine/storage-backup/tang-storage-size-cua-nfs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/storage-backup/persistent-storage.md


const frontMatter = {
	sidebar_label: 'A. Block Persistent Storage:',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=persistent-storage',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "A. Block Persistent Storage:",
  "id": "a-block-persistent-storage",
  "level": 2
}, {
  "value": "B. File Persistent Storage:",
  "id": "b-file-persistent-storage",
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
    p: "p",
    pre: "pre",
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
      children: "Persistent Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FKE cung cấp cho người sử dụng 02 loại Persistent Storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a-block-persistent-storage",
      children: "A. Block Persistent Storage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi tạo Kubernetes Cluster, hệ thống tự động tạo Storage Class tương ứng với Storage Policy người sử dụng chọn khi tạo Kubernetes Cluster. User có thể sử dụng Storage Class này để tạo PVC dạng RWO."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Block Storage phù hợp cho các ứng dụng cần đọc ghi nhanh, databases…"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kiểm tra các Storageclass đang có:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get sc \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD để tạo PVC (persistent volume claim) sử dụng Storage class có sẵn, user tạo file app-disk.yaml như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-disk\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: premium-ssd\n  resources:\n    requests:\n      storage: 5Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó thực hiện tạo PVC từ file yaml."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl apply -f app-disk.yaml \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra lại PVC đã được tạo."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get pvc \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PVC sẽ ở trạng thái pending cho đến khi có Pod sử dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b-file-persistent-storage",
      children: "B. File Persistent Storage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi tạo Kubernetes Cluster, người sử dụng chọn enable NFS hoặc có thể enable sau khi tạo. Sau khi NFS được enable, Storage Class xplat-nfs sẽ được tạo trong cluster với storage size khi user nhập khi enable NFS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kiểm tra các Storageclass đang có:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get sc \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD để tạo PVC (persistent volume claim) sử dụng Storage class có sẵn, user tạo file app-disk.yaml như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-disk\nspec:\n  accessModes:\n    - ReadWriteMany\n  storageClassName: xplat-nfs\n  resources:\n    requests:\n      storage: 5Gi \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó thực hiện tạo PVC từ file yaml."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl apply -f app-disk.yaml \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra lại PVC đã được tạo."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get pvc \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./best-practice-manual-scaling",
        children: " Previous Best Practice Manual Scaling "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./service-type-load-balancer",
        children: " Next Service Type Load-Balancer "
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