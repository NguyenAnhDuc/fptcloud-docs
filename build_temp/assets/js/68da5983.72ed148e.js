"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[929],{

/***/ 448818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sso_single_sign_on_use_sso_md_68d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sso-single-sign-on-use-sso-md-68d.json
const site_docs_sso_single_sign_on_use_sso_md_68d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sso-single-sign-on/use-sso","title":"2. SSO – Single sign-on","description":"Sử dụng tính năng SSO","source":"@site/docs/sso-single-sign-on/use-sso.md","sourceDirName":"sso-single-sign-on","slug":"/sso-single-sign-on/use-sso","permalink":"/sso-single-sign-on/use-sso","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Use sso","title":"2. SSO – Single sign-on","source":"https://fptcloud.com/documents/sso-single-sign-on/?doc=use-sso","parent":"https://fptcloud.com/documents/sso-single-sign-on","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"SSO – Single sign-on","permalink":"/sso-single-sign-on/overview"},"next":{"title":"Apply policy","permalink":"/policy-management/apply-policy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sso-single-sign-on/use-sso.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Use sso',
	title: '2. SSO – Single sign-on',
	source: 'https://fptcloud.com/documents/sso-single-sign-on/?doc=use-sso',
	parent: 'https://fptcloud.com/documents/sso-single-sign-on',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. SSO – Single sign-on';

const assets = {

};



const toc = [{
  "value": "<strong>Cách 1: Vào bằng đường dẫn</strong>",
  "id": "cách-1-vào-bằng-đường-dẫn",
  "level": 4
}, {
  "value": "<strong>Cách 2: Vào bằng trang select-method</strong>",
  "id": "cách-2-vào-bằng-trang-select-method",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h4: "h4",
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
        id: "2-sso--single-sign-on",
        children: "2. SSO – Single sign-on"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng tính năng SSO"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi cấu hình SSO, người dùng có thể đăng nhập vào hệ thống theo 2 cách:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cách-1-vào-bằng-đường-dẫn",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 1: Vào bằng đường dẫn"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập vào đường dẫn:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "http://sub-domain.fptcloud.com",
        children: "http://sub-domain.fptcloud.com"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Xác thực thông tin đăng nhập"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(942787)/* ["default"] */ .A) + "",
        width: "683",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Hệ thống xác thực đăng nhập và chuyển hướng người dùng vào trang quản lý instance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cách-2-vào-bằng-trang-select-method",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 2: Vào bằng trang select-method"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập đường dẫn: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/login/select-method",
        children: "https://console.fptcloud.com/login/select-method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Login with your organization"
      }), " \""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(401546)/* ["default"] */ .A) + "",
        width: "731",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập sub-domain người dùng đã đăng kí"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(891711)/* ["default"] */ .A) + "",
        width: "731",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Xác thực thông tin đăng nhập"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(803830)/* ["default"] */ .A) + "",
        width: "683",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Hệ thống xác thực đăng nhập và chuyển hướng người dùng vào trang quản lý instance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./config-sso",
        children: " Previous Cấu hình SSO "
      })
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

/***/ 891711
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3134f1b37e24-image-1734056636838-c759b91edfb82d2484c22923aa5b387c.png");

/***/ },

/***/ 401546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/805a1ea0e4fb-image-1734056612511-a99a91cd767df7a123c4d7a80eb8d24d.png");

/***/ },

/***/ 803830
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d806a4b50ac1-image-1734056657577-1e268f2724bbfa9b934429bb40d50fbf.png");

/***/ },

/***/ 942787
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ddd3fa5bd954-image-1734056582232-1e268f2724bbfa9b934429bb40d50fbf.png");

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