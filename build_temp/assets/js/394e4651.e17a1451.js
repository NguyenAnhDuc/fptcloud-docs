"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[60934],{

/***/ 174755
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_initial_tao_moi_fpt_jenkinsci_md_394_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-initial-tao-moi-fpt-jenkinsci-md-394.json
const site_docs_fpt_jenkins_ci_initial_tao_moi_fpt_jenkinsci_md_394_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/initial/tao-moi-fpt-jenkinsci","title":"2. FPT Jenkins CI","description":"Tạo mới một FPT Jenkins CI","source":"@site/docs/fpt-jenkins-ci/initial/tao-moi-fpt-jenkinsci.md","sourceDirName":"fpt-jenkins-ci/initial","slug":"/fpt-jenkins-ci/initial/tao-moi-fpt-jenkinsci","permalink":"/fpt-jenkins-ci/initial/tao-moi-fpt-jenkinsci","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tao moi fpt jenkinsci","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=tao-moi-fpt-jenkinsCI","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Nang cap goi dich vu","permalink":"/fpt-jenkins-ci/initial/nang-cap-goi-dich-vu"},"next":{"title":"Upgrade version","permalink":"/fpt-jenkins-ci/initial/upgrade-version"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/initial/tao-moi-fpt-jenkinsci.md


const frontMatter = {
	sidebar_label: 'Tao moi fpt jenkinsci',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=tao-moi-fpt-jenkinsCI',
	parent: 'https://fptcloud.com/documents/fpt-jenkins-ci',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Jenkins CI';

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
        id: "2-fpt-jenkins-ci",
        children: "2. FPT Jenkins CI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo mới một FPT Jenkins CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jenkins CI instance"
      }), " , bạn có thể thực hiện các thao tác sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Trên menu của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DevOps"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jenkins CI"
      }), " > Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Jenkins"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650179)/* ["default"] */ .A) + "",
        width: "627",
        height: "301"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Jenkins"
      }), " > Nhập thông tin để khởi tạo một Jenkins CI instance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432543)/* ["default"] */ .A) + "",
        width: "627",
        height: "443"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " , hệ thống sẽ khởi tạo một cụm Jenkins Instance và thông báo tình trạng xử lý."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544049)/* ["default"] */ .A) + "",
        width: "627",
        height: "142"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo thành công một Jenkins instance, trạng thái của cụm sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Successed"
      }), " , khi đó người dùng có thể truy cập vào Jenkins instance thông qua url và account/password đã được khởi tạo. ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881134)/* ["default"] */ .A) + "",
        width: "627",
        height: "173"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./kiem-tra-thong-tin-goi-dich-vu",
        children: " Previous Kiểm tra thông tin gói dịch vụ "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-chi-tiet-jenkins-ci-instance",
        children: " Next Xem thông tin chi tiết Jenkins CI instance "
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

/***/ 650179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/38ff2a6f2ede-Picture1-88b597af3a2470f08e6ca3fda46c5780.png");

/***/ },

/***/ 544049
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/47e2570d08dd-Picture3-1-4a59f1d25b397ed168f87319005e455f.png");

/***/ },

/***/ 881134
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/48e1c05dc5f2-Picture4-323b27154d3b8390ba581127987cbf7d.png");

/***/ },

/***/ 432543
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9c7a036845f9-Picture2-1-6a052c0e30aa22f63649d118e7f4bfb3.png");

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