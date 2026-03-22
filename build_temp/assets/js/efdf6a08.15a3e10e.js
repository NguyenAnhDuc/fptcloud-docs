"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[22967],{

/***/ 839963
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_argocd_3_huong_dan_tich_hop_argocd_images_updater_md_efd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-argocd-3-huong-dan-tich-hop-argocd-images-updater-md-efd.json
const site_docs_fpt_argocd_3_huong_dan_tich_hop_argocd_images_updater_md_efd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-argocd-3/huong-dan-tich-hop-argocd-images-updater","title":"2. FPT ArgoCD","description":"Hướng dẫn tích hợp Argo CD Images Updater","source":"@site/docs/fpt-argocd-3/huong-dan-tich-hop-argocd-images-updater.md","sourceDirName":"fpt-argocd-3","slug":"/fpt-argocd-3/huong-dan-tich-hop-argocd-images-updater","permalink":"/fpt-argocd-3/huong-dan-tich-hop-argocd-images-updater","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan tich hop argocd images updater","title":"2. FPT ArgoCD","source":"https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-tich-hop-argocd-images-updater","parent":"https://fptcloud.com/documents/fpt-argocd-3","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan su dung applicationset de deploy","permalink":"/fpt-argocd-3/huong-dan-su-dung-applicationset-de-deploy"},"next":{"title":"Huong dan tich hop oidc de quan ly account","permalink":"/fpt-argocd-3/huong-dan-tich-hop-oidc-de-quan-ly-account"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-argocd-3/huong-dan-tich-hop-argocd-images-updater.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan tich hop argocd images updater',
	title: '2. FPT ArgoCD',
	source: 'https://fptcloud.com/documents/fpt-argocd-3/?doc=huong-dan-tich-hop-argocd-images-updater',
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
    br: "br",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
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
      children: "Hướng dẫn tích hợp Argo CD Images Updater"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong phần này sẽ hướng dẫn người dùng deploy ứng dụng trên ArgoCD sử dụng Images Updater. Để sử dụng tính năng Argo CD Images updater, người dùng thực hiện enable service thông qua portal, thực hiện cấu hình các thông tin để xác thực cần dùng như secret/secret registry/Container registry theo hướng dẫn tại mục 5.5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chuẩn bị:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "a. Bước 1: Chuẩn bị source deployment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source deployment là helm chart"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ví dụ người dùng muốn deploy service nginx với helm chart tới argocd. Chuẩn bị chart để deploy: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667067)/* ["default"] */ .A) + "",
        width: "627",
        height: "428"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Images deploy được quản lý trên container registry. Trong phần demo này sẽ sử dụng container registry của FPT Cloud."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Argo CD images updater hỗ trợ phương thức Git write-back để lưu trữ các tham số deploy ứng dụng. Mặc định Argo CD images updater sẽ lưu các tham số trong file name .argocd-source-.yaml trong đường dẫn được sử dụng với Applications cấu hình trong đường dẫn manifest trên ArgoCD. Điều này cho phép ArgoCD triển khai ứng dụng theo tham số đã được lưu trữ trên Git."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VD: Tạo file ", (0,jsx_runtime.jsx)(_components.strong, {
        children: ".argocd-source-demo-images-updater.yaml"
      }), " với các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "helm:\n  parameters:\n  - name: image.name\n    value: registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx\n    forcestring: true\n  - name: image.tag\n    value: dev-742b0343\n    forcestring: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "b. Bước 2: Cấu hình images pullSecret trên Portal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ví dụ: Người dùng sử dụng Secret Registry để kiểm tra thay đổi trên Container Registry. pullSecret được đặt tên: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "habor-secret"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752540)/* ["default"] */ .A) + "",
        width: "627",
        height: "293"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(857968)/* ["default"] */ .A) + "",
        width: "627",
        height: "245"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Secret Registry sẽ được sử dụng trong annotations của applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "c. Bước 3: Tạo applications trên ArgoCD"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(904770)/* ["default"] */ .A) + "",
        width: "627",
        height: "343"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827304)/* ["default"] */ .A) + "",
        width: "627",
        height: "310"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(219477)/* ["default"] */ .A) + "",
        width: "627",
        height: "317"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau đó sử dụng chức năng Edit as yaml để cấu hình annotations: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862599)/* ["default"] */ .A) + "",
        width: "627",
        height: "191"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(834941)/* ["default"] */ .A) + "",
        width: "627",
        height: "287"
      }), " Bổ sung annotations để sử dụng images updater:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\nargocd-image-updater.argoproj.io/demo-images-updater.allow-tags: regexp:^dev-[0-9a-f]{8}$  | Chỉ định những tag name được cho phép để update tới repository.", (0,jsx_runtime.jsx)(_components.br, {}), "\nVD ở đây chỉ cho phép cập nhật với các tag với biểu thức chính quy khớp với “dev-“ và chuỗi thập lục phân có 8 chữ số.", (0,jsx_runtime.jsx)(_components.br, {}), "\nVD: dev- a5fb3d31", (0,jsx_runtime.jsx)(_components.br, {}), "\nargocd-image-updater.argoproj.io/", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: [".pull-secret: pullsecret:argocd-ebwa49tw/habor-secret | pullSecret để argocd images updater kiểm tra các tag images trên registry. Được cấu hình theo mẫu:", (0,jsx_runtime.jsx)(_components.br, {}), "\nVí dụ: : demo-images-updater", (0,jsx_runtime.jsx)(_components.br, {}), "\npullsecret:argocd-[argocd-id]/[Secret-registry-name]", (0,jsx_runtime.jsx)(_components.br, {}), "\nargocd-image-updater.argoproj.io/"]
        })
      }), ".update-strategy: latest | Xác định cách Argo CD images updater tìm phiên bản mới của images được cập nhật trên registry. Có một số stragy:", (0,jsx_runtime.jsx)(_components.br, {}), "\n- ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semver"
      }), ": Cập nhật lên phiên bản mới nhất của images khi xem xét các ràng buộc về phiên bản ngữ nghĩa", (0,jsx_runtime.jsx)(_components.br, {}), "\n- ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Latest"
      }), ": Cập nhật lên tag được đẩy lên gần đây nhất được tìm thấy trong container registry", (0,jsx_runtime.jsx)(_components.br, {}), "\n- ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Digest"
      }), ": Cập nhật lên phiên bản mới nhất của tag sử dụng SHA digest của tag images", (0,jsx_runtime.jsx)(_components.br, {}), "\n- ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), ": sắp xếp tag theo thứ tự bảng chữ cái để tìm ra tag được phép cập nhật", (0,jsx_runtime.jsx)(_components.br, {}), "\nargocd-image-updater.argoproj.io/git-branch: master | Nhánh để cập nhật thay đổi trong manifest", (0,jsx_runtime.jsx)(_components.br, {}), "\nargocd-image-updater.argoproj.io/write-back-method: git  | Phương thức để cập nhật thay đổi của images.", (0,jsx_runtime.jsx)(_components.br, {}), "\nargocd-image-updater.argoproj.io/image-list: =registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx  | Phương thức để cập nhật thay đổi của images."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4: Cấu hình webhook tới git để kiểm tra thay đổi khi update tag images trên Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tạo webhook gitlab trên portal: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(970552)/* ["default"] */ .A) + "",
          width: "627",
          height: "294"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cấu hình webhook trong gitlab: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(815035)/* ["default"] */ .A) + "",
          width: "627",
          height: "401"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test push event: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(529117)/* ["default"] */ .A) + "",
        width: "627",
        height: "156"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5: Kiểm tra ứng dụng"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kiểm tra images đang chạy ứng dụng trước khi push một images mới: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41074)/* ["default"] */ .A) + "",
        width: "627",
        height: "201"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push images mới tới registry: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(534172)/* ["default"] */ .A) + "",
        width: "627",
        height: "100"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Argo CD images updater sẽ cập nhật images mới tới git: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479991)/* ["default"] */ .A) + "",
        width: "627",
        height: "205"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Webhook gitlab sẽ phát hiện thay đổi và thực hiện deploy images mới: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(137315)/* ["default"] */ .A) + "",
        width: "627",
        height: "284"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394301)/* ["default"] */ .A) + "",
        width: "627",
        height: "273"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kiểm tra push images không đúng định dạng được cho phép tới registry: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(629531)/* ["default"] */ .A) + "",
        width: "627",
        height: "137"
      }), " Kiểm tra không có sự thay đổi tới ứng dụng: ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461040)/* ["default"] */ .A) + "",
        width: "627",
        height: "210"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189571)/* ["default"] */ .A) + "",
        width: "627",
        height: "313"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./demo",
        children: " Previous Demo "
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

/***/ 857968
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03b9e902b1d3-Picture102-2-e7107c61d3d39aa5a88cb1eae96e9871.png");

/***/ },

/***/ 815035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08f7eb65122d-Picture109-2-ffb10efd36891610ace7eef7b75b6106.png");

/***/ },

/***/ 534172
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1564bd2500d4-Picture112-2-56bd4b9af8f6554f248cef1d3cf3f3d5.png");

/***/ },

/***/ 394301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3de5e72c4342-Picture115-2-bb7c8d9b3d67e7e312022d873b4ea0ba.png");

/***/ },

/***/ 479991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40533aa3e6f0-Picture113-2-f672ca831fa5ad0c7ff2941d04f3ce25.png");

/***/ },

/***/ 629531
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41d45fd3d003-Picture116-2-3ed4ec55e93fa10c8eca7df265cc874f.png");

/***/ },

/***/ 529117
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/549132191bbc-Picture110-2-35135dbaa7c8f77615aa39b15bce2cfd.png");

/***/ },

/***/ 219477
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6eac2ef3f5fb-Picture105-2-d864d5cbf7088c8c4cbb8990dbe754ca.png");

/***/ },

/***/ 834941
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/79a37b709320-Picture107-2-15df1e718ffbc901cdcbcff7676a3742.png");

/***/ },

/***/ 827304
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/805da965efd1-Picture104-2-e6ead8fa2e1827fec696ab49d6915ad9.png");

/***/ },

/***/ 189571
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9804afe29222-Picture118-2-0c4f5aad96582164cf13947c0fc75d30.png");

/***/ },

/***/ 970552
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a587e8564cd2-Picture108-2-15aab99a2283528b82fda5787469c576.png");

/***/ },

/***/ 461040
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ace9c50e27bf-Picture117-2-4be5426e5b26f3a7a0103e8e806cbc9f.png");

/***/ },

/***/ 41074
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cd39a52c3f2e-Picture111-2-e31eacb9b58eee458988399a1440ccb6.png");

/***/ },

/***/ 862599
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d13a50e525f8-Picture106-2-94a73104f2c81a83548d1aa785e5246b.png");

/***/ },

/***/ 904770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db71904f2f59-Picture103-2-283ed9e34ef6737eb348599c217c68e0.png");

/***/ },

/***/ 667067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e854d3aa6cf5-Picture100-2-5b83986404d4de5749fa81cb88a437bd.png");

/***/ },

/***/ 137315
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e9f6c6655dc6-Picture114-2-2aa2af31c069e086f133cd478d2de2e3.png");

/***/ },

/***/ 752540
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f17431708e58-Picture101-2-d6fc0c8477326e827d40dec6e397238e.png");

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