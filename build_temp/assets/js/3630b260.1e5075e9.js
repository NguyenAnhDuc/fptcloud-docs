"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[18619],{

/***/ 509735
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_autoscale_md_363_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-autoscale-md-363.json
const site_docs_dedicated_fpt_kubernetes_engine_autoscale_md_363_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/autoscale","title":"2. Dedicated – FPT Kubernetes Engine","description":"Automatic Scaling","source":"@site/docs/dedicated-fpt-kubernetes-engine/autoscale.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/autoscale","permalink":"/dedicated-fpt-kubernetes-engine/autoscale","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Autoscale","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=AutoScale","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Auto repair nodes","permalink":"/dedicated-fpt-kubernetes-engine/auto-repair-nodes"},"next":{"title":"Backup and restore cluster","permalink":"/dedicated-fpt-kubernetes-engine/backup-and-restore-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/autoscale.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Autoscale',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=AutoScale',
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
    p: "p",
    pre: "pre",
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
      children: "Automatic Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Autoscale được enable mặc định khi user thực hiện tạo Kubernetes Cluster với D-FKE."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Autoscale của D-FKE được phát triển dựa trên công cụ cluster-autoscaler của kubernetes. Hệ thống sẽ tự động điều chỉnh số lượng worker nodes của cluster khi các điều kiện sau thỏa mãn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pods ở trạng thái pending do thiếu tài nguyên."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nodes trong cluster sử dụng tài nguyên (CPU & RAM) nhỏ hơn 50% trong một khoảng thời gian (mặc định là 15 phút) và các Pods trên nodes đó có thể di chuyển qua nodes khác."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tham khảo: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler",
        children: "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để sử dụng tính năng cluster-autoscaler, user sử dụng phối hợp với HPA (HorizontalPodAutoscaler)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale-up: HPA tự động tạo thêm Pods khi tài nguyên sử dụng vượt ngưỡng được đặt. Khi Pods mới được tạo ra, nếu Worker Nodes không đủ tài nguyên Pod request, cluster-autoscaler sẽ tự động tạo thêm Worker Nodes để đáp ứng số Pods được tạo mới."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale-down: HPA tự động giảm số lượng Pods khi tài nguyên sử dụng nhỏ hơn ngưỡng được đặt. Khi đó, các Nodes sẽ giảm tài nguyên sử dụng và được tự động giảm đi bởi cluster-autoscaler."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tham khảo: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/",
        children: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các tình huống sử dụng cơ bản:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Để cố định số lượng worker nodes: user có thể đặt số lượng Min = Max."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Chặn Cluster Autoscaler thực hiện scale down node cố định: Cluster Autoscaler sẽ không thực hiện scale down node có annotation sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"cluster-autoscaler.kubernetes.io/scale-down-disabled\": \"true\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng command sau để thêm annotation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl annotate node  cluster-autoscaler.kubernetes.io/scale-down-disabled=true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./them-nfs-persistent-storage",
        children: " Previous Thêm NFS Persistent Storage "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./manual-scale",
        children: " Next Manual Scaling "
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