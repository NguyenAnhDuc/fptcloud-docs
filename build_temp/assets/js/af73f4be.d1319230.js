"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70693],{

/***/ 242273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_logs_and_monitoring_md_af7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-logs-and-monitoring-md-af7.json
const site_docs_gpu_container_logs_and_monitoring_md_af7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/logs-and-monitoring","title":"How to monitor container","description":"*","source":"@site/docs/gpu-container/logs-and-monitoring.md","sourceDirName":"gpu-container","slug":"/gpu-container/logs-and-monitoring","permalink":"/gpu-container/logs-and-monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"How to monitor container","title":"How to monitor container","source":"https://fptcloud.com/en/documents/gpu-container/?doc=logs-and-monitoring","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Jupyter Notebook Use Cases","permalink":"/gpu-container/jupyter-notebook-tutorials"},"next":{"title":"How to manage container","permalink":"/gpu-container/manage-container"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/logs-and-monitoring.md


const frontMatter = {
	sidebar_label: 'How to monitor container',
	title: 'How to monitor container',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=logs-and-monitoring',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'How to monitor container';

const assets = {

};



const toc = [{
  "value": "Container Logs",
  "id": "container-logs",
  "level": 2
}, {
  "value": "Metric Monitoring",
  "id": "metric-monitoring",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "how-to-monitor-container",
        children: "How to monitor container"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GPU Container provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "container logs"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "metrics"
      }), " to help you monitor and troubleshoot your workloads. To view your logs and metrics, open the Details Container screen, open the Logs or Monitoring tab. This gives you container logs and metrics monitoring, making it easy to diagnose issues or monitor your container’s activity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "container-logs",
      children: "Container Logs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Container logs include all application logs. Note that logs are only kept for 14 days, and timestamps are shown in the UTC time zone. . ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/08/Logs_screen.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metric-monitoring",
      children: "Metric Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitoring metrics are collected to track the performance, availability, and resource usage of containerized services, helping detect issues and optimize operations. Note that metric data is retained for 14 days."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are 4 metric groups:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Utilization metrics"
          }), " : Monitor CPU, memory, and GPU usage to assess system performance and resource efficiency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk metrics"
          }), " : Track disk read/write speed, and latency to detect storage issues or bottlenecks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network metric"
          }), " : Measure network traffic, latency, and errors to identify connectivity problems and ensure service reliability."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Temperature and Power metrics"
          }), " : Monitor hardware temperature and power consumption to prevent overheating and maintain hardware health ", (0,jsx_runtime.jsx)(_components.img, {
            src: "https://fptcloud.com/wp-content/uploads/2025/08/Monitoring_screen.png",
            alt: "Alt text"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refresh"
        }), " : Interval at which the container metrics are automatically updated."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./manage-container",
        children: " Previous How to manage container "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./templates",
        children: " Next Templates "
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