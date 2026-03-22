"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[51401],{

/***/ 657953
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_gpu_time_sharing_md_db4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-gpu-time-sharing-md-db4.json
const site_docs_fpt_managed_gpu_cluster_gpu_time_sharing_md_db4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/gpu-time-sharing","title":"2. Managed GPU Cluster (Kubernetes)","description":"GPU time sharing","source":"@site/docs/fpt-managed-gpu-cluster/gpu-time-sharing.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/gpu-time-sharing","permalink":"/fpt-managed-gpu-cluster/gpu-time-sharing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Gpu time sharing","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=gpu-time-sharing","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chuẩn bị môi trường","permalink":"/fpt-managed-gpu-cluster/finetune-llm-models"},"next":{"title":"Managed GPU Cluster (Kubernetes)","permalink":"/fpt-managed-gpu-cluster/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/gpu-time-sharing.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Gpu time sharing',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=gpu-time-sharing',
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
    p: "p",
    pre: "pre",
    strong: "strong",
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
      children: "GPU time sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU Cluster"
      }), " dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU Cluster"
      }), " cung cấp tính năng time-slicing/time-sharing cho nhiều container/tiến trình trên một Nvidia GPU . Bằng việc sử dụng time-sharing, bạn có thể tối ưu hóa chi phí sử dụng GPU."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤Trước khi đi vào chi tiết, hãy chắc chắn rằng bạn biết cơ chế hoạt động của time-sharing, bao gồm hạn chế và usecase nào sẽ phù hợp cho tính năng này."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.Yêu cầu tiên quyết"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn cần kích hoạt dịch vụ managed GPU cluster, có đủ quota storage, public IP, ... đủ để khởi tạo một cụm FPT managed GPU cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU operator được cài đặt trên cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker group sử dụng Pre-installed driver hoặc đã được cài driver thủ công."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker group thuộc loại GPU worker group."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể kích hoạt tính năng time-sharing trên mọi GPU mà chúng tôi cung cấp."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.Hướng dẫn cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Cài đặt GPU operator tại phần cài đặt GPU software & chờ cho đến khi trạng thái GPU operator ở trạng thái ready. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185842)/* ["default"] */ .A) + "",
        width: "1915",
        height: "911"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : verify phần cài đặt time slicing"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubectl describe nodes \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185842)/* ["default"] */ .A) + "",
        width: "1915",
        height: "911"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải thích:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Có tổng cộng 8 GPU trên node, mỗi GPU được cấu hình timeslicng với tối đa 10 container có thể kết nối đến, do vậy giá trị ở phần Allocatable của mục nvidia.com/gpu là 8 * 10 = 80."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " deploy workload mẫu trên kubernetes sử dụng tính năng timeslicing"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: vllm-gpt2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: vllm-gpt2\n  template:\n    metadata:\n      labels:\n        app: vllm-gpt2\n    spec:\n      containers:\n      - name: vllm\n        image: vllm/vllm:latest\n        args:\n          - --model=gpt2\n          - --tensor-parallel-size=1\n          - --port=8000\n        ports:\n          - containerPort: 8000\n        resources:\n          limits:\n            nvidia.com/gpu: 1  # Require 1 GPU\n      restartPolicy: Always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kiểm tra log của pod vllm-gpt2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubectl logs \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185842)/* ["default"] */ .A) + "",
        width: "1915",
        height: "911"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185842)/* ["default"] */ .A) + "",
        width: "1915",
        height: "911"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.Sử dụng Timeslicing với MIG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với tư cách là quản trị viên, bạn có thể muốn kết hợp nhiều tính năng sharing GPU của FKE. Tính năng GPU time-sharing có thể hoạt động cùng với MIG (multi-instance GPU), cho phép chia một GPU vật lý thành tối đa bảy phân vùng. Các phân vùng này được cách ly với nhau. Bạn có thể cấu hình tính năng GPU time sharing cho từng MIG instance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ, nếu bạn đặt giá trị MIG profile là 1g.10gb, GPU cơ bản sẽ được chia thành bảy phân vùng. Nếu bạn đồng thời đặt max-shared-clients là 3, thì mỗi phân vùng sẽ hỗ trợ tối đa ba container, tức là tổng cộng có thể có tối đa 21 thiết bị chia sẻ GPU có sẵn để phân bổ trên GPU vật lý đó. Để tìm hiểu cách gpu-partition-size chuyển đổi thành các phân vùng thực tế, hãy tìm hiểu về MIG."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kích hoạt tính năng GPU time sharing trên MIG instance, hãy chọn cả MIG và timeslicing trên màn hình chia sẻ worker group."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185842)/* ["default"] */ .A) + "",
        width: "1915",
        height: "911"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.Hạn chế của Time slicing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với cơ chế chia sẻ thời gian GPU (GPU time-sharing), giới hạn bộ nhớ không được áp dụng trên GPU. Để tránh gặp sự cố tràn bộ nhớ (OOM), bạn nên thiết lập giới hạn bộ nhớ GPU trong các workload của mình. Để tránh các vấn đề về bảo mật, chỉ triển khai các workload nằm trong cùng một ranh giới tin cậy khi sử dụng chia sẻ thời gian GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Số lượng container tối đa có thể sử dụng chia sẻ thời gian trên một GPU vật lý là 48. Khi cài đặt cấu hình chia sẻ thời gian GPU, bạn nên cân nhắc đến nhu cầu tài nguyên của các workload và khả năng của GPU vật lý bên dưới để tối ưu hóa hiệu năng và độ phản hồi của hệ thống."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./vgpu-for-container",
        children: " Previous VGPU for container  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./mps-gpu-sharing",
        children: " Next MPS GPU sharing "
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

/***/ 185842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7829b75794d8-Picture1.3-05ec5f41809d7ff3221ab2591f62831b.png");

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