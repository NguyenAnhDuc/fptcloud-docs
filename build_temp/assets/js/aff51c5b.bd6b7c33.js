"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[8032],{

/***/ 533759
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_notebook_faq_md_aff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-notebook-faq-md-aff.json
const site_docs_ai_notebook_faq_md_aff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai-notebook/faq","title":"FAQ","description":"*","source":"@site/docs/ai-notebook/faq.md","sourceDirName":"ai-notebook","slug":"/ai-notebook/faq","permalink":"/ai-notebook/faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FAQ","title":"FAQ","source":"https://fptcloud.com/en/documents/ai-notebook/?doc=faq","parent":"https://fptcloud.com/en/documents/ai-notebook","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"How to create a Notebook?","permalink":"/ai-notebook/create-notebook"},"next":{"title":"AI Notebook","permalink":"/ai-notebook/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai-notebook/faq.md


const frontMatter = {
	sidebar_label: 'FAQ',
	title: 'FAQ',
	source: 'https://fptcloud.com/en/documents/ai-notebook/?doc=faq',
	parent: 'https://fptcloud.com/en/documents/ai-notebook',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'FAQ';

const assets = {

};



const toc = [{
  "value": "What are the idle rules in AI Notebook?",
  "id": "what-are-the-idle-rules-in-ai-notebook",
  "level": 2
}, {
  "value": "How long does it take to start CPU and GPU flavors?",
  "id": "how-long-does-it-take-to-start-cpu-and-gpu-flavors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
    h2: "h2",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-are-the-idle-rules-in-ai-notebook",
      children: "What are the idle rules in AI Notebook?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To help you save resources and avoid unexpected charges, AI Notebook automatically manages idle sessions. The following rules apply:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU Kernel Idle Timeout:"
        }), " A GPU kernel is considered idle after 30 minutes of no activity (no code execution). When this happens, the kernel will be automatically disconnected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lab Idle Timeout:"
        }), " The lab environment is considered idle after 1 hour of no user interaction (no typing, clicking, or switching tabs). Once idle, the lab will be automatically deleted to free up resources."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Safety:"
        }), " If your lab is deleted due to idleness, all saved files remain securely stored in persistent storage and can be accessed later.Remember to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "save your files"
        }), " before closing the browser to ensure that no unsaved work is lost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-long-does-it-take-to-start-cpu-and-gpu-flavors",
      children: "How long does it take to start CPU and GPU flavors?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU Flavor:"
        }), " Startup typically takes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "45 seconds to 1 minute"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU Flavor:"
        }), " Startup typically takes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "around 15 seconds"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Actual startup time may vary depending on system load and network conditions."
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