"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[28502],{

/***/ 327560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_dfke_advanced_firewall_md_fb1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-dfke-advanced-firewall-md-fb1.json
const site_docs_dedicated_fpt_kubernetes_engine_dfke_advanced_firewall_md_fb1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/dfke-advanced-firewall","title":"2. Dedicated – FPT Kubernetes Engine","description":"Advanced Firewall","source":"@site/docs/dedicated-fpt-kubernetes-engine/dfke-advanced-firewall.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/dfke-advanced-firewall","permalink":"/dedicated-fpt-kubernetes-engine/dfke-advanced-firewall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Dfke advanced firewall","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-advanced-firewall","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cac luu y khi su dung fke","permalink":"/dedicated-fpt-kubernetes-engine/cac-luu-y-khi-su-dung-fke"},"next":{"title":"Dfke faqs","permalink":"/dedicated-fpt-kubernetes-engine/dfke-faqs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/dfke-advanced-firewall.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Dfke advanced firewall',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=dfke-advanced-firewall',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tổng quan sản phẩm Kubenetes tích hợp Firewall</strong>",
  "id": "1-tổng-quan-sản-phẩm-kubenetes-tích-hợp-firewall",
  "level": 2
}, {
  "value": "2. Các requirement rules cho cụm Kubenetes trên Advanced Firewall",
  "id": "2-các-requirement-rules-cho-cụm-kubenetes-trên-advanced-firewall",
  "level": 2
}, {
  "value": "3. Khởi tạo cụm Kubenetes tích hợp Firewall",
  "id": "3-khởi-tạo-cụm-kubenetes-tích-hợp-firewall",
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
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced Firewall"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tổng-quan-sản-phẩm-kubenetes-tích-hợp-firewall",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tổng quan sản phẩm Kubenetes tích hợp Firewall"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sản phẩm Kubenetes tích hợp Firewall khác so với sản phẩm Kubenetes cơ bản của FPT Cloud là sử dụng 01 Advanced Firewall nằm phía trước Gateway của Tenant. Advanced Firewall có nhiệm vụ bảo vệ và cấu hình các rule bảo mật (Allow, Drop) rule nat (DNAT, SNAT) cho cụm Kubenetes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thành phần chính bao gồm:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Advanced Firewall (vd: Checkpoint)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Gateway (Internet Gateway, Firewall L4)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Load balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Cụm Kubenetes: Master node (API, ETCD), Worker node (App and Service)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(601766)/* ["default"] */ .A) + "",
        width: "673",
        height: "463"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-các-requirement-rules-cho-cụm-kubenetes-trên-advanced-firewall",
      children: "2. Các requirement rules cho cụm Kubenetes trên Advanced Firewall"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Luồng traffic truy cập vào các node k8s như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(199316)/* ["default"] */ .A) + "",
        width: "534",
        height: "122"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tất cả các rule inbound và outbound cho cụm Kubenetes đều được cấu hình trên Advanced Firewall."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tất cả các rule NAT cho cụm Kubenetes đều được cấu hình trên Advanced Firewall."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IP Public được đặt trên Advanced Firewall."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bảng quy hoạch rule Firewall trên Advanced Firewall cho cụm Kubenetes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(349552)/* ["default"] */ .A) + "",
        width: "899",
        height: "315"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bảng quy hoạch rule NAT trên Advanced Firewall cho cụm Kubenetes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(395227)/* ["default"] */ .A) + "",
        width: "899",
        height: "422"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trên Gateway vẫn có rule Firewall và rule Nat ở để đảm bảo traffic kết nối từ Gateway đến Firewall, các rule mặc định này được tạo tự động, người dùng phải tạo rule cho ứng dụng (option) nếu cần."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-khởi-tạo-cụm-kubenetes-tích-hợp-firewall",
      children: "3. Khởi tạo cụm Kubenetes tích hợp Firewall"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Quota CPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình cluster Kubernetes mong muốn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool. Subnet này cần được quy hoạch và thiết kế chi tiết, để cấu hình route cho phép kết nối từ bên ngoài tới Firewall qua Gateway vào đến các Kubernetes Node."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Thông tin IP của Firewall: Cần thông tin 01 IP Public và 01 Private của Firewall."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "– Thông tin IP của Gateway: 01 IP private này được sử dụng để cấu hình route từ Firewall đến Gateway."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước khởi tạo như sau:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Từ FPT Cloud portal, chọn Kubernetes. Chọn tab “Dedicated”. Chọn Create. Nhập vào các thông tin mong muốn của cụm K8s."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Cấu hình Firewall, tick vào mục Enable Firewall."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(895616)/* ["default"] */ .A) + "",
        width: "968",
        height: "852"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Nhập vào Thông tin của Firewall, bao gồm: IP Gateway, IP Public và Private của Checkpoint."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 4: Ấn Create, kiểm tra lại các thông tin và ấn Agree để tiến hành khởi tạo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 5: Theo dõi trạng thái khởi tạo cụm K8s. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./service-type-load-balancer",
        children: " Previous Service Type Load-Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-and-restore-cluster",
        children: " Next Backup & Restore Cluster "
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

/***/ 601766
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05b04fb72555-image-1691469857854-6744de749a7dce141cf4bcc150a3f8ca.png");

/***/ },

/***/ 349552
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05f967452315-image-1691480281087-2fcd7af8f1076e887fbbc84a277f06a6.png");

/***/ },

/***/ 395227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7798d361a867-image-1691480310854-0d81e73f77e6cb557d04c88d9e9b5990.png");

/***/ },

/***/ 199316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7f2f9cabf572-image-1691469894054-4521b6c639dffb8b7ac2e6fb3d148637.png");

/***/ },

/***/ 895616
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e893b0907f22-image-1691469995783-1592955ee5af3425b0959a8b2e531d52.png");

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