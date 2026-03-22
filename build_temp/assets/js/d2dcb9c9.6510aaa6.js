"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[16265],{

/***/ 385198
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_backup_restore_backup_job_mgmt_md_d2d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-backup-restore-backup-job-mgmt-md-d2d.json
const site_docs_managed_fpt_database_engines_new_backup_restore_backup_job_mgmt_md_d2d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/backup-restore/backup-job-mgmt","title":"2. Managed – FPT Database Engines","description":"Quản lý Job Backup","source":"@site/docs/managed-fpt-database-engines-new/backup-restore/backup-job-mgmt.md","sourceDirName":"managed-fpt-database-engines-new/backup-restore","slug":"/managed-fpt-database-engines-new/backup-restore/backup-job-mgmt","permalink":"/managed-fpt-database-engines-new/backup-restore/backup-job-mgmt","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Backup job mgmt","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-job-mgmt","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Backup & Restore","permalink":"/managed-fpt-database-engines-new/backup-restore/"},"next":{"title":"Backup mgmt","permalink":"/managed-fpt-database-engines-new/backup-restore/backup-mgmt"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/backup-restore/backup-job-mgmt.md


const frontMatter = {
	sidebar_label: 'Backup job mgmt',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-job-mgmt',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Tạo Job Backup Full",
  "id": "1-tạo-job-backup-full",
  "level": 3
}, {
  "value": "2. Tạo Job Backup Diff",
  "id": "2-tạo-job-backup-diff",
  "level": 3
}, {
  "value": "Khuyến nghị",
  "id": "khuyến-nghị",
  "level": 4
}, {
  "value": "Điều kiện tiên quyết",
  "id": "điều-kiện-tiên-quyết",
  "level": 4
}, {
  "value": "Tạo Job",
  "id": "tạo-job",
  "level": 4
}, {
  "value": "3. Chạy Job Backup",
  "id": "3-chạy-job-backup",
  "level": 3
}, {
  "value": "4. Cập nhật Job Backup",
  "id": "4-cập-nhật-job-backup",
  "level": 3
}, {
  "value": "5. Xoá Job Backup",
  "id": "5-xoá-job-backup",
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
      children: "Quản lý Job Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này hướng dẫn người dùng các bước chi tiết để thực hiện các nghiệp vụ liên quan đến quản lý backup job, bao gồm tạo job Full Backup, tạo job Differential Backup, chạy, cập nhật và xoá backup job."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tạo-job-backup-full",
      children: "1. Tạo Job Backup Full"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện sao lưu (backup) cho cơ sở dữ liệu, sau khi kích hoạt dịch vụ backup, bạn cần tạo một job để chạy sao lưu toàn bộ cơ sở dữ liệu định kỳ. Thực hiện theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Full Backup Job"
      }), " (biểu tượng dấu cộng trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Backup Job"
      }), ") để bắt đầu tạo job sao lưu toàn bộ cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hộp thoại cấu hình job hiển thị như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463831)/* ["default"] */ .A) + "",
        width: "1254",
        height: "563"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả ý nghĩa và cách điền giá trị cho các trường trên màn hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Job Name"
        }), " : Nhập tên job backup, với độ dài từ 6–25 ký tự và chỉ được chứa chữ cái, chữ số, khoảng trắng, dấu gạch ngang (-) và dấu gạch dưới (_)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Retention"
        }), " : Nhập số lượng bản backup cần lưu giữ với giá trị là một số nguyên dương. Khi một bản backup full bị xóa theo chính sách lưu trữ thì tất cả các bản backup different và archived log đi theo nó sẽ bị xóa hoàn toàn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hour / Minute / Day of Week"
        }), " : Thiết lập lịch chạy backup (giờ, phút, ngày trong tuần). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Lưu ý"
        }), " : Đối với engine Kafka, thao tác backup có thể gây gián đoạn tạm thời. Bạn nên lên lịch chạy backup vào khung thời gian ít tải để hạn chế ảnh hưởng đến dịch vụ."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi điền đầy đủ thông tin, bạn có thể nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để tạo job sao lưu mới. Quá trình này kéo dài từ 5 - 10 phút và sẽ hiển thị job backup ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating"
      }), ". Sau khi tạo thành công, job backup hiển thị ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ready"
      }), " với các thông số đã thiết lập cho job và sẵn sàng chạy backup toàn bộ cơ sở dữ liệu theo lịch đã thiết lập."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tạo-job-backup-diff",
      children: "2. Tạo Job Backup Diff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "khuyến-nghị",
      children: "Khuyến nghị"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud khuyến nghị khách hàng cấu hình lịch sao lưu sao cho mỗi tuần có ít nhất một bản Full Backup và thực hiện Differential Backup vào các ngày còn lại, đặc biệt đối với các cơ sở dữ liệu có dung lượng lớn."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng phải tạo job Full Backup trước khi có thể tạo job Differential Backup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tạo-job",
      children: "Tạo Job"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo Differential Backup Job nhằm sao lưu các thay đổi của cơ sở dữ liệu, tại màn hình quản lý dịch vụ Backup, nhấp vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Diff Backup Job"
      }), " (biểu tượng dấu cộng trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diff Backup Job"
      }), ") để mở hộp thoại cấu hình job."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước cấu hình tương tự như khi tạo Full Backup Job."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Chính sách retention của Differential Backup sẽ tuân theo retention của Full Backup Job tương ứng. Khi một bản Full Backup bị xoá theo chính sách lưu trữ, tất cả các Differential Backup liên quan cũng sẽ bị xoá hoàn toàn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-chạy-job-backup",
      children: "3. Chạy Job Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông thường, sau khi được thiết lập thành công, job backup sẽ tự động chạy định kỳ theo lịch đã cài đặt và tạo ra các bản sao lưu (restore points) để phục vụ cho việc khôi phục cơ sở dữ liệu (tham khảo chức năng Restore). Nếu người dùng cần tạo bản snapshot cơ sở dữ liệu, có thể thực hiện chạy job backup theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run Now"
      }), " (biểu tượng mũi tên) tương ứng với job backup cần chạy để bắt đầu thực hiện sao lưu cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hệ thống xuất hiện hộp thoại xác nhận chạy job. Nhập “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "run"
      }), " ” để xác nhận một lần nữa và bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), ". Sau khi thực hiện xong sẽ sinh ra một bản backup tương ứng với một restore point trong màn Restore. Thông tin backup job chạy thành công hay lỗi cũng sẽ được cập nhật tại bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Request"
      }), " trên màn hình quản lý dịch vụ Backup"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Đối với engine Kafka, thao tác backup có thể gây gián đoạn tạm thời. Bạn nên chạy backup vào khung thời gian ít tải để hạn chế ảnh hưởng đến dịch vụ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-cập-nhật-job-backup",
      children: "4. Cập nhật Job Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi cần điều chỉnh các cấu hình đã thiết lập cho backup job, tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Backup Job"
      }), " (biểu tượng bút chì tương ứng với job cần cập nhật) để mở popup cập nhật cấu hình job."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hộp thoại Update Job hiển thị tương tự như khi tạo Backup Job. Cập nhật các thông tin cần thay đổi và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), " để lưu cấu hình mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-xoá-job-backup",
      children: "5. Xoá Job Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa job backup không còn nhu cầu sử dụng, tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Job"
      }), " (biểu tượng thùng rác) tương ứng với job backup cần xoá."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Màn hình xuất hiện popup Delete Backup Job. Nhập thông tin theo yêu cầu và bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để xác nhận xoá job."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Bạn chỉ có thể xóa job backup full khi job backup diff đã được xóa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-mgmt",
        children: " Previous Quản lý dịch vụ Backup "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./on-off-pitr",
        children: " Next Bật/tắt PITR "
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

/***/ 463831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f80ee1efebac-DBaaS_BackupDB_full_bk_job_add_popuo-08d388aded59caf683ac952e016f12d1.png");

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