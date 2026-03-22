"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[69322],{

/***/ 492882
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_vllm_use_cases_gpt_oss_md_471_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-vllm-use-cases-gpt-oss-md-471.json
const site_docs_gpu_container_vllm_use_cases_gpt_oss_md_471_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/vllm-use-cases-gpt-oss","title":"Deploy model GPT-OSS by using vLLM v0.10.0","description":"*","source":"@site/docs/gpu-container/vllm-use-cases-gpt-oss.md","sourceDirName":"gpu-container","slug":"/gpu-container/vllm-use-cases-gpt-oss","permalink":"/gpu-container/vllm-use-cases-gpt-oss","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Deploy model GPT-OSS by using vLLM v0.10.0","title":"Deploy model GPT-OSS by using vLLM v0.10.0","source":"https://fptcloud.com/en/documents/gpu-container/?doc=vllm-use-cases-gpt-oss","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Deploy model by using vLLM","permalink":"/gpu-container/vllm-use-case"},"next":{"title":"vLLM Use Cases","permalink":"/gpu-container/vllm-use-cases"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/vllm-use-cases-gpt-oss.md


const frontMatter = {
	sidebar_label: 'Deploy model GPT-OSS by using vLLM v0.10.0',
	title: 'Deploy model GPT-OSS by using vLLM v0.10.0',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=vllm-use-cases-gpt-oss',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Deploy model GPT-OSS by using vLLM v0.10.0';

const assets = {

};



const toc = [{
  "value": "Introduction",
  "id": "introduction",
  "level": 3
}, {
  "value": "Step 1: Deploy a container with vLLM v0.10.1 template",
  "id": "step-1-deploy-a-container-with-vllm-v0101-template",
  "level": 3
}, {
  "value": "Step 2: Sending a Run request",
  "id": "step-2-sending-a-run-request",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "deploy-model-gpt-oss-by-using-vllm-v0100",
        children: "Deploy model GPT-OSS by using vLLM v0.10.0"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPT-OSS is the latest open-weight model series of OpenAI, designed for powerful reasoning, agentic tasks, and versatile developer use cases. Required:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "openai/gpt-oss-20b"
          }), " : for lower latency, and local or specialized use cases"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The smaller model"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only requires about 16GB of VRAM"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "openai/gpt-oss-120b"
          }), " : recommend for production, general purpose, high reasoning use cases"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Our larger full-sized model"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Best with ≥60GB VRAM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can fit on a single H100 or multi-GPU setups"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-deploy-a-container-with-vllm-v0101-template",
      children: "Step 1: Deploy a container with vLLM v0.10.1 template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep all the other settings on their defaults if you want to serve openai/gpt-oss-20b. Change model if you want to serve openai/gpt-oss-120b."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wait for your container to initialize. This process usually takes around 15 minutes to download the gpt-oss-20b model and up to 2 hours for the gpt-oss-120b model. You can monitor the progress in the Container Logs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/09/logs-1.jpg",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the logs stop at a line similar to ( Red box in the screenshot)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Using model weights format [*.safetensors]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This means the model is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "still downloading or initializing"
      }), " , and the endpoint is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not yet ready"
      }), " to receive requests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model is considered fully loaded and ready to serve only when you see all checkpoint shards completed, like this ( Yellow box in the screenshot)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Loading safetensors checkpoint shards: 100% Completed [3/3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This indicates that all model files have been successfully loaded."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-sending-a-run-request",
      children: "Step 2: Sending a Run request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After your container is running and the model is downloaded, you can send a run request to test the setup."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "curl -X 'GET' \\ \n  '{your endpoint}/v1/models' \\  -H 'accept: application/json'.fptcloud.com/v1/models' \\ \n  -H 'accept: application/json'\n\n\n\n\ncurl -X 'POST' \\ \n  '{your endpoint}/v1/chat/completions' \\88sdgk-8000.serverless.fptcloud.com/v1/chat/completions' \\ \n  -H 'accept: application/json' \\ \n  -H 'Content-Type: application/json' \\ \n  -d '{ \n  \"messages\": [ \n    { \n      \"content\": \"Tell me what is GPT-OSS?\", \n      \"role\": \"user\", \n      \"name\": \"admin\" \n    } \n], \n  \"model\": \" openai/gpt-oss-120b\" \n}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png",
        alt: "Info Icon"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " Both models were trained on our ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/openai/harmony",
        children: "harmony response format"
      }), " and should only be used with the harmony format as it will not work correctly otherwise."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can track the performance, availability, and resource usage of containerized services, helping detect issues and optimize operations by using the Monitoring feature. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/09/Screenshot-2025-09-15-155157.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./vllm-use-case",
        children: " Previous Deploy model by using vLLM "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./ollama-use-cases",
        children: " Next Ollama Use Cases "
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