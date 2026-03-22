"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88182],{

/***/ 417572
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_manage_gpu_vms_md_5c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-manage-gpu-vms-md-5c3.json
const site_docs_gpu_virtual_machine_manage_gpu_vms_md_5c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/manage-gpu-vms","title":"Manage GPU VMs","description":"*","source":"@site/docs/gpu-virtual-machine/manage-gpu-vms.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/manage-gpu-vms","permalink":"/gpu-virtual-machine/manage-gpu-vms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Manage GPU VMs","title":"Manage GPU VMs","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=manage-gpu-vms","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"GPU Virtual Machine","permalink":"/gpu-virtual-machine/"},"next":{"title":"Monitor GPU VMs","permalink":"/gpu-virtual-machine/monitor-gpu-vms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/manage-gpu-vms.md


const frontMatter = {
	sidebar_label: 'Manage GPU VMs',
	title: 'Manage GPU VMs',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=manage-gpu-vms',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Manage GPU VMs';

const assets = {

};



const toc = [{
  "value": "Power Off",
  "id": "power-off",
  "level": 3
}, {
  "value": "Power On",
  "id": "power-on",
  "level": 3
}, {
  "value": "Reboot",
  "id": "reboot",
  "level": 3
}, {
  "value": "Rename",
  "id": "rename",
  "level": 3
}, {
  "value": "Reset Password",
  "id": "reset-password",
  "level": 3
}, {
  "value": "Lock a GPU VM",
  "id": "lock-a-gpu-vm",
  "level": 3
}, {
  "value": "Unlock a GPU VM",
  "id": "unlock-a-gpu-vm",
  "level": 3
}, {
  "value": "Delete a GPU VM",
  "id": "delete-a-gpu-vm",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "manage-gpu-vms",
        children: "Manage GPU VMs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "power-off",
      children: "Power Off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to power off and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Power off”"
      }), " action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "power-on",
      children: "Power On"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to power on and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Power on”"
      }), " action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reboot",
      children: "Reboot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: The reboot function performs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hard reboot"
      }), " , which may lead to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data loss"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "corrupted software"
      }), " , or other potential issues."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to reboot and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Reboot”"
      }), " action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rename",
      children: "Rename"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to rename and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Rename”"
      }), " action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Rename your VM and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Rename instance\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reset-password",
      children: "Reset Password"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to reset the password for and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Reset password”"
      }), " action and an email with the new password will be sent to your registered email address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock-a-gpu-vm",
      children: "Lock a GPU VM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users can lock a virtual machine to prevent it from being deleted, helping to avoid ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accidental deletion"
      }), " of an active VM instead of a test machine. This feature reduces the risk of user error and protects user data on virtual machines. To lock a VM, follow these steps:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to lock and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Lock”"
      }), " action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " A warning dialog will appear, showing the VM name and asking for confirmation. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lock Instance Deletion"
      }), " to proceed with the lock. Once locked, the system will prevent the VM from being deleted until it is unlocked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unlock-a-gpu-vm",
      children: "Unlock a GPU VM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To delete a virtual machine, users must first unlock it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " In the menu, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , then under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unlock Deletion"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " A warning dialog will appear, showing the VM name and asking for confirmation. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unlock Instance Deletion"
      }), " to unlock the VM. Once unlocked, the system will allow the VM to be deleted as normal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-a-gpu-vm",
      children: "Delete a GPU VM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: Deleting a virtual machine ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "permanently deletes all data"
      }), " , and this action ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot be undone"
      }), ". Make sure to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "back up any important data"
      }), " before proceeding."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to delete and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Confirm by entering ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“delete”"
      }), " in the text field and clicking ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Delete instance”"
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