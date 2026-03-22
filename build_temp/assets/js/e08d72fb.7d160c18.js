"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[21759],{

/***/ 236616
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_cluster_management_retry_timeout_rule_md_e08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-cluster-management-retry-timeout-rule-md-e08.json
const site_docs_dedicated_fpt_kubernetes_engine_cluster_management_retry_timeout_rule_md_e08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/cluster-management/retry-timeout-rule","title":"2. Dedicated – FPT Kubernetes Engine","description":"Retry – Timeout Rule","source":"@site/docs/dedicated-fpt-kubernetes-engine/cluster-management/retry-timeout-rule.md","sourceDirName":"dedicated-fpt-kubernetes-engine/cluster-management","slug":"/dedicated-fpt-kubernetes-engine/cluster-management/retry-timeout-rule","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/retry-timeout-rule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Retry timeout rule","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=retry-timeout-rule","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly kubernetes cluster","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/quan-ly-kubernetes-cluster"},"next":{"title":"Scale worker nodes","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/scale-worker-nodes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/cluster-management/retry-timeout-rule.md


const frontMatter = {
	sidebar_label: 'Retry timeout rule',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=retry-timeout-rule',
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "Retry – Timeout Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong quá trình sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Engine"
      }), " , hệ thống có thể bị timeout trong 2 process sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Provision"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["① ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeout Provision"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình provision 1 cụm Kubernetes Engine, hệ thống có thể phát sinh vấn đề dẫn tới timeout, được tính toán theo bảng:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "First Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioning => Slowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 Min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slowing => Pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 Min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pending => Error (timeout)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 Min"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi provision sẽ xảy ra 2 trường hợp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Provision thành công"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Provision không thành công"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi Provision không thành công, sẽ có 2 tình huống:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Provision thành công nhưng mất đồng bộ status:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Lúc này, cụm K8s thực chất đã được tạo thành công"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Khi chọn retry, hệ thống sẽ đồng bộ lại dữ liệu và không chạy lại provision process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Khi provision không thành công do lỗi processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Nếu status = failed thì hiển thị retry cho phép người dùng thử lại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Nếu status = provisioning, hệ thống sẽ bắt đầu đếm thời gian từ lúc submit request."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Nếu status = provisioning, hệ thống sẽ bắt đầu đếm thời gian từ lúc submit request."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Sau 20 phút từ khi chuyển status = slowing mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => pending"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Sau 40 phút từ khi chuyển status = pending mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Khi status = error, cho phép user có action retry. Hệ thống sẽ reset bộ counting và bắt đầu quá trình scale lại từ đầu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Tổng thời gian từ lúc bắt đầu provision cho tới khi timeout hoàn toàn là 1 tiếng 20 phút"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Khi status = error, cho phép user retry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(865431)/* ["default"] */ .A) + "",
        width: "790",
        height: "57"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["② ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeout Scaling"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi tạo Kubernetes Cluster thành công và trong quá trình sử dụng hệ thống tự động autoscale hoặc user tiến hành manual scale, core xử lý sẽ tiến hành scale up/down các node:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1 <= worker add < 5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5 < worker add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running => Slowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 min + (worker add num - 5) x 3 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slowing => Pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 Min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 min + (worker add num - 5) x 3 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pending => Error (timeout)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 Min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min + (worker add num - 5) x 3 min"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi scaling sẽ xảy ra 2 trường hợp:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Scaling thành công"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Scaling không thành công"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi scaling không thành công, sẽ có 2 tình huống:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Scaling thành công nhưng mất đồng bộ status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Lúc này, cụm K8s thực chất đã có thêm số worker như điều kiện scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Khi chọn retry, hệ thống sẽ đồng bộ lại dữ liệu và không chạy lại scaling process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▪ Khi scaling không thành công do lỗi processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Nếu status = failed thì hiển thị retry cho phép người dùng thử lại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "◦ Nếu status = processing, hệ thống sẽ bắt đầu đếm thời gian từ lúc submit request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Sau 10 phút (tăng thêm theo số lượng worker add thêm) mà vẫn chưa có thay đổi trạng thái (failed/success), hệ thống sẽ chuyển status hiển thị thành slowing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Sau 20 phút từ khi chuyển status = slowing mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => pending"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Sau 30 phút từ khi chuyển status = pending mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Khi status = error, cho phép user có action retry. Hệ thống sẽ reset bộ counting và bắt đầu quá trình scale lại từ đầu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "▫ Tổng thời gian từ lúc bắt đầu scale cho tới khi timeout hoàn toàn là 1 tiếng (tăng thêm với trên 5 worker thêm mới)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Khi cụm về trạng thái error, user có thể chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Retry"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171136)/* ["default"] */ .A) + "",
        width: "780",
        height: "57"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./auto-repair-nodes",
        children: " Previous Auto repair nodes "
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

/***/ 865431
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22819bd9757f-Picture6-2-96a893983bc74dc4e0246e5ae4e02635.png");

/***/ },

/***/ 171136
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3cb10329ba44-Picture5-2-d7bfd36d68d5a91e5759363cf768b24a.png");

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