"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[12228],{

/***/ 452064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_checkpoint_fpt_ngfw_static_route_md_7c8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-checkpoint-fpt-ngfw-static-route-md-7c8.json
const site_docs_checkpoint_fpt_ngfw_static_route_md_7c8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"checkpoint-fpt-ngfw/static-route","title":"2. CheckPoint – FPT NGFW","description":"Static route","source":"@site/docs/checkpoint-fpt-ngfw/static-route.md","sourceDirName":"checkpoint-fpt-ngfw","slug":"/checkpoint-fpt-ngfw/static-route","permalink":"/checkpoint-fpt-ngfw/static-route","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Static route","title":"2. CheckPoint – FPT NGFW","source":"https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=static-route","parent":"https://fptcloud.com/documents/checkpoint-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly blades","permalink":"/checkpoint-fpt-ngfw/quan-ly-blades"},"next":{"title":"Tao object","permalink":"/checkpoint-fpt-ngfw/tao-object"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/checkpoint-fpt-ngfw/static-route.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Static route',
	title: '2. CheckPoint – FPT NGFW',
	source: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=static-route',
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
      children: "Static route"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPv4 Static Routes"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 21",
        src: (__webpack_require__(190585)/* ["default"] */ .A) + "",
        width: "1024",
        height: "337"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Điền thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destination"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet mask"
      }), " của dải mạng cần route tới.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 22",
        src: (__webpack_require__(931839)/* ["default"] */ .A) + "",
        width: "422",
        height: "566"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Gateway"
      }), " để điền thông tin next-hop address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 23",
        src: (__webpack_require__(107421)/* ["default"] */ .A) + "",
        width: "420",
        height: "565"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Có thể chọn route tới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Address"
      }), " hoặc route ra ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 24",
        src: (__webpack_require__(887602)/* ["default"] */ .A) + "",
        width: "421",
        height: "563"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPv4 Static Routes"
      }), " > chọn route cần sửa > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 26",
        src: (__webpack_require__(153455)/* ["default"] */ .A) + "",
        width: "1024",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông số mới cho Gateway."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 27",
        src: (__webpack_require__(397772)/* ["default"] */ .A) + "",
        width: "422",
        height: "565"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Destination subnet không thể sửa được, nếu cần thì có thể xóa và tạo mới lại route."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPv4 Static Routes."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 28",
        src: (__webpack_require__(244517)/* ["default"] */ .A) + "",
        width: "1024",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn route cần xóa > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để xác nhận xóa Route."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 29",
        src: (__webpack_require__(193140)/* ["default"] */ .A) + "",
        width: "1024",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./network-interface",
        children: " Previous Network Interface "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-dns",
        children: " Next Cấu hình DNS "
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

/***/ 107421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2b3e7d55144b-Userguide-Checkpoint-FPT-NGFW-2022-23-9d70b0ae79fb20c358770e4b8e28997c.png");

/***/ },

/***/ 190585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3fdc31da98d5-Userguide-Checkpoint-FPT-NGFW-2022-21-1024x337-edd8baf1f4a8463589f1e3b8c014e5b1.png");

/***/ },

/***/ 244517
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/506019529da2-Userguide-Checkpoint-FPT-NGFW-2022-28-1024x308-491be2b541240f5dc01910036b963b6d.png");

/***/ },

/***/ 153455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/51cbfb6baf3e-Userguide-Checkpoint-FPT-NGFW-2022-26-1024x340-ac18fbb309272705cc6a4fb29ab917ce.png");

/***/ },

/***/ 193140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/605dc0148aa5-Userguide-Checkpoint-FPT-NGFW-2022-29-1024x283-de78b2ac8c35f16d4c11f5ad80445a54.png");

/***/ },

/***/ 931839
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/72d2141fb981-Userguide-Checkpoint-FPT-NGFW-2022-22-9616ee525b029940cd799c5abf33ecd1.png");

/***/ },

/***/ 887602
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9ff6d0df59d7-Userguide-Checkpoint-FPT-NGFW-2022-24-f15b46028cac16481984a232a265d021.png");

/***/ },

/***/ 397772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e489c3342875-Userguide-Checkpoint-FPT-NGFW-2022-27-68b5da9068c4191d53a8a69961ae0541.png");

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