"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[2136],{

/***/ 103514
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_quan_ly_registry_secret_md_a28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-quan-ly-registry-secret-md-a28.json
const site_docs_fpt_argocd_3_quan_ly_registry_secret_md_a28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/quan-ly-registry-secret","title":"2. FPT ArgoCD","description":"Quản lý registry secret","source":"@site/docs/fpt-argocd-3/quan-ly-registry-secret.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/quan-ly-registry-secret","permalink":"/fpt-argocd-3/quan-ly-registry-secret","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly registry secret","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-registry-secret","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly container registry","permalink":"/fpt-argocd-3/quan-ly-container-registry"},"next":{"title":"Quan ly secret","permalink":"/fpt-argocd-3/quan-ly-secret"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/quan-ly-registry-secret.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly registry secret',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-registry-secret',
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
      children: "Quản lý registry secret"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp người dùng sử dụng container registry nội bộ, Argo CD Image Updater cần xác thực đến registry, FPT Argo CD hỗ trợ người dùng tạo một registry secret để xác thực. Người dùng có thể thực hiện các thao tác trên portal như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "A. Tạo mới registry secret"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Secret Registry"
        }), " , thực hiện thêm mới secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(484424)/* ["default"] */ .A) + "",
          width: "627",
          height: "322"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Nhập thông tin để tạo secret cho registry ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(369381)/* ["default"] */ .A) + "",
          width: "627",
          height: "299"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Secret Name: Tên secret muốn tạo dưới k8s"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Registry: Container Registry url. VD: registry.fke.fptcloud.com"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Username: Nhập username để authen với registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Password: Nhập password để authen với registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi tạo secret registry ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(946539)/* ["default"] */ .A) + "",
          width: "627",
          height: "236"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "B. Cập nhật registry secret"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Updater"
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Secret Registry"
          }), " muốn update > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit"
          }), " , thực hiện thêm update secret: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(907654)/* ["default"] */ .A) + "",
            width: "627",
            height: "333"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Thực hiện chỉnh sửa các thông tin liên quan đến registry secret ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(7)/* ["default"] */ .A) + "",
            width: "627",
            height: "319"
          }), " Người dùng có thể thực hiện chỉnh sửa Registry Url, username/password để authen với registry"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Kết quả sau khi update secret registry ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(509290)/* ["default"] */ .A) + "",
            width: "627",
            height: "310"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "C. Xóa registry secret"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Secret Registry"
        }), " muốn update > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " , thực hiện xóa secret: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(631501)/* ["default"] */ .A) + "",
          width: "627",
          height: "335"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Nhập confirm text để thực hiện xoá ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(735166)/* ["default"] */ .A) + "",
          width: "627",
          height: "325"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi delete ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(377268)/* ["default"] */ .A) + "",
          width: "627",
          height: "319"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-secret",
        children: " Previous Quản lý secret "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-container-registry",
        children: " Next Quản lý Container Registry "
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

/***/ 369381
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c5be7e2c6c7-Picture19-6-feadd672b5c230f2024c85fa1e57e3fd.png");

/***/ },

/***/ 946539
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2601ddf18f90-Picture20-5-2a7f44d4aad8a41eefc7fad0863c05bd.png");

/***/ },

/***/ 377268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29fe7ee5aa15-Picture26-5-72bcb67056db21b9d93169c3f5f109e6.png");

/***/ },

/***/ 631501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2aa731789c10-Picture24-5-5efe612f272f985f52c99c84b192ea9a.png");

/***/ },

/***/ 7
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/37658d1f2b8a-Picture22-5-8d8bc2c947c63f09496f9c5619bb2360.png");

/***/ },

/***/ 484424
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/47f6f7db9bf5-Picture18-6-456288d98c685b57dcbc5ab4cbdf6b3d.png");

/***/ },

/***/ 907654
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7cc5090e98f8-Picture21-5-8a9a9385af9478d241968177e152a1a5.png");

/***/ },

/***/ 735166
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ac36cf52cb78-Picture25-5-d09a7977d460a61c4d72a04e05b34c27.png");

/***/ },

/***/ 509290
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b0f811a68688-Picture23-5-ff739bff0a86d223283638a47b6eb811.png");

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