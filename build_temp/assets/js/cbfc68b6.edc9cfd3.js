"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[63355],{

/***/ 108534
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_file_storage_high_performance_md_cbf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-file-storage-high-performance-md-cbf.json
const site_docs_fpt_managed_gpu_cluster_file_storage_high_performance_md_cbf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/file-storage-high-performance","title":"2. Managed GPU Cluster (Kubernetes)","description":"Hướng dẫn tích hợp File Storage – High Performance","source":"@site/docs/fpt-managed-gpu-cluster/file-storage-high-performance.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/file-storage-high-performance","permalink":"/fpt-managed-gpu-cluster/file-storage-high-performance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"File storage high performance","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=file-storage-high-performance","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chinh sua label taint cho worker group managed gpu cluster","permalink":"/fpt-managed-gpu-cluster/chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"},"next":{"title":"Chuẩn bị môi trường","permalink":"/fpt-managed-gpu-cluster/finetune-llm-models"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/file-storage-high-performance.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'File storage high performance',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=file-storage-high-performance',
	parent: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed GPU Cluster (Kubernetes)';

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
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "2-managed-gpu-cluster-kubernetes",
        children: "2. Managed GPU Cluster (Kubernetes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn tích hợp File Storage – High Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý điều kiện để sử dụng High Performance Storage bao gồm"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Các điều kiện bắt buộc để khởi tạo Managed GPU cluster (Active service, quota metal cloud, ssh key, internal subnet LB, ...). Tham khảo trong tài liệu khởi tạo Managed GPU Cluster ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=Initial-setup",
            children: "tại đây"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đảm bảo service File Storage – High Performance đã được enable và cấp quota trong tenant."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cần có MountPoint nào thuộc network của Metal cloud muốn sử dụng, di chuyển đến tab File Storage – High Performance để tạo MountPoint mới theo hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/documents/file-storage-high-performance/?doc=quan-ly-mountpoint",
            children: "tại đây"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable dịch vụ File Storage – High Performance với Managed GPU cluster trên giao diện FPTcloud Unify Portal."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ 1.1. Tích hợp với Managed GPU cluster tạo mới:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Trên menu của FPT Portal chọn AI Infrastructure → Managed GPU Cluster → Create a Managed GPU Cluster."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315568)/* ["default"] */ .A) + "",
        width: "1919",
        height: "905"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn đúng network của server Metal Cloud làm worker node trong GPU cluster, các mountpoint của File Storage – High Performance sẽ được hiển thị phụ thuộc theo network này."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Khi đã có MountPoint trong network metal cloud mong muốn, thực hiện enable File Storage – High Performance và chọn đúng MountPoint mong muốn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(500074)/* ["default"] */ .A) + "",
        width: "1902",
        height: "907"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Nếu tenant chưa được active dịch vụ File Storage – High Performance sẽ hiển thị thông báo sau, cần gửi yêu cầu active dịch vụ trước khi thực hiện tích hợp trên Managed GPU Cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334058)/* ["default"] */ .A) + "",
        width: "1264",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 4: Kiểm tra lại toàn bộ thông tin High Performance Storage Integration và tiến hành tạo cụm Managed GPU Cluster"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311332)/* ["default"] */ .A) + "",
        width: "1908",
        height: "904"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334438)/* ["default"] */ .A) + "",
        width: "1906",
        height: "907"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ 1.2. Tích hợp với Managed GPU cluster tạo mới:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Trên menu của FPT Portal chọn AI Infrastructure → Managed GPU Cluster → chọn cluster đã có để tích hợp File Storage – High Performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816745)/* ["default"] */ .A) + "",
        width: "1919",
        height: "906"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Managed GPU cluster tích hợp File Storage – High Performance phải ở trạng Succeeded (Running) mới có thể thực hiện tích hợp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Trong tab Essential Properties → High Performance Storage Integration, click Enable High Performance Storage → chọn MountPoint trong list sau đó click button “Confirm”."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287107)/* ["default"] */ .A) + "",
        width: "1907",
        height: "907"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(734801)/* ["default"] */ .A) + "",
        width: "1914",
        height: "909"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình tích hợp High Performance Storage sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), " cho đến khi tích hợp thành công. Cluster vẫn hoạt động bình thường khi thực hiện tích hợp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ 1.3. Hủy tích hợp File Storage – High Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉ hủy tích hợp File Storage – High Performance khi status của cluster là Succeeded (Running). Trước khi hủy bỏ tích hợp cần xóa toàn bộ PVC trong cluster sử dụng mountpoint đã chọn, việc hủy tích hợp không tự động xóa dữ liệu được ghi bởi Kubernetes trong thư mục của MountPoint."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Trên menu của FPT Portal chọn AI Infrastructure → Managed GPU Cluster → chọn cluster đã tích hợp File Storage – High Performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816745)/* ["default"] */ .A) + "",
        width: "1919",
        height: "906"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Trong tab Essential Properties → High Performance Storage Integration → disintegrate → Confirm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287107)/* ["default"] */ .A) + "",
        width: "1907",
        height: "907"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ 1.4. Thay đổi MountPoint tích hợp File Storage – High Performance trong Managed GPU cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong một thời điểm chỉ có thể sử dụng một MountPoint trên Managed GPU cluster, để thay đổi MountPoint sử dụng trong cluster, cần thực hiện lần lượt thao tác hủy tích hợp MountPoint cũ (mục 2.3) sau đó tích hợp MountPoint mới cho cluster (mục 2.2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn sử dụng MountPoint của File Storage – High Performance trong Managed GPU cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Sau khi tích hợp thành công, trong cluster sẽ có sẵn storageclass để tạo các Persistence Volume (PV) nằm trong thư mục được gán path của MountPoint. Tên của storageclass là tên QoS Policy của MountPoint được tích hợp."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ MountPoint có path là /k8s-cluster1 thì các PV được tạo bởi CSI trong Kubernetes sẽ có đường dẫn là /k8s-cluster1/PV1 , /k8s-cluster1/PV2 ..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491410)/* ["default"] */ .A) + "",
        width: "1218",
        height: "79"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Tạo PersistentVolumeClaim (PVC) sử dụng storageclass sẵn có của hệ thống tạo ra cho MountPoint đã tích hợp, do VOLUMEBINDINGMODE của storageclass là WaitForFirstConsumer nên cần có Pod sử dụng PVC này để CSI thực hiện việc tạo PV và bind với PVC."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Không chỉnh sửa cấu hình storageclass mặc định của cluster nếu người dùng thay đổi cấu hình đó, nó sẽ tự động được rollback lại cấu hình ban đầu của hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Ví dụ manifest của một PVC:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1 \n\nkind: PersistentVolumeClaim \n\nmetadata: \n\n  name: csi-pvc-dynamic-1 \n\n  namespace: default \n\nspec: \n\n  accessModes: \n\n    - ReadWriteMany \n\n  resources: \n\n    requests: \n\n      storage: 15Gi \n\n  storageClassName: k8s-tester \n\n  volumeMode: Filesystem\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Để resize dung lượng của PVC cần thực hiện chỉnh sửa trực tiếp resource PVC tại trường spec.resources.requests.storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Không thể giảm dung lượng (chỉ tăng). Nếu PVC đang được sử dụng bởi Pod, hệ thống sẽ tự động resize dung lượng của mountPath trong Pod (resize volume online)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./trien-khai-ung-dung-tren-worker-managed-gpu-cluster",
        children: " Previous Triển khai mô hình DeepSeek-R1 sử dụng Ollama và Open WebUI "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./slurm-on-fpt-cloud",
        children: " Next Slurm on FPTCloud Managed GPU cluster "
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

/***/ 816745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d6e69ee6076-7-3-442d2cc902156a7f44c3d8ecf2ba748c.png");

/***/ },

/***/ 311332
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/28b8ca38bc3f-5-3-d5209e89cb04076864cf095f4838169c.png");

/***/ },

/***/ 334438
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3e1f42fcee2d-6-3-76e8c1f02966df4e51e17a43f5a7300f.png");

/***/ },

/***/ 334058
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/543f9c6b712b-3-4-7541896c9f39d6eb423a5f817fbb3c84.png");

/***/ },

/***/ 734801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6b1d861c3dc2-9-2-be256d29f5495b854430c7f6d7bd5a7e.png");

/***/ },

/***/ 500074
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8169c04875f7-4-1-b98631f1b7d373f757c2bb3c6ad8d8e5.png");

/***/ },

/***/ 287107
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9dec85a01d0f-8-2-b0837df0991bf1e6821f92a902ebbfde.png");

/***/ },

/***/ 315568
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e29aaa5fd37b-1-4-dcea3afcce1754be338aee6080c60207.png");

/***/ },

/***/ 491410
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3187fe22562-11-2-7e4139d894027ca8bf091dfd1cf43193.png");

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