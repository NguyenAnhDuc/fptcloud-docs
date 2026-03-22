"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[82175],{

/***/ 193931
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_import_ssl_certificate_cho_load_balancer_md_d32_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-import-ssl-certificate-cho-load-balancer-md-d32.json
const site_docs_load_balancer_import_ssl_certificate_cho_load_balancer_md_d32_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/import-ssl-certificate-cho-load-balancer","title":"Import SSL Certificate cho Load Balancer","description":"*","source":"@site/docs/load-balancer/import-ssl-certificate-cho-load-balancer.md","sourceDirName":"load-balancer","slug":"/load-balancer/import-ssl-certificate-cho-load-balancer","permalink":"/load-balancer/import-ssl-certificate-cho-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Import SSL Certificate cho Load Balancer","title":"Import SSL Certificate cho Load Balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Enable HSTS to HTTPS Listener","permalink":"/load-balancer/enable-hsts-to-http-listener"},"next":{"title":"Load Balancer","permalink":"/load-balancer/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/import-ssl-certificate-cho-load-balancer.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Import SSL Certificate cho Load Balancer',
	title: 'Import SSL Certificate cho Load Balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Import SSL Certificate cho Load Balancer';

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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "import-ssl-certificate-cho-load-balancer",
        children: "Import SSL Certificate cho Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để import ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificate"
      }), " , bạn thực hiện theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer,"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tab Certificate."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại đây, nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Import SSL Certificate."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên của certificate, nên sử dụng tên có thể phân biệt được giữa các certificate , ví dụ tên certificate là domain của certificate đó."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate"
          }), " : Chứng chỉ số, có định dạng chuẩn PEM."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Private Key:"
          }), " Khóa bí mật của chứng chỉ số đó, có định dạng chuẩn PEM."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để thực hiện import ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificate"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để huỷ bỏ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-ssl-certificate",
        children: " Previous Quản lý SSL Certificate "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-ssl-certificate",
        children: " Next Xoá SSL Certificate "
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