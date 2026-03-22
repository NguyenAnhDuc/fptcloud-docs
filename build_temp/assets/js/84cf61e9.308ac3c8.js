"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[48317],{

/***/ 735498
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_guide_dashboard_overview_md_84c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-guide-dashboard-overview-md-84c.json
const site_docs_fpt_appsec_guide_dashboard_overview_md_84c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/guide-dashboard-overview","title":"2. FPT AppSec","description":"Hướng dẫn đọc các số liệu Dashboard - Organization overview","source":"@site/docs/fpt-appsec/guide-dashboard-overview.md","sourceDirName":"fpt-appsec","slug":"/fpt-appsec/guide-dashboard-overview","permalink":"/fpt-appsec/guide-dashboard-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Guide dashboard overview","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=guide-dashboard-overview","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Guide change status issue list","permalink":"/fpt-appsec/guide-change-status-issue-list"},"next":{"title":"Guide fcr","permalink":"/fpt-appsec/guide-fcr"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/guide-dashboard-overview.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Guide dashboard overview',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=guide-dashboard-overview',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Total Teams (Tổng số lượng team)",
  "id": "1-total-teams-tổng-số-lượng-team",
  "level": 2
}, {
  "value": "2. Total Issues (Tổng số issue)",
  "id": "2-total-issues-tổng-số-issue",
  "level": 2
}, {
  "value": "3. Total Assets (Tổng số asset)",
  "id": "3-total-assets-tổng-số-asset",
  "level": 2
}, {
  "value": "4. Total Scan Requests (Tổng số yêu cầu quét)",
  "id": "4-total-scan-requests-tổng-số-yêu-cầu-quét",
  "level": 2
}, {
  "value": "5. Total Issues by Severity (Tổng số issue theo mức độ nghiêm trọng)",
  "id": "5-total-issues-by-severity-tổng-số-issue-theo-mức-độ-nghiêm-trọng",
  "level": 2
}, {
  "value": "6. Total Issues by Scan Type (Tổng số issue theo loại quét)",
  "id": "6-total-issues-by-scan-type-tổng-số-issue-theo-loại-quét",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
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
      children: "Hướng dẫn đọc các số liệu Dashboard - Organization overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Section Organization overview thể hiện các chỉ số của organization (tổng dữ của tất cả các team)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Note"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Biểu đồ lấy dữ liệu từ lần quét thành công gần nhất."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Ấn ‘Refresh’ để làm mới dữ liệu"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(814620)/* ["default"] */ .A) + "",
        width: "1215",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trường hợp không có dữ liệu, mặc định hiển thị dấu “-”."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-total-teams-tổng-số-lượng-team",
      children: "1. Total Teams (Tổng số lượng team)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả: Tổng số team trực thuộc tổ chức hiện tại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(413962)/* ["default"] */ .A) + "",
        width: "1215",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-total-issues-tổng-số-issue",
      children: "2. Total Issues (Tổng số issue)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả: Tổng số issue được ghi nhận trong lần quét thành công gần nhất của toàn bộ asset trong org (bao gồm team và subteam)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Định dạng hiển thị:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "0 – 9,999: hiển thị đầy đủ (VD: 5, 1200)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "10,000 – 999,999: rút gọn theo nghìn (k), 1 chữ số thập phân, làm tròn xuống"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(616007)/* ["default"] */ .A) + "",
        width: "1215",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-total-assets-tổng-số-asset",
      children: "3. Total Assets (Tổng số asset)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả: Tổng số asset thuộc tổ chức, gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Source Control Asset (GitHub, GitLab)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Container Registry Asset (FCR, Harbor)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Định dạng hiển thị: giống như phần Total Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(808825)/* ["default"] */ .A) + "",
        width: "1215",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-total-scan-requests-tổng-số-yêu-cầu-quét",
      children: "4. Total Scan Requests (Tổng số yêu cầu quét)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả: Tổng số lượt quét bảo mật (Code + Secret + IaC + Image)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phân loại:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UI Scan Request"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CICD Scan Request"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Định dạng hiển thị: giống như phần Total Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(930567)/* ["default"] */ .A) + "",
        width: "1215",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-total-issues-by-severity-tổng-số-issue-theo-mức-độ-nghiêm-trọng",
      children: "5. Total Issues by Severity (Tổng số issue theo mức độ nghiêm trọng)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả: Thống kê số lượng issue theo 4 mức độ: Critical, High, Medium, Low, lấy từ lần quét thành công gần nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Định dạng hiển thị: giống như phần Total Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(464325)/* ["default"] */ .A) + "",
        width: "1218",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-total-issues-by-scan-type-tổng-số-issue-theo-loại-quét",
      children: "6. Total Issues by Scan Type (Tổng số issue theo loại quét)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả: Thống kê số lượng issue theo loại quét:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Code Analysis"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Secret Scanning"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IaC Scanning"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image Scanning"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Định dạng hiển thị: giống như phần Total Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(333643)/* ["default"] */ .A) + "",
        width: "1215",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./detail-dasboard",
        children: " Previous Dashboard "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-issue-by-team",
        children: " Next Hướng dẫn đọc biểu đồ Issue by team "
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

/***/ 930567
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7f7d7250f67b-total-scan-f0dfb6c9ff4ac4afb2b9bb6da7e405cd.png");

/***/ },

/***/ 814620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85599f8b6bd8-nhan-refet-9b7349e9c031436e4d42bea972570287.png");

/***/ },

/***/ 464325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b0caeec26847-total-severy-517b56f98501118c24d1d525952e8879.png");

/***/ },

/***/ 413962
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b5b57fe36d03-total-team-9eeeabd98297e8efa755f9369843d5f5.png");

/***/ },

/***/ 333643
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dd22f5d9176d-total-scan-type-dc033f5ccd2f0de1b3cf63cd21eb8d21.png");

/***/ },

/***/ 808825
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e730cbf3385c-total-asset-5c9d5a72fb45afd8421587e2f1bb94c9.png");

/***/ },

/***/ 616007
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef7d093cf479-total-issue-01e7e37b04e2ccc82ff1b452fa1a6e5b.png");

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