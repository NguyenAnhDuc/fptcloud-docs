"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67049],{

/***/ 159662
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_create_via_gui_md_909_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-create-via-gui-md-909.json
const site_docs_gpu_container_create_via_gui_md_909_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/create-via-gui","title":"Using GUI","description":"*","source":"@site/docs/gpu-container/create-via-gui.md","sourceDirName":"gpu-container","slug":"/gpu-container/create-via-gui","permalink":"/gpu-container/create-via-gui","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Using GUI","title":"Using GUI","source":"https://fptcloud.com/en/documents/gpu-container/?doc=create-via-gui","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"How to create a container","permalink":"/gpu-container/create-new-container"},"next":{"title":"Export Container Configuration","permalink":"/gpu-container/export-config"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/create-via-gui.md


const frontMatter = {
	sidebar_label: 'Using GUI',
	title: 'Using GUI',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=create-via-gui',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Using GUI';

const assets = {

};



const toc = [{
  "value": "1. Select GPU Container in the Side menu and click button “Create New Container”",
  "id": "1-select-gpu-container-in-the-side-menu-and-click-button-create-new-container",
  "level": 3
}, {
  "value": "2. Give your container a name using Container Name field.",
  "id": "2-give-your-container-a-name-using-container-name-field",
  "level": 3
}, {
  "value": "3. Select a GPU Instance (we currently support NVIDIA GPU H100 and H200)",
  "id": "3-select-a-gpu-instance-we-currently-support-nvidia-gpu-h100-and-h200",
  "level": 3
}, {
  "value": "4. Template:",
  "id": "4-template",
  "level": 3
}, {
  "value": "a. Built-in templates: Click “Change Template” and choose the template.",
  "id": "a-built-in-templates-click-change-template-and-choose-the-template",
  "level": 4
}, {
  "value": "b. Custom template: Bring your own template by using the feature “Custom Template”.",
  "id": "b-custom-template-bring-your-own-template-by-using-the-feature-custom-template",
  "level": 4
}, {
  "value": "5. Access Container.",
  "id": "5-access-container",
  "level": 3
}, {
  "value": "a. Ports",
  "id": "a-ports",
  "level": 4
}, {
  "value": "b. SSH",
  "id": "b-ssh",
  "level": 4
}, {
  "value": "6. Advanced Settings (Optional)",
  "id": "6-advanced-settings-optional",
  "level": 3
}, {
  "value": "7. Click <strong>“Create New Container”</strong> to create and start your container.",
  "id": "7-click-create-new-container-to-create-and-start-your-container",
  "level": 3
}, {
  "value": "8. Add credit",
  "id": "8-add-credit",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "using-gui",
        children: "Using GUI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png",
        alt: "Info Icon"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " Each tenant can only have a maximum of 10 containers. If you have reached this limit, please delete unused container to create a new one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-select-gpu-container-in-the-side-menu-and-click-button-create-new-container",
      children: "1. Select GPU Container in the Side menu and click button “Create New Container”"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-give-your-container-a-name-using-container-name-field",
      children: "2. Give your container a name using Container Name field."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-select-a-gpu-instance-we-currently-support-nvidia-gpu-h100-and-h200",
      children: "3. Select a GPU Instance (we currently support NVIDIA GPU H100 and H200)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-template",
      children: "4. Template:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can either choose to use built-in templates or use their own images. We highly recommend that our customers use built-in templates for faster deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "a-built-in-templates-click-change-template-and-choose-the-template",
      children: "a. Built-in templates: Click “Change Template” and choose the template."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/Screenshot-2025-06-19-144905.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-custom-template-bring-your-own-template-by-using-the-feature-custom-template",
      children: "b. Custom template: Bring your own template by using the feature “Custom Template”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/Screenshot-2025-06-19-145912.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-access-container",
      children: "5. Access Container."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "a-ports",
      children: "a. Ports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This feature significantly enhances the flexibility of your containerized applications, allowing a single container to serve diverse functionalities on different ports."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both HTTP and TCP ports are supported, with a maximum of 10 ports per type for each container."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-ssh",
      children: "b. SSH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add SSH keys to enable remote access to your container. Each container supports a maximum of 10 SSH keys. These keys will be injected into the container at runtime, allowing you to SSH into the container using any of the provided keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png",
        alt: "Info Icon"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " Currently, v1.1.2 GPU Container only Ubuntu template already includes SSH configuration. If you want to connect SSH in other templates, please install OpenSSH-server before using."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To add an SSH keys, please follow the instructions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure you have an SSH key pair generated on your local machine. If you haven’t done this, you can generate one using this command on your local terminal:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh-keygen -t ed25519 -C YOUR_EMAIL@DOMAIN.COM\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cat ~/.ssh/id_ed25519.pub\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will output something similar to this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh-ed25519 AAAAC4NzaC1lZDI1JTE5AAAAIGP+L8hnjIcBqUb8NRrDiC32FuJBvRA0m8jLShzgq6BQ YOUR_EMAIL@DOMAIN.COM\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3. Copy and paste the output into the SSH Public Keys field: ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/07/Screenshot-2025-07-08-084117-1.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-advanced-settings-optional",
      children: "6. Advanced Settings (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistent Disk"
      }), " : specify the amount of storage that users need to store training weights, models, etc. Read more about Storage ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-container/?doc=storage",
        children: "here"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["b. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment Variables"
      }), " : key-value pairs injected into the container at runtime."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["c. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Startup Command"
      }), " : command and arguments to run at the start of container."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "7-click-create-new-container-to-create-and-start-your-container",
      children: ["7. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Create New Container”"
      }), " to create and start your container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-add-credit",
      children: "8. Add credit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In case your balance is not enough to create a new container (lower cost of using the container for 1 hour), please follow these instructions to add credit to your account: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/gpu-container/?doc=add-credit",
        children: "Add Credits"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./create-new-container",
        children: " Previous How to create a container "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./import-config",
        children: " Next Importing YAML file "
      })]
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