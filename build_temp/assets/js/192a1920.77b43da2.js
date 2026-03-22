"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45046],{

/***/ 467033
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_cluster_management_best_practice_manual_scaling_md_192_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-cluster-management-best-practice-manual-scaling-md-192.json
const site_docs_dedicated_fpt_kubernetes_engine_cluster_management_best_practice_manual_scaling_md_192_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/cluster-management/best-practice-manual-scaling","title":"2. Dedicated – FPT Kubernetes Engine","description":"Best Practice Manual Scaling","source":"@site/docs/dedicated-fpt-kubernetes-engine/cluster-management/best-practice-manual-scaling.md","sourceDirName":"dedicated-fpt-kubernetes-engine/cluster-management","slug":"/dedicated-fpt-kubernetes-engine/cluster-management/best-practice-manual-scaling","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/best-practice-manual-scaling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Best practice manual scaling","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=best-practice-manual-scaling","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Autoscale","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/autoscale"},"next":{"title":"Cac luu y khi su dung fke","permalink":"/dedicated-fpt-kubernetes-engine/cluster-management/cac-luu-y-khi-su-dung-fke"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/cluster-management/best-practice-manual-scaling.md


const frontMatter = {
	sidebar_label: 'Best practice manual scaling',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=best-practice-manual-scaling',
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
      children: "Best Practice Manual Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✨ D-FKE hỗ trợ manual scale in/scale out worker nodes, cho phép người dùng tăng/giảm số lượng worker theo nhu cầu thủ công."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✨ Hướng dẫn manual scale in/scale out trên portal console: tham khảo user guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=manual-scale",
        children: "tại đây"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chi tiết quá trình manual scale in của hệ thống:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-scale"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống setup môi trường để cluster scale"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra môi trường: cluster status/network status"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scale in"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cordon tất cả các node (Shedule disable – Ngăn không cho các pod ứng dụng mới vào node)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Drain lần lượt từng node ( Xóa pod ứng dụng ra khỏi node hiện tại, move pod sang node khác, hệ thống K8S sẽ không xóa được các node có local disk, single pod, disruption budget, .. tham khảo ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-types-of-pods-can-prevent-ca-from-removing-a-node",
            children: "tại đây"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau khi tất cả các node được drain, xóa từng node khỏi cluster K8S."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-scale"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau khi tất các node được xóa khỏi cluster, hệ thống thu hồi và xóa các VM."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Clean up."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chi tiết quá trình manual scale out của hệ thống:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-scale"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống setup môi trường để cluster scale"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra môi trường: cluster status/network status"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống khởi tạo VM tương ứng với các node sẽ thêm vào cluster K8S."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Setup môi trường để chạy Kubernetes trên từng VM."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scale out"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thêm từng lần lượt node vào cluster"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cho phép pod ứng dụng schedule vào node mới join"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-scale"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean up."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommend khi sử dụng maunal scale."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Với thao tác scale in"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu scale in nhiều node cần có khảo sát và sizing đảm bảo số lượng node còn lại đáp ứng đủ tài nguyên cho ứng dụng. Nên thực hiện trong thời điểm hệ thống chịu tải thấp, sau giờ hành chính hoặc cuối tuần."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu xác định được danh sách các node cần xóa, cordon trước các node để tránh thêm workload vào node sẽ xóa. ( Dựa vào monitoring lượng tài nguyên trên node )"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu còn workload lớn trên node, có thể drain trước với node sẽ xóa để quá trình scale in nhanh hơn, tránh tiến trình bị timeout."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chia nhỏ số node mỗi lần manual scale in, mỗi lần manual scale in nên thực hiện với =< 10 node."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Với thao tác scale out"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chia nhỏ số node mỗi lần manual scale out, mỗi lần manual scale out nên thực hiện với =< 10 node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khi tiến trình bị timeout"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Có thể nhấn action retry để thực hiện quá trình lại một lần nữa. Chi tiết có hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=retry-timeout-rule",
          children: "tại đây"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./manual-scale",
        children: " Previous Manual Scaling "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./persistent-storage",
        children: " Next Persistent Storage "
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