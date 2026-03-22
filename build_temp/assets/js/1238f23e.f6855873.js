"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[78887],{

/***/ 635222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_trien_khai_ung_dung_su_dung_gpu_tren_kubernetes_md_123_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-trien-khai-ung-dung-su-dung-gpu-tren-kubernetes-md-123.json
const site_docs_fpt_kubernetes_engine_with_gpu_trien_khai_ung_dung_su_dung_gpu_tren_kubernetes_md_123_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes","title":"2. FPT Kubernetes Engine with GPU","description":"Triển khai ứng dụng sử dụng GPU trên Kubernetes","source":"@site/docs/fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes","permalink":"/fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Trien khai ung dung su dung gpu tren kubernetes","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=trien-khai-ung-dung-su-dung-gpu-tren-kubernetes","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tong quan dich vu gpu","permalink":"/fpt-kubernetes-engine-with-gpu/tong-quan-dich-vu-gpu"},"next":{"title":"Khởi tạo & Kích hoạt","permalink":"/fpt-container-registry-2/initial/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/trien-khai-ung-dung-su-dung-gpu-tren-kubernetes.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Trien khai ung dung su dung gpu tren kubernetes',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=trien-khai-ung-dung-su-dung-gpu-tren-kubernetes',
	parent: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Kubernetes Engine with GPU';

const assets = {

};



const toc = [{
  "value": "💡 <strong>Kiểm tra cấu hình GPU Instance trên worker chưa bằng lệnh sau (ssh vào worker, gõ lệnh):</strong>",
  "id": "-kiểm-tra-cấu-hình-gpu-instance-trên-worker-chưa-bằng-lệnh-sau-ssh-vào-worker-gõ-lệnh",
  "level": 3
}, {
  "value": "👉 <strong>Ví dụ triển khai ứng dụng sử dụng GPU:</strong>",
  "id": "-ví-dụ-triển-khai-ứng-dụng-sử-dụng-gpu",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "2-fpt-kubernetes-engine-with-gpu",
        children: "2. FPT Kubernetes Engine with GPU"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triển khai ứng dụng sử dụng GPU trên Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes quản lý và sử dụng resources GPU tương tự như sử dụng resources CPU. Tùy vào cấu hình GPU lựa chọn cho Worker Group để khai báo resources GPU cho ứng dụng trên Kubernetes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Có thể chỉ định GPU limits mà không cần chỉ định requests do Kubernetes sử dụng limits làm giá trị yêu cầu mặc định."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Có thể chỉ định cả GPU limits và requests nhưng hai giá trị này phải bằng nhau."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Không thể chỉ định GPU requests mà không chỉ định limits."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra cấu hình GPU bằng lệnh sau:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl get node  -o json | jq ‘.items[].metadata.labels‘ "
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Ví dụ:"
      }), " hình dưới cho thấy worker sử dụng card Nvidia A30, cấu hình strategy: all-balanced, trạng thái: success."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(512178)/* ["default"] */ .A) + "",
        width: "327",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-kiểm-tra-cấu-hình-gpu-instance-trên-worker-chưa-bằng-lệnh-sau-ssh-vào-worker-gõ-lệnh",
      children: ["💡 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kiểm tra cấu hình GPU Instance trên worker chưa bằng lệnh sau (ssh vào worker, gõ lệnh):"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "-ví-dụ-triển-khai-ứng-dụng-sử-dụng-gpu",
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ triển khai ứng dụng sử dụng GPU:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Với sharing mode MIG và strategy: single, tài nguyên GPU được khai báo như sau:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cú pháp:  \n\nnvidia.com/gpu:  \n\n#Ví dụ:  \n\nnvidia.com/gpu: 1 \n\n*(Với strategy single, card GPU chia được chia nhỏ thành các instance bằng nhau) \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ deployment sử dụng GPU single strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1 \n\nkind: Deployment \n\nmetadata: \n\n  name: example-gpu-app \n\nspec: \n\n  replicas: 1 \n\n  selector: \n\n    matchLabels: \n\n      component: gpu-app \n\n  template: \n\n    metadata: \n\n      labels: \n\n        component: gpu-app \n\n    spec: \n\n      containers: \n\n        - name: gpu-container \n\n          securityContext: \n\n            capabilities: \n\n              add: \n\n                - SYS_ADMIN \n\n          resources: \n\n            limits: \n\n              nvidia.com/gpu: 1 \n\n          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04 \n\n          command: [\"/bin/sh\", \"-c\"] \n\n          args: \n\n            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Với sharing mode MIG và mixed, tài nguyên GPU được khai báo như sau:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#Cú pháp:  \n\nnvidia.com/:  \n\n#Ví dụ:  \n\nnvidia.com/mig-1g.6gb: 2 \n\n*(Với strategy mixed, card GPU chia được chia nhỏ thành 2 loại instance nên khi khai báo resources cần chỉ rõ loại instance sử dụng) \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ deployment sử dụng gpu mixed strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1 \n\nkind: Deployment \n\nmetadata: \n\n  name: example-gpu-app \n\nspec: \n\n  replicas: 1 \n\n  selector: \n\n    matchLabels: \n\n      component: gpu-app \n\n  template: \n\n    metadata: \n\n      labels: \n\n        component: gpu-app \n\n    spec: \n\n      containers: \n\n        - name: gpu-container \n\n          securityContext: \n\n            capabilities: \n\n              add: \n\n                - SYS_ADMIN \n\n          resources: \n\n            limits: \n\n              nvidia.com/mig-1g.6gb: 1 \n\n          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04 \n\n          command: [\"/bin/sh\", \"-c\"] \n\n          args: \n\n            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Với none strategy, tài nguyên GPU được khai báo như sau:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#Cú pháp: \n\nnvidia.com/gpu: 1 \n\n*(Với none strategy, pod sẽ dùng toàn bộ tài nguyên của một card GPU) \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ deployment sử dụng gpu none strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: apps/v1 \n\nkind: Deployment \n\nmetadata: \n\n  name: example-gpu-app \n\nspec: \n\n  replicas: 1 \n\n  selector: \n\n    matchLabels: \n\n      component: gpu-app \n\n  template: \n\n    metadata: \n\n      labels: \n\n        component: gpu-app \n\n    spec: \n\n      containers: \n\n        - name: gpu-container \n\n          securityContext: \n\n            capabilities: \n\n              add: \n\n                - SYS_ADMIN \n\n          resources: \n\n            limits: \n\n              nvidia.com/gpu: 1 \n\n          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04 \n\n          command: [\"/bin/sh\", \"-c\"] \n\n          args: \n\n            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4️⃣ Với sharing mode MPS, tài nguyên GPU được khai báo như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#Cú pháp:  \n\nnvidia.com/gpu:  \n\n#Ví dụ:  \n\nnvidia.com/gpu: 1 \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Chú ý:"
      }), " số lượng tài nguyên nvidia.com/gpu một pod request tối đa chỉ bằng 1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./thay-doi-worker-group-su-sung-gpu",
        children: " Previous Thay đổi Worker Group sử dụng GPU  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-gpu-telemetry",
        children: " Next Hướng dẫn sử dụng GPU Telemetry "
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

/***/ 512178
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/30173fb0e3b1-Picture32-1-74c5ae2a5343521a9acf9ffbae3eda5b.png");

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