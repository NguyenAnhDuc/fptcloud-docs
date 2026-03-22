"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[25688],{

/***/ 129577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_marketplace_faq_md_cdb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-marketplace-faq-md-cdb.json
const site_docs_ai_marketplace_faq_md_cdb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai_marketplace/faq","title":"FAQ","description":"*","source":"@site/docs/ai_marketplace/faq.md","sourceDirName":"ai_marketplace","slug":"/ai_marketplace/faq","permalink":"/ai_marketplace/faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FAQ","title":"FAQ","source":"https://fptcloud.com/en/documents/ai_marketplace/?doc=FAQ","parent":"https://fptcloud.com/en/documents/ai_marketplace","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Deprecated Models","permalink":"/ai_marketplace/deprecated-models"},"next":{"title":"Fine-tune with LoRA","permalink":"/ai_marketplace/fine-tune-with-lora"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai_marketplace/faq.md


const frontMatter = {
	sidebar_label: 'FAQ',
	title: 'FAQ',
	source: 'https://fptcloud.com/en/documents/ai_marketplace/?doc=FAQ',
	parent: 'https://fptcloud.com/en/documents/ai_marketplace',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'FAQ';

const assets = {

};



const toc = [{
  "value": "1. How can I create an API Key and use it with models?",
  "id": "1-how-can-i-create-an-api-key-and-use-it-with-models",
  "level": 3
}, {
  "value": "2. How is model usage pricing calculated?",
  "id": "2-how-is-model-usage-pricing-calculated",
  "level": 3
}, {
  "value": "3. What are the rate limits for model usage?",
  "id": "3-what-are-the-rate-limits-for-model-usage",
  "level": 3
}, {
  "value": "4. Does the Marketplace support autoscaling for model endpoints?",
  "id": "4-does-the-marketplace-support-autoscaling-for-model-endpoints",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    em: "em",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
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
      id: "1-how-can-i-create-an-api-key-and-use-it-with-models",
      children: "1. How can I create an API Key and use it with models?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can create an API Key under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "My Account → My API Keys"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nThis key will be required to call models via the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference API"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-how-is-model-usage-pricing-calculated",
      children: "2. How is model usage pricing calculated?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pricing is based on the number of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "input and output tokens"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nYou can check details under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Information → Pricing"
      }), " or in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Billing Management"
      }), " inside ", (0,jsx_runtime.jsx)(_components.em, {
        children: "My Account"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-what-are-the-rate-limits-for-model-usage",
      children: "3. What are the rate limits for model usage?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each model has its own ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate Limit"
      }), " (e.g., requests per second or tokens per second).", (0,jsx_runtime.jsx)(_components.br, {}), "\nYou can view this information in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Information → Rate Limit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-does-the-marketplace-support-autoscaling-for-model-endpoints",
      children: "4. Does the Marketplace support autoscaling for model endpoints?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. Endpoints can be configured with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "autoscaling"
      }), " based on traffic load,", (0,jsx_runtime.jsx)(_components.br, {}), "\noptimizing costs while maintaining stability during traffic spikes."]
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