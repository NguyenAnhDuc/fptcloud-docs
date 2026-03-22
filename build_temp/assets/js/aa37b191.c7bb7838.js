"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70498],{

/***/ 625723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_lock_unlock_instance_deletion_index_md_aa3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-lock-unlock-instance-deletion-index-md-aa3.json
const site_docs_lock_unlock_instance_deletion_index_md_aa3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"lock-unlock-instance-deletion/index","title":"2. Lock & Unlock Instance Deletion","description":"Lock & Unlock Instance Deletion","source":"@site/docs/lock-unlock-instance-deletion/index.md","sourceDirName":"lock-unlock-instance-deletion","slug":"/lock-unlock-instance-deletion/","permalink":"/lock-unlock-instance-deletion/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Lock & Unlock Instance Deletion","title":"2. Lock & Unlock Instance Deletion","source":"https://fptcloud.com/documents/lock-unlock-instance-deletion/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/change-network-config-0/initial-setup"},"next":{"title":"Initial setup","permalink":"/lock-unlock-instance-deletion/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/lock-unlock-instance-deletion/index.md


const frontMatter = {
	sidebar_label: 'Lock & Unlock Instance Deletion',
	title: '2. Lock & Unlock Instance Deletion',
	source: 'https://fptcloud.com/documents/lock-unlock-instance-deletion/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Lock & Unlock Instance Deletion';

const assets = {

};



const toc = [{
  "value": "Giới thiệu",
  "id": "giới-thiệu",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn nhanh (Quick Starts)",
  "id": "hướng-dẫn-nhanh-quick-starts",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-lock--unlock-instance-deletion",
        children: "2. Lock & Unlock Instance Deletion"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lock & Unlock Instance Deletion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể khóa một máy ảo lại để ngăn chúng không bị xóa/ chấm dứt một cách vô tình. Điều này giúp tránh việc bạn vô tình xóa một máy chạy sản xuất thay vì máy thử nghiệm. Tính năng này giúp giảm rủi ro liên quan đến lỗi người dùng và bảo vệ dữ liệu của bạn trên các máy ảo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-nhanh-quick-starts",
      children: "Hướng dẫn nhanh (Quick Starts)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./lock-instance-deletion",
          children: " Lock Instance Deletion "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./unlock-instance-deletion",
          children: " Unlock Instance Deletion "
        })
      }), "\n"]
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