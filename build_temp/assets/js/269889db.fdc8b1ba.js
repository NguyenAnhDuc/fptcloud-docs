"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[27303],{

/***/ 175298
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_management_disable_vpn_s_2_s_connection_md_269_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-management-disable-vpn-s-2-s-connection-md-269.json
const site_docs_vpn_site_to_site_0_management_disable_vpn_s_2_s_connection_md_269_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/management/disable-vpn-s2s-connection","title":"Disable VPN-Site-to-Site","description":"*","source":"@site/docs/vpn-site-to-site-0/management/disable-vpn-s2s-connection.md","sourceDirName":"vpn-site-to-site-0/management","slug":"/vpn-site-to-site-0/management/disable-vpn-s2s-connection","permalink":"/vpn-site-to-site-0/management/disable-vpn-s2s-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Disable VPN-Site-to-Site","title":"Disable VPN-Site-to-Site","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=disable-VPN-S2S-connection","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xóa VPN Site-to-Site","permalink":"/vpn-site-to-site-0/management/delete-vpn-s2s-connection"},"next":{"title":"Download Config VPN Site-to-Site","permalink":"/vpn-site-to-site-0/management/download-config-vpn-s2s"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/management/disable-vpn-s2s-connection.md


const frontMatter = {
	sidebar_label: 'Disable VPN-Site-to-Site',
	title: 'Disable VPN-Site-to-Site',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=disable-VPN-S2S-connection',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Disable VPN-Site-to-Site';

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
        id: "disable-vpn-site-to-site",
        children: "Disable VPN-Site-to-Site"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vô hiệu hóa VPN đang hoạt động (nếu VPN đang Active)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn kết nối VPN cần Disable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Config 15",
        src: (__webpack_require__(695901)/* ["default"] */ .A) + "",
        width: "1024",
        height: "262"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Disable VPN",
        src: (__webpack_require__(358362)/* ["default"] */ .A) + "",
        width: "1024",
        height: "354"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Xác nhận việc Disable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Disable VPN confirm",
        src: (__webpack_require__(438347)/* ["default"] */ .A) + "",
        width: "1024",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " VPN sẽ chuyển sang trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deactivating"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Config inactive",
        src: (__webpack_require__(587029)/* ["default"] */ .A) + "",
        width: "1024",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./enable-vpn-s2s-connection",
        children: " Next Enable VPN-Site-to-Site "
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

/***/ 358362
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0338f03770d6-Disable-VPN-1024x354-8afed8c1d00e24d1133562bee5e3d9e6.png");

/***/ },

/***/ 695901
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/574882a19472-Config-15-1024x262-672880ebda22236934b5054d12c55235.png");

/***/ },

/***/ 438347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a8ee08e49340-Disable-VPN-confirm-1024x445-ee8b199682921be2542ca62578042ac9.png");

/***/ },

/***/ 587029
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1dec1de2cba-Config-inactive-1024x238-776162fc5b9dd8c43ef4eb8cdf32fa13.png");

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