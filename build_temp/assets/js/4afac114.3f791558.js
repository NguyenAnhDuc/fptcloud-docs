"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[63474],{

/***/ 671237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_app_catalogs_ket_noi_cluster_toi_app_catalog_management_md_4af_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-catalogs-ket-noi-cluster-toi-app-catalog-management-md-4af.json
const site_docs_app_catalogs_ket_noi_cluster_toi_app_catalog_management_md_4af_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"app-catalogs/ket-noi-cluster-toi-app-catalog-management","title":"2. FPT App Catalogs","description":"Kết nối K8S cluster tới App Catalogs Management đã được khởi tạo","source":"@site/docs/app-catalogs/ket-noi-cluster-toi-app-catalog-management.md","sourceDirName":"app-catalogs","slug":"/app-catalogs/ket-noi-cluster-toi-app-catalog-management","permalink":"/app-catalogs/ket-noi-cluster-toi-app-catalog-management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Ket noi cluster toi app catalog management","title":"2. FPT App Catalogs","source":"https://fptcloud.com/documents/app-catalogs/?doc=ket-noi-cluster-toi-app-catalog-management","parent":"https://fptcloud.com/documents/app-catalogs","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/app-catalogs/initial-setup"},"next":{"title":"Quan ly app catalogs","permalink":"/app-catalogs/quan-ly-app-catalogs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/app-catalogs/ket-noi-cluster-toi-app-catalog-management.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Ket noi cluster toi app catalog management',
	title: '2. FPT App Catalogs',
	source: 'https://fptcloud.com/documents/app-catalogs/?doc=ket-noi-cluster-toi-app-catalog-management',
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
        id: "2-fpt-app-catalogs",
        children: "2. FPT App Catalogs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết nối K8S cluster tới App Catalogs Management đã được khởi tạo"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể deploy một ứng dụng qua App Catalogs Management đã được khởi tạo, cần kết nối một cluster K8s nơi mà ứng dụng được deploy. FPT Cloud hỗ trợ người dùng kết nối cluster qua giao diện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1"
          }), " : Chuẩn bị một k8s cluster để deploy ứng dụng, yêu cầu sử dụng kubeconfig để thực hiện Connect cluster"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2"
          }), " : Tại menu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Management Cluster"
          }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect Cluster"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(712027)/* ["default"] */ .A) + "",
        width: "754",
        height: "346"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3"
        }), " : Thực hiện nhập thông tin để Connect Cluster"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(376712)/* ["default"] */ .A) + "",
        width: "754",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Thông tin dùng để connect k8s cluster bắt buộc phải có quyền admin."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bước 4: Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Connnect Cluster"
          }), " để hoàn thành."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bước 5: Kiểm tra thông tin k8s cluster đã được connect"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(357782)/* ["default"] */ .A) + "",
        width: "755",
        height: "255"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-chi-tiet-app-catalog",
        children: " Previous Xem thông tin chi tiết App Catalog "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-app-catalogs",
        children: " Next Quản lý App Catalogs "
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

/***/ 712027
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12077ac5b74e-Picture9-1-c996e6a0584644bb1d8ad503959a3ec4.png");

/***/ },

/***/ 376712
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44a26315d0b1-Picture10-1-043fce8b40206d209589e8a750c65ee3.png");

/***/ },

/***/ 357782
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e7ad5362c3c2-Picture11-1-28fc8dbefbd857d73c2d26183272d5c9.png");

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