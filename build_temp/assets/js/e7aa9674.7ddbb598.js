"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[33589],{

/***/ 894116
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_testing_interactive_sessions_completion_history_md_e7a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-testing-interactive-sessions-completion-history-md-e7a.json
const site_docs_model_testing_interactive_sessions_completion_history_md_e7a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-testing-interactive-sessions/completion-history","title":"Completion History","description":"*","source":"@site/docs/model-testing-interactive-sessions/completion-history.md","sourceDirName":"model-testing-interactive-sessions","slug":"/model-testing-interactive-sessions/completion-history","permalink":"/model-testing-interactive-sessions/completion-history","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Completion History","title":"Completion History","source":"https://fptcloud.com/en/documents/model-testing-interactive-sessions/?doc=completion-history","parent":"https://fptcloud.com/en/documents/model-testing-interactive-sessions","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Traffic Setting Configuration Information","permalink":"/model-serving/traffic-setting-configuration-information"},"next":{"title":"Delete Session","permalink":"/model-testing-interactive-sessions/delete-session"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-testing-interactive-sessions/completion-history.md


const frontMatter = {
	sidebar_label: 'Completion History',
	title: 'Completion History',
	source: 'https://fptcloud.com/en/documents/model-testing-interactive-sessions/?doc=completion-history',
	parent: 'https://fptcloud.com/en/documents/model-testing-interactive-sessions',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Completion History';

const assets = {

};



const toc = [{
  "value": "Accessing completion history",
  "id": "accessing-completion-history",
  "level": 3
}, {
  "value": "Viewing completion details",
  "id": "viewing-completion-details",
  "level": 3
}, {
  "value": "Continuing a completion",
  "id": "continuing-a-completion",
  "level": 3
}, {
  "value": "Delete a completion",
  "id": "delete-a-completion",
  "level": 3
}, {
  "value": "Download all completions",
  "id": "download-all-completions",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "completion-history",
        children: "Completion History"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completion history allows you to view and manage the past completions. It helps track previous messages, responses, and session details for review or reuse."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/Completion-history.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accessing-completion-history",
      children: "Accessing completion history"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Completion History"
          }), " tab in your interface. This page displays a list of all your current and past completions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "browse"
          }), " through the list or use the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "search bar"
          }), " to find specific completions using:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keywords from the last assistant responses."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewing-completion-details",
      children: "Viewing completion details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "User message"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Assistant response"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Duration"
          }), " of the completion"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Timestamp"
          }), " of when it occurred"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "continuing-a-completion",
      children: "Continuing a completion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This will reopen ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Playground"
        }), " , allowing you to continue chatting with your model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-a-completion",
      children: "Delete a completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To remove a completion from your history:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " Deleted completions are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "permanently removed"
      }), " and cannot be recovered."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "download-all-completions",
      children: "Download all completions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To export your entire completion history:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The supported file format is '.xlsx'. It consists of all user messages, assistant responses, timestamps, and metadata for each completion."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(Optional) Download completion you want to select by clicking the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "start"
          }), " icon and navigate ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "My picks"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./playground",
        children: " Previous Playground "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./how-to-integrate-model",
        children: " Next How to Integrate Model? "
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