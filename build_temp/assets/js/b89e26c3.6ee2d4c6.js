"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[49581],{

/***/ 58316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_cau_hinh_auto_scale_su_dung_keda_va_prometheus_md_b89_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus-md-b89.json
const site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_cau_hinh_auto_scale_su_dung_keda_va_prometheus_md_b89_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus","title":"2. FPT Kubernetes Engine with GPU","description":"Hướng dẫn cấu hình Auto Scale sử dụng KEDA và Prometheus","source":"@site/docs/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Yêu cầu","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Yêu cầu:","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric"},"next":{"title":"Huong dan su dung autoscaler voi gpu","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Yêu cầu',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus',
	parent: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Kubernetes Engine with GPU';

const assets = {

};



const toc = [{
  "value": "Yêu cầu",
  "id": "yêu-cầu",
  "level": 2
}, {
  "value": "Các bước cấu hình:",
  "id": "các-bước-cấu-hình",
  "level": 2
}, {
  "value": "Bước 1: Cài đặt KEDA",
  "id": "bước-1-cài-đặt-keda",
  "level": 3
}, {
  "value": "Bước 3: Tạo ScaledObject để chỉ định autoscale cho Ứng dụng",
  "id": "bước-3-tạo-scaledobject-để-chỉ-định-autoscale-cho-ứng-dụng",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Hướng dẫn cấu hình Auto Scale sử dụng KEDA và Prometheus"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1976)/* ["default"] */ .A) + "",
        width: "577",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "yêu-cầu",
      children: "Yêu cầu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cụm kubernetes có gắn GPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ứng dụng GPU đang ở trạng thái running"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đã cài đặt gói kube-prometheus-stack và prometheus-adapter ở dịch vụ FPT App Catalog như docs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.notion.so/H-ng-d-n-c-u-h-nh-Auto-Scale-cho-FPT-Kubernetes-Engine-GPU-s-d-ng-GPU-Custom-Metric-d7a7d2d5a4bc495d8468b7ae169fbf1e?pvs=21",
        children: "Hướng dẫn cấu hình Auto Scale cho FPT Kubernetes Engine GPU sử dụng GPU Custom Metric"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-bước-cấu-hình",
      children: "Các bước cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-cài-đặt-keda",
      children: "Bước 1: Cài đặt KEDA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cách 1: Sử dụng FPT App Catalog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn dịch vụ FPT Cloud App Catalog sau đó tìm kiếm KEDA trong Repository fptcloud-catalogs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cách 2: Sử dụng helm chart"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["helm repo add kedacore ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://kedacore.github.io/charts",
            children: "https://kedacore.github.io/charts"
          }), "\nhelm repo update\nhelm install keda kedacore/keda --namespace keda --create-namespace"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra xem các pod của KEDA đã hoạt động bình thường hay chưa"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl -n keda get pod"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NAME                                                   READY   STATUS    RESTARTS   AGE\npod/keda-admission-webhooks-54764ff7d5-l4tks           1/1     Running   0          3d\npod/keda-operator-567cb596fd-wx4t8                     1/1     Running   0          2d23h\npod/keda-operator-metrics-apiserver-6475bf5fff-8x8bw   1/1     Running   0          2d14h"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE\nservice/keda-admission-webhooks           ClusterIP   100.71.2.54              443/TCP            3d2h\nservice/keda-operator                     ClusterIP   100.66.228.223           9666/TCP           3d2h\nservice/keda-operator-metrics-apiserver   ClusterIP   100.71.162.181           443/TCP,8080/TCP   3d2h"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NAME                                              READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/keda-admission-webhooks           1/1     1            1           3d2h\ndeployment.apps/keda-operator                     1/1     1            1           3d2h\ndeployment.apps/keda-operator-metrics-apiserver   1/1     1            1           3d2h"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NAME                                                         DESIRED   CURRENT   READY   AGE\nreplicaset.apps/keda-admission-webhooks-54764ff7d5           1         1         1       3d2h\nreplicaset.apps/keda-operator-567cb596fd                     1         1         1       3d2h\nreplicaset.apps/keda-operator-metrics-apiserver-6475bf5fff   1         1         1       3d2h"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Kiểm tra prometheus đã có các metric GPU hay chưa"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM\n\n\n\"name\": \"namespaces/DCGM_FI_DEV_POWER_USAGE\",\n\"name\": \"namespaces/DCGM_FI_DEV_FB_USED\",\n\"name\": \"namespaces/DCGM_FI_DEV_PCIE_REPLAY_COUNTER\",\n\"name\": \"pods/DCGM_FI_DEV_XID_ERRORS\",\n\"name\": \"namespaces/DCGM_FI_PROF_GR_ENGINE_ACTIVE\",\n\"name\": \"namespaces/DCGM_FI_DEV_TOTAL_ENERGY_CONSUMPTION\",\n\"name\": \"pods/DCGM_FI_PROF_DRAM_ACTIVE\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_POWER_USAGE\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_SM_CLOCK\",\n\"name\": \"namespaces/DCGM_FI_DEV_NVLINK_BANDWIDTH_TOTAL\",\n\"name\": \"pods/DCGM_FI_DEV_POWER_USAGE\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_MEM_CLOCK\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_FB_USED\",\n\"name\": \"namespaces/DCGM_FI_DEV_FB_FREE\",\n\"name\": \"jobs.batch/DCGM_FI_PROF_GR_ENGINE_ACTIVE\",\n\"name\": \"pods/DCGM_FI_DEV_MEMORY_TEMP\",\n\"name\": \"pods/DCGM_FI_DEV_FB_FREE\",\n\"name\": \"pods/DCGM_FI_DEV_MEM_CLOCK\",\n\"name\": \"pods/DCGM_FI_PROF_GR_ENGINE_ACTIVE\",\n\"name\": \"pods/DCGM_FI_DEV_NVLINK_BANDWIDTH_TOTAL\",\n\"name\": \"pods/DCGM_FI_PROF_PIPE_TENSOR_ACTIVE\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_MEMORY_TEMP\",\n\"name\": \"namespaces/DCGM_FI_DEV_MEM_CLOCK\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_XID_ERRORS\",\n\"name\": \"namespaces/DCGM_FI_DEV_VGPU_LICENSE_STATUS\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_VGPU_LICENSE_STATUS\",\n\"name\": \"pods/DCGM_FI_DEV_GPU_TEMP\",\n\"name\": \"jobs.batch/DCGM_FI_PROF_PIPE_TENSOR_ACTIVE\",\n\"name\": \"pods/DCGM_FI_DEV_PCIE_REPLAY_COUNTER\",\n\"name\": \"pods/DCGM_FI_DEV_TOTAL_ENERGY_CONSUMPTION\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_TOTAL_ENERGY_CONSUMPTION\",\n\"name\": \"pods/DCGM_FI_DEV_FB_USED\",\n\"name\": \"pods/DCGM_FI_DEV_VGPU_LICENSE_STATUS\",\n\"name\": \"namespaces/DCGM_FI_DEV_MEMORY_TEMP\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_NVLINK_BANDWIDTH_TOTAL\",\n\"name\": \"namespaces/DCGM_FI_DEV_SM_CLOCK\",\n\"name\": \"namespaces/DCGM_FI_PROF_PIPE_TENSOR_ACTIVE\",\n\"name\": \"namespaces/DCGM_FI_DEV_GPU_TEMP\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_GPU_TEMP\",\n\"name\": \"namespaces/DCGM_FI_PROF_DRAM_ACTIVE\",\n\"name\": \"namespaces/DCGM_FI_DEV_XID_ERRORS\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_FB_FREE\",\n\"name\": \"pods/DCGM_FI_DEV_SM_CLOCK\",\n\"name\": \"jobs.batch/DCGM_FI_DEV_PCIE_REPLAY_COUNTER\",\n\"name\": \"jobs.batch/DCGM_FI_PROF_DRAM_ACTIVE\",\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-tạo-scaledobject-để-chỉ-định-autoscale-cho-ứng-dụng",
      children: "Bước 3: Tạo ScaledObject để chỉ định autoscale cho Ứng dụng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Manifest"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\nname: scaled-object\nspec:\nscaleTargetRef:\nname: gpu-test\ntriggers:\n- type: prometheus\nmetadata:\nserverAddress: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "http://prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local:9090",
            children: "http://prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local:9090"
          }), "\nmetricName: engine_active\nquery: sum(DCGM_FI_PROF_GR_ENGINE_ACTIVE{modelName=\"NVIDIA A30\", container=\"gpu-test\"}) / count(DCGM_FI_PROF_GR_ENGINE_ACTIVE{modelName=\"NVIDIA A30\", container=\"gpu-test\"})\nthreshold: '0.8'"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "name"
          }), " : Tên Deployment GPU ở ví dụ là ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gpu-test"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "serverAddress:"
          }), " Endpoint của Prometheus server ở ví dụ là ", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local:9090"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "query"
          }), " : Câu lệnh PromQL để tìm ra giá trị dựa vào đó tiến hành autoscale, ở trên ví dụ là tìm các giá trị trung bình của biến ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DCGM_FI_PROF_GR_ENGINE_ACTIVE"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "threshold"
          }), " : giá trị đạt ngưỡng để bắt đầu active autoscale, ở ví dụ là ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.8"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Như vậy như ví dụ trên, mỗi khi có giá trị trung bình của", (0,jsx_runtime.jsx)(_components.code, {
        children: "DCGM_FI_PROF_GR_ENGINE_ACTIVE"
      }), " lớn hơn ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.8"
      }), " thì ScaledObject sẽ thực hiện scale các pod của Deployment name ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gpu-test"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo ScaledObject, deployment sẽ tự động scale về 0, như vậy là đã cấu hình thành công."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric",
        children: " Previous Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric "
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

/***/ 1976
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a84e2a0ea821-Picture3-2-b2b8bae1a2b173e46c3eb4b3d8912cdc.png");

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