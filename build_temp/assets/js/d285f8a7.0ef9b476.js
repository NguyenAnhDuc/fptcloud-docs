"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10718],{

/***/ 602778
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_create_a_snapshot_md_d28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-create-a-snapshot-md-d28.json
const site_docs_gpu_virtual_machine_create_a_snapshot_md_d28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/create-a-snapshot","title":"Create a Snapshot","description":"*","source":"@site/docs/gpu-virtual-machine/create-a-snapshot.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/create-a-snapshot","permalink":"/gpu-virtual-machine/create-a-snapshot","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create a Snapshot","title":"Create a Snapshot","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-snapshot","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Create a Security Group","permalink":"/gpu-virtual-machine/create-a-security-group"},"next":{"title":"Create a Subnet","permalink":"/gpu-virtual-machine/create-a-subnet"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/create-a-snapshot.md


const frontMatter = {
	sidebar_label: 'Create a Snapshot',
	title: 'Create a Snapshot',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-snapshot',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Create a Snapshot';

const assets = {

};



const toc = [{
  "value": "Create a Snapshot",
  "id": "create-a-snapshot-1",
  "level": 3
}, {
  "value": "Use a Snapshot",
  "id": "use-a-snapshot",
  "level": 3
}, {
  "value": "Delete a Snapshot",
  "id": "delete-a-snapshot",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "create-a-snapshot",
        children: "Create a Snapshot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshots"
      }), " are on-demand ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disk images"
      }), " of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VMs"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "volumes"
      }), " saved to your account. You can use them to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "create new GPU VMs"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "volumes"
      }), " with the same contents."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: This feature only supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VMs using Block Storage – Persistent Disk"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-a-snapshot-1",
      children: "Create a Snapshot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "snapshot"
      }), " feature allows you to capture the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "current state of a virtual machine"
      }), " , enabling quick recovery or rollback in case of system changes or failures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-a-Snapshot-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Side menu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VM"
      }), " you want to create a snapshot for and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Create an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "instance snapshot"
      }), " by entering a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "snapshot name"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tag"
      }), " (optional)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The snapshot that has been created will appear in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-a-Snapshot-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-a-snapshot",
      children: "Use a Snapshot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-a-Snapshot-3.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Open the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " section from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Side menu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Find the snapshot you want to use and click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3-dot icon"
      }), ". Note: Only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "active snapshots"
      }), " can be used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " You can choose one of the following actions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch as an instance:"
          }), " Create a new virtual machine directly from this snapshot."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create storage disk:"
          }), " Generate a new storage volume based on the snapshot’s data."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Manage tags:"
          }), " Add or edit tags to organize the snapshot."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete image:"
          }), " Permanently delete the snapshot."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-a-snapshot",
      children: "Delete a Snapshot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To delete a snapshot, follow these steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " In the menu, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " , then under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " menu of the snapshot, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Image"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Snapshot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once you confirm the deletion, the system will delete the image and free up the snapshot resources that were being used by the VPC. You will be notified once the snapshot deletion is complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you check the option ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Delete all volume snapshots attached to this image\""
      }), " , all snapshots created from the storage disk attached to that VM will also be deleted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-a-Snapshot-4.png",
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