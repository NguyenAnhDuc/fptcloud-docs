"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[99265],{

/***/ 86457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_them_nfs_persistent_storage_md_86f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-them-nfs-persistent-storage-md-86f.json
const site_docs_dedicated_fpt_kubernetes_engine_them_nfs_persistent_storage_md_86f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage","title":"2. Dedicated – FPT Kubernetes Engine","description":"Thêm NFS Persistent Storage","source":"@site/docs/dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage","permalink":"/dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Them nfs persistent storage","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=them-nfs-persistent-storage","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Thay doi flavor cau hinh nodes","permalink":"/dedicated-fpt-kubernetes-engine/thay-doi-flavor-cau-hinh-nodes"},"next":{"title":"Truy cap thong tin chi tiet cua cluster","permalink":"/dedicated-fpt-kubernetes-engine/truy-cap-thong-tin-chi-tiet-cua-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/them-nfs-persistent-storage.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Them nfs persistent storage',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=them-nfs-persistent-storage',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thêm NFS Persistent Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771419)/* ["default"] */ .A) + "",
        width: "1377",
        height: "663"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " muốn thay đổi cấu hình nodes trên danh sách."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(559747)/* ["default"] */ .A) + "",
        width: "1377",
        height: "663"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " , tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFS Storage"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " chọn icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setting"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(468545)/* ["default"] */ .A) + "",
        width: "642",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập dung lượng NFS Storage mong muốn (GB) và kiểm tra lại thông tin > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable"
      }), " để thực hiện thêm NFS storage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841235)/* ["default"] */ .A) + "",
        width: "480",
        height: "315"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./nang-cap-k8s-version",
        children: " Previous Nâng cấp K8s version "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./autoscale",
        children: " Next Automatic Scaling "
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

/***/ 841235
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27011f2fa2e4-Picture53-abc5a079c401f429f4f448a855f91fac.png");

/***/ },

/***/ 468545
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 771419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c657a04c7116-Picture30-343b0fc8c342767a650f69b382fa2f8a.png");

/***/ },

/***/ 559747
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3d03b46eaeb-Picture31-454b5ef6feea380629dd0c4cbc4c567f.png");

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