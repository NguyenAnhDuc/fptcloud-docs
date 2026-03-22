"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[55179],{

/***/ 657310
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_su_dung_autoscaler_voi_gpu_md_232_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-huong-dan-su-dung-autoscaler-voi-gpu-md-232.json
const site_docs_fpt_kubernetes_engine_with_gpu_huong_dan_su_dung_autoscaler_voi_gpu_md_232_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu","title":"2. FPT Kubernetes Engine with GPU","description":"Hướng dẫn sử dụng Autoscaler với GPU","source":"@site/docs/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan su dung autoscaler voi gpu","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-su-dung-autoscaler-voi-gpu","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Yêu cầu","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus"},"next":{"title":"Huong dan su dung cac che do gpu sharing","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-cac-che-do-gpu-sharing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/huong-dan-su-dung-autoscaler-voi-gpu.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan su dung autoscaler voi gpu',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=huong-dan-su-dung-autoscaler-voi-gpu',
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
      children: "Hướng dẫn sử dụng Autoscaler với GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "· Autoscale mức container:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizontal Pod Autoscaler (viết tắt là HPA) tự động cập nhật tài nguyên workload resource (chẳng hạn như Deployment hoặc StatefulSet), với mục đích tự động thay đổi quy mô workload resource để phù hợp với nhu cầu ứng dụng. Về cơ bản, khi workload của ứng dụng trên Kubernetes tăng lên thì HPA sẽ triển khai nhiều Pod hơn để đáp ứng tài nguyên. Nếu tải giảm và số lượng Pod cao hơn mức tối thiểu đã cấu hình, thì HPA sẽ giảm workload resource (Deployment, StatefulSet hoặc tài nguyên tương tự khác), tức là giảm số lượng Pod lại. HPA cho GPU sử dụng custom metrics của DCGM để theo dõi và tăng/giảm Pod theo workload của ứng dụng sử dụng GPU."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Để cấu hình HPA cho ứng dụng sử dụng GPU, tham khảo cấu hình sau:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "apiVersion: autoscaling/v2beta2"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kind: HorizontalPodAutoscaler"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "metadata:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: " name: my-gpu-app"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "spec:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: " maxReplicas: 3  # Update this accordingly"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: " minReplicas: 1"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: " scaleTargetRef:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "   apiVersion: apps/v1beta1"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "   kind: Deployment"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "   name: my-gpu-app # Add label from Deployment we need to autoscale"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: " metrics:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: " - type: Pods  # scale pod based on gpu"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "   pods:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "     metric:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE # Add the DCGM metric here accordingly"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "     target:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "       type: AverageValue"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "       averageValue: 0.8 # Set the threshold value as per the requirement"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tham khảo thêm: tài liệu ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html#group__dcgmFieldIdentifiers_1ga12c2f22beff3cf71f7ecf9ad905b8ca",
        children: "Nvidia về DCGM metrics."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra HPA đã khởi tạo ứng dụng sử dụng GPU, bằng lệnh sau:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664775)/* ["default"] */ .A) + "",
        width: "1948",
        height: "204"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "· Autoscale mức Node:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giống như Cluster Autoscale thông thường, cụm Kubernetes sẽ tự động tăng/giảm worker node trong worker group dựa theo yêu cầu sử dụng GPU: tự động scale thêm các worker mới trong một worker group nếu như ứng dụng chạy trên worker group đó không được đáp ứng đủ tài nguyên (GPU) bởi các worker nodes của pool đó. Khi đó, những pod bị pending do node không đủ tài nguyên sẽ được phục vụ bởi các worker nodes mới sau khi scale lên. Tính năng Cluster Autoscale cũng tự động xóa các nodes không sử dụng đủ lượng utilization (mặc định là 50%) của node đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thao tác cấu hình số lượng nodes worker group được định nghĩa trên FPTCloud Portal như hình sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tham khảo thêm"
      }), " : ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=cluster-autoscale",
        children: "FPT Cloud Managed Kubernetes Autoscaler"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(478964)/* ["default"] */ .A) + "",
        width: "624",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-gpu-telemetry",
        children: " Previous Hướng dẫn sử dụng GPU Telemetry "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-cac-che-do-gpu-sharing",
        children: " Next Hướng dẫn sử dụng các chế độ GPU sharing  "
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

/***/ 478964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1be5f3e3cf9d-Picture22-1-09a4b5e1a5ee55b4dea8996071d91cb7.png");

/***/ },

/***/ 664775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9f2c36c7583d-73-9672d2e76d385300113e7617db80cbd7.png");

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