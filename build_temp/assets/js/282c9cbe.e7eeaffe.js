"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[44583],{

/***/ 80082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engine_quan_ly_restore_md_282_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engine-quan-ly-restore-md-282.json
const site_docs_managed_fpt_database_engine_quan_ly_restore_md_282_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engine/quan-ly-restore","title":"2. Managed – FPT Database Engine","description":"Quản lý Restore","source":"@site/docs/managed-fpt-database-engine/quan-ly-restore.md","sourceDirName":"managed-fpt-database-engine","slug":"/managed-fpt-database-engine/quan-ly-restore","permalink":"/managed-fpt-database-engine/quan-ly-restore","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly restore","title":"2. Managed – FPT Database Engine","source":"https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Quan-ly-Restore","parent":"https://fptcloud.com/documents/managed-fpt-database-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly resource","permalink":"/managed-fpt-database-engine/quan-ly-resource"},"next":{"title":"Roles","permalink":"/managed-fpt-database-engine/roles"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engine/quan-ly-restore.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly restore',
	title: '2. Managed – FPT Database Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engine/?doc=Quan-ly-Restore',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
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
        id: "2-managed--fpt-database-engine",
        children: "2. Managed – FPT Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1 Tạo Restore Point"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể sử dụng được tính năng restore, quý khách cần có • Một Database Engine đã được tạo (provision) thành công • Ít nhất một job backup đã được tạo và chạy qua 1 mốc thời gian schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Engine"
      }), " > Chọn một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID Cluster"
      }), " > trên *", (0,jsx_runtime.jsx)(_components.em, {
        children: "Database Detail"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(69603)/* ["default"] */ .A) + "",
        width: "540",
        height: "355"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Sau khi có một bản Backup được chạy, tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Available Restore point"
      }), " hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore Point"
      }), " có một bản ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Type."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["o Job Full sẽ tạo ra 1 restore point với backup type ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["o Job Diff sẽ tạo ra 1 restore point với backup type ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diff"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(938128)/* ["default"] */ .A) + "",
        width: "549",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Tại cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " bấm vào dấu 3 chấm > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167850)/* ["default"] */ .A) + "",
        width: "503",
        height: "185"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228212)/* ["default"] */ .A) + "",
        width: "507",
        height: "186"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Màn hình xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore Database"
      }), " , quý khách có thể lựa chọn cấu hình lại cho Restored Database bằng cấu hình có sẵn Preset Configuration hoặc cấu hình Custom Configuation do khách hàng tự nhập theo quota cho sẵn. • Sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(254562)/* ["default"] */ .A) + "",
        width: "502",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223711)/* ["default"] */ .A) + "",
        width: "480",
        height: "309"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Sau khi một Restore tạo thành công, trên Database Management sẽ xuất hiện Id Cluster mới có tên Restore + tên ID Cluster mới from Id Cluster cũ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129777)/* ["default"] */ .A) + "",
        width: "480",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cap-nhat-va-xoa-backup-service",
        children: " Previous Cập nhật và xóa Backup Service "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-resource",
        children: " Next Quản lý Resource "
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

/***/ 228212
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/028093c262b2-6.3-buoc1.3-830f98476334843469e962817d696dcc.png");

/***/ },

/***/ 69603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0a621b7a000b-6.3_buoc-1-e05a77b3a619743d67461d9e0a15ba83.png");

/***/ },

/***/ 223711
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/42e59be4d554-6.3-buoc1.5-79044e5ed212d4c8005170cb4bf8880e.png");

/***/ },

/***/ 129777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4b4c88c37b56-6.3-buoc1.6-c1587fe71e4d65731af115b05d0232f1.png");

/***/ },

/***/ 938128
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/69d07b9242bb-6.3-buoc1.1-4b1e12c67f9aeb9a8f5fd07cd5d8203e.png");

/***/ },

/***/ 167850
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8262cfcb6ee4-6.3-buoc1.2-1f8209dd36d0d528c9f5dbfb83d233d1.png");

/***/ },

/***/ 254562
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1e933e8f23b-6.3-buoc1.4-23cba983550d6b2859ddbd051ba07a12.png");

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