"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86111],{

/***/ 653763
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kubernetes_engine_with_gpu_driver_installation_self_install_md_250_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kubernetes-engine-with-gpu-driver-installation-self-install-md-250.json
const site_docs_fpt_kubernetes_engine_with_gpu_driver_installation_self_install_md_250_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kubernetes-engine-with-gpu/driver-installation-self-install","title":"2. FPT Kubernetes Engine with GPU","description":"Hướng dẫn cài đặt GPU Driver trên Kubernetes","source":"@site/docs/fpt-kubernetes-engine-with-gpu/driver-installation-self-install.md","sourceDirName":"fpt-kubernetes-engine-with-gpu","slug":"/fpt-kubernetes-engine-with-gpu/driver-installation-self-install","permalink":"/fpt-kubernetes-engine-with-gpu/driver-installation-self-install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Driver installation self install","title":"2. FPT Kubernetes Engine with GPU","source":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=driver-installation-self-install","parent":"https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cai dat cluster kubernetes su dung gpu","permalink":"/fpt-kubernetes-engine-with-gpu/cai-dat-cluster-kubernetes-su-dung-gpu"},"next":{"title":"Yêu cầu:","permalink":"/fpt-kubernetes-engine-with-gpu/huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kubernetes-engine-with-gpu/driver-installation-self-install.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Driver installation self install',
	title: '2. FPT Kubernetes Engine with GPU',
	source: 'https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/?doc=driver-installation-self-install',
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
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
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
      children: "Hướng dẫn cài đặt GPU Driver trên Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể tự cài đặt GPU Driver mong muốn trên cụm FPT Kubernetes Engine tích hợp GPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Khởi tạo GPU Cluster với Driver Installation là User-Install"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Tạo Cluster chọn Driver Installation là User-Install"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Khách hàng tự install các phần mềm để sử dụng được GPU (Driver, Toolkit, Device Plugin, …)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tham khảo các phiên bản GPU driver:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Release Notes"
          }), " : ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.nvidia.com/datacenter/tesla/index.html",
            children: "https://docs.nvidia.com/datacenter/tesla/index.html"
          }), " ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.nvidia.com/datacenter/tesla/drivers/releases.json",
            children: "https://docs.nvidia.com/datacenter/tesla/drivers/releases.json"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Document"
          }), " : ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.nvidia.com/datacenter/tesla/drivers/index.html",
            children: "https://docs.nvidia.com/datacenter/tesla/drivers/index.html"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bộ cài đặt"
          }), " : ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.nvidia.com/XFree86/Linux-x86_64/",
            children: "https://download.nvidia.com/XFree86/Linux-x86_64/"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Khách hàng có thể tham khảo DaemonSet cài đặt Driver dưới đây:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "copyright-2023-fpt-cloud---paas",
          children: "Copyright 2023 FPT Cloud - PaaS"
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "workerfptcloudtypegpu",
          children: "worker.fptcloud/type=gpu"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\nname: fptcloud-gpu-driver-installer\nnamespace: kube-system\nlabels:\nk8s-app: gpu-driver\nspec:\nselector:\nmatchLabels:\nk8s-app: gpu-driver\nupdateStrategy:\ntype: RollingUpdate\ntemplate:\nmetadata:\nlabels:\nname: nvidia-driver-installer\nk8s-app: gpu-driver\nspec:\npriorityClassName: system-node-critical\naffinity:\nnodeAffinity:\nrequiredDuringSchedulingIgnoredDuringExecution:\nnodeSelectorTerms:\n- matchExpressions:\n- key: worker.fptcloud/type\noperator: In\nvalues: [\"gpu\"]\ntolerations:\n- operator: \"Exists\"\ncontainers:\n- image: docker.io/alpine:3.13\nname: nvidia-driver-installer\ncommand:\n- 'nsenter'\n- '-t'\n- '1'\n- '-m'\n- '-u'\n- '-i'\n- '-n'\n- '--'\n- 'bash'\n- '-l'\n- '-c'\n- 'curl -Ls ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.sh",
            children: "https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.sh"
          }), " | bash -s -- -p admin'\nresources:\nrequests:\ncpu: 150m\nenv:\n- name: NVIDIA_DRIVER_VERSION\nvalue: \"535.54.03\"\n- name: NVIDIA_TOOLKIT_INSTALL\nvalue: \"true\"\nimagePullPolicy: IfNotPresent\nsecurityContext:\nprivileged: true\nallowPrivilegeEscalation: true\nhostPID: true\nhostNetwork: true\nhostIPC: true"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với tham số biến môi trường:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NVIDIA_DRIVER_VERSION"
          }), " : Phiên bản của Driver"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NVIDIA_TOOLKIT_INSTALL"
          }), " : “true” hoặc “false”, mặc định là “true”. Tự động tự cài đặt toolkit hoặc không."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Để apply fptcloud daemonset vào cụm K8s dùng lệnh sau:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["kubectl apply -f ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.yaml",
            children: "https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.yaml"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Kiểm tra trạng thái Pod của DaemonSet"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl get pod -n kube-system | grep \"gpu-driver\""
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NAME                                                 READY   STATUS    RESTARTS        AGE\nfptcloud-gpu-driver-installer-7tj55                  1/1     Running   0               2d17h"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DaemonSet fptcloud-gpu-driver-installer sẽ shedule pod ở tất cả các worker trong Worker Group (có label worker.fptcloud/type: gpu) để tiến hành cài đặt Driver/Toolkit."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Kiểm tra logs của pod fptcloud-gpu-driver-installer-7tj55 xem Installer đã cài đặt xong hay chưa"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl logs fptcloud-gpu-driver-installer-7tj55 -n kube-system"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifying Nvidia installation... DONE.\nClean Nvidia installation... DONE."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu cài đặt thành công sẽ có logs như trên. Quá trình cài đặt thường diễn ra trong khoảng một vài phút."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tang-them-worker-group-su-dung-gpu",
        children: " Previous Tăng thêm Worker Group sử dụng GPU "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric",
        children: " Next Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric "
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