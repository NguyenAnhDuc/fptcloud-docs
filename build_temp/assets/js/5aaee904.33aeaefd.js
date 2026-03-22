"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37289],{

/***/ 23738
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_billing_view_bill_charges_by_service_md_5aa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-billing-view-bill-charges-by-service-md-5aa.json
const site_docs_billing_view_bill_charges_by_service_md_5aa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"billing/view-bill-charges-by-service","title":"2. Bills","description":"Xem đối soát theo tên dịch vụ (Charges by service)","source":"@site/docs/billing/view-bill-charges-by-service.md","sourceDirName":"billing","slug":"/billing/view-bill-charges-by-service","permalink":"/billing/view-bill-charges-by-service","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"View bill charges by service","title":"2. Bills","source":"https://fptcloud.com/documents/billing/?doc=view-bill-charges-by-service","parent":"https://fptcloud.com/documents/billing","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"View bill charges by resource","permalink":"/billing/view-bill-charges-by-resource"},"next":{"title":"View bills","permalink":"/billing/view-bills"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/billing/view-bill-charges-by-service.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'View bill charges by service',
	title: '2. Bills',
	source: 'https://fptcloud.com/documents/billing/?doc=view-bill-charges-by-service',
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
      children: "Xem đối soát theo tên dịch vụ (Charges by service)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể xem số lượng sử dụng đã được tính tiền của từng dịch vụ, hình thức tính tiền, đơn giá và thành tiền của từng dịch vụ. Dữ liệu Charges by service sẽ tương ứng với dữ liệu tại sheet “Invoice” trong file đối soát khi người dùng tải về."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(779844)/* ["default"] */ .A) + "",
        width: "939",
        height: "534"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Filter: Người dùng có thể filter dữ liệu Charges by service với bộ lọc:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invoice group"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Payment type"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Service category"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Service type"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Service name"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(918678)/* ["default"] */ .A) + "",
        width: "939",
        height: "527"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả filter thể hiện dữ liệu bill của các dịch vụ thỏa mãn điều kiện AND của các bộ lọc và tổng tiền (total) được tính bằng cách cộng tổng Amount của các dịch vụ thỏa mãn bộ lọc."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(592289)/* ["default"] */ .A) + "",
        width: "939",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./view-bills",
        children: " Previous Xem đối soát theo kỳ hóa đơn "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./view-bill-charges-by-resource",
        children: " Next Xem đối soát theo tài nguyên sử dụng (Charges by resource) "
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

/***/ 918678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29a3fbfcc7be-image-1744088537330-3e0f431e85560010641a37020ae07122.png");

/***/ },

/***/ 779844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/341fc3c4d923-image-1744088527526-cbeb1cc98ec3d9bcaebee890a24e5f00.png");

/***/ },

/***/ 592289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9ec1fe0b7876-image-1744088542322-6ff7468c1b73681fc85e80cee610b110.png");

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