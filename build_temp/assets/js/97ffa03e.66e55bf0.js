"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[98748],{

/***/ 410908
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_auto_repair_nodes_md_97f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-auto-repair-nodes-md-97f.json
const site_docs_dedicated_fpt_kubernetes_engine_auto_repair_nodes_md_97f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/auto-repair-nodes","title":"2. Dedicated – FPT Kubernetes Engine","description":"Auto repair nodes","source":"@site/docs/dedicated-fpt-kubernetes-engine/auto-repair-nodes.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/auto-repair-nodes","permalink":"/dedicated-fpt-kubernetes-engine/auto-repair-nodes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Auto repair nodes","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=auto-repair-nodes","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Nang cap k8s version","permalink":"/dedicated-fpt-kubernetes-engine/version/nang-cap-k8s-version"},"next":{"title":"Autoscale","permalink":"/dedicated-fpt-kubernetes-engine/autoscale"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/auto-repair-nodes.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Auto repair nodes',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=auto-repair-nodes',
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
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Auto repair nodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A. Tổng quan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này sẽ giới thiệu và giải thích về cách hoạt động của tính năng node auto-repair trong sản phẩm D-FKE của FPTCloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node auto-repair hỗ trợ việc giữ trạng thái các node trong cụm ở trạng thái Ready, running. Khi tính năng này được kích hoạt, các sự kiện liên quan đến node được giám sát liên tục. Trong trường hợp một node nằm trong trạng thái NotReady, node auto-repair ssẽ giám sát node này, sau 3 phút nếu node vẫn trong trạng thái trên, node auto-repair sẽ thực hiện những hành động cần thiết để đưa node về trạng thái Ready."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B. Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Với các ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cụm mới được khởi tạo"
          }), " sau khi release tính năng: cụm mới được kích hoạt tính năng tự động."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Với các ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cụm cũ"
          }), " : chạy lệnh sau"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/node-autorepair\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C. Cấu hình"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại configmap “auto-repair-configmap\" trong namespace kubesystem, có hai trường bạn có thể chỉnh sửa:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enable_rebooting_node (mặc định \"true\") \n\n\nenable_replacing_node (mặc định \"true\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["· ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enable_rebooting_node"
      }), " : bạn cấp quyền cho node auto-repair reboot các node bị lỗi."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["· ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enable_replacing_node"
      }), " : bạn cấp quyền cho node auto-repair xóa node bị lỗi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp bạn muốn các node trong cụm của bạn ổn định, hãy cài đặt trường enable_replacing node giá trị “false\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D. Giải thích luồng hoạt động cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node được phát hiện ở trạng thái NotReady quá 3p sẽ được reboot."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node được reboot trong 3 lần."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reboot không làm node ready => drain hết pod trên node."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu cluster không có đủ tài nguyên để chạy các pod trên node cũ, thêm node vào cụm (hoạt động của cluster-autoscaler)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node bị drain sẽ bị tự động xóa sau 15p (hoạt động của cluster-autoscaler)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong trường hợp cluster Autoscaler không hoạt động, sau 60p node auto-repair sẽ thực hiện xóa node lỗi trên"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E. Một số điều cần chú ý"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống backend của D-FKE có thể thêm/sửa/xóa các node trong cụm (vấn đề thường xảy ra với các cụm được cấu hình tường lửa)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Từ trong cụm, có thể đăng nhập được vào hạ tầng nơi các node của cụm chạy."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./best-practice-upgrade-fke-cluster-version",
        children: " Previous Best Practice Upgrade FKE Cluster Version "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./retry-timeout-rule",
        children: " Next Retry – Timeout Rule "
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