"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[59352],{

/***/ 763914
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_snapshot_persistent_volume_tren_k_8_s_md_932_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-snapshot-persistent-volume-tren-k-8-s-md-932.json
const site_docs_managed_fpt_kubernetes_engine_snapshot_persistent_volume_tren_k_8_s_md_932_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng snapshot Persistent Volume trên kubernetes","source":"@site/docs/managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s","permalink":"/managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Snapshot persistent volume tren k8s","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=snapshot-persistent-volume-tren-k8s","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Service type load balancer","permalink":"/managed-fpt-kubernetes-engine/service-type-load-balancer"},"next":{"title":"Snapshot v restore pvc tr n k8s fpt","permalink":"/managed-fpt-kubernetes-engine/snapshot-v-restore-pvc-tr-n-k8s-fpt"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/snapshot-persistent-volume-tren-k8s.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Snapshot persistent volume tren k8s',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=snapshot-persistent-volume-tren-k8s',
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
    img: "img",
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
      children: "Tính năng snapshot Persistent Volume trên kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tính năng snapshot persistent volume (PV) giúp người dùng có thể tạo snapshot của một PV trên M-FKE kubernetes cluster bằng cách cấu hình và triển khai file yaml định nghĩa pvc mong muốn snapshot. Sau khi resource snapshot trong kubernetes cluster được tạo ra, một bản snapshot tương ứng sẽ được tạo mới ở VPC. Việc snapshot volume trên MFKE được thực hiện bởi thành phần VolumeSnapshotClass, người dùng chỉ cần định nghĩa tên của pvc cần snapshot. Người dùng cũng có thể chủ động lập lịch snapshot PV định kì bằng cách tạo script liên tục call api tạo snapshot trong kubernetes. Tài liệu tham khảo tính năng snapshot volume trên kubernetes ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://kubernetes.io/docs/concepts/storage/volume-snapshots/"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong kubernetes, volume snapshot là một bản copy point-in-time của nội dùng PV trong cluster. Người dùng có thể sử dụng snapshot để backup dữ liệu của cluster hoặc copy dữ liệu tới các resource khác mà không cần tạo mới volume."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trước tiên người dùng cần cấu hình VolumeSnapshotClass nếu trong cluster chưa tồn tại VolumeSnapshotClass nào:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\nname: csi-cinder-snapclass\nannotations:\nsnapshot.storage.kubernetes.io/is-default-class: \"true\"\ndriver: cinder.csi.openstack.org\ndeletionPolicy: Delete\nparameters:\ntype: [type-storage-policy]\nforce-create: \"true\""
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó ", (0,jsx_runtime.jsx)(_components.em, {
        children: "[type-storage-policy]"
      }), " là loại storage policy người dùng sử dụng, có thể lấy thông tin này ở trường parametes/type trong cấu hình storageClass default."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng cần có một volume đang được sử dụng trong cluster (được tạo bởi PVC). Giả sử cấu hình của PVC như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: test-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 20Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng tạo một bản snapshot volume bằng cách định nghĩa VolumeSnapshot trong kubernetes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: new-snapshot-test\n  namespace: default\nspec:\n  volumeSnapshotClassName: csi-cinder-snapclass\n  source:\n    persistentVolumeClaimName: test-pvc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "volumeSnapshotClassName"
        }), " được cung cấp mặc định bởi FPTCloud, người dùng có thể sử dụng ", (0,jsx_runtime.jsx)(_components.em, {
          children: "volumeSnapshotClassName"
        }), " theo cấu hình nhu cầu mong muốn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "persistentVolumeClaimName"
        }), " là tên PVC mong muốn tạo snapshot."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo xong snapshot trong kubernetes, người dùng kiểm tra lại snapshot trên tab snapshot ở mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unify Portal"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615009)/* ["default"] */ .A) + "",
        width: "624",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "và kiểm tra trong kubernetes bằng câu lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get volumesnapshots.snapshot.storage.k8s.io -n default\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./snapshot-v%C3%A0-restore-pvc-tr%C3%AAn-k8s-fpt",
        children: " Previous Snapshot và restore persistent volume trong Kubernetes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-persistent-volume-tren-k8s",
        children: " Next Tính năng restore volume từ snapshot trên kubernetes "
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

/***/ 615009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9ab1ccda6171-Picture1-6-10b4245af9e48a6abc5de654b69bddd3.png");

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