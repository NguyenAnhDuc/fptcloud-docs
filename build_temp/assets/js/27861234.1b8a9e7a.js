"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[36088],{

/***/ 855631
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ai_factory_billing_balance_md_278_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ai-factory-billing-balance-md-278.json
const site_docs_ai_factory_billing_balance_md_278_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ai-factory-billing/balance","title":"Balance","description":"*","source":"@site/docs/ai-factory-billing/balance.md","sourceDirName":"ai-factory-billing","slug":"/ai-factory-billing/balance","permalink":"/ai-factory-billing/balance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Balance","title":"Balance","source":"https://fptcloud.com/en/documents/ai-factory-billing/?doc=balance","parent":"https://fptcloud.com/en/documents/ai-factory-billing","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"How to add credits?","permalink":"/ai-factory-billing/add-credits"},"next":{"title":"How do we calculate billing?","permalink":"/ai-factory-billing/billing-calculation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ai-factory-billing/balance.md


const frontMatter = {
	sidebar_label: 'Balance',
	title: 'Balance',
	source: 'https://fptcloud.com/en/documents/ai-factory-billing/?doc=balance',
	parent: 'https://fptcloud.com/en/documents/ai-factory-billing',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Balance';

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
        id: "balance",
        children: "Balance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A balance is linked to a specific tenant and region."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Currently, we do not support a single balance across multiple regions or tenants."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you wish to use both the GPU H100 in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Vietnam"
        }), " and the GPU H200 in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Japan"
        }), " as infrastructure, you will need to create ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "separate tenants"
        }), " for each region.*"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Balance"
      }), " is the current available credits you can use for our service. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/07/image2025-6-28_21-29-54.png",
        alt: "Alt text"
      }), " It consists of two components:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top-up Balance"
        }), " : Credits purchased via payment methods such as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VNPAY"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Voucher Balance"
        }), " : Credits redeemed from a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "voucher code"
        }), " , typically provided by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FPT"
        }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "trials, proofs of concept (POCs), promotions"
        }), " , or other special programs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*", (0,jsx_runtime.jsx)(_components.em, {
        children: "Once you successfully sign in to the portals at ai.fptcloud.com (Vietnam region) or ai.fptcloud.jp (Japan region), a new tenant will be created automatically."
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Please note that tenants in these two regions are completely separate in terms of balance and service resources."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./low-balance-threshold-alert",
        children: " Next Low Balance Threshold Alert "
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