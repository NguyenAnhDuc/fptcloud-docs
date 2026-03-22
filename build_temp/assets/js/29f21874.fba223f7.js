"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[55658],{

/***/ 521054
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_deploy_huong_dan_cau_hinh_argocd_cluster_de_deploy_ung_dung_voi_manifes_md_29f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-deploy-huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes-md-29f.json
const site_docs_fpt_argocd_3_deploy_huong_dan_cau_hinh_argocd_cluster_de_deploy_ung_dung_voi_manifes_md_29f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/deploy/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes","title":"2. FPT ArgoCD","description":"Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes","source":"@site/docs/fpt-argocd-3/deploy/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes.md","sourceDirName":"fpt-argocd-3/deploy","slug":"/fpt-argocd-3/deploy/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes","permalink":"/fpt-argocd-3/deploy/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan cau hinh argocd cluster de deploy ung dung voi manifes","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Edit capabilities","permalink":"/fpt-argocd-3/deploy/edit-capabilities"},"next":{"title":"Huong dan deploy applications qua argocd cli","permalink":"/fpt-argocd-3/deploy/huong-dan-deploy-applications-qua-argocd-cli"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/deploy/huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes.md


const frontMatter = {
	sidebar_label: 'Huong dan cau hinh argocd cluster de deploy ung dung voi manifes',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes',
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
      children: "Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Thực hiện add cluster (bước này đã được hướng dẫn trong document)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chuẩn bị Repository chứa manifest để deploy ứng dụng"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ:"
      }), " Sử dụng một manifest để deploy một ứng dụng với file deployment và service như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(260448)/* ["default"] */ .A) + "",
        width: "781",
        height: "680"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462470)/* ["default"] */ .A) + "",
        width: "773",
        height: "452"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Thực hiện cấu hình Repository"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Repository:"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(241531)/* ["default"] */ .A) + "",
            width: "1248",
            height: "548"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Thực hiện thêm mới một Repository: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(429593)/* ["default"] */ .A) + "",
            width: "1430",
            height: "633"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Kiểm tra trạng thái repository được add tới argocd: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(246783)/* ["default"] */ .A) + "",
            width: "624",
            height: "103"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Tạo một Applications để deploy ứng dụng"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vào menu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Application"
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NEW APP:"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(781605)/* ["default"] */ .A) + "",
            width: "1248",
            height: "469"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập thông tin để tạo Applications: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(818099)/* ["default"] */ .A) + "",
            width: "1248",
            height: "825"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(569091)/* ["default"] */ .A) + "",
            width: "1248",
            height: "694"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create"
          }), " để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Applications"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kết quả sau khi tạo Applications: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(197702)/* ["default"] */ .A) + "",
        width: "1248",
        height: "435"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-dang-nhap-vao-argocd",
        children: " Previous Hướng dẫn đăng nhập vào ArgoCD "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao",
        children: " Next Thực hiện cấu hình Webhook với webhook secret đã được tạo "
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

/***/ 241531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25744da2dc4d-Picture77-2-050931ec5aa204fc54aa7d41a820bb54.png");

/***/ },

/***/ 462470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2d55c1924fbe-Picture76-2-05c06645b26aa43e2dc808eed57238dc.png");

/***/ },

/***/ 260448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/31e0e1306b34-Picture75-2-d00097caa886c7fd097482b0d81044b3.png");

/***/ },

/***/ 569091
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/426ba5658e8b-Picture82-2-7e73a6d27945797de7311eeced08f6ec.png");

/***/ },

/***/ 429593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/548ab2407411-Picture78-2-a44facd6146352dd150e3a17abac26b9.png");

/***/ },

/***/ 246783
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 818099
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9a2e22b57ce8-Picture81-2-119fea8ecd33034d35807e257f3b0756.png");

/***/ },

/***/ 781605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e02e9e0a7e6-Picture80-2-f890ad308b4eaaa58477f20e70505dcd.png");

/***/ },

/***/ 197702
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d51b08f7d751-Picture83-2-01020eb2bd500ce79a69f9eaee700f95.png");

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