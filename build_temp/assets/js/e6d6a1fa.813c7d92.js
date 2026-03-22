"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[95061],{

/***/ 37339
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kafka_edit_topics_md_e6d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kafka-edit-topics-md-e6d.json
const site_docs_fpt_kafka_edit_topics_md_e6d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kafka/edit-topics","title":"Edit Topics","description":"*","source":"@site/docs/fpt-kafka/edit-topics.md","sourceDirName":"fpt-kafka","slug":"/fpt-kafka/edit-topics","permalink":"/fpt-kafka/edit-topics","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Edit Topics","title":"Edit Topics","source":"https://fptcloud.com/en/documents/fpt-kafka/?doc=edit-topics","parent":"https://fptcloud.com/en/documents/fpt-kafka","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Edit Credentials","permalink":"/fpt-kafka/edit-credentials"},"next":{"title":"FPT Kafka","permalink":"/fpt-kafka/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kafka/edit-topics.md


const frontMatter = {
	sidebar_label: 'Edit Topics',
	title: 'Edit Topics',
	source: 'https://fptcloud.com/en/documents/fpt-kafka/?doc=edit-topics',
	parent: 'https://fptcloud.com/en/documents/fpt-kafka',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Edit Topics';

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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "edit-topics",
        children: "Edit Topics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system provides functionality to edit specific topic details, such as adding partitions to a topic and deleting records within a partition, etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, to add partitions to a topic, follow these instructions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : Select the topic to add partitions to > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Switch to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition"
      }), " tab > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes, I understand"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Picture1_AddPartition.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Enter the number of partitions to add"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Picture2_AddParrtition.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " to complete"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Furthermore, if you want to delete records in certain partitions, you can use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty"
      }), " function of Kafka."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To do this, follow these steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : Select the topic to edit > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Switch to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition"
      }), " tab > Select the partition to delete records from > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic1_Empty.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), " in the confirmation dialog to delete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this action, the total number of records in that partition will be zero."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, you can delete all records within a topic. Simply choose the topic to erase records > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empty"
      }), " to complete the process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic2_Empty.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note that performing this action will erase all records across all partitions of that topic."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./view-topics",
        children: " Previous View Topics "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-topics",
        children: " Next Delete Topics "
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