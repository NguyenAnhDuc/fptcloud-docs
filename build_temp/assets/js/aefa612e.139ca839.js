"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[32666],{

/***/ 562226
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_quick_start_md_aef_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-quick-start-md-aef.json
const site_docs_gpu_virtual_machine_quick_start_md_aef_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/quick-start","title":"Quick Start","description":"*","source":"@site/docs/gpu-virtual-machine/quick-start.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/quick-start","permalink":"/gpu-virtual-machine/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quick Start","title":"Quick Start","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=quick-start","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"pfSense Network Gateway","permalink":"/gpu-virtual-machine/pfsense-network-gateway"},"next":{"title":"About Gpu Container","permalink":"/gpu-container/about-gpu-container"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/quick-start.md


const frontMatter = {
	sidebar_label: 'Quick Start',
	title: 'Quick Start',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=quick-start',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Quick Start';

const assets = {

};



const toc = [{
  "value": "Sign up for an Account",
  "id": "sign-up-for-an-account",
  "level": 3
}, {
  "value": "Step-by-Step",
  "id": "step-by-step",
  "level": 3
}, {
  "value": "Step 1: Create a Subnet",
  "id": "step-1-create-a-subnet",
  "level": 4
}, {
  "value": "Step 2: Create a GPU VM",
  "id": "step-2-create-a-gpu-vm",
  "level": 4
}, {
  "value": "Step 3: Allocate a public IP address (Floating IP)",
  "id": "step-3-allocate-a-public-ip-address-floating-ip",
  "level": 4
}, {
  "value": "Step 4: Create Security Group",
  "id": "step-4-create-security-group",
  "level": 4
}, {
  "value": "Step 5: Access to GPU Virtual Machine",
  "id": "step-5-access-to-gpu-virtual-machine",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
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
        id: "quick-start",
        children: "Quick Start"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sign-up-for-an-account",
      children: "Sign up for an Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Create an FPT Cloud account"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/",
            children: "https://fptcloud.com/"
          }), ", click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sign Up"
          }), " , and follow the system instructions to enter your details."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Our support team will contact you shortly to verify your information and activate your account."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Log in to the FPT Portal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://console.fptcloud.com",
            children: "https://console.fptcloud.com"
          }), " or ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://console.fptcloud.jp",
            children: "https://console.fptcloud.jp"
          }), " and sign in with your ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FPT Cloud account and password"
          }), " , depending on where your quota has been provisioned. Make sure to select the correct ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tenant"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Region"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set up an SSH key:"
          }), " Navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSH Management"
          }), " to generate an SSH key. This key will be used for secure access to your servers."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step",
      children: "Step-by-Step"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-create-a-subnet",
      children: "Step 1: Create a Subnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A subnet is required before deploying your GPU VM."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-subnet",
        children: "here"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-create-a-gpu-vm",
      children: "Step 2: Create a GPU VM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * **Choose the instance type:** _H100_ instances are available on the _.com_ site and _H200_ instances are available on the _.jp_ site. \n\n * **Select a disk type:**\n\n   * **Ephemeral Disk (NVMe):** The storage disk is bundled with the instance and cannot be resized. \n   * **Persistent Disk (Block Storage SSD):** A storage disk is required, with a minimum size of **100 GB.**\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-gpu-vm",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-allocate-a-public-ip-address-floating-ip",
      children: "Step 3: Allocate a public IP address (Floating IP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * _Ephemeral Disk (NVMe):_ Use **port forwarding (NAT)** to connect the floating IP with the VM. You’ll need to specify both **the IP port** and **the Instance port.**\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=floating-ip",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-create-security-group",
      children: "Step 4: Create Security Group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default Security Group"
      }), " allows all outbound traffic. You have to create a new one to allow inbound rules to access the VM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Choose ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Security Group"
        }), " in the Security Groups screen and define the inbound rules for VM (e.g., ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Allow SSH access on port 22"
        }), " from your client’s public IP)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-security-group",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-access-to-gpu-virtual-machine",
      children: "Step 5: Access to GPU Virtual Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After successfully creating the GPU VM, you can access the server via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Terminal:"
          }), " Open your terminal and enter the command with your SSH key."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Web Console:"
          }), " Go to the server’s detail page and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "“Open at Console”"
          }), " to log in with a password through the web console."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["💡 ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["The default username is", (0,jsx_runtime.jsx)(_components.strong, {
            children: "root."
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=access-to-servers",
        children: "here"
      }), "."]
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