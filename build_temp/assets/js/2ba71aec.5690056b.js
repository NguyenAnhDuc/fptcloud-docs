"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10585],{

/***/ 558022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_recipient_teams_md_2ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-recipient-teams-md-2ba.json
const site_docs_cloud_guard_recipient_teams_md_2ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/recipient-teams","title":"2. FPT Cloud Guard","description":"Tạo mới người nhận qua MSTeams","source":"@site/docs/cloud-guard/recipient-teams.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/recipient-teams","permalink":"/cloud-guard/recipient-teams","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Recipient teams","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=recipient-teams","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/recipient-teams.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Recipient teams',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=recipient-teams',
	parent: 'https://fptcloud.com/documents/cloud-guard',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

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
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo mới người nhận qua MSTeams"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng thêm người nhận cảnh báo qua Microsoft Teams cho phép người dùng cấu hình channel/nhóm chat Teams để nhận thông báo từ hệ thống giám sát bảo mật FPT Cloud Guard. Việc tích hợp này giúp đội ngũ vận hành nhận cảnh báo kịp thời và phản ứng nhanh trước các sự kiện bảo mật."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn cấu hình:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Lấy Webhook URL từ Microsoft Teams"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Truy cập Microsoft Teams → chọn Channel/Chat bạn muốn nhận cảnh báo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo workflow Post to a channel/chat when a webhook request is received"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sao chép Webhook URL → nhấn Done. Xem hướng dẫn tạo workflow và lấy URL webhook tại đây: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498",
          children: "Microsoft Support – Create incoming webhooks with workflows"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Thêm người nhận vào Cloud Guard"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Truy cập FPT Cloud Portal → chọn dịch vụ Cloud Guard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vào mục Recipient → nhấn Create"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn Method là Teams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dán Webhook URL đã sao chép từ Teams và Send test message để test kết nối và gửi test message từ FPT Cloud Guard tới chat/channel của người dùng"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sau khi Send test message thành công, nhấn Create để tạo mới recipient ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(597449)/* ["default"] */ .A) + "",
          width: "1917",
          height: "953"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Gán người nhận vào cảnh báo"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chuyển đến tab Resource alert/Activity alert/Threat alert"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn cảnh báo muốn gửi về recipient Teams vừa tạo hoặc tạo mới nếu chưa có cảnh báo"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thêm người nhận Teams vào cảnh báo rồi nhấn Update/Create Cảnh báo sẽ được gửi về channel/chat Teams của khách hàng: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(845985)/* ["default"] */ .A) + "",
          width: "620",
          height: "382"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-moi-recipient",
        children: " Previous Tạo mới Recipient "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./chinh-sua-recipient",
        children: " Next Chỉnh sửa Recipient "
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

/***/ 597449
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e5027a614d33-image-1750750425129-95b016489492fc4022ac19d1b607071f.png");

/***/ },

/***/ 845985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/eeb9cfc10c8e-image-1750751150232-bdd9a95d4f7fe6a75e52682ce6f22179.png");

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