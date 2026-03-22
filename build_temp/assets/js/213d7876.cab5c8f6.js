"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[48455],{

/***/ 81612
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_storage_gan_storage_disk_vao_may_ao_md_213_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-storage-gan-storage-disk-vao-may-ao-md-213.json
const site_docs_cloud_server_storage_gan_storage_disk_vao_may_ao_md_213_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/storage/gan-storage-disk-vao-may-ao","title":"Gắn Storage Disk vào máy ảo","description":"*","source":"@site/docs/cloud-server/storage/gan-storage-disk-vao-may-ao.md","sourceDirName":"cloud-server/storage","slug":"/cloud-server/storage/gan-storage-disk-vao-may-ao","permalink":"/cloud-server/storage/gan-storage-disk-vao-may-ao","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Gắn Storage Disk vào máy ảo","title":"Gắn Storage Disk vào máy ảo","source":"https://fptcloud.com/documents/cloud-server/?doc=gan-storage-disk-vao-may-ao","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Edit Storage Disk","permalink":"/cloud-server/storage/edit-storage-disk"},"next":{"title":"Gỡ Storage Disk khỏi máy ảo","permalink":"/cloud-server/storage/go-storage-disk-khoi-may-ao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/storage/gan-storage-disk-vao-may-ao.md


const frontMatter = {
	sidebar_label: 'Gắn Storage Disk vào máy ảo',
	title: 'Gắn Storage Disk vào máy ảo',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=gan-storage-disk-vao-may-ao',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Gắn Storage Disk vào máy ảo';

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
        id: "gắn-storage-disk-vào-máy-ảo",
        children: "Gắn Storage Disk vào máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo xong, đối với những storage disk chưa có máy ảo người dùng có thể gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk"
      }), " vào một máy ảo để có thể sử dụng. Storage Disk có thể gắn với tất cả các hệ điều hành đang hỗ trợ trên FPT Cloud. Thao tác này tương tự việc ười dùng gắn một ổ cứng rời vào máy vật lý."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk"
      }), " cần gắn vào máy ảo. Sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attach"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(533078)/* ["default"] */ .A) + "",
        width: "940",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn máy ảo cần gắn trong trong popup và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attach"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(10228)/* ["default"] */ .A) + "",
        width: "940",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mỗi Storage Disk chỉ gắn được vào một máy ảo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sau khi gắn vào máy ảo, với các máy chạy hệ điều hành Window sẽ cần thêm một số bước cấu hình thì mới sử dụng được ổ đĩa tạo ra bởi Storage Disk."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-storage-disk",
        children: " Previous Tạo Storage Disk "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-o-dia-cho-may-ao-chay-windows",
        children: " Next Cấu hình ổ đĩa cho máy ảo chạy Windows "
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

/***/ 533078
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10c0d6dfc6d9-image-1712215517268-b39e52aa98a31c49720ed21a1a00ea8f.png");

/***/ },

/***/ 10228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f47bb2485794-image-1712215524338-c93adfc01fdde22d3d26727ccd723118.png");

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