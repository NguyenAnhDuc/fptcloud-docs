"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[11562],{

/***/ 372554
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_incident_management_incidents_filter_incidents_md_afc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-incident-management-incidents-filter-incidents-md-afc.json
const site_docs_incident_management_incidents_filter_incidents_md_afc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"incident-management/incidents/filter-incidents","title":"2. Incident Management","description":"Search/Filter incidents","source":"@site/docs/incident-management/incidents/filter-incidents.md","sourceDirName":"incident-management/incidents","slug":"/incident-management/incidents/filter-incidents","permalink":"/incident-management/incidents/filter-incidents","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Filter incidents","title":"2. Incident Management","source":"https://fptcloud.com/documents/incident-management/?doc=filter-incidents","parent":"https://fptcloud.com/documents/incident-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Declare incident","permalink":"/incident-management/incidents/declare-incident"},"next":{"title":"Incident label","permalink":"/incident-management/incidents/incident-label"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/incident-management/incidents/filter-incidents.md


const frontMatter = {
	sidebar_label: 'Filter incidents',
	title: '2. Incident Management',
	source: 'https://fptcloud.com/documents/incident-management/?doc=filter-incidents',
	parent: 'https://fptcloud.com/documents/incident-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Incident Management';

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
        id: "2-incident-management",
        children: "2. Incident Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search/Filter incidents"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cho phép người dùng tìm kiếm hoặc lọc incident theo các tiêu chí: tên sự cố, thời gian khai báo, theo severity, status, label của incident."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn danh sách Incident, người dùng nhập tên từ khóa incident vào thanh “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search by title"
      }), " ”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(88592)/* ["default"] */ .A) + "",
        width: "1434",
        height: "174"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enter"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này hệ thống sẽ trả ra danh sách incident có tilte chứa từ khóa tìm kiếm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hoặc người dùng có thể lọc incident theo khoảng thời gian. Các bước thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn danh sách Incident, người dùng click vào ô bên cạnh thanh tìm kiếm, mặc định giá trị được chọn là “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last 30 days"
      }), " ” tức là danh sách incident được tạo trong 30 ngày gần nhất."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(84417)/* ["default"] */ .A) + "",
        width: "1421",
        height: "188"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Người dùng có thể chọn thời gian theo mong muốn và click vào nút “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply time range"
      }), " ”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(687260)/* ["default"] */ .A) + "",
        width: "1007",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này hệ thống sẽ trả ra danh sách incidents được tạo trong khoảng thời gian đó."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ngoài ra, người dùng có thể lọc incident theo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity, Status, Labels"
      }), " bằng cách click vào ô “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Filters"
      }), " ” và chọn các tiêu chí mong muốn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(370910)/* ["default"] */ .A) + "",
        width: "542",
        height: "544"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa filter, người dùng nhấn nút “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clear all filters"
      }), " ”. Hệ thống sẽ trả ra toàn bộ các incident đã tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(287777)/* ["default"] */ .A) + "",
        width: "671",
        height: "228"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-tri-incident",
        children: " Previous Quản trị incident "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-chi-tiet-incident",
        children: " Next Xem chi tiết incident "
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

/***/ 370910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0d12e8d917af-Screenshot_18-1-7410696f12110737148ba6a35b4c9099.png");

/***/ },

/***/ 84417
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7d52cb46aec1-Screenshot_16-1-569556788c8018d563d0fef7de3976ee.png");

/***/ },

/***/ 287777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/96822bc563a5-Screenshot_19-1-34963ab4a5a969380650aedb85d86d67.png");

/***/ },

/***/ 88592
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9ecf73635189-Screenshot_15-1-101ffc33a3ad730d67ca47c8a0b4ee58.png");

/***/ },

/***/ 687260
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bdac4b1c710c-Screenshot_17-1-5ae0fde8b3c667c5ff7916d7ea458259.png");

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