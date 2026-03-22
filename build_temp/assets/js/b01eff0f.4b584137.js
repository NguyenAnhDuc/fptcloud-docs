"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[41265],{

/***/ 691971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_data_hub_create_connection_md_b01_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-hub-create-connection-md-b01.json
const site_docs_data_hub_create_connection_md_b01_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"data-hub/create-connection","title":"Create Connection","description":"*","source":"@site/docs/data-hub/create-connection.md","sourceDirName":"data-hub","slug":"/data-hub/create-connection","permalink":"/data-hub/create-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create Connection","title":"Create Connection","source":"https://fptcloud.com/en/documents/data-hub/?doc=create-connection","parent":"https://fptcloud.com/en/documents/data-hub","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"How to shut down kernel?","permalink":"/ai-notebook/shut-down-kernel"},"next":{"title":"Generate Dataset","permalink":"/data-hub/generate-dataset"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/data-hub/create-connection.md


const frontMatter = {
	sidebar_label: 'Create Connection',
	title: 'Create Connection',
	source: 'https://fptcloud.com/en/documents/data-hub/?doc=create-connection',
	parent: 'https://fptcloud.com/en/documents/data-hub',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Create Connection';

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
        id: "create-connection",
        children: "Create Connection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), " : Access Object Storage Management at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://console.fptcloud.com",
          children: "https://console.fptcloud.com"
        }), " and select the Buckets tab, choose Create Bucket. More details about S3 bucket, visit here: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-bucket",
          children: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-bucket"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), " : Upload a New Object to the Bucket. More details about Object, visit here: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-object",
          children: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-object"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Note"
        })
      }), " : Ensure that you have successfully created a bucket to store objects in FPT Object Storage. You can also refer to the bucket creation guide here: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/en/documents/fpt-object-storage/",
        children: "https://fptcloud.com/en/documents/fpt-object-storage/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), " : Access the Data Hub service, navigate to the Connection list, and click the \"Create Connection\" button ", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://fptcloud.com/wp-content/uploads/2025/03/image-1742974995525.33.34.png",
          alt: "file"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You will need to enter the required information to create a connection. ", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://fptcloud.com/wp-content/uploads/2025/03/image-1742975565417.51.05.png",
          alt: "file"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            }), " : Enter connection name\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Valid characters: Only letters (a-z, case-insensitive), numbers (0-9), and hyphens (-)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Length: Between 3 and 64 characters"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data source"
            }), " : Select a datasource to enable connection to the data"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Endpoint URL"
            }), " : The endpoint address of the bucket you want to connect to, example: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://test-bucket-name.s3-han02.fptcloud.com",
              children: "https://test-bucket-name.s3-han02.fptcloud.com"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Access key"
            }), " & ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secret key"
            }), " : Authentication information for access permissions. More details about Access Key Management, visit here: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-access-key-management",
              children: "https://fptcloud.com/en/documents/fpt-object-storage/?doc=tutorials-access-key-management"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Save"
        }), " to create a connection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After successfully creating a connection, you can select one for training, evaluation, or testing data to build a pipeline. You can also refer to the pipeline creation guide here ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=create-pipeline",
          children: "https://fptcloud.com/en/documents/model-fine-tuning/?doc=create-pipeline"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./initial-setup",
        children: " Previous Initial Setup "
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