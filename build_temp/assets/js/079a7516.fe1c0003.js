"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[28903],{

/***/ 646346
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_notifications_huong_dan_cau_hinh_notifications_de_nhan_thong_bao_md_079_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-notifications-huong-dan-cau-hinh-notifications-de-nhan-thong-bao-md-079.json
const site_docs_fpt_argocd_3_notifications_huong_dan_cau_hinh_notifications_de_nhan_thong_bao_md_079_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/notifications/huong-dan-cau-hinh-notifications-de-nhan-thong-bao","title":"2. FPT ArgoCD","description":"Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi","source":"@site/docs/fpt-argocd-3/notifications/huong-dan-cau-hinh-notifications-de-nhan-thong-bao.md","sourceDirName":"fpt-argocd-3/notifications","slug":"/fpt-argocd-3/notifications/huong-dan-cau-hinh-notifications-de-nhan-thong-bao","permalink":"/fpt-argocd-3/notifications/huong-dan-cau-hinh-notifications-de-nhan-thong-bao","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Huong dan cau hinh notifications de nhan thong bao","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-cau-hinh-notifications-de-nhan-thong-bao","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Enable disable notificaions","permalink":"/fpt-argocd-3/notifications/enable-disable-notificaions"},"next":{"title":"Huong dan tich hop argocd images updater","permalink":"/fpt-argocd-3/notifications/huong-dan-tich-hop-argocd-images-updater"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/notifications/huong-dan-cau-hinh-notifications-de-nhan-thong-bao.md


const frontMatter = {
	sidebar_label: 'Huong dan cau hinh notifications de nhan thong bao',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-cau-hinh-notifications-de-nhan-thong-bao',
	parent: 'https://fptcloud.com/documents/fpt-argocd-3',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT ArgoCD';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
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
        id: "2-fpt-argocd",
        children: "2. FPT ArgoCD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "1. Telegram"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện cấu hình thông báo tới telegram thực hiện các bước sau: Bước 1: Lấy API token sử dụng @Botfather. Sử dụng ứng dụng Telegram, tìm kiếm @BotFather"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600160)/* ["default"] */ .A) + "",
        width: "556",
        height: "738"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gõ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "/help"
      }), " để xem các options được sử dụng"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(178663)/* ["default"] */ .A) + "",
        width: "627",
        height: "726"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gõ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "/newbot"
      }), " để tạo bot mới:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558235)/* ["default"] */ .A) + "",
        width: "626",
        height: "127"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập tên bot ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý tên bot phải kết thúc bằng “bot”"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471583)/* ["default"] */ .A) + "",
        width: "633",
        height: "392"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Token access được sử dụng để cấu hình token Telegram trên Portal. Tương tự mục 5.12.2 (mục a)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Cấu hình Token trên FPT Cloud để gửi thông báo tới telegram theo mục 5.12.2.1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tạo một channel để nhận thông báo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638244)/* ["default"] */ .A) + "",
        width: "636",
        height: "344"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn private channel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28368)/* ["default"] */ .A) + "",
        width: "629",
        height: "468"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Thêm account bot vừa tạo tới channel"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155958)/* ["default"] */ .A) + "",
        width: "627",
        height: "570"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ChatID"
      }), " trong subscription để tích hợp telegram:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(738790)/* ["default"] */ .A) + "",
        width: "627",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Cấu hình Notifications telegram trong applications:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545601)/* ["default"] */ .A) + "",
        width: "788",
        height: "290"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Thực hiện Sync Applications và xem message gửi tới telegram:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530347)/* ["default"] */ .A) + "",
        width: "789",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "2. Slack"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tạo workspace slack:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310175)/* ["default"] */ .A) + "",
        width: "701",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tạo channel:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(360817)/* ["default"] */ .A) + "",
        width: "756",
        height: "364"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tạo mới app trong slack để sử dụng theo ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://api.slack.com/apps",
        children: "link"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(110026)/* ["default"] */ .A) + "",
        width: "919",
        height: "136"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tạo App ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "From scratch"
      }), "(click)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139295)/* ["default"] */ .A) + "",
        width: "723",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Thực hiện cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OAuth & Permissions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(719681)/* ["default"] */ .A) + "",
        width: "677",
        height: "589"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện cấu hình OAuth Scope để cho phép ArgoCD Notifictions gửi thông báo tới Channel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469215)/* ["default"] */ .A) + "",
        width: "722",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Thực hiện cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OAuth Tokens for Your Workspace"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469285)/* ["default"] */ .A) + "",
        width: "730",
        height: "596"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(267186)/* ["default"] */ .A) + "",
        width: "704",
        height: "513"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Slack sẽ tạo một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bot User OAuth Token"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(514718)/* ["default"] */ .A) + "",
        width: "751",
        height: "393"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Cấu hình Slack token trên Portal FPT Cloud để gửi thông báo từ ArgoCD Notifications tới Slack sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bot User OAuth Token"
      }), ". Thực hiện tương tự mục 5.12.2.2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Thêm Apps tới channel:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375144)/* ["default"] */ .A) + "",
        width: "776",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8"
      }), " : Thực hiện cấu hình ArgoCD Applications để gửi thông báo tới slack:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi applications được tạo, thực hiện Edit app thêm annotations, thông báo sẽ được gửi tới channel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(984084)/* ["default"] */ .A) + "",
        width: "743",
        height: "209"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824627)/* ["default"] */ .A) + "",
        width: "778",
        height: "338"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện Sync Applications để test notifiations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(936622)/* ["default"] */ .A) + "",
        width: "759",
        height: "297"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Channel của slack sẽ nhận được thông báo lên quan đến trạng thái của Applications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(659532)/* ["default"] */ .A) + "",
        width: "826",
        height: "187"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "3. Email"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Thực hiện cấu hình thông tin email tương tự mục 5.12.2.3 trên Portal"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Thực hiện cấu hình ArgoCD Applications để gửi thông báo đến mail bằng cách thêm annotations như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775652)/* ["default"] */ .A) + "",
        width: "963",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Thực hiện sync ứng dụng thông báo sẽ được gửi đến email của người nhận đã được config:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(680870)/* ["default"] */ .A) + "",
        width: "748",
        height: "153"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-su-dung-applicationset-de-deploy",
        children: " Previous Hướng dẫn sử dụng applicationset để deploy "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-tich-hop-oidc-de-quan-ly-account",
        children: " Next Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD "
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

/***/ 375144
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15069836c3cc-Picture112-1-65d5646c0bc5f4df4ed93314eb8d4bb9.png");

/***/ },

/***/ 824627
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a2667772862-Picture114-1-a928838766655ab2c2ced731c2739ddb.png");

/***/ },

/***/ 545601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d6a048a3ad2-Picture101-1-234208e21d19d56badf14c42c6340f67.png");

/***/ },

/***/ 178663
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1e58a9d99814-Picture94-1-8373f8ef7633ec7e398ceeb19754ba45.png");

/***/ },

/***/ 638244
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2ce6eac44eb2-Picture97-1-fbc64444c2fb7b85240d27f574f57e8a.png");

/***/ },

/***/ 514718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32b4632654ff-Picture111-1-e8da1400d0ebbe2d424879acea1d4cbf.png");

/***/ },

/***/ 28368
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/38531c73f897-Picture98-1-8327b2e815088e9ce67d91508b05d356.png");

/***/ },

/***/ 267186
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3d87cff7429a-Picture110-1-ad738150a1a433641337106566aa7294.png");

/***/ },

/***/ 310175
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5d03b1369a89-Picture103-1-a60094ed6b1de1eb8484389130206bbd.png");

/***/ },

/***/ 469215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ea1dd4e5879-Picture108-1-4e243a80637cde0fd6edcc7ca86d6780.png");

/***/ },

/***/ 936622
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6b2804beb21e-Picture115-1-dcba0710cf34b39a7f3f892954d9ac59.png");

/***/ },

/***/ 360817
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6d217f241aaa-Picture104-1-953a52c691942c6e65c555098e329a96.png");

/***/ },

/***/ 155958
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7d3819fc4d09-Picture99-1-95b988c9122c7774ae11ffed8d67a49a.png");

/***/ },

/***/ 984084
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8b39278ccae0-Picture113-1-65eb421d0042d4cf3f3e590c69692b21.png");

/***/ },

/***/ 719681
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/92d32a17cc11-Picture107-1-a00314f2efc2539a2e92811f8d18df1f.png");

/***/ },

/***/ 775652
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a00e335a160d-Picture117-1-a26def163312190e097aa88fa964db2d.png");

/***/ },

/***/ 738790
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bcafb00aff42-Picture100-1-cb3a44132cc0c77e905fcfb7a7180c97.png");

/***/ },

/***/ 471583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bd26e3a24af8-Picture96-1-7265238acc2540e6e52af4501792d0db.png");

/***/ },

/***/ 110026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c0c068441393-Picture105-1-cbdcad316d2dac2b4df43395be644bb0.png");

/***/ },

/***/ 558235
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ca767ba662b0-Picture95-1-6baa510c228f5ff1d5d604576f610a7a.png");

/***/ },

/***/ 530347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cb19eee7feb2-Picture102-1-ae4540d719556fd48f5cf18da75ca3a5.png");

/***/ },

/***/ 600160
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ce5f72d1edbd-Picture93-1-4838514c5c63da4ae626403ac242016e.png");

/***/ },

/***/ 469285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d8859cb002ea-Picture109-1-807130ba304353e2463f152f12eaea6e.png");

/***/ },

/***/ 680870
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/deb1583a4cc7-Picture118-1-6f02c2b5686737f2412d0131401ffa6b.png");

/***/ },

/***/ 659532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e420e94818dd-Picture116-1-0518cf4d1f374fd5af114fcf2b74204e.png");

/***/ },

/***/ 139295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fa3dbfc28ec5-Picture106-1-546375b610e8c02993bd3b03dd44d46f.png");

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