"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86473],{

/***/ 836927
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_enable_disable_admin_user_md_ba1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-enable-disable-admin-user-md-ba1.json
const site_docs_fpt_argocd_3_enable_disable_admin_user_md_ba1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/enable-disable-admin-user","title":"2. FPT ArgoCD","description":"Enable/disable admin user","source":"@site/docs/fpt-argocd-3/enable-disable-admin-user.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/enable-disable-admin-user","permalink":"/fpt-argocd-3/enable-disable-admin-user","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Enable disable admin user","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=enable-disable-admin-user","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Enable disable account","permalink":"/fpt-argocd-3/enable-disable-account"},"next":{"title":"Enable disable anonymous user","permalink":"/fpt-argocd-3/enable-disable-anonymous-user"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/enable-disable-admin-user.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Enable disable admin user',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=enable-disable-admin-user',
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
      children: "Enable/disable admin user"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn disable/enable admin user người dùng có thể thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "A. Disable admin user"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Essential Properties"
        }), " > Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable Admin Account:"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(153719)/* ["default"] */ .A) + "",
          width: "627",
          height: "300"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Sau khi Click Disable Admin Account thực hiện ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm"
        }), " để hoàn tất hành động: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(241789)/* ["default"] */ .A) + "",
          width: "627",
          height: "293"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi disable Admin Account: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(400622)/* ["default"] */ .A) + "",
          width: "627",
          height: "313"
        }), " Sau khi disable Admin Account người dùng có thể truy cập vào ArgoCD thông qua Local Account hoặc thông qua OIDC Scope. Trong trường hợp chưa có Local Account/ OIDC config màn hình đăng nhập sẽ như sau: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(587760)/* ["default"] */ .A) + "",
          width: "627",
          height: "296"
        }), " Trong trường hợp có Local Account/ Cấu hình OIDC Scope, có thể login vào ArgoCD thông qua username/password như bình thường: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(321931)/* ["default"] */ .A) + "",
          width: "627",
          height: "292"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "B. Enable admin user"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể enable lại user admin như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 1:"
        }), " Tại màn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Essential Properties"
        }), " > Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable Admin Account:"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(368234)/* ["default"] */ .A) + "",
          width: "627",
          height: "299"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 2:"
        }), " Sau khi Click Enable Admin Account thực hiện ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm"
        }), " để hoàn tất hành động: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(46336)/* ["default"] */ .A) + "",
          width: "627",
          height: "296"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3:"
        }), " Kết quả sau khi Enable Admin Account: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(849034)/* ["default"] */ .A) + "",
          width: "627",
          height: "321"
        }), " Sau khi enable admin account có thể đang nhập vào ArgoCD thông qua account admin: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(645827)/* ["default"] */ .A) + "",
          width: "627",
          height: "280"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./enable-disable-anonymous-user",
        children: " Previous Enable/disable anonymous user "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./update-admin-password",
        children: " Next Update admin password "
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

/***/ 849034
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/07f5266ab9a5-Picture67-2-952724c76efe00a9e3666e8da8493c4b.png");

/***/ },

/***/ 645827
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3bc07d4a8d82-Picture68-2-2315fcf4aa45e477be00ed541ed9509d.png");

/***/ },

/***/ 368234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3de06794f43c-Picture65-2-e21039034dc711cea7f3b5fc48e19b4f.png");

/***/ },

/***/ 153719
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5541f2bd9dea-Picture60-2-76c3ef9a35d4e95ec4b4ef7a2c9a7f94.png");

/***/ },

/***/ 241789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c88f74e1771-Picture61-2-3ffe76145b7ada5b24c077bfc48f637c.png");

/***/ },

/***/ 400622
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bbc635b4b52c-Picture62-2-fc71c79e39176b99662b1b14f71d5f59.png");

/***/ },

/***/ 46336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c7f796fda518-Picture66-2-62032a4053c9d49802194c6080d98c80.png");

/***/ },

/***/ 321931
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c91c0f62e108-Picture64-2-ad5d7dca411e62c829a15f818d01681b.png");

/***/ },

/***/ 587760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e3980c028f22-Picture63-2-105d490c5eae3091d52c0f676197d85b.png");

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