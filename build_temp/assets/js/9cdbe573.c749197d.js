"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[94285],{

/***/ 314952
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_quick_starts_create_vm_iso_md_9cd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-quick-starts-create-vm-iso-md-9cd.json
const site_docs_cloud_server_quick_starts_create_vm_iso_md_9cd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/quick-starts/create-vm-iso","title":"Lưu ý khi tạo máy ảo từ file iso","description":"*","source":"@site/docs/cloud-server/quick-starts/create-vm-iso.md","sourceDirName":"cloud-server/quick-starts","slug":"/cloud-server/quick-starts/create-vm-iso","permalink":"/cloud-server/quick-starts/create-vm-iso","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Lưu ý khi tạo máy ảo từ file iso","title":"Lưu ý khi tạo máy ảo từ file iso","source":"https://fptcloud.com/documents/cloud-server/?doc=create-vm-iso","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Clone instance","permalink":"/cloud-server/quick-starts/clone-instance"},"next":{"title":"Lock & Unlock Instance Deletion","permalink":"/cloud-server/quick-starts/lock-unlock-instance-deletion"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/quick-starts/create-vm-iso.md


const frontMatter = {
	sidebar_label: 'Lưu ý khi tạo máy ảo từ file iso',
	title: 'Lưu ý khi tạo máy ảo từ file iso',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=create-vm-iso',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Lưu ý khi tạo máy ảo từ file iso';

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
        id: "lưu-ý-khi-tạo-máy-ảo-từ-file-iso",
        children: "Lưu ý khi tạo máy ảo từ file iso"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại hệ thống Unify Portal hỗ trợ khách hàng tạo máy ảo từ file ISO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1) Các lưu ý khi tạo máy ảo từ file ISO"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khi tạo máy ảo từ file ISO, hệ thống sẽ tự động tạo thêm một ổ đĩa để boot cho ổ Root, không xóa ổ đĩa này khi đang tạo máy ảo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Người dùng cần để trống dung lượng ổ đĩa tối thiểu bằng hoặc lớn hơn dung lượng file ISO, hệ thống sẽ làm tròn đến hàng đơn vị (Ví dụ: file 0.5 GB -> cần 1GB, file 1.5 GB -> cần 2 GB, file 2 GB cần tối thiểu 2 GB)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Xóa ổ đĩa tạm sau khi tạo máy từ file ISO"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng xóa ổ đĩa boot sau khi đã tạo máy thành công. (cần Un-mount ổ đĩa khỏi máy ảo trước khi xóa)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2) Hỗ trợ tính năng sử dụng disk bus SATA cho ổ Root"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống mặc định sử dụng disk bus Virtio cho ổ Root. Tuy nhiên, đối với một số file ISO cũ không được Virtio hỗ trợ, người dùng cần chuyển sang chế độ SATA bằng cách chọn vào ô checkbox tương ứng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Lưu ý rằng việc sử dụng disk bus SATA có thể làm giảm hiệu suất của ổ đĩa, vì vậy chỉ nên sử dụng tính năng này khi file ISO của bạn không tương thích với Virtio. Vui lòng tham khảo hướng dẫn từ nhà sản xuất để chọn chế độ phù hợp."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(381401)/* ["default"] */ .A) + "",
        width: "979",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quick-starts-tao-mot-may-ao",
        children: " Previous Tạo một máy ảo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./clone-instance",
        children: " Next Clone instance "
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

/***/ 381401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13e63751306f-image-1724300919876-3f1890f8b8958e1399315f02f5a5bc73.png");

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