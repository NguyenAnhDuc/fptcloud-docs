"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7064],{

/***/ 733523
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_key_vault_tutorials_tao_role_md_6ad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-key-vault-tutorials-tao-role-md-6ad.json
const site_docs_fpt_key_vault_tutorials_tao_role_md_6ad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-key-vault/tutorials-tao-role","title":"2. FPT Key Vault","description":"Tạo Role","source":"@site/docs/fpt-key-vault/tutorials-tao-role.md","sourceDirName":"fpt-key-vault","slug":"/fpt-key-vault/tutorials-tao-role","permalink":"/fpt-key-vault/tutorials-tao-role","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials tao role","title":"2. FPT Key Vault","source":"https://fptcloud.com/documents/fpt-key-vault/?doc=tutorials-tao-role","parent":"https://fptcloud.com/documents/fpt-key-vault","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials tao policy","permalink":"/fpt-key-vault/tutorials-tao-policy"},"next":{"title":"Tutorials tao secret engine","permalink":"/fpt-key-vault/tutorials-tao-secret-engine"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-key-vault/tutorials-tao-role.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials tao role',
	title: '2. FPT Key Vault',
	source: 'https://fptcloud.com/documents/fpt-key-vault/?doc=tutorials-tao-role',
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
      children: "Tạo Role"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Detail"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auth Method"
      }), " cần thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 25",
        src: (__webpack_require__(820910)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 26",
        src: (__webpack_require__(343205)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New Role"
      }), " hiện ra, người dùng nhập các thông tin cần thiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 27",
        src: (__webpack_require__(109868)/* ["default"] */ .A) + "",
        width: "956",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trong đó:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role Name:"
        }), " Tên Role"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assigned Groups:"
        }), " Thêm Policy đã tạo ở phần Quản lý Policy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), ". Sau khi tạo thành công sẽ xuất hiện popup chứa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role ID"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret ID."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT KeyVault 2022 28",
        src: (__webpack_require__(529908)/* ["default"] */ .A) + "",
        width: "958",
        height: "347"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Để đảm bảo an toàn bảo mật thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role ID"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret ID"
      }), " chỉ hiển thị một lần duy nhất. Người dùng cần lưu ở nơi an toàn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-tao-auth-method",
        children: " Previous Tạo Auth Method "
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

/***/ 529908
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1043058fa4b4-Userguide-FPT-KeyVault-2022-28-e89350f61b7dcb52e053802e9e2a87c2.png");

/***/ },

/***/ 343205
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35ec4a72b42a-Userguide-FPT-KeyVault-2022-26-1024x538-1c845bcc0ff0b4bd3df91d78c1303355.png");

/***/ },

/***/ 109868
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/edacd0889f49-Userguide-FPT-KeyVault-2022-27-df4b3ab3cef52b5f446e16e84366e494.png");

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