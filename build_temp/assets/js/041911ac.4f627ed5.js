"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45647],{

/***/ 566403
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_cau_hinh_auto_scale_su_dung_gpu_custom_metric_md_041_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric-md-041.json
const site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_cau_hinh_auto_scale_su_dung_gpu_custom_metric_md_041_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric","title":"2. FPT Kubernetes Engine with GPU","description":"Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric","source":"@site/docs/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Yêu cầu:","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Driver installation self install","permalink":"/fpt-kubernetes-engine-with-gpu/driver-installation-self-install"},"next":{"title":"Yêu cầu","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Yêu cầu:',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric',
	parent: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Kubernetes Engine with GPU';

const assets = {

};



const toc = [{
  "value": "Yêu cầu:",
  "id": "yêu-cầu",
  "level": 2
}, {
  "value": "Các bước cấu hình:",
  "id": "các-bước-cấu-hình",
  "level": 2
}, {
  "value": "Bước 1: Cài đặt các gói kube-prometheus-stack và prometheus-adapter",
  "id": "bước-1-cài-đặt-các-gói-kube-prometheus-stack-và-prometheus-adapter",
  "level": 3
}, {
  "value": "Bước 2: Cấu hình Horizontal Pod Autoscaler cho ứng dụng GPU",
  "id": "bước-2-cấu-hình-horizontal-pod-autoscaler-cho-ứng-dụng-gpu",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
      children: "Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes hỗ trợ tự động auto scale dựa trên các custom metrics như GPU metrics bằng cách kết hợp với Prometheus. Bài viết này giới thiệu cách để cấu hình Auto Scale cho các ứng dụng sử dụng GPU chạy trên nền tảng FPT Kubernetes Engine."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470345)/* ["default"] */ .A) + "",
        width: "620",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "yêu-cầu",
      children: "Yêu cầu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cụm Kubernetes có gắn GPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ứng dụng sử dụng GPU đang ở trạng thái running"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-bước-cấu-hình",
      children: "Các bước cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-cài-đặt-các-gói-kube-prometheus-stack-và-prometheus-adapter",
      children: "Bước 1: Cài đặt các gói kube-prometheus-stack và prometheus-adapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sử dụng dịch vụ FPT App Catalog\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sử dụng dịch vụ FPT App Catalog, tạo App Catalog sau đó chọn mục Connect Cluster để connect đến Cluster GPU."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Tại Menu App Catalogs, chọn Repositories là ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "fptcloud-catalogs"
              })
            }), " , phần search bấm ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "prometheus"
              })
            }), " sau đó chọn install gói ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "kube-prometheus-stack,"
            }), " điền Release name và Namespace để triển khai gói."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298274)/* ["default"] */ .A) + "",
        width: "2000",
        height: "1314"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sử dụng helm chart:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["helm repo add xplat-fke ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://registry.fke.fptcloud.com/chartrepo/xplat-fke",
            children: "https://registry.fke.fptcloud.com/chartrepo/xplat-fke"
          }), " && helm repo update\nhelm install --wait --generate-name ", (0,jsx_runtime.jsx)(_components.br, {}), "\n-n prometheus --create-namespace ", (0,jsx_runtime.jsx)(_components.br, {}), "\nxplat-fke/kube-prometheus-stack\nprometheus_service=$(kubectl get svc -n prometheus -lapp=kube-prometheus-stack-prometheus -ojsonpath='{range .items[*]}{.metadata.name}{\"\\n\"}{end}')\nhelm install --wait --generate-name ", (0,jsx_runtime.jsx)(_components.br, {}), "\n    -n prometheus --create-namespace ", (0,jsx_runtime.jsx)(_components.br, {}), "\n    xplat-fke/prometheus-adapter ", (0,jsx_runtime.jsx)(_components.br, {}), "\n    --set prometheus.url=http://${prometheus_service}.prometheus.svc.cluster.local"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau khi deploy xong gói kube-prometheus-stack, ta tiếp tục deploy prometheus- adapter, tuy nhiên ta cần thay đổi values của gói để trỏ đúng prometheus service của kube-prometheus-stack. Ví dụ với namespace của kube-prometheus-stack ta đặt là prometheus thì values ta cần điền vào là:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "<>.<>.svc.cluster.local\nprometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701048)/* ["default"] */ .A) + "",
        width: "2000",
        height: "1112"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sau đó ta kiểm tra trạng thái của hai gói trên"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959132)/* ["default"] */ .A) + "",
        width: "2000",
        height: "1160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-cấu-hình-horizontal-pod-autoscaler-cho-ứng-dụng-gpu",
      children: "Bước 2: Cấu hình Horizontal Pod Autoscaler cho ứng dụng GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizontal Pod Autoscaler (HPA) tự động scale các Pod để đáp ứng điều kiện được đưa ra trong cấu hình. Ở phần trên khi cấu hình xong prometheus-addapter sẽ export ra các Custom Metric của DCGM để theo dõi workload của GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ một file manifest HPA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n name: my-gpu-app\nspec:\n maxReplicas: 3  # Update this accordingly\n minReplicas: 1\n scaleTargetRef:\n   apiVersion: apps/v1beta1\n   kind: Deployment\n   name: my-gpu-app # Add label from Deployment we need to autoscale\n metrics:\n - type: Pods  # scale pod based on gpu\n   pods:\n     metric:\n       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE # Add the DCGM metric here accordingly\n     target:\n       type: AverageValue\n       averageValue: 0.8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tham khảo thêm tài liệu của NVIDA về các DCGM metric ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html",
        children: "link"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó kiểm tra HPA vừa khởi tạo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get hpa -A\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./driver-installation-self-install",
        children: " Previous Hướng dẫn cài đặt GPU Driver trên Kubernetes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus",
        children: " Next Hướng dẫn cấu hình Auto Scale sử dụng KEDA và Prometheus "
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

/***/ 959132
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/28b01e4f3b79-anh4-4fd2c9dc92b67a022ae25885bbffa35d.png");

/***/ },

/***/ 701048
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5de9f5caeea9-anh3-5b7417b11a134a75aa32cb552a71a640.png");

/***/ },

/***/ 298274
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f185491b9bb-anh2-56cb4cffb0ea39743c2f272c622d7c9e.png");

/***/ },

/***/ 470345
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b79630d575b2-Picture5-1-8c1b020448b0e0ca5744930721fad7d2.png");

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