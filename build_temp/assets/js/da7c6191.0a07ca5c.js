"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[4009],{

/***/ 44148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_tutorials_huong_dan_tao_jenkins_pipeline_ci_cd_tich_hop_cac_tinh_nang_tren_portal_md_da7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-tutorials-huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal-md-da7.json
const site_docs_fpt_jenkins_ci_tutorials_huong_dan_tao_jenkins_pipeline_ci_cd_tich_hop_cac_tinh_nang_tren_portal_md_da7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/tutorials/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal","title":"2. FPT Jenkins CI","description":"Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal","source":"@site/docs/fpt-jenkins-ci/tutorials/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal.md","sourceDirName":"fpt-jenkins-ci/tutorials","slug":"/fpt-jenkins-ci/tutorials/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal","permalink":"/fpt-jenkins-ci/tutorials/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan tao jenkins pipeline ci cd tich hop cac tinh nang tren portal","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Demo","permalink":"/fpt-jenkins-ci/tutorials/demo"},"next":{"title":"Huong dan tao jobs tren jenkins chay tren fpt cloud agent","permalink":"/fpt-jenkins-ci/tutorials/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/tutorials/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal.md


const frontMatter = {
	sidebar_label: 'Huong dan tao jenkins pipeline ci cd tich hop cac tinh nang tren portal',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal',
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
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong hướng dẫn này sẽ hướng dẫn người dùng tạo một CI/CD flow cơ bản như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(328820)/* ["default"] */ .A) + "",
        width: "627",
        height: "309"
      }), " Luồng triển khai CI/CD diễn ra các hoạt động như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Sự kiện kích hoạt luồng: developer có thể kích hoạt luồng triển khai CI/CD với sự kiện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push commit/Merge request build"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Hệ thống mã nguồn (source control management) sẽ gửi thông điệp trigger tới hệ thống CI/CD. Hệ thống mã nguồn sẽ gửi thông điệp build qua webhook để kích hoạt một jobs build trên Jenkins"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Hệ thống CI/CD sử dụng FPT Jenkins CI và sử dụng FPT Cloud Agent sẽ tiến hành thực hiện các bước bao gồm: Scan code với sonarqube, Unittest, Build images."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4."
      }), " Nếu Pass qua các bài kiểm thử và build images thành công, images sẽ được đẩy tới hệ thống FPT Container Registry (FCR) để lưu trữ images phục vụ việc deploy ứng dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5."
      }), " Sau khi images được đẩy lên FCR, hệ thống sẽ thực hiện cập nhật tag images mới tới source code chứa config được quản lý bởi FPT Argo CD"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6."
      }), " Hệ thống FPT Argo CD thực hiện deploy ứng dụng lên môi trường dev/test/staging"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7."
      }), " Sau khi deploy ứng dụng, hệ thống CI/CD thực hiện chạy Automations test để kiểm thử tự động trên môi trường staging"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8."
      }), " Sau khi chạy xong luồng CI/CD pipeline, hệ thống CI/CD trả kết quả build về cho developer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô hình hệ thống CI/CD sử dụng các thành phần bao gồm:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tên hệ thống"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Công cụ sử dụng"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source code Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gitlab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPT Jenkins CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPT ArgoCD"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Login vào Jenkins với username/pass trên portal:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trên FPT Cloud Portal tạo credential để sử dụng trong pipeline bao gồm: -Credential với kind User with Password để authenticator cho gitlab, Container Registry: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(135399)/* ["default"] */ .A) + "",
          width: "627",
          height: "324"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(558753)/* ["default"] */ .A) + "",
          width: "627",
          height: "330"
        }), " -Credential với kind Secret Text để authen cho SonarQube: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(185425)/* ["default"] */ .A) + "",
          width: "627",
          height: "325"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cấu hình sonarqube server để thực hiện Scan Code trong pipeline ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(326724)/* ["default"] */ .A) + "",
          width: "627",
          height: "239"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cấu hình Email Notifications trên FPT Cloud Portal để tích hợp trong pipeline ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(673334)/* ["default"] */ .A) + "",
          width: "627",
          height: "345"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tạo job với loại Pipeline để thiết lập một luồng CI/CD cơ bản: Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New Item"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create a job"
        }), " để tạo một pipeline jobs CI/CD: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(845470)/* ["default"] */ .A) + "",
          width: "627",
          height: "262"
        }), " Nhập thông tin tạo jobs: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(638427)/* ["default"] */ .A) + "",
          width: "627",
          height: "504"
        }), " Cấu hình pipeline jobs với pipeline script. Có 2 lựa chọn để cấu hình jenkinsfile: Cách 1: Nhập script pipeline qua giao diện Jenkins: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(583775)/* ["default"] */ .A) + "",
          width: "627",
          height: "334"
        }), " Cách 2: Sử dụng Jenkinsfile để cấu hình pipeline script từ source code: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(435531)/* ["default"] */ .A) + "",
          width: "627",
          height: "334"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(316999)/* ["default"] */ .A) + "",
          width: "627",
          height: "231"
        }), " Pipeline chạy jobs: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(762322)/* ["default"] */ .A) + "",
          width: "627",
          height: "284"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-nodes-build-tren-jenkins",
        children: " Previous Hướng dẫn cấu hình Nodes Build trên Jenkins "
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

/***/ 316999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0425bb844d78-Picture137-6b71d5fc7812cdac470d808676aa6695.png");

/***/ },

/***/ 845470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/102cb0ac6dc2-Picture133-dd707e57663b19be8dd37e4971b855f4.png");

/***/ },

/***/ 638427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2b34d23c78a4-Picture134-2e595f4061ab648490889c1ba03c73fd.png");

/***/ },

/***/ 762322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/384988caf6f2-Picture138-d71f5c93ac8f9c91e9cff626246e2f9a.png");

/***/ },

/***/ 583775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40b308ac488e-Picture135-6f2aec550f5d375a3e4ffd2a5a746de9.png");

/***/ },

/***/ 435531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4cae1695461f-Picture136-dedc0f5b44e83a4fc3d3e0c2510568b2.png");

/***/ },

/***/ 185425
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/62a2764614a9-Picture130-a1459efd83e27d67b89ff40fb1f1e116.png");

/***/ },

/***/ 673334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/77753ca61d80-Picture132-83b1ec5b686da6d98438fabcb6b4479b.png");

/***/ },

/***/ 558753
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/78a57dc5ee90-Picture129-403e1c146ccb0f9518070b3040bbeeaf.png");

/***/ },

/***/ 326724
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/81a306f277c5-Picture131-1cc325cf467553c68454e7b043dd720b.png");

/***/ },

/***/ 328820
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aecf39ae690f-Picture127-e3786738be252d10cffde14092f4f183.png");

/***/ },

/***/ 135399
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ceb629a560c0-Picture128-22a722d0cf1a75dd33f5799ed1e76dfe.png");

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