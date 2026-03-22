"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[13223],{

/***/ 218338
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_integration_guide_harbor_md_b41_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-integration-guide-harbor-md-b41.json
const site_docs_fpt_appsec_integration_guide_harbor_md_b41_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/integration/guide-harbor","title":"2. FPT AppSec","description":"Harbor","source":"@site/docs/fpt-appsec/integration/guide-harbor.md","sourceDirName":"fpt-appsec/integration","slug":"/fpt-appsec/integration/guide-harbor","permalink":"/fpt-appsec/integration/guide-harbor","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Guide harbor","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=guide-harbor","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Guide gitlabserver","permalink":"/fpt-appsec/integration/guide-gitlabserver"},"next":{"title":"Guide integration","permalink":"/fpt-appsec/integration/guide-integration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/integration/guide-harbor.md


const frontMatter = {
	sidebar_label: 'Guide harbor',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=guide-harbor',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Tạo Robot Account - Harbor",
  "id": "1-tạo-robot-account---harbor",
  "level": 2
}, {
  "value": "2. Tích hợp Harbor",
  "id": "2-tích-hợp-harbor",
  "level": 2
}, {
  "value": "3. Xem chi tiết tích hợp Harbor",
  "id": "3-xem-chi-tiết-tích-hợp-harbor",
  "level": 2
}, {
  "value": "3. Reintegrate Harbor",
  "id": "3-reintegrate-harbor",
  "level": 2
}, {
  "value": "4. Vô hiệu hoá tích hợp FPT Container Registry",
  "id": "4-vô-hiệu-hoá-tích-hợp-fpt-container-registry",
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
      children: "Harbor"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tạo-robot-account---harbor",
      children: "1. Tạo Robot Account - Harbor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập Harbor Server của bạn, chọn tab Administration > Robot Accounts"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Robot Account"
      }), " để tạo mới"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(61459)/* ["default"] */ .A) + "",
        width: "1887",
        height: "816"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Điền các thông tin như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expiration time"
      }), " sau đón nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(175451)/* ["default"] */ .A) + "",
        width: "1902",
        height: "893"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Chọn các quyền hệ thống cần thiết sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(331321)/* ["default"] */ .A) + "",
        width: "1885",
        height: "859"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Chọn các Project mà Robot Account cần có quyền sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Permission"
      }), " cho Robot Account đó. Cần đảm bảo Robot Account có quyền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "List, Read Artifacts"
      }), " và quyền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "List, Pull, Read Repository"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(462866)/* ["default"] */ .A) + "",
        width: "1884",
        height: "897"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(997999)/* ["default"] */ .A) + "",
        width: "1011",
        height: "804"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Sau khi điền hết thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finish"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(878081)/* ["default"] */ .A) + "",
        width: "991",
        height: "703"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Sau khi Robot Account được tạo thành công, copy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Robot Account name"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secret"
      }), " dùng cho tích hợp tại màn hình của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(152522)/* ["default"] */ .A) + "",
        width: "891",
        height: "361"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tích-hợp-harbor",
      children: "2. Tích hợp Harbor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa tích hợp Harbor"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Xem thêm về phân quyền", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-security-platform/?doc=quan-ly-member",
          children: "tại đây"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Sau khi đã chọn org/team, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Harbor"
      }), " để đến màn tích hợp:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(992466)/* ["default"] */ .A) + "",
        width: "1908",
        height: "909"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Container Registry Name"
      }), " (URL Harbor server) của bạn, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Robot Account Name"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Robot Account Secret"
      }), " (đã tạo từ Harbor)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(180855)/* ["default"] */ .A) + "",
        width: "1206",
        height: "639"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi điền hết thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Connection"
      }), ". Hệ thống sẽ kiểm tra thông tin các trường bắt buộc, nếu thông tin hợp lệ, hệ thống thông báo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connected successfully"
      }), " và nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      }), " được ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enabled"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(963603)/* ["default"] */ .A) + "",
        width: "1205",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Sau khi hệ thống thông báo test kết nốt thành công, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(659580)/* ["default"] */ .A) + "",
        width: "1221",
        height: "697"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-xem-chi-tiết-tích-hợp-harbor",
      children: "3. Xem chi tiết tích hợp Harbor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền xem chi tiết tích hợp"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi đã chọn org/team, nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configured Harbor"
      }), " để xem chi tiết"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(659580)/* ["default"] */ .A) + "",
        width: "1221",
        height: "697"
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
        src: (__webpack_require__(216799)/* ["default"] */ .A) + "",
        width: "1203",
        height: "806"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn có thể tiến hành ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reintegrate"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " tích hợp Harbor"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png",
        children: "anhfsec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reintegrate-harbor",
      children: "3. Reintegrate Harbor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Để ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reintegrate Harbor"
      }), " , ấn vào màn hình chi tiết của tích hợp Harbor. Chọn biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " cạnh mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Account Credentials"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(778170)/* ["default"] */ .A) + "",
        width: "1214",
        height: "810"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Thực hiện các thao tác giống ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate Harbor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-vô-hiệu-hoá-tích-hợp-fpt-container-registry",
      children: "4. Vô hiệu hoá tích hợp FPT Container Registry"
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
      }), " để có thể tích hợp CI/CD Pipeline"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/hb15.png",
        children: "anhfsec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-fcr",
        children: " Previous FPT Container Registry "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cicd-guideline",
        children: " Next DevOps Pipeline Integration "
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

/***/ 997999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12df39e44c85-hb5-fef6155306e8dbe00376283cd7bdef75.png");

/***/ },

/***/ 152522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13cec7b9e4ed-hb7-0e56014487289d3282697d11e6d97ecf.png");

/***/ },

/***/ 175451
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/184c1f489fb3-hb2-d8e7765f59f90a9882b8c2faf106cb70.png");

/***/ },

/***/ 462866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/238ff62a1852-hb4-e2d34651c31e531ac6668cb8be173a3e.png");

/***/ },

/***/ 61459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/312b60583075-hb1-1-e6f138a24788119c309ffc9cedd8c9ed.png");

/***/ },

/***/ 331321
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/752643bd0436-hb3-c3910780cdaf098be858f7fe4754dfa5.png");

/***/ },

/***/ 659580
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85d22a70a635-hb11-3ae8e63ba09a763720b1eead7fced6ee.png");

/***/ },

/***/ 992466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/88b6c13676ee-hb8-02b7a539aefd52a94aaa932a0c8f9004.png");

/***/ },

/***/ 963603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b1a89abe05d6-hb10-ebe49bf293efdc8796bf9fdc4d33771f.png");

/***/ },

/***/ 216799
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b9f618ce2ae3-hb13-18adb8557f378fa787e40394de5c3def.png");

/***/ },

/***/ 878081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bf0aa7ff25dc-hb6-1-06a451cf28165cd9d1129c1b3eeca13b.png");

/***/ },

/***/ 180855
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c25dbb06196d-hb9-ed659e1dba1af399f021d4d94424f4ab.png");

/***/ },

/***/ 778170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f00160344485-hb14-30a67e97450d3c0e25a40c355a79c24a.png");

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