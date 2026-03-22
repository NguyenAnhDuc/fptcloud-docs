"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7797],{

/***/ 878740
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_storage_md_4a9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-storage-md-4a9.json
const site_docs_gpu_container_storage_md_4a9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/storage","title":"Storage","description":"*","source":"@site/docs/gpu-container/storage.md","sourceDirName":"gpu-container","slug":"/gpu-container/storage","permalink":"/gpu-container/storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Storage","title":"Storage","source":"https://fptcloud.com/en/documents/gpu-container/?doc=storage","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Quick Start","permalink":"/gpu-container/quick-start"},"next":{"title":"Templates","permalink":"/gpu-container/templates"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/storage.md


const frontMatter = {
	sidebar_label: 'Storage',
	title: 'Storage',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=storage',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Storage';

const assets = {

};



const toc = [{
  "value": "Persistent Disk",
  "id": "persistent-disk",
  "level": 2
}, {
  "value": "Temporary Disk",
  "id": "temporary-disk",
  "level": 2
}, {
  "value": "Storage type comparison",
  "id": "storage-type-comparison",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "storage",
        children: "Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "persistent-disk",
      children: "Persistent Disk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU Container provides High-Performance Storage (HPS) remaining for the duration of a container’s life. It functions similarly to a hard disk, allowing you to store data that needs to be retained even if the container is stopped."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Available until the container is deleted permanently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent data loss by storing data, models, or files that need to be preserved across container restarts or reconfigurations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "temporary-disk",
      children: "Temporary Disk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Temporary disk (NVMe) is a type of storage that provides temporary storage for a container. Any data stored on the temporary disk will be lost when the container is stopped or deleted so make sure to back up important data before shutting down your container."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storage-type-comparison",
      children: "Storage type comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Temporary Disk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistent Disk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost on stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retained until container deletion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tied directly to the container’s active session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tied to the container’s lease period"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (locally attached)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable, generally slower than temporary disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed according to the selected GPU instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selectable at creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FREE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$ 0.0066 GB/hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary session data, cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent application data, models, datasets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./templates",
        children: " Previous Templates "
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