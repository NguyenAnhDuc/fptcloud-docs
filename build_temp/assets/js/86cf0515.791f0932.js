"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[65717],{

/***/ 682053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_backup_as_a_service_restore_linux_vm_from_cloud_repository_md_86c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-backup-as-a-service-restore-linux-vm-from-cloud-repository-md-86c.json
const site_docs_fpt_backup_as_a_service_restore_linux_vm_from_cloud_repository_md_86c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository","title":"2. FPT Backup As a Service","description":"Restore Linux VM from Cloud Repository","source":"@site/docs/fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository.md","sourceDirName":"fpt-backup-as-a-service","slug":"/fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository","permalink":"/fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Restore linux vm from cloud repository","title":"2. FPT Backup As a Service","source":"https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-linux-vm-from-cloud-repository","parent":"https://fptcloud.com/documents/fpt-backup-as-a-service","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Restore file and folder for windows","permalink":"/fpt-backup-as-a-service/restore-file-and-folder-for-windows"},"next":{"title":"Restore window vm from cloud repository","permalink":"/fpt-backup-as-a-service/restore-window-vm-from-cloud-repository"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Restore linux vm from cloud repository',
	title: '2. FPT Backup As a Service',
	source: 'https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-linux-vm-from-cloud-repository',
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
      children: "Restore Linux VM from Cloud Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Để restore 1 VM Linux bạn cần download file ISO Veeam recovery media từ trang chủ của VEEAM. Download file ISO phù hợp với hệ điều hành của VM cần khôi phục. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(103747)/* ["default"] */ .A) + "",
        width: "940",
        height: "562"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Khởi động lại VM và boot từ ISO Veeam recovery media. Đồng ý với điều khoản sau đó tiếp tục. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(122236)/* ["default"] */ .A) + "",
        width: "940",
        height: "568"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình lại network nếu cần Trường hợp VM khởi tạo để restore add network có DHCP thì không cần Configure network và có thể bỏ qua bước 3 này Còn lại cần phải click vào “Configure network” để đặt IP static cho VM restore. Note: IP của VM này cần được mở kết nối ra internet hoặc đến baas-sgn-gw.fptcloud.com (site HCM) và baas-han-gw.fptcloud.com port 6180 để thực hiện restore ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(285647)/* ["default"] */ .A) + "",
        width: "940",
        height: "581"
      }), " Thực hiện chọn edit a connection để đặt IP manual cho VM restore: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(657351)/* ["default"] */ .A) + "",
        width: "864",
        height: "634"
      }), " Chọn Edit để set IP cho VM ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(604616)/* ["default"] */ .A) + "",
        width: "940",
        height: "380"
      }), " Chọn IPv4 Configuration sau đó chọn mode Manual -> Show để đặt IP ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(357793)/* ["default"] */ .A) + "",
        width: "940",
        height: "751"
      }), " Sau khi đặt xong IP chọn OK và nhấn ESC để back lại màn hình chính để tiến hành restore ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(346394)/* ["default"] */ .A) + "",
        width: "940",
        height: "612"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn Add Cloud provider ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(29446)/* ["default"] */ .A) + "",
        width: "940",
        height: "626"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhập URL gateway của BaaS: baas-sgn-gw.fptcloud.com (site HCM) hoặc baas-han-gw.fptcloud.com (site Hà Nội) ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(110735)/* ["default"] */ .A) + "",
        width: "839",
        height: "529"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhập Username/password của bạn. Sau đó ấn Enter để tiếp tục. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(991307)/* ["default"] */ .A) + "",
        width: "848",
        height: "596"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Chọn tên backup job và restore poin mong muốn. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(798846)/* ["default"] */ .A) + "",
        width: "833",
        height: "615"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Map các ổ đĩa tương ứng. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(116127)/* ["default"] */ .A) + "",
        width: "836",
        height: "579"
      }), " Restore các ổ đĩa tương ứng. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(943607)/* ["default"] */ .A) + "",
        width: "814",
        height: "619"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(173919)/* ["default"] */ .A) + "",
        width: "817",
        height: "614"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(295218)/* ["default"] */ .A) + "",
        width: "812",
        height: "600"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 9:"
      }), " Ấn S để Start restore ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(861310)/* ["default"] */ .A) + "",
        width: "810",
        height: "605"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-window-vm-from-cloud-repository",
        children: " Previous Restore Window VM from Cloud Repository "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./create-veeam-recovery-media",
        children: " Next Create Veeam Recovery Media "
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

/***/ 943607
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07dc8c7bb764-image-1695294797487-51b88cd1ccb7698050680b50e349106e.png");

/***/ },

/***/ 122236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2a9750bee52a-image-1695294644895-bff75563bac2aa247d681c478e7bb54f.png");

/***/ },

/***/ 657351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3a5125db878f-image-1695294681820-29082e18791c87d8cabcf1044a098dfc.png");

/***/ },

/***/ 173919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3d68dddb2617-image-1695294806424-a13ac7739ee847efb3bcd1eef7bf0f9c.png");

/***/ },

/***/ 604616
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3e2748f0efac-image-1695294692535-73fccae49e60b375ee1b85795c51e967.png");

/***/ },

/***/ 285647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44391ccfd60d-image-1695294671316-dbaf0b210d2e666537114e7094177714.png");

/***/ },

/***/ 295218
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/68eb070fe8c2-image-1695294815857-eb7274c65ac77f2d2ba0cfbd6239e5c3.png");

/***/ },

/***/ 991307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6db27dc06038-image-1695294761178-1bbc9581713c43cd739f32b9ff40e77c.png");

/***/ },

/***/ 103747
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7017717ba943-image-1695294618113-99f32ebc92dd65e556538e3440c606f3.png");

/***/ },

/***/ 798846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/817c2f15a996-image-1695294772745-81c8abef549107a7da46b09d4fd28e7b.png");

/***/ },

/***/ 29446
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/99ac30bf4ea9-image-1695294739863-52298639a748238b535964a6768054c0.png");

/***/ },

/***/ 357793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9bc47e746181-image-1695294702919-b245ac32dbd89f90679f2e23c0507387.png");

/***/ },

/***/ 346394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cfae6dc76b7d-image-1695294720487-f4a49613f25984911b15f02b4026aae3.png");

/***/ },

/***/ 110735
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e258de28826a-image-1695294750751-3864555a5da55ac957665f540887dba7.png");

/***/ },

/***/ 116127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e28a2a8cf44c-image-1695294786115-47c06859489f9a32c238b45731e7ba1e.png");

/***/ },

/***/ 861310
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/efac8f85e341-image-1695294824016-93af484211ce67cfb92008e2c49e035e.png");

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