"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[50637],{

/***/ 268282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_notebook_about_ai_notebooks_md_e3b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-notebook-about-ai-notebooks-md-e3b.json
const site_docs_ai_notebook_about_ai_notebooks_md_e3b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai-notebook/about-ai-notebooks","title":"Overview","description":"*","source":"@site/docs/ai-notebook/about-ai-notebooks.md","sourceDirName":"ai-notebook","slug":"/ai-notebook/about-ai-notebooks","permalink":"/ai-notebook/about-ai-notebooks","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"About Ai Notebooks","title":"Overview","source":"https://fptcloud.com/en/documents/ai-notebook/?doc=about-ai-notebooks","parent":"https://fptcloud.com/en/documents/ai-notebook","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Xoa model","permalink":"/model-hub/xoa-model"},"next":{"title":"How to connect Notebook to a new/existing Kernel?","permalink":"/ai-notebook/connect-switch-kernel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai-notebook/about-ai-notebooks.md


const frontMatter = {
	sidebar_label: 'About Ai Notebooks',
	title: 'Overview',
	source: 'https://fptcloud.com/en/documents/ai-notebook/?doc=about-ai-notebooks',
	parent: 'https://fptcloud.com/en/documents/ai-notebook',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Overview';

const assets = {

};



const toc = [{
  "value": "What is AI Notebooks?",
  "id": "what-is-ai-notebooks",
  "level": 2
}, {
  "value": "How does it work?",
  "id": "how-does-it-work",
  "level": 2
}, {
  "value": "Why AI Notebooks?",
  "id": "why-ai-notebooks",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "overview",
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-is-ai-notebooks",
      children: "What is AI Notebooks?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI Notebooks is a Jupyter-based development environment running on FPT’s AI Factory infrastructure. With one click, you can launch a pre-configured notebook server with GPU/CPU resources and persistent storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-does-it-work",
      children: "How does it work?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each AI Notebook runs in an isolated, containerized environment connected to FPT’s GPU/CPU infrastructure. JupyterLab is used as the main interface for writing, running, and visualizing code in the browser."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-ai-notebooks",
      children: "Why AI Notebooks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1-Click Deployment:"
        }), " Launch a ready-to-use environment without manual setup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU-Accelerated:"
        }), " Use NVIDIA H100 (80GB VRAM) for compute-intensive training and inference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistent Workspace:"
        }), " Store datasets, models, and experiments that remain available across sessions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Granular Pricing:"
        }), " Resources are billed based on actual usage (CPU, GPU, storage)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./quick-start",
        children: " Next Quick Start "
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