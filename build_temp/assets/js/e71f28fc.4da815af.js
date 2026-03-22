"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[46221],{

/***/ 922835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_backup_restore_push_s_3_md_e71_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-backup-restore-push-s-3-md-e71.json
const site_docs_managed_fpt_database_engines_new_backup_restore_push_s_3_md_e71_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/backup-restore/push-s3","title":"2. Managed – FPT Database Engines","description":"Đẩy dữ liệu backup lên S3","source":"@site/docs/managed-fpt-database-engines-new/backup-restore/push-s3.md","sourceDirName":"managed-fpt-database-engines-new/backup-restore","slug":"/managed-fpt-database-engines-new/backup-restore/push-s3","permalink":"/managed-fpt-database-engines-new/backup-restore/push-s3","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Push s3","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=push-s3","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"On off pitr","permalink":"/managed-fpt-database-engines-new/backup-restore/on-off-pitr"},"next":{"title":"Restore db","permalink":"/managed-fpt-database-engines-new/backup-restore/restore-db"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/backup-restore/push-s3.md


const frontMatter = {
	sidebar_label: 'Push s3',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=push-s3',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Thêm cấu hình S3 mới",
  "id": "1-thêm-cấu-hình-s3-mới",
  "level": 3
}, {
  "value": "Điều kiện tiên quyết:",
  "id": "điều-kiện-tiên-quyết",
  "level": 4
}, {
  "value": "Các bước thực hiện:",
  "id": "các-bước-thực-hiện",
  "level": 4
}, {
  "value": "2. Đẩy dữ liệu backup lên S3",
  "id": "2-đẩy-dữ-liệu-backup-lên-s3",
  "level": 3
}, {
  "value": "Điều kiện tiên quyết:",
  "id": "điều-kiện-tiên-quyết-1",
  "level": 4
}, {
  "value": "Các bước thực hiện Restore:",
  "id": "các-bước-thực-hiện-restore",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Đẩy dữ liệu backup lên S3"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đẩy dữ liệu backup lên S3"
      }), " cho phép người dùng đẩy các file sao lưu của cơ sở dữ liệu lên kho lưu trữ S3 tương thích, phục vụ các mục đích như lưu trữ dài hạn, sao lưu ngoài hệ thống hoặc tiêu thụ dữ liệu bên ngoài. Tính năng này hữu ích cho kịch bản phục hồi sau thảm họa, kiểm toán hoặc nhân rộng dữ liệu sang hệ thống khác."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại, FPT đang cung cấp tính năng này cho các loại engine: PostgreSQL, MySQL, MariaDB, SQLServer, Redis, MongoDB, TimescaleDB."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn này giúp bạn biết cách sử dụng tính năng để quản lý việc đẩy dữ liệu sao lưu lên S3, phục vụ các mục tiêu lưu trữ an toàn, phục hồi hoặc tích hợp dữ liệu ngoài hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-thêm-cấu-hình-s3-mới",
      children: "1. Thêm cấu hình S3 mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chức năng Thêm cấu hình S3 mới cho phép người dùng cấu hình thông tin S3-compatible storage để hệ thống sử dụng làm nơi lưu trữ dữ liệu sao lưu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng đã có S3 bucket hợp lệ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Có Access Key và Secret Key với quyền truy cập bucket."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Endpoint S3 có thể truy cập từ hệ thống."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện",
      children: "Các bước thực hiện:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Truy cập trang quản lý cấu hình S3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập FPT Cloud Console. Mở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database list"
      }), " > chọn ID của database cluster để mở trang chi tiết > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration"
      }), ". Trang quản lý migration hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(178775)/* ["default"] */ .A) + "",
        width: "2560",
        height: "929"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Thêm cấu hình S3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration"
      }), " , nhấn vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add S3 Configuration"
      }), " (biểu tượng dấu cộng cạnh section \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure"
      }), " \") để bắt đầu thêm cấu hình S3. Hệ thống hiển thị hộp thoại như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(947975)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1298"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Điền thông tin cấu hình S3:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 endpoint"
        }), " : Nhập URL endpoint của dịch vụ S3 (ví dụ: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://s3.amazonaws.com",
          children: "https://s3.amazonaws.com"
        }), " cho AWS S3)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 bucket name"
        }), " : Tên bucket dùng để lưu trữ dữ liệu backup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 region"
        }), " : Nhập khu vực (region) của bucket S3 (ví dụ: us-east-1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 access key"
        }), " : Access key dùng để xác thực truy cập S3."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 Secret Key"
        }), " : Secret key tương ứng với access key."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý bảo mật:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông tin Access Key và Secret Key được mã hoá và ẩn khi nhập."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Không chia sẻ thông tin xác thực S3 cho bên thứ ba không được uỷ quyền."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập thông tin, kiểm tra lại và nhấn \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " \" để lưu cấu hình. Sau khi cấu hình thành công, S3 storage sẽ khả dụng để sử dụng cho các chức năng đẩy dữ liệu backup lên S3 (tuỳ theo engine hỗ trợ)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần thiết, người dùng có thể thực hiện các thao tác sau đối với cấu hình S3 đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chỉnh sửa cấu hình S3"
        }), " : Chức năng này cho phép cập nhật các thông tin đã cấu hình cho S3. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration"
        }), " , nhấp vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit"
        }), " (hình bút chì) tương ứng với cấu hình S3 cần chỉnh sửa. Cập nhật các thông tin cần thay đổi và nhấn Update để lưu lại."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Xóa cấu hình S3"
        }), " : Chức năng này cho phép xoá các cấu hình S3 không còn sử dụng, giúp hệ thống được quản lý gọn gàng và chính xác hơn. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration"
        }), " , nhấp vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " (hình thùng rác) tương ứng với cấu hình cần xoá. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-đẩy-dữ-liệu-backup-lên-s3",
      children: "2. Đẩy dữ liệu backup lên S3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đẩy dữ liệu backup lên S3"
      }), " cho phép người dùng đẩy các file backup hiện có của database cluster lên S3 storage đã được cấu hình trước đó."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "điều-kiện-tiên-quyết-1",
      children: "Điều kiện tiên quyết:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đã cấu hình S3 storage hợp lệ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database cluster đã có ít nhất một backup thành công."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engine của database hỗ trợ tính năng Push S3."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "các-bước-thực-hiện-restore",
      children: "Các bước thực hiện Restore:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Truy cập màn hình Restore"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Từ thanh menu, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " > Chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), " hoặc menu tương ứng với nhóm cơ sở dữ liệu > nhấp vào Cluster ID của databse cluster cần restore > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup"
      }), " > chọn sub tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), ". Hệ thống sẽ hiển thị danh sách các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Available Restore Points"
      }), " , bao gồm loại backup (Full hoặc Diff)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(453896)/* ["default"] */ .A) + "",
        width: "1637",
        height: "1134"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Thực hiện Push S3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , bấm vào biểu tượng ba chấm (⋮) tương ứng với restore point mong muốn → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push S3"
      }), ". Hộp thoại Push S3 hiển thị danh sách các cấu hình S3 khả dụng:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561740)/* ["default"] */ .A) + "",
        width: "1496",
        height: "785"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn S3 storage mong muốn bằng cách tick vào checkbox trong cột Action rồi nhấn Push để bắt đầu quá trình đẩy file backup lên S3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để theo dõi trạng thái của tiến trình đẩy file lên S3, truy cập tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration"
      }), " và chọn sub-tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logs"
      }), " để xem thông tin chi tiết:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775259)/* ["default"] */ .A) + "",
        width: "1378",
        height: "518"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi thao tác hoàn tất thành công, các file backup của database cluster sẽ được đẩy lên S3 storage đã chọn. Để kiểm tra kết quả, người dùng có thể truy cập S3 Browser hoặc công cụ quản lý S3 tương ứng để xác nhận các file đã được push."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678568)/* ["default"] */ .A) + "",
        width: "1405",
        height: "904"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-db",
        children: " Previous Khôi phục cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./resource",
        children: " Next Quản lý tài nguyên cụm cơ sở dữ liệu "
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

/***/ 178775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03d0f2a329d1-migration-list-scaled-dc96b4b64580e153e08708c81772cc60.png");

/***/ },

/***/ 775259
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0f76689cb560-log-s3-c2eaa9449aaf564ff13d6645fe5733bc.png");

/***/ },

/***/ 453896
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44b1a2e5ecc3-DBaaS_BackupDB_restore_list-da12b730a47aca79c602d9bab4640220.png");

/***/ },

/***/ 947975
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f6342cf62b5-s3-config-scaled-f820bf1af92e63df8ea38c9c3b4461f8.png");

/***/ },

/***/ 561740
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a69f73c59f28-push-s3-e8b0eafb35ef9ae22d2c54e04ac20a76.png");

/***/ },

/***/ 678568
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab343b8a9f0d-S3-browser-fef1bc6c15b06e0619432fa2bfbb3067.png");

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