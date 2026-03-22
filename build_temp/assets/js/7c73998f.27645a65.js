"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[82511],{

/***/ 205435
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_listener_redirect_http_request_sang_https_md_7c7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-listener-redirect-http-request-sang-https-md-7c7.json
const site_docs_load_balancer_listener_redirect_http_request_sang_https_md_7c7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/listener/redirect-http-request-sang-https","title":"Cấu hình redirect HTTP request sang HTTPS","description":"*","source":"@site/docs/load-balancer/listener/redirect-http-request-sang-https.md","sourceDirName":"load-balancer/listener","slug":"/load-balancer/listener/redirect-http-request-sang-https","permalink":"/load-balancer/listener/redirect-http-request-sang-https","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình redirect HTTP request sang HTTPS","title":"Cấu hình redirect HTTP request sang HTTPS","source":"https://fptcloud.com/documents/load-balancer/?doc=redirect-http-request-sang-https","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý Listener","permalink":"/load-balancer/listener/quan-ly-listener"},"next":{"title":"Redirect prefix","permalink":"/load-balancer/listener/redirect-prefix"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/listener/redirect-http-request-sang-https.md


const frontMatter = {
	sidebar_label: 'Cấu hình redirect HTTP request sang HTTPS',
	title: 'Cấu hình redirect HTTP request sang HTTPS',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=redirect-http-request-sang-https',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình redirect HTTP request sang HTTPS';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cấu-hình-redirect-http-request-sang-https",
        children: "Cấu hình redirect HTTP request sang HTTPS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để bảo vệ dữ liệu và toàn vẹn, người dùng có thể lựa chọn việc redirect toàn bộ các lưu lượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP sang HTTPS"
      }), " , người dùng làm theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tạo mới một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " sử dụng giao thức ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP, port 80"
      }), " sau đó, enable tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redirect HTTP to HTTPS"
      }), " tại màn hình cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 policy"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " này, người dùng tham khảo cách tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener",
          children: "tại đây."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener HTTP, port 80"
        }), " mới tạo không cần thiết phải gắn Server pool tương ứng, do đã enable redirect toàn bộ request ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP thành HTTPS"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo mới một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTPS, port 443"
      }), " để xử lý các request HTTPS, gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool"
      }), " tương ứng và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificate"
      }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " , người dùng tham khảo cách tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener",
          children: "tại đây."
        })
      }), " Nếu chưa có ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificate,"
      }), " người dùng tham khảo cách tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer",
          children: "tại đây."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kiểm tra truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP"
      }), " đã tự động redirect sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTPS"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./chinh-sua-listener",
        children: " Previous Cấu hình L7 policy cho Listener "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./redirect-prefix",
        children: " Next Redirect prefix "
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