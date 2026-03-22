"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26434],{

/***/ 490120
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_backup_as_a_service_install_veeam_agent_for_windows_md_435_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-backup-as-a-service-install-veeam-agent-for-windows-md-435.json
const site_docs_fpt_backup_as_a_service_install_veeam_agent_for_windows_md_435_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-backup-as-a-service/install-veeam-agent-for-windows","title":"2. FPT Backup As a Service","description":"Install Veeam Agent for Windows","source":"@site/docs/fpt-backup-as-a-service/install-veeam-agent-for-windows.md","sourceDirName":"fpt-backup-as-a-service","slug":"/fpt-backup-as-a-service/install-veeam-agent-for-windows","permalink":"/fpt-backup-as-a-service/install-veeam-agent-for-windows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Install veeam agent for windows","title":"2. FPT Backup As a Service","source":"https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=install-veeam-agent-for-windows","parent":"https://fptcloud.com/documents/fpt-backup-as-a-service","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Install veeam agent for linux","permalink":"/fpt-backup-as-a-service/install-veeam-agent-for-linux"},"next":{"title":"Managing alarms","permalink":"/fpt-backup-as-a-service/managing-alarms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-backup-as-a-service/install-veeam-agent-for-windows.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Install veeam agent for windows',
	title: '2. FPT Backup As a Service',
	source: 'https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=install-veeam-agent-for-windows',
	parent: 'https://fptcloud.com/documents/fpt-backup-as-a-service',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Backup As a Service';

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
        id: "2-fpt-backup-as-a-service",
        children: "2. FPT Backup As a Service"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install Veeam Agent for Windows"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên server cần backup, login vào trang portal với account của bạn: Backup as a Service : ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://baas.fptcloud.com",
        children: "https://baas.fptcloud.com"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(493612)/* ["default"] */ .A) + "",
        width: "940",
        height: "429"
      }), " Đây là giao diện quản trị của bạn sau khi login thành công: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(950854)/* ["default"] */ .A) + "",
        width: "940",
        height: "431"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Vào mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed Computers"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download Agent"
      }), " sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Window"
      }), ". ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(225352)/* ["default"] */ .A) + "",
        width: "940",
        height: "409"
      }), " Chỉnh thời gian Token hết hạn theo nhu cầu. Mặc định là 12 Tháng. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(645376)/* ["default"] */ .A) + "",
        width: "753",
        height: "428"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sau khi download thành công ta tiến hành cài đặt Management Agent trên server cần backup: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(93531)/* ["default"] */ .A) + "",
        width: "804",
        height: "613"
      }), " Chọn Next để tiếp tục: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(54289)/* ["default"] */ .A) + "",
        width: "805",
        height: "609"
      }), " Chấp nhận điều khoản sau đó bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " Tiếp tục ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Install"
      }), " để tiến hành cài đặt: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(164862)/* ["default"] */ .A) + "",
        width: "780",
        height: "594"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(421564)/* ["default"] */ .A) + "",
        width: "786",
        height: "606"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Sau khi cài đặt xong Veeam Agent Management sẽ tự động kết nối tới portal và cài đặt Veeam Agent For Windows"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cloud Gateway: baas-sgn-gw.fptcloud.com hoặc baas-han-gw.fptcloud.com Port: 6180 ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(544812)/* ["default"] */ .A) + "",
        width: "930",
        height: "659"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Kiểm tra VM xuất hiện trên portal và tiến trình cài đặt Veeam Agent thành công. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(875998)/* ["default"] */ .A) + "",
        width: "975",
        height: "309"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Kiểm tra Job backup xuất hiện trên portal và Veeam Agent For Windows đã được cài đặt trên Server. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(153360)/* ["default"] */ .A) + "",
        width: "974",
        height: "313"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(891457)/* ["default"] */ .A) + "",
        width: "911",
        height: "554"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./install-veeam-agent-for-linux",
        children: " Previous Install Veeam Agent for Linux "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-file-and-folder-for-linux",
        children: " Next Restore File and Folder for Linux "
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

/***/ 493612
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41580e19fd84-image-1695292106378-cc50f399a7cfa72d5ba3b7929988628b.png");

/***/ },

/***/ 950854
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/71164f38198a-image-1695292115345-df11dc8e1e7fbcc1200e4d36fc04da55.png");

/***/ },

/***/ 225352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91d52bda78ec-image-1695292124121-fd991446c2c218c8e693851216e66602.png");

/***/ },

/***/ 544812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c17bd7f4befc-image-1695292180601-af86d1ed1bbb91b8442ad8dd138aee94.png");

/***/ },

/***/ 164862
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c5dc2ad5744d-image-1695292159209-470e037613ea09bfca6ad7248fe14f43.png");

/***/ },

/***/ 93531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c8534ab59ac3-image-1695292142746-72af22e56173eab5ea374b436d5a2e1d.png");

/***/ },

/***/ 875998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db0a966c5afa-image-1695292191409-03ee11b53dfb6f40f497e125e79043e5.png");

/***/ },

/***/ 421564
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/de1038c54860-image-1695292167306-a8570078d0260a4ec9aed071cb174014.png");

/***/ },

/***/ 645376
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e41cc91e27c9-image-1695292132688-ea7593214f129e1716835b01a13c935c.png");

/***/ },

/***/ 54289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee0a607d26c9-image-1695292150003-9c148a3312ac2240508a6c2abf97c636.png");

/***/ },

/***/ 153360
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f521f8f1308a-image-1695292197657-90457b74b69d01305c4fbee2603189a9.png");

/***/ },

/***/ 891457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fd9d30b7881c-image-1695292206361-639bf0aa6cba9b5a94ee024a1ae71a36.png");

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