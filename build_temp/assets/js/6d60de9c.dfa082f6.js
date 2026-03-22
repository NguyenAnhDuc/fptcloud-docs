"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[20398],{

/***/ 436512
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_backup_restore_restore_db_md_6d6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-backup-restore-restore-db-md-6d6.json
const site_docs_managed_fpt_database_engines_new_backup_restore_restore_db_md_6d6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/backup-restore/restore-db","title":"2. Managed – FPT Database Engines","description":"Khôi phục cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/backup-restore/restore-db.md","sourceDirName":"managed-fpt-database-engines-new/backup-restore","slug":"/managed-fpt-database-engines-new/backup-restore/restore-db","permalink":"/managed-fpt-database-engines-new/backup-restore/restore-db","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Restore db","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=restore-db","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Push s3","permalink":"/managed-fpt-database-engines-new/backup-restore/push-s3"},"next":{"title":"Giám sát & Báo cáo","permalink":"/managed-fpt-database-engines-new/monitoring/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/backup-restore/restore-db.md


const frontMatter = {
	sidebar_label: 'Restore db',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=restore-db',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Restore database",
  "id": "1-restore-database",
  "level": 3
}, {
  "value": "Bước 1: Truy cập màn hình Restore",
  "id": "bước-1-truy-cập-màn-hình-restore",
  "level": 4
}, {
  "value": "Bước 2: Thực hiện Restore",
  "id": "bước-2-thực-hiện-restore",
  "level": 4
}, {
  "value": "2. Recover to Point-in-Time",
  "id": "2-recover-to-point-in-time",
  "level": 3
}, {
  "value": "Bước 1: Truy cập màn hình Restore",
  "id": "bước-1-truy-cập-màn-hình-restore-1",
  "level": 4
}, {
  "value": "Bước 2: Thực hiện khôi phục",
  "id": "bước-2-thực-hiện-khôi-phục",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khôi phục cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Point-in-Time Recovery (PITR)"
      }), " cho phép người dùng phục hồi cơ sở dữ liệu từ các bản sao lưu hoặc khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ. Các hướng dẫn trong mục này giúp người dùng thực hiện quá trình khôi phục dữ liệu một cách chính xác, an toàn và hiệu quả, đồng thời đảm bảo tính toàn vẹn của dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi thực hiện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PITR"
      }), " , hệ thống sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tạo một database cluster mới"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "không ghi đè lên cluster hiện tại"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hiện tại, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud hỗ trợ Restore cho tất cả các database engine đang cung cấp"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hỗ trợ PITR cho PostgreSQL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-restore-database",
      children: "1. Restore database"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chức năng Restore cho phép người dùng sử dụng một bản sao lưu (backup) đã tạo trước đó để khôi phục dữ liệu và tạo một cụm cơ sở dữ liệu (database cluster) mới. Tính năng này hữu ích trong các trường hợp mất dữ liệu, lỗi hệ thống, hoặc khi cần roll back về trạng thái trước đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi thực hiện restore, cần đảm bảo cụm cơ sở dữ liệu đã có ít nhất một bản backup (restore point) được tạo thành công - tức là có ít nhất một restore point sẵn sàng để restore."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện Restore:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-màn-hình-restore",
      children: "Bước 1: Truy cập màn hình Restore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Từ thanh menu, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " > Chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), " hoặc menu tương ứng với nhóm cơ sở dữ liệu > nhấp vào Cluster ID của databse cluster cần restore > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup"
      }), " > chọn sub-tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), ". Hệ thống sẽ hiển thị danh sách các ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Available Restore Points"
      }), " , bao gồm loại backup (Full hoặc Diff)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(453896)/* ["default"] */ .A) + "",
        width: "1637",
        height: "1134"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-thực-hiện-restore",
      children: "Bước 2: Thực hiện Restore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , bấm vào biểu tượng ba chấm (⋮) tương ứng với restore point mong muốn → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), ". Một hộp thoại Restore Database sẽ xuất hiện:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953034)/* ["default"] */ .A) + "",
        width: "479",
        height: "490"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin theo yêu cầu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore Cluster Name"
        }), " : Tên của cluster mới được sinh ra khi restore."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flavor"
        }), " : Lựa chọn cấu hình phù hợp cho cluster mới."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), " để bắt đầu quá trình khôi phục. Sau khi hoàn tất, một database cluster mới sẽ xuất hiện trong danh sách quản lý Database Engines, chứa dữ liệu từ bản backup đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-recover-to-point-in-time",
      children: "2. Recover to Point-in-Time"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recover to Point-in-Time"
      }), " cho phép người dùng khôi phục cơ sở dữ liệu về một thời điểm chính xác trong quá khứ, rất hữu ích khi cần phục hồi dữ liệu sau sự cố hoặc lỗi phát sinh trong quá trình vận hành. Hiện tại, chức năng này ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chỉ được hỗ trợ cho PostgreSQL."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi thực hiện PITR, cần đảm bảo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database cluster đã bật PITR."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đã có ít nhất một bản backup toàn bộ cơ sở dữ liệu (backup full)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống đã lưu trữ đầy đủ archived logs phục vụ quá trình khôi phục."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện Recover to Point-in-Time:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-màn-hình-restore-1",
      children: "Bước 1: Truy cập màn hình Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện tương tự như bước truy cập màn hình Restore trong phần Restore Database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-thực-hiện-khôi-phục",
      children: "Bước 2: Thực hiện khôi phục"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore to Point in Time"
      }), ". Hộp thoại Restore Database to a Point in Time xuất hiện."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513574)/* ["default"] */ .A) + "",
        width: "632",
        height: "969"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin theo yêu cầu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore Cluster Name"
        }), " : Tên của cluster mới được sinh ra khi khôi phục."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flavor"
        }), " : Lựa chọn cấu hình phù hợp cho cluster mới."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recover To"
        }), " : Chọn thời điểm chính xác mà bạn muốn khôi phục cơ sở dữ liệu (theo định dạng ngày giờ)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recover"
      }), " để bắt đầu quá trình khôi phục. Hệ thống sẽ tạo một cluster mới và phục hồi dữ liệu về thời điểm đã chỉ định. Sau khi hoàn tất, một database cluster mới sẽ xuất hiện trong màn hình danh sách Database Engines, chứa dữ liệu tại đúng thời điểm khôi phục."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Bạn chỉ có thể khôi phục dữ liệu về các mốc thời gian sau khi bản Full Backup đầu tiên được tạo kể từ thời điểm kích hoạt PITR. Nếu bản Full Backup này chưa được thực thi, tính năng PITR sẽ chưa sẵn sàng. Mọi thay đổi dữ liệu phát sinh trước mốc Full Backup này không nằm trong phạm vi bảo vệ của PITR và không thể khôi phục."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./on-off-pitr",
        children: " Previous Bật/tắt PITR "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./push-s3",
        children: " Next Đẩy dữ liệu backup lên S3 "
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

/***/ 453896
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44b1a2e5ecc3-DBaaS_BackupDB_restore_list-da12b730a47aca79c602d9bab4640220.png");

/***/ },

/***/ 513574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/493cd14ef464-DBaaS_BackupDB_recover-c14ba13bf33ff6349515ffe6c0693a61.png");

/***/ },

/***/ 953034
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a841d3d94916-restore-1-ac62a526e62e1c21dd8ed66fe0d7a498.jpg");

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