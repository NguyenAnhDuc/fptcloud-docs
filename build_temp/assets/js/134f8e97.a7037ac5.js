"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[78212],{

/***/ 241621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fortigate_fpt_ngfw_quan_ly_system_user_user_profile_md_134_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fortigate-fpt-ngfw-quan-ly-system-user-user-profile-md-134.json
const site_docs_fortigate_fpt_ngfw_quan_ly_system_user_user_profile_md_134_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fortigate-fpt-ngfw/quan-ly-system-user-user-profile","title":"2. Fortigate – FPT NGFW","description":"Quản Lý System User – User Profile","source":"@site/docs/fortigate-fpt-ngfw/quan-ly-system-user-user-profile.md","sourceDirName":"fortigate-fpt-ngfw","slug":"/fortigate-fpt-ngfw/quan-ly-system-user-user-profile","permalink":"/fortigate-fpt-ngfw/quan-ly-system-user-user-profile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly system user user profile","title":"2. Fortigate – FPT NGFW","source":"https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=quan-ly-system-user-user-profile","parent":"https://fptcloud.com/documents/fortigate-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Fortigate – FPT NGFW","permalink":"/fortigate-fpt-ngfw/"},"next":{"title":"Tao firewall policy","permalink":"/fortigate-fpt-ngfw/tao-firewall-policy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fortigate-fpt-ngfw/quan-ly-system-user-user-profile.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly system user user profile',
	title: '2. Fortigate – FPT NGFW',
	source: 'https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=quan-ly-system-user-user-profile',
	parent: 'https://fptcloud.com/documents/fortigate-fpt-ngfw',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Fortigate – FPT NGFW';

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
        id: "2-fortigate--fpt-ngfw",
        children: "2. Fortigate – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản Lý System User – User Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "System"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin Profiles."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 31",
        src: (__webpack_require__(178824)/* ["default"] */ .A) + "",
        width: "1024",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo Admin Profile chỉ cho phép user ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Read Only"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New"
      }), " > Chọn giới hạn phân quyền (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Read – Read Only"
      }), ") cho từng Object. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tạo Profile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 32",
        src: (__webpack_require__(227527)/* ["default"] */ .A) + "",
        width: "1024",
        height: "805"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tạo User với Admin Profile Readonly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Administrators"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New."
      }), " Type chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local User"
      }), " và tạo mật khẩu tương ứng. Tiếp đến ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Administrator profile"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ReadOnly"
      }), " – profile vừa tạo ở bước 2. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tạo User."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 33",
        src: (__webpack_require__(420674)/* ["default"] */ .A) + "",
        width: "1024",
        height: "798"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-security-profile",
        children: " Previous Tạo Security Profile "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./feature-visibility",
        children: " Next Feature Visibility "
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

/***/ 227527
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1513bd08901b-Userguide-Fortigate-FPT-NGFW-2022-32-1024x805-c0ee130f543a77d541b60f66189234dd.png");

/***/ },

/***/ 178824
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7d09da26c20f-Userguide-Fortigate-FPT-NGFW-2022-31-1024x333-6f804c920a3d38e4062ebd7d4557f549.png");

/***/ },

/***/ 420674
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8791e5114e0e-Userguide-Fortigate-FPT-NGFW-2022-33-1024x798-b7b0ae8229a0c353eabba2848133cf1d.png");

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