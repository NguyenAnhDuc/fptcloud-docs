"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[55275],{

/***/ 553163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_khoi_tao_canh_bao_object_storage_md_26c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-khoi-tao-canh-bao-object-storage-md-26c.json
const site_docs_cloud_guard_khoi_tao_canh_bao_object_storage_md_26c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/khoi-tao-canh-bao-object-storage","title":"2. FPT Cloud Guard","description":"Khởi tạo cảnh báo cho Object Storage","source":"@site/docs/cloud-guard/khoi-tao-canh-bao-object-storage.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/khoi-tao-canh-bao-object-storage","permalink":"/cloud-guard/khoi-tao-canh-bao-object-storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Khoi tao canh bao object storage","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-object-storage","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/khoi-tao-canh-bao-object-storage.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Khoi tao canh bao object storage',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-object-storage',
	parent: 'https://fptcloud.com/documents/cloud-guard',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

const assets = {

};



const toc = [{
  "value": "Bước 1: Ở menu chọn Security &gt; Cloud Guard, mở tab Resource Alerts và chọn Create Alert.",
  "id": "bước-1-ở-menu-chọn-security--cloud-guard-mở-tab-resource-alerts-và-chọn-create-alert",
  "level": 4
}, {
  "value": "Bước 2: Chọn người nhận cảnh báo hoặc chọn Create recipient here để tạo người nhận mức Tenant",
  "id": "bước-2-chọn-người-nhận-cảnh-báo-hoặc-chọn-create-recipient-here-để-tạo-người-nhận-mức-tenant",
  "level": 4
}, {
  "value": "Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create",
  "id": "bước-3-quay-trở-lại-màn-tạo-alert-chọn-người-nhận-mới-tạo-và-nhấn-create",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo cảnh báo cho Object Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-ở-menu-chọn-security--cloud-guard-mở-tab-resource-alerts-và-chọn-create-alert",
      children: "Bước 1: Ở menu chọn Security > Cloud Guard, mở tab Resource Alerts và chọn Create Alert."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thực hiện tạo cảnh báo cho dịch vụ Object Storage đang sử dụng, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(688434)/* ["default"] */ .A) + "",
        width: "1905",
        height: "962"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric Type"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply to"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity"
      }), " ,cấu hình điều kiện cảnh báo tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure Condition"
      }), " và chọn người nhận cảnh báo tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notify to"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Lưu ý: Đối với các cảnh báo cho Object Storage, người nhận cảnh báo phải là Recipient mức Tenant, những Recipient này sẽ được sử dụng chung cho các VPC thuộc Tenant tạo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-chọn-người-nhận-cảnh-báo-hoặc-chọn-create-recipient-here-để-tạo-người-nhận-mức-tenant",
      children: "Bước 2: Chọn người nhận cảnh báo hoặc chọn Create recipient here để tạo người nhận mức Tenant"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(845680)/* ["default"] */ .A) + "",
        width: "1920",
        height: "962"
      }), " Tích chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tenant-level recipient"
      }), " để tạo người nhận cho cả Tenant"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-3-quay-trở-lại-màn-tạo-alert-chọn-người-nhận-mới-tạo-và-nhấn-create",
      children: "Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(948514)/* ["default"] */ .A) + "",
        width: "1920",
        height: "964"
      }), " Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-canh-bao-virtual-machine",
        children: " Previous Khởi tạo cảnh báo cho Virtual Machine (VM) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./khoi-tao-canh-bao-load-balancer",
        children: " Next Khởi tạo cảnh báo cho Load Balancer "
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

/***/ 688434
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27725bb45f49-image-1696235964781-7280615f61a7f20f67b47cbc2ad34f71.png");

/***/ },

/***/ 845680
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9bb270d8874b-image-1696236659925-04054645ef5fff354904278e8ed68f6d.png");

/***/ },

/***/ 948514
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bfaa420dc3d6-image-1696237048466-be89006897fbb137ce5c53fbe4dddfa9.png");

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