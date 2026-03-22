"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26962],{

/***/ 413969
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_checkpoint_fpt_ngfw_tao_rule_firewall_md_b1f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-checkpoint-fpt-ngfw-tao-rule-firewall-md-b1f.json
const site_docs_checkpoint_fpt_ngfw_tao_rule_firewall_md_b1f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"checkpoint-fpt-ngfw/tao-rule-firewall","title":"2. CheckPoint – FPT NGFW","description":"Tạo rule Firewall","source":"@site/docs/checkpoint-fpt-ngfw/tao-rule-firewall.md","sourceDirName":"checkpoint-fpt-ngfw","slug":"/checkpoint-fpt-ngfw/tao-rule-firewall","permalink":"/checkpoint-fpt-ngfw/tao-rule-firewall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao rule firewall","title":"2. CheckPoint – FPT NGFW","source":"https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-rule-firewall","parent":"https://fptcloud.com/documents/checkpoint-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao object","permalink":"/checkpoint-fpt-ngfw/tao-object"},"next":{"title":"Tao rule nat","permalink":"/checkpoint-fpt-ngfw/tao-rule-nat"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/checkpoint-fpt-ngfw/tao-rule-firewall.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao rule firewall',
	title: '2. CheckPoint – FPT NGFW',
	source: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-rule-firewall',
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
        id: "2-checkpoint--fpt-ngfw",
        children: "2. CheckPoint – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo rule Firewall"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Menu"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Policies"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ctrl + 2"
      }), ") > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Control"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 51",
        src: (__webpack_require__(84197)/* ["default"] */ .A) + "",
        width: "1024",
        height: "205"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add rule above/below"
      }), " hoặc chuột phải rule hiện tại chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New rule Above/Below"
      }), " để thêm tạo rule mới ở trên/dưới rule hiện tại."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 52",
        src: (__webpack_require__(344604)/* ["default"] */ .A) + "",
        width: "1024",
        height: "298"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Thiết lập thông tin cho rule mới"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " (Tên rule):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 53",
          src: (__webpack_require__(739629)/* ["default"] */ .A) + "",
          width: "1024",
          height: "68"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source"
        }), " (IP nguồn):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 54",
          src: (__webpack_require__(352181)/* ["default"] */ .A) + "",
          width: "1024",
          height: "143"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination"
        }), " (IP đích):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 55",
          src: (__webpack_require__(555609)/* ["default"] */ .A) + "",
          width: "1024",
          height: "195"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service"
        }), " (Dịch vụ/ Port):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 56",
          src: (__webpack_require__(457474)/* ["default"] */ .A) + "",
          width: "1024",
          height: "129"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), " (Hành động):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 57",
          src: (__webpack_require__(630832)/* ["default"] */ .A) + "",
          width: "1024",
          height: "118"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track"
        }), " (Theo dõi):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 58",
          src: (__webpack_require__(835717)/* ["default"] */ .A) + "",
          width: "1024",
          height: "138"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rule mới tạo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 59",
        src: (__webpack_require__(647737)/* ["default"] */ .A) + "",
        width: "1024",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Install Policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-object",
        children: " Previous Tạo Object "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-rule-nat",
        children: " Next Tạo rule NAT "
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

/***/ 630832
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1368e5d4c0b1-Userguide-Checkpoint-FPT-NGFW-2022-57-1024x118-537bdda7c0ddd91ca35771ef812c2a86.png");

/***/ },

/***/ 457474
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/420bc60e88e8-Userguide-Checkpoint-FPT-NGFW-2022-56-1024x129-5efb480cc9f2ae5ab78f0393f69b4b2c.png");

/***/ },

/***/ 647737
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/48e205e72409-Userguide-Checkpoint-FPT-NGFW-2022-59-1024x222-35b1130232fda22a6b2f54a07c3a491d.png");

/***/ },

/***/ 555609
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/59fca8146a57-Userguide-Checkpoint-FPT-NGFW-2022-55-1024x195-b648515a7cab1dfeec5cab560fd76891.png");

/***/ },

/***/ 835717
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ce65e212d77-Userguide-Checkpoint-FPT-NGFW-2022-58-1024x138-ae8a490eeff112a10f3e3e83a5816aec.png");

/***/ },

/***/ 352181
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7de8a148566e-Userguide-Checkpoint-FPT-NGFW-2022-54-1024x143-79d4a8e01b8dcfa392882f512599f4e6.png");

/***/ },

/***/ 739629
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d3bd4303de78-Userguide-Checkpoint-FPT-NGFW-2022-53-1024x68-abf4637b4c99fc6c98da6882b091c774.png");

/***/ },

/***/ 84197
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d67afe3a5338-Userguide-Checkpoint-FPT-NGFW-2022-51-1024x205-a76f593991f39c15698c323cfe0ad72d.png");

/***/ },

/***/ 344604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dc654ab16617-Userguide-Checkpoint-FPT-NGFW-2022-52-1024x298-c1c9b2f086c9c60b4e25d857275b7945.png");

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