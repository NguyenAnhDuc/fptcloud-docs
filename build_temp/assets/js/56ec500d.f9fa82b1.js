"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[71025],{

/***/ 893603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_initial_khoi_tao_kubernetes_cluster_moi_md_56e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-initial-khoi-tao-kubernetes-cluster-moi-md-56e.json
const site_docs_dedicated_fpt_kubernetes_engine_initial_khoi_tao_kubernetes_cluster_moi_md_56e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/initial/khoi-tao-kubernetes-cluster-moi","title":"2. Dedicated – FPT Kubernetes Engine","description":"Khởi tạo Kubernetes Cluster mới","source":"@site/docs/dedicated-fpt-kubernetes-engine/initial/khoi-tao-kubernetes-cluster-moi.md","sourceDirName":"dedicated-fpt-kubernetes-engine/initial","slug":"/dedicated-fpt-kubernetes-engine/initial/khoi-tao-kubernetes-cluster-moi","permalink":"/dedicated-fpt-kubernetes-engine/initial/khoi-tao-kubernetes-cluster-moi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khoi tao kubernetes cluster moi","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=khoi-tao-kubernetes-cluster-moi","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/dedicated-fpt-kubernetes-engine/initial/initial-setup"},"next":{"title":"Lay thong tin truy cap cluster","permalink":"/dedicated-fpt-kubernetes-engine/initial/lay-thong-tin-truy-cap-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/initial/khoi-tao-kubernetes-cluster-moi.md


const frontMatter = {
	sidebar_label: 'Khoi tao kubernetes cluster moi',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=khoi-tao-kubernetes-cluster-moi',
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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo Kubernetes Cluster mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Một số điều kiện bắt buộc để thực hiện thao tác này:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quota CPU, RAM, Storage, Instance phải đủ cho cấu hình mong muốn của Cluster."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "01 Public IP Available: Sử dụng cho Kubernetes API và Ingress."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["01 VM Network: Network được sử dụng cho Kubernetes Nodes. Cần tạo Subnet có ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Static IP Pool"
        }), " theo hướng dẫn tại đây."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533566)/* ["default"] */ .A) + "",
        width: "637",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập tên và chọn version cho cluster sau đó bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349170)/* ["default"] */ .A) + "",
        width: "635",
        height: "306"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập tên Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " Chọn version của Cluster."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình Node Pools theo nhu cầu sau đó chọn Next."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(540305)/* ["default"] */ .A) + "",
        width: "637",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**Storage Policy & Load Balancer: **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy:"
          }), " Chọn Storage Policy sử dụng cho Disk của các VM trong Kubernetes Cluster."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LB Size:"
          }), " Cấu hình của Load Balancer."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard: Max 2000 CCU, 4000 http req/s, bandwidth 100Mbps."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Advanced: Max 4000 CCU, 8000 http req/s, bandwidth 100Mbps."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Premium: Max 8000 CCU, 16000 http req/s, bandwidth 100Mbps."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Node Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " Chọn cấu hình (CPU & Memory) cho Master Node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk (GB):"
          }), " Chọn dung lượng root disk cho Master Node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "High Availability:"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Disable: Quantity (1) tương ứng là số VM instance Master Node cho cụm k8s là 01."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable: Quantity (3) tương ứng là số VM instance Master Node cho cụm K8s là 03."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Node Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " Chọn cấu hình (CPU & Memory) cho các Worker Node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk (GB):"
          }), " Chọn dung lượng root disk cho các Worker Node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Quantity:"
          }), " Số Worker Node cho cụm K8s."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Autoscale:"
          }), " Bật/Tắt tính năng autoscale cho Cluster, nếu bật hãy nhập các thông số Scale Min (số lượng node còn lại khi scale down xuống) và Scale max (số lượng node tối đa có thể scale up lên)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodes Credentials:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH Key:"
        }), " Key sử dụng để đăng nhập vào VM Node (user root). Nếu chưa có bạn có thể tạo theo hướng dẫn tại đây."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Cấu hình Advanced cho cụm cluster sau đó bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(652491)/* ["default"] */ .A) + "",
        width: "1236",
        height: "592"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFS Storage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check box ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable NFS Presistent Storage"
          }), " : Chọn để deploy ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NFS Persistent Storage"
          }), " cùng với ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kubernetes Cluster"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk (GB)"
          }), " : Dung lượng của NFS Storage. Lưu ý sizing phù hợp, việc thay đổi dung lượng disk sẽ thực hiện manual bởi người sử dụng."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Firewall Configuration"
          }), " : Các cài đặt dành cho người dùng nâng cao, chọn icon để hiển thị. Nếu bạn không hiểu rõ các tham số này, hãy để mặc định."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check box ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Firewall"
          }), " : Chọn để cấu hình Edge IP, Public IP, Private IP cùng với Kubernetes Cluster."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advance Config"
          }), " : Các cài đặt dành cho người dùng nâng cao, chọn icon để hiển thị. Nếu bạn không hiểu rõ các tham số này, hãy để mặc định."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pod Network"
          }), " : Network sử dụng cho Pod trong cluster."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service Network"
          }), " : Network sử dụng cho Service trong cluster."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Node Prefix"
          }), " : Subnet Prefix cho Pod trong Node"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Max Pod per Node"
          }), " : Số Pod tối đa trên mỗi Kubernetes Node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nodes DNS"
          }), " : DNS được sử dụng cho Nodes và Kubernetes Cluster. User nhập DNS mong muốn để sử dụng hệ thống DNS nội bộ của user."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), ". Hệ thống sẽ hiển thị màn hình xác nhận lại toàn bộ thông tin đã nhập, kiểm tra tài nguyên và tiến hành quá trình khởi tạo Kubernetes Cluster dựa vào cấu hình đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(19621)/* ["default"] */ .A) + "",
        width: "626",
        height: "296"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes"
      }), ". Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo Kubernetes Cluster dựa vào cấu hình đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(113439)/* ["default"] */ .A) + "",
        width: "632",
        height: "434"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-kubernetes-cluster",
        children: " Previous Quản lý Kubernetes cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-danh-sach-kubernetes-cluster-da-tao",
        children: " Next Xem danh sách Kubernetes Cluster đã tạo "
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

/***/ 113439
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6a395f6aa143-Picture5-7ff2c272492be07b5cafbbea098645b3.png");

/***/ },

/***/ 652491
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aef22d51e796-Screenshot_52-632481f9537be93f15defe0087e2bfb5.png");

/***/ },

/***/ 19621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db8dfc982e42-Picture4-7d4d612bd83ab68a4ef509a08f0be9e2.png");

/***/ },

/***/ 349170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ea3a672d462c-Picture2-a3df172a3f22792bd96d1919071c8b12.png");

/***/ },

/***/ 540305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f4c4f789be9c-Picture3-53ff1f4b7725b3818f75786d09dabfcb.png");

/***/ },

/***/ 533566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f7c686bfbdde-Picture1-cf54134501675ff977a1ceec5ff20fad.png");

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