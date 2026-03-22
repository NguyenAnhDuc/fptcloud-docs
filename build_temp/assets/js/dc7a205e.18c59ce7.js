"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70212],{

/***/ 878548
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_deploy_huong_dan_deploy_mot_appliations_voi_kustomize_su_dung_build_options_md_dc7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-deploy-huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options-md-dc7.json
const site_docs_fpt_argocd_3_deploy_huong_dan_deploy_mot_appliations_voi_kustomize_su_dung_build_options_md_dc7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/deploy/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options","title":"2. FPT ArgoCD","description":"Hướng dẫn deploy một applications với kustomize sử dụng build options","source":"@site/docs/fpt-argocd-3/deploy/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options.md","sourceDirName":"fpt-argocd-3/deploy","slug":"/fpt-argocd-3/deploy/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options","permalink":"/fpt-argocd-3/deploy/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan deploy mot appliations voi kustomize su dung build options","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan deploy applications qua helm chart repo","permalink":"/fpt-argocd-3/deploy/huong-dan-deploy-applications-qua-helm-chart-repo"},"next":{"title":"Huong dan su dung applicationset de deploy","permalink":"/fpt-argocd-3/deploy/huong-dan-su-dung-applicationset-de-deploy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/deploy/huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options.md


const frontMatter = {
	sidebar_label: 'Huong dan deploy mot appliations voi kustomize su dung build options',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options',
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
      children: "Hướng dẫn deploy một applications với kustomize sử dụng build options"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tương tự với việc deploy một applications với manifest, để deploy một ứng dụng sử dụng kustomize cần thực hiện các bước tương tự như mục 5.8.2 trong Documentations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chuẩn bị một Repository để deploy ứng dụng. Trong phần demo này, deploy một số ứng dụng lên k8s bao gồm: thành phần ỉngress controller, argocd-rollout và applications"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cụ thể: Cấu trúc thư mục source code như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125312)/* ["default"] */ .A) + "",
        width: "917",
        height: "775"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Argo-rollout được deploy sử dụng kustomize với build options helm chart ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(590628)/* ["default"] */ .A) + "",
          width: "1248",
          height: "571"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ingress-nginx và các thành phần khác được deploy sử dụng kustomize với manifest ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(817357)/* ["default"] */ .A) + "",
          width: "1248",
          height: "1248"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Thực hiện cấu hình build options của kustomize thông qua giao diện của Portal theo hướng dẫn chi tiết ở mục 5.5. trong Document."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Trong trường hợp chưa cấu hình build options, việc tạo applications sẽ gặp lỗi."
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743022)/* ["default"] */ .A) + "",
        width: "1099",
        height: "736"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Deploy applications thông qua ArgoCD Thực hiện tạo Applications tương tự như mục 5.8.2. trong Document. Tuy nhiên, đối với ứng dụng deploy với kustomize và helm chart cần cấu hình thêm một số thông tin như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332402)/* ["default"] */ .A) + "",
        width: "1248",
        height: "737"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(418191)/* ["default"] */ .A) + "",
        width: "1248",
        height: "454"
      }), " Applications sau khi deploy thành công: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(792350)/* ["default"] */ .A) + "",
        width: "1248",
        height: "675"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao",
        children: " Previous Thực hiện cấu hình Webhook với webhook secret đã được tạo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-deploy-applications-qua-helm-chart-repo",
        children: " Next Hướng dẫn deploy applications qua helm chart repo "
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

/***/ 817357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0046a2218d6d-Picture95-2-7629e948bb40ba6a00e44d8b21b8d64e.png");

/***/ },

/***/ 792350
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1f7a425477dc-Picture99-2-8be3f1867e3ae438117b26ab15290979.png");

/***/ },

/***/ 590628
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2b0c49f17cb7-Picture94-2-dd7cefa55c002d7fe036a3a40fbc4ea4.png");

/***/ },

/***/ 332402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9d3a59cd8abd-Picture97-2-08a5333be24645ee9311be711c646343.png");

/***/ },

/***/ 743022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b42ada9bc21c-Picture96-2-f17322694b552a326b946c6a806f8b0f.png");

/***/ },

/***/ 125312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e233954ffff0-Picture93-2-4e9a4afef02c1396d8a971947e1f9ec2.png");

/***/ },

/***/ 418191
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ff0c9a53d1ab-Picture98-2-42490a0851bdb11a505a9fae2bfde846.png");

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