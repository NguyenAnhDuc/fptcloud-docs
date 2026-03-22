"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[36593],{

/***/ 129616
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_deactive_db_service_md_20c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-deactive-db-service-md-20c.json
const site_docs_managed_fpt_database_engines_new_deactive_db_service_md_20c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/deactive-db-service","title":"2. Managed – FPT Database Engines","description":"Huỷ kích hoạt dịch vụ FPT Database Engine","source":"@site/docs/managed-fpt-database-engines-new/deactive-db-service.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/deactive-db-service","permalink":"/managed-fpt-database-engines-new/deactive-db-service","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Deactive db service","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=deactive-db-service","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Db view detail","permalink":"/managed-fpt-database-engines-new/db-view-detail"},"next":{"title":"Deployment model","permalink":"/managed-fpt-database-engines-new/deployment-model"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/deactive-db-service.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Deactive db service',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=deactive-db-service',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập trang Quản lý cơ sở dữ liệu",
  "id": "bước-1-truy-cập-trang-quản-lý-cơ-sở-dữ-liệu",
  "level": 3
}, {
  "value": "Bước 2: Huỷ kích hoạt dịch vụ FPT Database Engine",
  "id": "bước-2-huỷ-kích-hoạt-dịch-vụ-fpt-database-engine",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
      children: "Huỷ kích hoạt dịch vụ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Việc huỷ kích hoạt dịch vụ FPT Database Engine sẽ ngừng toàn bộ khả năng tạo và quản lý cơ sở dữ liệu trong phạm vi VPC đã chọn. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thao tác này chỉ có thể thực hiện khi không còn cơ sở dữ liệu nào tồn tại trong VPC"
      }), ". Các bước thực hiện như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-cơ-sở-dữ-liệu",
      children: "Bước 1: Truy cập trang Quản lý cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Databases"
      }), ". Giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Engine Management"
      }), " sẽ hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(660647)/* ["default"] */ .A) + "",
        width: "2560",
        height: "900"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-huỷ-kích-hoạt-dịch-vụ-fpt-database-engine",
      children: "Bước 2: Huỷ kích hoạt dịch vụ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Engine Management"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deactivate"
      }), " để huỷ kích hoạt dịch vụ. Hệ thống sẽ chuyển sang màn hình xử lý huỷ kích hoạt. Quá trình này có thể mất khoảng 8–10 phút để hoàn tất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi huỷ kích hoạt, trạng thái dịch vụ sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inactive"
      }), " , và toàn bộ thao tác của dịch vụ FPT Database Engine sẽ bị chặn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./active-db-service",
        children: " Previous Kích hoạt dịch vụ FPT Database Engine "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./db-manage-operate",
        children: " Next Khởi tạo và vận hành cơ sở dữ liệu "
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

/***/ 660647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad13f2c5cb03-deactive-FDE-scaled-01d8eb97f2790604775f7ddd7881926d.png");

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