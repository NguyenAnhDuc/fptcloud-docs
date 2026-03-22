"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74713],{

/***/ 913026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_data_hub_generate_dataset_md_3bf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-hub-generate-dataset-md-3bf.json
const site_docs_data_hub_generate_dataset_md_3bf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"data-hub/generate-dataset","title":"Generate Dataset","description":"*","source":"@site/docs/data-hub/generate-dataset.md","sourceDirName":"data-hub","slug":"/data-hub/generate-dataset","permalink":"/data-hub/generate-dataset","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Generate Dataset","title":"Generate Dataset","source":"https://fptcloud.com/en/documents/data-hub/?doc=generate-dataset","parent":"https://fptcloud.com/en/documents/data-hub","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Create Connection","permalink":"/data-hub/create-connection"},"next":{"title":"Data Hub","permalink":"/data-hub/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/data-hub/generate-dataset.md


const frontMatter = {
	sidebar_label: 'Generate Dataset',
	title: 'Generate Dataset',
	source: 'https://fptcloud.com/en/documents/data-hub/?doc=generate-dataset',
	parent: 'https://fptcloud.com/en/documents/data-hub',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Generate Dataset';

const assets = {

};



const toc = [{
  "value": "<strong>Overview:</strong>",
  "id": "overview",
  "level": 3
}, {
  "value": "Steps to Generate a Dataset",
  "id": "steps-to-generate-a-dataset",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
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
        id: "generate-dataset",
        children: "Generate Dataset"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Access the Data Hub service, navigate to Dataset Management menu and click the \"Generate Dataset\" button ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/07/image-1751971103513.32.30.png",
        alt: "file"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Dataset"
      }), " feature allows you to create a new dataset using a pre-trained model (teacher model) to label or generate outputs from your input data. You’ll need to provide model configuration, input data, and generation parameters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-to-generate-a-dataset",
      children: "Steps to Generate a Dataset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Select or Create a New Model Configuration"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: "https://fptcloud.com/wp-content/uploads/2025/07/image-1751971150903.38.58.png",
            alt: "file"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "You can select a model configuration that you have created or create a new one by click drop-down list"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Provider"
            }), " : A model provider is a service that offers AI models for tasks like text generation, ranking, and classification, currently support ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FPT AI Marketplace"
            }), " & ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OpenAI"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "API Key"
            }), " : An API key is a unique code that authenticates your access to a service"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Base URL"
            }), " : The base endpoint URL for the model. Example: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://mkp-api.fptcloud.com/"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Type"
            }), " : Select the type of model, which defines the AI model’s function. Currently only support LLM - Large Language Model"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Base Model"
            }), " : Choose the foundation model (e.g., DeepSeek-R1)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Name"
            }), " : Specify the name of the model you want to set"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Parameters"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: "https://fptcloud.com/wp-content/uploads/2025/07/image-1751971239430.40.21.png",
            alt: "file"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Max Output Length"
            }), " : Maximum number of tokens the model is allowed to generate. Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "8192"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Top-P"
            }), " : Controls the cumulative probability for token sampling. A higher value increases diversity. Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.95"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Temperature"
            }), " : Controls randomness in the output. Higher values result in more creative responses. Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1.00"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Dataset"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: "https://fptcloud.com/wp-content/uploads/2025/07/image-1751971272483.41.01.png",
            alt: "file"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(required)"
              }), " : Enter a name for the dataset to be generated."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Trainer"
              }), " : Select the trainer type (e.g., SFT - Supervised Fine-Tuning)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Data Format"
              }), " : Choose the format of the input data, such as Alpaca"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Input Method"
              }), " : Choose how to provide input data. Currently supports ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "File Upload & Data Connection"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Upload File:"
                }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Upload File"
                }), " to upload a ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ".csv"
                }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ".json"
                }), " file."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Note: Max file size is 100MB."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "   * **Data Connection:** Choose a data connection that you want and enter a valid path\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * **System Message** _(optional)_ : A background prompt for the model, e.g., `\"You are a helpful assistant.\"`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing required fields, click “Save” button. Depending on file size and model response time, generation may take a few minutes."
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