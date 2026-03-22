"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[96795],{

/***/ 529537
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_testing_test_jobs_standard_test_criteria_md_246_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-testing-test-jobs-standard-test-criteria-md-246.json
const site_docs_model_testing_test_jobs_standard_test_criteria_md_246_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-testing-test-jobs/standard-test-criteria","title":"(Standard) Test Criteria","description":"*","source":"@site/docs/model-testing-test-jobs/standard-test-criteria.md","sourceDirName":"model-testing-test-jobs","slug":"/model-testing-test-jobs/standard-test-criteria","permalink":"/model-testing-test-jobs/standard-test-criteria","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"(Standard) Test Criteria","title":"(Standard) Test Criteria","source":"https://fptcloud.com/en/documents/model-testing-test-jobs/?doc=standard-test-criteria","parent":"https://fptcloud.com/en/documents/model-testing-test-jobs","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"(Standard) Select Test Data","permalink":"/model-testing-test-jobs/standard-select-test-data"},"next":{"title":"Step-by-Step","permalink":"/model-testing-test-jobs/step-by-step"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-testing-test-jobs/standard-test-criteria.md


const frontMatter = {
	sidebar_label: '(Standard) Test Criteria',
	title: '(Standard) Test Criteria',
	source: 'https://fptcloud.com/en/documents/model-testing-test-jobs/?doc=standard-test-criteria',
	parent: 'https://fptcloud.com/en/documents/model-testing-test-jobs',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = '(Standard) Test Criteria';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
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
        id: "standard-test-criteria",
        children: "(Standard) Test Criteria"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/09/Test-criteria.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * Text similarity: Measures similarity metrics between model outputs and reference texts.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following metrics of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Text similarity"
      }), " are available:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test criteria / Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How it tests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures how precisely a model’s output matches reference text using n-gram overlap."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluating translation and short text similarity."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fuzzy Match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures how closely the model’s output resembles the reference text, allowing for minor differences in wording or order."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking approximate correctness."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures unigram (single word) overlap between model output and reference text."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short summarization and text generation tasks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures bigram (two-word sequence) overlap between model output and reference text."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluating contextual accuracy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE-L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures the longest common subsequence (LCS) between model output and reference text to capture fluency and word order similarity."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longer text evaluation where structure matters."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUGE-LSUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures LCS-based similarity across multiple sentences, suitable for evaluating longer summaries."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization tasks."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./standard-select-test-data",
        children: " Previous (Standard) Select Test Data "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./others-tasks",
        children: " Next (Others) Tasks "
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