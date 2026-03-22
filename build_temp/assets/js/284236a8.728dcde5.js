"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26051],{

/***/ 296199
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_index_md_284_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-index-md-284.json
const site_docs_dedicated_fpt_kubernetes_engine_index_md_284_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/index","title":"2. Dedicated – FPT Kubernetes Engine","description":"Dedicated – FPT Kubernetes Engine","source":"@site/docs/dedicated-fpt-kubernetes-engine/index.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/","permalink":"/dedicated-fpt-kubernetes-engine/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Dedicated – FPT Kubernetes Engine","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Dfke faqs","permalink":"/dedicated-fpt-kubernetes-engine/dfke-faqs"},"next":{"title":"Initial setup","permalink":"/dedicated-fpt-kubernetes-engine/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/index.md


const frontMatter = {
	sidebar_label: 'Dedicated – FPT Kubernetes Engine',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

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
  "value": "Các lưu ý khi sử dụng FKE",
  "id": "các-lưu-ý-khi-sử-dụng-fke",
  "level": 2
}, {
  "value": "Các câu hỏi thường gặp (FAQs)",
  "id": "các-câu-hỏi-thường-gặp-faqs",
  "level": 2
}, {
  "value": "Một số gợi ý mẫu (Samples)",
  "id": "một-số-gợi-ý-mẫu-samples",
  "level": 2
}, {
  "value": "Release note",
  "id": "release-note",
  "level": 2
}, {
  "value": "Những cập nhật tính năng của dịch vụ FPT Kubernetes Engine v1.2 - Tháng 4/2022",
  "id": "những-cập-nhật-tính-năng-của-dịch-vụ-fpt-kubernetes-engine-v12---tháng-42022",
  "level": 3
}, {
  "value": "Thay đổi Flavor (cấu hình) NFS server",
  "id": "thay-đổi-flavor-cấu-hình-nfs-server",
  "level": 3
}, {
  "value": "Tăng Storage size của NFS Server",
  "id": "tăng-storage-size-của-nfs-server",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
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
      children: "Dedicated – FPT Kubernetes Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Kubernetes Engine dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Kubernetes Engine tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud.D-FKE (Dedicated - FPT Kubernetes Engine) là một mô hình cung cấp dịch vụ Kubernetes của FKE. Với D-FKE, khách hàng có thể quản lý toàn bộ Kubernetes Cluster bao gồm Master Nodes (chứa các thành phần control plane) và Worker Nodes trong khi các tính năng như autoscale, service LB, upgrade version, persistent volume... vẫn được hỗ trợ đầy đủ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Những điều cần lưu ý trước khi sử dụng D-FKE?"
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
          children: " Quản lý Kubernetes cluster "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/khoi-tao-kubernetes-cluster-moi",
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
              href: "./cluster-management/xoa-kubernetes-cluster",
              children: " Xóa Kubernetes Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/stop-kubernetes-cluster",
              children: " Stop Kubernetes Cluster "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cluster-management/start-kubernetes-cluster",
              children: " Start Kubernetes Cluster "
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
              href: "./cluster-management/scale-worker-nodes",
              children: " Scale worker nodes "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/thay-doi-flavor-cau-hinh-nodes",
              children: " Thay đổi Flavor (cấu hình) Nodes "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/thay-doi-flavor-cau-hinh-nfs",
              children: " Thay đổi Flavor (cấu hình) NFS Server "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/tang-storage-size-cua-nodes",
              children: " Tăng Storage size của các Nodes "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/tang-storage-size-cua-nfs",
              children: " Tăng Storage size của NFS Server "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./version/nang-cap-k8s-version",
              children: " Nâng cấp K8s version "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage-backup/them-nfs-persistent-storage",
              children: " Thêm NFS Persistent Storage "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/autoscale",
          children: " Automatic Scaling "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/manual-scale",
          children: " Manual Scaling "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/best-practice-manual-scaling",
          children: " Best Practice Manual Scaling "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./storage-backup/persistent-storage",
          children: " Persistent Storage "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/service-type-load-balancer",
          children: " Service Type Load-Balancer "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/dfke-advanced-firewall",
          children: " Advanced Firewall "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./storage-backup/backup-and-restore-cluster",
          children: " Backup & Restore Cluster "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./version/best-practice-upgrade-fke-cluster-version",
          children: " Best Practice Upgrade FKE Cluster Version "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/auto-repair-nodes",
          children: " Auto repair nodes "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/retry-timeout-rule",
          children: " Retry – Timeout Rule "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-lưu-ý-khi-sử-dụng-fke",
      children: "Các lưu ý khi sử dụng FKE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./cluster-management/cac-luu-y-khi-su-dung-fke",
          children: " Các lưu ý khi sử dụng FKE "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./version/dfke-faqs",
          children: " FAQs "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "một-số-gợi-ý-mẫu-samples",
      children: "Một số gợi ý mẫu (Samples)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-note",
      children: "Release note"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "những-cập-nhật-tính-năng-của-dịch-vụ-fpt-kubernetes-engine-v12---tháng-42022",
      children: "Những cập nhật tính năng của dịch vụ FPT Kubernetes Engine v1.2 - Tháng 4/2022"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud ra mắt phiên bản cập nhật mới của FPT Kubernetes Engine với 4 tính năng cập nhật. Với phiên bản này, người dùng sẽ quản lý các cluster dễ dàng và thuận tiện hơn với nhiều tính năng quản trị và mở rộng linh hoạt của các nodes trên hê thống FPT Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các tính năng cập nhật:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thay đổi cấu hình (CPU,RAM) của master nodes, worker nodes & NFS server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng quản trị các Kubernetes Cluster, cho phép bật hoặc tắt các Cluster riêng biệt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khả năng tăng dung lượng storage cho master nodes, worker nodes & NFS server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tự động tăng / giảm worker nodes theo tải của ứng dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại sao bạn nên sử dụng?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tăng khả năng quản trị và tùy chỉnh cấu hình của các clusters và nodes để phù hợp với nhu cầu sử dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tự động điều chỉnh tăng giảm tài nguyên worker nodes để đảm bảo hệ thống/ ứng dụng không bị quá tải đột ngột"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thay-đổi-flavor-cấu-hình-nfs-server",
      children: "Thay đổi Flavor (cấu hình) NFS server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(382461)/* ["default"] */ .A) + "",
        width: "609",
        height: "387"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " muốn thay đổi cấu hình nodes trên danh sách."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459224)/* ["default"] */ .A) + "",
        width: "480",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " , bạn có thể thay đổi Flavor (cấu hình CPU, RAM) của NFS Server bằng cách chọn icon Setting ở config tương ứng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(215991)/* ["default"] */ .A) + "",
        width: "610",
        height: "427"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 4: Nhập dung lượng cần tăng thêm > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change"
      }), " để thực hiện thay đổi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(340928)/* ["default"] */ .A) + "",
        width: "479",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tăng-storage-size-của-nfs-server",
      children: "Tăng Storage size của NFS Server"
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

/***/ 215991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1bec156533ef-Picture44-de71523727e445636c49fe7a883c8e8c.png");

/***/ },

/***/ 340928
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/721577ea16b3-Picture45-28555386a3f69857df70e19cb319388d.png");

/***/ },

/***/ 382461
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8bd4ea56c33f-Picture38-9a83fe7ee6ccf6ce1453e8f934385b73.png");

/***/ },

/***/ 459224
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a10b5f0bcdf8-Picture39-cb3b1bf4d277921e9fecaaf024af8c78.png");

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