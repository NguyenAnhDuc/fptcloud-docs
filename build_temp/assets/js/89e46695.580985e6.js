"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[22195],{

/***/ 31095
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_overview_md_89e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-overview-md-89e.json
const site_docs_gpu_virtual_machine_overview_md_89e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/overview","title":"Overview","description":"*","source":"@site/docs/gpu-virtual-machine/overview.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/overview","permalink":"/gpu-virtual-machine/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Overview","title":"Overview","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=overview","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Monitor GPU VMs","permalink":"/gpu-virtual-machine/monitor-gpu-vms"},"next":{"title":"pfSense Network Gateway","permalink":"/gpu-virtual-machine/pfsense-network-gateway"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/overview.md


const frontMatter = {
	sidebar_label: 'Overview',
	title: 'Overview',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=overview',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Overview';

const assets = {

};



const toc = [{
  "value": "What is GPU Virtual Machine?",
  "id": "what-is-gpu-virtual-machine",
  "level": 3
}, {
  "value": "GPU VM Type",
  "id": "gpu-vm-type",
  "level": 3
}, {
  "value": "How Does It Work?",
  "id": "how-does-it-work",
  "level": 3
}, {
  "value": "Why GPU Virtual Machine?",
  "id": "why-gpu-virtual-machine",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h3: "h3",
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
        id: "overview",
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-gpu-virtual-machine",
      children: "What is GPU Virtual Machine?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Virtual Machine (GPU VM)"
      }), " enables you to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deploy and manage high-performance GPU servers"
      }), " with ease. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM uses a passthrough GPU to get a dedicated GPU"
      }), " , applications access it through the layers of a guest OS and hypervisor. Other critical VM resources that applications use, such as RAM, storage, and networking, are also virtualized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We currently offer two types of virtual machines (VMs), each with a different storage option."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gpu-vm-type",
      children: "GPU VM Type"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GPU VM Type"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Type"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Features of Storage"
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type #1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block Storage – Ephemeral Disk (NVMe)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- Fixed capacity per GPU instance"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimized for high-performance training workloads"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Not suitable for long-term data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- No automated backup/restore feature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Data will not be deleted when you stop VMs", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type #2"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Block Storage – Persistent Disk"
      }), " | - ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalable, on-demand storage from 100GB"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ideal for long-term data retention"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Supports automated backup & restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Storage is billed separately from GPU instance cost"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-does-it-work",
      children: "How Does It Work?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A GPU VM works like a powerful cloud-based computer with a dedicated GPU for intensive workloads. You can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Easily deploy a GPU VM"
          }), " with the latest GPU generations in minutes through the FPT Cloud Portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Run AI, machine learning, and data processing tasks"
          }), " at high speed with advanced GPU acceleration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Manage everything from a simple online portal"
          }), " , with no need for in-house IT staff."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-gpu-virtual-machine",
      children: "Why GPU Virtual Machine?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "One-click deployment"
          }), " from the FPT Smart Cloud Portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Simple configuration"
          }), " of networking, storage, and security."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Faster AI training & deep learning:"
          }), " Cutting-edge GPUs deliver exceptional speed and efficiency, perfect for handling large-scale AI and machine learning models."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimized for AI inference:"
          }), " Process data and make real-time decisions faster than ever before."]
        }), "\n"]
      }), "\n"]
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