"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[18404],{

/***/ 817717
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_container_registry_2_docker_login_md_c0a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-container-registry-2-docker-login-md-c0a.json
const site_docs_fpt_container_registry_2_docker_login_md_c0a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-container-registry-2/docker-login","title":"2. FPT Container Registry","description":"Docker Login","source":"@site/docs/fpt-container-registry-2/docker-login.md","sourceDirName":"fpt-container-registry-2","slug":"/fpt-container-registry-2/docker-login","permalink":"/fpt-container-registry-2/docker-login","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Docker login","title":"2. FPT Container Registry","source":"https://fptcloud.com/documents/fpt-container-registry-2/?doc=docker-login","parent":"https://fptcloud.com/documents/fpt-container-registry-2","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Disable robot account dang su dung","permalink":"/fpt-container-registry-2/disable-robot-account-dang-su-dung"},"next":{"title":"Enable robot account","permalink":"/fpt-container-registry-2/enable-robot-account"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-container-registry-2/docker-login.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Docker login',
	title: '2. FPT Container Registry',
	source: 'https://fptcloud.com/documents/fpt-container-registry-2/?doc=docker-login',
	parent: 'https://fptcloud.com/documents/fpt-container-registry-2',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Container Registry';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-container-registry",
        children: "2. FPT Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker Login"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện login tới FPT Container Registry thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên Menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Container Registry"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Get Token"
      }), " để lấy thông tin đăng nhập gồm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Username/Secret"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390379)/* ["default"] */ .A) + "",
        width: "627",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Di chuột vào icon help ⓘ để lấy câu lệnh Login."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953309)/* ["default"] */ .A) + "",
        width: "627",
        height: "192"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sử dụng docker cli để login với thông tin đăng nhập trên Portal"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997739)/* ["default"] */ .A) + "",
        width: "627",
        height: "163"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docker login registry.fke.fptcloud.com \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-tren-docker-cli",
        children: " Previous Hướng dẫn sử dụng trên Docker CLI "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tag-va-push-image-len-fpt-container-registry",
        children: " Next Tag và Push image lên FPT Container Registry "
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

/***/ 390379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/23a4563b2d98-Picture8-1-500f802fcdbdd2050dda807ce3d24c4d.png");

/***/ },

/***/ 953309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4bf5cdaf5f4d-Picture9-1-26db9993c9373472c9cb8f26eb71f051.png");

/***/ },

/***/ 997739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aec1f1a9b8f1-Picture10-1-ad993aa2225b0a7295c2ddb575256515.png");

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