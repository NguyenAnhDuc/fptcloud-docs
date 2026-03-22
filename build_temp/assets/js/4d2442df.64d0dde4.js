"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7645],{

/***/ 932925
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_monitor_gpu_vms_md_4d2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-monitor-gpu-vms-md-4d2.json
const site_docs_gpu_virtual_machine_monitor_gpu_vms_md_4d2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/monitor-gpu-vms","title":"Monitor GPU VMs","description":"*","source":"@site/docs/gpu-virtual-machine/monitor-gpu-vms.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/monitor-gpu-vms","permalink":"/gpu-virtual-machine/monitor-gpu-vms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Monitor GPU VMs","title":"Monitor GPU VMs","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=monitor-gpu-vms","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Manage GPU VMs","permalink":"/gpu-virtual-machine/manage-gpu-vms"},"next":{"title":"Overview","permalink":"/gpu-virtual-machine/overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/monitor-gpu-vms.md


const frontMatter = {
	sidebar_label: 'Monitor GPU VMs',
	title: 'Monitor GPU VMs',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=monitor-gpu-vms',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Monitor GPU VMs';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "monitor-gpu-vms",
        children: "Monitor GPU VMs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Virtual Machine"
      }), " provides metrics to help you ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "monitor"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "troubleshoot"
      }), " your workloads. Monitoring metrics are collected to track the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "performance"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "availability"
      }), " , and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resource usage"
      }), " of services, helping detect issues and optimize operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: Metric data is retained for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "30 days"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3 metric groups"
      }), " available:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Utilization metrics:"
          }), " Monitor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU"
          }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "memory"
          }), " , and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU usage"
          }), " to assess system performance and resource efficiency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk metrics:"
          }), " Track ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "disk read/write speed"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "latency"
          }), " to detect storage issues or performance bottlenecks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network metrics:"
          }), " Measure the amount of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "data transmitted and received"
          }), " , and show how frequently those read/write actions occur."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For additional or customized metrics, please ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contact us"
      }), " to explore our ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "advanced monitoring service"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Monitor-GPU-VM-1.png",
        alt: "Alt text"
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