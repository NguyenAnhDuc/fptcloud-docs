"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[78624],{

/***/ 998764
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_serving_detailed_configuration_information_md_0c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-serving-detailed-configuration-information-md-0c5.json
const site_docs_model_serving_detailed_configuration_information_md_0c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-serving/detailed-configuration-information","title":"Detailed Configuration Information for a Deployment","description":"*","source":"@site/docs/model-serving/detailed-configuration-information.md","sourceDirName":"model-serving","slug":"/model-serving/detailed-configuration-information","permalink":"/model-serving/detailed-configuration-information","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Detailed Configuration Information for a Deployment","title":"Detailed Configuration Information for a Deployment","source":"https://fptcloud.com/en/documents/model-serving/?doc=detailed-configuration-information","parent":"https://fptcloud.com/en/documents/model-serving","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Deployment List","permalink":"/model-serving/deployment-list"},"next":{"title":"General introduction Model serving","permalink":"/model-serving/general-intro-model-serving"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-serving/detailed-configuration-information.md


const frontMatter = {
	sidebar_label: 'Detailed Configuration Information for a Deployment',
	title: 'Detailed Configuration Information for a Deployment',
	source: 'https://fptcloud.com/en/documents/model-serving/?doc=detailed-configuration-information',
	parent: 'https://fptcloud.com/en/documents/model-serving',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Detailed Configuration Information for a Deployment';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "detailed-configuration-information-for-a-deployment",
        children: "Detailed Configuration Information for a Deployment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Model Configuration Information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Go to AI Platform → Model Serving → Deployment → Deployment Name → Model Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/12.png",
        alt: "Alt text"
      }), " In the Model Settings section, users can modify the configurations of Image Information as follows:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Information"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Available Actions"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The AI model to be deployed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The version of the AI model to be deployed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication token for the Model Registry to deploy the model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The path to the location where the model is stored (Model Registry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The link to the container image storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The version of the container image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Username"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User account for authentication with the Private Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User password for authentication with the Private Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit to change the information"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topic"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When the Image Tag is changed, the Deployment will recreate instances with the newly declared version. Depending on the Deployment strategy, the recreation may or may not involve downtime."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recreate"
            }), " : The instance is recreated with downtime during the initialization of the new Image Tag"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rolling"
            }), " : Instances are replaced gradually, with no downtime, but a certain amount of backup resources is required (by default, equivalent to the resources of one instance)"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to the Image Tag, when the Model Version is changed, the Deployment will recreate instances with the newly declared version. Depending on the Deployment strategy, the recreation may or may not involve downtime."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edit the Model Version when upgrading or changing the version of the model."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./status-actions-deployment",
        children: " Previous Status and Actions for a Deployment "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./deployment-configuration-information",
        children: " Next Deployment Configuration Information "
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