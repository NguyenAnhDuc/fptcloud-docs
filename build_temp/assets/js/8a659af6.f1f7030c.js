"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26967],{

/***/ 523614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_incremental_backup_la_gi_va_loi_ich_khi_su_dung_md_8a6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-incremental-backup-la-gi-va-loi-ich-khi-su-dung-md-8a6.json
const site_docs_backup_incremental_backup_la_gi_va_loi_ich_khi_su_dung_md_8a6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung","title":"Incremental backup là gì và lợi ích khi sử dụng?","description":"*","source":"@site/docs/backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung.md","sourceDirName":"backup","slug":"/backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung","permalink":"/backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Incremental backup là gì và lợi ích khi sử dụng?","title":"Incremental backup là gì và lợi ích khi sử dụng?","source":"https://fptcloud.com/documents/backup/?doc=incremental-backup-la-gi-va-loi-ich-khi-su-dung","parent":"https://fptcloud.com/documents/backup","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tạo VM mới từ các Restore Point","permalink":"/backup/clone-vm-tu-cac-restore-point"},"next":{"title":"Backup","permalink":"/backup/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Incremental backup là gì và lợi ích khi sử dụng?',
	title: 'Incremental backup là gì và lợi ích khi sử dụng?',
	source: 'https://fptcloud.com/documents/backup/?doc=incremental-backup-la-gi-va-loi-ich-khi-su-dung',
	parent: 'https://fptcloud.com/documents/backup',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Incremental backup là gì và lợi ích khi sử dụng?';

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
        id: "incremental-backup-là-gì-và-lợi-ích-khi-sử-dụng",
        children: "Incremental backup là gì và lợi ích khi sử dụng?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incremental backup"
      }), " là phương thức backup dựa trên nguyên tắc so sánh hệ thống hiện tại với bản backup gần nhất và chỉ lưu trữ lại các dữ liệu có sự thay đổi. Thay vì chụp và lưu trữ lại toàn bộ dữ liệu rất tốn thời gian xử lý như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Backup"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incremental backup"
      }), " giúp tiết kiệm rất nhiều thời gian, hiệu năng xử lý và dung lượng lưu trữ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./toi-duoc-ho-tro-nhung-gi-khi-thue-may-chu-va-dung-dich-vu-backup-tren-fpt-cloud",
        children: " Previous Tôi được hỗ trợ những gì khi thuê máy chủ và dùng dịch vụ Backup trên FPT Cloud? "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao",
        children: " Next Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo? "
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