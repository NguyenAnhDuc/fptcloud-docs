"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[91566],{

/***/ 345899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_huong_dan_dang_nhap_vao_argocd_md_828_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-huong-dan-dang-nhap-vao-argocd-md-828.json
const site_docs_fpt_argocd_3_huong_dan_dang_nhap_vao_argocd_md_828_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/huong-dan-dang-nhap-vao-argocd","title":"2. FPT ArgoCD","description":"Hướng dẫn đăng nhập vào ArgoCD","source":"@site/docs/fpt-argocd-3/huong-dan-dang-nhap-vao-argocd.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/huong-dan-dang-nhap-vao-argocd","permalink":"/fpt-argocd-3/huong-dan-dang-nhap-vao-argocd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan dang nhap vao argocd","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-dang-nhap-vao-argocd","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan cau hinh notifications de nhan thong bao","permalink":"/fpt-argocd-3/huong-dan-cau-hinh-notifications-de-nhan-thong-bao"},"next":{"title":"Huong dan deploy applications qua argocd cli","permalink":"/fpt-argocd-3/huong-dan-deploy-applications-qua-argocd-cli"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/huong-dan-dang-nhap-vao-argocd.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan dang nhap vao argocd',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-dang-nhap-vao-argocd',
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
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
      children: "Hướng dẫn đăng nhập vào ArgoCD"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 1:"
      }), " Đăng nhập ArgoCD qua giao diện với username/password ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(277162)/* ["default"] */ .A) + "",
        width: "1248",
        height: "703"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách 2:"
      }), " Đăng nhập ArgoCD với argocd cli"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trong mục Documentations > Dowload cli tool ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(960272)/* ["default"] */ .A) + "",
          width: "1248",
          height: "373"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cài đặt cli tool:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập vào cụm Argocd đã tạo: Với url: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://dashboard.argocd.cd.fke.fptcloud.com/fnl2dws3"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "argocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path fnl2dws3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng user/password trên portal để đăng nhập"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ví dụ: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491062)/* ["default"] */ .A) + "",
        width: "1248",
        height: "181"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./demo",
        children: " Previous Demo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes",
        children: " Next Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes "
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

/***/ 277162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4d518451af1f-Picture72-2-ad03e3aad051b60ca63d78032abebea2.png");

/***/ },

/***/ 960272
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e0b0b838d4fc-Picture73-2-fc4fb5217c0b5b8b120dcd672829bd7e.png");

/***/ },

/***/ 491062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ed62b5251635-Picture74-2-e51a24847a1290ae899e3435e8866499.png");

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