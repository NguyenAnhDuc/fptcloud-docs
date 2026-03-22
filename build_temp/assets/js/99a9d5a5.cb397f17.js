"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[73032],{

/***/ 156837
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_su_dung_cac_che_do_gpu_sharing_md_99a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-huong-dan-su-dung-cac-che-do-gpu-sharing-md-99a.json
const site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_su_dung_cac_che_do_gpu_sharing_md_99a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing","title":"2. FPT Kubernetes Engine with GPU","description":"Hướng dẫn sử dụng các chế độ GPU sharing","source":"@site/docs/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan su dung cac che do gpu sharing","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-su-dung-cac-che-do-gpu-sharing","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan su dung autoscaler voi gpu","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu"},"next":{"title":"Huong dan su dung gpu telemetry","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan su dung cac che do gpu sharing',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-su-dung-cac-che-do-gpu-sharing',
	parent: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Kubernetes Engine with GPU';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-kubernetes-engine-with-gpu",
        children: "2. FPT Kubernetes Engine with GPU"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn sử dụng các chế độ GPU sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các chế độ GPU sharing cho phép GPU vật lý được chia sẻ bởi nhiều container nhằm mục đích tối ưu hóa mức độ sử dụng GPU. Sau đây là các chiến lược GPU sharing được chúng tôi hỗ trợ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["| Multi-instance GPU | GPU time-sharing | NVIDIA MPS", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---|---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\nGeneral | GPU be divided and sharing among multiple containers | Each container use GPU in a slice of time | Containers use GPU in parallel", (0,jsx_runtime.jsx)(_components.br, {}), "\nIsolation | A GPU be divided in up to seven instances, each instance has its own dedicated compute, memory, bandwidth. Each partition is fully disparated with each other. | Each container accesses the full capacity of the underlying physical GPU by doing context switching between processes running on a GPU. However, time-sharing provides no memory limit enforcement between shared Jobs and the rapid context switching for shared access may introduce overhead. | NVIDIA MPS has limited resource isolation, but gains more flexibility in other dimensions, for example GPU types and max shared units, which simplify resource allocation.", (0,jsx_runtime.jsx)(_components.br, {}), "\nSuitable for these workloads | Recommended for workloads running in parallel and that need certain resiliency and QoS. For example, when running AI inference workloads, multi-instance GPU multi-instance GPU allows multiple inference queries to run simultaneously for quick responses, without slowing each other down. | Recommended for bursty and interactive workloads that have idle periods. These workloads are not cost-effective with a fully dedicated GPU. By using time-sharing, workloads get quick access to the GPU when they are in active phases. GPU time-sharing is optimal for scenarios to avoid idling costly GPUs where full isolation and continuous GPU access might not be necessary, for example, when multiple users test or prototype workloads. Workloads that use time-sharing need to tolerate certain performance and latency compromises. | Recommended for batch processing for small jobs because MPS maximizes the throughput and concurrent use of a GPU. MPS allows batch jobs to efficiently process in parallel for small to medium sized workloads. NVIDIA MPS is optimal for cooperative processes acting as a single application. For example, MPI jobs with inter-MPI rank parallelism. With these jobs, each small CUDA process (typically MPI ranks) can run concurrently on the GPU to fully saturate the whole GPU. Workloads that use CUDA MPS need to tolerate the memory protection and error containment limitations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A. Multi instance GPU (MIG)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi instance GPU là tính năng cho phép GPU của bạn được chia ra thành tối đa 7 phần tách rời nhau. Các phần GPU này được gọi là các MIG instance, các MIG instance này hoàn toàn tách biệt với nhau về khả năng tính toán, băng thông, bộ nhớ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU k8s service của chúng tôi hỗ trợ các MIG profile như sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "No."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPU A100 Profile"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Number instance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instance resource"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-1g.10gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1g.10gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-1g.20gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4g.20gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-2g.20gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2g.20gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-3g.40gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3g.40gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-4g.40gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4g.40gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-balanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1g.10gb"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2g.20gb"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3g.40gb"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none with operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (Entire GPU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU A30 Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-1g.6gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1g.6gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-2g.12gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2g.10gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-4g.24gb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4g.24gb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all-balanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1g.6gb"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2g.12gb"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Ví dụ:"
      }), " Nếu chọn cấu hình strategy single: all-1g.6gb, card GPU A30 trên worker được chia nhỏ thành 4 MIG-devices có tài nguyên GPU bằng ¼ GPU vật lý và 6GB GPU RAM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ MIG config áp dụng cho tất cả các card gắn trên worker."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ MIG strategy trên các worker group của cùng cluster phải cùng 1 loại (single/mixed/none)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Đối với stragegy “none with Operator”, pod có thể sử dụng 1 GPU devices chứa tài nguyên của toàn bộ GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Đối với stragegy “none”, GPU đã được kết nối sẵn vào máy, người dùng có thể tự deploy GPU Operator hoặc GPU device plugin theo cấu hình mong muốn. Khuyến nghị người dùng cần nắm chắc các kiến thức cơ bản về GPU-Sharing trước khi thực hiện strategy này!"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B. Cấu hình MIG trên GPU Kubernetes service"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại bước khởi tạo worker group GPU, bạn có thể chọn các profile MIG sharing mode trên giao diện và GPU Kubernetes service của chúng tôi sẽ thực hiện việc cấu hình cho bạn:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789242)/* ["default"] */ .A) + "",
        width: "624",
        height: "438"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Nếu bạn chọn các profile có dạng “MIG single”, các worker group tiếp theo của bạn chỉ có thể chọn các sharing mode thuộc các profile dạng “MIG single”, tương tự với profile “MIG mixed”, “None”, “None with Operator”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Sharing mode “None” tương ứng với việc chúng tôi để toàn quyền cụm Kuberntes GPU cho bạn, bạn có thể thực hiện cài thủ công GPU Operator hoặc Nvidia device plugin để chạy các sharing mode theo nhu cầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Sharing mode “None with operator” tương ứng với việc chúng tôi thực hiện manage GPU Operator cho bạn. Tuy nhiên thì 1 GPU sẽ chỉ được gán vào tối đa 1 container trong một thời điểm."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify MIG"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hệ thống portal của chúng tôi báo cụm ở trạng thái success, bạn có thể kiểm tra tài nguyên GPU của một node GPU bằng lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubectl describe nodes  \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535532)/* ["default"] */ .A) + "",
        width: "271",
        height: "113"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này, bạn có thể yêu cầu tối đa 4 tài nguyên nvidia.com/gpu cho pod của mình, mỗi tài nguyên nvidia.com/gpu tương ứng với ¼ khả năng tính toán và bộ nhớ của GPU vật lý ban đầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp node của bạn sử dụng 2 GPU, sẽ có 8 tài nguyên nvidia.com/gpu được hiển thị."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, bạn có thể kết hợp MIG với các chiến lược chia sẻ GPU khác như time sclicing (đã hỗ trợ) và MPS (chưa hỗ trợ) để tối đa hóa mức độ sử dụng GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C. Multi Process Service (MPS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ MPS là một tính năng trong GPU của NVIDIA, cho phép nhiều container chia sẻ cùng một GPU vật lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ MPS có ưu điểm hơn so với MIG về vấn đề phân chia tài nguyên GPU, tối đa 48 container có thể sử dụng GPU cùng lúc."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ MPS dựa trên tính năng NVIDIA's Multi-Process Service của CUDA, cho phép nhiều ứng dụng CUDA chạy đồng thời trên một GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Với MPS, người dùng có thể xác định trước số lượng replicas của một GPU. Giá trị này cho chúng ta biết số lượng container tối đa có thể truy cập để sử dụng một GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Ngoài ra, chúng ta có thể giới hạn tài nguyên GPU cho từng container, bằng việc tạo các biến môi trường sau trong container:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA_MPS_ACTIVE_THREAD_PERCENTAGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA_MPS_PINNED_DEVICE_MEM_LIMIT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✔ Để hiểu rõ hơn về cách thức MPS hoạt động, vui lòng truy cập : ", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D. Time Slicing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Timeslcing là tính năng chia sẻ GPU nguyên thủy, từng prorcess/container được sử dụng GPU trong một khoảng thời gian giống nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Timeslicing thực hiện chia sẻ GPU theo cơ chế context switching trong CPU, mỗi process/container sẽ được lưu lại context khi GPU được sử dụng bởi process khác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✔ Time slicing không hỗ trợ chia sẻ GPU một cách song song như MPS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu hình Time slicing trên GPU Kubernetes service"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Timeslicing là một tính năng chia sẻ GPU nguyên thủy, nó có thể được trên toàn bộ các MIG sharing mode (trừ các profile MIG-mixed), và mode “None with Operator”"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại bước khởi tạo worker group GPU, bạn sẽ chọn kết hợp timeslicing với MIG hoặc dùng timeslicing trên GPU với MIG mode enabled, chúng tôi sẽ thực hiện việc cấu hình cho bạn:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147854)/* ["default"] */ .A) + "",
        width: "624",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(893177)/* ["default"] */ .A) + "",
        width: "624",
        height: "408"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Time slicing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể kiểm tra cấu hình timeslicing trên node GPU của mình bằng lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl describe nodes $NODE_NAME \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111860)/* ["default"] */ .A) + "",
        width: "282",
        height: "117"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này, bạn có thể yêu cầu tối đa 48 tài nguyên nvidia.com/gpu cho các pod của mình. Tuy nhiên khác với MPS, mỗi pod không bị giới hạn về lượng tài nguyên nó được quyền chiếm, do vậy có thể dẫn đến tình trạng tràn bộ nhớ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp bạn sử dụng MIG mode, số lượng tài nguyên nivida.com/gpu bằng số lượng MIG instance * số lượng Time Slicing max client bạn định nghĩa. VD: bạn sử dụng MIG mode 2x2g.12gb và số timeslicing client bằng 48, sẽ có 96 tài nguyên nvidia.com/gpu được hiển thị."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một vài lưu ý"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tài nguyên nvidia.com/gpu một container yêu cầu có thể bằng hoặc hoặc lớn hơn 1. Tuy nhiên yêu cầu nhiều hơn 1 tài nguyên nvidia.com/gpu không giúp cho container của bạn được quyền truy cập nhiều tài nguyên hơn."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khi bạn sử dụng timeslicing, container không bị giới hạn về việc sử dụng tài nguyên tính toán và bộ nhớ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Số max client tối đa là 48, ít nhất là 2."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Một container chạy một process."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cần xác định rõ ràng lượng tài nguyên GPU container cần để tránh trường hợp OOM gây gián đoạn hoạt động của GPU."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-autoscaler-voi-gpu",
        children: " Previous Hướng dẫn sử dụng Autoscaler với GPU "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tang-them-worker-group-su-dung-gpu",
        children: " Next Tăng thêm Worker Group sử dụng GPU "
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

/***/ 111860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 789242
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4c4d1d6e6ff3-Picture15-1-9fe47311476cc644cb6e184da417d500.png");

/***/ },

/***/ 535532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 893177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7ec0a50ecd78-Picture27-1-ff3b442b84781043768cca1f1ae5f74d.png");

/***/ },

/***/ 905005
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 147854
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e981fe80d8bf-Picture26-1-a882b5b0bf8e8b7ec608de10fea5ed27.png");

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