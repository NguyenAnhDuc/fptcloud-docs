"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[59476],{

/***/ 54710
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_billing_view_bill_charges_by_resource_md_532_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-billing-view-bill-charges-by-resource-md-532.json
const site_docs_billing_view_bill_charges_by_resource_md_532_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"billing/view-bill-charges-by-resource","title":"2. Bills","description":"Xem đối soát theo tài nguyên sử dụng (Charges by resource)","source":"@site/docs/billing/view-bill-charges-by-resource.md","sourceDirName":"billing","slug":"/billing/view-bill-charges-by-resource","permalink":"/billing/view-bill-charges-by-resource","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"View bill charges by resource","title":"2. Bills","source":"https://fptcloud.com/documents/billing/?doc=view-bill-charges-by-resource","parent":"https://fptcloud.com/documents/billing","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Question 1","permalink":"/billing/question-1"},"next":{"title":"View bill charges by service","permalink":"/billing/view-bill-charges-by-service"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/billing/view-bill-charges-by-resource.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'View bill charges by resource',
	title: '2. Bills',
	source: 'https://fptcloud.com/documents/billing/?doc=view-bill-charges-by-resource',
	parent: 'https://fptcloud.com/documents/billing',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Bills';

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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-bills",
        children: "2. Bills"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xem đối soát theo tài nguyên sử dụng (Charges by resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể chọn loại tài nguyên (resource type) và xem chi tiết số lượng sử dụng - đơn giá - thành tiền với từng tài nguyên. Dữ liệu Charges by resource sẽ tương ứng với dữ liệu tại sheet “Details” trong file đối soát khi người dùng tải về."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(675429)/* ["default"] */ .A) + "",
        width: "939",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(129240)/* ["default"] */ .A) + "",
        width: "939",
        height: "534"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng có thể sử dụng thanh tìm kiếm “search by name” để tìm và xem dữ liệu bill của tài nguyên có tên chứa ký tự thỏa mãn. Tổng tiền (total) được thay đổi bằng cách cộng tổng Amount của các tài nguyên thỏa mãn điều kiện tìm kiếm."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(880457)/* ["default"] */ .A) + "",
        width: "939",
        height: "531"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(645127)/* ["default"] */ .A) + "",
        width: "939",
        height: "531"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Người dùng có thể sử dụng filter để lọc các tài nguyên theo:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Start date – End date: Tài nguyên có thời gian Start time - End time nằm trong khoảng filter."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Service: Tài nguyên thuộc dịch vụ. Với các tài nguyên không chia theo dịch vụ, điều kiện này sẽ bị ẩn đi."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configuration: Cấu hình hoặc size của tài nguyên. Với các tài nguyên không có cấu hình/size, điều kiện này sẽ bị ẩn đi."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(124455)/* ["default"] */ .A) + "",
        width: "939",
        height: "534"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(751153)/* ["default"] */ .A) + "",
        width: "939",
        height: "528"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(973261)/* ["default"] */ .A) + "",
        width: "939",
        height: "513"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./view-bill-charges-by-service",
        children: " Previous Xem đối soát theo tên dịch vụ (Charges by service) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./download-bills",
        children: " Next Tải file đối soát chi tiết "
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

/***/ 751153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/669281dfe20f-image-1744088580081-2d298dd562f8f7d0dd1e62e1cd99153f.png");

/***/ },

/***/ 124455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/74df515769d9-image-1744088575386-e1b8b6d736c7e1520cc794ca85452702.png");

/***/ },

/***/ 645127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/881fb46e106a-image-1744088568905-f548e254ec9548d2fbd0347775a1b4f3.png");

/***/ },

/***/ 675429
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8b7ba389f8a9-image-1744088548570-dc62c48c8a26e5b308515d35869d57c8.png");

/***/ },

/***/ 129240
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8e3a4ec27dda-image-1744088556698-8f74401507f59803e33b910771fd1a5d.png");

/***/ },

/***/ 880457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bd609838c511-image-1744088563151-79fdf01d1fb79e5b3c0d67d21b578c4b.png");

/***/ },

/***/ 973261
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f305f8630bd4-image-1744088584665-8a5bdbc30525693d769c24743b945241.png");

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