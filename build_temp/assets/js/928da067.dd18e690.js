"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[62196],{

/***/ 955192
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_quan_ly_teams_org_md_928_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-quan-ly-teams-org-md-928.json
const site_docs_fpt_appsec_quan_ly_teams_org_md_928_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/quan-ly-teams-org","title":"2. FPT AppSec","description":"Quản lý Teams","source":"@site/docs/fpt-appsec/quan-ly-teams-org.md","sourceDirName":"fpt-appsec","slug":"/fpt-appsec/quan-ly-teams-org","permalink":"/fpt-appsec/quan-ly-teams-org","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly teams org","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=quan-ly-teams-org","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly team","permalink":"/fpt-appsec/quan-ly-team"},"next":{"title":"Schedule delete","permalink":"/fpt-appsec/schedule-delete"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/quan-ly-teams-org.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly teams org',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=quan-ly-teams-org',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Tạo Team mới",
  "id": "1-tạo-team-mới",
  "level": 2
}, {
  "value": "2. Tạo Sub-team",
  "id": "2-tạo-sub-team",
  "level": 2
}, {
  "value": "3. Edit Teams",
  "id": "3-edit-teams",
  "level": 2
}, {
  "value": "4. Delete Teams",
  "id": "4-delete-teams",
  "level": 2
}, {
  "value": "5. Disable Teams",
  "id": "5-disable-teams",
  "level": 2
}, {
  "value": "6. Enable Teams",
  "id": "6-enable-teams",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "2-fpt-appsec",
        children: "2. FPT AppSec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Teams"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Organization"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(151830)/* ["default"] */ .A) + "",
        width: "1919",
        height: "904"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại đây, bạn có thể xem các thông tin như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Number of Members"
      }), " ,", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created at"
      }), " và có thể dựa vào các thông tin trên để tìm kiếm và thực hiện các thao tác khác lên đội nhóm như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Team"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Sub-team"
      }), " ,", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable/Enable"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tạo-team-mới",
      children: "1. Tạo Team mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create team"
      }), " ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Teams"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(981045)/* ["default"] */ .A) + "",
        width: "1208",
        height: "555"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền hết thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parent Org Unit"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(310282)/* ["default"] */ .A) + "",
        width: "1199",
        height: "631"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tạo-sub-team",
      children: "2. Tạo Sub-team"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Sub-team"
      }), " ở phần Action của Team"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(795131)/* ["default"] */ .A) + "",
        width: "1234",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền hết thông tin như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Description"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parent Org Unit"
      }), " và sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(504911)/* ["default"] */ .A) + "",
        width: "1209",
        height: "616"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-edit-teams",
      children: "3. Edit Teams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " ở phần Action của Team"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(385836)/* ["default"] */ .A) + "",
        width: "1234",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền hết thông tin như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Description"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parent Org Unit"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(917449)/* ["default"] */ .A) + "",
        width: "1198",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-delete-teams",
      children: "4. Delete Teams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Team Manager"
      }), " có quyền chỉnh sửa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " ở phần Action của Team"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(613794)/* ["default"] */ .A) + "",
        width: "1234",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delete"
      }), " và sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(101727)/* ["default"] */ .A) + "",
        width: "695",
        height: "406"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-disable-teams",
      children: "5. Disable Teams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " có quyền chỉnh sửa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " ở phần Action của Team"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(621064)/* ["default"] */ .A) + "",
        width: "1234",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Điền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disable"
      }), " và sau đó nhấn", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(494322)/* ["default"] */ .A) + "",
        width: "830",
        height: "423"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-enable-teams",
      children: "6. Enable Teams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " có quyền chỉnh sửa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Nhấn vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable"
      }), " ở phần Action của Team"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(799990)/* ["default"] */ .A) + "",
        width: "1219",
        height: "548"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(718583)/* ["default"] */ .A) + "",
        width: "502",
        height: "265"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-role",
        children: " Previous Quản lý Roles "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-team",
        children: " Next Team Management - Quản lý Team "
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

/***/ 101727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/031a46c87389-DETO2-a262a8aa2a2f19f98a56210fe9ec5861.png");

/***/ },

/***/ 917449
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/285e9fb44ede-EDO2-585ed6cc2934f6d96a7d835fe60fb6e9.png");

/***/ },

/***/ 795131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/411e33b49e12-CST1-939fc446ec775153e5174d431931ec86.png");

/***/ },

/***/ 151830
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4890d1ae399e-ot1-6c2efef53f8b825b7da62d60a2daee6f.png");

/***/ },

/***/ 718583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/570ad3a9c1b0-En2-1-d77c1578eed958ba34b2f632b5b857f8.png");

/***/ },

/***/ 504911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6ab10ae39887-CST2-7f9e3d1ada5b8dd49ff4f54b2730651c.png");

/***/ },

/***/ 799990
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7958e94c001e-En1-1-1d2a719bbaa2db11e848834c94aeea3c.png");

/***/ },

/***/ 621064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7f086bfe6924-DTO-36316a0e75098fd69adaed3f7f8df53f.png");

/***/ },

/***/ 310282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8455b3c6ac34-CT2-e4a3440aaf0003803cd09ec86d551fdb.png");

/***/ },

/***/ 981045
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9725d6d46f22-CT1-02bad3bb62e4a16b6f440a18f757d9c9.png");

/***/ },

/***/ 613794
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9a2f3ce9ad63-DETO-8a92924c895aa7276af27ec9ea544a98.png");

/***/ },

/***/ 385836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d1cc8e5e8c29-EDO-05867fae3cc6effaa1d3c12d3250ff8c.png");

/***/ },

/***/ 494322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fe8efa0796ca-DTO2-eb9e6d955607b46f22fc7123f1412565.png");

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