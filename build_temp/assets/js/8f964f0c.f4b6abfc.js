"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[77209],{

/***/ 10174
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_thuc_hien_cau_hinh_webhook_voi_webhook_secret_da_duoc_tao_md_8f9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao-md-8f9.json
const site_docs_fpt_argocd_3_thuc_hien_cau_hinh_webhook_voi_webhook_secret_da_duoc_tao_md_8f9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao","title":"2. FPT ArgoCD","description":"Thực hiện cấu hình Webhook với webhook secret đã được tạo","source":"@site/docs/fpt-argocd-3/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao","permalink":"/fpt-argocd-3/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Thuc hien cau hinh webhook voi webhook secret da duoc tao","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao moi fpt argocd","permalink":"/fpt-argocd-3/tao-moi-fpt-argocd"},"next":{"title":"Update admin password","permalink":"/fpt-argocd-3/update-admin-password"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Thuc hien cau hinh webhook voi webhook secret da duoc tao',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao',
	parent: 'https://fptcloud.com/documents/fpt-argocd-3',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT ArgoCD';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "2-fpt-argocd",
        children: "2. FPT ArgoCD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện cấu hình Webhook với webhook secret đã được tạo"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Cấu hình webhook trên Gitlab"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gitlab Repository"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Webhooks:"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76683)/* ["default"] */ .A) + "",
        width: "1248",
        height: "549"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844404)/* ["default"] */ .A) + "",
        width: "1248",
        height: "298"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855138)/* ["default"] */ .A) + "",
        width: "1248",
        height: "654"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Webhook"
      }), " để hoàn thành: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(585108)/* ["default"] */ .A) + "",
        width: "1248",
        height: "563"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Kiểm tra webhook đã được cấu hình thành công hay chưa? ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212169)/* ["default"] */ .A) + "",
        width: "1248",
        height: "643"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(85407)/* ["default"] */ .A) + "",
        width: "1248",
        height: "422"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Thực hiện kiểm tra với push event trên repository"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Edit replicas deployment tới 1 ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(52633)/* ["default"] */ .A) + "",
          width: "1248",
          height: "484"
        }), " Trạng thái của applications trước và sau khi push thay đổi:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trước: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29798)/* ["default"] */ .A) + "",
        width: "1248",
        height: "527"
      }), " Sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(913653)/* ["default"] */ .A) + "",
        width: "1248",
        height: "750"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArgoCD sẽ phát hiện được thay đổi và sync thay đổi tự động từ Repository để deploy applications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes",
        children: " Previous Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options",
        children: " Next Hướng dẫn deploy một applications với kustomize sử dụng build options "
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

/***/ 844404
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25e959bf5615-Picture85-2-d46048de317cf34f13b432b600402f1f.png");

/***/ },

/***/ 29798
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3461572caaa7-Picture91-2-44aaba1890bf0a164887c44177afedfb.png");

/***/ },

/***/ 913653
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/74bc5cd839d1-Picture92-2-144d0f02ae7f39addcbd50290508ce10.png");

/***/ },

/***/ 585108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/772d1a216c0b-Picture87-2-57b218a5c8933a8e3baf8a43418fcb7c.png");

/***/ },

/***/ 52633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a4c44ba02fe3-Picture90-2-d537cd72630211e24d86e72fde5b170d.png");

/***/ },

/***/ 85407
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a77feb4bd86e-Picture89-2-28bb8574c782b943671d7725251ef056.png");

/***/ },

/***/ 212169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c17f3adbcb15-Picture88-2-3369d849469c353f165dd17edd94e804.png");

/***/ },

/***/ 76683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d82f0925bd64-Picture84-2-59292239897acc6b8c1b617c5eb8ce22.png");

/***/ },

/***/ 855138
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/efa617991606-Picture86-2-691cb323286bcab299ac2b49e0e8e37f.png");

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