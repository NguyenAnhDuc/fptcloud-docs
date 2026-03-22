"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[12615],{

/***/ 287783
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_danh_tag_cho_vm_md_725_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-danh-tag-cho-vm-md-725.json
const site_docs_managed_fpt_kubernetes_engine_danh_tag_cho_vm_md_725_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/danh-tag-cho-vm","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng đánh Tag cho Virtual Machine","source":"@site/docs/managed-fpt-kubernetes-engine/danh-tag-cho-vm.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/danh-tag-cho-vm","permalink":"/managed-fpt-kubernetes-engine/danh-tag-cho-vm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Danh tag cho vm","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=danh-tag-cho-vm","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Bật tính năng Cluster Autoscale","permalink":"/managed-fpt-kubernetes-engine/cluster-autoscale"},"next":{"title":"Dich vu gpu tren k8s","permalink":"/managed-fpt-kubernetes-engine/dich-vu-gpu-tren-k8s"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/danh-tag-cho-vm.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Danh tag cho vm',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=danh-tag-cho-vm',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng đánh Tag cho Virtual Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tagging"
      }), " cho phép người dùng gắn nhãn các máy ảo bằng những thẻ tùy chỉnh (tags) nhằm mục đích ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "phân loại, tìm kiếm và quản lý tài nguyên hiệu quả hơn"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✓ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phân loại thông minh"
      }), " : Dễ dàng tổ chức các máy ảo theo môi trường (Production, Staging, Development), dự án, phòng ban hoặc bất kỳ tiêu chí nào phù hợp với quy trình quản lý."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✓ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tìm kiếm nhanh chóng"
      }), " : Dựa trên các thẻ được gắn, người dùng có thể lọc và tìm kiếm VM một cách dễ dàng mà không cần ghi nhớ tên phức tạp."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✓ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý hiệu quả"
      }), " : Hỗ trợ theo dõi chi phí, sử dụng tài nguyên và thực hiện báo cáo dựa trên từng nhóm VM đã được đánh tag."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✓ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tùy chỉnh linh hoạt"
      }), " : Thẻ (tags) có thể được tùy chỉnh và áp dụng cho nhiều mục đích khác nhau, phù hợp với nhu cầu cụ thể của doanh nghiệp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với tính năng Tagging, việc quản lý hạ tầng ảo hóa trở nên khoa học hơn, tiết kiệm thời gian và nâng cao hiệu suất vận hành hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể thao tác các tính năng Tagging trên Portal như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo Tagging"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể đánh tag cho VM nằm trong worker group MFKE, người dùng cần phải tạo trước tag theo đúng mục đích sử dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unify Portal"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tagging"
      }), " → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create tag"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805067)/* ["default"] */ .A) + "",
        width: "705",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin của tag và nhấn button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395764)/* ["default"] */ .A) + "",
        width: "698",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Key (required): Nhập key để xác định cho tag"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Value (required): Nhập giá trị cho tag tương ứng với key đã đặt"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Color: Cho phép người dùng chọn màu sắc để hiển thị tag"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Resource scope: Chọn VPC hiển thị tag"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(842035)/* ["default"] */ .A) + "",
        width: "700",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gắn Tag để sử dụng worker group thuộc MFKE"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với tạo cụm cluster mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unify Portal"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " → Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed"
      }), " → Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes Engine"
      }), " để tạo cluster mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(114239)/* ["default"] */ .A) + "",
        width: "702",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodes Pool"
      }), " , chọn Tag muốn sử dụng cho worker group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686937)/* ["default"] */ .A) + "",
        width: "702",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập đầy đủ các thông tin cần thiết cho cụm cluster và nhấn button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830571)/* ["default"] */ .A) + "",
        width: "704",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉnh sửa Tag cho worker group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), ". Chọn Cluster muốn chỉnh sửa Tag."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(598064)/* ["default"] */ .A) + "",
        width: "703",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Workers"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457091)/* ["default"] */ .A) + "",
        width: "702",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Add thêm Tag vào worker group và click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624950)/* ["default"] */ .A) + "",
        width: "703",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258989)/* ["default"] */ .A) + "",
        width: "700",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974146)/* ["default"] */ .A) + "",
        width: "701",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình chỉnh sửa Tag sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), " , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xóa Tag ra khỏi worker group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Workers"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(22749)/* ["default"] */ .A) + "",
        width: "706",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Click dấu để xóa tag khỏi worker group, sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862140)/* ["default"] */ .A) + "",
        width: "706",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(72187)/* ["default"] */ .A) + "",
        width: "706",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61755)/* ["default"] */ .A) + "",
        width: "707",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình xóa Tag sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), " , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./audit-log-vn",
        children: " Previous Audit Logs - Managed Kubernetes Cluster  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-restore-vn",
        children: " Next Tính năng Backup & Restore "
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

/***/ 624950
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/041f86ef59bc-Picture9-5-6e3d4898d855bbe02176370af23de8f9.png");

/***/ },

/***/ 457091
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/119a53dbcf2c-Picture8-6-61ec9b223f9820813bf473c681d7d553.png");

/***/ },

/***/ 830571
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1907fecc11cb-Picture6-7-0616098034b8713774f956bd354c10ba.png");

/***/ },

/***/ 974146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1f1f1d05ae2a-Picture11-4-9627adcc78f45658f7ccbce24abc62e2.png");

/***/ },

/***/ 686937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/393f40abaded-Picture5-7-071e21a95baf5b600d790db929b7b8ef.png");

/***/ },

/***/ 395764
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/51004a9ecff5-Picture2-8-55878f49d4e20003bba6e516328eae7a.png");

/***/ },

/***/ 114239
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/53217cf7f489-Picture4-7-f216a2d4e23a095fac7b0ec31f691214.png");

/***/ },

/***/ 22749
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5468c29c2d61-Picture12-4-9c12d4c68b12939208e5f209b30814d8.png");

/***/ },

/***/ 258989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a318c11e2aea-Picture10-5-cdd41572678832eaef3b8b67de0523fb.png");

/***/ },

/***/ 842035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ae6842beb08d-Picture3-8-d2b77882cf5fdc61d0cd96e93e9c4588.png");

/***/ },

/***/ 61755
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b7cb4e296f81-Picture15-3-dd309df7c71453338b042963b543a518.png");

/***/ },

/***/ 805067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bf6844ca69fe-Picture1-10-f5edb109a7925d386d3b4e8869b69a76.png");

/***/ },

/***/ 72187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ca5786f046b0-Picture14-3-0eb78a1ce0bfec7dda9c91e6f8484fb9.png");

/***/ },

/***/ 598064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fd7c4aed16dd-Picture7-7-65e8330f56116395eee1eb33e7ad13db.png");

/***/ },

/***/ 862140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fe7a1c46667d-Picture13-3-947d6455c9a56af7e3fbf7281888a3d2.png");

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