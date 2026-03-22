"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88781],{

/***/ 439240
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_kafka_quick_starts_md_e94_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-kafka-quick-starts-md-e94.json
const site_docs_fpt_kafka_quick_starts_md_e94_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-kafka/quick-starts","title":"Quick Starts","description":"*","source":"@site/docs/fpt-kafka/quick-starts.md","sourceDirName":"fpt-kafka","slug":"/fpt-kafka/quick-starts","permalink":"/fpt-kafka/quick-starts","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quick Starts","title":"Quick Starts","source":"https://fptcloud.com/en/documents/fpt-kafka/?doc=quick-starts","parent":"https://fptcloud.com/en/documents/fpt-kafka","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Manage Topics","permalink":"/fpt-kafka/manage-topics"},"next":{"title":"View Consumer Groups","permalink":"/fpt-kafka/view-consumer-groups"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-kafka/quick-starts.md


const frontMatter = {
	sidebar_label: 'Quick Starts',
	title: 'Quick Starts',
	source: 'https://fptcloud.com/en/documents/fpt-kafka/?doc=quick-starts',
	parent: 'https://fptcloud.com/en/documents/fpt-kafka',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Quick Starts';

const assets = {

};



const toc = [{
  "value": "1. Logging in to the FPT Kafka Service",
  "id": "1-logging-in-to-the-fpt-kafka-service",
  "level": 3
}, {
  "value": "2. Create Topics",
  "id": "2-create-topics",
  "level": 3
}, {
  "value": "3. Create Credentials",
  "id": "3-create-credentials",
  "level": 3
}, {
  "value": "4. Create ACLs",
  "id": "4-create-acls",
  "level": 3
}, {
  "value": "5. Create Consumer Groups",
  "id": "5-create-consumer-groups",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
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
        id: "quick-starts",
        children: "Quick Starts"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-logging-in-to-the-fpt-kafka-service",
      children: "1. Logging in to the FPT Kafka Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To create a new ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka"
      }), " account, you need to be allocated with service quota. Contact us for more detail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : From the FPT Cloud Portal menu, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrations"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka Service"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Picture1_HDNhanh_DN.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " > Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "workspace name"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic2.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), ". The system will initialize the service and provide processing status notifications."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After successfully creating the account, users will be automatically redirected to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka Service"
      }), " administration page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively, you can access the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka Service"
      }), " administration page by navigate to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka Service"
      }), " page and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start"
      }), " on the instance you would like to access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-create-topics",
      children: "2. Create Topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To create a topic, follow these steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : From the menu, navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topic"
      }), ". click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Enter the necessary information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " (required): The name of the topic"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Partitions"
          }), " (required): The number of partitions for the topic"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Replication Factor"
          }), " (required):"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cleanup Policy"
          }), " (required):"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced Configuration"
          }), " (optional)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic2_Taotopic.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " to proceed with creating the topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), " : The topic name must follow the format ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "[prefix].[topic name]"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-create-credentials",
      children: "3. Create Credentials"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users can create ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Credentials"
      }), " (username/password pair) for Kafka Service’s connection configuration using the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "SASL/SCRAM-SHA-256"
      }), " authentication method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : From the menu, navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Credentials"
      }), ". Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Enter the necessary information\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username"
          }), " (required)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " (required)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic1_Taocre.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), " : Initially, the system will auto-generate a password. You can reset the password if needed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " to create the credential."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), " : The topic name must follow the format ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "[prefix].[credential name]"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-create-acls",
      children: "4. Create ACLs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ACLs"
      }), " help users assign permissions, limiting the operations of principals on each topic or group. The permissions include Write, Read, from different IP addresses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To create ACLs, follow these instructions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : From the menu, navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ACLs"
      }), ". Click Create"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Enter the necessary information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Credential"
          }), " (required): Select a previously created credential"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resource Type"
          }), " (required): Topic or Group."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you choose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topic"
      }), " , it means you are assigning permissions for the user to use the topic, similarly if you choose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern Type"
        }), " (required): Literal or Prefixed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Literal"
      }), " is selected, it means you have read/write permissions for only one topic that you declare in the “Topic” field. If ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefixed"
      }), " is chosen, you will have read/write permissions for all topics with the prefix displayed in the “Resource name” field."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host"
          }), " (optional): If you want to block access from different IPs, you can enter a value in this field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Operation"
          }), " (required): Assign read or write permissions for topic/group"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Permission"
          }), " (required): Allow or Deny."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic1_ACL.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " to complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-create-consumer-groups",
      children: "5. Create Consumer Groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A consumer group is a group of consumers. A consumer can be any application that has the function of subscribing to a topic and consuming messages."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To create a consumer group, do the following:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : From the menu, navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Groups"
      }), ". Click Create."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Enter the necessary information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Group Name"
          }), " (required): The name of the group you want to create"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Offset strategy"
          }), " (required)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Topic"
          }), " (required)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), " : A consumer group can subscribe to multiple topics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/08/Pic1_TaoGr.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " to successfully create the group."]
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