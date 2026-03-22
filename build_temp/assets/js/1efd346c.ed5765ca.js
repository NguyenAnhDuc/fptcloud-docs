"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[1379],{

/***/ 621503
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_restore_lai_vm_tu_cac_restore_point_md_1ef_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-restore-lai-vm-tu-cac-restore-point-md-1ef.json
const site_docs_backup_restore_lai_vm_tu_cac_restore_point_md_1ef_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/restore-lai-vm-tu-cac-restore-point","title":"Restore lại VM từ các Restore Point","description":"*","source":"@site/docs/backup/restore-lai-vm-tu-cac-restore-point.md","sourceDirName":"backup","slug":"/backup/restore-lai-vm-tu-cac-restore-point","permalink":"/backup/restore-lai-vm-tu-cac-restore-point","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Restore lại VM từ các Restore Point","title":"Restore lại VM từ các Restore Point","source":"https://fptcloud.com/documents/backup/?doc=restore-lai-vm-tu-cac-restore-point","parent":"https://fptcloud.com/documents/backup","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý Backup job","permalink":"/backup/quan-ly-backup-job"},"next":{"title":"Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo?","permalink":"/backup/tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/restore-lai-vm-tu-cac-restore-point.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Restore lại VM từ các Restore Point',
	title: 'Restore lại VM từ các Restore Point',
	source: 'https://fptcloud.com/documents/backup/?doc=restore-lai-vm-tu-cac-restore-point',
	parent: 'https://fptcloud.com/documents/backup',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Restore lại VM từ các Restore Point';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "restore-lại-vm-từ-các-restore-point",
        children: "Restore lại VM từ các Restore Point"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các VM được bảo vệ bởi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Job"
      }), " bằng cách tạo định kỳ các Restore Point ở thời điểm hệ thống chạy ổn định. Trong trường hợp hệ thống có vấn đề, bạn chỉ cần restore lại VM về thời điểm chạy ổn định gần nhất. Để restore lại VM từ các Restore Point, bạn hãy thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup & Recovery"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup & Recovery Management"
      }), ". Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), ". Ở đây sẽ hiển thị các VM đang được bảo vệ và số lượng Restore Point đã được tạo thành công trước đấy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của VM cần restore, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance restore"
      }), " sẽ hiển thị các thông tin quan trọng như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance name"
      }), " và list ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore Point"
      }), " của VM đấy. Bạn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore Point"
      }), " cần restore về và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore Instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Một hộp thoại cảnh báo sẽ hiện lên, yêu cầu người dùng xác nhận. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore Instance"
      }), " để tiến hành khôi phục lại VM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-backup-job",
        children: " Previous Quản lý Backup job "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./clone-vm-tu-cac-restore-point",
        children: " Next Tạo VM mới từ các Restore Point "
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