"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[60989],{

/***/ 376262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_pfsense_network_gateway_md_cf5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-pfsense-network-gateway-md-cf5.json
const site_docs_gpu_virtual_machine_pfsense_network_gateway_md_cf5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/pfsense-network-gateway","title":"pfSense Network Gateway","description":"*","source":"@site/docs/gpu-virtual-machine/pfsense-network-gateway.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/pfsense-network-gateway","permalink":"/gpu-virtual-machine/pfsense-network-gateway","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"pfSense Network Gateway","title":"pfSense Network Gateway","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=pfsense-network-gateway","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Overview","permalink":"/gpu-virtual-machine/overview"},"next":{"title":"Quick Start","permalink":"/gpu-virtual-machine/quick-start"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/pfsense-network-gateway.md


const frontMatter = {
	sidebar_label: 'pfSense Network Gateway',
	title: 'pfSense Network Gateway',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=pfsense-network-gateway',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'pfSense Network Gateway';

const assets = {

};



const toc = [{
  "value": "What is pfSense?",
  "id": "what-is-pfsense",
  "level": 3
}, {
  "value": "File Preparation",
  "id": "file-preparation",
  "level": 3
}, {
  "value": "Network Environment Preparation",
  "id": "network-environment-preparation",
  "level": 3
}, {
  "value": "Creating a pfSense Virtual Machine",
  "id": "creating-a-pfsense-virtual-machine",
  "level": 3
}, {
  "value": "HA (High Availability) Requirements",
  "id": "ha-high-availability-requirements",
  "level": 3
}, {
  "value": "Configuring the pfSense Interface",
  "id": "configuring-the-pfsense-interface",
  "level": 3
}, {
  "value": "New Network: Adding a Card",
  "id": "new-network-adding-a-card",
  "level": 4
}, {
  "value": "Firewall: Creating Rules",
  "id": "firewall-creating-rules",
  "level": 4
}, {
  "value": "Configuring CARP (High Availability Protocol)",
  "id": "configuring-carp-high-availability-protocol",
  "level": 3
}, {
  "value": "Configuring CARP on the Master",
  "id": "configuring-carp-on-the-master",
  "level": 4
}, {
  "value": "Configuring CARP on the Slave",
  "id": "configuring-carp-on-the-slave",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
        id: "pfsense-network-gateway",
        children: "pfSense Network Gateway"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This article will introduce how to build a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "highly available (HA) network gateway"
      }), " using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pfSense"
      }), ". This FreeBSD-based open-source software helps you achieve a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stable and reliable network environment"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-pfsense",
      children: "What is pfSense?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pfSense"
      }), " is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open source router/firewall software"
      }), " based on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FreeBSD"
      }), " that can implement various network functions such as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "router"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "firewall"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN"
      }), " , and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "proxy"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The configuration of the virtual network gateway when building ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ExpressRoute / Site-to-Site VPN"
      }), " is also described in the official documentation, making it safe and suitable for many ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "corporate environments"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-preparation",
      children: "File Preparation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download pfSense ISO file"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to the official pfSense website: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.pfsense.org/download/",
        children: "https://www.pfsense.org/download/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nDownload the latest ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ISO image"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Login to FPT Cloud Console"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Visit ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.jp/",
        children: "https://console.fptcloud.jp/"
      }), " and log in using your provided credentials."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload the ISO file"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select the downloaded ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pfSense ISO file"
      }), " and upload it to the portal. You will receive a confirmation message once the upload is complete."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-1.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-2.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-3.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-4.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-5.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-environment-preparation",
      children: "Network Environment Preparation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a New Subnet"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud Console"
      }), " , create a new ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subnet"
      }), " according to your network requirements, which will allow you to assign the necessary ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP addresses"
      }), " to the network interfaces of pfSense."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-6.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-7.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Security Group"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "security rules"
      }), " for your environment and create appropriate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "security groups"
      }), " to control communication and network traffic between pfSense virtual machines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-8.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-9.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-pfsense-virtual-machine",
      children: "Creating a pfSense Virtual Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute"
      }), " menu in the FPT Cloud console and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Create Instance\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-10.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Information Settings"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set up an instance name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pfsense-master"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pfsense-slave"
      }), ") and select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pfSense ISO"
      }), " you uploaded earlier under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ISO image"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-11.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-12.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-13.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource and Network Configuration"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select the appropriate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resource size (CPU/RAM)"
      }), " for your environment and connect the necessary networks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-14.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-15.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attach a Security Group"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attach the previously created ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "security group"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "create the virtual machine"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-16.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-17.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ha-high-availability-requirements",
      children: "HA (High Availability) Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum Requirements for High Availability (HA) Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "three IPs per subnet"
        }), " on the pfSense network interface\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["One for the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "master"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["One for the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "slave"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["One ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "virtual IP"
            }), " for external communication"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layer 2 devices"
        }), " must support ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "multicast"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "upstream / ISP / router"
        }), " must have access to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "virtual IP"
        }), " used by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CARP"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-the-pfsense-interface",
      children: "Configuring the pfSense Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-18.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "new-network-adding-a-card",
      children: "New Network: Adding a Card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Assignment\""
        }), " from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Interface"
        }), " menu and click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Add\""
        }), " to add a new interface."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "firewall-creating-rules",
      children: "Firewall: Creating Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Rules\""
        }), " from the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Firewall"
        }), " menu and switch to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Sync\""
        }), " tab."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-carp-high-availability-protocol",
      children: "Configuring CARP (High Availability Protocol)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuring-carp-on-the-master",
      children: "Configuring CARP on the Master"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "\"High Availability Synchronization\""
          }), " from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "System"
          }), " menu and enter the required information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The username and password for the remote system specify the credentials of a high-privileged user on the pfSense slave virtual machine"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-19.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuring-carp-on-the-slave",
      children: "Configuring CARP on the Slave"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Similarly, select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "\"High Availability Synchronization\""
          }), " from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "System"
          }), " menu and enter the required information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The settings will be different from those of the master, so please follow the instructions to set them appropriately."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Gateway-20.png",
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