"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[49849],{

/***/ 230649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_initial_setup_md_771_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-initial-setup-md-771.json
const site_docs_object_storage_initial_setup_md_771_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/initial-setup","title":"2. FPT Object Storage","description":"Initial Setup","source":"@site/docs/object-storage/initial-setup.md","sourceDirName":"object-storage","slug":"/object-storage/initial-setup","permalink":"/object-storage/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Initial Setup","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=initial-setup","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"FPT Object Storage","permalink":"/object-storage/"},"next":{"title":"Migrate Bucket Data","permalink":"/object-storage/migrate-bucket-data"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/initial-setup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Initial Setup',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=initial-setup',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để bắt đầu sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , người dùng cần hoàn thành các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tạo tài khoản FPT Cloud và đăng nhập"
          }), " Để đăng ký tài khoản FPT Cloud, truy cập trang chủ tại ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/",
            children: "https://fptcloud.com/"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Chọn chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sign Up"
            }), " và nhập các thông tin theo hướng dẫn của hệ thống. Bộ phận hỗ trợ sẽ liên hệ ngay sau đó để xác nhận thông tin và tạo tài khoản."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Để đăng nhập vào FPT Portal, truy cập vào FPT Cloud và nhập tài khoản cùng mật khẩu đã được cấp. Sau khi đăng nhập, bạn sẽ thấy các thông tin tài khoản của mình như ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tenant"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Region"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "VPC"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Đăng ký sử dụng dịch vụ FPT Object Storage"
          }), " Nếu bạn đã có tài khoản FPT Cloud và có nhu cầu sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Object Storage"
          }), " , hãy liên hệ với bộ phận hỗ trợ. Sau khi cung cấp các thông tin cần thiết, tài khoản của bạn sẽ được mở tính năng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Object Storage"
          }), "."]
        }), "\n"]
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