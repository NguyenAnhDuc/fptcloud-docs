"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79800],{

/***/ 406981
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_serving_initial_set_up_md_1d2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-serving-initial-set-up-md-1d2.json
const site_docs_model_serving_initial_set_up_md_1d2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-serving/initial-set-up","title":"Initial Setup","description":"*","source":"@site/docs/model-serving/initial-set-up.md","sourceDirName":"model-serving","slug":"/model-serving/initial-set-up","permalink":"/model-serving/initial-set-up","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Initial Setup","title":"Initial Setup","source":"https://fptcloud.com/en/documents/model-serving/?doc=initial-set-up","parent":"https://fptcloud.com/en/documents/model-serving","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Model Serving","permalink":"/model-serving/"},"next":{"title":"Status and Actions for a Deployment","permalink":"/model-serving/status-actions-deployment"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-serving/initial-set-up.md


const frontMatter = {
	sidebar_label: 'Initial Setup',
	title: 'Initial Setup',
	source: 'https://fptcloud.com/en/documents/model-serving/?doc=initial-set-up',
	parent: 'https://fptcloud.com/en/documents/model-serving',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Initial Setup';

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
        id: "initial-setup",
        children: "Initial Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "If this is your first time using FPT Model Serving, first check and complete the following tasks:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To begin using FPT Model Serving, you need to log in to FPT Portal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Please visit ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "https://console.fptcloud.com"
      }), " com and log in with the FPT Cloud account and password that have been provided. Make sure to select the correct Tenant, Region, and VPC to use the service."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you do not have an FPT Cloud account yet, visit the homepage at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "https://fptcloud.com/ "
      }), " Then select the \"Sign Up\" function and enter the information as instructed by the system. Our support team will contact you shortly to verify the details and create your account."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter any issues during the process, please contact our Support team for assistance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After successfully logging into console.fptcloud.com, the user goes to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Platform"
      }), " section, selects ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Service"
      }), " , and clicks ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/4.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To use Model Serving, a Kubernetes Cluster is required to provide processing power for AI Models."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users can initialize a Managed FPT Kubernetes Engine Cluster (for CPU-based serving) following the instructions here: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "https://fptcloud.com/documents/managed-fpt-kubernetes-engine/ "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively, users can initialize an FPT Kubernetes Engine Cluster with GPU (for GPU-based serving) following the instructions here: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "https://fptcloud.com/documents/fpt-kubernetes-engine-with-gpu/ "
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./create-a-new-model-serving-deployment",
        children: " Next Create a New Model Serving Deployment "
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