"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[47406],{

/***/ 655823
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_iam_iam_user_overview_md_59a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iam-iam-user-overview-md-59a.json
const site_docs_iam_iam_user_overview_md_59a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iam/iam-user-overview","title":"IAM User - Overview","description":"*","source":"@site/docs/iam/iam-user-overview.md","sourceDirName":"iam","slug":"/iam/iam-user-overview","permalink":"/iam/iam-user-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"IAM User - Overview","title":"IAM User - Overview","source":"https://fptcloud.com/documents/iam/?doc=IAM-User-Overview","parent":"https://fptcloud.com/documents/iam","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý IAM User","permalink":"/iam/iam-user-management"},"next":{"title":"IAM","permalink":"/iam/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/iam/iam-user-overview.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'IAM User - Overview',
	title: 'IAM User - Overview',
	source: 'https://fptcloud.com/documents/iam/?doc=IAM-User-Overview',
	parent: 'https://fptcloud.com/documents/iam',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'IAM User - Overview';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
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
        id: "iam-user---overview",
        children: "IAM User - Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAM User là người dùng được mời thêm vào Tenant, có thể là KH đã có tài khoản FPT Cloud/ SSO hoặc chưa có."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trường hợp user được mời đã có tài khoản, sau khi xác nhận họ có thể truy cập ngay vào VPC được cấp quyền. Nếu chưa có sẽ được hướng dẫn khởi tạo tài khoản FPT Cloud mới."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong quá trình sử dụng nếu IAM User có nhu cầu sử dụng riêng một Tenant mới, chỉ cần liên hệ với bộ phận hỗ trợ để được cấp quota Tenant."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trong quá trình sử dụng nếu Tenant Owner muốn thay đổi role hoặc ngắt quyền truy cập vào tenant của một IAM User bất kỳ, hãy chỉnh sửa User Group theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "đây"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ví dụ User A nằm trong User Group đang được gán role Reviewer, có quyền truy cập vào Tenant B."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nếu muốn ngắt quyền truy cập của User A khỏi Tenant B. Hãy xóa User A khỏi User Group. Lúc này User A sẽ không còn bất kỳ quyền truy cập nào vào Tenant B nữa. Tương tự nếu muốn thay đổi quyền truy cập sang một role khác, hãy gán role mới cho User Group."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Lưu ý: Việc thay đổi role cho một User Group có thể ảnh hưởng đến các User khác trong User Group đó, nếu bạn chỉ muốn đổi role của một User cụ thể, hãy tạo một User Group mới theo hướng dẫn tại", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "đây"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./iam-user-management",
        children: " Previous Quản lý IAM User "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./invite-iam-user-moi",
        children: " Next Invite IAM user mới "
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