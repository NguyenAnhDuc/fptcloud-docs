"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[63111],{

/***/ 294437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_finetune_llm_models_md_ce8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-finetune-llm-models-md-ce8.json
const site_docs_fpt_managed_gpu_cluster_finetune_llm_models_md_ce8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/finetune-llm-models","title":"2. Managed GPU Cluster (Kubernetes)","description":"Finetune LLM models trên FKE GPU với Unsloth","source":"@site/docs/fpt-managed-gpu-cluster/finetune-llm-models.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/finetune-llm-models","permalink":"/fpt-managed-gpu-cluster/finetune-llm-models","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Chuẩn bị môi trường","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=finetune-llm-models","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"File storage high performance","permalink":"/fpt-managed-gpu-cluster/file-storage-high-performance"},"next":{"title":"Gpu time sharing","permalink":"/fpt-managed-gpu-cluster/gpu-time-sharing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/finetune-llm-models.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Chuẩn bị môi trường',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=finetune-llm-models',
	parent: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed GPU Cluster (Kubernetes)';

const assets = {

};



const toc = [{
  "value": "Chuẩn bị môi trường",
  "id": "chuẩn-bị-môi-trường",
  "level": 2
}, {
  "value": "Chuẩn bị cụm FKE GPU",
  "id": "chuẩn-bị-cụm-fke-gpu",
  "level": 3
}, {
  "value": "Chuẩn bị token Huggingface (optional)",
  "id": "chuẩn-bị-token-huggingface-optional",
  "level": 3
}, {
  "value": "Deploy Unsloth",
  "id": "deploy-unsloth",
  "level": 2
}, {
  "value": "Deploy vllm bằng deployment",
  "id": "deploy-vllm-bằng-deployment",
  "level": 3
}, {
  "value": "Expose container Unsloth",
  "id": "expose-container-unsloth",
  "level": 3
}, {
  "value": "Setup persistent storage (Optional)",
  "id": "setup-persistent-storage-optional",
  "level": 3
}, {
  "value": "Truy cập Unsloth service",
  "id": "truy-cập-unsloth-service",
  "level": 2
}, {
  "value": "Set up networking để truy cập unsloth ngoài cụm",
  "id": "set-up-networking-để-truy-cập-unsloth-ngoài-cụm",
  "level": 3
}, {
  "value": "Chạy các tác vụ training mẫu",
  "id": "chạy-các-tác-vụ-training-mẫu",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "2-managed-gpu-cluster-kubernetes",
        children: "2. Managed GPU Cluster (Kubernetes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finetune LLM models trên FKE GPU với Unsloth"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài hướng dẫn này trình bày cách finetune một LLM model trên kubernetes sử dụng Unsloth và GPU"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mục tiêu là cung cấp nền tảng giúp bạn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hiểu và thực hành việc triển khai finetune một mô hình LLM"
      }), " trong một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "môi trường Kubernetes được quản lý"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong hướng dẫn này, bạn sẽ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triển khai container trên Kubernetes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sử dụng Unsloth để fine-tune một mô hình LLM."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài hướng dẫn này dành cho các kỹ sư Machine Learning (ML), quản trị viên và người vận hành nền tảng, cũng như các chuyên gia về Data và AI, những người quan tâm đến việc sử dụng khả năng điều phối container của Kubernetes để phục vụ các mô hình ngôn ngữ lớn (LLM)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chuẩn-bị-môi-trường",
      children: "Chuẩn bị môi trường"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chuẩn-bị-cụm-fke-gpu",
      children: "Chuẩn bị cụm FKE GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hãy đảm bảo rằng bạn có đủ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Một cụm k8s với GPU."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU operator được cài đặt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver, nvidia container toolkit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Có quota storage để tạo Persistent Volume"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra node GPU trên k8s đã sẵn sàng sử dụng bằng lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl describe node \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node sẽ sẵn sàng được sử dụng nếu tài nguyên “nvidia.com/gpu” có giá trị lớn hơn 1 ở mục capacity và allocatable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Capacity:\n  ...\n  nvidia.com/gpu:     8\n  ...\nAllocatable:\n  ...\n  nvidia.com/gpu:     8\n  ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chuẩn-bị-token-huggingface-optional",
      children: "Chuẩn bị token Huggingface (optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lên trang chủ Huggingface, tạo token và tạo Secret trên k8s chứa token này:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl create secret generic hf-secret --from-literal=hf_api_token=${HF_TOKEN} --dry-run=client -o yaml | kubectl apply -f -\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-unsloth",
      children: "Deploy Unsloth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong phần này, bạn triển khai container Unsloth để huấn luyện (training) mô hình mà bạn muốn sử dụng. Để triển khai quá trình huấn luyện, bài hướng dẫn này sử dụng Kubernetes Deployment. Deployment là một đối tượng API của Kubernetes cho phép bạn chạy một hoặc nhiều Pod phục vụ cho quá trình training, đồng thời Kubernetes sẽ đảm bảo Pod được khởi động lại khi xảy ra lỗi và được lập lịch trên các node GPU trong cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi Pod chạy container Unsloth, sử dụng tài nguyên GPU để thực hiện fine-tuning mô hình ngôn ngữ lớn. Việc sử dụng Deployment giúp bạn dễ dàng quản lý vòng đời của job training, cập nhật cấu hình (ví dụ: image, biến môi trường, số lượng GPU), và mở rộng quy mô khi cần huấn luyện song song trên nhiều GPU hoặc nhiều node."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deploy-vllm-bằng-deployment",
      children: "Deploy vllm bằng deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: unsloth-gpu\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: unsloth\n  template:\n    metadata:\n      labels:\n        app: unsloth\n    spec:\n      containers:\n        - name: unsloth\n          image: unsloth/unsloth\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: JUPYTER_PASSWORD\n              value: \"mypassword\"\n          ports:\n            - containerPort: 8888\n              name: jupyter\n            - containerPort: 22\n              name: ssh\n          resources:\n            limits:\n              nvidia.com/gpu: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nvidia.com/gpu: \"1\" : container của bạn sẽ sử dụng 1 GPU trên node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JUPYTER_PASSWORD: password truy cập jupyter notebook."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expose-container-unsloth",
      children: "Expose container Unsloth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để expose model, hãy tạo một service trên k8s, nếu type của service là LoadBalancer thay vì ClusterIP, model có thể được truy cập từ internet:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: unsloth-service\nspec:\n  type: ClusterIP\n  selector:\n    app: unsloth\n  ports:\n    - name: jupyter\n      protocol: TCP\n      port: 8888\n      targetPort: 8888\n    - name: ssh\n      protocol: TCP\n      port: 22\n      targetPort: 22\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-persistent-storage-optional",
      children: "Setup persistent storage (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với cấu hình trên, model weight của model được lưu tại file system của container. Khi container restart, chúng ta cần tải lại bộ weight trên từ đầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tránh tình trạng này, chúng ta có thể lưu sẵn model vào một volume, do đó khi container restart thì model vẫn còn và không cần phải tải lại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo persistent volume claim:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: data-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉnh sửa file deployment trên:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: unsloth-gpu\nspec:\n  ...\n  template:\n    ...\n    spec:\n      containers:\n        ...\n        volumeMounts:\n        ...\n        - mountPath: /workspace/work\n          name: workdir\n      volumes:\n      ...\n        - name: workdir\n          persistentVolumeClaim:\n            claimName: data-pvc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truy-cập-unsloth-service",
      children: "Truy cập Unsloth service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại phần này, chúng ta sẽ thực hiện việc kiểm tra kết nối & gửi các request để model xử lý"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-up-networking-để-truy-cập-unsloth-ngoài-cụm",
      children: "Set up networking để truy cập unsloth ngoài cụm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu tại mục Expose model, bạn sử dụng service type loadbalancer, hãy sử dụng IP public của loadbalancer đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn sử dụng service type CusterIP, hãy port forward service này:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl port-forward service/unsloth-service 8888:8888\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn muốn dùng ssh thay vì jupyter notebook (tạo ssh key pair trong container unsloth nếu bạn chưa có):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl port-forward service/unsloth-service 2222:22\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập jupyternotebook tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:8888/",
        children: "http://localhost:8888,"
      }), " vào mục unsloth-notebooks để kiểm tra các notebook có sẵn của Unsloth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chạy-các-tác-vụ-training-mẫu",
      children: "Chạy các tác vụ training mẫu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tìm kiếm Granite4.0_350M.ipynb, chạy notebook này"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "154.2162 seconds used for training.\n2.57 minutes used for training.\nPeak reserved memory = 4.004 GB.\nPeak reserved memory for training = 3.281 GB.\nPeak reserved memory % of max memory = 17.04 %.\nPeak reserved memory for training % of max memory = 13.963 %.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://wordtohtml.net/?utm_source=wth_free_doc_conversion_link&utm_medium=external",
        children: "Converted to HTML with WordToHTML.net"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://documentconverter.pro/?utm_source=wth_free_doc_conversion_link&utm_medium=external",
        children: "Document Converter for Windows"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./multi-nodes-example",
        children: " Previous Serve open models trên nhiều node với vLLM "
      })
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