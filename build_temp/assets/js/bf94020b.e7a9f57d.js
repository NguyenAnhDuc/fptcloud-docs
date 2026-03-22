"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[64420],{

/***/ 931486
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_deploy_add_cluster_toi_argocd_md_bf9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-deploy-add-cluster-toi-argocd-md-bf9.json
const site_docs_fpt_argocd_3_deploy_add_cluster_toi_argocd_md_bf9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/deploy/add-cluster-toi-argocd","title":"2. FPT ArgoCD","description":"Add cluster tới ArgoCD instance đã được khởi tạo","source":"@site/docs/fpt-argocd-3/deploy/add-cluster-toi-argocd.md","sourceDirName":"fpt-argocd-3/deploy","slug":"/fpt-argocd-3/deploy/add-cluster-toi-argocd","permalink":"/fpt-argocd-3/deploy/add-cluster-toi-argocd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Add cluster toi argocd","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=add-cluster-toi-argocd","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Triển khai Ứng dụng","permalink":"/fpt-argocd-3/deploy/"},"next":{"title":"Cau hinh build option cho kustomize","permalink":"/fpt-argocd-3/deploy/cau-hinh-build-option-cho-kustomize"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/deploy/add-cluster-toi-argocd.md


const frontMatter = {
	sidebar_label: 'Add cluster toi argocd',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=add-cluster-toi-argocd',
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
      children: "Add cluster tới ArgoCD instance đã được khởi tạo"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể deploy một ứng dụng qua ArgoCD cluster đã được khởi tạo, cần Add một cluster K8s nơi mà ứng dụng được deploy. FPT Cloud hỗ trợ người dùng thêm mới một cluster qua giao diện thay vì thêm mới qua ArgoCD CLI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster Managements"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connect a Cluster"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(383105)/* ["default"] */ .A) + "",
        width: "1248",
        height: "570"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin để connect tới cụm k8s cluster. Các thông tin này sẽ được người dùng lấy từ thông tin trong file kubeconfig."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Lưu ý: Thông tin dùng để connect k8s cluster bắt buộc phải có quyền admin."
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster Name (required)"
      }), " : Đặt tên cho cluster name ( có thể đặt tên theo môi trường sử dụng ví dụ: dev env , prod env ,staging env , qa env,…)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server (required)"
      }), " : Thông tin được lấy từ file kubeconfig, url api server k8s."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.em, {
          children: ["Ví dụ:", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://api.xxxxx.fke.fptcloud.com:6443",
            children: "https://api.xxxxx.fke.fptcloud.com:6443"
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CA Data (required)"
      }), " : Thông tin của trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "certificate-authority-data"
      }), " trong file kubeconfig"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bearer Token (required)"
      }), " : Thông tin trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "token"
      }), " trong file kubeconfig"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(8718)/* ["default"] */ .A) + "",
        width: "441",
        height: "522"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connector"
      }), " để hoàn thành."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Kiểm tra thông tin k8s cluster đã được connect"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông tin cụm K8s được quản lý qua giao diện Portal:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617802)/* ["default"] */ .A) + "",
        width: "1248",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kiểm tra thông tin cụm k8s trên giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArgoCD instance"
        }), " : Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArgoCD"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clusters"
        }), " :"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(412745)/* ["default"] */ .A) + "",
        width: "1248",
        height: "540"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kiểm tra thông tin cụm k8s trên giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArgoCD instance"
        }), " : Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArgoCD"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clusters"
        }), " :"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(162981)/* ["default"] */ .A) + "",
        width: "1248",
        height: "540"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông tin cụm cluster đã được cấu hình xuống ArgoCD instance:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288718)/* ["default"] */ .A) + "",
        width: "1243",
        height: "292"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-chi-tiet-argocd",
        children: " Previous Xem thông tin chi tiết và đăng nhập ArgoCD instance  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-image-updater",
        children: " Next Cấu hình Image Updater "
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

/***/ 288718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/00694a7c747c-Picture67-f8ea12e87191ca0047eb6535307cf4a8.png");

/***/ },

/***/ 162981
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40c67a444976-Picture66-870322875d8b2013f11829a6e001fa6b.png");

/***/ },

/***/ 412745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44537ebabcc1-Picture65-870322875d8b2013f11829a6e001fa6b.png");

/***/ },

/***/ 617802
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4e9e2808e833-Picture64-256abd7c3dbbcfa3eafad2ca481931e1.png");

/***/ },

/***/ 8718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5914837acb73-Picture63-0b4169810424b5048d388ac71d98ed4d.png");

/***/ },

/***/ 383105
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/af17013a2982-Picture62-0f70e0b19b9d5df032e34d91e319f27c.png");

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