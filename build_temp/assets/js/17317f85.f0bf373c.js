"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[41205],{

/***/ 630638
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_connect_container_md_173_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-connect-container-md-173.json
const site_docs_gpu_container_connect_container_md_173_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/connect-container","title":"How to connect to a container","description":"*","source":"@site/docs/gpu-container/connect-container.md","sourceDirName":"gpu-container","slug":"/gpu-container/connect-container","permalink":"/gpu-container/connect-container","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"How to connect to a container","title":"How to connect to a container","source":"https://fptcloud.com/en/documents/gpu-container/?doc=connect-container","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Code Server Use Cases","permalink":"/gpu-container/code-server-use-cases"},"next":{"title":"How to create a container","permalink":"/gpu-container/create-new-container"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/connect-container.md


const frontMatter = {
	sidebar_label: 'How to connect to a container',
	title: 'How to connect to a container',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=connect-container',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'How to connect to a container';

const assets = {

};



const toc = [{
  "value": "HTTP Services",
  "id": "http-services",
  "level": 2
}, {
  "value": "Step 1: Once the container is running, navigate to Container Details Page.",
  "id": "step-1-once-the-container-is-running-navigate-to-container-details-page",
  "level": 3
}, {
  "value": "Step 2: Find the endpoint, then copy to clipbooard or click to open on browser.",
  "id": "step-2-find-the-endpoint-then-copy-to-clipbooard-or-click-to-open-on-browser",
  "level": 3
}, {
  "value": "Step 3: Follow the guide that matches your template.",
  "id": "step-3-follow-the-guide-that-matches-your-template",
  "level": 3
}, {
  "value": "TCP Ports",
  "id": "tcp-ports",
  "level": 2
}, {
  "value": "SSH Terminal",
  "id": "ssh-terminal",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "how-to-connect-to-a-container",
        children: "How to connect to a container"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can connect to your GPU Container using a few different methods, depending on your specific needs, preferences, and the template used to create the container."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http-services",
      children: "HTTP Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connecting to a container using HTTP is convenient, quick, and secure via HTTPS. To connect using the HTTP Service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-once-the-container-is-running-navigate-to-container-details-page",
      children: "Step 1: Once the container is running, navigate to Container Details Page."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-find-the-endpoint-then-copy-to-clipbooard-or-click-to-open-on-browser",
      children: "Step 2: Find the endpoint, then copy to clipbooard or click to open on browser."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-follow-the-guide-that-matches-your-template",
      children: "Step 3: Follow the guide that matches your template."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Template"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Jupyter, Code Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ollama WebUI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ollama"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vLLM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hugging Face Token (*)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next steps"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open the endpoint in your browser."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " fields in the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Environment Variables"
        }), " section of the Container Details page to access your container."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "|"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open the endpoint in your browser."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a new Open WebUI account or use your existing account."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select a model to pull and test the model."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["| Testing your container using Postman (", (0,jsx_runtime.jsx)(_components.em, {
        children: ") | Testing your container using Postman ("
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(*) Hugging Face Token: Hugging Face Token in Environment Variable section is required when using Ollama template. If you do not have Hugging Face Token yet, please follow ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://huggingface.co/docs/hub/en/security-tokens",
        children: "this guide"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(*) Testing container by using Postman: Append ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "/v1/models"
      }), " to your endpoint, then provide your API_TOKEN in the Authorization. If you're using the vLLM template, also include HUGGING_FACE_HUB_TOKEN in the request parameters to test your container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tcp-ports",
      children: "TCP Ports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To access your instance via public endpoint, you will need to add TCP ports to the container configuration. When your container is created, you will receive a public domain and an external public port mapping to access your service. An external public port will be randomly selected from the range 30000-40000."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The format will be DOMAIN:EXTERNAL_PORT -> INTERNAL_PORT. For example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tcp-endpoint-stg.serverless.fptcloud.com:34771 → :22\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ssh-terminal",
      children: "SSH Terminal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["To get the SSH command for your container, navigate to the Container details page. Copy the command listed under SSH command..", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://fptcloud.com/wp-content/uploads/2025/06/Screenshot-2025-06-30-173735.png",
          alt: "Alt text"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It should look something like this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh root@tcp-endpoint-stg.serverless.fptcloud.com -p 34771 ~/.ssh/id_e25595\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./export-config",
        children: " Previous Export Container Configuration "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./manage-container",
        children: " Next How to manage container "
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