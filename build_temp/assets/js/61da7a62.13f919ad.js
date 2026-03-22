"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88189],{

/***/ 686592
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_configuration_cau_hinh_sonarqube_servers_md_61d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-configuration-cau-hinh-sonarqube-servers-md-61d.json
const site_docs_fpt_jenkins_ci_configuration_cau_hinh_sonarqube_servers_md_61d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/configuration/cau-hinh-sonarqube-servers","title":"2. FPT Jenkins CI","description":"Cấu hình SonarQube servers","source":"@site/docs/fpt-jenkins-ci/configuration/cau-hinh-sonarqube-servers.md","sourceDirName":"fpt-jenkins-ci/configuration","slug":"/fpt-jenkins-ci/configuration/cau-hinh-sonarqube-servers","permalink":"/fpt-jenkins-ci/configuration/cau-hinh-sonarqube-servers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cau hinh sonarqube servers","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=cau-hinh-sonarqube-servers","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh email notifications","permalink":"/fpt-jenkins-ci/configuration/cau-hinh-email-notifications"},"next":{"title":"Cau hinh telegram bots","permalink":"/fpt-jenkins-ci/configuration/cau-hinh-telegram-bots"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/configuration/cau-hinh-sonarqube-servers.md


const frontMatter = {
	sidebar_label: 'Cau hinh sonarqube servers',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=cau-hinh-sonarqube-servers',
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
        id: "2-fpt-jenkins-ci",
        children: "2. FPT Jenkins CI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình SonarQube servers"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud hỗ trợ người dùng cấu hình SonarQube Server trong hệ thống Jenkins phục vụ việc tích hợp scan source code thông qua giao diện Portal. Để thực hiện cấu hình, người dùng thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Thêm mới một SonarQube servers"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Tại menu FPT Portal > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jenkins CI"
      }), " > Detail Cluster > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configurations"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SonarQube"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add SonarQube :"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(197604)/* ["default"] */ .A) + "",
        width: "627",
        height: "283"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Nhập thông tin các thông tin cần thiết để tạo mới một SonarQube bao gồm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Name: Nhập tên SonarQube muốn tạo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Server URL: Nhập server URL domain public của hệ thống sonar"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Server authentication token: thông tin credential để xác thực hệ thống sonar. Thông tin xác thực sẽ được lấy trong danh sách các credential với type ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Secret Text"
          }), ". Trong trường hợp người dùng chưa thêm credential, thực hiện tạo thông tin xác thực trước khi cấu hình SonarQube ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(234725)/* ["default"] */ .A) + "",
            width: "627",
            height: "337"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3."
          }), " Kết quả sau khi thêm mới cấu hình SonarQube Servers ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(314709)/* ["default"] */ .A) + "",
            width: "627",
            height: "282"
          }), " Kiểm tra kết quả dưới Jenkins: ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(950262)/* ["default"] */ .A) + "",
            width: "627",
            height: "255"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(69906)/* ["default"] */ .A) + "",
            width: "627",
            height: "303"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Chỉnh sửa cấu hình SonarQube servers"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Tại menu FPT Portal > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jenkins CI"
      }), " > Detail Cluster > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configurations"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SonarQube"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SonarQube server cần chỉnh sửa:"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916605)/* ["default"] */ .A) + "",
        width: "627",
        height: "283"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Nhập thông tin các thông tin muốn sửa ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92620)/* ["default"] */ .A) + "",
        width: "627",
        height: "352"
      }), " FPT Cloud cho phép chỉnh sửa thông tin server url hoặc chọn lại credential authen tới hệ thống sonarqube. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Kết quả sau khi chỉnh sửa ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378675)/* ["default"] */ .A) + "",
        width: "627",
        height: "268"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Xóa SonarQube servers"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Tại menu FPT Portal > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jenkins CI"
      }), " > Detail Cluster > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configurations"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SonarQube"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SonarQube server muốn xóa:"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(141811)/* ["default"] */ .A) + "",
        width: "627",
        height: "285"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Nhập confirm text để xác thực hành động ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282081)/* ["default"] */ .A) + "",
        width: "627",
        height: "291"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Kết quả sau khi xoá SonarQube config ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870011)/* ["default"] */ .A) + "",
        width: "627",
        height: "243"
      }), " Kết quả dưới hệ thống Jenkins: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(246600)/* ["default"] */ .A) + "",
        width: "627",
        height: "255"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(846126)/* ["default"] */ .A) + "",
        width: "627",
        height: "171"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-email-notifications",
        children: " Previous Cấu hình Email Notifications "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-telegram-bots",
        children: " Next Cấu hình Telegram Bots "
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

/***/ 282081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0e42955d294d-Picture80-f50e6c898ef9c91006406fa5b788dbbd.png");

/***/ },

/***/ 234725
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/129945add285-Picture72-cf86075ef65779a5c411ef26436580ef.png");

/***/ },

/***/ 846126
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1b0ac94a025e-Picture83-ce3eabbd99503bbc058a3ea17382b687.png");

/***/ },

/***/ 870011
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2069cb0692ed-Picture81-771ee2f740123c2faf58cc55dc81764b.png");

/***/ },

/***/ 246600
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/307c9acec97f-Picture82-8c16dd68ec0ab94fd1f526ec08ad43cc.png");

/***/ },

/***/ 141811
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/550edce0851b-Picture79-521fdc44004125d9b6ae2dd39f1bb869.png");

/***/ },

/***/ 314709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5b081a3bde4b-Picture73-e47b7e9fa46b2285e465451b7f0fb351.png");

/***/ },

/***/ 197604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/633dc912b708-Picture71-6d072f45a4d817bb83c315bcf179143d.png");

/***/ },

/***/ 950262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/888bade3d4df-Picture74-8c16dd68ec0ab94fd1f526ec08ad43cc.png");

/***/ },

/***/ 916605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8dd1855458cc-Picture76-8f66009c984cdeecee87ddae3718bf87.png");

/***/ },

/***/ 378675
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bd49a38ccfa2-Picture78-24e3e6a5573e5a15a936ab189d85ba8c.png");

/***/ },

/***/ 92620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d96ace12eee0-Picture77-54c54493d9338bb061825e8e1adc4541.png");

/***/ },

/***/ 69906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fccead948599-Picture75-9fb2df02be93a133e9d26026a0564346.png");

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