"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[22761],{

/***/ 520518
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_notebook_shut_down_kernel_md_be6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-notebook-shut-down-kernel-md-be6.json
const site_docs_ai_notebook_shut_down_kernel_md_be6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai-notebook/shut-down-kernel","title":"How to shut down kernel?","description":"*","source":"@site/docs/ai-notebook/shut-down-kernel.md","sourceDirName":"ai-notebook","slug":"/ai-notebook/shut-down-kernel","permalink":"/ai-notebook/shut-down-kernel","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"How to shut down kernel?","title":"How to shut down kernel?","source":"https://fptcloud.com/en/documents/ai-notebook/?doc=shut-down-kernel","parent":"https://fptcloud.com/en/documents/ai-notebook","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Quick Start","permalink":"/ai-notebook/quick-start"},"next":{"title":"Create Connection","permalink":"/data-hub/create-connection"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai-notebook/shut-down-kernel.md


const frontMatter = {
	sidebar_label: 'How to shut down kernel?',
	title: 'How to shut down kernel?',
	source: 'https://fptcloud.com/en/documents/ai-notebook/?doc=shut-down-kernel',
	parent: 'https://fptcloud.com/en/documents/ai-notebook',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'How to shut down kernel?';

const assets = {

};



const toc = [{
  "value": "Running GPU Kernel Table:",
  "id": "running-gpu-kernel-table",
  "level": 2
}, {
  "value": "Kernel History Table:",
  "id": "kernel-history-table",
  "level": 2
}, {
  "value": "Billing Reconciliation",
  "id": "billing-reconciliation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "how-to-shut-down-kernel",
        children: "How to shut down kernel?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Navigate to Running Kernels/Notebooks From the navigation bar, select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running Kernels/Notebooks"
      }), " option (second icon from the top). ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/09/Screenshot-2025-11-04-at-13.33.53.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "running-gpu-kernel-table",
      children: "Running GPU Kernel Table:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Displays information about all ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "currently running GPU kernels"
      }), " in your lab."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique identifier of the GPU kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Created At"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date and time when the GPU kernel started"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Action"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available Actions:"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shut Down All"
            }), " : Terminates all running kernels in your lab. Once terminated, the kernels will appear in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel History"
            }), " section."]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shut Down"
            }), " : Terminates only the selected kernel. The terminated kernel will appear in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel History"
            }), " section."]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kernel-history-table",
      children: "Kernel History Table:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Displays information about all ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "terminated GPU kernels"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nThis table helps you verify kernel usage duration and cross-check it with billing data on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Factory Portal"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique identifier of the GPU kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Created At"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date and time when the GPU kernel started"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total runtime of the GPU kernel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "billing-reconciliation",
      children: "Billing Reconciliation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png",
        alt: "Info Icon"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " You may notice a slight difference (typically 1–10 seconds) between the GPU runtime displayed in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Factory Billing"
      }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), " column in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernel History"
      }), " table of AI Notebook. This minor variation is expected and occurs due to normal synchronization delays between internal services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/09/Screenshot-2025-11-04-at-14.12.39.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-switch-kernel",
        children: " Previous How to connect Notebook to a new/existing Kernel? "
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