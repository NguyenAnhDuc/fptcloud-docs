"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70384],{

/***/ 637635
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_trien_khai_ung_dung_tren_worker_managed_gpu_cluster_md_eb8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-trien-khai-ung-dung-tren-worker-managed-gpu-cluster-md-eb8.json
const site_docs_fpt_managed_gpu_cluster_trien_khai_ung_dung_tren_worker_managed_gpu_cluster_md_eb8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster","title":"2. Managed GPU Cluster (Kubernetes)","description":"Triển khai mô hình DeepSeek-R1 sử dụng Ollama và Open WebUI","source":"@site/docs/fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster.md","sourceDirName":"fpt-managed-gpu-cluster","slug":"/fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster","permalink":"/fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Trien khai ung dung tren worker managed gpu cluster","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=trien-khai-ung-dung-tren-worker-managed-gpu-cluster","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tinh nang manual scale managed gpu cluster","permalink":"/fpt-managed-gpu-cluster/tinh-nang-manual-scale-managed-gpu-cluster"},"next":{"title":"Try example workload","permalink":"/fpt-managed-gpu-cluster/try-example-workload"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/trien-khai-ung-dung-tren-worker-managed-gpu-cluster.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Trien khai ung dung tren worker managed gpu cluster',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=trien-khai-ung-dung-tren-worker-managed-gpu-cluster',
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
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
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
      children: "Triển khai mô hình DeepSeek-R1 sử dụng Ollama và Open WebUI"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ollama là một công cụ mã nguồn mở cho phép chạy, quản lý và tùy chỉnh các mô hình ngôn ngữ lớn (LLMs) trên máy tính cá nhân hoặc server, hỗ trợ nhiều mô hình khác nhau như Llama, DeepSeek, Mistral,.... Open-WebUI là giao diện web mã nguồn mở được thiết kế đặc biệt để tương tác với Ollama, cung cấp trải nghiệm người dùng thân thiện và dễ dàng trong việc quản lý và sử dụng các mô hình LLM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tài liệu này sẽ hướng dẫn các bước triển khai mô hình DeepSeek-R1 lên FPT Managed GPU Cluster sử dụng Ollama và Open-WebUI để người dùng có thể sử dụng một cách đơn giản và dễ dàng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Clone mã nguồn và script đã có của Open-WebUI"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> git clone https://github.com/open-webui/open-webui\n> cd open-webui/kubernetes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chạy các script để triển khai ollama và open-webui. Bên trong thư mục đã bao gồm tất cả các file cần thiết để triển khai như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "namespace"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ollama statefulSet"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ollama service"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open-webui deployment"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open-webui service"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> cd kubernetes\n> kubectl apply -f ./kubernetes/manifest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Truy cập vào open-webui trên trình duyệt tại port đã được forward, ví dụ: ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "http://localhost:52433",
          children: "http://localhost:52433"
        })
      }), ". Với lần đầu tiên cài đặt và sử dụng OpenWebUI, người dùng sẽ cần cấu hình các thông tin: tên, email, mật khẩu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(130662)/* ["default"] */ .A) + "",
        width: "2684",
        height: "1754"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Sau khi cài đặt xong, người dùng lựa chọn model để sử dụng. Ví dụ ở đây, ta sẽ cài đặt mô hình DeepSeek-R1, phiên bản ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.5b"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667703)/* ["default"] */ .A) + "",
        width: "2596",
        height: "1666"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Sau khi mô hình đã được tải và chạy, người dùng có thể tương tác với mô hình rất đơn giản và trực quan thông qua giao diện."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10215)/* ["default"] */ .A) + "",
        width: "2684",
        height: "1854"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./service-load-balancer-managed-gpu-cluster",
        children: " Previous Service Type Load-Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./file-storage-high-performance",
        children: " Next Hướng dẫn tích hợp File Storage – High Performance "
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

/***/ 667703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/51db1bb97b11-37-98c3082fd90f967d54433a5703c1f7fb.png");

/***/ },

/***/ 10215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b9243be2adc3-38-fad0a276f93f5243042a2a30e41c2484.png");

/***/ },

/***/ 130662
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bb032555b13c-36-bf1a1cb2db9e37aded26d5fa0c775771.png");

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