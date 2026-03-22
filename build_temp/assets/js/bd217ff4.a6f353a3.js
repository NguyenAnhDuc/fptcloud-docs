"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[17751],{

/***/ 663685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_billing_view_bills_md_bd2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-billing-view-bills-md-bd2.json
const site_docs_billing_view_bills_md_bd2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"billing/view-bills","title":"2. Bills","description":"Xem đối soát theo kỳ hóa đơn","source":"@site/docs/billing/view-bills.md","sourceDirName":"billing","slug":"/billing/view-bills","permalink":"/billing/view-bills","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"View bills","title":"2. Bills","source":"https://fptcloud.com/documents/billing/?doc=view-bills","parent":"https://fptcloud.com/documents/billing","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"View bill charges by service","permalink":"/billing/view-bill-charges-by-service"},"next":{"title":"C i","permalink":"/budget-alert/c-i"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/billing/view-bills.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'View bills',
	title: '2. Bills',
	source: 'https://fptcloud.com/documents/billing/?doc=view-bills',
	parent: 'https://fptcloud.com/documents/billing',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Bills';

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
        id: "2-bills",
        children: "2. Bills"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xem đối soát theo kỳ hóa đơn"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Để xem đối soát, người dùng cần đăng nhập vào hệ thống với role là Tenant owner hoặc role có quyền ", (0,jsx_runtime.jsx)(_components.em, {
          children: "view billing"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Lưu ý: Chi tiết hướng dẫn phân quyền xem billing tại", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/billing/?doc=billing-permission",
          children: "link"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại menu tab bar, chọn Billing > Bills > lần lượt chọn kỳ hóa đơn (period), chọn contract và invoice cần xem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Trong trường hợp các Project/VPC hoặc tài nguyên trong cùng 1 Tenant mà bạn đang quản lý cần được tách thành nhiều cụm (billing group) để thanh toán, hệ thống sẽ hiển thị số lượng đối soát bằng đúng số lượng cụm tài nguyên (billing group)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(406204)/* ["default"] */ .A) + "",
        width: "939",
        height: "534"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại màn hình xem đối soát, người dùng có thể tra cứu các thông tin bao gồm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tên công ty (Account name)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mã số thuế (Tax code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Địa chỉ công ty (Company address)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kỳ hóa đơn (Billing period): Thể hiện ngày bắt đầu và ngày kết thúc của kỳ hóa đơn đó."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thời điểm cập nhật dữ liệu gần nhất (Last updated)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trạng thái của đối soát (Invoice status): Có 3 trạng thái chính bao gồm:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Draft - dữ liệu đối soát nháp, chưa phải là dữ liệu chốt để xuất hóa đơn;"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invoiced - Đối soát đã được xác nhận và xuất hóa đơn thành công;"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cancelled - Đối soát đã bị hủy và không xuất hóa đơn."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tổng tiền (Grand total): Tổng tiền trước thuế VAT tại thời điểm cập nhật dữ liệu gần nhất."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Người dùng có thể xem chi tiết đối soát theo dịch vụ tại tab ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/billing/?doc=view-bill-charges-by-service",
        children: "Charges by service"
      }), " hoặc theo tài nguyên sử dụng tại tab ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/billing/?doc=view-bill-charges-by-resource",
        children: "Charges by resource"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./view-bill-charges-by-service",
        children: " Next Xem đối soát theo tên dịch vụ (Charges by service) "
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

/***/ 406204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab8572229db3-image-1744088467596-51fbaa2c1d1d51b8b6ed5a0e4a6fed6d.png");

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