"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[75864],{

/***/ 665330
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kafka_demo_md_ee5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kafka-demo-md-ee5.json
const site_docs_fpt_kafka_demo_md_ee5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kafka/demo","title":"Demo","description":"*","source":"@site/docs/fpt-kafka/demo.md","sourceDirName":"fpt-kafka","slug":"/fpt-kafka/demo","permalink":"/fpt-kafka/demo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Demo","title":"Demo","source":"https://fptcloud.com/en/documents/fpt-kafka/?doc=demo","parent":"https://fptcloud.com/en/documents/fpt-kafka","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Delete Topics","permalink":"/fpt-kafka/delete-topics"},"next":{"title":"Edit Credentials","permalink":"/fpt-kafka/edit-credentials"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kafka/demo.md


const frontMatter = {
	sidebar_label: 'Demo',
	title: 'Demo',
	source: 'https://fptcloud.com/en/documents/fpt-kafka/?doc=demo',
	parent: 'https://fptcloud.com/en/documents/fpt-kafka',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Demo';

const assets = {

};



const toc = [{
  "value": "Part 1: Producer sends message to topic",
  "id": "part-1-producer-sends-message-to-topic",
  "level": 3
}, {
  "value": "Part 2: Consumer reads the sent message",
  "id": "part-2-consumer-reads-the-sent-message",
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
        id: "demo",
        children: "Demo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To connect to Kafka, you can refer to the detailed steps in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document"
      }), " section from the menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-1-producer-sends-message-to-topic",
      children: "Part 1: Producer sends message to topic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "producer.py"
      }), " file"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo1.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : In the file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "producer.py"
      }), ", fill in some informations like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo2.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "sasl_plain_username"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sasl_plain_password"
          }), " are the username and password of the credentials you have created."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "topic"
          }), " is the name of the topic you have created and previously set permissions for (allow, write topic)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "bootstrap.servers"
          }), " : This is the information of the cluster that the admin has assigned to the user."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : After setting up the necessary information, open the terminal and run this command:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python .\\producer.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result should be as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo3.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the output is correct, it means the producer has successfully sent messages to the partitions of the topic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-2-consumer-reads-the-sent-message",
      children: "Part 2: Consumer reads the sent message"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : First, create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "consumer.py"
      }), " file"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo4.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo5.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : In this ", (0,jsx_runtime.jsx)(_components.code, {
        children: "consumer.py"
      }), " file, fill in some informations like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo6.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "group_name"
          }), " is the name of the group you have created and previously set permissions for (allow, read topic)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "sasl_plain_username"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sasl_plain_password"
          }), " are the username and password of the credentials you have created."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "topic"
          }), " is the name of the topic you have created and previously set permissions for (allow, write topic; allow, read topic)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "bootstrap.servers"
          }), " : This is the information of the cluster that the admin has assigned to the user."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : After setting up the necessary information, open the terminal and run this command:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python .\\consumer.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result should be as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/demo7.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-consumer-groups",
        children: " Previous Delete Consumer Groups "
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