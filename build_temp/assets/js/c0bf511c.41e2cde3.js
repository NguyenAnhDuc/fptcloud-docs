"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[97392],{

/***/ 737635
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_create_a_subnet_md_c0b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-create-a-subnet-md-c0b.json
const site_docs_gpu_virtual_machine_create_a_subnet_md_c0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/create-a-subnet","title":"Create a Subnet","description":"*","source":"@site/docs/gpu-virtual-machine/create-a-subnet.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/create-a-subnet","permalink":"/gpu-virtual-machine/create-a-subnet","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create a Subnet","title":"Create a Subnet","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-subnet","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Create a Snapshot","permalink":"/gpu-virtual-machine/create-a-snapshot"},"next":{"title":"Custom Images","permalink":"/gpu-virtual-machine/custom-images"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/create-a-subnet.md


const frontMatter = {
	sidebar_label: 'Create a Subnet',
	title: 'Create a Subnet',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-subnet',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Create a Subnet';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "Step-by-Step",
  "id": "step-by-step",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
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
        id: "create-a-subnet",
        children: "Create a Subnet"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subnet"
      }), " is a unique ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CIDR block"
      }), " with a range of IP addresses in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), ". All resources in a VPC must be deployed on subnets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "By default, all instances in different subnets of the same VPC can communicate with each other. If you have a VPC with two subnets in it, they can communicate with each other by default."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After a subnet is created, its ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CIDR block cannot be modified"
          }), ". Subnets in the same VPC cannot overlap."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When creating a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU VM"
          }), " , an active Subnet in the VPC is required. The system will automatically assign a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Private IP"
          }), " from that subnet to the new virtual machine."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step",
      children: "Step-by-Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " In the left-side menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking → Subnets"
      }), " , then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Subnet"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Subnets-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Subnets-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Enter a name for your subnet in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " field."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type of subnet"
      }), ". We currently support two types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Routed:"
          }), " The subnet is routed to the internet via a NAT gateway."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Isolated:"
          }), " The subnet has no internet routing."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Specify the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP range (subnet)"
      }), " your network will use, in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CIDR notation"
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "172.30.65.0/24"
      }), ") using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Address (CIDR)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: The CIDR range must not overlap with any other subnet within the same VPC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Specify the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP address of the default gateway"
      }), " within your subnet using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gateway IP"
      }), ". This is usually the first usable IP (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "172.30.65.1"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Define a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static IP Pool"
      }), " — a specific range of IPs reserved for static assignments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Ensure your static IP range is within the subnet’s CIDR and does not include the gateway IP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Configure ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS Settings"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Specify the IP address of DNS servers that network clients will use to resolve domain names."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary DNS:"
          }), " Required DNS server for domain name resolution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Secondary DNS (optional):"
          }), " Backup DNS server if the primary fails."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8:"
      }), " Assign a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag"
      }), " to categorize or organize your subnet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Tags help you manage and filter networking resources across large environments."
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