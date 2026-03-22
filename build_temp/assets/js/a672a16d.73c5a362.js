"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[73325],{

/***/ 633771
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_on_off_pitr_md_a67_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-on-off-pitr-md-a67.json
const site_docs_managed_fpt_database_engines_new_on_off_pitr_md_a67_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/on-off-pitr","title":"2. Managed – FPT Database Engines","description":"Bật/tắt PITR","source":"@site/docs/managed-fpt-database-engines-new/on-off-pitr.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/on-off-pitr","permalink":"/managed-fpt-database-engines-new/on-off-pitr","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"On off pitr","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=on-off-pitr","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Notification","permalink":"/managed-fpt-database-engines-new/notification"},"next":{"title":"Parameter","permalink":"/managed-fpt-database-engines-new/parameter"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/on-off-pitr.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'On off pitr',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=on-off-pitr',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Bật PITR",
  "id": "1-bật-pitr",
  "level": 3
}, {
  "value": "Điều kiện tiên quyết:",
  "id": "điều-kiện-tiên-quyết",
  "level": 4
}, {
  "value": "Thao tác thực hiện:",
  "id": "thao-tác-thực-hiện",
  "level": 4
}, {
  "value": "2. Tắt PITR",
  "id": "2-tắt-pitr",
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
    p: "p",
    strong: "strong",
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
      children: "Bật/tắt PITR"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Point-in-Time Recovery (PITR)"
      }), " cho phép người dùng khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ, giúp đảm bảo tính liên tục và độ tin cậy của dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hiện tại, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud hỗ trợ PITR cho engine PostgreSQL"
      }), ". Phần hướng dẫn này cung cấp các bước chi tiết để bật hoặc tắt chức năng PITR cho PostgreSQL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-bật-pitr",
      children: "1. Bật PITR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể bật chức năng PITR cho PostgreSQL ngay khi kích hoạt dịch vụ Backup (tham khảo chi tiết tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=backup-mgmt#contentify_0",
        children: "Kích hoạt dịch vụ Backup"
      }), ") hoặc bật sau khi dịch vụ Backup đã được kích hoạt theo hướng dẫn bên dưới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kích hoạt PITR, cơ sở dữ liệu bắt buộc phải có ít nhất một job backup full đã được tạo. Vui lòng cấu hình job backup full trước khi tiếp tục bật PITR."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp bật PITR khi chưa cấu hình Full Backup Job, hệ thống sẽ hiển thị hộp thoại cảnh báo như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(389265)/* ["default"] */ .A) + "",
        width: "630",
        height: "273"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure Now"
      }), " để hoàn tất việc tạo job backup full trước khi tiếp tục thao tác kích hoạt PITR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "thao-tác-thực-hiện",
      children: "Thao tác thực hiện:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable PITR"
      }), " (biểu tượng hình răng cưa bên cạnh trạng thái PITR):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(175712)/* ["default"] */ .A) + "",
        width: "1632",
        height: "1343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ hiển thị hộp thoại xác nhận:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284909)/* ["default"] */ .A) + "",
        width: "630",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc bật PITR sẽ làm tăng dung lượng lưu trữ sử dụng và phát sinh thêm chi phí. Người dùng cần đánh giá và dự trù dung lượng phát sinh trước khi tiếp tục."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để bật tính năng, chọn checkbox xác nhận và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hoàn tất, tính năng PITR chưa có hiệu lực ngay mà cần chờ hệ thống tạo Full Backup tiếp theo. Khi PITR đã sẵn sàng, người dùng có thể khôi phục cơ sở dữ liệu về bất kỳ thời điểm nào kể từ mốc Full Backup đó. Các thay đổi dữ liệu phát sinh trước thời điểm Full Backup này sẽ không nằm trong phạm vi bảo vệ của PITR và không thể khôi phục."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tắt-pitr",
      children: "2. Tắt PITR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tắt chức năng PITR, tại màn hình quản lý dịch vụ Backup, nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disbale PITR"
      }), " (biểu tượng hình răng cưa bên cạnh trạng thái PITR). Hệ thống hiển thị hộp thoại xác nhận:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(992419)/* ["default"] */ .A) + "",
        width: "628",
        height: "557"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disable"
      }), " ” và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để xác nhận. Sau khi PITR bị tắt, người dùng không thể khôi phục cơ sở dữ liệu về các thời điểm trong quá khứ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-job-mgmt",
        children: " Previous Quản lý Job Backup "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-db",
        children: " Next Khôi phục cơ sở dữ liệu "
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

/***/ 284909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0e361ade26d7-DBaaS_BackupDB_pitr_enable_popup-b3c7046245f647ad5be599c96328567c.png");

/***/ },

/***/ 389265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 992419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/385a70dad41a-DBaaS_BackupDB_pitr_disable_popup-ef13ab1f836fc7c3d8aadb18e2e0fbb8.png");

/***/ },

/***/ 175712
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bec47e5a2042-DBaaS_BackupDB_pitr_enable-f8959d0aed6a3275286d6e7195beed56.png");

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