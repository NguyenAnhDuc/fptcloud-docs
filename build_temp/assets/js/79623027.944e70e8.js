"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[97063],{

/***/ 40103
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_tao_moi_fpt_argocd_md_796_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-tao-moi-fpt-argocd-md-796.json
const site_docs_fpt_argocd_3_tao_moi_fpt_argocd_md_796_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/tao-moi-fpt-argocd","title":"2. FPT ArgoCD","description":"Tạo mới một FPT ArgoCD","source":"@site/docs/fpt-argocd-3/tao-moi-fpt-argocd.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/tao-moi-fpt-argocd","permalink":"/fpt-argocd-3/tao-moi-fpt-argocd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao moi fpt argocd","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=tao-moi-fpt-argocd","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao moi account tren portal","permalink":"/fpt-argocd-3/tao-moi-account-tren-portal"},"next":{"title":"Thuc hien cau hinh webhook voi webhook secret da duoc tao","permalink":"/fpt-argocd-3/thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/tao-moi-fpt-argocd.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao moi fpt argocd',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=tao-moi-fpt-argocd',
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
        id: "2-fpt-argocd",
        children: "2. FPT ArgoCD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo mới một FPT ArgoCD"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArgoCD instance"
      }), " , bạn có thể thực hiện các thao tác sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên menu của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Argo CD"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410596)/* ["default"] */ .A) + "",
        width: "981",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), " > Nhập thông tin để khởi tạo một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArgoCD instance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(546687)/* ["default"] */ .A) + "",
        width: "627",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), " , hệ thống sẽ khởi tạo một cụm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArgoCD"
      }), " Instance và thông báo tình trạng xử lý."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132937)/* ["default"] */ .A) + "",
        width: "977",
        height: "234"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo thành công một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArgoCD instance"
      }), " , trạng thái của cụm sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Successed"
      }), " , khi đó người dùng có thể truy cập vào ArgoCD cluster thông qua url và account/password đã được khởi tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625950)/* ["default"] */ .A) + "",
        width: "979",
        height: "259"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./kiem-tra-thong-tin-goi-dich-vu",
        children: " Previous Kiểm tra thông tin gói dịch vụ "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-chi-tiet-argocd",
        children: " Next Xem thông tin chi tiết và đăng nhập ArgoCD instance  "
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

/***/ 546687
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/400611b83110-Picture119-2-fdcf351cd47e487fcf4537a32a96f830.png");

/***/ },

/***/ 410596
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5dc58dbd8345-Picture1-1-2fdbc664f1e05560a73471133bc54f23.png");

/***/ },

/***/ 625950
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b767bf8454ab-Picture4-1-826d01470f4f115ef50b5efc390be3f5.png");

/***/ },

/***/ 132937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f4accb419c0b-Picture3-1-571f8eab745996918f02875bc8a1ec08.png");

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