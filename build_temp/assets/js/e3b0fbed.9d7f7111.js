"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[24466],{

/***/ 685443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_best_practice_upgrade_fke_cluster_version_md_e3b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-best-practice-upgrade-fke-cluster-version-md-e3b.json
const site_docs_dedicated_fpt_kubernetes_engine_best_practice_upgrade_fke_cluster_version_md_e3b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version","title":"2. Dedicated – FPT Kubernetes Engine","description":"Best Practice Upgrade FKE Cluster Version","source":"@site/docs/dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version","permalink":"/dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Best practice upgrade fke cluster version","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=best-practice-upgrade-fke-cluster-version","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Best practice manual scaling","permalink":"/dedicated-fpt-kubernetes-engine/best-practice-manual-scaling"},"next":{"title":"Cac luu y khi su dung fke","permalink":"/dedicated-fpt-kubernetes-engine/cac-luu-y-khi-su-dung-fke"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/best-practice-upgrade-fke-cluster-version.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Best practice upgrade fke cluster version',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=best-practice-upgrade-fke-cluster-version',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best Practice Upgrade FKE Cluster Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dịch vụ D-FKE hỗ trợ upgrade version cụm Kubernetes trên Portal Console."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A. Tính năng sản phẩm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cả master và worker node đều được nâng cấp version: quá trình này hoàn toàn tự động, người dùng dễ dàng thao tác trên portal, không cần tác động vào cluster."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgrade master với zero downtime: hệ thống tự động upgrade master lên phiên bản kế tiếp VD: 1.21 à 1.22 không có downtime nếu cluster sử dụng mode HA ( 3 master). Với các cluster có 1 master, sẽ mất một vài phút downtime master, trong thời gian đó không thể tác động vào cluster (Kubernetes API) nhưng workload của ứng dụng vẫn hoạt động bình thường."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgrade worker với zero downtime: hệ thống tự động Rolling update version từng worker node. Lần lượt các worker sẽ drain hết pod workload và cordon (disable schedule) pods gán vào node cho tới khi node nó update xong."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hướng dẫn upgrade trên portal console: tham khảo user guide: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=nang-cap-k8s-version",
        children: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=nang-cap-k8s-version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B. Chi tiết quá trình upgrade của hệ thống:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Pre-upgrade"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống setup môi trường để cluster upgrade"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra môi trường: cluster status/network status"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Upgrade"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Upgrade lần lượt các node, master trước, worker sau)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cordon node"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Drain node"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check node is in ready state"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Backup old certs and keys, Backup old confs (master)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update etcd-servers for apiserver (master)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install new version software on node: kubelet, calico, container runtime, coredns, nodelocaldns, metrics server .."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Post-upgrade"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install new version Addon on node: CSI, CCM, Autoscaler"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check upgrade state"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cleanup"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C. Recommend cho cluster khi sử dụng upgrade:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quá trình upgrade cluster nên thực hiện trong thời điểm hệ thống chịu tải thấp, nên thực hiện sau giờ hành chính hoặc cuối tuần."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trước khi upgrade môi trường prod nên kiểm thử các ứng dụng có tương thích với K8S version mới không ở môi trường dev/uat trước, đặc biệt là các API K8S version mới."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nâng cấp version cluster theo từng phiên bản kế tiếp, ví dụ: 1.21 à 1.22 à 1.23"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đảm bảo cluster luôn sử dụng phiên bản mới nhất (tham khảo bảng EOL version)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Backup config của cluster trước khi upgrade: sử dụng các tool CD hoặc backup manifest/helm chart"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Backup master của cluster trước khi upgrade: tham khảo hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=backup-and-restore-cluster",
            children: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=backup-and-restore-cluster"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Triển khai cluster sử dụng HA master (03 master) để đảm bảo không downtime control plane."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Triển khai cluster sử dụng HA worker từ 02 worker trở lên để đảm bảo không downtime workload ứng dụng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Triển khai các ứng dụng dưới dạng Workload Controller như Deployment, Replicaset, DaemonSet, .. có replica từ 2 trở lên và không nên triển khai các Pod đơn lẻ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Không nên triển khai ứng dụng sử dụng local storage (empty dir, hostpath ..) nên sử dụng CSI"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Triển khai Anti-Affinity rule cho các ứng dụng để đảm bảo ứng dụng chạy trên nhiều worker nodes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đảm bảo Firewall mở port để hệ thống của FPT kết nối đến cluster trong quá trình upgrade (FKE controller: từ 103.160.90.33 đến <> port tcp 6443, 32085, 2022"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FPT Cloud Portal: từ 103.160.90.36, 103.160.90.37, 103.160.90.39 đến << IP Public Cluster>> port tcp 6443) tham khảo hướng dẫn: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-advanced-firewall",
        children: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-advanced-firewall"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thiết kế sizing tài nguyên cho ứng dụng đảm bảo có đủ tài nguyên để để Rolling update worker node (có thể scale thêm 01 worker làm buffer trước khi upgrade version cluster)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D. D-FKE EOL Chart"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kubernetes version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Upstream release"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FKE GA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FKE End of standard support"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apr,2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sep, 2024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aug, 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nov, 2024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dec, 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feb, 2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May, 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aug, 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oct, 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aug, 2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dec, 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jan, 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nov, 2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apr, 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feb, 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feb, 2026"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aug, 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mar, 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May, 2026"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jan, 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-and-restore-cluster",
        children: " Previous Backup & Restore Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./auto-repair-nodes",
        children: " Next Auto repair nodes "
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