"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[46388],{

/***/ 207379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_message_bus_for_rabbitmq_gui_nhan_message_trong_queues_md_d85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-message-bus-for-rabbitmq-gui-nhan-message-trong-queues-md-d85.json
const site_docs_fpt_message_bus_for_rabbitmq_gui_nhan_message_trong_queues_md_d85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-message-bus-for-rabbitmq/gui-nhan-message-trong-queues","title":"2. FPT Message Bus for RabbitMQ","description":"Gửi - nhận messages trong queues","source":"@site/docs/fpt-message-bus-for-rabbitmq/gui-nhan-message-trong-queues.md","sourceDirName":"fpt-message-bus-for-rabbitmq","slug":"/fpt-message-bus-for-rabbitmq/gui-nhan-message-trong-queues","permalink":"/fpt-message-bus-for-rabbitmq/gui-nhan-message-trong-queues","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Gui nhan message trong queues","title":"2. FPT Message Bus for RabbitMQ","source":"https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq/?doc=gui-nhan-message-trong-queues","parent":"https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xoa security","permalink":"/fpt-event-gateway/xoa-security"},"next":{"title":"Gui nhan messages trong topics","permalink":"/fpt-message-bus-for-rabbitmq/gui-nhan-messages-trong-topics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-message-bus-for-rabbitmq/gui-nhan-message-trong-queues.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Gui nhan message trong queues',
	title: '2. FPT Message Bus for RabbitMQ',
	source: 'https://fptcloud.com/documents/fpt-message-bus-for-rabbitmq/?doc=gui-nhan-message-trong-queues',
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
      children: "Gửi - nhận messages trong queues"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Queues"
      }), " > Chọn một queue bạn cần thao tác > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preview"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974737)/* ["default"] */ .A) + "",
        width: "1919",
        height: "921"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2"
      }), " : Bạn nhập message cần publish vào ô ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload"
      }), " trong tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Send"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(253128)/* ["default"] */ .A) + "",
        width: "1919",
        height: "918"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn có thể chọn 1 trong 2 kiểu dữ liệu text là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "String"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Base64"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "String"
        }), " : bao gồm 1 chuỗi các kí tự (không nhập số)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base64"
        }), " : mã hóa chuỗi ký tự bằng cách dùng thay thế các ký tự trong bảng mã ASCII 8 bit thông dụng thành bảng mã 6 bit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Send"
      }), " để gửi"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này bạn đã publish messages thành công vào hàng đợi. Để có thể nhận messages, bạn thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Bạn vào tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Receive"
      }), " > Sau đó chọn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Receive"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986487)/* ["default"] */ .A) + "",
        width: "1919",
        height: "929"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-queues",
        children: " Previous Xem queues "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-queues",
        children: " Next Xóa queues "
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

/***/ 253128
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/349ef695a98b-View-2-2-fc96d3244717720797818bfbb64b1349.png");

/***/ },

/***/ 974737
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/73852024d9a3-View-1-1-a3c5d50eb64124d2e767b240bad901a9.png");

/***/ },

/***/ 986487
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cf01752c0c7f-Recei-1-9b9458caa532a92a5e143d576f6e1561.png");

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