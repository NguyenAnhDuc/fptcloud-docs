"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[48964],{

/***/ 933055
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engine_thao_tac_voi_db_proxy_md_0cd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engine-thao-tac-voi-db-proxy-md-0cd.json
const site_docs_managed_fpt_database_engine_thao_tac_voi_db_proxy_md_0cd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engine/thao-tac-voi-db-proxy","title":"2. Managed – FPT Database Engine","description":"Thao tác với DB Proxy","source":"@site/docs/managed-fpt-database-engine/thao-tac-voi-db-proxy.md","sourceDirName":"managed-fpt-database-engine","slug":"/managed-fpt-database-engine/thao-tac-voi-db-proxy","permalink":"/managed-fpt-database-engine/thao-tac-voi-db-proxy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Thao tac voi db proxy","title":"2. Managed – FPT Database Engine","source":"https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Thao-tac-voi-DB-Proxy","parent":"https://fptcloud.com/documents/managed-fpt-database-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Thao tac voi database engine","permalink":"/managed-fpt-database-engine/thao-tac-voi-database-engine"},"next":{"title":"Khởi tạo & Cấu hình ban đầu","permalink":"/fpt-data-platform/initial/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engine/thao-tac-voi-db-proxy.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Thao tac voi db proxy',
	title: '2. Managed – FPT Database Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Thao-tac-voi-DB-Proxy',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engine';

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
        id: "2-managed--fpt-database-engine",
        children: "2. Managed – FPT Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thao tác với DB Proxy"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Xem danh sách DB Proxy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Status = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), " : DB Proxy đã tạo thành công"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Status = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Processing"
        }), " : DB Proxy đang được tạo\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Có action: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Start/Stop/Restart/Resize/Delete/Detail"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Status = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Failed"
        }), " : DB Proxy bị tạo lỗi\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Có action: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete."
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(384348)/* ["default"] */ .A) + "",
        width: "1237",
        height: "585"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 1: Stop DB Proxy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DB Proxy phải ở trạng thái = Running."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn Actions ở DB Proxy cluster ID quý khách muốn stop"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stop"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507907)/* ["default"] */ .A) + "",
        width: "1240",
        height: "399"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stop Database Cluster ID"
      }), " , quý khách nhập lại Cluster ID để xác nhận lại, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stop."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(569136)/* ["default"] */ .A) + "",
        width: "563",
        height: "273"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy sẽ ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stopping"
        }), " và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(961842)/* ["default"] */ .A) + "",
        width: "1237",
        height: "325"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 2: Start DB Proxy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stopped"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại cột Action quý khách bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463182)/* ["default"] */ .A) + "",
        width: "1240",
        height: "394"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Database Cluster ID"
        }), " , quý khách nhập lại Cluster ID để xác nhận lại, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605099)/* ["default"] */ .A) + "",
        width: "563",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy sẽ ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Starting"
        }), " và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831074)/* ["default"] */ .A) + "",
        width: "1239",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 3: Restart DB Proxy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DB Proxy"
      }), " ở trạng thái Running."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Tại cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " quý khách bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restart"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(238548)/* ["default"] */ .A) + "",
        width: "1238",
        height: "399"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restart Database Cluster ID"
      }), " , quý khách nhập lại Cluster ID để xác nhận lại, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restart."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132596)/* ["default"] */ .A) + "",
        width: "579",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DB Proxy"
      }), " sẽ ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restarting"
      }), " và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462887)/* ["default"] */ .A) + "",
        width: "1238",
        height: "325"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 4: Resize DB Proxy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại cột Action quý khách bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(837429)/* ["default"] */ .A) + "",
        width: "1241",
        height: "397"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize DB Proxy"
        }), " , quý khách nhập thông tin vCPU và RAM, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize DB Proxy."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(873609)/* ["default"] */ .A) + "",
        width: "480",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy sẽ ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resizing"
        }), " và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(922301)/* ["default"] */ .A) + "",
        width: "1235",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 5: Delete DB Proxy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), " /", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stopped/Failed"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại cột Action quý khách bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188379)/* ["default"] */ .A) + "",
        width: "1239",
        height: "396"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete Database Cluster ID"
        }), " , quý khách nhập lại Cluster ID để xác nhận lại, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187150)/* ["default"] */ .A) + "",
        width: "572",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy sẽ ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deleting"
        }), " và không thể thao tác gì thêm cho tới khi hệ thống process xong"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39154)/* ["default"] */ .A) + "",
        width: "1236",
        height: "326"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 6: Detail DB Proxy"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DB Proxy ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại cột Action quý khách bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Detail"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912159)/* ["default"] */ .A) + "",
        width: "1237",
        height: "392"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DB Proxy Detail"
        }), " , quý khách nhập lại Cluster ID để xác nhận lại, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Close"
        }), " để tắt popup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(350754)/* ["default"] */ .A) + "",
        width: "960",
        height: "847"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-db-proxy",
        children: " Previous Khởi tạo DB Proxy "
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

/***/ 39154
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14ab9e834c47-DB_delete3-bf24177f73f9a22027b3a41e7b6b6c7a.png");

/***/ },

/***/ 831074
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a85e282ba6a-DB-Start3-c0c475cf0ac081be41bba242817dc4d5.png");

/***/ },

/***/ 922301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d61f76b209c-DB_resize3-09e2dfaf8649e12448fce5c86c0476a7.png");

/***/ },

/***/ 238548
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20aee5889393-DB_restart-dbd59a774dc085316328fd2d53d432a8.png");

/***/ },

/***/ 837429
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26443919d942-DB_resize1-e2a568c51ec5c2346c33c6b4a5399388.png");

/***/ },

/***/ 873609
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46fc1c9b5bc2-DB_resize2-113481ae3040a9cea21c52048da311c6.png");

/***/ },

/***/ 507907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5603f1dc67d6-DB-Stop1-a1097c1dd612bbd640ebfcd4c43b6222.png");

/***/ },

/***/ 569136
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5a8afe964c98-DB-Stop2-8730484d1972f25a70a633cd6b245b20.png");

/***/ },

/***/ 462887
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/76af49ff221d-DB_restart3-230bd6f1d2d6c49ca64ff99c09e409c7.png");

/***/ },

/***/ 188379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/79ffa16dadb7-DB_delete1-9ecc10be45abf28d2ef2b87fcee1b7a0.png");

/***/ },

/***/ 350754
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8b026bcec87b-DB_Detail2-21e29b829561942414076fa599db21ab.png");

/***/ },

/***/ 384348
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9688a7246d7c-DBThta-1-89a0d6f285056dc62affcf6850b42080.png");

/***/ },

/***/ 912159
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/98be4280d12a-DB_Detail1-010378df9599d778b071bc3d6f224027.png");

/***/ },

/***/ 463182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad5fc12ba4fa-DB-Start1-02b5fbe260874ed480d4eeb2842f0a4e.png");

/***/ },

/***/ 605099
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b12a86fab757-DB-Start2-cb9b37e5d158edfbeba52f42ea95195f.png");

/***/ },

/***/ 961842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b375b7c08b1d-DB-Stop3-7ca7275e31f0c4dc738d70a6fe5e7756.png");

/***/ },

/***/ 132596
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ca969ed60aa9-DB_restart2-d46a9ef997d48dd7cb394467c4f43c19.png");

/***/ },

/***/ 187150
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e50a6b16218e-DB_delete2-150fd48c3a8321a95dc9d2978fc7b88b.png");

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