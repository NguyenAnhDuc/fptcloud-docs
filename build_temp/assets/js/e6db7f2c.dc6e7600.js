"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89874],{

/***/ 791890
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kafka_initial_setup_md_e6d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kafka-initial-setup-md-e6d.json
const site_docs_fpt_kafka_initial_setup_md_e6d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kafka/initial-setup","title":"Initial Setup","description":"*","source":"@site/docs/fpt-kafka/initial-setup.md","sourceDirName":"fpt-kafka","slug":"/fpt-kafka/initial-setup","permalink":"/fpt-kafka/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Initial Setup","title":"Initial Setup","source":"https://fptcloud.com/en/documents/fpt-kafka/?doc=initial-setup","parent":"https://fptcloud.com/en/documents/fpt-kafka","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"FPT Kafka","permalink":"/fpt-kafka/"},"next":{"title":"Manage ACLs","permalink":"/fpt-kafka/manage-acls"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kafka/initial-setup.md


const frontMatter = {
	sidebar_label: 'Initial Setup',
	title: 'Initial Setup',
	source: 'https://fptcloud.com/en/documents/fpt-kafka/?doc=initial-setup',
	parent: 'https://fptcloud.com/en/documents/fpt-kafka',
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
        id: "initial-setup",
        children: "Initial Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If this is the first time you use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT CMS"
      }), " service, first, double-check that you have completed the following steps:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create a FPT Cloud account and log in to the FPT Cloud Portal."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After that is finished, you can proceed to use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka"
      }), " service on FPT Cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To register for an FPT Cloud account, navigate to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com",
        children: "FPT Cloud Portal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then, click on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign Up"
      }), " button at the bottom of the page and follow the instructions to create an account. Customer support will contact you shortly to verify your information to create your account."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To log in to the FPT Cloud Portal, navigate to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com",
        children: "FPT Cloud Portal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then, enter your email and password and click on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign In"
      }), " button. After that, choose the correct Tenant, Region, and VPC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter any errors during the process, please do not hesitate to contact our Support department for immediate assistance."
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