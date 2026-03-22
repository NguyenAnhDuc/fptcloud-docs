"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67263],{

/***/ 336119
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_factory_billing_model_finetuning_billing_md_a7d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-factory-billing-model-finetuning-billing-md-a7d.json
const site_docs_ai_factory_billing_model_finetuning_billing_md_a7d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai-factory-billing/model-finetuning-billing","title":"Model Finetuning Billing","description":"*","source":"@site/docs/ai-factory-billing/model-finetuning-billing.md","sourceDirName":"ai-factory-billing","slug":"/ai-factory-billing/model-finetuning-billing","permalink":"/ai-factory-billing/model-finetuning-billing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Model Finetuning Billing","title":"Model Finetuning Billing","source":"https://fptcloud.com/en/documents/ai-factory-billing/?doc=model-finetuning-billing","parent":"https://fptcloud.com/en/documents/ai-factory-billing","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"MODAS Billing","permalink":"/ai-factory-billing/modas-billing"},"next":{"title":"Model Hub Billing","permalink":"/ai-factory-billing/model-hub-billing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai-factory-billing/model-finetuning-billing.md


const frontMatter = {
	sidebar_label: 'Model Finetuning Billing',
	title: 'Model Finetuning Billing',
	source: 'https://fptcloud.com/en/documents/ai-factory-billing/?doc=model-finetuning-billing',
	parent: 'https://fptcloud.com/en/documents/ai-factory-billing',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Model Finetuning Billing';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "model-finetuning-billing",
        children: "Model Finetuning Billing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Billing Logic"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Minimum billable usage"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time to charge"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- Based on the usage duration of a pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- Remaining unbilled usage will be rounded up to the nearest 15 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usage ≥ 1/4 GPU-hour"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Billing Equation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usage duration"
        }), " : Calculated in GPU-hours (rounded up to the nearest 15-minute increment)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU"
        }), " : Number of GPUs used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost"
        }), " : ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Usage time (hours) × GPU count × item price from pricing table"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1 GPU NVIDIA H100 SXM5"
        }), " priced at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$5.5/GPU-hour"
        }), " to train model Qwen/Qwen3-32B for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "8 minutes"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Usage duration: 8 mins → rounded up to 15 mins (0.25 GPU-hour)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU: 1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cost: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$5.5 × 1 GPU × 0.25 GPU-hour = $1.375"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./model-hub-billing",
        children: " Previous Model Hub Billing  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./modas-billing",
        children: " Next MODAS Billing "
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