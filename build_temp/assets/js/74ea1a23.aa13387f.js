"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[12335],{

/***/ 32144
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_incident_management_integration_microsoft_teams_md_74e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-incident-management-integration-microsoft-teams-md-74e.json
const site_docs_incident_management_integration_microsoft_teams_md_74e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"incident-management/integration/microsoft-teams","title":"2. Incident Management","description":"G. Microsoft Teams","source":"@site/docs/incident-management/integration/microsoft-teams.md","sourceDirName":"incident-management/integration","slug":"/incident-management/integration/microsoft-teams","permalink":"/incident-management/integration/microsoft-teams","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Microsoft teams","title":"2. Incident Management","source":"https://fptcloud.com/documents/incident-management/?doc=microsoft-teams","parent":"https://fptcloud.com/documents/incident-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Jira","permalink":"/incident-management/integration/jira"},"next":{"title":"Outgoing webhook","permalink":"/incident-management/integration/outgoing-webhook"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/incident-management/integration/microsoft-teams.md


const frontMatter = {
	sidebar_label: 'Microsoft teams',
	title: '2. Incident Management',
	source: 'https://fptcloud.com/documents/incident-management/?doc=microsoft-teams',
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
        id: "2-incident-management",
        children: "2. Incident Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G. Microsoft Teams"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Liên kết công cụ Microsoft Teams với incident giúp người dùng dễ dàng và nhanh chóng phát hiện sự cố."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đầu tiên, bạn cần có URL Webhook. Người dùng có thể theo dõi hướng dẫn cách lấy/tạo Webhook ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet",
          children: "TẠI ĐÂY"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi có URL, người dùng thực hiện các bước sau để liên kết tích hợp Microsoft Team với incident management."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu của Incident Management, click Integration => Vào phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Teams"
      }), " , click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Show details"
      }), " > Click “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run when an event fires"
      }), " ”"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name, URL"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(142462)/* ["default"] */ .A) + "",
        width: "1120",
        height: "504"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên người dùng tự đặt"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "URL"
          }), " : là URL người dùng đã lấy/tạo bên trên"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add event action"
      }), " để hoàn tất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run when an event fires"
      }), " ” để tạo 1 trigger mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi liên kết, hệ thống sẽ tự động gửi tin nhắn qua công cụ Microsoft Teams mỗi khi có sự cố được khai báo kèm theo link của incident tương ứng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(482633)/* ["default"] */ .A) + "",
        width: "576",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./telegram",
        children: " Previous F. Telegram "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-settings",
        children: " Next Cấu hình Settings "
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

/***/ 482633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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q1evthkzZlhdXV1qzdA6evSojRo1qrfGjh1rCxYssKqqqtQeAICQEYDCdkcEoOLiYnv00Udt+/btqTU3GswA1NzcbG+88YatWbMmteZGPgCtX7/eDh8+7O5t0qRJ9swzz9jVq1dTe91+A7l3AED/CEBhuyMC0EAMZgDSOXQunbMvPgDpp7d161YXgoqKilJrbr+B3DsAoH8EoLCNmADkG2b1TigojBs3ziZOnGhffPGF9fT0uGMSiYQdOHDApk2b5sKFtp89e9YFCgWLbdu2uf26urpcj4u2a+hp1apV9uqrr14XgOrr623FihXuOirt09LS4rb5sLRv3z53LX8ObffX8kNb6SHHyxSANmzYYFOnTrXKykq3rOEwDYvp/BMmTHDbde/i7+Gbb76xp59+2nJycuz555+/bghNj1955RV3/9o+Z84cO3PmjNvmX089b72mkydPtr179w7o3gEA/SMAhW3EBSAFgU8++cQFjRdeeOG6wKBQ88ADD9hbb71lJSUltnv37owBaNeuXW6/d955x8rLyy0vL8+FBB+AFGSWLFliM2fOtIKCAjt27JhNmTLF1q5d68KWwocCxbJly9x11q1b55Z1XgUUPX8Fo+XLl7vzdXZ2uutG+QC0PjIE9otf/MI++OADdw3NW3rqqadcANLz07nHjx/vforu4cEHH7SXXnrJPUeFMd2jf7388XPnzrUTJ064ffRY+2hI0L+eet6HDh1y1xzovQMA+kcACtuIC0Avv/yydXR0uH2OHDnS20vR1NRks2fPdqHE95J40QDU3t7uws38+fN7e3S6u7vt9ddf7w1Ax48fd8FAwcF77733XCBqaGhw4UNBQuFJamtrbfr06W69+Hv1y5n4AOTr4YcfdkFIvViyY8eO666hIKLeHN27nkP6PYh6iNSTo1Cm4x966CHLz89PbTW3r47Rfv4edc5oyBnIvQMA+kcACtuIC0DRhtmHCP1Uo6/G3/fyREUDkAKMgkx6A69lH4C0XzSc+PLbo/tK+r1lutd00XvXxOPFixe7Hhv13IiOTb++yr8e6fcgum89Tz3ft99++4bt0fvq6x4Hcu8AgP4RgMIWTADywWblypWuRycqGoBaW1vtxRdf7D2vqEdJPUs+MKgHSMNN6mHSsi9dQz006eFDP6P3lr6cSfTe5cKFC/bEE0+4oSf1YKkHR8N76sHx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");

/***/ },

/***/ 142462
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4bed69c6b54f-Screenshot_9-1-c035a6072dc9f60693a16067c46d6865.png");

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