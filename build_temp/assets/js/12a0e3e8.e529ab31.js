"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89226],{

/***/ 799182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_access_to_servers_md_12a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-access-to-servers-md-12a.json
const site_docs_gpu_virtual_machine_access_to_servers_md_12a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/access-to-servers","title":"Access to GPU VM","description":"*","source":"@site/docs/gpu-virtual-machine/access-to-servers.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/access-to-servers","permalink":"/gpu-virtual-machine/access-to-servers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Access to GPU VM","title":"Access to GPU VM","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=access-to-servers","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Xoa managed gpu cluster","permalink":"/fpt-managed-gpu-cluster/xoa-managed-gpu-cluster"},"next":{"title":"Block Storage","permalink":"/gpu-virtual-machine/block-storage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/access-to-servers.md


const frontMatter = {
	sidebar_label: 'Access to GPU VM',
	title: 'Access to GPU VM',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=access-to-servers',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Access to GPU VM';

const assets = {

};



const toc = [{
  "value": "Connect to a GPU VM via Web Console",
  "id": "connect-to-a-gpu-vm-via-web-console",
  "level": 3
}, {
  "value": "SSH to Connect to a GPU VM",
  "id": "ssh-to-connect-to-a-gpu-vm",
  "level": 3
}, {
  "value": "Step 1: Open Your Terminal",
  "id": "step-1-open-your-terminal",
  "level": 4
}, {
  "value": "Step 2: Connecting to Your VM",
  "id": "step-2-connecting-to-your-vm",
  "level": 4
}, {
  "value": "Method 1: Connect Using a Password",
  "id": "method-1-connect-using-a-password",
  "level": 5
}, {
  "value": "Method 2: Connect Using an SSH Key (.pem file)",
  "id": "method-2-connect-using-an-ssh-key-pem-file",
  "level": 5
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "access-to-gpu-vm",
        children: "Access to GPU VM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM running Ubuntu"
      }), " is successfully created on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " , users can access it by default through the built-in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Console"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, users can connect externally using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH clients"
      }), " or third-party software such as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PuTTY"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bitvise"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connect-to-a-gpu-vm-via-web-console",
      children: "Connect to a GPU VM via Web Console"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Console"
      }), " allows users to control all GPU VMs on FPT Cloud, even those ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without a Public IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " On the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Side menu"
      }), " , go to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , find the virtual machine you want to access, and under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " section, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Console"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " The browser will immediately open a new window displaying the server screen, allowing you full control and interaction with the connected server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-to-connect-to-a-gpu-vm",
      children: "SSH to Connect to a GPU VM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can connect to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " using an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH client"
      }), " , typically from a terminal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To do so, you need to have the following three pieces of information:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The public IP address:"
          }), " After your GPU VM is created and allocated a public IP, it is displayed in the GPU VM list or the GPU VM details page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The username:"
          }), " The default username on the server during initial creation is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "root"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The authentication method"
          }), " for that user. If you added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSH keys"
          }), " to your GPU VM, you can connect using those keys, which we strongly recommend for its additional security. Otherwise, if you use password authentication, use the password you chose."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you have your GPU VM’s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "public IP address"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "username"
      }), " , and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "password or SSH key"
      }), " , follow the instructions below for your SSH client."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-open-your-terminal",
      children: "Step 1: Open Your Terminal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "On Linux/macOS:"
          }), " Launch the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Terminal"
          }), " app."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "On Windows:"
          }), " Use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CMD"
          }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "PowerShell"
          }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Bash"
          }), " , or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "WSL"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-connecting-to-your-vm",
      children: "Step 2: Connecting to Your VM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can connect to your VM in two ways: using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "password"
      }), " or an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH key (.pem file)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "method-1-connect-using-a-password",
      children: "Method 1: Connect Using a Password"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh <username>@<VM_IP>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "method-2-connect-using-an-ssh-key-pem-file",
      children: "Method 2: Connect Using an SSH Key (.pem file)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd <path_to_pem_file_directory>\n\n\n\n\nssh -i \"<your_key_file.pem>\" <username>@<VM_IP>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-3.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On your first connection, type ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "yes"
          }), " to verify the host’s fingerprint and continue."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You have successfully connected to the server via SSH. Type ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "exit"
          }), " to close the SSH session and return to your local shell."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Access-to-GPU-VM-4.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you see the error: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!"
      }), " , it means the saved SSH fingerprint for the server has changed. To fix it, run the following command to remove the old fingerprint:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh-keygen -R \"<VM_IP>\"\n"
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