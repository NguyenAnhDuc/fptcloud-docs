"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[31628],{

/***/ 693430
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_cai_dat_cluster_kubernetes_su_dung_gpu_md_c89_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-cai-dat-cluster-kubernetes-su-dung-gpu-md-c89.json
const site_docs_fpt_kubernetes_engine_with_gpu_cai_dat_cluster_kubernetes_su_dung_gpu_md_c89_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu","title":"2. FPT Kubernetes Engine with GPU","description":"Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU","source":"@site/docs/fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu","permalink":"/fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cai dat cluster kubernetes su dung gpu","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=cai-dat-cluster-kubernetes-su-dung-gpu","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xoa kubernetes cluster","permalink":"/dedicated-fpt-kubernetes-engine/xoa-kubernetes-cluster"},"next":{"title":"Driver installation self install","permalink":"/fpt-kubernetes-engine-with-gpu/driver-installation-self-install"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cai dat cluster kubernetes su dung gpu',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=cai-dat-cluster-kubernetes-su-dung-gpu',
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
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
      children: "Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT cloud hỗ trợ các card sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trên region Hanoi và SGN hỗ trợ card GPU A30"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trên region Hanoi 2 và Japan hỗ trợ card GPU A30, H100 SXM5, H200 SXM5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu bắt buộc:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình cluster Kubernetes mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node mong muốn (chú ý phần cài đặt Min node và Max node)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước khởi tạo 1 cluster sử dụng GPU:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU A30"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập portal FPT Cloud ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "console.fptcloud.com"
      }), ", chọn mục Kubernetes, ấn “Create a Kubernetes Engine”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(176812)/* ["default"] */ .A) + "",
        width: "624",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin cơ bản của cụm cluster sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.1. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basics Information:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480998)/* ["default"] */ .A) + "",
        width: "690",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập tên Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network"
        }), " : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " Chọn version của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster Endpoint Access"
        }), " : Tùy chọn truy cập Endpoint cụm Kubernetes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["▪ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public"
      }), " : Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường public."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["▪ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public & Private"
      }), ": Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường private."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["▪ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private"
      }), " : Apiserver endpoint của cụm k8s chỉ có thể truy cập private trong VPC. Kết nối từ worker nodes tới apiserver đi qua đường private."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💡 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách chọn Cluster Endpoint phù hợp"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public"
      }), " : Nếu khách hàng cần truy cập Kubernetes API Endpoint từ bên ngoài VPC, sử dụng tùy chọn này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public & Private"
      }), ": Dùng khi cần Endpoint có thể truy cập công khai và muốn whitelist IP truy cập vào apiserver endpoint này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private"
      }), " : Dùng khi chỉ cần truy cập vào Endpoint trong nội bộ VPC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18294)/* ["default"] */ .A) + "",
        width: "1908",
        height: "904"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khách hàng cần chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu bảo mật và kiến trúc mạng của hệ thống."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu chọn Public & Private hoặc Private, sẽ xuất hiện thêm trường Allow CIDR để nhập danh sách các dải địa chỉ IP có quyền truy cập vào Endpoint của Kubernetes Cluster."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải thích về Allow CIDR"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CIDR (Classless Inter-Domain Routing) là định dạng để xác định dải IP có quyền truy cập vào Kubernetes API Endpoint."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu để trống, tức là mặc định là 0.0.0.0/0, Endpoint sẽ có thể truy cập từ bất kỳ địa chỉ IP nào."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu nhập một giá trị cụ thể (ví dụ: 192.168.1.0/24), chỉ các IP trong dải 192.168.1.0 - 192.168.1.255 mới có thể truy cập."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️ Lưu ý: Nếu cần bảo mật cao, khách hàng nên hạn chế CIDR chỉ cho phép các dải IP nội bộ thay vì 0.0.0.0/0."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập vào thông tin cụm Kubernetes cần khởi tạo. Ngoài các thông tin khởi tạo cho Kubernetes thông thường, cần chọn cấu hình cho GPU trong Worker Group:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn lnstance type: GPU"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn GPU type: Nvidia Tesla A30"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn cấu hình GPU sharing"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn cấu hình type GPU (CPU/RAM/GPU RAM)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515760)/* ["default"] */ .A) + "",
        width: "624",
        height: "309"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ở phần “GPU Driver Installation Type” có 2 options là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-install"
          }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User-install"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Driver là một chương trình để cho phép hệ điều hành giao tiếp với phần cứng, cụ thể ở đây là giữa hệ điều hành của worker (windows, ubuntu ...) với GPU, hệ điều hành không thể sử dụng GPU nếu không có driver."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với lựa chọn “Pre-install”, cụm của khách hàng sẽ được thêm Nvidia GPU driver một cách tự động."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với lựa chọn “User-install”, khách hàng có thể cài đặt thủ công GPU driver để lựa chọn phiên bản driver phù hợp."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Ấn Create và kiểm tra lại các thông tin khởi tạo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Theo dõi trạng thái khởi tạo cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU H100 SXM5"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu của FPT Portal chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containers"
      }), " >", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes Engine"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765971)/* ["default"] */ .A) + "",
        width: "1919",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin cơ bản của cụm cluster sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.1. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basics Information:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480998)/* ["default"] */ .A) + "",
        width: "690",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập tên Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network"
        }), " : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " Chọn version của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster Endpoint Access"
        }), " : Tùy chọn truy cập Endpoint cụm Kubernetes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình Nodes Pool theo nhu cầu sử dụng sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với card H100, portal không hỗ trợ tạo worker GPU là worker group base, khách hàng vui lòng tạo worker GPU từ worker group 2 trở đi."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker Group base:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Instance Type: Chọn loại Instance General"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Type: Chọn cấu hình (CPU & Memory) cho các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Node"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Container Runtime: Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containerd"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Policy: Chọn loại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Policy"
      }), " (tương ứng với IOPS) cho Worker Node Disk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Disk: Chọn dung lượng root disk cho các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Node"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Scale min: Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Scale max: Số VM instance Worker Node tối đa cho một worker group trong cụm k8s."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Label: Đánh Label cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Group"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker Group n:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn lnstance type: GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn GPU type: Nvidia H100 SXM5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn cấu hình GPU sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn cấu hình type GPU (CPU/RAM/GPU RAM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ở phần “GPU Driver Installation Type” có 2 options là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-install"
          }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User-install"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Driver là một chương trình để cho phép hệ điều hành giao tiếp với phần cứng, cụ thể ở đây là giữa hệ điều hành của worker (windows, ubuntu ...) với GPU, hệ điều hành không thể sử dụng GPU nếu không có driver."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với lựa chọn “Pre-install”, cụm của khách hàng sẽ được thêm Nvidia GPU driver một cách tự động."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với lựa chọn “User-install”, khách hàng có thể cài đặt thủ công GPU driver để lựa chọn phiên bản driver phù hợp."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Ấn Create và kiểm tra lại các thông tin khởi tạo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Theo dõi trạng thái khởi tạo cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU H200 SXM5"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu của FPT Portal chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containers"
      }), " >", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes Engine"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765971)/* ["default"] */ .A) + "",
        width: "1919",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin cơ bản của cụm cluster sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.1. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basics Information:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480998)/* ["default"] */ .A) + "",
        width: "690",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập tên Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network"
        }), " : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " Chọn version của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster Endpoint Access"
        }), " : Tùy chọn truy cập Endpoint cụm Kubernetes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khách hàng cần chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu bảo mật và kiến trúc mạng của hệ thống."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu chọn Public & Private hoặc Private, sẽ xuất hiện thêm trường Allow CIDR để nhập danh sách các dải địa chỉ IP có quyền truy cập vào Endpoint của Kubernetes Cluster."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình Nodes Pool theo nhu cầu sử dụng sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với card H200, portal không hỗ trợ tạo worker GPU là worker group base, khách hàng vui lòng tạo worker GPU từ worker group 2 trở đi."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker Group base:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Instance Type: Chọn loại Instance General"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Type: Chọn cấu hình (CPU & Memory) cho các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Node"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Container Runtime: Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containerd"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Policy: Chọn loại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Policy"
      }), " (tương ứng với IOPS) cho Worker Node Disk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Disk: Chọn dung lượng root disk cho các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Node"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Scale min: Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Scale max: Số VM instance Worker Node tối đa cho một worker group trong cụm k8s."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["□ Label: Đánh Label cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Group"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worker Group n:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn lnstance type: GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn GPU type: Nvidia H200 SXM5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn cấu hình GPU sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "□ Chọn cấu hình type GPU (CPU/RAM/GPU RAM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ở phần “GPU Driver Installation Type” có 2 options là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-install"
          }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User-install"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Driver là một chương trình để cho phép hệ điều hành giao tiếp với phần cứng, cụ thể ở đây là giữa hệ điều hành của worker (windows, ubuntu ...) với GPU, hệ điều hành không thể sử dụng GPU nếu không có driver."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với lựa chọn “Pre-install”, cụm của khách hàng sẽ được thêm Nvidia GPU driver một cách tự động."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với lựa chọn “User-install”, khách hàng có thể cài đặt thủ công GPU driver để lựa chọn phiên bản driver phù hợp."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Ấn Create và kiểm tra lại các thông tin khởi tạo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Theo dõi trạng thái khởi tạo cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./tong-quan-dich-vu-gpu",
        children: " Previous Tổng quan dịch vụ GPU trên Kubernetes FPT Cloud  "
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

/***/ 176812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a7a3b43af84-Picture1-5-1de0e7ecc75d0f2cc89147fd4597277e.png");

/***/ },

/***/ 18294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3db7fd69b5a1-Screenshot_3-1802000ddd10ab1661736e3ba4fba426.png");

/***/ },

/***/ 515760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b64ef83cfb54-Picture3-4-249c0590648cda2f8ec2e5f592e22ddb.png");

/***/ },

/***/ 480998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ba0b92de83c6-Picture1-12-6cd5274e0e496dd23c6c4d395ece859f.png");

/***/ },

/***/ 765971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e724ae33b342-Screenshot-2025-03-20-134507-af2f707da2c378e26a1bbd193d0c8ba7.png");

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