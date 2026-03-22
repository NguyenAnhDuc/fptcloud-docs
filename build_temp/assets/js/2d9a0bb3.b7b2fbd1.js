"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[32916],{

/***/ 36439
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_su_dung_gpu_telemetry_md_2d9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-huong-dan-su-dung-gpu-telemetry-md-2d9.json
const site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_su_dung_gpu_telemetry_md_2d9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry","title":"2. FPT Kubernetes Engine with GPU","description":"Hướng dẫn sử dụng GPU Telemetry","source":"@site/docs/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan su dung gpu telemetry","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-su-dung-gpu-telemetry","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan su dung cac che do gpu sharing","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing"},"next":{"title":"FPT Kubernetes Engine with GPU","permalink":"/fpt-kubernetes-engine-with-gpu/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-gpu-telemetry.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan su dung gpu telemetry',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-su-dung-gpu-telemetry',
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
        id: "2-fpt-kubernetes-engine-with-gpu",
        children: "2. FPT Kubernetes Engine with GPU"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn sử dụng GPU Telemetry"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud sử dụng Nvidia GPU Telemetry tích hợp với kube-prometheus-stack là bộ công cụ theo dõi và giám sát cho hệ thống sử dụng GPU trên Kubernetes. Bộ công cụ giám sát bao gồm collector, time-series database lưu trữ chỉ số (metrics) và visualization (giao diện trực quan hóa). Bộ công cụ sử dụng các ứng dụng mã nguồn mở phổ biến là Prometheus và Grafana. Prometheus cũng bao gồm Alertmanager để tạo và quản lý các cảnh báo. Prometheus được triển khai cùng với kube-state-metrics và node_exporter để hiển thị các chỉ số (metrics) mức cluster cho các đối tượng API Kubernetes và các chỉ số mức node, ví dụ như mức sử dụng GPU."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra custom metrics của GPU sử dụng câu lệnh sau:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Truy cập Prometheus kiểm tra metrics của GPU DCGM"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "#Forward service Prometheus để truy cập qua Web browser"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl port-forward service/kube-prometheus-stack-1679-prometheus 9090:63090"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "*với 9090 là port của pod prometheus, 63090 là Local Port máy tính của bạn (client)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "#Truy cập Prometheus trên Web browser bằng đường dẫn sau:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "http://localhost:63090/",
            children: "http://localhost:63090/"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trên giao diện Prometheus thao tác như hình dưới đây để kiểm tra metrics GPU DCGM ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(1917)/* ["default"] */ .A) + "",
            width: "2068",
            height: "720"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(214643)/* ["default"] */ .A) + "",
            width: "2068",
            height: "956"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Truy cập Grafana Dashboard"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "#Forward service Grafana để truy cập qua Web browser"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl port-forward service/kube-prometheus-stack-1679050354-grafana 80:63080"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "*với 80 là port của pod Grafana, 63080 là Local Port máy tính của bạn (client)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "#Truy cập Prometheus trên Web browser bằng đường dẫn sau:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "http://localhost:63080/",
            children: "http://localhost:63080/"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Default user và mật khẩu để đăng nhập vào Grafana là:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "User"
      }), " : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "admin"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password: prom-operator"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Import Grafana Dashboard cho GPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để import Dashboard, truy cập giao diện Grafana, mục Dashboards > Manage > Import. Nếu sử dụng Dashboard của FPT Cloud, nhập nội dung FPT Cloud GPU Dashboard json > Load."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dashboard GPU của Nvidia FPT Cloud:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925813)/* ["default"] */ .A) + "",
        width: "1911",
        height: "745"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./trien-khai-ung-dung-su-dung-gpu-tren-kubernetes",
        children: " Previous Triển khai ứng dụng sử dụng GPU trên Kubernetes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-autoscaler-voi-gpu",
        children: " Next Hướng dẫn sử dụng Autoscaler với GPU "
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

/***/ 1917
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7557c0f40f03-t3-5ac67962f27988359c8c71e77ef88486.png");

/***/ },

/***/ 925813
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7a17a1d03ffb-image12-d8a2646a0f1be247ad4f5fb3bd5498a9.png");

/***/ },

/***/ 214643
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/810a513e51af-t4-1e812c3686ecbaf87f9c5da89c1740b0.png");

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