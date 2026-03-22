"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[55887],{

/***/ 188419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_faq_md_670_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-faq-md-670.json
const site_docs_model_fine_tuning_faq_md_670_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/faq","title":"FAQ","description":"*","source":"@site/docs/model-fine-tuning/faq.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/faq","permalink":"/model-fine-tuning/faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FAQ","title":"FAQ","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=faq","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Execution History","permalink":"/model-fine-tuning/execution-history"},"next":{"title":"Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks","permalink":"/model-fine-tuning/fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/faq.md


const frontMatter = {
	sidebar_label: 'FAQ',
	title: 'FAQ',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=faq',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'FAQ';

const assets = {

};



const toc = [{
  "value": "1. What is Model Fine-tuning?",
  "id": "1-what-is-model-fine-tuning",
  "level": 3
}, {
  "value": "2. Which model should I choose for fine-tuning?",
  "id": "2-which-model-should-i-choose-for-fine-tuning",
  "level": 3
}, {
  "value": "3. How long does fine-tuning take?",
  "id": "3-how-long-does-fine-tuning-take",
  "level": 3
}, {
  "value": "4. What do your need to prepare before fine-tuning a model?",
  "id": "4-what-do-your-need-to-prepare-before-fine-tuning-a-model",
  "level": 3
}, {
  "value": "5. How many GPUs do you need to fine-tune a model?",
  "id": "5-how-many-gpus-do-you-need-to-fine-tune-a-model",
  "level": 3
}, {
  "value": "6. Do I need multiple nodes or just one node?",
  "id": "6-do-i-need-multiple-nodes-or-just-one-node",
  "level": 3
}, {
  "value": "7. What is the minimum GPU memory required?",
  "id": "7-what-is-the-minimum-gpu-memory-required",
  "level": 3
}, {
  "value": "8. Does the size of my training dataset affect hardware needs?",
  "id": "8-does-the-size-of-my-training-dataset-affect-hardware-needs",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "faq",
        children: "FAQ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-what-is-model-fine-tuning",
      children: "1. What is Model Fine-tuning?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model Fine-tuning is the process of retraining a base language model on a specialized dataset so that it performs better in a specific domain or for a targeted use case."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-which-model-should-i-choose-for-fine-tuning",
      children: "2. Which model should I choose for fine-tuning?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Small models (<=1B parameters) --> for testing or light workloads"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Medium models (7B-13B) --> balanced performance and cost"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Large models (30B+) --> for complex tasks, usually requires multi-node setup"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instruction-tuned models are preferred if your task is prompt-response based"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-how-long-does-fine-tuning-take",
      children: "3. How long does fine-tuning take?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It depends on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Model size (a few hours for small models, several days for very large ones)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dataset size"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Your hardware setup (hyperparameters & infrastructure)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typically, it ranges from a few hours to several days."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-what-do-your-need-to-prepare-before-fine-tuning-a-model",
      children: "4. What do your need to prepare before fine-tuning a model?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You'll need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Strictly follow the expected dataset structure for the model you're fine-tuning. More details about Data sample, visit here: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=select-dataset-format",
            children: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=select-dataset-format"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Clean, diverse, and non-duplicated data."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A clear objective for fine-tuning (e.g., tech support, customer service, content writing, etc.)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-how-many-gpus-do-you-need-to-fine-tune-a-model",
      children: "5. How many GPUs do you need to fine-tune a model?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It depends on the model size:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "<1B parameters: 1 GPU (24 GB VRAM) is sufficient"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "7B models: 2-4 GPUs (40 GB VRAM each)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "13B models: 4-8 GPUs recommended"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "30B+ models: Requires 8+ GPUs and multi-node setup"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-do-i-need-multiple-nodes-or-just-one-node",
      children: "6. Do I need multiple nodes or just one node?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For small to medium models (up to 13B), a single node with multiple GPUs is enough."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For larger models (30B+), multi-node setups are recommended for better memory and performance."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-what-is-the-minimum-gpu-memory-required",
      children: "7. What is the minimum GPU memory required?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["At least ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "24GB VRAM per GPU"
          }), " for standard fine-tuning"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Without ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "LoRA/QLoRA methods"
          }), " , you can fine-tune on GPUs with 8-16GB VRAM"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-does-the-size-of-my-training-dataset-affect-hardware-needs",
      children: "8. Does the size of my training dataset affect hardware needs?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. Larger datasets require more VRAM, RAM, and storage."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Datasets < 20GB --> can use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Managed volume"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Datasets > 20GB --> require ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dedicated network volume"
          })]
        }), "\n"]
      }), "\n"]
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