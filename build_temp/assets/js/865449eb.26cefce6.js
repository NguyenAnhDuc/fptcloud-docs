"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88526],{

/***/ 413923
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_message_bus_for_rabbitmq_tao_queues_md_865_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-message-bus-for-rabbitmq-tao-queues-md-865.json
const site_docs_fpt_message_bus_for_rabbitmq_tao_queues_md_865_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-message-bus-for-rabbitmq/tao-queues","title":"2. FPT Message Bus for RabbitMQ","description":"Tạo queues","source":"@site/docs/fpt-message-bus-for-rabbitmq/tao-queues.md","sourceDirName":"fpt-message-bus-for-rabbitmq","slug":"/fpt-message-bus-for-rabbitmq/tao-queues","permalink":"/fpt-message-bus-for-rabbitmq/tao-queues","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao queues","title":"2. FPT Message Bus for RabbitMQ","source":"https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq/?doc=tao-queues","parent":"https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Sua topic","permalink":"/fpt-message-bus-for-rabbitmq/sua-topic"},"next":{"title":"Tao topics","permalink":"/fpt-message-bus-for-rabbitmq/tao-topics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-message-bus-for-rabbitmq/tao-queues.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao queues',
	title: '2. FPT Message Bus for RabbitMQ',
	source: 'https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq/?doc=tao-queues',
	parent: 'https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Message Bus for RabbitMQ';

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
        id: "2-fpt-message-bus-for-rabbitmq",
        children: "2. FPT Message Bus for RabbitMQ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo queues"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Queues"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250664)/* ["default"] */ .A) + "",
        width: "1919",
        height: "918"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name (required)"
        }), " : tên queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max length"
        }), " : Tổng số messages có thể chứa trong một queue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message TTL"
        }), " : Thời gian messages tồn tại từ khi được publish. Nếu vượt quá thời gian này, message sẽ bị mất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overflow"
        }), " : Có thể chọn các chế độ drop_head, reject_publish, reject_publish_DLX"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum priority"
        }), " : Nhập từ 0 -10."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(586993)/* ["default"] */ .A) + "",
        width: "1919",
        height: "926"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Tên queue được đặt theo quy tắc: q.QUEUE_NAME."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu chọn đồng thời ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Quorum"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single active consumer"
        }), " thì không dùng được Receive, nên chọn 1 thuộc tính mới dùng được."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành tạo queue."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-queues",
        children: " Previous Quản lý Queues "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-queues",
        children: " Next Xem queues "
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

/***/ 586993
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1df0d53b6bd6-que_create_1-f72717db85066e50bbaf0cc632983f0e.png");

/***/ },

/***/ 250664
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/31f765f3ad2d-que_create-13ad232c924e5a98a31ef0597d6d7356.png");

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