"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[21700],{

/***/ 146427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_checkpoint_fpt_ngfw_tao_object_md_a17_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-checkpoint-fpt-ngfw-tao-object-md-a17.json
const site_docs_checkpoint_fpt_ngfw_tao_object_md_a17_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"checkpoint-fpt-ngfw/tao-object","title":"2. CheckPoint – FPT NGFW","description":"Tạo Object","source":"@site/docs/checkpoint-fpt-ngfw/tao-object.md","sourceDirName":"checkpoint-fpt-ngfw","slug":"/checkpoint-fpt-ngfw/tao-object","permalink":"/checkpoint-fpt-ngfw/tao-object","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao object","title":"2. CheckPoint – FPT NGFW","source":"https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-object","parent":"https://fptcloud.com/documents/checkpoint-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Static route","permalink":"/checkpoint-fpt-ngfw/static-route"},"next":{"title":"Tao rule firewall","permalink":"/checkpoint-fpt-ngfw/tao-rule-firewall"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/checkpoint-fpt-ngfw/tao-object.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao object',
	title: '2. CheckPoint – FPT NGFW',
	source: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-object',
	parent: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. CheckPoint – FPT NGFW';

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
        id: "2-checkpoint--fpt-ngfw",
        children: "2. CheckPoint – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Object"
      }), " sẽ định nghĩa các máy chủ, dải mạng, port, … được sử dụng cho việc thiết lập rule."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Pane"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "F11"
      }), ") > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 44",
        src: (__webpack_require__(833865)/* ["default"] */ .A) + "",
        width: "1024",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Điền thông tin name, address, mask, comment về dải mạng muốn tạo > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 45",
        src: (__webpack_require__(271214)/* ["default"] */ .A) + "",
        width: "413",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Install Policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Pane"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "F11"
      }), ") > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 46",
        src: (__webpack_require__(849782)/* ["default"] */ .A) + "",
        width: "1024",
        height: "261"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Điền thông tin name, IPv4 address, comment về dải mạng muốn tạo > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 47",
        src: (__webpack_require__(944760)/* ["default"] */ .A) + "",
        width: "557",
        height: "386"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Install Policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Pane"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "F11"
      }), ") > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "More"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      }), " > chọn loại service muốn tạo (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UDP/TCP/RPC/…"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 48",
        src: (__webpack_require__(862311)/* ["default"] */ .A) + "",
        width: "1024",
        height: "287"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Điền thông tin name, port, comment về service muốn tạo > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 49",
        src: (__webpack_require__(447665)/* ["default"] */ .A) + "",
        width: "427",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Install Policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./install-policy",
        children: " Previous Install Policy "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-rule-firewall",
        children: " Next Tạo rule Firewall "
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

/***/ 944760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6603e0e1d533-Userguide-Checkpoint-FPT-NGFW-2022-47-d9e4fa0ef1101900465a9ab58c9f4def.png");

/***/ },

/***/ 849782
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6a86ce6740fe-Userguide-Checkpoint-FPT-NGFW-2022-46-1024x261-58e2f9d8e0ae94836a38ec3a10bea7aa.png");

/***/ },

/***/ 271214
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/721733e9b581-Userguide-Checkpoint-FPT-NGFW-2022-45-c9a13f225965b57c6916fc1667045a25.png");

/***/ },

/***/ 447665
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/adcedff8f39c-Userguide-Checkpoint-FPT-NGFW-2022-49-5e6d9ffa2a2fe14f3da0943e1ebf7335.png");

/***/ },

/***/ 862311
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/caf6afa6bdc9-Userguide-Checkpoint-FPT-NGFW-2022-48-1024x287-0302146edb92eb2a996dc0a6775447af.png");

/***/ },

/***/ 833865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e9586759cc22-Userguide-Checkpoint-FPT-NGFW-2022-44-1024x333-15ff94d93db2a0b8877c5ab1d1aa59cc.png");

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