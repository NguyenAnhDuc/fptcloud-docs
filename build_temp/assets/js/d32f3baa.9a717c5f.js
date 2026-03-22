"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[91673],{

/***/ 240766
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_backup_mgmt_md_d32_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-backup-mgmt-md-d32.json
const site_docs_managed_fpt_database_engines_new_backup_mgmt_md_d32_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/backup-mgmt","title":"2. Managed – FPT Database Engines","description":"Quản lý dịch vụ Backup","source":"@site/docs/managed-fpt-database-engines-new/backup-mgmt.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/backup-mgmt","permalink":"/managed-fpt-database-engines-new/backup-mgmt","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Backup mgmt","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-mgmt","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Backup job mgmt","permalink":"/managed-fpt-database-engines-new/backup-job-mgmt"},"next":{"title":"Backup restore","permalink":"/managed-fpt-database-engines-new/backup-restore"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/backup-mgmt.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Backup mgmt',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-mgmt',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Kích hoạt dịch vụ Backup",
  "id": "1-kích-hoạt-dịch-vụ-backup",
  "level": 3
}, {
  "value": "Điều kiện tiên quyết",
  "id": "điều-kiện-tiên-quyết",
  "level": 4
}, {
  "value": "Bước 1: Truy cập màn hình Backup",
  "id": "bước-1-truy-cập-màn-hình-backup",
  "level": 4
}, {
  "value": "Bước 2: Kích hoạt dịch vụ Backup",
  "id": "bước-2-kích-hoạt-dịch-vụ-backup",
  "level": 4
}, {
  "value": "2. Điều chỉnh dịch vụ Backup",
  "id": "2-điều-chỉnh-dịch-vụ-backup",
  "level": 3
}, {
  "value": "3. Huỷ dịch vụ Backup",
  "id": "3-huỷ-dịch-vụ-backup",
  "level": 3
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
      children: "Quản lý dịch vụ Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này hướng dẫn người dùng các bước chi tiết để thực hiện các nghiệp vụ liên quan đến dịch vụ Backup, bao gồm kích hoạt, điều chỉnh và huỷ dịch vụ Backup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-kích-hoạt-dịch-vụ-backup",
      children: "1. Kích hoạt dịch vụ Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để kích hoạt dịch vụ Backup, bạn có thể thực hiện trực tiếp trong bước cấu hình dịch vụ bổ sung (Additional Service) khi khởi tạo cơ sở dữ liệu (xem chi tiết tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=create-db",
        children: "Khởi tạo cơ sở dữ liệu"
      }), " hoặc kích hoạt sau khi cỡ sở dữ liệu đã được khởi tạo theo hướng dẫn dưới đây."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điều kiện cần để kích hoạt dịch vụ Backup là phải bật dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " và hoàn tất cấu hình danh sách email hoặc Telegram dùng để nhận cảnh báo liên quan đến hoạt động backup trước. Nếu chưa cấu hình Notification sẽ hiển thị hộp thoại như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(943836)/* ["default"] */ .A) + "",
        width: "420",
        height: "183"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Go to Notification"
      }), " để đến tab chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " , người dùng thao tác như hướng dẫn tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " để hoàn tất cấu hình cảnh báo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-màn-hình-backup",
      children: "Bước 1: Truy cập màn hình Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên thanh menu, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " > Chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), " hoặc chọn menu tương ứng với nhóm cơ sở dữ liệu phù hợp cluster cần kích hoạt dịch vụ backup > click vào Cluster ID > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup"
      }), " để vào màn hình quản lý dịch vụ backup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729028)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1303"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-kích-hoạt-dịch-vụ-backup",
      children: "Bước 2: Kích hoạt dịch vụ Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi cụm cơ sở dữ liệu được tạo thành công và dịch vụ Backup chưa được kích hoạt, trạng thái của dịch vụ sẽ mặc định là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), ". Người dùng có thể nhấp vào biểu tượng “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable Backup"
      }), " ” (hình răng cưa) để mở hộp thoại và tiến hành kích hoạt dịch vụ. Tùy theo loại database engine và VPC là VMWare hay Open Stack mà một số trường thông tin có thể hiển thị khác nhau."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(91489)/* ["default"] */ .A) + "",
        width: "420",
        height: "630"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả ý nghĩa và cách điền giá trị cho các trường trên màn hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity (GB)"
        }), " : Nhập dung lượng lưu trữ dữ liệu backup cho database, tính theo đơn vị GB, với giá trị tối thiểu là 10 GB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage Policy"
        }), " : Chọn chính sách lưu trữ (Storage Class) cho backup service. Trường này chỉ hiển thị nếu VPC chạy trên platform là VMWare."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable PITR"
        }), " : Chọn bật/không bật tính năng PITR cho dịch vụ backup. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tính năng này mới chỉ được hỗ trợ trên loại engine là PostgreSQL."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin nhấn button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để xác nhận kích hoạt dịch vụ backup."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình kích hoạt dịch vụ Backup có thể kéo dài từ 5–10 phút và sẽ hiển thị thanh tiến trình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), ". Sau khi kích hoạt thành công, dịch vụ Backup sẽ chuyển sang trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " với các thông số đã được thiết lập."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện sao lưu dữ liệu cho cơ sở dữ liệu, người dùng cần tạo các backup job bao gồm Full Backup và Differential Backup nhằm thiết lập lịch sao lưu định kỳ. Vui lòng tham khảo hướng dẫn chi tiết tại mục Quản lý job backup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-điều-chỉnh-dịch-vụ-backup",
      children: "2. Điều chỉnh dịch vụ Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình sử dụng, nếu muốn điều chỉnh cài đặt đã thiết lập cho dịch vụ Backup, thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Backup"
      }), " (biểu tượng hình bút chì) cạnh section ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Service"
      }), " để mở hộp thoại cập nhật cấu hình dịch vụ backup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(921888)/* ["default"] */ .A) + "",
        width: "368",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập các thông tin cần thay đổi và nhấn Save để xác nhận. Quá trình cập nhật có thể mất khoảng 5–10 phút; trong thời gian này, dịch vụ Backup sẽ hiển thị trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Updating"
      }), ". Sau khi cập nhật thành công, dịch vụ sẽ chuyển về trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " với các cấu hình theo giá trị đã được điều chỉnh."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-huỷ-dịch-vụ-backup",
      children: "3. Huỷ dịch vụ Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cảnh báo:"
      }), " Việc huỷ dịch vụ Backup sẽ xóa toàn bộ dữ liệu đã được sao lưu, đồng thời hủy tất cả các job backup hiện có. Sau khi xóa, bạn không thể thực hiện restore hoặc khôi phục cơ sở dữ liệu theo thời điểm (PITR)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để huỷ dịch vụ Backup, tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Backup"
      }), " (biểu tượng hình thùng rác) cạnh section ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Service"
      }), " để mở hộp thoại xác nhận xoá. Nhập “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delete"
      }), " ” và bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để xác nhận huỷ dịch vụ backup. Quá trình này có thể kéo dài từ 5–10 phút, trong thời gian này dịch vụ Backup sẽ hiển thị trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deleting"
      }), ". Sau khi xử lý thành công, dịch vụ sẽ chuyển về trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-restore",
        children: " Previous Backup & Restore "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-job-mgmt",
        children: " Next Quản lý Job Backup "
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

/***/ 91489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15ed20cd51c9-DBaaS_BackupDB_enable-e1764561767179-03ff098fb9144cf74fc6d1c1d9e15be1.png");

/***/ },

/***/ 729028
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5a5defe2ec02-DBaaS_BackupDB_view_inactive-scaled-9e8bc0831f913917c46b5f19df2fb1ac.png");

/***/ },

/***/ 921888
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d646a9780b45-DBaaS_BackupDB_edit_popup-e1764562966549-bc119d77cacd4e3689e1e9c4a0653cf9.png");

/***/ },

/***/ 943836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fb3b9b39fc7b-DBaaS_BackupDB_noti_warning-e1764561851116-5fee31a347c2dea3a24568bd5f002281.png");

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