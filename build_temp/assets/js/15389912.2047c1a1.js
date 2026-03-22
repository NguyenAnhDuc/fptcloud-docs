"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67615],{

/***/ 390789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_quick_starts_lock_unlock_instance_deletion_md_153_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-quick-starts-lock-unlock-instance-deletion-md-153.json
const site_docs_cloud_server_quick_starts_lock_unlock_instance_deletion_md_153_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/quick-starts/lock-unlock-instance-deletion","title":"Lock & Unlock Instance Deletion","description":"*","source":"@site/docs/cloud-server/quick-starts/lock-unlock-instance-deletion.md","sourceDirName":"cloud-server/quick-starts","slug":"/cloud-server/quick-starts/lock-unlock-instance-deletion","permalink":"/cloud-server/quick-starts/lock-unlock-instance-deletion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Lock & Unlock Instance Deletion","title":"Lock & Unlock Instance Deletion","source":"https://fptcloud.com/documents/cloud-server/?doc=lock-unlock-instance-deletion","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Lưu ý khi tạo máy ảo từ file iso","permalink":"/cloud-server/quick-starts/create-vm-iso"},"next":{"title":"Khởi động lại máy ảo","permalink":"/cloud-server/quick-starts/quick-starts-khoi-dong-lai-may-ao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/quick-starts/lock-unlock-instance-deletion.md


const frontMatter = {
	sidebar_label: 'Lock & Unlock Instance Deletion',
	title: 'Lock & Unlock Instance Deletion',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=lock-unlock-instance-deletion',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Lock & Unlock Instance Deletion';

const assets = {

};



const toc = [{
  "value": "<strong>1. Lock Instance Deletion</strong>",
  "id": "1-lock-instance-deletion",
  "level": 3
}, {
  "value": "<strong>2. Unlock Instance Deletion</strong>",
  "id": "2-unlock-instance-deletion",
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
        id: "lock--unlock-instance-deletion",
        children: "Lock & Unlock Instance Deletion"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể khóa một máy ảo lại để ngăn chúng không bị xóa. Điều này giúp người dùng tránh xóa nhầm một máy ảo đang hoạt động thay vì máy thử nghiệm. Tính năng này giúp giảm rủi ro liên quan đến lỗi người dùng và bảo vệ dữ liệu của người dùng trên các máy ảo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-lock-instance-deletion",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Lock Instance Deletion"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể khóa máy ảo lại để ngăn chúng không bị xóa với các thao tác đơn giản sau."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lock Deletion"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(405728)/* ["default"] */ .A) + "",
        width: "940",
        height: "457"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên máy ảo và yêu cầu người dùng xác nhận. Người dùng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lock Instance Deletion"
      }), " để tiến hành khóa, sau đó hệ thống sẽ khóa máy ảo lại để ngăn ko cho bị xóa khi chưa mở khóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(687628)/* ["default"] */ .A) + "",
        width: "744",
        height: "378"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-unlock-instance-deletion",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Unlock Instance Deletion"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể xóa máy ảo, người dùng cần tiến hành mở khóa trước với các thao tác đơn giản sau."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unlock Deletion"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(399812)/* ["default"] */ .A) + "",
        width: "940",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên máy ảo và yêu cầu người dùng xác nhận. Người dùng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unlock Instance Deletion"
      }), " để tiến hành mở khóa, sau đó hệ thống sẽ mở khóa máy ảo để người dùng có thể xóa máy như bình thường."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(750239)/* ["default"] */ .A) + "",
        width: "744",
        height: "311"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-backup-may-chu-voi-snapshot",
        children: " Previous Backup máy chủ với Snapshot "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-xoa-may-ao",
        children: " Next Xóa máy ảo "
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

/***/ 687628
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/01d185fcaf56-image-1712738219490-0d9cde7344130bacad839f32b9738726.png");

/***/ },

/***/ 399812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17abdc914b7e-image-1712738202636-c72052319a48d2641fe72e6468fb653c.png");

/***/ },

/***/ 405728
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/76b8b81aa4d0-image-1712738228214-e0c4aa5b3eb704913ce06426ae1f2152.png");

/***/ },

/***/ 750239
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/86a7aea29954-image-1712738209302-19e338c7ae003ec8c537eefdc695e0a4.png");

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