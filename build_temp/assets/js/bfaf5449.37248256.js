"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37908],{

/***/ 359302
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gateway_quan_ly_nat_tung_gateway_md_bfa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gateway-quan-ly-nat-tung-gateway-md-bfa.json
const site_docs_gateway_quan_ly_nat_tung_gateway_md_bfa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gateway/quan-ly-nat-tung-gateway","title":"2. Gateway","description":"Hệ thống cho phép người dùng quản lý NAT rule trong từng Gateway","source":"@site/docs/gateway/quan-ly-nat-tung-gateway.md","sourceDirName":"gateway","slug":"/gateway/quan-ly-nat-tung-gateway","permalink":"/gateway/quan-ly-nat-tung-gateway","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly nat tung gateway","title":"2. Gateway","source":"https://fptcloud.com/documents/gateway/?doc=quan-ly-nat-tung-gateway","parent":"https://fptcloud.com/documents/gateway","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly danh sach gateway","permalink":"/gateway/quan-ly-danh-sach-gateway"},"next":{"title":"Quan ly no nat rule theo gateway","permalink":"/gateway/quan-ly-no-nat-rule-theo-gateway"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gateway/quan-ly-nat-tung-gateway.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly nat tung gateway',
	title: '2. Gateway',
	source: 'https://fptcloud.com/documents/gateway/?doc=quan-ly-nat-tung-gateway',
	parent: 'https://fptcloud.com/documents/gateway',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Gateway';

const assets = {

};



const toc = [{
  "value": "<strong>1. Quản lý danh sách NAT Rule</strong>",
  "id": "1-quản-lý-danh-sách-nat-rule",
  "level": 2
}, {
  "value": "<strong>2. Tạo NAT Rule</strong>",
  "id": "2-tạo-nat-rule",
  "level": 2
}, {
  "value": "<strong>3. Chỉnh sửa NAT Rule</strong>",
  "id": "3-chỉnh-sửa-nat-rule",
  "level": 2
}, {
  "value": "<strong>4. Xoá NAT Rule</strong>",
  "id": "4-xoá-nat-rule",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "2-gateway",
        children: "2. Gateway"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống cho phép người dùng quản lý NAT rule trong từng Gateway"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-quản-lý-danh-sách-nat-rule",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Quản lý danh sách NAT Rule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(867888)/* ["default"] */ .A) + "",
        width: "835",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tạo-nat-rule",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tạo NAT Rule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể bấm nút Create NAT Rule để tạo mới 1 NAT Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(813621)/* ["default"] */ .A) + "",
        width: "849",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có 2 loại NAT:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Inbound NAT: Quản lý dữ liệu đi từ bên ngoài vào mạng nội bộ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Outbound NAT: Quản lý dữ liệu đi từ mạng nội bộ ra ngoài"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-chỉnh-sửa-nat-rule",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Chỉnh sửa NAT Rule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ở cột Actions, người dùng có thể bấm nút Edit để chỉnh sửa thông tin của NAT Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Với gateway loại Basic sẽ không được chỉnh sửa NAT Rule, chỉ được chỉnh sửa khi Gateway loại Custom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-xoá-nat-rule",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Xoá NAT Rule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ở cột Actions, người dùng có thể bấm nút Delete để chỉnh sửa thông tin của Route"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Với gateway loại Basic sẽ không được xoá NAT Rule, chỉ được xoá NAT Rule khi Gateway loại Custom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-route-1-gateway",
        children: " Previous Quản lý Route của 1 Gateway "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-no-nat-rule-theo-gateway",
        children: " Next Hệ thống cho phép người dùng quản lý NO NAT rule trong từng Gateway "
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

/***/ 813621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/de8b3348f292-image-1754291008356-0e73cfb427daafdfa66ef505f77618ae.png");

/***/ },

/***/ 867888
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fe150ddd5b0c-image-1754290989063-5c8f1f1d62dccccf00317ca74b924664.png");

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