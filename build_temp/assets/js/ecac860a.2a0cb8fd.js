"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79556],{

/***/ 722488
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_remove_the_network_card_from_the_virtual_machine_md_eca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-remove-the-network-card-from-the-virtual-machine-md-eca.json
const site_docs_cloud_server_network_remove_the_network_card_from_the_virtual_machine_md_eca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/remove-the-network-card-from-the-virtual-machine","title":"Gỡ card mạng (NIC) khỏi máy ảo","description":"*","source":"@site/docs/cloud-server/network/remove-the-network-card-from-the-virtual-machine.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/remove-the-network-card-from-the-virtual-machine","permalink":"/cloud-server/network/remove-the-network-card-from-the-virtual-machine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Gỡ card mạng (NIC) khỏi máy ảo","title":"Gỡ card mạng (NIC) khỏi máy ảo","source":"https://fptcloud.com/documents/cloud-server/?doc=remove-the-network-card-from-the-virtual-machine","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý Security Group","permalink":"/cloud-server/network/quan-ly-security-group"},"next":{"title":"Filter Security Group","permalink":"/cloud-server/network/security-group-filter"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/remove-the-network-card-from-the-virtual-machine.md


const frontMatter = {
	sidebar_label: 'Gỡ card mạng (NIC) khỏi máy ảo',
	title: 'Gỡ card mạng (NIC) khỏi máy ảo',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=remove-the-network-card-from-the-virtual-machine',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Gỡ card mạng (NIC) khỏi máy ảo';

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
        id: "gỡ-card-mạng-nic-khỏi-máy-ảo",
        children: "Gỡ card mạng (NIC) khỏi máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để gỡ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "card mạng"
      }), " khỏi máy ảo bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Interface"
      }), " của máy ảo. Hệ thống sẽ hiển thị các card mạng đang được gắn với máy ảo này."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(945180)/* ["default"] */ .A) + "",
        width: "975",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Trên bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của card mạng cần xóa, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(638860)/* ["default"] */ .A) + "",
        width: "975",
        height: "390"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý gỡ, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(325222)/* ["default"] */ .A) + "",
        width: "688",
        height: "288"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./attach-a-network-card-to-the-virtual-machine",
        children: " Previous Gắn thêm card mạng (NIC) vào máy ảo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao",
        children: " Next Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo "
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

/***/ 945180
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/180450d85c61-image-1744793241168-d43aee65b9119c3512f6eb6d43e0ff41.png");

/***/ },

/***/ 638860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/47123e3d9ed5-image-1744793619214-647d99913488d15aff75f763225f024c.png");

/***/ },

/***/ 325222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b2e4e0e8fe46-image-1712723201176-b85b7c2d1f7f4c2c4958d77187e588db.png");

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