"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[52115],{

/***/ 908647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_initial_service_authorization_md_4d1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-initial-service-authorization-md-4d1.json
const site_docs_vpn_site_to_site_0_initial_service_authorization_md_4d1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/initial/service-authorization","title":"Hướng dẫn phân quyền sử dụng dịch vụ","description":"*","source":"@site/docs/vpn-site-to-site-0/initial/service-authorization.md","sourceDirName":"vpn-site-to-site-0/initial","slug":"/vpn-site-to-site-0/initial/service-authorization","permalink":"/vpn-site-to-site-0/initial/service-authorization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Hướng dẫn phân quyền sử dụng dịch vụ","title":"Hướng dẫn phân quyền sử dụng dịch vụ","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=service-authorization","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Giới thiệu chi tiết","permalink":"/vpn-site-to-site-0/initial/overviews-vpn"},"next":{"title":"Quản lý VPN","permalink":"/vpn-site-to-site-0/management/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/initial/service-authorization.md


const frontMatter = {
	sidebar_label: 'Hướng dẫn phân quyền sử dụng dịch vụ',
	title: 'Hướng dẫn phân quyền sử dụng dịch vụ',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=service-authorization',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Hướng dẫn phân quyền sử dụng dịch vụ';

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
        id: "hướng-dẫn-phân-quyền-sử-dụng-dịch-vụ",
        children: "Hướng dẫn phân quyền sử dụng dịch vụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thực hiện phân quyền cho user khác sử dụng dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN Site to Site"
      }), " trong cùng project, Quý khách thao tác theo các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Login bằng tài khoản quản lý trên trang console của FCI tại đường link: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Truy cập dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IAM → Roles"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220690)/* ["default"] */ .A) + "",
        width: "1826",
        height: "910"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Click khởi tạo role và chọn service VPN và gán các quyền sử dụng của dịch vụ ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581242)/* ["default"] */ .A) + "",
        width: "1824",
        height: "894"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Tạo thêm 1 permission và lựa chọn dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), " kèm quyền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Network:List”"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), " : Đối với các dải mạng sử dụng máy chủ baremetal, quý khách hàng cần bổ sung thêm permission ở dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HPC"
      }), " kèm quyền “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ListSubnet"
      }), " ” ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18998)/* ["default"] */ .A) + "",
        width: "1826",
        height: "910"
      }), " Sau khi hoàn thành các thông tin, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Create role\""
      }), " để tạo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Khởi tạo user group và chọn roles “VPN_user” vừa khởi tạo ở bước trên ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(25762)/* ["default"] */ .A) + "",
        width: "1826",
        height: "910"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User"
      }), " và click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Invite user”"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385840)/* ["default"] */ .A) + "",
        width: "1826",
        height: "910"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Điền user muốn sử dụng VPN và lựa chọn user group, roles ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258991)/* ["default"] */ .A) + "",
        width: "1826",
        height: "910"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Check mail của tài khoản được invite và truy cập dịch vụ để sử dụng ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804904)/* ["default"] */ .A) + "",
        width: "450",
        height: "311"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-customergw",
        children: " Previous Hướng dẫn xoá Customer gateway "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./set_alert",
        children: " Next Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard "
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

/***/ 804904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22b3d9cb38bf-h-eae9dc196255a9f8484c5984189ddada.png");

/***/ },

/***/ 220690
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/36845f2b1ef9-list_role-f169e97380d072ced17cd74804f0601f.png");

/***/ },

/***/ 385840
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/454403cbd8e9-5-382f9c8b6ad9a61ea6ea470571a9e444.png");

/***/ },

/***/ 18998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5b07fe07ab0e-3-2-65e9c976194973cab8ea8a0f775884e1.png");

/***/ },

/***/ 581242
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/859ad22a7fbc-2-1-d5965c7cb26e20448061acead7b98eba.png");

/***/ },

/***/ 258991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e975ba121ee8-6-1-102b0fe72eff4d744271f40e54102aaf.png");

/***/ },

/***/ 25762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fdfbf0f85dc9-4-2-823213f211776839f305e1cdf2928137.png");

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