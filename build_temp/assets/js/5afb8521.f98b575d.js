"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[94887],{

/***/ 213461
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_initial_khoi_tao_managed_gpu_cluster_moi_md_5af_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-initial-khoi-tao-managed-gpu-cluster-moi-md-5af.json
const site_docs_fpt_managed_gpu_cluster_initial_khoi_tao_managed_gpu_cluster_moi_md_5af_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/initial/khoi-tao-managed-gpu-cluster-moi","title":"2. Managed GPU Cluster (Kubernetes)","description":"Khởi tạo Managed GPU Cluster mới","source":"@site/docs/fpt-managed-gpu-cluster/initial/khoi-tao-managed-gpu-cluster-moi.md","sourceDirName":"fpt-managed-gpu-cluster/initial","slug":"/fpt-managed-gpu-cluster/initial/khoi-tao-managed-gpu-cluster-moi","permalink":"/fpt-managed-gpu-cluster/initial/khoi-tao-managed-gpu-cluster-moi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khoi tao managed gpu cluster moi","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=khoi-tao-managed-gpu-cluster-moi","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/fpt-managed-gpu-cluster/initial/initial-setup"},"next":{"title":"Lay thong tin truy cap cluster","permalink":"/fpt-managed-gpu-cluster/initial/lay-thong-tin-truy-cap-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/initial/khoi-tao-managed-gpu-cluster-moi.md


const frontMatter = {
	sidebar_label: 'Khoi tao managed gpu cluster moi',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=khoi-tao-managed-gpu-cluster-moi',
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
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "2-managed-gpu-cluster-kubernetes",
        children: "2. Managed GPU Cluster (Kubernetes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo Managed GPU Cluster mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số điều kiện bắt buộc để thực hiện thao tác này:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quota Metal Cloud (Bare Metal HPC) phải đáp ứng đủ số lượng mong muốn của Cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ít nhất 01 BM server Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ít nhất 01 Network cho Load Balancer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên menu của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Infrastructure"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed GPU Cluster"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Managed GPU Cluster"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23133)/* ["default"] */ .A) + "",
        width: "1916",
        height: "903"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập thông tin tại tab General Information của cụm Cluster sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(112044)/* ["default"] */ .A) + "",
        width: "1919",
        height: "906"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "General Information:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Name"
      }), " : Nhập tên Cluster, tên của các Cluster phải khác nhau và đúng quy tắc."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Network"
      }), " : Chọn từ dải subnet đã tạo cho Bare Metal GPU Servers"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Version"
      }), " : Chọn version Kubernetes phù hợp với ứng dụng hiện tại của khách hàng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Internal LB Subnet"
      }), " : Cấu hình dải private IP cho service type Load Balancer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• SSH Public Key"
      }), " : SSH Key để SSH vào Worker node của Cluster"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập thông tin tại tab Nodes Pool của cụm Cluster sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Những điểm cần lưu ý khi tạo cụm Cluster MANAGED GPU CLUSTER:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Managed GPU Cluster"
          }), " quản lý các Worker nodes thông qua Worker Group, là một nhóm bao gồm các Worker nodes có cấu hình giống nhau. Người sử dụng có thể phân chia Worker Groups cho các ứng dụng phù hợp. Hệ thống yêu cầu tối thiểu phải có 01 Worker Group (Base), người sử dụng không thể xoá Worker Group này."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong mục cấu hình Worker Group, người dùng có thể thực hiện gán label cho Worker Group mong muốn. Label này sẽ được áp dụng cho tất cả các Worker nodes thuộc Worker Group. Người dùng có thể thêm nhiều hoặc bỏ bớt các label, cũng như chỉnh sửa key/value của các label có sẵn. Các label này giúp người dùng dễ dàng trong việc triển khai ứng dụng trên các Worker Group riêng biệt theo nhu cầu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763470)/* ["default"] */ .A) + "",
        width: "1906",
        height: "905"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker group 1 (Base)"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Group Name"
      }), " : Đặt tên cho Worker Group để phân biệt các Worker Group với nhau."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Runtime"
      }), " : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Number of Server"
      }), " : Số Metal Cloud Server được tạo ra để chạy Worker trong Cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Flavor"
      }), " : Flavor type của Metal cloud GPU server, mặc định là H100."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Label"
      }), " : Đánh Label trong Kubernetes cho tất cả Worker trong Worker Group"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể thêm các worker group khi khởi tạo k8s cluster bằng cách click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADD WORKER GROUP"
      }), ". ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102554)/* ["default"] */ .A) + "",
        width: "1906",
        height: "907"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, từ Worker Group 2 trở đi người dùng có thể cấu hình taint cho các worker group nhằm mục đích schedule ứng dụng trên các worker nodes. Các taint cũng có thể thêm, xóa, chỉnh sửa dễ dàng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(734555)/* ["default"] */ .A) + "",
        width: "1912",
        height: "909"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Người dùng khi cấu hình label/taint cho worker group trên Unify Portal sẽ không thể xóa label/taint cho node trong worker group đó bằng kubectl (Hệ thống sẽ tự động thêm lại label/taint cho node theo cấu hình trên Unify Portal) do đó cần xóa cấu hình label/taint trên Unify Portal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Group n"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể thêm các Worker Group khi khởi tạo K8s Cluster bằng cách nhấn button ADD WORKER GROUP."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, từ Worker Group 2 trở đi người dùng có thể cấu hình taint cho các Worker Group nhằm mục đích schedule ứng dụng trên các Worker nodes. Các taint cũng có thể thêm, xóa, chỉnh sửa dễ dàng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tìm hiểu thêm về Taints ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
        children: "tại đây"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Người dùng khi cấu hình label/taint cho Worker Group trên Portal sẽ không thể xóa label/taint cho node trong Worker Group đó bằng kubectl (Hệ thống sẽ tự động thêm lại label/taint cho node theo cấu hình trên Portal) do đó cần xóa cấu hình label/taint trên Portal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " là các cài đặt nâng cao"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714514)/* ["default"] */ .A) + "",
        width: "1570",
        height: "710"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Pod Network"
      }), " : Network sử dụng cho Pod trong Cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Service Network"
      }), " : Network sử dụng cho Service trong Cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Network Node Prefix"
      }), " : Số Pod tối đa trên mỗi Managed GPU Node."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Max Pod per Node"
      }), " : Loại CNI được cài cho Cluster, chỉ hỗ trợ loại Calico"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 5: Màn hình Review & Create sẽ hiển thị các thông tin cụm Cluster người dùng đã cấu hình trước đó và hệ thống tự động kiểm tra quota Bare Metal GPU server có đủ để khởi tạo Cluster hay không"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463813)/* ["default"] */ .A) + "",
        width: "1578",
        height: "704"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hệ thống kiểm tra tài nguyên thành công, nhấn button Create a Managed GPU Cluster để tiến hành tạo cụm Cluster."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-managed-gpu-cluster",
        children: " Previous Quản lý Managed GPU Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-danh-sach-managed-gpu-cluster",
        children: " Next Xem danh sách Managed GPU Cluster đã tạo "
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

/***/ 463813
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c3879d84282-7-1-b9dd04bc59dde1604ddf01aca0afb665.png");

/***/ },

/***/ 714514
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/126a59aec946-6-1-8ec5b12282fa46044e90fe781e48aff1.png");

/***/ },

/***/ 112044
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15b5adf977f7-4-24a3cc12597cff1d2e43220ddd3a9648.png");

/***/ },

/***/ 763470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/467b1d560b1a-5-1-629ae892ccc16af3faea8545a0ed3c67.png");

/***/ },

/***/ 102554
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/708902f76129-Screenshot_2-ea74589a23ef51b546106dfd8073e3f2.png");

/***/ },

/***/ 23133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6d7eef243c4-3-1-2b0daba61aa5c80b1a53a39c8d3a1576.png");

/***/ },

/***/ 734555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c7d01a0466a2-Screenshot_1-4e8c18031b7a868b380d8ca423263ee7.png");

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