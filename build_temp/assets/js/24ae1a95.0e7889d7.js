"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10155],{

/***/ 361835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_step_by_step_md_24a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-step-by-step-md-24a.json
const site_docs_model_fine_tuning_step_by_step_md_24a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/step-by-step","title":"Step-by-Step","description":"*","source":"@site/docs/model-fine-tuning/step-by-step.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/step-by-step","permalink":"/model-fine-tuning/step-by-step","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Step-by-Step","title":"Step-by-Step","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=step-by-step","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Start Pipeline","permalink":"/model-fine-tuning/start-pipeline"},"next":{"title":"Summary","permalink":"/model-fine-tuning/summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/step-by-step.md


const frontMatter = {
	sidebar_label: 'Step-by-Step',
	title: 'Step-by-Step',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=step-by-step',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Step-by-Step';

const assets = {

};



const toc = [{
  "value": "Step 1: Add credit to account",
  "id": "step-1-add-credit-to-account",
  "level": 3
}, {
  "value": "Step 2: Create pipeline",
  "id": "step-2-create-pipeline",
  "level": 3
}, {
  "value": "Step 3: Manage pipeline",
  "id": "step-3-manage-pipeline",
  "level": 3
}, {
  "value": "Step 4: Monitor and Evaluate",
  "id": "step-4-monitor-and-evaluate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
        id: "step-by-step",
        children: "Step-by-Step"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After signing in to the FPT AI Factory Portal at at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ai.fptcloud.com/",
        children: "https://ai.fptcloud.com/"
      }), " or ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ai.fptcloud.jp/",
        children: "https://ai.fptcloud.jp/"
      }), ", follow the instruction below:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-add-credit-to-account",
      children: "Step 1: Add credit to account"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Billing"
        }), " in the Sidemenu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Credit"
        }), " button and enter an amount and payment information to complete. Or, if you have a voucher from FPT, apply your valid code in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Voucher code"
        }), " to redeem credits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the details guide here: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/en/documents/ai-factory-billing/?doc=billing-calculation",
          children: "https://fptcloud.com/en/documents/ai-factory-billing/?doc=billing-calculation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["To start a fine-tuning job, you must maintain a minimum balance = ", (0,jsx_runtime.jsx)(_components.em, {
              children: "number of nodes × number of GPUs × cost per block."
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If your balance falls below 0, the fine-tuning job will be canceled. After topping up, you will need to restart the job from the beginning."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-create-pipeline",
      children: "Step 2: Create pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model Fine-tuning"
          }), " in the Sidemenu"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the button ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create New Pipeline"
          }), " and configure pipeline deployment."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Follow the detailed guide here: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=create-pipeline",
            children: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=create-pipeline"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-manage-pipeline",
      children: "Step 3: Manage pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The pipeline list created successfully, displays the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fine-tuning Pipelines"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Actions"
          }), " column, you can ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "start"
          }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cancel"
          }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "edit"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "delete pipelines"
          }), " to manage effectively."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pipeline name"
          }), " to access ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution history"
          }), " page, and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution name"
          }), " to access ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution details"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Access ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution history"
          }), " , navigate to tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Audit logs"
          }), " to view users and activities in the pipeline."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Follow the detailed guide here: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=manage-pipeline",
            children: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=manage-pipeline"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-monitor-and-evaluate",
      children: "Step 4: Monitor and Evaluate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Access ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution details"
          }), " , navigate to tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model Metrics"
          }), " to monitor during the fine-tuning process and evaluate model after this process."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Logs"
          }), " to track fine-tuning processes, events, and system outputs in real time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Follow the detailed guide here: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=monitor-and-evaluate",
            children: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=monitor-and-evaluate"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./sign-up-for-an-account",
        children: " Previous Sign up for an Account "
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