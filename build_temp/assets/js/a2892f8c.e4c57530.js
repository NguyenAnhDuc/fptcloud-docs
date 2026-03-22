"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74776],{

/***/ 31531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_tutorials_huong_dan_tao_jobs_tren_jenkins_chay_tren_fpt_cloud_agent_md_a28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-tutorials-huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent-md-a28.json
const site_docs_fpt_jenkins_ci_tutorials_huong_dan_tao_jobs_tren_jenkins_chay_tren_fpt_cloud_agent_md_a28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/tutorials/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent","title":"2. FPT Jenkins CI","description":"Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent","source":"@site/docs/fpt-jenkins-ci/tutorials/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent.md","sourceDirName":"fpt-jenkins-ci/tutorials","slug":"/fpt-jenkins-ci/tutorials/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent","permalink":"/fpt-jenkins-ci/tutorials/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan tao jobs tren jenkins chay tren fpt cloud agent","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan tao jenkins pipeline ci cd tich hop cac tinh nang tren portal","permalink":"/fpt-jenkins-ci/tutorials/huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal"},"next":{"title":"Cap nhat mot credential","permalink":"/fpt-jenkins-ci/cap-nhat-mot-credential"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/tutorials/huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent.md


const frontMatter = {
	sidebar_label: 'Huong dan tao jobs tren jenkins chay tren fpt cloud agent',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent',
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
      children: "Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tuỳ từng phiên bản của hệ thống Jenkins sẽ có các cách cấu hình khác nhau để phù hợp cho mỗi phiên bản."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Từ phiên bản 2.451.0 do FPT Cloud cung cấp, để sử dụng kubenetes agent cần phải tạo folder và cấu hình agent có thể sử dụng cho folder. Đối với việc quản lý các dự án được triển khai CI/CD trên Jenkins, người dùng nên tạo folder cho từng dự án và cấu hình các service trong folder dự án, hành động này sẽ giúp người dùng có thể phân quyền cho user vào từng project và dễ dàng quản lý các project."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo một jobs jenkins cần các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Label của agent:"
            }), " ", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(711289)/* ["default"] */ .A) + "",
              width: "627",
              height: "312"
            }), " Trong trường hợp người dùng tạo một job bình thường loại freestyle và cấu hình chạy trên agent của FPT Cloud sẽ báo lỗi như sau: ", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(591379)/* ["default"] */ .A) + "",
              width: "627",
              height: "562"
            }), " Để có thể tạo job và chạy trên jenkins người dùng có thể thực hiện các bước như sau:"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Tạo folder để quản lý các job trên Jenkins"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["***Trên Dashboard Jenkins > New Item: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232405)/* ["default"] */ .A) + "",
        width: "627",
        height: "190"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["***Tạo item dạng folder: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(616092)/* ["default"] */ .A) + "",
        width: "627",
        height: "404"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["***Cấu hình kubenetes agent được sử dụng trong folder: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481781)/* ["default"] */ .A) + "",
        width: "627",
        height: "329"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Tạo một job đơn giản chạy trên Jenkins:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trong folder vừa tạo > Chọn"
        }), " New item/ Create a job:** ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(795506)/* ["default"] */ .A) + "",
          width: "627",
          height: "301"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["***Tạo jobs loại Freestyle để cấu hình jobs: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(698696)/* ["default"] */ .A) + "",
        width: "627",
        height: "381"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["***Nhập label agent chạy jobs: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156455)/* ["default"] */ .A) + "",
        width: "627",
        height: "245"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["***Cấu hình một execute shell để test jobs: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127844)/* ["default"] */ .A) + "",
        width: "627",
        height: "315"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cấu hình execute shell > Save jobs: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637200)/* ["default"] */ .A) + "",
        width: "627",
        height: "317"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Chạy thử jobs jenkins đã tạo ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15092)/* ["default"] */ .A) + "",
        width: "627",
        height: "625"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4."
      }), " Kết quả chạy jobs ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(909932)/* ["default"] */ .A) + "",
        width: "475",
        height: "286"
      }), " Kết quả chạy jobs: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(126426)/* ["default"] */ .A) + "",
        width: "627",
        height: "614"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802408)/* ["default"] */ .A) + "",
        width: "627",
        height: "502"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-dang-nhap-vao-fpt-cloud-jenkins-ci",
        children: " Previous Hướng dẫn đăng nhập vào FPT Cloud Jenkins CI "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-cau-hinh-nodes-build-tren-jenkins",
        children: " Next Hướng dẫn cấu hình Nodes Build trên Jenkins "
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

/***/ 481781
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13b71bc6f81e-Picture107-9b6ddfee758a1a06d4954194851423d2.png");

/***/ },

/***/ 909932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/145b00f747b4-Picture115-297ff44a7d87989a47725846a552d1c8.png");

/***/ },

/***/ 616092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2d903e4d68f6-Picture106-7f9790ce1a18660dd5b61aee709dcc2d.png");

/***/ },

/***/ 232405
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/468221820e81-Picture105-ec9b21b38ed5eb7b355a5888fcd93abf.png");

/***/ },

/***/ 591379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ee62b2a02d1-Picture104-ef5015fe10b4825d3abfc34f2f5bfb88.png");

/***/ },

/***/ 637200
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5be28d7407a0-Picture113-b5adcb25636311b9c4a53c14857c2ee9.png");

/***/ },

/***/ 126426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7605e1499c7d-Picture116-5bad6eb24d1a24c14367488cb346f387.png");

/***/ },

/***/ 802408
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/806d0758b66a-Picture117-9608110682cb942e5b81fb532724071d.png");

/***/ },

/***/ 795506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8729b0b825a7-Picture108-096d2270bbb0a55249f4ab96d8981595.png");

/***/ },

/***/ 15092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a0689b0d77a1-Picture114-4822ce25f304fa18bf7d0fa4bc4585d6.png");

/***/ },

/***/ 711289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c115e03cd260-Picture103-7b25ebc22f2211696ecaa37177dd252b.png");

/***/ },

/***/ 698696
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c5cac8422665-Picture110-e6bffcba54de9050ed8c3667dc9e9e44.png");

/***/ },

/***/ 156455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e24ed221ee16-Picture111-194e611a739f43b4cf5dddcef54845df.png");

/***/ },

/***/ 127844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fd5e8c52c6f5-Picture112-3471c247778b1551bb2df05c615074d7.png");

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