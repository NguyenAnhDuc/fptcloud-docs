"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7961],{

/***/ 683892
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_fpt_ai_factory_solution_md_60e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-fpt-ai-factory-solution-md-60e.json
const site_docs_model_fine_tuning_fpt_ai_factory_solution_md_60e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/fpt-ai-factory-solution","title":"FPT AI Factory Solution","description":"*","source":"@site/docs/model-fine-tuning/fpt-ai-factory-solution.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/fpt-ai-factory-solution","permalink":"/model-fine-tuning/fpt-ai-factory-solution","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FPT AI Factory Solution","title":"FPT AI Factory Solution","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=fpt-ai-factory-solution","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Finish","permalink":"/model-fine-tuning/finish"},"next":{"title":"How to Create Pipeline?","permalink":"/model-fine-tuning/how-to-create-pipeline"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/fpt-ai-factory-solution.md


const frontMatter = {
	sidebar_label: 'FPT AI Factory Solution',
	title: 'FPT AI Factory Solution',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=fpt-ai-factory-solution',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'FPT AI Factory Solution';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "fpt-ai-factory-solution",
        children: "FPT AI Factory Solution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JAIST's ambitious project to build a premier Japanese LLM required a partner that could provide not just raw computing power, but also a sophisticated platform to manage the entire model development lifecycle. FPT AI Factory, with its integrated FPT AI Studio and FPT AI Inference services, provided the end-to-end solution JAIST needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Discovery"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The collaboration began with a systematic search for the most effective training data combination. Using FPT AI Studio, JAIST’s researchers trained the Qwen3-0.6B model across 768 unique training data combinations, equivalent to 768 separate training runs. This critical phase was also accelerated by utilizing FPT AI Inference’s embedding models to analyze and classify text domains within the mixed training data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Training phases"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the ideal data combination was identified, JAIST embarked on a massive continual pre-training effort using the Qwen2.5-32B as the base model. This process was broken down into three distinct, computationally intensive phases, all managed within FPT AI Studio:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 1:"
        }), " The base model was trained on a 100B tokens dataset, utilizing a powerful cluster of 30 nodes, each equipped with 8 NVIDIA H100 GPUs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 2:"
        }), " The training was scaled up significantly, with the model learning from a 267B tokens dataset running on 29 nodes. We promptly detected a faulty node and proceeded to isolate it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 3:"
        }), " The final phase involved a 273B tokens dataset. This dataset included the 267B tokens from the previous phase, augmented with new instruction data generated by the Qwen3-235B-A22B model, a task facilitated by FPT AI Inference services. This phase reused a 30-node H100 GPU cluster for training."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Throughout this complex process, FPT AI Factory's engineers provided close, dedicated support, ensuring the seamless execution of these large-scale training jobs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluation"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For evaluation, JAIST utilized the full capabilities of FPT AI Studio. The continually pretrained models underwent ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LoRA fine-tuning"
      }), " and were rigorously benchmarked against the Nejumi Leaderboard 3 using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Jobs"
      }), " feature. Furthermore, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interactive Session"
      }), " feature allowed JAIST researchers to serve the fine-tuned models and conduct their own internal, custom benchmarks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./challenges",
        children: " Previous Challenges "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./business-impact",
        children: " Next Business Impact  "
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