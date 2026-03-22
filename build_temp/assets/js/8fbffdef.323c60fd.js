"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[18846],{

/***/ 401881
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_index_md_8fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-index-md-8fb.json
const site_docs_managed_fpt_kubernetes_engine_index_md_8fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/index","title":"2. Managed – FPT Kubernetes Engine","description":"Managed – FPT Kubernetes Engine","source":"@site/docs/managed-fpt-kubernetes-engine/index.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/","permalink":"/managed-fpt-kubernetes-engine/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Managed – FPT Kubernetes Engine","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan chi tiet su dung auto upgrade","permalink":"/managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade"},"next":{"title":"Initial setup","permalink":"/managed-fpt-kubernetes-engine/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/index.md


const frontMatter = {
	sidebar_label: 'Managed – FPT Kubernetes Engine',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn chi tiết (Tutorials)",
  "id": "hướng-dẫn-chi-tiết-tutorials",
  "level": 2
}, {
  "value": "Các lưu ý khi sử dụng M-FKE",
  "id": "các-lưu-ý-khi-sử-dụng-m-fke",
  "level": 2
}, {
  "value": "Các câu hỏi thường gặp (FAQs)",
  "id": "các-câu-hỏi-thường-gặp-faqs",
  "level": 2
}, {
  "value": "Một số gợi ý mẫu (Samples)",
  "id": "một-số-gợi-ý-mẫu-samples",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Managed – FPT Kubernetes Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Kubernetes Engine dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Kubernetes Engine tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud.M-FKE (Managed - FPT Kubernetes Engine) là một mô hình cung cấp dịch vụ Kubernetes của FKE. Với M-FKE, FPTCloud quản trị toàn bộ thành phần control-planes, người sử dụng sẽ triển khai và quản trị các Worker Nodes. M-FKE giúp người sử dụng tập trung vào việc triển khai ứng dụng mà không cần tốn nguồn lực vào việc quản trị k8s cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Những điều cần lưu ý trước khi sử dụng M-FKE?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vị trí địa lý đặt Kubernetes Cluster : Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ truy cập đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. Số lượng các Nodes và cấu hình của từng Nodes cần sử dụng: Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho các tài nguyên Ram + CPU, Storage, IP…Vì vậy bạn nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để FPT Cloud hỗ trợ bạn tốt nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/quan-ly-kubernetes-cluster",
          children: " Quản lý Kubernetes Cluster "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-ta%CC%A3o-kubernetes-cluster-moi",
              children: " Khởi tạo Kubernetes Cluster mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/xem-danh-sach-kubernetes-cluster-da-tao",
              children: " Xem danh sách Kubernetes Cluster đã tạo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/truy-cap-thong-tin-chi-tiet-cua-cluster",
              children: " Truy cập thông tin chi tiết của Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/lay-thong-tin-truy-cap-cluster",
              children: " Lấy thông tin truy cập Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/tinh-nang-rotate-kubeconfig",
              children: " Tính năng Rotate Kubeconfig "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/xoa-kubernetes-cluster",
              children: " Xóa Kubernetes Cluster "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/thay-doi-cau-hinh-k8s-cluster",
          children: " Thay đổi cấu hình K8s Cluster "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/thay-doi-cluster-endponit-access",
              children: " Thay đổi Cluster Endpoint Access "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./worker-group/them-worker-group",
              children: " Thêm Worker Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./worker-group/thay-doi-cau-hinh-internal-subnet-load-balancer",
              children: " Thay đổi cấu hình Internal subnet Load Balancer (CIDR) "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./worker-group/chinh-sua-label-taint-cho-worker-group",
              children: " Chỉnh sửa label/taint cho worker group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./worker-group/bat-tat-node-auto-repair",
              children: " Bật/Tắt Node Auto-repair "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./worker-group/chuyen-worker-group-base",
              children: " Tính năng chuyển worker group base "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/nang-cap-k8s-version",
              children: " Nâng cấp K8S version "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/cluster-autoscale",
              children: " Cluster Autoscale "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/trien-khai-ung-dung-tren-worker-pool",
          children: " Triển khai ứng dụng trên worker pool "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/scale-in-chi-dinh-node",
          children: " Tính năng scale in chỉ định node trong cluster "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./worker-group/service-type-load-balancer",
          children: " Service Type Load-Balancer "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./storage-backup/persistent-storage",
          children: " Persistent Storage "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/tinh-nang-hibernate-wakeup",
          children: " Tính năng Hibernate & Wake-up "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/tinh-nang-dat-lich-hibernate-wake-up",
          children: " Tính năng Đặt lịch Hibernate & Wake-up "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/tu-dong-nang-cap-version",
          children: " Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version) "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/gioi-thieu-chung-ve-quy-trinh-quan-ly-version",
              children: " Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/huong-dan-chi-tiet-su-dung-auto-upgrade",
              children: " Hướng dẫn chi tiết sử dụng tính năng auto upgrade version "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/fpt-cloud-managed-kubernetes-release-calendar",
          children: " FPT cloud managed kubernetes release calendar "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/tinh-nang-tang-cuong-bao-mat-mfke",
          children: " Tính năng tăng cường bảo mật cho dịch vụ MFKE "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/tinh-nang-benchmark-cluster",
              children: " Tính năng Benchmark Managed Kubernetes Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/tinh-nang-runtime-security-cluster",
              children: " Tính năng Runtime Security cho Managed Kubernetes Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/tinh-nang-workload-scan",
              children: " Tính năng Workload Managed Kubernetes Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/audit-log-vn",
              children: " Audit Logs - Managed Kubernetes Cluster "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./worker-group/danh-tag-cho-vm",
          children: " Tính năng đánh Tag cho Virtual Machine "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./storage-backup/backup-restore-vn",
          children: " Tính năng Backup & Restore "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-lưu-ý-khi-sử-dụng-m-fke",
      children: "Các lưu ý khi sử dụng M-FKE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/cac-luu-y-khi-su-dung-m-fke",
          children: " Các lưu ý khi sử dụng M-FKE "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/mfke-faqs",
          children: " FAQs "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "một-số-gợi-ý-mẫu-samples",
      children: "Một số gợi ý mẫu (Samples)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/microservices-architecture-on-fke",
          children: " Microservices Architecture on FKE "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./gpu/gpu-la-gi",
          children: " GPU là gì? "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./gpu/tai-sao-nen-su-dung-gpu-tren-cloud",
              children: " Tại sao nên sử dụng GPU trên Cloud? "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./gpu/tai-sao-nen-su-dung-gpu-tren-kubernetes",
              children: " Tại sao nên sử dụng GPU Kubernetes? "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./gpu/gpu-sharing",
              children: " Tính năng GPU Sharing "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./gpu/dich-vu-gpu-tren-k8s",
              children: " Dịch vụ GPU trên K8s FPT Cloud "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/dieu-chinh-cau-hinh-coredns-trong-kubernetes-service",
          children: " Điều chỉnh cấu hình CoreDNS trong Kubernetes Service "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./snapshot-v%C3%A0-restore-pvc-tr%C3%AAn-k8s-fpt",
          children: " Snapshot và restore persistent volume trong Kubernetes "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/snapshot-persistent-volume-tren-k8s",
              children: " Tính năng snapshot Persistent Volume trên kubernetes "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/restore-persistent-volume-tren-k8s",
              children: " Tính năng restore volume từ snapshot trên kubernetes "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/thuc-hien-dat-lich-snapshot-pvc",
              children: " Thực hiện đặt lịch Snapshot PVC trên Kubernetes "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/thuc-hien-dat-lich-xoa-pvc-snapshot",
              children: " Thực hiện đặt lịch xóa Snapshot PVC trên Kubernetes "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./security-version/cau-hinh-proxy-protocol",
          children: " Cấu hình proxy protocol "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/cau-hinh-proxy-protocol-cho-istio-ingress",
              children: " Cấu hình proxy protocol cho istio-ingress với Managed Kubernetes cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./security-version/cau-hinh-proxy-protocol-cho-nginx-ingress",
              children: " Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./worker-group/service-type-kb-layer7-lbv2",
          children: " Sử dụng service type Loadbalancer Layer 7 (LBv2) "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./worker-group/thay-doi-cau-hinh-flavor-cua-worker-pool",
          children: " Thay đổi cấu hình flavor của worker pool "
        })
      }), "\n"]
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