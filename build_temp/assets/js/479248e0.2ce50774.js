"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[17458],{

/***/ 1234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_jenkins_ci_huong_dan_cau_hinh_nodes_build_tren_jenkins_md_479_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-jenkins-ci-huong-dan-cau-hinh-nodes-build-tren-jenkins-md-479.json
const site_docs_fpt_jenkins_ci_huong_dan_cau_hinh_nodes_build_tren_jenkins_md_479_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins","title":"2. FPT Jenkins CI","description":"Hướng dẫn cấu hình Nodes Build trên Jenkins","source":"@site/docs/fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins.md","sourceDirName":"fpt-jenkins-ci","slug":"/fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins","permalink":"/fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan cau hinh nodes build tren jenkins","title":"2. FPT Jenkins CI","source":"https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-cau-hinh-nodes-build-tren-jenkins","parent":"https://fptcloud.com/documents/fpt-jenkins-ci","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Demo","permalink":"/fpt-jenkins-ci/demo"},"next":{"title":"Huong dan dang nhap vao fpt cloud jenkins ci","permalink":"/fpt-jenkins-ci/huong-dan-dang-nhap-vao-fpt-cloud-jenkins-ci"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-jenkins-ci/huong-dan-cau-hinh-nodes-build-tren-jenkins.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan cau hinh nodes build tren jenkins',
	title: '2. FPT Jenkins CI',
	source: 'https://fptcloud.com/documents/fpt-jenkins-ci/?doc=huong-dan-cau-hinh-nodes-build-tren-jenkins',
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
      children: "Hướng dẫn cấu hình Nodes Build trên Jenkins"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại, trên FPT Cloud Portal chỉ cho phép người dùng tạo Jenkins Agent loại Cloud. Để có thể thêm mới một Agent do khách hàng quản lý,có thể thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Thêm mới Agent loại Node"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Chuẩn bị VM để làm agent cho Jenkins"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Agent cho Jenkins có thể chạy một số hệ điều hành sau: Windows, Linux (Ubuntu/Centos,… )"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Cài đặt Java trên VM để kết nối tới Jenkins:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với Linux:"
      }), " VM trên FPT Cloud đang support ubuntu, trong hướng dẫn người dùng cài java trên ubuntu. Tuỳ nhu cầu sử dụng của người dùng có thể cài các phiên bản java khác nhau. Ví dụ người dùng muốn cài java 11, thực hiện cài đặt như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "sudo apt update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "sudo apt install openjdk-11-jdk"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra version java được cài đặt:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Java –version"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(362446)/* ["default"] */ .A) + "",
        width: "627",
        height: "59"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với windows:"
      }), " Download java version phù hợp: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.oracle.com/java/technologies/downloads/?er=221886",
        children: "https://www.oracle.com/java/technologies/downloads/?er=221886"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599026)/* ["default"] */ .A) + "",
        width: "627",
        height: "296"
      }), " Thực hiện cài đặt trên máy client"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình JAVA_PATH trong enviroment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Đăng nhập vào Jenkins instance với username/password trên Portal ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599026)/* ["default"] */ .A) + "",
        width: "627",
        height: "296"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Thực hiện tạo mới một Node như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(988502)/* ["default"] */ .A) + "",
        width: "627",
        height: "256"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(227088)/* ["default"] */ .A) + "",
        width: "627",
        height: "240"
      }), " Tiếp tục cấu hình các thông tin: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395525)/* ["default"] */ .A) + "",
        width: "627",
        height: "322"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4."
      }), " Sau khi tạo nodes lấy thông tin để kết nối tới nodes như sau ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(339426)/* ["default"] */ .A) + "",
        width: "627",
        height: "234"
      }), " Thông tin để connect agent: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528805)/* ["default"] */ .A) + "",
        width: "627",
        height: "199"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5."
      }), " Chỉnh sửa commad để connect Agent như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FPT Cloud sử dụng websocket để connect Agent Jenkins. Vì vậy, để có thể connect tới Agent Jenkins cần thêm options ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“-webSocket”"
      }), " để có thể kết nối đến Agent:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ:"
      }), " curl -sO ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/jnlpJars/agent.jar"
      }), " java -jar agent.jar -url ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/",
        children: "https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/"
      }), " -secret secretData -name \"Jenkins VM customize\" -webSocket -workDir \"/root/jenkins-home\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6."
      }), " Kiểm tra kết quả khi kết nối đến node:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Logs kết nối agent: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(518841)/* ["default"] */ .A) + "",
        width: "627",
        height: "251"
      }), " Kết quả connect trên Jenkins:  Tạo một jobs sử dụng Agent. Kết quả như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890367)/* ["default"] */ .A) + "",
        width: "627",
        height: "151"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent",
        children: " Previous Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal",
        children: " Next Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal "
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

/***/ 988502
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c00ad8aeea1-Picture120-fa9fabd930af0887dcb5be52d7f97954.png");

/***/ },

/***/ 362446
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/271362651e2d-Picture118-77b14cecb8f7f2ba1e4898efc2115342.png");

/***/ },

/***/ 518841
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/504e5577ed68-Picture125-eebb101173eff752cf0d4939233a8f73.png");

/***/ },

/***/ 890367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5f697d59ce27-Picture126-43fae42598894419e3bfaba5bc106d64.png");

/***/ },

/***/ 395525
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/83cc3c7dd7e8-Picture122-3d5b8190163fc44bbe0ab682afeb5ae2.png");

/***/ },

/***/ 227088
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8e3020131117-Picture121-c5d300a0b2b7c86a5417568e53900477.png");

/***/ },

/***/ 528805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91fc45b19433-Picture124-01fbd0469a456a407a30a8f5ce25d30b.png");

/***/ },

/***/ 599026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e4468e482731-Picture119-911e740848a14b55fd336067d4d87c81.png");

/***/ },

/***/ 339426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fbb1d582f9a4-Picture123-4041b3eebe3a444451369b8eca848451.png");

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