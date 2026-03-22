"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86460],{

/***/ 994918
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_vgpu_for_container_md_f2e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-vgpu-for-container-md-f2e.json
const site_docs_fpt_managed_gpu_cluster_vgpu_for_container_md_f2e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/vgpu-for-container","title":"2. Managed GPU Cluster (Kubernetes)","description":"VGPU for container","source":"@site/docs/fpt-managed-gpu-cluster/vgpu-for-container.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/vgpu-for-container","permalink":"/fpt-managed-gpu-cluster/vgpu-for-container","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Vgpu for container","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=vgpu-for-container","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Try example workload","permalink":"/fpt-managed-gpu-cluster/try-example-workload"},"next":{"title":"Xem danh sach managed gpu cluster","permalink":"/fpt-managed-gpu-cluster/xem-danh-sach-managed-gpu-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/vgpu-for-container.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Vgpu for container',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=vgpu-for-container',
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "VGPU for container"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giới thiệu tính năng vGPU trong FPT Kubernetes engine"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU Cluster"
      }), " dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU"
      }), " Cluster cung cấp tính năng v cho nhiều container/tiến trình trên một Nvidia GPU . Bằng việc sử dụng tính năng này, bạn có thể tối ưu hóa chi phí sử dụng GPU."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu tiên quyết"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Bạn cần kích hoạt dịch vụ managed GPU cluster, có đủ quota storage, public IP, ... đủ để khởi tạo một cụm FPT managed GPU cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ GPU operator được cài đặt trên cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Worker group sử dụng Pre-installed driver hoặc đã được cài driver thủ công."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Worker group thuộc loại GPU worker group."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Cài đặt vGPU scheduler tại phần cài đặt GPU software & chờ cho đến khi trạng thái ready. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284432)/* ["default"] */ .A) + "",
        width: "1908",
        height: "957"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại tab worker group GPU, bạn có quyền lựa chọn enable thành phần elastic GPU scheduler trên từng worker group hoặc không. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775124)/* ["default"] */ .A) + "",
        width: "985",
        height: "646"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn enable vGPU scheduler trên một worker group, tất cả các sharing mode khác như MIG, MPS, Time slicing cần được disable trên worker group đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp bạn không có nhu cầu sử dụng vGPU scheduer, hãy chọn GPU scheduler type None. Khi đó, bạn có thể sử dụng các giải pháp GPU sharing như MIG, MPS, Timeslicing như bình thường."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có tối đa 48 container được phép chia sẻ cùng một GPU, tuy nhiên bạn chỉ nên sử dụng <= 20 vGPU trên từng GPU để đảm bảo hiệu năng tổng thể."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " kiểm tra trạng thái vGPU scheduler trên các node chỉ định"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kiểm tra pod vgpu device plugin ở trạng thái ready"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get pods --all-namespaces --field-selector spec.nodeName= -o wide  | grep device-plugin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(944941)/* ["default"] */ .A) + "",
        width: "985",
        height: "39"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra tài nguyên vGPU trên node Command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl describe node  | grep Allocatable -A9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543604)/* ["default"] */ .A) + "",
        width: "985",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VGPU trên node sẵn sàng để sử dụng khi tài nguyên nvidia.com/vgpu xuất hiện và có giá trị lớn hơn 1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : deploy workload mẫu trên kubernetes sử dụng vGPU"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: vllm-gpt2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: vllm-gpt2\n  template:\n    metadata:\n      labels:\n        app: vllm-gpt2\n    spec:\n      containers:\n      - name: vllm\n        image: vllm/vllm:latest\n        args:\n          - --model=gpt2\n          - --tensor-parallel-size=1\n          - --port=8000\n        ports:\n          - containerPort: 8000\n        resources:\n          limits:\n            nvidia.com/vgpu: 1  # Require 1 vGPU\n            nvidia.com/vgpumem: 40000  # Request 40000 MiB DRAM for container\n      restartPolicy: Always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nvidia.com/vgpu: 1 có nghĩa là bạn muốn sử dụng vGPU sharing trên chỉ một GPU vật lý, nếu bạn request nvidia.com/vgpu: 2, bạn cần có 2 GPU vật lý."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả"
      }), " : ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(324006)/* ["default"] */ .A) + "",
        width: "684",
        height: "307"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại đây, container VLLM chỉ được phép sử dụng tối đa 40000 MiB DRAM của GPU"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: ".Mô tả tính năng của vGPU scheduler"
      }), " FPT Cloud vGPU scheduler cung cấp các tính năng sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Hỗ trợ chia sẻ tài nguyên GPU một cách linh hoạt, các thông số có thể cài đặt bao gồm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "● resourceName: \"nvidia.com/vgpu\": số lượng GPU pod sẽ dùng (v/d: 2 ứng với 2 GPU)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "● resourceMem: \"nvidia.com/vgpumem\": lượng memory pod dùng trên mỗi GPU (vd: 3000 tương ứng với 3000 MB GPU Memory)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "● resourceMemPercentage: \"nvidia.com/vgpumem-percentage\": tương tự vgpumem nhưng tính theo %"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "● resourceCores: \"nvidia.com/vgpucores\": giới hạn lượng core tối đa GPU sử dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. memory isolation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với FPT device plugin, chúng tôi hỗ trợ quản lý lượng tài nguyên tối đa một container có thể sử dụng. Bạn có thể chỉnh sửa trường: nvidia.com/vgpumem khi yêu cầu tài nguyên cho container."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Single GPU sharing và multiple GPU sharing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "● Bạn có thể để pod của mình sử dụng 1 GPU hoặc 2 GPU bằng việc thay đổi lượng GPU container request:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nvidia.com/vgpu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "● Bạn cũng có thể thay đổi tài nguyên gpumem, gpu cores ... cho từng vgpu mà container yêu cầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc cài đặt số lượng nvidia.com/gpu bằng 2 trong một container có nghĩa là container của bạn sử dụng 2 vGPU đặt trên 2 GPU vật lý khác nhau, không phải 2 vGPU trên cùng 1 GPU vật lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn không chỉ định trường nvidia.com/vgpumem hoặc nvidia.com/vgpucores, scheduler sẽ hiểu là bạn muốn sử dụng toàn bộ tài nguyên tương ứng của node."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Không nên sử dụng 1 pod nhiều container và các container đều sử dụng GPU khi bạn kích hoạt device plugin này."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [".", (0,jsx_runtime.jsx)(_components.strong, {
        children: "So sánh vGPU scheduler & Nvidia GPU sharing solutions."
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FPTCloud vGPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time-slicing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MIG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nvidia vGPU"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Use Cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "flexible GPU sharing & sheduling policy cho container sử dụng GPU."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chạy nhiều application song song, đổi hiệu năng lấy rủi ro khi một tiến trình đột ngột stop."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phương pháp sharing GPU nguyên thủy, khi bạn chỉ muốn đưa workload vào GPU và để GPU làm việc còn lại."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sharing GPU, đảm bảo QoS và tính chịu lỗi, chấp nhận hiệu năng tổng thể giảm và sự thiếu flexible cho các MIG profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi tenancy, multi VM dùng chung một GPU vật lý, chấp nhận chi phí sử dụng license của Nvidia."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partition Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal & Physical (VM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM Performance Isolatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (by % not per client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (by %, not per client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Ban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconfiguration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At process launch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At process launch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-slice duration only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telemetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (including in containers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (including live migration)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Other noteworthy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports all GPUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cudaCapability >= 3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cudaCapability >= 7.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cudaCapability >= 8.0 (Hopper, Ampere)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "License required"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./slurm-on-fpt-cloud",
        children: " Previous Slurm on FPTCloud Managed GPU cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu-time-sharing",
        children: " Next GPU time sharing "
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

/***/ 324006
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/251fecdbb606-Picture5.5-8870d0ffd0a971eeec57092cf35f564a.png");

/***/ },

/***/ 944941
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2b93e9cb87f1-vgpu02-b1dc2105f47b227098c3fc28fee23d96.png");

/***/ },

/***/ 775124
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/681f58cdeafb-vgpu01-23229208471c8777d38c36a5ba9ea957.png");

/***/ },

/***/ 284432
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a0959517f72d-Picture1.1-1176af2dce774326e11acd90a1bb4cbe.png");

/***/ },

/***/ 543604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e18784df15ca-vgpu03-3c433acd7f67a3e092a25270af6c799a.png");

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