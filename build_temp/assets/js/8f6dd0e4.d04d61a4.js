"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[82700],{

/***/ 845839
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_auto_schedule_to_on_off_instance_view_detail_instance_md_8f6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-auto-schedule-to-on-off-instance-view-detail-instance-md-8f6.json
const site_docs_auto_schedule_to_on_off_instance_view_detail_instance_md_8f6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"auto-schedule-to-on-off-instance/view-detail-instance","title":"2. Auto Schedule To On-Off Instance","description":"Xem chi tiết một instance schedule","source":"@site/docs/auto-schedule-to-on-off-instance/view-detail-instance.md","sourceDirName":"auto-schedule-to-on-off-instance","slug":"/auto-schedule-to-on-off-instance/view-detail-instance","permalink":"/auto-schedule-to-on-off-instance/view-detail-instance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"View detail instance","title":"2. Auto Schedule To On-Off Instance","source":"https://fptcloud.com/documents/auto-schedule-to-on-off-instance/?doc=view-detail-instance","parent":"https://fptcloud.com/documents/auto-schedule-to-on-off-instance","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Use instance schedules for virtual machines","permalink":"/auto-schedule-to-on-off-instance/use-instance-schedules-for-virtual-machines"},"next":{"title":"Add instance instance group","permalink":"/affinity-anti-affinity/add-instance-instance-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/auto-schedule-to-on-off-instance/view-detail-instance.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'View detail instance',
	title: '2. Auto Schedule To On-Off Instance',
	source: 'https://fptcloud.com/documents/auto-schedule-to-on-off-instance/?doc=view-detail-instance',
	parent: 'https://fptcloud.com/documents/auto-schedule-to-on-off-instance',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Auto Schedule To On-Off Instance';

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
        id: "2-auto-schedule-to-on-off-instance",
        children: "2. Auto Schedule To On-Off Instance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xem chi tiết một instance schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Schedule Detail"
      }), " bằng cách chọn tên instance schedule trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Schedule Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(362234)/* ["default"] */ .A) + "",
        width: "940",
        height: "237"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Xem và kiểm tra thông tin chi tiết cua instance schedule trong mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      }), " bao gồm: Name, description, start và stop time, start và end date, frequency, tên các máy ảo gắn kèm"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(38576)/* ["default"] */ .A) + "",
        width: "940",
        height: "687"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Xem và kiểm tra thông tin chi tiết của instance schedule trong mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attached instances"
      }), " gồm: Danh sách các máy ảo đính kèm và thông tin cụ thể của từng máy ảo như instance name, instance status, latest start time và status, latest stop time và status"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(846045)/* ["default"] */ .A) + "",
        width: "939",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./create-new-instance",
        children: " Previous Tạo một instance schedule mới "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-instance-schedule",
        children: " Next Xóa một instance schedule "
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

/***/ 38576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03872f17709d-image-1695609025652-3c78f365c435b5ce8b2309ad447a10ea.png");

/***/ },

/***/ 362234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/33ef2b1da0a2-image-1695609011987-02f14d4cf5c5b79151cc42e3bcf21527.png");

/***/ },

/***/ 846045
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7b5310a19712-image-1695609035976-05d5e51467bd5068717da7108056c80f.png");

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