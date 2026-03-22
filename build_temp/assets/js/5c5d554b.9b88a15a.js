"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[76876],{

/***/ 388355
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_billing_overview_md_5c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-billing-overview-md-5c5.json
const site_docs_gpu_container_billing_overview_md_5c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/billing-overview","title":"Overview","description":"*","source":"@site/docs/gpu-container/billing-overview.md","sourceDirName":"gpu-container","slug":"/gpu-container/billing-overview","permalink":"/gpu-container/billing-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Billing Overview","title":"Overview","source":"https://fptcloud.com/en/documents/gpu-container/?doc=billing-overview","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Add Credits To Account","permalink":"/gpu-container/add-credit"},"next":{"title":"Billing","permalink":"/gpu-container/billing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/billing-overview.md


const frontMatter = {
	sidebar_label: 'Billing Overview',
	title: 'Overview',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=billing-overview',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Overview';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "1. Payment Requirement:",
  "id": "1-payment-requirement",
  "level": 3
}, {
  "value": "2. Regional Websites &amp; Tenants:",
  "id": "2-regional-websites--tenants",
  "level": 3
}, {
  "value": "3. Payment Method:",
  "id": "3-payment-method",
  "level": 3
}, {
  "value": "4. Price Breakdown:",
  "id": "4-price-breakdown",
  "level": 3
}, {
  "value": "Billing History",
  "id": "billing-history",
  "level": 2
}, {
  "value": "Low Balance",
  "id": "low-balance",
  "level": 2
}, {
  "value": "Negative Balance",
  "id": "negative-balance",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "overview",
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-payment-requirement",
      children: "1. Payment Requirement:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You need to make a payment to purchase credits before using AI Factory services. Please note that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your balance is a shared one"
      }), " used to pay for all services of AI Factory, not just GPU Container. After successfully purchasing credits, the number of credits will be displayed on Tenant balance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-regional-websites--tenants",
      children: "2. Regional Websites & Tenants:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
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
      children: ["*", (0,jsx_runtime.jsx)(_components.em, {
        children: "Once you successfully sign in to the portals at ai.fptcloud.com (Vietnam region) or ai.fptcloud.jp (Japan region), a new tenant will be created automatically."
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Please note that tenants in these two regions are completely separate in terms of balance and service resources."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-payment-method",
      children: "3. Payment Method:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We currently support online payment through Stripe (available with all types of currencies) and VNPay (only available when payment is made in Vietnamese dong). We do not store or process your credit card numbers, they are passed directly to Stripe and VNPay."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-price-breakdown",
      children: "4. Price Breakdown:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every container has an hourly cost based on GPU Instance. There are separate prices and charges for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU instance cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persistent storage costs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You are charged the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU instance cost for every second"
      }), " your container is in the running state. You are charged the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "persistent storage cost (which depends on the size of your storage allocation) for every single second"
      }), " your container exists, even if the container is stopped. Temporary storage is free now."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "billing-history",
      children: "Billing History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can get a detailed document of your billing history by clicking \"Credit History\" within the Billing page of the console. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/credit-history.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "low-balance",
      children: "Low Balance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When your account balance is lower than the estimated total cost of using the container for 1 hour, some actions may be limited such as Create Container, Create Storage Volume, Start Container and Restart Container. You will also receive notification from the system to add credits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "negative-balance",
      children: "Negative Balance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Whenever your balance reaches zero or below, your container will be stopped automatically but not destroyed immediately. Data on temporary storage will be deleted and cannot be recovered. Since the data on the persistent storage is still available, you are still billed for persistent storage on stopped container."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your balance is negative for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "7 consecutive days"
      }), " , we will delete the container and all data will be permanently deleted. Please plan accordingly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./payment-model",
        children: " Next Payment Model "
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