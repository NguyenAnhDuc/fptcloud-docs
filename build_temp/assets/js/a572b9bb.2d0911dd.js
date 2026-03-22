"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[50833],{

/***/ 101715
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_vllm_use_case_md_a57_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-vllm-use-case-md-a57.json
const site_docs_gpu_container_vllm_use_case_md_a57_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/vllm-use-case","title":"Deploy model by using vLLM","description":"*","source":"@site/docs/gpu-container/vllm-use-case.md","sourceDirName":"gpu-container","slug":"/gpu-container/vllm-use-case","permalink":"/gpu-container/vllm-use-case","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Deploy model by using vLLM","title":"Deploy model by using vLLM","source":"https://fptcloud.com/en/documents/gpu-container/?doc=vllm-use-case","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Ubuntu Use Cases","permalink":"/gpu-container/ubuntu-use-cases"},"next":{"title":"Deploy model GPT-OSS by using vLLM v0.10.0","permalink":"/gpu-container/vllm-use-cases-gpt-oss"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/vllm-use-case.md


const frontMatter = {
	sidebar_label: 'Deploy model by using vLLM',
	title: 'Deploy model by using vLLM',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=vllm-use-case',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Deploy model by using vLLM';

const assets = {

};



const toc = [{
  "value": "Step 1: Create a GPU Container using vllm-openai template",
  "id": "step-1-create-a-gpu-container-using-vllm-openai-template",
  "level": 2
}, {
  "value": "Step 2: Testing using Postman. Use your API_Token added in Step 1 to authorize",
  "id": "step-2-testing-using-postman-use-your-api_token-added-in-step-1-to-authorize",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "deploy-model-by-using-vllm",
        children: "Deploy model by using vLLM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-create-a-gpu-container-using-vllm-openai-template",
      children: "Step 1: Create a GPU Container using vllm-openai template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the Environment Variables field, customize the value to match the API key (use for inferencing request) and your Hugging Face token to download model from Hugging Face."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this tutorial, we are using Deepseek-R1-Distill-Qwen-1.5B. Please replace the value of MODEL with any other model you prefer for inference. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/vllm1.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please remember to replace the value of your Hugging Face token into the HF_TOKEN field."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/vllm2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/Screenshot-2025-05-29-at-09.08.47.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-testing-using-postman-use-your-api_token-added-in-step-1-to-authorize",
      children: "Step 2: Testing using Postman. Use your API_Token added in Step 1 to authorize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{HTTP Endpoint}/v1/completions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/Screenshot-2025-05-29-at-09.05.23.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./vllm-use-cases",
        children: " Previous vLLM Use Cases "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./vllm-use-cases-gpt-oss",
        children: " Next Deploy model GPT-OSS by using vLLM v0.10.0 "
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