"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[6986],{

/***/ 761399
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_testing_interactive_sessions_playground_md_70c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-testing-interactive-sessions-playground-md-70c.json
const site_docs_model_testing_interactive_sessions_playground_md_70c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-testing-interactive-sessions/playground","title":"Playground","description":"*","source":"@site/docs/model-testing-interactive-sessions/playground.md","sourceDirName":"model-testing-interactive-sessions","slug":"/model-testing-interactive-sessions/playground","permalink":"/model-testing-interactive-sessions/playground","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Playground","title":"Playground","source":"https://fptcloud.com/en/documents/model-testing-interactive-sessions/?doc=playground","parent":"https://fptcloud.com/en/documents/model-testing-interactive-sessions","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Overview","permalink":"/model-testing-interactive-sessions/overview"},"next":{"title":"Quick Start","permalink":"/model-testing-interactive-sessions/quick-start"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-testing-interactive-sessions/playground.md


const frontMatter = {
	sidebar_label: 'Playground',
	title: 'Playground',
	source: 'https://fptcloud.com/en/documents/model-testing-interactive-sessions/?doc=playground',
	parent: 'https://fptcloud.com/en/documents/model-testing-interactive-sessions',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Playground';

const assets = {

};



const toc = [{
  "value": "Step 1: Adjust parameters",
  "id": "step-1-adjust-parameters",
  "level": 3
}, {
  "value": "Step 2: Start chatting",
  "id": "step-2-start-chatting",
  "level": 3
}, {
  "value": "Step 3: Refine your prompts",
  "id": "step-3-refine-your-prompts",
  "level": 3
}, {
  "value": "Step 4: Clear completion",
  "id": "step-4-clear-completion",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "playground",
        children: "Playground"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Playground"
      }), " is space where users can interact with AI models in a chat-like format. It’s designed for testing messages, evaluating model responses, and adjusting model behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/Playground-Interactive-Session-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can follow guide to evaluate your model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-adjust-parameters",
      children: "Step 1: Adjust parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters include:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls randomness in assistant responses. Lower = more focused, higher = more creative."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.00, 2.00] (commonly 1.00 is balanced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add stop sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines where the model should stop generating text."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom string(s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits the number of tokens in the response."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 8192]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top-P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls diversity via nucleus sampling. Lower = more focused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0.00, 1.00]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We recommend you adjust parameters based on each purpose:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Temperature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Add stop sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Top-P"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creative writing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0–1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "500+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8–1.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Technical explanation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2–0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "200–500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3–0.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2–0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "150–300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3–0.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1–0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“n” or “#”"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3–0.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversational agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7–1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "200–600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8–1.0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-start-chatting",
      children: "Step 2: Start chatting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Playground interface is structured around ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completions"
      }), " , which include:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prompts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define the assistant’s behavior and tone. It helps guide how the model responds throughout the conversation."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eg:"
      }), " You are a creative writing assistant. Always write with vivid imagery, emotional depth, and a storytelling tone.", (0,jsx_runtime.jsx)(_components.br, {}), "\nUser messages | Represent the input or query from you. You can type text to test LLM models or add to upload an image to test VLM models.", (0,jsx_runtime.jsx)(_components.br, {}), "\nAssistant responses | The AI model’s reply is based on user messages and system messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can interact with the model in real time, observe how it responds, and iterate based on your goals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-refine-your-prompts",
      children: "Step 3: Refine your prompts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To improve or explore different behaviors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modify the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "system message"
          }), " to change the assistant’s personality or tone."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Adjust the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "user message"
          }), " to test different types of queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tweak the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "parameters"
          }), " to observe how the model’s output changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-clear-completion",
      children: "Step 4: Clear completion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After clearing completion, completion is finished and stored in completion history."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./how-to-evaluate-model",
        children: " Previous How to Evaluate Model? "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./completion-history",
        children: " Next Completion History "
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