"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[14264],{

/***/ 224311
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_cdc_service_xoa_connector_md_e70_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-cdc-service-xoa-connector-md-e70.json
const site_docs_fpt_data_platform_cdc_service_xoa_connector_md_e70_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/cdc-service/xoa-connector","title":"2. FPT Data Platform","description":"2.24 Xóa connector","source":"@site/docs/fpt-data-platform/cdc-service/xoa-connector.md","sourceDirName":"fpt-data-platform/cdc-service","slug":"/fpt-data-platform/cdc-service/xoa-connector","permalink":"/fpt-data-platform/cdc-service/xoa-connector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Xoa connector","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=xoa-connector","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xoa cdc service","permalink":"/fpt-data-platform/cdc-service/xoa-cdc-service"},"next":{"title":"Công cụ Phân tích & Trực quan","permalink":"/fpt-data-platform/analytics/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/cdc-service/xoa-connector.md


const frontMatter = {
	sidebar_label: 'Xoa connector',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=xoa-connector',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

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
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.24 Xóa connector"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-condition: Connector ở trạng thái STOPPED"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để xóa Connector, người dùng thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Tại thanh menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Platform"
          }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workspace Management"
          }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workspace name"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Tại phần ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "My services"
          }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CDC service"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Tại màn detail ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CDC service"
          }), " > Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Connectors"
          }), " > chọn connector name > chọn Action > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "image-1",
            src: (__webpack_require__(863511)/* ["default"] */ .A) + "",
            width: "628",
            height: "402"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Hiển thị hôp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete connector"
          }), " > nhập ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          }), " > nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm"
          }), " để xóa connector > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cancel"
          }), " để hủy bỏ thao tác. ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "image-2",
            src: (__webpack_require__(974965)/* ["default"] */ .A) + "",
            width: "318",
            height: "196"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./hanh-dong-voi-connector",
        children: " Previous 2.23 Hành động với connector "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-th%C3%B4ng-tin-snapshot",
        children: " Next 2.25. Xem thông tin snapshot "
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

/***/ 974965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aa627b4033b5-xoa-connector-2-73f8137c5466f71f2ea42d37b85d96d5.png");

/***/ },

/***/ 863511
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/feb820a1de0e-xoa-connector-1-8e6fdcbd031277ff7437ae5067cf6ae5.png");

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