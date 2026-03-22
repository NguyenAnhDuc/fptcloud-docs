"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[96897],{

/***/ 291343
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_relation_management_alert_md_802_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-relation-management-alert-md-802.json
const site_docs_relation_management_alert_md_802_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"relation-management/alert","title":"2. Relation management","description":"Alert","source":"@site/docs/relation-management/alert.md","sourceDirName":"relation-management","slug":"/relation-management/alert","permalink":"/relation-management/alert","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Alert","title":"2. Relation management","source":"https://fptcloud.com/documents/relation-management/?doc=alert","parent":"https://fptcloud.com/documents/relation-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xoa whitelisted ip","permalink":"/fpt-monitoring-ip-access-control/xoa-whitelisted-ip"},"next":{"title":"App relation management","permalink":"/relation-management/app-relation-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/relation-management/alert.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Alert',
	title: '2. Relation management',
	source: 'https://fptcloud.com/documents/relation-management/?doc=alert',
	parent: 'https://fptcloud.com/documents/relation-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Relation management';

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
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-relation-management",
        children: "2. Relation management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alert"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo alert, bạn thao tác theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Vào Home >> Alerting >> Alert rules >> Click New alert rule"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(549021)/* ["default"] */ .A) + "",
        width: "624",
        height: "186"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Người dùng config các thông tin alert"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ demo tạo alert khi node k8s trong tag FMON-DEMO not ready."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Đầu tiên, nhập tên alert vào mục 1. Enter alert rule name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(206778)/* ["default"] */ .A) + "",
        width: "479",
        height: "174"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Tiếp theo, config thông tin trong mục 2. Define query and alert condition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với ví dụ trên, nhập query để lấy ra danh sách các node ready (Gọi là bảng A) >> Preview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(682429)/* ["default"] */ .A) + "",
        width: "624",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Tiếp theo, bạn Add query, chọn datasource là fci-relation-datasource >> Chọn tag, component và nhập response key. Lúc này, hệ thống sẽ trả ra các cluster nằm trong tag FMON-DEMO với component tương ứng (Gọi là bảng C)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(784709)/* ["default"] */ .A) + "",
        width: "624",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Tiếp đến, bạn Add expression kiểu là Reduce, function= Last để lấy giá trị mới nhất của time series (Gọi là bảng D)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(846367)/* ["default"] */ .A) + "",
        width: "605",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Add expression với kiểu là Math, merge giữa hai bảng D và C để lọc ra những metric có cluster name trong component ở bảng C (Gọi là bảng E)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(186849)/* ["default"] */ .A) + "",
        width: "624",
        height: "528"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Cuối cùng, Add expression với kiểu là Threshold với input là E, điều kiện là IS_BELOW 1. Tức là nếu giá trị thỏa mãn điều kiện là <1 thì lúc này sẽ bắn alert, ngược lại >=1 là Normal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(792638)/* ["default"] */ .A) + "",
        width: "584",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với ví dụ trên, ở bảng E các metric đều có giá trị bằng 1 nên trạng thái là Normal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi config các thông tin xong, bạn cần Save rule để bảo toàn thông tin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./dashboard",
        children: " Previous Dashboard "
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

/***/ 682429
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2b9cb85f2497-Picture40-0b1ded4ce86a41bcc39df3a01ccd9d59.png");

/***/ },

/***/ 186849
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/67131a9c4d70-Picture43-686c859a51d1f98cba9e5f01ee50916b.png");

/***/ },

/***/ 784709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7c9af83b998c-Picture41-9b9663892d52ab29a63f30d713db40e2.png");

/***/ },

/***/ 206778
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 846367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c225abfe534c-Picture42-50c9aa3eef5545d3f580cd3b80fe07e9.png");

/***/ },

/***/ 792638
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c63498f21e23-Picture44-ea7c42185f51e5367894e5d4a85353bc.png");

/***/ },

/***/ 549021
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ffd111327f5c-Picture37-36eb66cfbf5c1b086ddb01f9fd24bc75.png");

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