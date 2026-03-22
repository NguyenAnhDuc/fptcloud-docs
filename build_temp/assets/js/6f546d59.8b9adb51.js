"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[24432],{

/***/ 576303
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_instance_group_add_instance_instance_group_md_6f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-instance-group-add-instance-instance-group-md-6f5.json
const site_docs_cloud_server_instance_group_add_instance_instance_group_md_6f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/instance-group/add-instance-instance-group","title":"Gắn máy ảo vào Instance Group","description":"*","source":"@site/docs/cloud-server/instance-group/add-instance-instance-group.md","sourceDirName":"cloud-server/instance-group","slug":"/cloud-server/instance-group/add-instance-instance-group","permalink":"/cloud-server/instance-group/add-instance-instance-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Gắn máy ảo vào Instance Group","title":"Gắn máy ảo vào Instance Group","source":"https://fptcloud.com/documents/cloud-server/?doc=add-instance-instance-group","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Instance Group","permalink":"/category/instance-group"},"next":{"title":"Khởi tạo một Instance Group mới","permalink":"/cloud-server/instance-group/create-instance-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/instance-group/add-instance-instance-group.md


const frontMatter = {
	sidebar_label: 'Gắn máy ảo vào Instance Group',
	title: 'Gắn máy ảo vào Instance Group',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=add-instance-instance-group',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Gắn máy ảo vào Instance Group';

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
        id: "gắn-máy-ảo-vào-instance-group",
        children: "Gắn máy ảo vào Instance Group"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Tính năng áp dụng cho người dùng sử dụng dịch vụ General và Specific."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi người dùng khởi chạy một máy ảo, người dùng có thể truyền thông tin về nhóm máy chủ như một gợi ý để thực hiện việc đặt máy ảo theo chính sách mong muốn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện điều này, người dùng cần tiến hành các thao tác đơn giản sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý là mỗi instance group chỉ có thể gắn với tối đa 10 instances."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " của instance group người dùng muốn đặt máy ảo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(844650)/* ["default"] */ .A) + "",
        width: "975",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), ". Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu thành công, thông tin về instance group sẽ được hiển thị ở trang Instance Detail."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(125661)/* ["default"] */ .A) + "",
        width: "944",
        height: "517"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./edit-instance-group-specific",
        children: " Previous Chỉnh sửa Instance Group "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-instance-group",
        children: " Next Xóa một Instance Group "
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

/***/ 844650
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/851db969500c-image-1744797654950-52dec44584a5e1482b51fd7fbfe706b1.png");

/***/ },

/***/ 125661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b8d4ccac6044-image-1718788554975-d9e16c9206dd00cf728327a14e06a83e.png");

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