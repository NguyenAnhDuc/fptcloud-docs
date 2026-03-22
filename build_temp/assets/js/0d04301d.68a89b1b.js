"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[30297],{

/***/ 807280
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_gpu_workload_single_gpu_example_md_0d0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-gpu-workload-single-gpu-example-md-0d0.json
const site_docs_fpt_managed_gpu_cluster_gpu_workload_single_gpu_example_md_0d0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/gpu-workload/single-gpu-example","title":"2. Managed GPU Cluster (Kubernetes)","description":"Serve Gemma open models trên một GPU với vLLM","source":"@site/docs/fpt-managed-gpu-cluster/gpu-workload/single-gpu-example.md","sourceDirName":"fpt-managed-gpu-cluster/gpu-workload","slug":"/fpt-managed-gpu-cluster/gpu-workload/single-gpu-example","permalink":"/fpt-managed-gpu-cluster/gpu-workload/single-gpu-example","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Chuẩn bị môi trường","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=single-gpu-example","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Background","permalink":"/fpt-managed-gpu-cluster/gpu-workload/multi-nodes-example"},"next":{"title":"Slurm on fpt cloud","permalink":"/fpt-managed-gpu-cluster/gpu-workload/slurm-on-fpt-cloud"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/gpu-workload/single-gpu-example.md


const frontMatter = {
	sidebar_label: 'Chuẩn bị môi trường',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=single-gpu-example',
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
  "value": "Deploy VLLM",
  "id": "deploy-vllm",
  "level": 2
}, {
  "value": "Deploy vllm bằng deployment",
  "id": "deploy-vllm-bằng-deployment",
  "level": 3
}, {
  "value": "Expose model",
  "id": "expose-model",
  "level": 3
}, {
  "value": "Setup persistent storage (Optional)",
  "id": "setup-persistent-storage-optional",
  "level": 3
}, {
  "value": "Serve model",
  "id": "serve-model",
  "level": 2
}, {
  "value": "Set up networking để truy cập model ngoài cụm",
  "id": "set-up-networking-để-truy-cập-model-ngoài-cụm",
  "level": 3
}, {
  "value": "Test model",
  "id": "test-model",
  "level": 3
}, {
  "value": "Output",
  "id": "output",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
      children: "Serve Gemma open models trên một GPU với vLLM"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bài hướng dẫn này trình bày cách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "triển khai và phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)"
      }), " bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU trên FPT Kubernetes Engine (FKE GPU)"
      }), " , sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework vLLM"
      }), " để phục vụ inference.", (0,jsx_runtime.jsx)(_components.br, {}), "\nMục tiêu là cung cấp nền tảng giúp bạn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hiểu và thực hành việc triển khai LLM cho bài toán suy luận (inference)"
      }), " trong một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "môi trường Kubernetes được quản lý"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong hướng dẫn này, bạn sẽ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Triển khai một container dựng sẵn"
        }), " có chạy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vLLM"
        }), " lên FKE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cấu hình FKE"
        }), " để ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tải trọng số (weights)"
        }), " của các phiên bản ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gemma 1B, 4B"
        }), " từ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face"
        }), "."]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node sẽ sẵn sàng được sử dụng nếu tài nguyên “nvidia.com/gpu” có giá trị lớn hơn 1 ở mục capacity và allocatable"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chuẩn-bị-token-huggingface-optional",
      children: "Chuẩn bị token Huggingface (optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lên trang chủ Huggingface, tạo token và tạo Secret trên k8s chứa token này:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl create secret generic hf-secret \\\n  --from-literal=hf_api_token=${HF_TOKEN} \\\n  --dry-run=client -o yaml | kubectl apply -f -\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-vllm",
      children: "Deploy VLLM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong phần này, bạn triển khai container vLLM để phục vụ mô hình Gemma mà bạn muốn sử dụng. Để triển khai mô hình, bài hướng dẫn này sử dụng Kubernetes Deployment. Deployment là một đối tượng API của Kubernetes cho phép bạn chạy nhiều bản sao (replica) của Pod và các Pod này được phân bổ trên các node trong một cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deploy-vllm-bằng-deployment",
      children: "Deploy vllm bằng deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: vllm-gemma-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: gemma-server\n  template:\n    metadata:\n      labels:\n        app: gemma-server\n    spec:\n      containers:\n      - name: inference-server\n        image: docker.io/vllm/vllm-openai:v0.10.0\n        resources:\n          requests:\n            cpu: \"2\"\n            memory: \"10Gi\"\n            ephemeral-storage: \"10Gi\"\n            nvidia.com/gpu: \"1\"\n          limits:\n            cpu: \"2\"\n            memory: \"10Gi\"\n            ephemeral-storage: \"10Gi\"\n            nvidia.com/gpu: \"1\"\n        command: [\"python3\", \"-m\", \"vllm.entrypoints.openai.api_server\"]\n        args:\n        - --model=$(MODEL_ID)\n        - --tensor-parallel-size=1\n        - --host=0.0.0.0\n        - --port=8000\n        env:\n        - name: LD_LIBRARY_PATH\n          value: ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64\n        - name: MODEL_ID\n          value: google/gemma-3-1b-it\n        - name: HUGGING_FACE_HUB_TOKEN\n          valueFrom:\n            secretKeyRef:\n              name: hf-secret\n              key: hf_api_token\n        volumeMounts:\n        - mountPath: /dev/shm\n          name: dshm\n      volumes:\n      - name: dshm\n        emptyDir:\n          medium: Memory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nvidia.com/gpu: \"1\" : container của bạn sẽ sử dụng 1 GPU trên node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MODEL_ID: tên model trên Huggingface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUGGING_FACE_HUB_TOKEN: token Huggingface bạn đã tạo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Volume dshm: volume shared memory, quan trọng với các case distributed inferencing/training, nên có"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expose-model",
      children: "Expose model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để expose model, hãy tạo một service trên k8s, nếu type của service là LoadBalancer thay vì ClusterIP, model có thể được truy cập từ internet:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: llm-service\nspec:\n  selector:\n    app: gemma-server\n  type: ClusterIP\n  ports:\n    - protocol: TCP\n      port: 8000\n      targetPort: 8000\n"
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
      children: "Chỉnh sửa file deployment:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "...\nvolumeMounts:\n  - mountPath: ~/.cache/huggingface/\n    name: model\n...\nvolumes:\n  - name: model\n    persistentVolumeClaim:\n      claimName: data-pvc\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "serve-model",
      children: "Serve model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại phần này, chúng ta sẽ thực hiện việc kiểm tra kết nối & gửi các request để model xử lý"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-up-networking-để-truy-cập-model-ngoài-cụm",
      children: "Set up networking để truy cập model ngoài cụm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu tại mục Expose model, bạn sử dụng service type loadbalancer, hãy sử dụng IP public của loadbalancer đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn sử dụng service type CusterIP, hãy port forward service này:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl port-forward service/llm-service 8000:8000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-model",
      children: "Test model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "curl http://127.0.0.1:8000/v1/chat/completions \\\n  -X POST \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"model\": \"google/gemma-3-1b-it\",\n    \"messages\": [\n      {\n        \"role\": \"user\",\n        \"content\": \"Hello, how are you?\"\n      }\n    ]\n  }'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output",
      children: "Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"id\": \"chatcmpl-b8bb8754b6bb46dc9e7fd416c2fe0cd6\",\n  \"object\": \"chat.completion\",\n  \"model\": \"google/gemma-3-1b-it\",\n  \"choices\": [\n    {\n      \"message\": {\n        \"role\": \"assistant\",\n        \"content\": \"Hello there! I’m doing well, thank you \"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./try-example-workload",
        children: " Previous Triển khai workload GPU mẫu lên Managed GPU Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./multi-gpus-example",
        children: " Next Serve open models trên nhiều GPU với vLLM  "
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