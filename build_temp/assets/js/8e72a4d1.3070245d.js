"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37231],{

/***/ 336826
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_backup_initial_setup_md_8e7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-backup-initial-setup-md-8e7.json
const site_docs_backup_backup_initial_setup_md_8e7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/backup-initial-setup","title":"Initial Setup","description":"*","source":"@site/docs/backup/backup-initial-setup.md","sourceDirName":"backup","slug":"/backup/backup-initial-setup","permalink":"/backup/backup-initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Initial Setup","title":"Initial Setup","source":"https://fptcloud.com/documents/backup/?doc=Backup-Initial-Setup","parent":"https://fptcloud.com/documents/backup","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"View detail","permalink":"/reporting/view-detail"},"next":{"title":"Report","permalink":"/backup/backup-report"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/backup-initial-setup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Initial Setup',
	title: 'Initial Setup',
	source: 'https://fptcloud.com/documents/backup/?doc=Backup-Initial-Setup',
	parent: 'https://fptcloud.com/documents/backup',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Initial Setup';

const assets = {

};



const toc = [{
  "value": "1. Điều kiện cần có",
  "id": "1-điều-kiện-cần-có",
  "level": 2
}, {
  "value": "2. Bắt đầu sử dụng",
  "id": "2-bắt-đầu-sử-dụng",
  "level": 2
}, {
  "value": "2.1 Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal",
  "id": "21-tạo-tài-khoản-fpt-cloud-và-đăng-nhập-vào-fpt-portal",
  "level": 3
}, {
  "value": "2.2 Những điều cần lưu ý trước khi sử dụng FPT Backup",
  "id": "22-những-điều-cần-lưu-ý-trước-khi-sử-dụng-fpt-backup",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "initial-setup",
        children: "Initial Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-điều-kiện-cần-có",
      children: "1. Điều kiện cần có"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi tạo các job sao lưu, bạn cần đảm bảo một vài điều kiện cơ bản:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tài khoản FPT Cloud"
        }), " có quyền truy cập vào tenant chứa VM hoặc PVC (Kubernetes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tài nguyên đang hoạt động ổn định"
        }), " (VM/PVC không ở trạng thái lỗi hoặc đã xóa)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quota Backup"
        }), " của VPC đủ để tạo job và lưu trữ bản backup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tài nguyên nằm trong ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "region"
        }), " mà dịch vụ Backup Native hỗ trợ."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dịch vụ không yêu cầu cài đặt thêm công cụ hay agent - toàn bộ thao tác diễn ra trực tiếp trên Unify Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-bắt-đầu-sử-dụng",
      children: "2. Bắt đầu sử dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-tạo-tài-khoản-fpt-cloud-và-đăng-nhập-vào-fpt-portal",
      children: "2.1 Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để sử dụng dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Backup Native"
      }), " , bạn cần đăng nhập vào dashboard quản trị của FPT Cloud tại console.fptcloud.com"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đăng nhập bằng tài khoản và mật khẩu đã được cấp, chọn đúng Tenant, Region, VPC chứa VM hoặc PVC (Kubernetes) cần bảo vệ."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-những-điều-cần-lưu-ý-trước-khi-sử-dụng-fpt-backup",
      children: "2.2 Những điều cần lưu ý trước khi sử dụng FPT Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Số lượng máy chủ/PVC sẽ bảo vệ"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dung lượng Backup Storage"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kịch bản backup (Policy)"
        })
      }), "\n"]
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