"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[14479],{

/***/ 205390
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_affinity_anti_affinity_create_instance_group_md_5b6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-affinity-anti-affinity-create-instance-group-md-5b6.json
const site_docs_affinity_anti_affinity_create_instance_group_md_5b6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"affinity-anti-affinity/create-instance-group","title":"2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity","description":"Khởi tạo một Instance Group mới","source":"@site/docs/affinity-anti-affinity/create-instance-group.md","sourceDirName":"affinity-anti-affinity","slug":"/affinity-anti-affinity/create-instance-group","permalink":"/affinity-anti-affinity/create-instance-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Create instance group","title":"2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity","source":"https://fptcloud.com/documents/affinity-anti-affinity/?doc=create-instance-group","parent":"https://fptcloud.com/documents/affinity-anti-affinity","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Add instance instance group","permalink":"/affinity-anti-affinity/add-instance-instance-group"},"next":{"title":"Delete instance group","permalink":"/affinity-anti-affinity/delete-instance-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/affinity-anti-affinity/create-instance-group.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Create instance group',
	title: '2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity',
	source: 'https://fptcloud.com/documents/affinity-anti-affinity/?doc=create-instance-group',
	parent: 'https://fptcloud.com/documents/affinity-anti-affinity',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "2-quản-lý-instance-group-với-chính-sách-affinity--anti-affinity",
        children: "2. Quản lý Instance Group với chính sách Affinity & Anti-Affinity"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo một Instance Group mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể khởi tạo một instance group mới với các thao tác đơn giản sau (lưu ý là instance group sau khi tạo ra thì ko thể chỉnh sửa lại được thông tin đã tạo, do đó nếu bạn muốn thay đổi thì hãy xóa nhóm hiện tại & tạo ra một nhóm mới)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(535676)/* ["default"] */ .A) + "",
        width: "940",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin theo yêu cầu của hệ thống:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Name: Tên ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "instance group"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Policy: tùy chọn chính sách ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Soft Affinity"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Soft Anti Affinity"
        }), " để áp dụng cho instance group bạn đang tạo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lưu ý: Bạn có thể tạo tối đa 10 instance groups, và mỗi instance group chỉ có thể gắn với tối đa 10 instances. ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(459073)/* ["default"] */ .A) + "",
          width: "940",
          height: "462"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance group"
      }), ". Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. Nếu thành công, instance group mới sẽ được hiển thị ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group Management"
      }), ". ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(451336)/* ["default"] */ .A) + "",
        width: "939",
        height: "262"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-instance-group",
        children: " Next Xóa một Instance Group "
      })
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

/***/ 451336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b650495332d-image-1705024897223-6f52d8c9b6ef520615620eec6063783f.png");

/***/ },

/***/ 535676
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a55d43465492-image-1705024581953-c1114356079c61a435fa54fa850ca81d.png");

/***/ },

/***/ 459073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f64a0e6f7e37-image-1705024842925-1182613de646212535c43a9e56646d82.png");

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