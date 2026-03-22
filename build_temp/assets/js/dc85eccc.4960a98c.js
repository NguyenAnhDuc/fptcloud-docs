"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37871],{

/***/ 406115
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_account_huong_dan_tich_hop_oidc_de_quan_ly_account_md_dc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-account-huong-dan-tich-hop-oidc-de-quan-ly-account-md-dc8.json
const site_docs_fpt_argocd_3_account_huong_dan_tich_hop_oidc_de_quan_ly_account_md_dc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/account/huong-dan-tich-hop-oidc-de-quan-ly-account","title":"2. FPT ArgoCD","description":"Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD","source":"@site/docs/fpt-argocd-3/account/huong-dan-tich-hop-oidc-de-quan-ly-account.md","sourceDirName":"fpt-argocd-3/account","slug":"/fpt-argocd-3/account/huong-dan-tich-hop-oidc-de-quan-ly-account","permalink":"/fpt-argocd-3/account/huong-dan-tich-hop-oidc-de-quan-ly-account","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan tich hop oidc de quan ly account","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-tich-hop-oidc-de-quan-ly-account","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Enable disable chuc nang cau hinh oidc","permalink":"/fpt-argocd-3/account/enable-disable-chuc-nang-cau-hinh-oidc"},"next":{"title":"Manage admin account enable disable anonymous user","permalink":"/fpt-argocd-3/account/manage-admin-account-enable-disable-anonymous-user"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/account/huong-dan-tich-hop-oidc-de-quan-ly-account.md


const frontMatter = {
	sidebar_label: 'Huong dan tich hop oidc de quan ly account',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-tich-hop-oidc-de-quan-ly-account',
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
      children: "Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong phần này sẽ hướng dẫn người dùng tích hợp KeyCloak với ArgoCD để xác thực người dùng ứng dụng. Cần tạo một client trong KeyCloak và cấu hình ArgoCD sử dụng KeyCloak trong việc xác thực, sử dụng các nhóm được cấu hình trong KeyCloak để xác định các quyền user được sử dụng trong ArgoCD."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tạo một Client trong KeyCloak"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện Login tới KeyCloak server > Lựa chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Realm"
      }), " để tạo Client > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Client"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272558)/* ["default"] */ .A) + "",
        width: "730",
        height: "480"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435732)/* ["default"] */ .A) + "",
        width: "710",
        height: "564"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(152742)/* ["default"] */ .A) + "",
        width: "719",
        height: "466"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Credential"
      }), " , Thông tin Client secret được sử dụng để cấu hình thông tin trên Portal FPT Cloud."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410970)/* ["default"] */ .A) + "",
        width: "732",
        height: "382"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Thực hiện cấu hình Group Claim bằng việc tạo mới Client scopes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127219)/* ["default"] */ .A) + "",
        width: "762",
        height: "442"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để tạo mới Client Scope. Trong tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapper"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure a new mapper"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Group Membership"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562865)/* ["default"] */ .A) + "",
        width: "795",
        height: "374"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Thực hiện cấu hình groups scope trong Client:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(963721)/* ["default"] */ .A) + "",
        width: "712",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo group:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45)/* ["default"] */ .A) + "",
        width: "806",
        height: "319"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo User và add tới group:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625285)/* ["default"] */ .A) + "",
        width: "737",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Cấu hình ArgoCD Policy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấp quyền admin/readOnly cho usergroup:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "g, ArgoCDAdmins, role:admin g, ArgoCDAdmins, role:readonly"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445909)/* ["default"] */ .A) + "",
        width: "748",
        height: "442"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Login ArgoCD qua KeyCloak OIDC Authentication:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(57535)/* ["default"] */ .A) + "",
        width: "829",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi login qua KeyCloak:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(851528)/* ["default"] */ .A) + "",
        width: "909",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-notifications-de-nhan-thong-bao",
        children: " Previous Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi "
      })
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

/***/ 410970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0ab8c726efbc-Picture122-1-359961f09364a59de7b69f260b142d48.png");

/***/ },

/***/ 445909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32f3f148f526-Picture128-1-3ff17c608fa6f17322350821b6d10e33.png");

/***/ },

/***/ 152742
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/45e8241549fa-Picture121-1-744289115327df125c2d42ac82701852.png");

/***/ },

/***/ 57535
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46fe232c8fb6-Picture129-1-25b973c973265b408f49b44929bbf0c0.png");

/***/ },

/***/ 435732
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6df9610a4d99-Picture120-1-c9fb68aea7940dcc08577c7b3d3a8112.png");

/***/ },

/***/ 963721
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/706c2c4c0432-Picture125-1-88b1d476b2804dc6a40823046dab6c52.png");

/***/ },

/***/ 851528
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7270537cc447-Picture130-05d5b216bb52ce38f108db417e12cebd.png");

/***/ },

/***/ 45
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b6c7dcbd5fe-Picture126-1-e465c977dbaf5e600456fd00d5ca4c40.png");

/***/ },

/***/ 272558
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b0867aca3f62-Picture119-1-62419f1eb4f1ee416b990c6bdc1044f0.png");

/***/ },

/***/ 625285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b6c9e1215254-Picture127-1-8b0e7798ae4cc1228d10701431bac7ab.png");

/***/ },

/***/ 562865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d7e5585ca5b8-Picture124-1-d757aa137ed0a3b06eb58095169ad9e7.png");

/***/ },

/***/ 127219
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f51f46f35dd3-Picture123-1-d77f5192d7aa4c049c71cf9bb6e47026.png");

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