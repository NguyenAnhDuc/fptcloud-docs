"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[71047],{

/***/ 863062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_gpu_workload_mps_gpu_sharing_md_421_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-gpu-workload-mps-gpu-sharing-md-421.json
const site_docs_fpt_managed_gpu_cluster_gpu_workload_mps_gpu_sharing_md_421_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/gpu-workload/mps-gpu-sharing","title":"2. Managed GPU Cluster (Kubernetes)","description":"MPS GPU sharing","source":"@site/docs/fpt-managed-gpu-cluster/gpu-workload/mps-gpu-sharing.md","sourceDirName":"fpt-managed-gpu-cluster/gpu-workload","slug":"/fpt-managed-gpu-cluster/gpu-workload/mps-gpu-sharing","permalink":"/fpt-managed-gpu-cluster/gpu-workload/mps-gpu-sharing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Mps gpu sharing","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=mps-gpu-sharing","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Gpu time sharing","permalink":"/fpt-managed-gpu-cluster/gpu-workload/gpu-time-sharing"},"next":{"title":"Chuẩn bị môi trường","permalink":"/fpt-managed-gpu-cluster/gpu-workload/multi-gpus-example"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/gpu-workload/mps-gpu-sharing.md


const frontMatter = {
	sidebar_label: 'Mps gpu sharing',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=mps-gpu-sharing',
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
      children: "MPS GPU sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPS là một tính năng trong GPU của NVIDIA, cho phép nhiều container chia sẻ cùng một GPU vật lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPS có ưu điểm hơn so với MIG về vấn đề phân chia tài nguyên GPU, tối đa 48 container có thể sử dụng GPU cùng lúc."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPS dựa trên tính năng NVIDIA's Multi-Process Service của CUDA, cho phép nhiều ứng dụng CUDA chạy đồng thời trên một GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với MPS, người dùng có thể xác định trước số lượng replicas của một GPU. Giá trị này cho chúng ta biết số lượng container tối đa có thể truy cập để sử dụng một GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, chúng ta có thể giới hạn tài nguyên GPU cho từng container, bằng việc tạo các biến môi trường sau trong container:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA_MPS_ACTIVE_THREAD_PERCENTAGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA_MPS_PINNED_DEVICE_MEM_LIMIT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để hiểu rõ hơn về cách thức MPS hoạt động, vui lòng truy cập : ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.nvidia.com/deploy/mps/",
        children: "https://docs.nvidia.com/deploy/mps/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu Hình MPS trên FPTCloud K8s GPU service"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể cấu hình cho worker group GPU của mình sử dụng GPU trong quá trình khởi tạo worker group như hình minh họa sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(409404)/* ["default"] */ .A) + "",
        width: "624",
        height: "443"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với cấu hình này, GPU sẽ được \"chia\" thành 48 phần, mỗi phần mang khả năng tính toán và bộ nhớ bằng 1/48 GPU vật lý ban đầu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify MPS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể kiểm tra cấu hình MPS trên node GPU của mình bằng lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl describe nodes $NODE_NAME \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905005)/* ["default"] */ .A) + "",
        width: "282",
        height: "117"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này, bạn có thể yêu cầu tối đa 48 tài nguyên nvidia.com/gpu cho các pod của mình, mỗi tài nguyên nvidia.com/gpu tương ứng với 1/48 khả năng tính toán và bộ nhớ của GPU vật lý ban đầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp node của bạn sử dụng 2 GPU, sẽ có 96 tài nguyên nvidia.com/gpu được hiển thị."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một vài lưu ý"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tài nguyên nvidia.com/gpu một container yêu cầu phải bằng 1."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Số max client tối đa là 48, ít nhất là 2, tài nguyên GPU vật lý được chia đều cho các max client."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Một container chạy một process để đảm bảo sharing mode MPS không phát sinh lỗi."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Yêu cầu phần \"hostIPC:true\" tại file manifest triển khai workload."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MPS có những giới hạn về error containment và workload isolation, hãy tìm hiểu và cân nhắc trước khi sử dụng."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu-time-sharing",
        children: " Previous GPU time sharing "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./try-example-workload",
        children: " Next Triển khai workload GPU mẫu lên Managed GPU Cluster "
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

/***/ 409404
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/39fcf61e6e35-Picture24-1-82d604745c423912c02f2631949013ec.png");

/***/ },

/***/ 905005
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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