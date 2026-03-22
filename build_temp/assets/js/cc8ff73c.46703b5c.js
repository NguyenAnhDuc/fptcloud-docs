"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[30824],{

/***/ 863391
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_policy_management_disable_policy_md_cc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-policy-management-disable-policy-md-cc8.json
const site_docs_policy_management_disable_policy_md_cc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"policy-management/disable-policy","title":"2. Policy Management","description":"Disable policy","source":"@site/docs/policy-management/disable-policy.md","sourceDirName":"policy-management","slug":"/policy-management/disable-policy","permalink":"/policy-management/disable-policy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Disable policy","title":"2. Policy Management","source":"https://fptcloud.com/documents/policy-management/?doc=disable-policy","parent":"https://fptcloud.com/documents/policy-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Delete policy","permalink":"/policy-management/delete-policy"},"next":{"title":"Edit policy","permalink":"/policy-management/edit-policy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/policy-management/disable-policy.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Disable policy',
	title: '2. Policy Management',
	source: 'https://fptcloud.com/documents/policy-management/?doc=disable-policy',
	parent: 'https://fptcloud.com/documents/policy-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Policy Management';

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
        id: "2-policy-management",
        children: "2. Policy Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disable policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để sử dụng tính năng Disable Policy, người dùng cần đăng nhập vào hệ thống với phân quyền Tenant owner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở meu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Management"
      }), ". Người dùng chọn một Policy đang ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable policy"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(712898)/* ["default"] */ .A) + "",
        width: "944",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Một hộp thoại hiện lên, người dùng nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable policy"
      }), " để xác nhận hành động. Hệ thống sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tắt"
      }), " Policy và cập nhật trạng thái trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(445158)/* ["default"] */ .A) + "",
        width: "743",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Hệ thống sẽ tắt Policy và cập nhật trạng thái từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), " trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(598521)/* ["default"] */ .A) + "",
        width: "944",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-policy",
        children: " Previous Delete policy "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./enable-policy",
        children: " Next Enable policy "
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

/***/ 712898
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/005669dd0ba4-image-1719821801276-88d252fef24e3a56edd7d4852fda0a3f.png");

/***/ },

/***/ 598521
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3247e00ed848-image-1719821825580-5a83c2c667522d0b1ea52c22cc99c6d8.png");

/***/ },

/***/ 445158
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d3ebd4bfade9-image-1719821812687-113494ed9b3ea115ee78ae1d8494a320.png");

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