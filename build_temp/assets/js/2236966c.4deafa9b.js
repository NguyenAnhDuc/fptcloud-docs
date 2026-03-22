"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[20564],{

/***/ 912204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_faq_md_223_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-faq-md-223.json
const site_docs_gpu_virtual_machine_faq_md_223_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/faq","title":"FAQ","description":"*","source":"@site/docs/gpu-virtual-machine/faq.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/faq","permalink":"/gpu-virtual-machine/faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FAQ","title":"FAQ","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=faq","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Custom Images","permalink":"/gpu-virtual-machine/custom-images"},"next":{"title":"Floating IP","permalink":"/gpu-virtual-machine/floating-ip"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/faq.md


const frontMatter = {
	sidebar_label: 'FAQ',
	title: 'FAQ',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=faq',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'FAQ';

const assets = {

};



const toc = [{
  "value": "General",
  "id": "general",
  "level": 3
}, {
  "value": "Features",
  "id": "features",
  "level": 3
}, {
  "value": "Billing",
  "id": "billing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "faq",
        children: "FAQ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general",
      children: "General"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What is GPU Virtual Machine?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GPU Virtual Machine or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " is an isolated system with its own dedicated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU, CPU, memory, network interface, and storage"
      }), " , created from a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Cluster"
      }), " of hardware resources."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It provides a wide range of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pre-configured virtual machines"
      }), " designed to align with your workload requirements, offering flexible options from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1 to 8 GPUs per VM"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "features",
      children: "Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Can I resize a GPU instance (CPU, RAM, or Disk)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "With Block Storage – Ephemeral Disk (NVMe):"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nThe GPU VM provides ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "pre-configured flavors"
          }), " for GPU, CPU, RAM, and Disk.", (0,jsx_runtime.jsx)(_components.br, {}), "\nYou ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cannot customize"
          }), " them. Please choose an appropriate configuration or contact ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FPT Cloud Support"
          }), " for assistance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "With Block Storage – Persistent Disk:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nGPU, CPU, and RAM are ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "fixed configurations"
          }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nYou can ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "resize storage"
          }), " according to your needs, but ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not below 100 GB per instance"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How can I allocate a public IP to my GPU instance?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "With Block Storage – Ephemeral Disk (NVMe):"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nYou can only allocate a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Floating IP"
          }), " after the GPU instance is successfully created. Notice that you have to configure the IP port (port forwarding) complete the IP configuration. Please see the detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=floating-ip",
            children: "here"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "With Block Storage – Persistent Disk:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nYou can allocate a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Floating IP"
          }), " while creating a new instance or after the instance has been successfully created."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which functions are not supported for GPU Virtual Machines with Ephemeral Disk (NVMe)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following functions are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not supported"
      }), " for GPU Virtual Machines using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ephemeral Disk (NVMe)"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA Hopper (H100, H200)"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resize instance (add/remove GPUs, resize CPU, RAM, or Disk)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Snapshot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a template from GPU instance"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "backup instance with Veeam"
        }), " is supported."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. What storage options are available for GPU Virtual Machines?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two types of Block Storage"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * Fixed capacity per GPU instance package (non-expandable) \n * Optimized for **training workloads** , not long-term storage \n * Does **not support automated backup or restore**\n\n\n * Scalable storage capacity on demand \n * Optimized for **long-term retention**\n * Can set up **automated backup and restore**\n * Separate charges for storage usage (excluding GPU instance cost) \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: File Storage (High-performance Tier) service is only supported in the Vietnam region now."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. What regions are GPU Virtual Machines available?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GPU Virtual Machines with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA Hopper (H100, H200)"
      }), " are available in the following regions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hanoi 2, Vietnam"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokyo, Japan"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "billing",
      children: "Billing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. How can I be charged for GPU Virtual Machines?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are two billing models available:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reservation:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nFixed price with limited resources based on demand, billed upfront (partial or full) or afterward. The billing period can be ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3–9 months"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1–5 years"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pay-as-you-go (PAYG):"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nAllows you to use resources without limits and pay afterward. Billing increments are typically by the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "hour"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Does FPT charge GPU Virtual Machines in the Stopped state?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "With Block Storage – Ephemeral Disk (NVMe):"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nYes. Instances in a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "stopped"
          }), " state continue to reserve the server for your use and therefore ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "incur charges"
          }), " until you release this server.", (0,jsx_runtime.jsx)(_components.br, {}), "\nIf you wish to no longer accumulate charges for a server, please ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DELETE INSTANCE"
          }), " in the FPT Cloud portal for Customers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "With Block Storage – Persistent Disk:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nNo. GPU, CPU, and RAM of stopped instances are ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not charged"
          }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nHowever, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "the storage"
          }), " still charged until you completely delete it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You are also billed for other ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "services and resources"
      }), " that are attached to any GPU instance."]
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