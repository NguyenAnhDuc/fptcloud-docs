"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[75564],{

/***/ 827569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_issues_guide_fcr_md_f8c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-issues-guide-fcr-md-f8c.json
const site_docs_fpt_appsec_issues_guide_fcr_md_f8c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/issues/guide-fcr","title":"2. FPT AppSec","description":"FPT Container Registry","source":"@site/docs/fpt-appsec/issues/guide-fcr.md","sourceDirName":"fpt-appsec/issues","slug":"/fpt-appsec/issues/guide-fcr","permalink":"/fpt-appsec/issues/guide-fcr","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Guide fcr","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=guide-fcr","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Guide dashboard overview","permalink":"/fpt-appsec/issues/guide-dashboard-overview"},"next":{"title":"Tích hợp & Lên lịch","permalink":"/fpt-appsec/integration/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/issues/guide-fcr.md


const frontMatter = {
	sidebar_label: 'Guide fcr',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=guide-fcr',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Integrate FCR - Add VPC",
  "id": "1-integrate-fcr---add-vpc",
  "level": 2
}, {
  "value": "2. Xem detail",
  "id": "2-xem-detail",
  "level": 2
}, {
  "value": "3. Reconfigure FPT Container Registry VPC",
  "id": "3-reconfigure-fpt-container-registry-vpc",
  "level": 2
}, {
  "value": "4. Xóa VPC",
  "id": "4-xóa-vpc",
  "level": 2
}, {
  "value": "5. Vô hiệu hoá tích hợp FPT Container Registry",
  "id": "5-vô-hiệu-hoá-tích-hợp-fpt-container-registry",
  "level": 2
}, {
  "value": "6. Access Key cho CI/CD pipeline",
  "id": "6-access-key-cho-cicd-pipeline",
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
      children: "FPT Container Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa tích hợp FPT Container Registry (FCR)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Xem thêm về phân quyền", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member",
          children: "tại đây"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-integrate-fcr---add-vpc",
      children: "1. Integrate FCR - Add VPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Sau khi đã chọn org/team, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Container Registry"
      }), " để đến màn tích hợp:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(624308)/* ["default"] */ .A) + "",
        width: "1914",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add VPC"
      }), " để thêm VPC mới vào danh sách tích hợp"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(108779)/* ["default"] */ .A) + "",
        width: "1897",
        height: "909"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn VPC cần tích hợp"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(983352)/* ["default"] */ .A) + "",
        width: "1399",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Sau khi chọn VPC, nếu bạn đã có Robot Account, điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Robot Account Name"
      }), " , nếu bạn chưa có Robot Account, hãy xem phần hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-container-registry-2/?doc=tao-moi-robot-account",
        children: "tại đây"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(65455)/* ["default"] */ .A) + "",
        width: "1399",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tên"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secret"
      }), " của Robot Account"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(793387)/* ["default"] */ .A) + "",
        width: "1374",
        height: "830"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(415148)/* ["default"] */ .A) + "",
        width: "1350",
        height: "828"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Sau khi điền hết thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Connection"
      }), ". Hệ thống sẽ kiểm tra thông tin các trường bắt buộc, nếu thông tin hợp lệ, hệ thống thông báo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connected successfully"
      }), " và nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      }), " được enabled"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(841911)/* ["default"] */ .A) + "",
        width: "1350",
        height: "828"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trường hợp các thông tin không hợp lệ (sai Robot Account, secret), hệ thống thông báo \"Connected failed\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Sau khi hệ thống thông báo test kết nốt thành công, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(892529)/* ["default"] */ .A) + "",
        width: "1385",
        height: "842"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VPC được kết nối thành công sẽ được thêm vào danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrated VPCs"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(492347)/* ["default"] */ .A) + "",
        width: "1214",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-xem-detail",
      children: "2. Xem detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền xem chi tiết tích hợp"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi đã chọn org/team, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configured FPT Container Registry"
      }), " để xem chi tiết"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(624308)/* ["default"] */ .A) + "",
        width: "1914",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở đây, bạn có thể xem trạng thái của tích hợp, danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrated VPCs"
      }), " với các thông tin ", (0,jsx_runtime.jsx)(_components.em, {
        children: "VPC, Robot Account Name, Container Registry Name"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Key"
      }), " phục vụ cho tích hợp CICD."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(492347)/* ["default"] */ .A) + "",
        width: "1214",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn có thể tiến hành ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add VPC"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconfigure"
      }), " , và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " VPCs hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " tích hợp với FPT Container Registry"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png",
        children: "anhfsec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reconfigure-fpt-container-registry-vpc",
      children: "3. Reconfigure FPT Container Registry VPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Để ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reconfigure"
      }), " FPT Container Registry VPC, ấn vào màn hình chi tiết của tích hợp FPT Container Registry. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconfigure"
      }), " ở mục Action của 1 VPC"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(32733)/* ["default"] */ .A) + "",
        width: "1244",
        height: "670"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Thực hiện các thao tác giống ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add VPC"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-xóa-vpc",
      children: "4. Xóa VPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " ở mục Action của 1 VPC"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/rfcr2.png",
        children: "anhfsec"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.em, {
        children: "delete"
      }), " rồi nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/rfcr3.png",
        children: "anhfsec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-vô-hiệu-hoá-tích-hợp-fpt-container-registry",
      children: "5. Vô hiệu hoá tích hợp FPT Container Registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn vô hiệu hóa ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-github",
        children: "tích hợp GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-access-key-cho-cicd-pipeline",
      children: "6. Access Key cho CI/CD pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở phần detail, ngoài General Information, bạn sẽ được cung cấp ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "access key"
      }), " của từng VPC để có thể tích hợp CI/CD Pipeline"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/rfcr4.png",
        children: "anhfsec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-gitlabserver",
        children: " Previous GitLab Server "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-harbor",
        children: " Next Harbor "
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

/***/ 841911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08073379a295-lala3-4d695306ce407a5056725d8c4b0d1447.png");

/***/ },

/***/ 108779
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/53c9d4c2d850-fcr2-1-8e396c007218d21e382d521ab4e92a95.png");

/***/ },

/***/ 65455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/55fd52f82154-infcr4-58e8c608d4320f3e274fbe9745c5bf30.png");

/***/ },

/***/ 415148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91f84e574c3c-lala2-fc8147f7ad4d0d03bd6fd1359ec05677.png");

/***/ },

/***/ 492347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c2ef4bc41a7b-infcr9-c882860f5380ff89d45c6db036e20aae.png");

/***/ },

/***/ 624308
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c3f2a38c2c16-fcr1-2-2af56d352218ece40dd4b5c31b595f89.png");

/***/ },

/***/ 892529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c753c69cbbd0-infcr8-8ed1344c85ba6f2a6abda0860cd6a6d8.png");

/***/ },

/***/ 793387
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d546663caf97-lala1-495332b157a1ee36da2be48f1eb3198c.png");

/***/ },

/***/ 983352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ddd75d3244a7-infcr3-09519ee37a1955840cceab65640d01e4.png");

/***/ },

/***/ 32733
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fe8e1ce98cb2-lala4-f102a73ca37f5133a885579842920de6.png");

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