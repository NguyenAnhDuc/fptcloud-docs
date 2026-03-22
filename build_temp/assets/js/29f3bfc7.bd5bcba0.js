"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7679],{

/***/ 372906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_backup_restore_backup_restore_md_29f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-backup-restore-backup-restore-md-29f.json
const site_docs_managed_fpt_database_engines_new_backup_restore_backup_restore_md_29f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/backup-restore/backup-restore","title":"2. Managed – FPT Database Engines","description":"Backup & Restore","source":"@site/docs/managed-fpt-database-engines-new/backup-restore/backup-restore.md","sourceDirName":"managed-fpt-database-engines-new/backup-restore","slug":"/managed-fpt-database-engines-new/backup-restore/","permalink":"/managed-fpt-database-engines-new/backup-restore/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Backup restore","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-restore","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Backup mgmt","permalink":"/managed-fpt-database-engines-new/backup-restore/backup-mgmt"},"next":{"title":"Migration cho sqlserver","permalink":"/managed-fpt-database-engines-new/backup-restore/migration-cho-sqlserver"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/backup-restore/backup-restore.md


const frontMatter = {
	sidebar_label: 'Backup restore',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-restore',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Backup",
  "id": "backup",
  "level": 3
}, {
  "value": "Các loại Backup",
  "id": "các-loại-backup",
  "level": 3
}, {
  "value": "Lưu trữ Backup",
  "id": "lưu-trữ-backup",
  "level": 3
}, {
  "value": "Backup Retention",
  "id": "backup-retention",
  "level": 3
}, {
  "value": "Restore",
  "id": "restore",
  "level": 3
}, {
  "value": "Point-in-Time Recovery (PITR)",
  "id": "point-in-time-recovery-pitr",
  "level": 3
}, {
  "value": "Quyền cần thiết",
  "id": "quyền-cần-thiết",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
      children: "Backup & Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup & Restore"
      }), " trên FPT Database Engine giúp bảo vệ dữ liệu trước các rủi ro như xoá nhầm, lỗi dữ liệu hoặc sự cố hệ thống. Nền tảng hỗ trợ sao lưu tự động, khôi phục dữ liệu từ các bản sao lưu và khôi phục dữ liệu về một thời điểm cụ thể (Point-in-Time Recovery) đối với một số database engine được hỗ trợ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backup",
      children: "Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup là quá trình tạo bản sao dữ liệu của cơ sở dữ liệu tại một thời điểm xác định. Các bản backup được sử dụng để khôi phục dữ liệu khi xảy ra sự cố hoặc lỗi vận hành. Cơ chế backup được thiết kế nhằm bảo vệ dữ liệu, hỗ trợ khôi phục khi xảy ra sự cố và đáp ứng các yêu cầu về tuân thủ và bảo mật trong môi trường cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chức năng Backup cho phép bạn thiết lập, vận hành và giám sát các hoạt động sao lưu cho cơ sở dữ liệu. Bạn có thể:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bật hoặc tắt dịch vụ backup cho cơ sở dữ liệu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quản lý lịch sao lưu (backup job)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theo dõi trạng thái thực thi thông qua giao diện quản lý tập trung."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Backup khả dụng cho tất cả các loại engine do FPT cung cấp."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-loại-backup",
      children: "Các loại Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Database Engine hỗ trợ 2 loại backup sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Backup"
        }), " : Sao lưu toàn bộ dữ liệu của cơ sở dữ liệu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diff (Incremental) backup"
        }), " : Sao lưu các thay đổi kể từ lần backup gần nhất, giúp giảm thời gian và dung lượng lưu trữ."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lưu-trữ-backup",
      children: "Lưu trữ Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bản backup được lưu trữ trên hệ thống storage độc lập, tách biệt hoàn toàn với database cluster nhằm đảm bảo độ bền dữ liệu (durability) và tính sẵn sàng khôi phục khi database cluster gặp sự cố."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backup-retention",
      children: "Backup Retention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup retention xác định số lượng bản full backup được giữ lại trong hệ thống. Khi vượt quá số lượng retention đã cấu hình, các bản backup cũ nhất sẽ được tự động xóa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restore",
      children: "Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Restore cho phép bạn khôi phục database từ một bản backup hiện có. Quá trình restore tạo một database mới dựa trên dữ liệu tại thời điểm backup được chọn."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "point-in-time-recovery-pitr",
      children: "Point-in-Time Recovery (PITR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Point-in-Time Recovery cho phép khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ. PITR hoạt động bằng cách kết hợp full backup định kỳ và transaction logs / archived logs được ghi nhận liên tục. Cơ chế này đảm bảo khả năng khôi phục chính xác và tin cậy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng này đặc biệt hữu ích khi bạn cần khôi phục dữ liệu từ một thời điểm chính xác, chẳng hạn như khi phát hiện ra lỗi hoặc sự cố trong quá trình hoạt động của hệ thống. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hiện tại, chức năng này chỉ được hỗ trợ cho PostgreSQL."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc kết hợp giữa backup và PITR giúp tăng cường khả năng bảo vệ dữ liệu, đảm bảo tính sẵn sàng cao và cung cấp khả năng khôi phục linh hoạt cho các kịch bản vận hành thực tế."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quyền-cần-thiết",
      children: "Quyền cần thiết"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "manageDatabase:ListBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem thông tin Backup cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:EnableBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền kích hoạt chức năng Backup & Restore cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền vô hiệu hóa chức năng Backup & Restore cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:CreateJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo job backup cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ViewJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem chi tiết job backup."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:RunNowJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo snapshot backup thủ công cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:EditJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền chỉnh sửa job backup."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xoá job backup."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ListRestore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem danh sách bản backup có thể restore."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền khôi phục database từ bản backup hoặc khôi phục theo thời điểm cụ thể."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./upgrade-version",
        children: " Previous Nâng cấp phiên bản cho cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-mgmt",
        children: " Next Quản lý dịch vụ Backup "
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