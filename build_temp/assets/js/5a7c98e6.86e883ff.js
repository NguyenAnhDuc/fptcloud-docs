"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[96661],{

/***/ 67226
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_guide_github_md_5a7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-guide-github-md-5a7.json
const site_docs_fpt_appsec_guide_github_md_5a7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/guide-github","title":"2. FPT AppSec","description":"GitHub Personal/Enterprise Cloud","source":"@site/docs/fpt-appsec/guide-github.md","sourceDirName":"fpt-appsec","slug":"/fpt-appsec/guide-github","permalink":"/fpt-appsec/guide-github","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Guide github","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=guide-github","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Guide fcr","permalink":"/fpt-appsec/guide-fcr"},"next":{"title":"Guide gitlab","permalink":"/fpt-appsec/guide-gitlab"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/guide-github.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Guide github',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=guide-github',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Configure GitHub",
  "id": "1-configure-github",
  "level": 2
}, {
  "value": "2. Xem detail",
  "id": "2-xem-detail",
  "level": 2
}, {
  "value": "3. Reconfigure GitHub",
  "id": "3-reconfigure-github",
  "level": 2
}, {
  "value": "4. Vô hiệu hoá tích hợp GitHub",
  "id": "4-vô-hiệu-hoá-tích-hợp-github",
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
      children: "GitHub Personal/Enterprise Cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " có quyền chỉnh sửa tích hợp ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Xem thêm về phân quyền", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member",
          children: "tại đây"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-configure-github",
      children: "1. Configure GitHub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Sau khi đã chọn org/team, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub"
      }), " để đến màn tích hợp GitHub:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(352231)/* ["default"] */ .A) + "",
        width: "1907",
        height: "910"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Sau khi thiết lập quyền truy cập vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private/public repository"
      }), " , nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a personal access token"
      }), " , sau đó bạn sẽ được chuyển đến GitHub để tạo token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(152974)/* ["default"] */ .A) + "",
        width: "1190",
        height: "820"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tokens (classic)"
      }), " ở thanh Menu bên trái và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate new token (Classic)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(615402)/* ["default"] */ .A) + "",
        width: "1917",
        height: "505"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(763896)/* ["default"] */ .A) + "",
        width: "1174",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), " và tích chọn repo để sử dụng được các tính năng"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(745259)/* ["default"] */ .A) + "",
        width: "1903",
        height: "732"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Token"
      }), " để tạo token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(810225)/* ["default"] */ .A) + "",
        width: "1304",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy link"
      }), " của token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(376735)/* ["default"] */ .A) + "",
        width: "1910",
        height: "644"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Paste ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "link token"
      }), " vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Personal Access Token"
      }), " và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(29462)/* ["default"] */ .A) + "",
        width: "1214",
        height: "820"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(203508)/* ["default"] */ .A) + "",
        width: "1210",
        height: "811"
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
        children: "Bước 8"
      }), " : Nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-xem-detail",
      children: "2. Xem detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền xem chi tiết các loại tích hợp"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi đã chọn org/team, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configured GitHub"
      }), " để xem tình trạng configure"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(430371)/* ["default"] */ .A) + "",
        width: "1906",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở đây, bạn có thể thấy các thông tin như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Personal Access Token"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository Access"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrated at"
      }), " , và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Key"
      }), " phục vụ cho tích hợp CICD"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(39560)/* ["default"] */ .A) + "",
        width: "1198",
        height: "623"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn có thể tiến hành ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reintegrate"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " tích hợp GitHub"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reconfigure-github",
      children: "3. Reconfigure GitHub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconfigure"
      }), " trong màn hình chi tiết của tích hợp GitHub"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(568088)/* ["default"] */ .A) + "",
        width: "1195",
        height: "622"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Thực hiện lại các thao tác giống khi tích hợp GitHub"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-vô-hiệu-hoá-tích-hợp-github",
      children: "4. Vô hiệu hoá tích hợp GitHub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " trong màn hình chi tiết của tích hợp GitHub"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(617887)/* ["default"] */ .A) + "",
        width: "1195",
        height: "622"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền “disable\" và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để thực hiện vô hiệu hóa"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(377230)/* ["default"] */ .A) + "",
        width: "1204",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-access-key-cho-cicd-pipeline",
      children: "5. Access Key cho CI/CD pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở phần detail bạn sẽ được cung cấp access key để có thể tích hợp CI/CD Pipeline. Hướng dẫn tích hợp ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-security-platform/?doc=cicd-guideline",
        children: "tại đây"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(581867)/* ["default"] */ .A) + "",
        width: "1197",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(899346)/* ["default"] */ .A) + "",
        width: "1191",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-integration",
        children: " Previous Integration Management - Quản lý tích hợp "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-gitlab",
        children: " Next GitLab Cloud "
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

/***/ 376735
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0bca59fa0d6d-G9-42c0097e9d70203142ef31c2d5f05a34.png");

/***/ },

/***/ 581867
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0f0523e9f602-in-git5-49c10d47454b53c19934b449817ff79e.png");

/***/ },

/***/ 615402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a2f74b6395b-G5-93c0f3599c0f8a5cd935e93585735497.png");

/***/ },

/***/ 352231
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1e066503dd83-in-git-9fa534e7e946c775bb98b7627f46a003.png");

/***/ },

/***/ 745259
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/399bf273704a-G7-c3b60cab60fe94c80d01828e4b95fc06.png");

/***/ },

/***/ 430371
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/849778ed6c8b-in-git2-ccf8a81c8c9a64838a9d501d8a51227e.png");

/***/ },

/***/ 39560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8d5a45e01dd1-Screenshot-2025-06-17-155316-bb6fe263f4c2c76b436d7b62d2086465.png");

/***/ },

/***/ 763896
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/94657d49c130-G6-c618bdf060873050a0086c8dd1727ce1.png");

/***/ },

/***/ 203508
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/96b6199e575a-G11-bc5c06b0f0e6faf66a4dff8a5e021afa.png");

/***/ },

/***/ 568088
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ac8ba336dc12-in-git3-a082fdce56941136ca3bc1cf668aa407.png");

/***/ },

/***/ 29462
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ace18550680b-G10-0f4653798916e3df3dd7c2ef9057b763.png");

/***/ },

/***/ 152974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b087642bf8ce-G4-bf6725e8a0763dd5fff53e0b80f3ec9f.png");

/***/ },

/***/ 899346
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c0ffda22dcba-in-git6-32da753855e186399dc5dcf3af20c77a.png");

/***/ },

/***/ 617887
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cd794a676c36-in-git4-5a5dfb735d4086d53f0ea35c5bbc6d7c.png");

/***/ },

/***/ 810225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cf628d37d236-G8-efd00c7ba7331e44542cf5e273ad3bae.png");

/***/ },

/***/ 377230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d7098984e579-Screenshot-2025-06-17-160052-edd46088616af57ed43da4da4a5f22c4.png");

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