"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[49532],{

/***/ 782818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_ubuntu_use_cases_md_358_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-ubuntu-use-cases-md-358.json
const site_docs_gpu_container_ubuntu_use_cases_md_358_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/ubuntu-use-cases","title":"Ubuntu Use Cases","description":"*","source":"@site/docs/gpu-container/ubuntu-use-cases.md","sourceDirName":"gpu-container","slug":"/gpu-container/ubuntu-use-cases","permalink":"/gpu-container/ubuntu-use-cases","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Ubuntu Use Cases","title":"Ubuntu Use Cases","source":"https://fptcloud.com/en/documents/gpu-container/?doc=ubuntu-use-cases","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Templates","permalink":"/gpu-container/templates"},"next":{"title":"Deploy model by using vLLM","permalink":"/gpu-container/vllm-use-case"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/ubuntu-use-cases.md


const frontMatter = {
	sidebar_label: 'Ubuntu Use Cases',
	title: 'Ubuntu Use Cases',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=ubuntu-use-cases',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Ubuntu Use Cases';

const assets = {

};



const toc = [{
  "value": "Create a Remote Environment using Ubuntu",
  "id": "create-a-remote-environment-using-ubuntu",
  "level": 2
}, {
  "value": "Step 1: Create a GPU Container using Ubuntu template",
  "id": "step-1-create-a-gpu-container-using-ubuntu-template",
  "level": 3
}, {
  "value": "Step 2: Connect your container via SSH",
  "id": "step-2-connect-your-container-via-ssh",
  "level": 3
}, {
  "value": "Step 3: Setting Up Your Environment",
  "id": "step-3-setting-up-your-environment",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ubuntu-use-cases",
        children: "Ubuntu Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-a-remote-environment-using-ubuntu",
      children: "Create a Remote Environment using Ubuntu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This use case involves creating a remote environment from Ubuntu template, then connecting via SSH to install the necessary PyTorch library to prepare it for your AI workload."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-create-a-gpu-container-using-ubuntu-template",
      children: "Step 1: Create a GPU Container using Ubuntu template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose Ubuntu template"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select SSH Terminal Access and add your public keys ", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://fptcloud.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-173921.png",
          alt: "Alt text"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-connect-your-container-via-ssh",
      children: "Step 2: Connect your container via SSH"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To connect via SSH, copy the command and paste it into your terminal. You can use any terminal application, such as Command Prompt, PowerShell, or the integrated terminal in VS Code. This use case will use VSCode. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-174741.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See our detailed guide ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/gpu-container/?doc=connect-container",
        children: "here "
      }), "for a full walkthrough."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-setting-up-your-environment",
      children: "Step 3: Setting Up Your Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apt update && apt install -y wget gnupg2 curl software-properties-common \n\n\napt install -y python3 python3-pip python3-venv \n\n\n\n\npip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124   \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check if pytorch is installed successfully"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python 3 \n\n\nimport torch \n\n\n\n\napt install vim \n\n\nvim matrix_mulplication.py \n\n\npython3 matrix_mulplication.py \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./code-server-use-cases",
        children: " Previous Code Server Use Cases "
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