"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[66031],{

/***/ 414410
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_backup_as_a_service_restore_file_and_folder_for_windows_md_969_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-backup-as-a-service-restore-file-and-folder-for-windows-md-969.json
const site_docs_fpt_backup_as_a_service_restore_file_and_folder_for_windows_md_969_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-backup-as-a-service/restore-file-and-folder-for-windows","title":"2. FPT Backup As a Service","description":"Restore File and Folder For Windows","source":"@site/docs/fpt-backup-as-a-service/restore-file-and-folder-for-windows.md","sourceDirName":"fpt-backup-as-a-service","slug":"/fpt-backup-as-a-service/restore-file-and-folder-for-windows","permalink":"/fpt-backup-as-a-service/restore-file-and-folder-for-windows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Restore file and folder for windows","title":"2. FPT Backup As a Service","source":"https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-file-and-folder-for-windows","parent":"https://fptcloud.com/documents/fpt-backup-as-a-service","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Restore file and folder for linux","permalink":"/fpt-backup-as-a-service/restore-file-and-folder-for-linux"},"next":{"title":"Restore linux vm from cloud repository","permalink":"/fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-backup-as-a-service/restore-file-and-folder-for-windows.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Restore file and folder for windows',
	title: '2. FPT Backup As a Service',
	source: 'https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-file-and-folder-for-windows',
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
      children: "Restore File and Folder For Windows"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Khởi động Veeam Agent For Windows ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(491965)/* ["default"] */ .A) + "",
        width: "975",
        height: "631"
      }), " Lưu ý: Trường hợp thời điểm bạn muốn restore cũ hơn bạn phải sử dụn tính năng File Level Restore tham khảo bước 5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào backup job chứa file mà bạn muốn restore sau đó chọ Restore Files ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(245910)/* ["default"] */ .A) + "",
        width: "974",
        height: "635"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cửa sổ hiện ra, chọn file hoặc folder bạn muốn khôi phục. Chọn Restore Overwrite để khôi phục file đè lên file hiện tại. Hoặc chọn Keep để giữ file hiện tại, khi đó file restore sẽ được đổi tên. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(994292)/* ["default"] */ .A) + "",
        width: "974",
        height: "662"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Bạn cũng có thể chọn Copy To để khôi phục ra một nơi khác. Chọn nơi lưu trũ file, folder sau đó bấn OK. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(333542)/* ["default"] */ .A) + "",
        width: "975",
        height: "665"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Khởi động công cụ File Level Restore có sẵn trong bộ Veeam Agent For Windows. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(348949)/* ["default"] */ .A) + "",
        width: "974",
        height: "964"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Trong phần Restore Point. Chọn thời điểm bạn muốn khôi phục sau đó bấm Next. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(844014)/* ["default"] */ .A) + "",
        width: "975",
        height: "671"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Chọn Open để tiếp tục. Sau khi cửa sổ restore hiện lên, quay lại bước 3 để tiếp tục. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(955644)/* ["default"] */ .A) + "",
        width: "975",
        height: "676"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-file-and-folder-for-linux",
        children: " Previous Restore File and Folder for Linux "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-window-vm-from-cloud-repository",
        children: " Next Restore Window VM from Cloud Repository "
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

/***/ 955644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0161da63f154-image-1695292434984-ad7947ad3e281db34d24dd32a5905ca5.png");

/***/ },

/***/ 844014
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2d131ec19a5b-image-1695292427514-1abe2c1de36bc0276a7591f678625285.png");

/***/ },

/***/ 245910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6f9dec6fc3d8-image-1695292405251-fcc79668ab727188e5637549d69662d0.png");

/***/ },

/***/ 348949
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/897334d8f096-image-1695292421939-57625b95fd3cc26d85bb4ffe896e604f.png");

/***/ },

/***/ 491965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e91c3cbc3a8-image-1695292398449-fad170883eae8ff1e086c9cb40f0c2a4.png");

/***/ },

/***/ 994292
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad7d5f87f581-image-1695292409737-a5340e1b7544e1b3ce88258f13701b1c.png");

/***/ },

/***/ 333542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bac4c7bef49f-image-1695292415057-730f3a679fa1837337c5e1a8c2ec9321.png");

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