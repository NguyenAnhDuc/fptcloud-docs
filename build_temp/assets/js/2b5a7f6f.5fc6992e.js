"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[57598],{

/***/ 935231
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_api_management_quan_ly_products_md_2b5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-api-management-quan-ly-products-md-2b5.json
const site_docs_fpt_api_management_quan_ly_products_md_2b5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-api-management/quan-ly-products","title":"2. FPT API Management","description":"Quản lý Products","source":"@site/docs/fpt-api-management/quan-ly-products.md","sourceDirName":"fpt-api-management","slug":"/fpt-api-management/quan-ly-products","permalink":"/fpt-api-management/quan-ly-products","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly products","title":"2. FPT API Management","source":"https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-products","parent":"https://fptcloud.com/documents/fpt-api-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly consumers","permalink":"/fpt-api-management/quan-ly-consumers"},"next":{"title":"Quan ly rest apis","permalink":"/fpt-api-management/quan-ly-rest-apis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-api-management/quan-ly-products.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly products',
	title: '2. FPT API Management',
	source: 'https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-products',
	parent: 'https://fptcloud.com/documents/fpt-api-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT API Management';

const assets = {

};



const toc = [{
  "value": "1. Khai báo Product",
  "id": "1-khai-báo-product",
  "level": 2
}, {
  "value": "2. Sửa thông tin của Product",
  "id": "2-sửa-thông-tin-của-product",
  "level": 2
}, {
  "value": "3. Gắn APIs vào Product",
  "id": "3-gắn-apis-vào-product",
  "level": 2
}, {
  "value": "4. Gỡ APIs khỏi Product",
  "id": "4-gỡ-apis-khỏi-product",
  "level": 2
}, {
  "value": "5. Xóa Product",
  "id": "5-xóa-product",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "2-fpt-api-management",
        children: "2. FPT API Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Products"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-khai-báo-product",
      children: "1. Khai báo Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manager"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Products"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 9",
        src: (__webpack_require__(805393)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên product."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Title:"
        }), " Tiêu đề."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visibility type:"
        }), " Chế độ hiển thị của Product, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Public"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Close"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 10",
        src: (__webpack_require__(382370)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 11",
        src: (__webpack_require__(389938)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creat"
      }), " bị disable, hãy kiểm tra lại gói dịch vụ API Management của bạn. Với gói ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pilot"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Normal"
      }), " , chỉ có thể tạo tối đa 1 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " trên hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-sửa-thông-tin-của-product",
      children: "2. Sửa thông tin của Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thay đổi thông tin của một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " cần thay đổi thông tin > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 42",
        src: (__webpack_require__(335695)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin mới và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 43",
        src: (__webpack_require__(977228)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần nhập đầy đủ các trường dữ liệu và tuân thủ các validation tương tự khi tạo Product."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-gắn-apis-vào-product",
      children: "3. Gắn APIs vào Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để gán API vào một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " cần gán API. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register API."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 12",
        src: (__webpack_require__(244247)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 13",
        src: (__webpack_require__(368649)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn API cần gán vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Select"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 14",
        src: (__webpack_require__(787493)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 15",
        src: (__webpack_require__(27363)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 Product có thể gán được với nhiều APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 API cũng có thể xuất hiện cùng lúc trong nhiều product"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product sẽ ảnh hưởng tới việc group API trong product đó được publish ra tới loại consumer nào."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-gỡ-apis-khỏi-product",
      children: "4. Gỡ APIs khỏi Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để gỡ API vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register API."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 12",
        src: (__webpack_require__(244247)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn API cần gỡ khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 44",
        src: (__webpack_require__(656748)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), " để xác nhận."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 45",
        src: (__webpack_require__(31411)/* ["default"] */ .A) + "",
        width: "457",
        height: "152"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-xóa-product",
      children: "5. Xóa Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " đã khai báo trước đó khỏi hệ thống, bạn cần đảm bảo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " đấy đang không gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REST APIs"
      }), " nào. Để gỡ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RestAPIs"
      }), " khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " , hãy thao tác theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gỡ APIs khỏi Product."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " cần xóa > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 46",
        src: (__webpack_require__(105743)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Trong popup xác nhận thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), " để tiến hành xóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 45",
        src: (__webpack_require__(31411)/* ["default"] */ .A) + "",
        width: "457",
        height: "152"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nếu gặp lỗi : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Could not remove that product as there are still API in the product!"
      }), ". Bạn cần xóa hết APIs trong Product đấy trước khi thao tác."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-rest-apis",
        children: " Previous Quản lý REST APIs "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-api-site",
        children: " Next Quản lý API site "
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

/***/ 335695
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10a13d66f6e4-Userguide-FPT-API-Management-42-1024x538-ee22bd10f98fe3a0eface6457fb17122.png");

/***/ },

/***/ 27363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26910f977c9f-Userguide-FPT-API-Management-15-1024x538-befdfe1cd18eced37b657f6dc0334482.png");

/***/ },

/***/ 977228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26ece1a387c7-Userguide-FPT-API-Management-43-1024x538-8fddaf951a93f5262e41503ff579b982.png");

/***/ },

/***/ 368649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40e6fd9caa59-Userguide-FPT-API-Management-13-1024x538-af9506c5ef234af9c712bd0a33fcd8f6.png");

/***/ },

/***/ 31411
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 382370
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5c96395a0fdd-Userguide-FPT-API-Management-10-1024x538-028469cedcf960b9e71eed3337a5702e.png");

/***/ },

/***/ 787493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/86d8a0d01da5-Userguide-FPT-API-Management-14-1024x538-fa8b9dd110c0e3037faf0a760bb24f26.png");

/***/ },

/***/ 389938
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/93a6a17cdd81-Userguide-FPT-API-Management-11-1024x538-184930a4a356556020d72ac42cba0bdc.png");

/***/ },

/***/ 805393
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a464f0e44116-Userguide-FPT-API-Management-9-1024x538-ee518628e0d05d0285b3c31d567f0f2b.png");

/***/ },

/***/ 244247
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6a0d5d95805-Userguide-FPT-API-Management-12-1024x538-0db8c69dbd589515ad504af93ade6b46.png");

/***/ },

/***/ 656748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ce6ff2825944-Userguide-FPT-API-Management-44-1024x538-c855aeab77708dc1fc4acbb743877288.png");

/***/ },

/***/ 105743
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/da46540b372a-Userguide-FPT-API-Management-46-1024x538-7c2176071df7d285f7b466d40ccaef73.png");

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