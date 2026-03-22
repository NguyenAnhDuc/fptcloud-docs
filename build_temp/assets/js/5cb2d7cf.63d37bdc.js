"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10167],{

/***/ 669723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_incident_management_incident_severity_md_5cb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-incident-management-incident-severity-md-5cb.json
const site_docs_incident_management_incident_severity_md_5cb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"incident-management/incident-severity","title":"2. Incident Management","description":"Incident severity","source":"@site/docs/incident-management/incident-severity.md","sourceDirName":"incident-management","slug":"/incident-management/incident-severity","permalink":"/incident-management/incident-severity","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Incident severity","title":"2. Incident Management","source":"https://fptcloud.com/documents/incident-management/?doc=incident-severity","parent":"https://fptcloud.com/documents/incident-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Incident label","permalink":"/incident-management/incident-label"},"next":{"title":"Incident status","permalink":"/incident-management/incident-status"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/incident-management/incident-severity.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Incident severity',
	title: '2. Incident Management',
	source: 'https://fptcloud.com/documents/incident-management/?doc=incident-severity',
	parent: 'https://fptcloud.com/documents/incident-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Incident Management';

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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-incident-management",
        children: "2. Incident Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incident severity"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident serverity"
      }), " cho phép bạn định nghĩa đo lường các mức độ ảnh hưởng của sự cố. Mức độ ảnh hưởng được định nghĩa rõ ràng và nhất quán sẽ giúp những người khác trong tổ chức của bạn nhanh chóng hiểu được mức độ nghiêm trọng của sự cố."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mức độ ảnh hưởng của sự cố có thể ảnh hưởng tới quá trình ứng phó sự cố của bạn ví dụ như có bao nhiêu người tham gia và cần thông báo cho ai. Để thu được giá trị cao nhất từ mức độ ảnh hưởng của sự cố hãy thiết lập các định nghĩa rõ ràng về từng mức độ ảnh hưởng và phản hồi dự kiến trong tổ chức của bạn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các mức độ ảnh hưởng, được khuyến nghị dưới đây, được tạo sẵn trong FMON incident:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mức độ ảnh hưởng rất lớn, cần quan tâm ngay. Ví dụ: Dịch vụ “customer-facing” bị gián đoạn với tất cả khách hàng, Tính bảo mật hoặc quyền riêng tư bị vi phạm, Mất dữ liệu khách hàng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Major"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mức độ ảnh hưởng đáng kể. Ví dụ: Dịch vụ “customer-facing” bị gián đoạn với 1 tập nhỏ khách hàng, Chức năng lõi của hệ thống bị ảnh hưởng."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mức độ ảnh hưởng nhẹ. Ví dụ: Một sự bất tiện nhỏ cho khách hàng, có giải pháp thay thế"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mức độ nghiêm trọng cần được quyết định và cần được xác định càng sớm càng tốt."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A. Sửa incident serverity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : bên menu bên trái, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apps"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Ở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serverity"
      }), " , chọn một serverity đã có sẵn, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pencil icon"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(582069)/* ["default"] */ .A) + "",
        width: "1919",
        height: "835"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Cung cấp thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      }), " cho serverity"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : (Option) lựa chọn màu color cho serverity"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Serverity"
      }), " để cập nhật"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(196431)/* ["default"] */ .A) + "",
        width: "1919",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B. Mở / Vô hiệu hóa incident serverity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Bên menu bên trái, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apps"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Ở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serverity"
      }), " , chọn một serverity có sẵn, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Toggle switch icon"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558052)/* ["default"] */ .A) + "",
        width: "1919",
        height: "810"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./incident-label",
        children: " Previous Incident label "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./incident-status",
        children: " Next Incident status "
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

/***/ 582069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ea36620e642-Screenshot_10-6f132699494f8c12598f20d0098efafe.png");

/***/ },

/***/ 558052
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9146f0c1d374-Screenshot_12-d27b23fcf8e58517555beb0cabea2f4f.png");

/***/ },

/***/ 196431
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1f3d9367507-Screenshot_11-649b0570e79ed5ad06d987289d11b252.png");

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