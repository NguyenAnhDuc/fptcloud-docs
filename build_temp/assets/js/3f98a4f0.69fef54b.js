"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[22602],{

/***/ 737189
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_enable_hsts_to_http_listener_md_3f9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-enable-hsts-to-http-listener-md-3f9.json
const site_docs_load_balancer_enable_hsts_to_http_listener_md_3f9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/enable-hsts-to-http-listener","title":"Enable HSTS to HTTPS Listener","description":"*","source":"@site/docs/load-balancer/enable-hsts-to-http-listener.md","sourceDirName":"load-balancer","slug":"/load-balancer/enable-hsts-to-http-listener","permalink":"/load-balancer/enable-hsts-to-http-listener","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Enable HSTS to HTTPS Listener","title":"Enable HSTS to HTTPS Listener","source":"https://fptcloud.com/documents/load-balancer/?doc=enable-hsts-to-http-listener","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình L7 policy cho Listener","permalink":"/load-balancer/chinh-sua-listener"},"next":{"title":"Import SSL Certificate cho Load Balancer","permalink":"/load-balancer/import-ssl-certificate-cho-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/enable-hsts-to-http-listener.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Enable HSTS to HTTPS Listener',
	title: 'Enable HSTS to HTTPS Listener',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=enable-hsts-to-http-listener',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Enable HSTS to HTTPS Listener';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
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
        id: "enable-hsts-to-https-listener",
        children: "Enable HSTS to HTTPS Listener"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HSTS (HTTP Strict Transport Security)"
      }), " là một chính sách bảo mật giúp ngăn chặn các cuộc tấn công “man-in-the-middle” bằng cách yêu cầu trình duyệt luôn sử dụng kết nối an toàn (HTTPS) khi giao tiếp với máy chủ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Enable HSTS to HTTPS Listener”"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Load Balancer"
      }), " cho ép bạn tăng cường bảo mật cho ứng dụng của mình bằng cách yêu cầu trình duyệt chỉ giao tiếp qua HTTPS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng tham khảo cách tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener",
        children: "tại đây."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.em, {
          children: ["Note: Để sử dụng tính năng, tại mục Protocol, người dùng chọn giao thức TERMINATED_HTTPS và gắn SSL Certificate từ danh sách khả dụng cho Listener. Nếu chưa có SSL Certificate, người dùng tham khảo cách tạo", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer",
            children: "tại đây."
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable HSTS"
      }), " để sử dụng tính năng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HSTS max age:"
        }), " Nhập số nguyên, giới hạn 256 ký tự, không nhập số âm. Mặc định là 31536000."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thời lượng (tính bằng giây) trong đó HSTS policy sẽ được trình duyệt thực hiện. Giúp xác định trong bao lâu trình duyệt sẽ nhớ rằng một trang web chỉ được truy cập thông qua HTTPS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Include Subdomain:"
          }), " Cấu hình HSTS có apply cho tất cả các subdomain không hay chỉ apply cho domain này."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preload:"
          }), " Domain có được đưa vào danh sách preload của web browser hay không."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Listener"
      }), " để tiến hành tạo hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để huỷ bỏ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./redirect-prefix",
        children: " Previous Redirect prefix "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./allow-ip-cidr",
        children: " Next Cấu hình Allow IP/CIDR "
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