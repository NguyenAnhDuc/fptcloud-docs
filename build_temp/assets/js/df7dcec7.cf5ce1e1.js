"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[14702],{

/***/ 50148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_checkpoint_fpt_ngfw_network_interface_md_df7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-checkpoint-fpt-ngfw-network-interface-md-df7.json
const site_docs_checkpoint_fpt_ngfw_network_interface_md_df7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"checkpoint-fpt-ngfw/network-interface","title":"2. CheckPoint – FPT NGFW","description":"Network Interface","source":"@site/docs/checkpoint-fpt-ngfw/network-interface.md","sourceDirName":"checkpoint-fpt-ngfw","slug":"/checkpoint-fpt-ngfw/network-interface","permalink":"/checkpoint-fpt-ngfw/network-interface","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Network interface","title":"2. CheckPoint – FPT NGFW","source":"https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=network-interface","parent":"https://fptcloud.com/documents/checkpoint-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Install policy","permalink":"/checkpoint-fpt-ngfw/install-policy"},"next":{"title":"Quan ly account","permalink":"/checkpoint-fpt-ngfw/quan-ly-account"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/checkpoint-fpt-ngfw/network-interface.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Network interface',
	title: '2. CheckPoint – FPT NGFW',
	source: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=network-interface',
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
    br: "br",
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
      children: "Network Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Interfaces"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 4",
        src: (__webpack_require__(638809)/* ["default"] */ .A) + "",
        width: "1024",
        height: "334"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn loại Interface cần tạo.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 5",
        src: (__webpack_require__(33873)/* ["default"] */ .A) + "",
        width: "1024",
        height: "359"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình Interface theo thông tin quy hoạch"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alias Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 6",
          src: (__webpack_require__(290207)/* ["default"] */ .A) + "",
          width: "458",
          height: "329"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VLAN Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 7",
          src: (__webpack_require__(523845)/* ["default"] */ .A) + "",
          width: "460",
          height: "349"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VXLAN Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 8",
          src: (__webpack_require__(714213)/* ["default"] */ .A) + "",
          width: "496",
          height: "447"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bond Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 9",
          src: (__webpack_require__(298206)/* ["default"] */ .A) + "",
          width: "496",
          height: "448"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bridge Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 10",
          src: (__webpack_require__(245659)/* ["default"] */ .A) + "",
          width: "498",
          height: "410"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loopback Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 11",
          src: (__webpack_require__(707380)/* ["default"] */ .A) + "",
          width: "459",
          height: "350"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPN Tunnel Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 12",
          src: (__webpack_require__(242359)/* ["default"] */ .A) + "",
          width: "496",
          height: "440"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6in4 Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 13",
          src: (__webpack_require__(428566)/* ["default"] */ .A) + "",
          width: "496",
          height: "437"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PPPoE Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 14",
          src: (__webpack_require__(471630)/* ["default"] */ .A) + "",
          width: "497",
          height: "440"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GRE Interface:"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 15",
          src: (__webpack_require__(162354)/* ["default"] */ .A) + "",
          width: "496",
          height: "534"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Interfaces."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 16",
        src: (__webpack_require__(266035)/* ["default"] */ .A) + "",
        width: "1024",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Ở Interface muốn sửa > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 17",
        src: (__webpack_require__(680398)/* ["default"] */ .A) + "",
        width: "1024",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập các thông tin mới > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 18",
        src: (__webpack_require__(524170)/* ["default"] */ .A) + "",
        width: "458",
        height: "499"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Interfaces"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 19",
        src: (__webpack_require__(598502)/* ["default"] */ .A) + "",
        width: "1024",
        height: "338"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Ở Interface muốn xóa > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để xác nhận xóa Interface.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 20",
        src: (__webpack_require__(501654)/* ["default"] */ .A) + "",
        width: "1024",
        height: "282"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./truy-cap-gaia-portal",
        children: " Previous Truy cập Gaia Portal "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./static-route",
        children: " Next Static route "
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

/***/ 680398
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/045e64181684-Userguide-Checkpoint-FPT-NGFW-2022-17-1024x332-55e05a69644e7061e09bb76e3b8f8e40.png");

/***/ },

/***/ 33873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/126ffaeabad6-Userguide-Checkpoint-FPT-NGFW-2022-5-1024x359-4ef9d79f48faf4a5c73b442c463f3e33.png");

/***/ },

/***/ 266035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4b291940a0bb-Userguide-Checkpoint-FPT-NGFW-2022-16-1024x329-957480582a059b3f5ff660209477461c.png");

/***/ },

/***/ 523845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4c25fcc3485b-Userguide-Checkpoint-FPT-NGFW-2022-7-d2dc249baec1b831663d4c9e2e32b336.png");

/***/ },

/***/ 707380
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6c6c904a69d5-Userguide-Checkpoint-FPT-NGFW-2022-11-ffe076f76a919abad9aad80d732e8f80.png");

/***/ },

/***/ 245659
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/739251606f70-Userguide-Checkpoint-FPT-NGFW-2022-10-834a74c9e86756055432c4ea2a102928.png");

/***/ },

/***/ 242359
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/797b8c9a9a08-Userguide-Checkpoint-FPT-NGFW-2022-12-58946d138ff60e8910692651f74fbb23.png");

/***/ },

/***/ 428566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/93ea550ff022-Userguide-Checkpoint-FPT-NGFW-2022-13-b98f2dffd170092d630a4906b231d8ec.png");

/***/ },

/***/ 290207
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 714213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad10b6e7dcb6-Userguide-Checkpoint-FPT-NGFW-2022-8-73948d587373d5c54b72fb6d97ed4513.png");

/***/ },

/***/ 162354
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bc9a2658b2c7-Userguide-Checkpoint-FPT-NGFW-2022-15-4fe1dea4ae828e7d60224d18de1cf08c.png");

/***/ },

/***/ 638809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/be6940bd82d5-Userguide-Checkpoint-FPT-NGFW-2022-4-1024x334-c7eb350077d6e821e334806dba8bc5b5.png");

/***/ },

/***/ 598502
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c658f9edfc61-Userguide-Checkpoint-FPT-NGFW-2022-19-1024x338-4cbacf788b6dda47e0c2e0b51cbfe68b.png");

/***/ },

/***/ 298206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/daa6a3623e4a-Userguide-Checkpoint-FPT-NGFW-2022-9-eeea6b5cf0e1d1a23e639b24e9e45300.png");

/***/ },

/***/ 471630
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dc0e51efdf3e-Userguide-Checkpoint-FPT-NGFW-2022-14-3a75316930becd7df37bb6b55dae9126.png");

/***/ },

/***/ 524170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef3fe88e76fb-Userguide-Checkpoint-FPT-NGFW-2022-18-4c276e5363d5f36762065cbc72311271.png");

/***/ },

/***/ 501654
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fd95d46bc8fc-Userguide-Checkpoint-FPT-NGFW-2022-20-1024x282-e0b74758de3c4873c4a1bcb173c10f21.png");

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