"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[99673],{

/***/ 114202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_fine_tune_the_gemma_3_27_b_instruct_model_for_financial_tasks_md_6fa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-fine-tune-the-gemma-3-27-b-instruct-model-for-financial-tasks-md-6fa.json
const site_docs_model_fine_tuning_fine_tune_the_gemma_3_27_b_instruct_model_for_financial_tasks_md_6fa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks","title":"Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks","description":"*","source":"@site/docs/model-fine-tuning/fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks","permalink":"/model-fine-tuning/fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks","title":"Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=fine-tune-the-gemma-3-27B-instruct-model-for-financial-tasks","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"FAQ","permalink":"/model-fine-tuning/faq"},"next":{"title":"Finish","permalink":"/model-fine-tuning/finish"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks.md


const frontMatter = {
	sidebar_label: 'Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks',
	title: 'Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=fine-tune-the-gemma-3-27B-instruct-model-for-financial-tasks',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks';

const assets = {

};



const toc = [{
  "value": "Introduction",
  "id": "introduction",
  "level": 3
}, {
  "value": "Step-by-Step: Fine-tuning with SFT",
  "id": "step-by-step-fine-tuning-with-sft",
  "level": 3
}, {
  "value": "1. Prepare your financial dataset",
  "id": "1-prepare-your-financial-dataset",
  "level": 4
}, {
  "value": "2. Access to Model Fine-tuning Portal and click Create New Pipeline",
  "id": "2-access-to-model-fine-tuning-portal-and-click-create-new-pipeline",
  "level": 4
}, {
  "value": "3. Start Pipeline",
  "id": "3-start-pipeline",
  "level": 4
}, {
  "value": "4. Monitor",
  "id": "4-monitor",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
        id: "fine-tune-the-gemma-3-27b-instruct-model-for-financial-tasks",
        children: "Fine-tune the Gemma-3-27B-Instruct model for FINANCIAL tasks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gemma-3-27B-Instruct"
      }), " is a high-performance, instruction-tuned model with multimodal capabilities (text+image), 128K token context window (ideal for long financial documents), strong reasoning and multilingual support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning it on financial datasets allows it to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Understand domain-specific terminology"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Answer complex financial questions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extract structured data from unstructured reports"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Generate summaries or insights from financial documents"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-fine-tuning-with-sft",
      children: "Step-by-Step: Fine-tuning with SFT"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-prepare-your-financial-dataset",
      children: "1. Prepare your financial dataset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recommended sources:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Financial QA datasets on Hugging Face."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Eg: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://huggingface.co/datasets/gbharti/finance-alpaca/blob/main/Cleaned_date.json",
              children: "https://huggingface.co/datasets/gbharti/finance-alpaca/blob/main/Cleaned_date.json"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Custom datasets from earning reports, financial news, or analyst commentary"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-access-to-model-fine-tuning-portal-and-click-create-new-pipeline",
      children: "2. Access to Model Fine-tuning Portal and click Create New Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Details:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Model source: Model Catalog"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Model name: google/gemma-3-27b-it"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trainer: SFT"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Volume: Managed volume"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Data format: Alpaca"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Training data: Upload 'Cleaned_data.json'"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evaluation data: None"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hyperparameters:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Batch size: 1"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Epochs: 3"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Gradient accumulation steps: 4"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Checkpoint steps: 500"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Logging steps: 10"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "..."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Infrastructure:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Node: 1"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Flavor: 8 x GPU NIVIDIA H100 SXM5 (128CPU - 1536GB RAM - 8xH100)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pipeline name: ft.pipeline_0251509140923"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-start-pipeline",
      children: "3. Start Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wait for your pipeline to initialize. This process usually takes around 15 minutes to finish."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-monitor",
      children: "4. Monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can monitor the progress in Model metrics, System metrics and Logs."
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