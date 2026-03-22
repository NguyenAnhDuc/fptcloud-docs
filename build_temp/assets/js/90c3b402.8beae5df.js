"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[85390],{

/***/ 500831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_app_catalogs_upgrade_applications_toi_version_moi_nhat_md_90c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-catalogs-upgrade-applications-toi-version-moi-nhat-md-90c.json
const site_docs_app_catalogs_upgrade_applications_toi_version_moi_nhat_md_90c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"app-catalogs/upgrade-applications-toi-version-moi-nhat","title":"2. FPT App Catalogs","description":"Upgrade applications tới version mới nhất","source":"@site/docs/app-catalogs/upgrade-applications-toi-version-moi-nhat.md","sourceDirName":"app-catalogs","slug":"/app-catalogs/upgrade-applications-toi-version-moi-nhat","permalink":"/app-catalogs/upgrade-applications-toi-version-moi-nhat","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Upgrade applications toi version moi nhat","title":"2. FPT App Catalogs","source":"https://fptcloud.com/documents/app-catalogs/?doc=upgrade-applications-toi-version-moi-nhat","parent":"https://fptcloud.com/documents/app-catalogs","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Uninstall applications neu muon xoa bo","permalink":"/app-catalogs/uninstall-applications-neu-muon-xoa-bo"},"next":{"title":"Xem chi tiet app da deploy","permalink":"/app-catalogs/xem-chi-tiet-app-da-deploy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/app-catalogs/upgrade-applications-toi-version-moi-nhat.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Upgrade applications toi version moi nhat',
	title: '2. FPT App Catalogs',
	source: 'https://fptcloud.com/documents/app-catalogs/?doc=upgrade-applications-toi-version-moi-nhat',
	parent: 'https://fptcloud.com/documents/app-catalogs',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT App Catalogs';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
        id: "2-fpt-app-catalogs",
        children: "2. FPT App Catalogs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upgrade applications tới version mới nhất"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống cho phép người dùng có thể upgrade version app tới version mới nhất trong repository. Tuy nhiên, người dùng cần đánh giá mức độ ảnh hưởng khi thực hiện upgrade version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại mục detail applications, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upgrade to"
      }), " (button xuất hiện khi applications được cài đặt không phải version mới nhất)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912584)/* ["default"] */ .A) + "",
        width: "755",
        height: "517"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Thực hiện tuỳ chỉnh cấu hình mong muốn"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530875)/* ["default"] */ .A) + "",
        width: "755",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để thực hiện upgrade chart"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Tuy nhiên tại bước upgrade chart có thể pass/fail tuỳ thuộc vào cluster install chart. Tuỳ versions của chart sẽ support các version k8s cluster khác nhau."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./rollback-app-ve-cau-hinh-cu",
        children: " Previous Thực hiện rollback app về cấu hình cũ "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./uninstall-applications-neu-muon-xoa-bo",
        children: " Next Thực hiện uninstall applications nếu muốn xoá bỏ "
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

/***/ 912584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6c06913e916-Picture33-1-f1f20637578faca21a1d918e7ca057df.png");

/***/ },

/***/ 530875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e7b42635904e-Picture34-1-432fafc994f7e6d3fbc8a765ec546acc.png");

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