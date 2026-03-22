"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[42551],{

/***/ 491054
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_floating_ip_md_057_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-floating-ip-md-057.json
const site_docs_gpu_virtual_machine_floating_ip_md_057_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/floating-ip","title":"Floating IP","description":"*","source":"@site/docs/gpu-virtual-machine/floating-ip.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/floating-ip","permalink":"/gpu-virtual-machine/floating-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Floating IP","title":"Floating IP","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=floating-ip","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"FAQ","permalink":"/gpu-virtual-machine/faq"},"next":{"title":"FPT Images","permalink":"/gpu-virtual-machine/fpt_images"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/floating-ip.md


const frontMatter = {
	sidebar_label: 'Floating IP',
	title: 'Floating IP',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=floating-ip',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Floating IP';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "Attach Floating IPs",
  "id": "attach-floating-ips",
  "level": 3
}, {
  "value": "Step 1: Access the Allocate IP Address Feature",
  "id": "step-1-access-the-allocate-ip-address-feature",
  "level": 4
}, {
  "value": "Step 2: Fill in IP Address Information",
  "id": "step-2-fill-in-ip-address-information",
  "level": 4
}, {
  "value": "Step 3: Confirm Allocation",
  "id": "step-3-confirm-allocation",
  "level": 4
}, {
  "value": "Detach Floating IPs",
  "id": "detach-floating-ips",
  "level": 3
}, {
  "value": "Release Floating IPs from the VPC",
  "id": "release-floating-ips-from-the-vpc",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
        id: "floating-ip",
        children: "Floating IP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " (also known as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public IP"
      }), ") is a publicly accessible static IPv4 address."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "assign or reassign"
      }), " a reserved Floating IP to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Virtual machine"
      }), " to make it reachable from the internet."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Floating IP can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "removed at any time"
      }), " when external access is no longer required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attach-floating-ips",
      children: "Attach Floating IPs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After successfully creating a GPU VM, you can assign a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " (a Public IP that can be flexibly attached or detached) to make the instance accessible from the internet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-access-the-allocate-ip-address-feature",
      children: "Step 1: Access the Allocate IP Address Feature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can allocate a Floating IP using one of the following methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the left-side menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Networking → Floating IPs"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Allocate IP Address"
        }), " to create a new Floating IP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the left-side menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance Management"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the VM you want to assign a Floating IP to."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Floating IP"
        }), " button to allocate a new address."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-fill-in-ip-address-information",
      children: "Step 2: Fill in IP Address Information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After opening the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate IP Address"
      }), " feature, a pop-up window will appear prompting you to enter the necessary details for the IP address allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-3.png",
        alt: "Alt text"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fields"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add Tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional, to help with resource categorization and management."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instance Port"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "• The internal port on the instance that receives forwarded traffic."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• You can also configure separate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT rules"
      }), " for specific instance ports."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Each port on an instance must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unique"
      }), " and cannot overlap with other rules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• If this field is left blank, the system will forward traffic on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all ports by default"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Address"
      }), " | • Select an available (reserved) IP, or"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Choose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate new from pool"
      }), " to request a new IP (if your quota allows).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Port"
      }), " | • The external port on the Floating IP is used to forward incoming traffic to the instance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• You can configure separate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT rules"
      }), " for specific ports."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Each port on a single IP must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unique"
      }), " and cannot overlap with other rules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• If this field is left blank, the system will forward traffic on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all ports by default"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource"
      }), " | • Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance"
      }), " , then"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Choose the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM name"
      }), " from the drop-down list to associate it with the Floating IP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["If you opened this pop-up from", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Management"
        }), " , the VM field will be pre-filled automatically."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• If you don’t need to attach the Floating IP to a virtual machine yet (for example, you plan to use it later), select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not assign IP to instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM uses an Ephemeral (NVMe) disk"
      }), " , the following port settings are required:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP Port:"
          }), " Recommended to match the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance Port (22)"
          }), " for SSH access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance Port:"
          }), " Set to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "22"
          }), " for SSH access."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "You may repeat this step to add additional ports as needed."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM uses a Block Storage - Persistent disk"
      }), " , these port configurations are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-confirm-allocation",
      children: "Step 3: Confirm Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing the required fields, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate Floating IP"
      }), " to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The newly created Floating IP will then appear in the list and can be attached to your VM."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detach-floating-ips",
      children: "Detach Floating IPs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you no longer need to use a Floating IP or want to detach it to assign to another virtual machine, follow these steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP Management"
      }), " page, locate the IP address you want to detach."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " column, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disconnect Instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-4.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A confirmation pop-up will appear."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To confirm the detachment, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disconnect"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-5.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-floating-ips-from-the-vpc",
      children: "Release Floating IPs from the VPC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a Floating IP is no longer needed, you can release it from the VPC as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP Management"
      }), " page, locate the IP address you want to remove."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " column, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-6.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A confirmation pop-up will appear."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To confirm the release, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-7.png",
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