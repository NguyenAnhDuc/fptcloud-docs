"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[25870],{

/***/ 959699
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_change_network_config_0_index_md_8bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-change-network-config-0-index-md-8bb.json
const site_docs_change_network_config_0_index_md_8bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"change-network-config-0/index","title":"2. Change Network Config","description":"Change Network Config","source":"@site/docs/change-network-config-0/index.md","sourceDirName":"change-network-config-0","slug":"/change-network-config-0/","permalink":"/change-network-config-0/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Change Network Config","title":"2. Change Network Config","source":"https://fptcloud.com/documents/change-network-config-0/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Change statis ip in centos","permalink":"/change-network-config-0/change-statis-ip-in-centos"},"next":{"title":"Initial setup","permalink":"/change-network-config-0/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/change-network-config-0/index.md


const frontMatter = {
	sidebar_label: 'Change Network Config',
	title: '2. Change Network Config',
	source: 'https://fptcloud.com/documents/change-network-config-0/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Change Network Config';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-change-network-config",
        children: "2. Change Network Config"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Change Network Config"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có nhiều lý do khiến bạn có thể cần thay đổi và đặt lại địa chỉ IP tĩnh cho thiết bị của mình, chẳng hạn như cấu hình 1 máy chủ cố định hoặc cần đặt quy luật cho một nhóm máy tính trong nội bộ. Một kịch bản nữa là khi bạn thay đổi cấu hình card NIC trên hệ thống Cloud được cung cấp bởi FPT Smart Cloud, địa chỉ IP bên trong máy sẽ không tự cập nhật theo và bạn cần cấu hình thủ công (ngoài ra có một số phương pháp khác xử lý trong tình huống này nhưng không được đề cập trong nội dung bài viết)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điều cần lưu ý trước khi bạn thay"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "đổi thông tin file config network"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đặt địa chỉ IP tĩnh có thể giúp tránh xung đột mạng nhưng có thể khiến một số thiết bị ngừng hoạt động bình thường. Đặt địa chỉ IP tĩnh là một chức năng mạng nâng cao và cần có kiến thức cơ bản về TCP/IP."
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
          href: "./change-static-ip-in-ubuntu-server",
          children: " Sửa static IP trên Ubuntu server "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./change-static-ip-in-window-server",
          children: " Sửa static IP trên Window server "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./change-statis-ip-in-centos",
          children: " Sửa static IP trên CentOS "
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