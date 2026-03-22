"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[83002],{

/***/ 92644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_huong_dan_deploy_applications_qua_helm_chart_repo_md_c83_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-huong-dan-deploy-applications-qua-helm-chart-repo-md-c83.json
const site_docs_fpt_argocd_3_huong_dan_deploy_applications_qua_helm_chart_repo_md_c83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/huong-dan-deploy-applications-qua-helm-chart-repo","title":"2. FPT ArgoCD","description":"Hướng dẫn deploy applications qua helm chart repo","source":"@site/docs/fpt-argocd-3/huong-dan-deploy-applications-qua-helm-chart-repo.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/huong-dan-deploy-applications-qua-helm-chart-repo","permalink":"/fpt-argocd-3/huong-dan-deploy-applications-qua-helm-chart-repo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan deploy applications qua helm chart repo","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-deploy-applications-qua-helm-chart-repo","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan deploy applications qua argocd cli","permalink":"/fpt-argocd-3/huong-dan-deploy-applications-qua-argocd-cli"},"next":{"title":"Huong dan deploy mot appliations voi kustomize su dung build options","permalink":"/fpt-argocd-3/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/huong-dan-deploy-applications-qua-helm-chart-repo.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan deploy applications qua helm chart repo',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-deploy-applications-qua-helm-chart-repo',
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
      children: "Hướng dẫn deploy applications qua helm chart repo"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Cấu hình repository helm chart Cấu hình helm repository, trường hợp helm chart public có thể không cần cấu hình helm repo, tuy nhiên nếu helm chart private cần cấu hình helm repo để ArgoCD có thể get repository deploy ứng dụng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ add helm repository của xplat tới ArgoCD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388209)/* ["default"] */ .A) + "",
        width: "1248",
        height: "809"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả cấu hình thành công repository:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13086)/* ["default"] */ .A) + "",
        width: "1248",
        height: "425"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo Applications để deploy chart cert-manager"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831272)/* ["default"] */ .A) + "",
        width: "1008",
        height: "687"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(444839)/* ["default"] */ .A) + "",
        width: "823",
        height: "367"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313084)/* ["default"] */ .A) + "",
        width: "726",
        height: "412"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi deploy applications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(899536)/* ["default"] */ .A) + "",
        width: "1248",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra kết quả deploy dưới k8s cluster:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425127)/* ["default"] */ .A) + "",
        width: "1248",
        height: "623"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Trong trường hợp deploy applications sử dụng helm chart deploy, argocd sẽ lấy file chart về để deploy như manifest. Do đó dưới cụm k8s cluster khi get list helm chart sẽ không thấy chart deploy.*"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774874)/* ["default"] */ .A) + "",
        width: "1228",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options",
        children: " Previous Hướng dẫn deploy một applications với kustomize sử dụng build options "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-deploy-applications-qua-argocd-cli",
        children: " Next Hướng dẫn deploy applications qua argocd cli "
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

/***/ 831272
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/47801cfa7fcd-Picture19-3-708528d5400130818514dbc3e3ebc533.png");

/***/ },

/***/ 774874
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5310f476edf6-Picture24-2-28dfad2e952e246dee7fe7b5c3d471d4.png");

/***/ },

/***/ 313084
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/59520a919138-Picture21-3-d31293b9409996b4e424e3982516264a.png");

/***/ },

/***/ 444839
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/92fd447497fa-Picture20-3-c8bcb45519679040cfa9851c7c9981cc.png");

/***/ },

/***/ 425127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b618fe2a59f8-Picture23-2-61cbb3df7ce8959235b7eb43af585704.png");

/***/ },

/***/ 388209
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cbd4241f388d-Picture17-3-53bd730f51cb33427b68db4a0abff2cf.png");

/***/ },

/***/ 899536
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef9ddebfeeac-Picture22-2-13c275e7e86b0925dcbb2b5fba788cfc.png");

/***/ },

/***/ 13086
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f2c9fb5e6a7e-Picture18-3-1a2c71b93268c1adbb5a7ccd59eb1534.png");

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