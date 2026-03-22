"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[732],{

/***/ 819040
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_key_vault_tutorials_tao_auth_method_md_744_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-key-vault-tutorials-tao-auth-method-md-744.json
const site_docs_fpt_key_vault_tutorials_tao_auth_method_md_744_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-key-vault/tutorials-tao-auth-method","title":"2. FPT Key Vault","description":"Tạo Auth Method","source":"@site/docs/fpt-key-vault/tutorials-tao-auth-method.md","sourceDirName":"fpt-key-vault","slug":"/fpt-key-vault/tutorials-tao-auth-method","permalink":"/fpt-key-vault/tutorials-tao-auth-method","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials tao auth method","title":"2. FPT Key Vault","source":"https://fptcloud.com/documents/fpt-key-vault/?doc=tutorials-tao-auth-method","parent":"https://fptcloud.com/documents/fpt-key-vault","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials khoi tao vault instance","permalink":"/fpt-key-vault/tutorials-khoi-tao-vault-instance"},"next":{"title":"Tutorials tao policy","permalink":"/fpt-key-vault/tutorials-tao-policy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-key-vault/tutorials-tao-auth-method.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials tao auth method',
	title: '2. FPT Key Vault',
	source: 'https://fptcloud.com/documents/fpt-key-vault/?doc=tutorials-tao-auth-method',
	parent: 'https://fptcloud.com/documents/fpt-key-vault',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Key Vault';

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
        id: "2-fpt-key-vault",
        children: "2. FPT Key Vault"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Auth Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Vault Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Vault"
      }), " cần thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auth Method."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 4",
        src: (__webpack_require__(403663)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 23",
        src: (__webpack_require__(223411)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New Auth Method"
      }), " hiện ra, người dùng nhập các thông tin cần thiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 24",
        src: (__webpack_require__(456130)/* ["default"] */ .A) + "",
        width: "488",
        height: "289"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trong đó:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mount Point:"
        }), " phân vùng để lưu trữ thông tin secret của phương thức xác thực"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "App Role."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để thực hiện tạo mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auth Method."
      }), " Hệ thống sẽ thông báo xác nhận và tiến hành quá trình tạo mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auth Method"
      }), " mới dựa vào thông tin đã nhập."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auth Method"
      }), " sau khi tạo thành công."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 25",
        src: (__webpack_require__(820910)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Hệ thống luôn tạo mặc định một Auth Method với type Token. Auth Method này không thể xóa được."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Previous Quản lý Auth Method "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-tao-role",
        children: " Next Tạo Role "
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

/***/ 223411
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/203d8c88043c-Userguide-FPT-KeyVault-2022-23-1024x538-bf1b0bcac6bae0d55991521f8b9c41e7.png");

/***/ },

/***/ 403663
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3dcfc3568835-Userguide-FPT-KeyVault-2022-4-1024x538-a6065d388170bbce8418c49df7a41628.png");

/***/ },

/***/ 456130
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/de0b25f2f617-Userguide-FPT-KeyVault-2022-24-f925b8ca8a74fbebb4c9725432ce6a3b.png");

/***/ },

/***/ 820910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/eeeed2db6eb0-Userguide-FPT-KeyVault-2022-25-1024x538-0336409422fcf61d22df053c915fd544.png");

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