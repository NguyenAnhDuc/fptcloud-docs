"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[22736],{

/***/ 795736
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cost_explorer_cost_explorer_dimension_service_md_472_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cost-explorer-cost-explorer-dimension-service-md-472.json
const site_docs_cost_explorer_cost_explorer_dimension_service_md_472_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cost-explorer/cost-explorer-dimension-service","title":"2. Cost Explorer","description":"Cost explorer theo dịch vụ","source":"@site/docs/cost-explorer/cost-explorer-dimension-service.md","sourceDirName":"cost-explorer","slug":"/cost-explorer/cost-explorer-dimension-service","permalink":"/cost-explorer/cost-explorer-dimension-service","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cost explorer dimension service","title":"2. Cost Explorer","source":"https://fptcloud.com/documents/cost-explorer/?doc=cost-explorer-dimension-service","parent":"https://fptcloud.com/documents/cost-explorer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cost explorer dimension resource type","permalink":"/cost-explorer/cost-explorer-dimension-resource-type"},"next":{"title":"Fqas 2","permalink":"/cost-explorer/fqas-2"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cost-explorer/cost-explorer-dimension-service.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cost explorer dimension service',
	title: '2. Cost Explorer',
	source: 'https://fptcloud.com/documents/cost-explorer/?doc=cost-explorer-dimension-service',
	parent: 'https://fptcloud.com/documents/cost-explorer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Cost Explorer';

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
        id: "2-cost-explorer",
        children: "2. Cost Explorer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cost explorer theo dịch vụ"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tại menu tab bar, chọn Billing > chọn Cost Explorer. Hệ thống hiển thị chi phí theo các dịch vụ sử dụng thuộc tất cả Project trong Tenant."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kéo thanh scroll hoặc lăn chuột để zoom in/zoom out vào 1 điểm trên biểu đồ để xem ở dữ liệu ở từng thời điểm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(656854)/* ["default"] */ .A) + "",
        width: "1976",
        height: "1125"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chọn button Customize Filter > xuất hiện pop-up cho phép chọn điều kiện để lọc giá trị theo mục đích. Các điều kiện lọc bao gồm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Start date – End date: Khoảng thời gian tính tiền."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Period type: Xem biểu đồ biến động chi phí được chia nhỏ theo ngày (daily) hoặc theo tháng (monthly)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Service: Tên dịch vụ. Người dùng có thể chọn nhiều service. Nếu không có service cụ thể nào được chọn, hệ thống mặc định show dữ liệu của tất cả các dịch vụ và thỏa mãn các điều kiện khác trong bộ filter."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Project: Có thể chọn nhiều Project. Nếu filter Project trống, hệ thống mặc định không lọc dữ liệu bằng Project, tức là dữ liệu kết quả chỉ thỏa mãn các điều kiện khác của filter và không bị ảnh hưởng bởi project"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VPC:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Có thể chọn nhiều VPC. Nếu filter VPC trống, hệ thống mặc định lọc dữ liệu bằng VPC, tức là dữ liệu kết quả chỉ thỏa mãn các điều kiện khác của bộ lọc và không bị ảnh hưởng bởi VPC."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nếu ở điều kiện Project, người dùng chọn một vài Project cụ thể, thì VPC được chọn chỉ bao gồm các VPC thuộc Project đã chọn bên trên."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tag:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Các tag được quản lý trên Portal. Người dùng có thể chọn nhiều tag."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nếu filter tagging trống, hệ thống mặc định không lọc dữ liệu bằng tagging, tức là dữ liệu chỉ thỏa mãn các điều kiện khác của bộ lọc và không bị ảnh hưởng bởi tagging."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(241399)/* ["default"] */ .A) + "",
        width: "1996",
        height: "1125"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./cost-explorer-dimension-resource-type",
        children: " Next Cost explorer theo loại tài nguyên "
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

/***/ 656854
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91cd61356fdd-image-1745469271136-7d4e18cc67ab9f63ab9cb32aa4724786.png");

/***/ },

/***/ 241399
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f7d5649ad0cb-image-1745469282868-67dce0aad41924e60aac6d8ca1471380.png");

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