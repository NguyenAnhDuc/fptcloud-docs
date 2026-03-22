"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[2957],{

/***/ 979756
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_marketplace_fine_tune_with_lora_md_3e7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-marketplace-fine-tune-with-lora-md-3e7.json
const site_docs_ai_marketplace_fine_tune_with_lora_md_3e7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai_marketplace/fine-tune-with-lora","title":"Fine-tune with LoRA","description":"*","source":"@site/docs/ai_marketplace/fine-tune-with-lora.md","sourceDirName":"ai_marketplace","slug":"/ai_marketplace/fine-tune-with-lora","permalink":"/ai_marketplace/fine-tune-with-lora","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Fine-tune with LoRA","title":"Fine-tune with LoRA","source":"https://fptcloud.com/en/documents/ai_marketplace/?doc=fine-tune-with-lora","parent":"https://fptcloud.com/en/documents/ai_marketplace","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"FAQ","permalink":"/ai_marketplace/faq"},"next":{"title":"Home page","permalink":"/ai_marketplace/home-page"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai_marketplace/fine-tune-with-lora.md


const frontMatter = {
	sidebar_label: 'Fine-tune with LoRA',
	title: 'Fine-tune with LoRA',
	source: 'https://fptcloud.com/en/documents/ai_marketplace/?doc=fine-tune-with-lora',
	parent: 'https://fptcloud.com/en/documents/ai_marketplace',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Fine-tune with LoRA';

const assets = {

};



const toc = [{
  "value": "How to create a Fine-tuning job with LoRA?",
  "id": "how-to-create-a-fine-tuning-job-with-lora",
  "level": 3
}, {
  "value": "Notes",
  "id": "notes",
  "level": 4
}, {
  "value": "Steps",
  "id": "steps",
  "level": 4
}, {
  "value": "How to manage Fine-tuning jobs?",
  "id": "how-to-manage-fine-tuning-jobs",
  "level": 3
}, {
  "value": "Status badges",
  "id": "status-badges",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "fine-tune-with-lora",
        children: "Fine-tune with LoRA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-create-a-fine-tuning-job-with-lora",
      children: "How to create a Fine-tuning job with LoRA?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To fine-tune a model with LoRA, please follow the instructions below:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You must log in before starting a fine-tune job."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure you have enough balance (credit)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At least one base model must be available for fine-tuning."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * Validation: Required, max 100 characters, supports Unicode letters, digits, `-`, `_`, `.`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * Examples: `gemma-3-27b-it`, `Qwen3-4B-Instruct-2507`, `Llama-3.3-70B-Instruct`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["4. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Select dataset format"
      }), " from the dropdown list: Alpaca/ ShareGPT/ ShareGPT_Image"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * Supported formats: CSV, JSON, JSONL, ZIP, Parquet (<100MB). \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * **Learning rate:** Float, `1e-6 → 1e-4` (e.g., `0.00001`) \n * **Number of epochs:** Integer `1–20` (default = `5`) \n\n\n * The job will appear in the table with status **Running**. \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Fine-tuning with LoRA usually takes only a few minutes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-manage-fine-tuning-jobs",
      children: "How to manage Fine-tuning jobs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fine-tuning Jobs"
      }), " page, you can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "View detail:"
        }), " Open the pipeline detail in AI Studio."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy model:"
        }), " Once training is completed, deploy the LoRA model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cancel job:"
        }), " Cancel a running job (requires confirmation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete job:"
        }), " Permanently delete a job (requires confirmation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "status-badges",
      children: "Status badges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), " (yellow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Succeeded"
        }), " (green)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failed"
        }), " (red)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canceled"
        }), " (gray)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./playground",
        children: " Previous Playground "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./deployment-lora-inference",
        children: " Next Deployment (LoRA Inference) "
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