"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[34955],{

/***/ 683393
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_testing_interactive_sessions_how_to_integrate_model_md_ad9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-testing-interactive-sessions-how-to-integrate-model-md-ad9.json
const site_docs_model_testing_interactive_sessions_how_to_integrate_model_md_ad9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-testing-interactive-sessions/how-to-integrate-model","title":"How to Integrate Model?","description":"*","source":"@site/docs/model-testing-interactive-sessions/how-to-integrate-model.md","sourceDirName":"model-testing-interactive-sessions","slug":"/model-testing-interactive-sessions/how-to-integrate-model","permalink":"/model-testing-interactive-sessions/how-to-integrate-model","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"How to Integrate Model?","title":"How to Integrate Model?","source":"https://fptcloud.com/en/documents/model-testing-interactive-sessions/?doc=how-to-integrate-model","parent":"https://fptcloud.com/en/documents/model-testing-interactive-sessions","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"How to Evaluate Model?","permalink":"/model-testing-interactive-sessions/how-to-evaluate-model"},"next":{"title":"How to Manage Session?","permalink":"/model-testing-interactive-sessions/how-to-manage-session"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-testing-interactive-sessions/how-to-integrate-model.md


const frontMatter = {
	sidebar_label: 'How to Integrate Model?',
	title: 'How to Integrate Model?',
	source: 'https://fptcloud.com/en/documents/model-testing-interactive-sessions/?doc=how-to-integrate-model',
	parent: 'https://fptcloud.com/en/documents/model-testing-interactive-sessions',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'How to Integrate Model?';

const assets = {

};



const toc = [{
  "value": "Step 1: Get the required information",
  "id": "step-1-get-the-required-information",
  "level": 3
}, {
  "value": "Step 2: Choose your intergration platform",
  "id": "step-2-choose-your-intergration-platform",
  "level": 3
}, {
  "value": "Step 3: Send a Request to the API",
  "id": "step-3-send-a-request-to-the-api",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "how-to-integrate-model",
        children: "How to Integrate Model?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " Get API Endpoint is enabled when session's status is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RUNNING"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/Get-API-Endpoint.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-get-the-required-information",
      children: "Step 1: Get the required information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We offer:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The address where your application sends requests to interact with a service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bearer token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string that proves you have permission to access the API."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Never expose your token in public code or repositories.", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Store it in environment variables or secure vaults.", (0,jsx_runtime.jsx)(_components.br, {}), "\nModel | A unique identifier for a specific AI model hosted on an Interactive Sessions platform.", (0,jsx_runtime.jsx)(_components.br, {}), "\nSample code | More details, includes:", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Endpoint URL", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Bearer token", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Model ID", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Messages (system, user, assistant)", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Temperature"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-choose-your-intergration-platform",
      children: "Step 2: Choose your intergration platform"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-send-a-request-to-the-api",
      children: "Step 3: Send a Request to the API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here's an example using Python:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import requests\nurl = \"https://api.gptcloud.com/aiam/v1/chat/completions\"\nheaders = {\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer pR2vV0zGZ0nP6tQ3gFJk9wXn0\"\n}\npayload = {\n    \"model\": \"62d8b2e6-42f9-4c17-95f8-4ca93d74f396\",\n    \"messages\": [\n        {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n        {\"role\": \"user\", \"content\": \"Hello!\"}\n    ],\n    \"temperature\": 0.7\n}\nresponse = requests.post(url, headers=headers, json=payload)\nprint(response.json())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./completion-history",
        children: " Previous Completion History "
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