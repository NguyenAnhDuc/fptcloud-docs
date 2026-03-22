"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[87970],{

/***/ 944659
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_change_network_config_0_change_static_ip_in_window_server_md_079_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-change-network-config-0-change-static-ip-in-window-server-md-079.json
const site_docs_change_network_config_0_change_static_ip_in_window_server_md_079_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"change-network-config-0/change-static-ip-in-window-server","title":"2. Change Network Config","description":"Sửa static IP trên Window server","source":"@site/docs/change-network-config-0/change-static-ip-in-window-server.md","sourceDirName":"change-network-config-0","slug":"/change-network-config-0/change-static-ip-in-window-server","permalink":"/change-network-config-0/change-static-ip-in-window-server","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Change static ip in window server","title":"2. Change Network Config","source":"https://fptcloud.com/documents/change-network-config-0/?doc=change-static-IP-in-window-server","parent":"https://fptcloud.com/documents/change-network-config-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Change static ip in ubuntu server","permalink":"/change-network-config-0/change-static-ip-in-ubuntu-server"},"next":{"title":"Change statis ip in centos","permalink":"/change-network-config-0/change-statis-ip-in-centos"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/change-network-config-0/change-static-ip-in-window-server.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Change static ip in window server',
	title: '2. Change Network Config',
	source: 'https://fptcloud.com/documents/change-network-config-0/?doc=change-static-IP-in-window-server',
	parent: 'https://fptcloud.com/documents/change-network-config-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Change Network Config';

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
      children: "Sửa static IP trên Window server"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Kiểm tra tình trạng hiện tại"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi edit NIC, IP NIC là 132.0.0.182"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window 2012",
        src: (__webpack_require__(895709)/* ["default"] */ .A) + "",
        width: "1024",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bấm vào Console và đăng nhập vào hệ thống"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vào Power Shell hoặc Comand Line – Nhập “ipconfig” – Enter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window power shell",
        src: (__webpack_require__(852469)/* ["default"] */ .A) + "",
        width: "684",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : vào Run – Nhập “ncpa.cpl”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window run ncpa.cpl",
        src: (__webpack_require__(944204)/* ["default"] */ .A) + "",
        width: "553",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Phải chuột vào card mạng cần thay đổi Config, chọn propertise"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window network setting",
        src: (__webpack_require__(342994)/* ["default"] */ .A) + "",
        width: "921",
        height: "403"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Thay đổi các thông số theo cấu hình mới – OK"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window network setting config IPv4 ok",
        src: (__webpack_require__(554426)/* ["default"] */ .A) + "",
        width: "1024",
        height: "802"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Kiểm tra lại các thay đổi và ping thử"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window network setting config IPv4 test",
        src: (__webpack_require__(620065)/* ["default"] */ .A) + "",
        width: "1024",
        height: "749"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./change-static-ip-in-ubuntu-server",
        children: " Previous Sửa static IP trên Ubuntu server "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./change-statis-ip-in-centos",
        children: " Next Sửa static IP trên CentOS "
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

/***/ 852469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1b543bec768a-NIC-VM-window-power-shell-44b70357e44809ed3dc08686dba945be.png");

/***/ },

/***/ 944204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4147bd625483-NIC-VM-window-run-ncpa.cpl_-835ae812ff50cdaff7ef65fe9c1a7e8c.png");

/***/ },

/***/ 620065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b70a68d13d3-NIC-VM-window-network-setting-config-IPv4-test-102-1fe8a26bb64fbaf11bdc14c6c5483cd7.png");

/***/ },

/***/ 554426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab0305c9972d-NIC-VM-window-network-setting-config-IPv4-ok-1024x-98711f99ed9459d4728349ac8836e777.png");

/***/ },

/***/ 895709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdd0fc49e998-NIC-VM-window-2012-1024x372-39420f824ac3be60109eead53bcb5d65.png");

/***/ },

/***/ 342994
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee7e82cd94a6-NIC-VM-window-network-setting-8d5a82d913ee19e86e074c59f43ec713.png");

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