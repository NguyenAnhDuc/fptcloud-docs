"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88459],{

/***/ 597315
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_view_db_list_md_21c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-view-db-list-md-21c.json
const site_docs_managed_fpt_database_engines_new_management_view_db_list_md_21c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/view-db-list","title":"2. Managed – FPT Database Engines","description":"Xem danh sách cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/management/view-db-list.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/view-db-list","permalink":"/managed-fpt-database-engines-new/management/view-db-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"View db list","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=view-db-list","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Vertical scaling","permalink":"/managed-fpt-database-engines-new/management/vertical-scaling"},"next":{"title":"Backup & Restore","permalink":"/managed-fpt-database-engines-new/backup-restore/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/view-db-list.md


const frontMatter = {
	sidebar_label: 'View db list',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=view-db-list',
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
    br: "br",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
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
      children: "Xem danh sách cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xem danh sách cơ sở dữ liệu"
      }), " cung cấp cái nhìn tổng quan về toàn bộ các cụm cơ sở dữ liệu đang vận hành trong môi trường FPT Database Engine, cho phép người dùng theo dõi nhanh trạng thái (status), cấu hình (configuration) và thực hiện các tác vụ quản trị (management operations) trên từng cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để truy cập danh sách các cụm cơ sở dữ liệu, người dùng đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform > All Databases"
      }), " hoặc lựa chọn menu tương ứng với nhóm cơ sở dữ liệu theo nhu cầu sử dụng, bao gồm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relational Databases"
        }), " : PostgreSQL, MySQL, MariaDB, Microsoft SQL Server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NoSQL"
        }), " : MongoDB, Cassandra, Redis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search Engine"
        }), " : OpenSearch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Streaming"
        }), " : Kafka."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Series Database"
        }), " : TimescaleDB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OLAP"
        }), " : Clickhouse."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database List"
      }), " sẽ hiển thị danh sách các cơ sở dữ liệu hiện có trong môi trường, kèm theo trạng thái hoạt động và các thông tin chính phục vụ cho việc giám sát và quản lý:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trường hợp chưa có cơ sở dữ liệu nào"
        }), " : Danh sách sẽ trống và hiển thị tùy chọn tạo cơ sở dữ liệu, cho phép người dùng khởi tạo cụm cơ sở dữ liệu mới."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(712583)/* ["default"] */ .A) + "",
        width: "2560",
        height: "837"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trường hợp đã có cơ sở dữ liệu"
        }), " : Danh sách hiển thị toàn bộ các cơ sở dữ liệu đã được triển khai trong VPC, bao gồm thông tin tổng quan và các thao tác quản lý cần thiết (start/stop/restart/delete)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(665467)/* ["default"] */ .A) + "",
        width: "1920",
        height: "911"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin hiển thị trong danh sách như sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên cột"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị ID của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cảnh báo khởi động lại cơ sở dữ liệu:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trường hợp cơ sở dữ liệu được điều chỉnh tài nguyên compute (CPU/RAM) nhưng chưa được restart để áp dụng cấu hình mới, hệ thống sẽ hiển thị biểu tượng cảnh báo (warning icon)."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Để các cấu hình mới có hiệu lực đầy đủ và đảm bảo hiệu năng cũng như độ ổn định của cơ sở dữ liệu, người dùng cần thực hiện thao tác restart tại thời điểm có lưu lượng truy cập thấp."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sau khi việc restart hoàn tất và cấu hình mới được áp dụng cảnh báo sẽ không hiển thị nữa."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị tên của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị loại engine của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị danh sách tag đã được gắn cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị phiên bản của cơ sở dữ liệu:"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phiên bản Beta: Gắn nhãn “Beta”"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phiên bản General Availability (GA): Hiển thị bình thường, không có nhãn đi kèm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phiên bản Deprecated: Gắn nhãn “Dep.”"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phiên bản End of Support: Gắn nhãn “EoS”", (0,jsx_runtime.jsx)(_components.br, {}), "\nNode | Hiển thị số node trong cụm cơ sở dữ liệu.", (0,jsx_runtime.jsx)(_components.br, {}), "\nStatus | Hiển thị trạng thái hiện tại của cơ sở dữ liệu (Running, Stopped, Warning, ...).", (0,jsx_runtime.jsx)(_components.br, {}), "\nBackup | Hiển thị trạng thái kích hoạt dịch vụ Backup.", (0,jsx_runtime.jsx)(_components.br, {}), "\nVertical scaling | Hiển thị trạng thái kích hoạt dịch vụ Vertical Scaling", (0,jsx_runtime.jsx)(_components.br, {}), "\nMonitoring | Hiển thị trạng thái kích hoạt dịch vụ Monitoring.", (0,jsx_runtime.jsx)(_components.br, {}), "\nCreated at | Hiển thị thời gian khởi tạo cơ sở dữ liệu.", (0,jsx_runtime.jsx)(_components.br, {}), "\nAction | Hiển thị các thao tác có thể thực hiện với cơ sở dữ liệu (Start, Stop, Restart, Delete, Resize, …)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./db-manage-operate",
        children: " Previous Khởi tạo và vận hành cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./create-db",
        children: " Next Khởi tạo cơ sở dữ liệu "
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

/***/ 665467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a77a8c3ca24e-db-list-warning-724f5f30b95cfdbab867851ad8204816.png");

/***/ },

/***/ 712583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/af2686bc5b38-dblist_nodb-scaled-cd7d8bf55ecd18b0d6bfebae96f1bf12.png");

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