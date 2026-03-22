"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[24101],{

/***/ 643158
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_khoi_tao_canh_bao_virtual_machine_md_fd5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-khoi-tao-canh-bao-virtual-machine-md-fd5.json
const site_docs_cloud_guard_khoi_tao_canh_bao_virtual_machine_md_fd5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/khoi-tao-canh-bao-virtual-machine","title":"2. FPT Cloud Guard","description":"Khởi tạo cảnh báo cho Virtual Machine (VM)","source":"@site/docs/cloud-guard/khoi-tao-canh-bao-virtual-machine.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/khoi-tao-canh-bao-virtual-machine","permalink":"/cloud-guard/khoi-tao-canh-bao-virtual-machine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Khoi tao canh bao virtual machine","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-virtual-machine","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/khoi-tao-canh-bao-virtual-machine.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Khoi tao canh bao virtual machine',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-virtual-machine',
	parent: 'https://fptcloud.com/documents/cloud-guard',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo cảnh báo cho Virtual Machine (VM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Guard"
      }), " , mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alerts"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Alert"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Cấu hình cảnh báo theo nhu cầu bằng cách nhập thông tin vào trường dữ liệu tương ứng:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Field"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhập tên của Alert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Loại tài nguyên"
            }), " sẽ cảnh báo."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apply to"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn tài nguyên sẽ áp dụng cảnh báo này"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configure metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tùy chỉnh ngưỡng alert:"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " (Metric Type): Chọn loại dữ liệu muốn sử dụng để theo dõi và đặt ngưỡng cảnh báo, các loại dữ liệu được hỗ trợ"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operator:"
        }), " Chọn loại so sánh giá trị thực với ngưỡng, bao gồm các toán tử <, <=, >=, >."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value:"
        }), " Nhập ngưỡng cảnh báo, giá trị sẽ được validate tùy theo đơn vị của các ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric Types"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alert Interval:"
        }), " Chọn chu kỳ tính toán của hệ thống, bao gồm các giá trị (3 minutes, 5 minutes, 30 minutes, 1 hour, 6 hours, 1 day) | | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity"
        }), " | Chọn mức độ nghiêm trọng của cảnh báo | | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Notify to"
        }), " | Chọn người nhận cảnh báo |"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo dựa vào các thông tin đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi khởi tạo thành công, người dùng có thể thấy Alert mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi Alert sẽ được hiển thị đầy đủ thông tin như Name, State, Type, Metric, Severity, Applied to, Notify to, Status."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Previous Quản lý Alert "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-canh-bao-object-storage",
        children: " Next Khởi tạo cảnh báo cho Object Storage "
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