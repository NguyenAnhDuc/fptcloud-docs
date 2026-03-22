"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[27806],{

/***/ 285574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_what_is_model_fine_tuning_md_92b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-what-is-model-fine-tuning-md-92b.json
const site_docs_model_fine_tuning_what_is_model_fine_tuning_md_92b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/what-is-model-fine-tuning","title":"What is Model Fine-tuning?","description":"*","source":"@site/docs/model-fine-tuning/what-is-model-fine-tuning.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/what-is-model-fine-tuning","permalink":"/model-fine-tuning/what-is-model-fine-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"What is Model Fine-tuning?","title":"What is Model Fine-tuning?","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=what-is-model-fine-tuning","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"System Metrics","permalink":"/model-fine-tuning/system-metrics"},"next":{"title":"When to Use Model Fine-tuning?","permalink":"/model-fine-tuning/when-to-use-model-fine-tuning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/what-is-model-fine-tuning.md


const frontMatter = {
	sidebar_label: 'What is Model Fine-tuning?',
	title: 'What is Model Fine-tuning?',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=what-is-model-fine-tuning',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'What is Model Fine-tuning?';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "what-is-model-fine-tuning",
        children: "What is Model Fine-tuning?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fine-tuning is the process of training a base language model on a dataset to perform better in a specific domain or for a target use case. By leveraging the foundational knowledge already embedded in the model, fine-tuning allows the model to specialize in tasks ", (0,jsx_runtime.jsx)(_components.em, {
        children: "like customer support automation, medical text classification, or legal document summarization"
      }), ".This approach significantly reduces the time and resources needed compared to training a model scratch, while still delivering high accuracy and relevance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To meet this growing demand, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Fine-tuning"
      }), " is built by FPT Smart Cloud to be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "user-friendly"
      }), " , enabling AI customization through a simple interface on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT AI Factory Portal"
      }), ". Users can upload their dataset, configure training hyperparameters, and set up infrastructure - all within a few clicks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/Model-Fine-tuning-Overview.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thanks to this streamlined approach, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Fine-tuning"
      }), " empowers organizations to unlock the full potential of AI, delivering smarter, faster, and more accurate solutions tailored to their unique business needs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./overview",
        children: " Previous Overview "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./when-to-use-model-fine-tuning",
        children: " Next When to Use Model Fine-tuning? "
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