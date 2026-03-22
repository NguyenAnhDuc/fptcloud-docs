"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74490],{

/***/ 995569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_huong_dan_chi_tiet_su_dung_auto_upgrade_md_377_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-huong-dan-chi-tiet-su-dung-auto-upgrade-md-377.json
const site_docs_managed_fpt_kubernetes_engine_huong_dan_chi_tiet_su_dung_auto_upgrade_md_377_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade","title":"2. Managed – FPT Kubernetes Engine","description":"Hướng dẫn chi tiết sử dụng tính năng auto upgrade version","source":"@site/docs/managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade","permalink":"/managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan chi tiet su dung auto upgrade","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=huong-dan-chi-tiet-su-dung-auto-upgrade","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Gpu sharing","permalink":"/managed-fpt-kubernetes-engine/gpu-sharing"},"next":{"title":"Managed – FPT Kubernetes Engine","permalink":"/managed-fpt-kubernetes-engine/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/huong-dan-chi-tiet-su-dung-auto-upgrade.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan chi tiet su dung auto upgrade',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=huong-dan-chi-tiet-su-dung-auto-upgrade',
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
    em: "em",
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
      children: "Hướng dẫn chi tiết sử dụng tính năng auto upgrade version"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với các Managed Kubernetes Cluster đang sử dụng version đã end of standard support quá một minor version so với version cũ nhất được support bởi FPT Cloud sẽ không thể sử dụng tính năng auto upgrade version, người dùng cần tự chủ động upgrade version cho các cluster này."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ví dụ cluster đang sử dụng version 1.24.14 mà FPT Cloud đang support version kubernetes từ 1.26 đến 1.29, cluster này sẽ không thể sử dụng tính năng này, nếu muốn sử dụng tính năng này cần tự chủ động upgrade cluster lên version 1.25."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cơ chế upgrade version được tuân thủ theo cơ chế Rolling Update. Các worker chạy minor version mới hơn sẽ đồng thời được tạo ra ở tất cả các worker group, sau khi các worker này ở trạng thái Ready và sẵn sàng để chạy workload, kubernetes drain các worker chạy minor version cũ. Cuối cùng sau khi drain hoàn tất, các worker cũ sẽ bị xóa đi, quá trình này lặp lại lần lượt đến khi tất cả các worker trong group được thay thế."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Khởi tạo Managed Kubernetes Cluster:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi khởi tạo một Managed Kubernetes Cluster tính năng Auto Upgrade Version sẽ mặc định bị disable như hình bên dưới:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545218)/* ["default"] */ .A) + "",
        width: "662",
        height: "375"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để xem thông tin chi tiết về các mốc thời gian quan trọng của một Kubernetes version được hỗ trợ bởi FPT cloud, click vào biểu tượng “?”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158395)/* ["default"] */ .A) + "",
        width: "652",
        height: "163"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu enable tính năng Auto Upgrade Version mà không cấu hình thời gian upgrade, mặc định thời điểm upgrade sẽ là 07:00 GMT+7 vào ngày đầu tiên khi version đó end of standard support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(850213)/* ["default"] */ .A) + "",
        width: "648",
        height: "186"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi cấu hình thời gian sẽ thực hiện auto upgrade, có thể xem thời điểm version hiện tại sẽ end of support, thời điểm gần nhất sẽ thực hiện auto upgrade và tổng hợp về lập lịch auto upgrade."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469217)/* ["default"] */ .A) + "",
        width: "593",
        height: "164"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hoàn tất việc cấu hình lập lịch auto upgrade version trong quá trình khởi tạo cluster, click “Next” để tiếp tục sang bước cấu hình “Nodes Pool”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Thay đổi cấu hình Auto Upgrade Version với các cluster đã tồn tại"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "- Với các Managed Kubernetes Cluster đã tồn tại và được cấu hình auto upgrade version, người dùng vẫn có thể upgrade version chủ động theo cách bình thường như đối với các cluster không enable tính năng này."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "- Để hủy lịch auto upgrade version cho một Managed Kubernetes Cluster được cấu hình thời gian auto upgrade, user cần phải disable tính năng auto upgrade hoặc thay đổi lịch auto upgrade trước 01:00 GMT+7 của ngày mà FPT Cloud tự động upgrade version. Ví dụ: cluster A được enable tính năng auto upgrade version và cấu hình thời điểm tự động upgrade vào 04:00 GMT+7 ngày 25/6/2024, để hủy bỏ lịch tự động upgrade cần phải disable tính năng auto upgrade hoặc thay đổi lịch auto upgrade trước 01:00 GMT+7 ngày 25/6/2024, bất cứ thay đổi nào sau thời điểm này đều sẽ không có hiệu lực và việc tự động upgrade version vẫn sẽ được thực hiện vào 04:00 GMT+7 ngày 25/6/2024."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable tính năng auto upgrade:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797181)/* ["default"] */ .A) + "",
        width: "648",
        height: "355"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78208)/* ["default"] */ .A) + "",
        width: "657",
        height: "162"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233169)/* ["default"] */ .A) + "",
        width: "646",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./gioi-thieu-chung-ve-quy-trinh-quan-ly-version",
        children: " Previous Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./fpt-cloud-managed-kubernetes-release-calendar",
        children: " Next FPT cloud managed kubernetes release calendar "
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

/***/ 233169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0307b0ad119a-Picture7-4-f22a51fe7771753259d39000d5d8af95.png");

/***/ },

/***/ 545218
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/341fc3c78702-Picture1-5-93f8add4fa8163041ef09f0b3fb47f1c.png");

/***/ },

/***/ 850213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/648a0a238828-Picture3-4-43be1a9c69c7101dae51b6b3bd48edc4.png");

/***/ },

/***/ 78208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8611699f85b4-Picture6-4-406e71dd0e0b5a1acfe83821ea683918.png");

/***/ },

/***/ 469217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a5f4e49f2c69-Picture4-4-a810fda936615b99c9e1f14a7e586d05.png");

/***/ },

/***/ 158395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cf1843f2a808-Picture2-4-75c2aa7e40c0620dad5f7d0a9f74b47c.png");

/***/ },

/***/ 797181
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f125a3914027-Picture5-4-19585d803e0b2614a868683faec478be.png");

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