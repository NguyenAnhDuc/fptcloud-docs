"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86655],{

/***/ 490365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_registry_secret_quan_ly_secret_md_a21_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-registry-secret-quan-ly-secret-md-a21.json
const site_docs_fpt_argocd_3_registry_secret_quan_ly_secret_md_a21_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/registry-secret/quan-ly-secret","title":"2. FPT ArgoCD","description":"Quản lý secret","source":"@site/docs/fpt-argocd-3/registry-secret/quan-ly-secret.md","sourceDirName":"fpt-argocd-3/registry-secret","slug":"/fpt-argocd-3/registry-secret/quan-ly-secret","permalink":"/fpt-argocd-3/registry-secret/quan-ly-secret","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quan ly secret","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-secret","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly registry secret","permalink":"/fpt-argocd-3/registry-secret/quan-ly-registry-secret"},"next":{"title":"Notifications & Webhook","permalink":"/fpt-argocd-3/notifications/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/registry-secret/quan-ly-secret.md


const frontMatter = {
	sidebar_label: 'Quan ly secret',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-secret',
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
        id: "2-fpt-argocd",
        children: "2. FPT ArgoCD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý secret"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng này cho phép người dùng thêm một secret data trong file ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secret argocd-image-updater-secret"
      }), " của argocd. Người dùng có thể thực hiện các thao tác bao gồm:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "A. Thêm mới Secret"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret"
        }), " , thực hiện thêm mới secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(551899)/* ["default"] */ .A) + "",
          width: "627",
          height: "359"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Nhập các thông tin secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(400912)/* ["default"] */ .A) + "",
          width: "627",
          height: "342"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả tạo secret ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(906725)/* ["default"] */ .A) + "",
          width: "627",
          height: "291"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "B. Cập nhật Secret"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret"
        }), " , thực hiện thêm mới secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(451298)/* ["default"] */ .A) + "",
          width: "627",
          height: "313"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Cập nhật thông tin secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(245113)/* ["default"] */ .A) + "",
          width: "627",
          height: "299"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi cập nhật ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(862022)/* ["default"] */ .A) + "",
          width: "627",
          height: "287"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "C. Xóa Secret"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret"
        }), " , thực hiện thêm mới secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(37903)/* ["default"] */ .A) + "",
          width: "627",
          height: "313"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Chọn secret muốn xoá, thực hiện xoá ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(305000)/* ["default"] */ .A) + "",
          width: "627",
          height: "347"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi cập nhật ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(63990)/* ["default"] */ .A) + "",
          width: "627",
          height: "299"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-log-level",
        children: " Previous Cấu hình Log Level "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-registry-secret",
        children: " Next Quản lý registry secret "
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

/***/ 451298
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08eae6e233b8-Picture12-6-ddc6b7ad6f1d8604a9213234d5c0b342.png");

/***/ },

/***/ 906725
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0e6c02c47580-Picture11-7-e1e4e14beb43dc880dd8c095efff618e.png");

/***/ },

/***/ 305000
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2cdcf9024087-Picture16-6-ad4073365d3200f6f4abaa2a84203834.png");

/***/ },

/***/ 862022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6e5c43d82730-Picture14-6-34fd8edcb8fee84c7bea65f958fbbb40.png");

/***/ },

/***/ 400912
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8beb9d04e21e-Picture10-7-995d9960ae8c01ac78e6062726645ab3.png");

/***/ },

/***/ 245113
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b05fe0c45c0-Picture13-6-8c668dfa6fe68c1a2a4242c5d6e8d190.png");

/***/ },

/***/ 37903
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a77bbc6150bd-Picture15-6-ddc6b7ad6f1d8604a9213234d5c0b342.png");

/***/ },

/***/ 63990
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b2c862d9f8b3-Picture17-6-4605fb7ffba6a03b006736adc030f89a.png");

/***/ },

/***/ 551899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0b6dc09d9b3-Picture9-7-3dde900087b5e5a6a5c1e24a89b73abc.png");

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