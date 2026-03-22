"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[3545],{

/***/ 344995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_storage_block_storage_md_916_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-storage-block-storage-md-916.json
const site_docs_cloud_server_storage_block_storage_md_916_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/storage/block-storage","title":"Block Storage","description":"*","source":"@site/docs/cloud-server/storage/block-storage.md","sourceDirName":"cloud-server/storage","slug":"/cloud-server/storage/block-storage","permalink":"/cloud-server/storage/block-storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Block Storage","title":"Block Storage","source":"https://fptcloud.com/documents/cloud-server/?doc=block-storage","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Storage","permalink":"/cloud-server/storage/"},"next":{"title":"Cấu hình ổ đĩa cho máy ảo chạy Windows","permalink":"/cloud-server/storage/cau-hinh-o-dia-cho-may-ao-chay-windows"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/storage/block-storage.md


const frontMatter = {
	sidebar_label: 'Block Storage',
	title: 'Block Storage',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=block-storage',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Block Storage';

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
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "block-storage",
        children: "Block Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Block Storage"
      }), " là dịch vụ cung cấp ổ đĩa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Block Storage"
      }), " sử dụng cho các máy ảo của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Storage được tạo ra bởi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Block Storage"
      }), " sẽ được quản lý tương tự một ổ cứng vật lý khi gắn vào máy ảo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " hiện tại đã có ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk Management"
      }), " giúp người dùng quản lý toàn bộ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk"
      }), " đã tạo trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), ". Người dùng có thể xem danh sách, tạo mới, attach/detach Storage Disk với máy ảo, edit và xóa các Storage Disk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để truy cập vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk Management,"
      }), " người dùng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disks"
      }), " trong nhóm Service ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 55",
        src: (__webpack_require__(270656)/* ["default"] */ .A) + "",
        width: "1024",
        height: "521"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở đây người dùng sẽ thấy danh sách toàn bộ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk"
      }), " đã tạo trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " , ngoài ra còn có các thông tin khác như : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name, Storage type, Size, Created at"
      }), " (Ngày tạo)", (0,jsx_runtime.jsx)(_components.strong, {
        children: ", Attached"
      }), " (máy ảo đang gắn)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 56",
        src: (__webpack_require__(279276)/* ["default"] */ .A) + "",
        width: "1024",
        height: "498"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./hpc-level-2-password",
        children: " Previous Đặt mật khẩu cấp 2 "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-storage-disk",
        children: " Next Tạo Storage Disk "
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

/***/ 270656
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c126930a762-Userguide-FPT-Cloud-Server-2022-55-1024x521-d5eb9c56cb75912f0207d66f010f6879.png");

/***/ },

/***/ 279276
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/abee045fde07-Userguide-FPT-Cloud-Server-2022-56-1024x498-af083715be48aad0b5afdf06955e4d5e.png");

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