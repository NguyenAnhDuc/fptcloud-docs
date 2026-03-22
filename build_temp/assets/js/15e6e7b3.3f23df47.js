"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[33121],{

/***/ 581807
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_registry_secret_quan_ly_container_registry_md_15e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-registry-secret-quan-ly-container-registry-md-15e.json
const site_docs_fpt_argocd_3_registry_secret_quan_ly_container_registry_md_15e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/registry-secret/quan-ly-container-registry","title":"2. FPT ArgoCD","description":"Quản lý Container Registry","source":"@site/docs/fpt-argocd-3/registry-secret/quan-ly-container-registry.md","sourceDirName":"fpt-argocd-3/registry-secret","slug":"/fpt-argocd-3/registry-secret/quan-ly-container-registry","permalink":"/fpt-argocd-3/registry-secret/quan-ly-container-registry","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quan ly container registry","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-container-registry","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Registry & Secret","permalink":"/fpt-argocd-3/registry-secret/"},"next":{"title":"Quan ly registry secret","permalink":"/fpt-argocd-3/registry-secret/quan-ly-registry-secret"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/registry-secret/quan-ly-container-registry.md


const frontMatter = {
	sidebar_label: 'Quan ly container registry',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=quan-ly-container-registry',
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
      children: "Quản lý Container Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "A. Thêm mới Container Registry"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Container Registry"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Container Registry"
        }), " , thực hiện thêm mới Container Registry như sau: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(617588)/* ["default"] */ .A) + "",
          width: "627",
          height: "404"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Nhập thông tin Container Registry cần tạo: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(943157)/* ["default"] */ .A) + "",
          width: "627",
          height: "359"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Name: Tên container registry. Giá trị này người dùng đặt tuỳ ý"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ: My Custom Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Prefix: Prefix của registry, tên này phải khớp với DNS và phải là duy nhất"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví Dụ: docker.io"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ API URL: API url của docker registry. Phải là http/https"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VD: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry-1.docker.io",
        children: "https://registry-1.docker.io"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Default namespace: Một số registry có một default namespace ( đặc biệt là docker hub)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD: library"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Credentials: được sử dụng để xác thực tới registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD: pullsecret:argocd-[argocd-id]/dockerhub-secret. Trong đó dockerhub-secret là secret registry được thêm qua portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[argocd-id] được lấy trên url truy cập vào argocd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(110184)/* ["default"] */ .A) + "",
        width: "627",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Set Default: Nếu set là true, registry này là default registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Set insecure: được sử dụng để disable xác minh TLS cho registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi thêm mới Container Registry: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(807183)/* ["default"] */ .A) + "",
          width: "627",
          height: "353"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "B. Cập nhật Container Registry"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Updater"
          }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Conrtainer Registry"
          }), " muốn cập nhật > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit"
          }), " , thực hiện cập nhật Container Registry như sau: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(966836)/* ["default"] */ .A) + "",
            width: "627",
            height: "479"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Thực hiện chỉnh sửa cấu hình Container Registry đã thêm: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(415182)/* ["default"] */ .A) + "",
            width: "627",
            height: "437"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện chỉnh sửa các tham số cấu hình cho container registry. Ví dụ: thay đổi name/Prefix/ set default/insecure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Các container registry được thêm vào chỉ có duy nhất 1 container registry là default"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi cập nhật ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(732234)/* ["default"] */ .A) + "",
          width: "627",
          height: "356"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "C. Xoá Container Registry"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Updater"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Container Registry"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Chọn Container Registry muốn xoá"
        }), " : ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(59991)/* ["default"] */ .A) + "",
          width: "627",
          height: "400"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Nhập confirm text ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(467575)/* ["default"] */ .A) + "",
          width: "627",
          height: "451"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi xoá container registry ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(289340)/* ["default"] */ .A) + "",
          width: "627",
          height: "314"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-registry-secret",
        children: " Previous Quản lý registry secret "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-webhook",
        children: " Next Cấu hình webhook  "
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

/***/ 467575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1e53ea64ebbe-Picture35-4-cdb8afe725da6af99fa09d1871715089.png");

/***/ },

/***/ 807183
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/214ebb118de2-Picture30-4-af737038e465cfa1b7ae5c5419a75133.png");

/***/ },

/***/ 617588
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/327acd352d21-Picture27-5-1bac595aa21c04f6600fa9a49fa072f2.png");

/***/ },

/***/ 966836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35d409d0a57e-Picture31-4-ee2c3a91ad6b3629a7a849bf7e2a5f05.png");

/***/ },

/***/ 415182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9f6e263cf38c-Picture32-4-0a906472ecdde37c06312ec72d3f5a7b.png");

/***/ },

/***/ 289340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b81d7d020cab-Picture36-4-51e224efb6ba1fbfed0108484522adbf.png");

/***/ },

/***/ 59991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b862bf0113c3-Picture34-4-5531972ba9d383af5effb5450afe0963.png");

/***/ },

/***/ 732234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d034784369e4-Picture33-4-a9003aec757bdb76cf3ebc01aa10028d.png");

/***/ },

/***/ 110184
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3ce82fa6916-Picture1-6-20d236899e4a93d1e07921172df73dc6.png");

/***/ },

/***/ 943157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ff1fe795021c-Picture29-4-863da5c84b8777d877e46e5cd70334da.png");

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