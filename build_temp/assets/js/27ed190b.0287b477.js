"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70905],{

/***/ 731495
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_container_registry_2_retention_cau_hinh_lap_lich_chay_retention_rule_md_27e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-container-registry-2-retention-cau-hinh-lap-lich-chay-retention-rule-md-27e.json
const site_docs_fpt_container_registry_2_retention_cau_hinh_lap_lich_chay_retention_rule_md_27e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-container-registry-2/retention/cau-hinh-lap-lich-chay-retention-rule","title":"2. FPT Container Registry","description":"Cấu hình lập lịch chạy Retention Rule","source":"@site/docs/fpt-container-registry-2/retention/cau-hinh-lap-lich-chay-retention-rule.md","sourceDirName":"fpt-container-registry-2/retention","slug":"/fpt-container-registry-2/retention/cau-hinh-lap-lich-chay-retention-rule","permalink":"/fpt-container-registry-2/retention/cau-hinh-lap-lich-chay-retention-rule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cau hinh lap lich chay retention rule","title":"2. FPT Container Registry","source":"https://fptcloud.com/documents/fpt-container-registry-2/?doc=cau-hinh-lap-lich-chay-retention-rule","parent":"https://fptcloud.com/documents/fpt-container-registry-2","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Retention Rules","permalink":"/fpt-container-registry-2/retention/"},"next":{"title":"Quan ly retention rule","permalink":"/fpt-container-registry-2/retention/quan-ly-retention-rule"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-container-registry-2/retention/cau-hinh-lap-lich-chay-retention-rule.md


const frontMatter = {
	sidebar_label: 'Cau hinh lap lich chay retention rule',
	title: '2. FPT Container Registry',
	source: 'https://fptcloud.com/documents/fpt-container-registry-2/?doc=cau-hinh-lap-lich-chay-retention-rule',
	parent: 'https://fptcloud.com/documents/fpt-container-registry-2',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Container Registry';

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
        id: "2-fpt-container-registry",
        children: "2. FPT Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình lập lịch chạy Retention Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud cho phép người dùng cấu hình để lập lịch chạy các quy tắc đối với repository. Người dùng có thể thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Container Registry"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348535)/* ["default"] */ .A) + "",
        width: "627",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn tần suất chạy Tag Retention Rule:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(135734)/* ["default"] */ .A) + "",
        width: "627",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có các lựa chọn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "None: Không lập lịch chạy các quy tắc, người dùng vào FPT Container Registry để RUN retentions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hourly: Chạy mỗi giờ một lần"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Daily: Chạy mỗi ngày 1 lần vào lúc 7h00 a.m"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Weekly: Chạy mỗi tuần 1 lần"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Custom: Nhập cron job command để lên lịch chạy quy tắc"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LƯU Ý"
      }), " : ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Nếu bạn xác định nhiều quy tắc, lịch trình sẽ được áp dụng cho tất cả các quy tắc. Bạn không thể lên lịch các quy tắc khác nhau để chạy vào các thời điểm khác nhau."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      }), " : Cấu hình Schedule Custom như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303899)/* ["default"] */ .A) + "",
        width: "627",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu lại quy tắc"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33028)/* ["default"] */ .A) + "",
        width: "627",
        height: "373"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Kết quả sau khi cấu hình lập lịch:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693725)/* ["default"] */ .A) + "",
        width: "627",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-tag-retention-rule",
        children: " Previous Quản lý Tag Retention Rule  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-retention-run",
        children: " Next Quản lý Retention Run  "
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

/***/ 135734
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1535ba88c7cb-Picture44-1-2ecb1ca2c1b6c8a1637063faf5000dcf.png");

/***/ },

/***/ 303899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20717af07c95-Picture45-1-80a138650a900e5861e1767ec8ed3062.png");

/***/ },

/***/ 693725
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/373e4e1a4dc4-Picture47-1-b1c74b5513c4bdc5b59a5dc0449e3afe.png");

/***/ },

/***/ 33028
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c68ab5ea767a-Picture46-1-172e83d7adf6711cbbc31e493b1be1a5.png");

/***/ },

/***/ 348535
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fe4aeec39128-Picture43-1-c1607b196fc87caf6778bdb4e35b0c86.png");

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