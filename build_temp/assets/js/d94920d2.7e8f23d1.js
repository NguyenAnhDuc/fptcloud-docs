"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[9403],{

/***/ 658513
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_truy_cap_thong_tin_chi_tiet_cua_cluster_md_d94_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-truy-cap-thong-tin-chi-tiet-cua-cluster-md-d94.json
const site_docs_dedicated_fpt_kubernetes_engine_truy_cap_thong_tin_chi_tiet_cua_cluster_md_d94_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster","title":"2. Dedicated – FPT Kubernetes Engine","description":"Truy cập thông tin chi tiết của Cluster","source":"@site/docs/dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster","permalink":"/dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Truy cap thong tin chi tiet cua cluster","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=truy-cap-thong-tin-chi-tiet-cua-cluster","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Them nfs persistent storage","permalink":"/dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage"},"next":{"title":"Xem danh sach kubernetes cluster da tao","permalink":"/dedicated-fpt-kubernetes-engine/xem-danh-sach-kubernetes-cluster-da-tao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Truy cap thong tin chi tiet cua cluster',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=truy-cap-thong-tin-chi-tiet-cua-cluster',
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
      children: "Truy cập thông tin chi tiết của Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673848)/* ["default"] */ .A) + "",
        width: "1377",
        height: "663"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " cần xem thông tin trên danh sách."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673848)/* ["default"] */ .A) + "",
        width: "1377",
        height: "663"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn Tab để xem thông tin tương ứng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3.1"
      }), ". Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enssential Properties"
      }), " : Hiển thị các thông tin Cluster Information, Load Balancer VIP, API."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster Information"
        }), " : Hiển thị thông tin cơ bản về cluster bao gồm Cluster ID, Version, Kubernetes config, Status, Public IP, SSH Key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load Balancer VIP"
        }), " : Các virtual IP của LB được sử dụng cho K8s API và Ingress."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dashboard & API"
        }), ": API Url."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(563639)/* ["default"] */ .A) + "",
        width: "619",
        height: "387"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3.2"
      }), ". Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " : Hiển thị thông tin cấu hình các node bao gồm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master nodes"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker nodes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Master Configuration"
        }), " : Cấu hình Master Node bao gồm số lượng, CPU, Memory, Disk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker Configuration"
        }), " : Cấu hình Worker Node bao gồm số lượng, CPU, Memory, Disk, Storage Policy, Auto Scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(307943)/* ["default"] */ .A) + "",
        width: "612",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3.3"
      }), ". Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " : Hiển thị các tham số nâng cao thuộc Kubernetes Cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced Configuration"
        }), " : Tham số nâng cao của Kubernetes Cluster (Nodes DNS, Pod Network, Service Network , Network Node Prefix, Max Pod Per Node, Enable Custom Script)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NFS Storage"
        }), " : Trạng thái Enable/Disable, dung lượng Disk của NFS Storage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962120)/* ["default"] */ .A) + "",
        width: "604",
        height: "423"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3.4"
      }), ". Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instances"
      }), " : Hiển thị các máy chủ ảo thuộc Kubernetes Cluster đang xem bao gồm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master nodes"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker nodes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(346034)/* ["default"] */ .A) + "",
        width: "529",
        height: "234"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3.5"
      }), ". Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Activity Logs"
      }), " : Ghi lại logs các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " đã thực hiện với Kubernetes Cluster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782260)/* ["default"] */ .A) + "",
        width: "536",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-danh-sach-kubernetes-cluster-da-tao",
        children: " Previous Xem danh sách Kubernetes Cluster đã tạo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./lay-thong-tin-truy-cap-cluster",
        children: " Next Lấy thông tin truy cập Cluster "
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

/***/ 782260
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/33e4e3ab1b4e-Picture13-a28a62a3f20c7912b97aaac0a0a68b72.png");

/***/ },

/***/ 307943
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46417cf477da-Picture10-2888586dea468c16ce6704eb21e019c1.png");

/***/ },

/***/ 563639
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8b47436937a4-Picture9-0b07ecd9733f0b6c4059ea5778496927.png");

/***/ },

/***/ 962120
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9d760e59fff3-Picture11-741ab8b48c4d5e209db07316c2cde42f.png");

/***/ },

/***/ 673848
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b69d141dd9e2-Picture7-d4def08146a13f652765624238c76b11.png");

/***/ },

/***/ 346034
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d65d442438ef-Picture12-6a205c09577070dc4c9e94ab9f5dd303.png");

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