"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[77339],{

/***/ 474127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_gpu_workload_multi_nodes_example_md_a98_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-gpu-workload-multi-nodes-example-md-a98.json
const site_docs_fpt_managed_gpu_cluster_gpu_workload_multi_nodes_example_md_a98_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/gpu-workload/multi-nodes-example","title":"2. Managed GPU Cluster (Kubernetes)","description":"Serve open models trên nhiều node với vLLM","source":"@site/docs/fpt-managed-gpu-cluster/gpu-workload/multi-nodes-example.md","sourceDirName":"fpt-managed-gpu-cluster/gpu-workload","slug":"/fpt-managed-gpu-cluster/gpu-workload/multi-nodes-example","permalink":"/fpt-managed-gpu-cluster/gpu-workload/multi-nodes-example","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Background","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=multi-nodes-example","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chuẩn bị môi trường","permalink":"/fpt-managed-gpu-cluster/gpu-workload/multi-gpus-example"},"next":{"title":"Chuẩn bị môi trường","permalink":"/fpt-managed-gpu-cluster/gpu-workload/single-gpu-example"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/gpu-workload/multi-nodes-example.md


const frontMatter = {
	sidebar_label: 'Background',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=multi-nodes-example',
	parent: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed GPU Cluster (Kubernetes)';

const assets = {

};



const toc = [{
  "value": "Background",
  "id": "background",
  "level": 2
}, {
  "value": "GPUs",
  "id": "gpus",
  "level": 3
}, {
  "value": "LeaderWorkerSet (LWS)",
  "id": "leaderworkerset-lws",
  "level": 3
}, {
  "value": "vLLM và multi-host serving",
  "id": "vllm-và-multi-host-serving",
  "level": 3
}, {
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
  "value": "Cài đặt LeaderWorkerSet",
  "id": "cài-đặt-leaderworkerset",
  "level": 3
}, {
  "value": "Deploy vLLM server phục vụ serving trên nhiều nodes",
  "id": "deploy-vllm-server-phục-vụ-serving-trên-nhiều-nodes",
  "level": 2
}, {
  "value": "Deploy vllm bằng LeaderWorkerSet",
  "id": "deploy-vllm-bằng-leaderworkerset",
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
  "value": "Giao tiếp với model",
  "id": "giao-tiếp-với-model",
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
      children: "Serve open models trên nhiều node với vLLM"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bài hướng dẫn này trình bày cách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "triển khai và phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)"
      }), " bằng nhiều ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nodes trên FPT Kubernetes Engine (FKE GPU)"
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
          children: "Cấu hình FKE"
        }), " để ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tải trọng số (weights)"
        }), " của các phiên bản ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gemma 1B, 4B"
        }), " từ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triển khai mô hình LLM lên trên nhiều Nodes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài hướng dẫn này dành cho các kỹ sư Machine Learning (ML), quản trị viên và người vận hành nền tảng, cũng như các chuyên gia về Data và AI, những người quan tâm đến việc sử dụng khả năng điều phối container của Kubernetes để phục vụ các mô hình ngôn ngữ lớn (LLM)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gpus",
      children: "GPUs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bộ xử lý đồ họa (GPU) cho phép bạn tăng tốc các khối lượng công việc cụ thể như học máy và xử lý dữ liệu. FKE cung cấp các node được trang bị GPU mạnh mẽ này, cho phép bạn cấu hình cluster để đạt hiệu năng tối ưu cho các tác vụ học máy và xử lý dữ liệu. FKE cung cấp nhiều tùy chọn loại máy để cấu hình node, bao gồm các loại máy sử dụng GPU NVIDIA H100, A30 và A100."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leaderworkerset-lws",
      children: "LeaderWorkerSet (LWS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LeaderWorkerSet (LWS) là một opensource trên Kubernetes nhằm giải quyết các mô hình triển khai AI/ML trên nhiều node. Việc triển khai AI workload trên nhiều node sử dụng nhiều Pod, mỗi Pod có thể chạy trên các node khác nhau, xử lý khối lượng công việc suy phân tán. LWS cho phép xem và quản lý nhiều Pod như một nhóm, từ đó đơn giản hóa việc vận hành và quản lý phục vụ mô hình phân tán."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vllm-và-multi-host-serving",
      children: "vLLM và multi-host serving"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi triển khai các mô hình LLM có cường độ tính toán cao, chúng tôi khuyến nghị sử dụng vLLM và chạy trên nhiều GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vLLM là một framework mã nguồn mở phục vụ LLM được tối ưu hóa cao, giúp tăng thông lượng phục vụ trên GPU, với các tính năng như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triển khai transformer được tối ưu với PagedAttention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cơ chế batching liên tục (continuous batching) để cải thiện thông lượng phục vụ tổng thể"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phục vụ phân tán trên nhiều GPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với các mô hình LLM có yêu cầu tính toán đặc biệt cao và không thể chứa trong một node GPU duy nhất, bạn có thể sử dụng nhiều node GPU để phục vụ mô hình. vLLM hỗ trợ chạy trên nhiều GPU với hai chiến lược:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tensor parallelism chia các phép nhân ma trận trong tầng transformer trên nhiều GPU. Tuy nhiên, chiến lược này yêu cầu mạng tốc độ cao do cần giao tiếp thường xuyên giữa các GPU, vì vậy ít phù hợp hơn khi chạy trên nhiều node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline parallelism chia mô hình theo từng tầng, hay theo chiều dọc. Chiến lược này không yêu cầu giao tiếp liên tục giữa các GPU, do đó phù hợp hơn khi chạy mô hình trên nhiều node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể kết hợp cả hai chiến lược trong phục vụ nhiều node. Ví dụ, khi sử dụng hai node, mỗi node có tám GPU A30, bạn có thể áp dụng:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline parallelism hai chiều để phân mảnh mô hình trên hai node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tensor parallelism tám chiều để phân mảnh mô hình trên tám GPU trong mỗi node"
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
        children: "Một cụm k8s với ít nhất 2 node GPU."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cài-đặt-leaderworkerset",
      children: "Cài đặt LeaderWorkerSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cài đặt LeaderWorkerSet bằng lệnh sau"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl apply --server-side -f https://github.com/kubernetes-sigs/lws/releases/latest/download/manifests.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate việc cài đặt LeaderWorkerSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get pod -n lws-system\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-vllm-server-phục-vụ-serving-trên-nhiều-nodes",
      children: "Deploy vLLM server phục vụ serving trên nhiều nodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong phần này, bạn triển khai container vLLM để phục vụ mô hình Gemma mà bạn muốn sử dụng. Để triển khai mô hình, bài hướng dẫn này sử dụng Kubernetes Deployment. Deployment là một đối tượng API của Kubernetes cho phép bạn chạy nhiều bản sao (replica) của Pod và các Pod này được phân bổ trên các node trong một cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LeaderWorkerSet được sử dụng tại đây, việc sử dụng LeaderWorkerSet với vLLM không làm thay đổi cấu hình vLLM so với việc chỉ sử dụng vLLM triển khai model."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deploy-vllm-bằng-leaderworkerset",
      children: "Deploy vllm bằng LeaderWorkerSet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: leaderworkerset.x-k8s.io/v1\nkind: LeaderWorkerSet\nmetadata:\n  name: vllm\nspec:\n  replicas: 1\n  leaderWorkerTemplate:\n    size: 2\n    restartPolicy: RecreateGroupOnPodRestart\n    leaderTemplate:\n      metadata:\n        labels:\n          role: leader\n      spec:\n        containers:\n          - name: vllm-leader\n            image: vllm/vllm-openai:v0.8.5\n            env:\n              - name: HUGGING_FACE_HUB_TOKEN\n                valueFrom:\n                  secretKeyRef:\n                    name: hf-secret\n                    key: hf_api_token\n            command:\n              - sh\n              - -c\n              - |\n                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh leader --ray_cluster_size=$(LWS_GROUP_SIZE);\n                python3 -m vllm.entrypoints.openai.api_server \\\n                  --port 8080 \\\n                  --model google/gemma-3-1b-it \\\n                  --tensor-parallel-size 1 \\\n                  --pipeline-parallel-size 2 \\\n                  --trust-remote-code \\\n                  --max-model-len 4096\n            resources:\n              limits:\n                nvidia.com/gpu: \"1\"\n            ports:\n              - containerPort: 8080\n            readinessProbe:\n              tcpSocket:\n                port: 8080\n              initialDelaySeconds: 15\n              periodSeconds: 10\n            volumeMounts:\n              - mountPath: /dev/shm\n                name: dshm\n        volumes:\n          - name: dshm\n            emptyDir:\n              medium: Memory\n              sizeLimit: 5Gi\n    workerTemplate:\n      spec:\n        containers:\n          - name: vllm-worker\n            image: vllm/vllm-openai:v0.8.5\n            command:\n              - sh\n              - -c\n              - |\n                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh worker --ray_address=$(LWS_LEADER_ADDRESS)\n            resources:\n              limits:\n                nvidia.com/gpu: \"1\"\n            env:\n              - name: HUGGING_FACE_HUB_TOKEN\n                valueFrom:\n                  secretKeyRef:\n                    name: hf-secret\n                    key: hf_api_token\n            volumeMounts:\n              - mountPath: /dev/shm\n                name: dshm\n        volumes:\n          - name: dshm\n            emptyDir:\n              medium: Memory\n              sizeLimit: 5Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nvidia.com/gpu: \"1\" : container của bạn sẽ sử dụng 2 GPU trên node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pipeline-parallel-size=2: sử dụng pipeline parallelism để chạy model trên 2 node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MODEL_ID: tên model trên Huggingface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUGGING_FACE_HUB_TOKEN: token Huggingface bạn đã tạo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Volume dshm: volume shared memory, quan trọng với các case distributed inferencing/training."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expose-model",
      children: "Expose model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để expose model, hãy tạo một service trên k8s, nếu type của service là LoadBalancer thay vì ClusterIP, model có thể được truy cập từ internet:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: Service\nmetadata:\n  name: vllm-leader\nspec:\n  ports:\n    - name: http\n      port: 8080\n      protocol: TCP\n      targetPort: 8080\n  selector:\n    leaderworkerset.sigs.k8s.io/name: vllm\n    role: leader\n  type: ClusterIP\n"
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
        children: "   spec:\n     containers:\n       ...\n       volumeMounts:\n       ...\n         - mountPath: ~/.cache/huggingface/\n           name: model\n     volumes:\n       ...\n       - name: model\n         persistentVolumeClaim:\n           claimName: data-pvc\n"
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
        children: "kubectl port-forward svc/vllm-leader 8080:8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "giao-tiếp-với-model",
      children: "Giao tiếp với model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Phần này trình bày cách bạn có thể thực hiện một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bài kiểm tra"
      }), (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "cơ bản"
          }), " để xác minh các ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "mô hình Gemma 3"
          })]
        })
      }), ". Đối với các mô hình khác, hãy thay gemma-3-1b-it bằng tên của mô hình tương ứng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ví dụ này minh họa cách kiểm tra ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mô hình Gemma 3 1B"
      }), " với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "đầu vào chỉ gồm văn bản"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong một phiên terminal mới, sử dụng curl để chat với mô hình của bạn."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "curl http://127.0.0.1:8080/v1/chat/completions \\\n  -X POST \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"model\": \"google/gemma-3-1b-it\",\n    \"messages\": [\n      {\n        \"role\": \"user\",\n        \"content\": \"Hello, how are you?\"\n      }\n    ]\n  }'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://wordtohtml.net/?utm_source=wth_free_doc_conversion_link&utm_medium=external",
        children: "Converted to HTML with WordToHTML.net"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://documentconverter.pro/?utm_source=wth_free_doc_conversion_link&utm_medium=external",
        children: "Document Converter for Windows"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./multi-gpus-example",
        children: " Previous Serve open models trên nhiều GPU với vLLM  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./finetune-llm-models",
        children: " Next Finetune LLM models trên FKE GPU với Unsloth  "
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