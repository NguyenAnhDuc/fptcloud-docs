"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[46479],{

/***/ 779450
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_select_trainer_md_322_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-select-trainer-md-322.json
const site_docs_model_fine_tuning_select_trainer_md_322_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/select-trainer","title":"Select Trainer","description":"*","source":"@site/docs/model-fine-tuning/select-trainer.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/select-trainer","permalink":"/model-fine-tuning/select-trainer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Select Trainer","title":"Select Trainer","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=select-trainer","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Select Dataset","permalink":"/model-fine-tuning/select-dataset"},"next":{"title":"Select Volume","permalink":"/model-fine-tuning/select-volume"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/select-trainer.md


const frontMatter = {
	sidebar_label: 'Select Trainer',
	title: 'Select Trainer',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=select-trainer',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Select Trainer';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "select-trainer",
        children: "Select Trainer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the appropriate trainer - which guides the model you select for training."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/Trainer.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We offer three trainers to optimize your models:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trainer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How it works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best for"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SFT (Supervised fine-tuning)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational technique that trains your model on input-output pairs, teaching it to produce desired responses for specific inputs."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- Provide examples of correct responses to prompts to guide the model’s behavior."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Often uses human-generated “ground truth” responses to show the model how it should respond. | - Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Nuanced translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Generating content in a specific format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Correcting instruction-following failures", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DPO (Direct preference optimization)"
      }), " | Trains models to prefer certain types of responses over others by learning from comparative feedback, without requiring a separate reward model. | - Provide both correct and incorrect example responses for a prompt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Indicate the correct response to help the model perform better. | - Summarizing text, focusing on the right things"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Generating chat messages with the right tone and style", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-training"
      }), " | Initial training phase using large unlabeled data for language understanding. | - Exposes the model to vast amounts of text data to learn grammar, facts, reasoning patterns, and world knowledge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- No labeled examples required. | - Building foundational language understanding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Preparing models for downstream fine-tuning tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./select-base-model",
        children: " Previous Select Base Model "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./select-volume",
        children: " Next Select Volume "
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