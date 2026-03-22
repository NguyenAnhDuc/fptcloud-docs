"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[43707],{

/***/ 909082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_integration_guide_gitlab_md_259_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-integration-guide-gitlab-md-259.json
const site_docs_fpt_appsec_integration_guide_gitlab_md_259_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/integration/guide-gitlab","title":"2. FPT AppSec","description":"GitLab Cloud","source":"@site/docs/fpt-appsec/integration/guide-gitlab.md","sourceDirName":"fpt-appsec/integration","slug":"/fpt-appsec/integration/guide-gitlab","permalink":"/fpt-appsec/integration/guide-gitlab","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Guide gitlab","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=guide-gitlab","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Guide github","permalink":"/fpt-appsec/integration/guide-github"},"next":{"title":"Guide gitlabserver","permalink":"/fpt-appsec/integration/guide-gitlabserver"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/integration/guide-gitlab.md


const frontMatter = {
	sidebar_label: 'Guide gitlab',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=guide-gitlab',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Configure GitLab",
  "id": "1-configure-gitlab",
  "level": 2
}, {
  "value": "2. Xem detail",
  "id": "2-xem-detail",
  "level": 2
}, {
  "value": "3. Reconfigure GitLab Cloud",
  "id": "3-reconfigure-gitlab-cloud",
  "level": 2
}, {
  "value": "4. Vô hiệu hoá tích hợp GitLab Cloud",
  "id": "4-vô-hiệu-hoá-tích-hợp-gitlab-cloud",
  "level": 2
}, {
  "value": "5. Access Key cho CI/CD pipeline",
  "id": "5-access-key-cho-cicd-pipeline",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "2-fpt-appsec",
        children: "2. FPT AppSec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GitLab Cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa tích hợp GitLab"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Xem thêm về phân quyền", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member",
          children: "tại đây"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-configure-gitlab",
      children: "1. Configure GitLab"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Sau khi đã chọn org/team, nhấn vào GitLab để đến màn tích hợp GitLab Cloud:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(27187)/* ["default"] */ .A) + "",
        width: "1912",
        height: "910"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Sau khi thiết lập quyền truy cập vào Private/public repository, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a personal access token"
      }), " , sau đó bạn sẽ được chuyển đến GitLab Login để tạo token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(281222)/* ["default"] */ .A) + "",
        width: "1193",
        height: "667"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Điền thông tin như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token name"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token Description"
      }), " và tích vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "read_api"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(19863)/* ["default"] */ .A) + "",
        width: "1917",
        height: "783"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(254341)/* ["default"] */ .A) + "",
        width: "1422",
        height: "691"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Copy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "personal access token"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(865988)/* ["default"] */ .A) + "",
        width: "1362",
        height: "693"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Personal Access Token"
      }), " vừa tạo và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(371202)/* ["default"] */ .A) + "",
        width: "1204",
        height: "697"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Personal Access Token"
      }), " , nếu một trong hai failed, màn hình sẽ hiển thị thông báo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection Failed"
      }), "(invalid PAT)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, màn hình sẽ hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connect successfully"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(425582)/* ["default"] */ .A) + "",
        width: "1192",
        height: "778"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-xem-detail",
      children: "2. Xem detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn xem chi tiết ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github",
        children: "tích hợp GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reconfigure-gitlab-cloud",
      children: "3. Reconfigure GitLab Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn reconfigure ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github",
        children: "tích hợp GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-vô-hiệu-hoá-tích-hợp-gitlab-cloud",
      children: "4. Vô hiệu hoá tích hợp GitLab Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn vô hiệu hóa ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github",
        children: "tích hợp GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-access-key-cho-cicd-pipeline",
      children: "5. Access Key cho CI/CD pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github",
        children: "tích hợp GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-github",
        children: " Previous GitHub Personal/Enterprise Cloud "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-gitlabserver",
        children: " Next GitLab Server "
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

/***/ 27187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0a091c8d37b1-lab1-1-7c52180606205daf8bd34962ee16cfaf.png");

/***/ },

/***/ 281222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/176588cd333d-lab2-b37b68e9f4a9f67b54f0610e7d6ddc82.png");

/***/ },

/***/ 19863
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/255803a15959-lab3-632882f343924f2a756303d04c9e11ab.png");

/***/ },

/***/ 865988
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/61555338aafb-lab5-0f468f9cae5dc3b730f4e2a57b9c7d7b.png");

/***/ },

/***/ 425582
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aab31bf06da1-lab9-7f7493be078f529bec0637d54cad649e.png");

/***/ },

/***/ 254341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d1e2310bdcba-lab4-37780a7a223c9970ca58312618d8d36e.png");

/***/ },

/***/ 371202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fc2f157e4136-lab6-a20a29f7fc25fcb65165b9c5b9ba38db.png");

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