"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[77259],{

/***/ 714958
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_db_manage_operate_md_6df_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-db-manage-operate-md-6df.json
const site_docs_managed_fpt_database_engines_new_db_manage_operate_md_6df_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/db-manage-operate","title":"2. Managed – FPT Database Engines","description":"Khởi tạo và vận hành cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/db-manage-operate.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/db-manage-operate","permalink":"/managed-fpt-database-engines-new/db-manage-operate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Db manage operate","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-manage-operate","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Db engine service","permalink":"/managed-fpt-database-engines-new/db-engine-service"},"next":{"title":"Db operation","permalink":"/managed-fpt-database-engines-new/db-operation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/db-manage-operate.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Db manage operate',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-manage-operate',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo và vận hành cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhóm chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo và vận hành cơ sở dữ liệu"
      }), " cho phép người dùng khởi tạo, cấu hình, vận hành và xoá các cơ sở dữ liệu trong môi trường FPT Database Engine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thao tác trong nhóm này áp dụng ở cấp database resource và yêu cầu người dùng được gán các quyền IAM tương ứng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Điều kiện tiên quyết:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dịch vụ FPT Database Engine đã được kích hoạt (activate) trong VPC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng được gán role có các quyền quản lý và vận hành cơ sở dữ liệu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quyền cần thiết:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem danh sách các cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo mới cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem thông tin chi tiết của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền vận hành database: start, stop, restart."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDE:hide_admin_pw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền chặn xem mật khẩu quản trị của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xóa cơ sở dữ liệu."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để quản lý và vận hành cơ sở dữ liệu, vui lòng tham khảo hướng dẫn chi tiết tại các mục:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=view-db-list",
          children: "Xem danh sách cơ sở dữ liệu"
        }), ": Hiển thị danh sách các cơ sở dữ liệu bạn có quyền truy cập, bao gồm trạng thái, cấu hình và các thông tin quan trọng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=create-db",
          children: "Khởi tạo cơ sở dữ liệu"
        }), ": Khởi tạo một cơ sở dữ liệu mới bằng cách lựa chọn hệ quản trị, phiên bản, flavor và các cấu hình cần thiết khác."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-connect",
          children: "Kết nối cơ sở dữ liệu"
        }), ": Tìm hiểu cách lấy thông tin kết nối và kết nối tới cơ sở dữ liệu từ ứng dụng hoặc các công cụ client."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-operation",
          children: "Vận hành cơ sở dữ liệu"
        }), ": Thực hiện các thao tác vận hành phổ biến như khởi động, dừng, khởi động lại, quản lý cấu hình và theo dõi cơ sở dữ liệu."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“7.2.5. Nâng cấp phiên bản cơ sở dữ liệu”: Nâng cấp phiên bản hệ quản trị cơ sở dữ liệu để sử dụng các tính năng mới, cải tiến hiệu năng và bản vá bảo mật."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./deactive-db-service",
        children: " Previous Huỷ kích hoạt dịch vụ FPT Database Engine "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./view-db-list",
        children: " Next Xem danh sách cơ sở dữ liệu "
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