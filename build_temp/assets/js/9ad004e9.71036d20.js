"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[30199],{

/***/ 218009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_monitoring_ip_access_control_quy_tac_he_thong_md_9ad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-monitoring-ip-access-control-quy-tac-he-thong-md-9ad.json
const site_docs_fpt_monitoring_ip_access_control_quy_tac_he_thong_md_9ad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-monitoring-ip-access-control/quy-tac-he-thong","title":"2. FPT Monitoring – IP Access Control","description":"Quy tắc hệ thống","source":"@site/docs/fpt-monitoring-ip-access-control/quy-tac-he-thong.md","sourceDirName":"fpt-monitoring-ip-access-control","slug":"/fpt-monitoring-ip-access-control/quy-tac-he-thong","permalink":"/fpt-monitoring-ip-access-control/quy-tac-he-thong","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quy tac he thong","title":"2. FPT Monitoring – IP Access Control","source":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=quy-tac-he-thong","parent":"https://fptcloud.com/documents/fpt-monitoring-ip-access-control","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan li danh sach whitelisted ip","permalink":"/fpt-monitoring-ip-access-control/quan-li-danh-sach-whitelisted-ip"},"next":{"title":"Retry ip","permalink":"/fpt-monitoring-ip-access-control/retry-ip"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-monitoring-ip-access-control/quy-tac-he-thong.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quy tac he thong',
	title: '2. FPT Monitoring – IP Access Control',
	source: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control/?doc=quy-tac-he-thong',
	parent: 'https://fptcloud.com/documents/fpt-monitoring-ip-access-control',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Monitoring – IP Access Control';

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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-monitoring--ip-access-control",
        children: "2. FPT Monitoring – IP Access Control"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quy tắc hệ thống"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khi bật IP Access Control, tất cả truy cập từ ngoài FPT Cloud bị từ chối cho tới khi có IP trong whitelist."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mỗi endpoint (Grafana dashboard, Metric datasource, Log datasource, Trace datasource) có whitelist IP riêng biệt."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu bất kỳ IP trong bảng đang Whitelisting/Blacklisting thì các nút thao tác khác của bảng tương ứng bị vô hiệu hoá tạm thời."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các trạng thái whitelist của IP/dải IP và mô tả:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trạng thái whitelist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whitelisting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hệ thống đang xử lý whitelist IP/dải IP."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whitelisted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP/dải IP đã được whitelist thành công, có quyền truy cập."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whitelist Failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP/dải IP whitelist thất bại, chưa có quyền truy cập, cần Retry."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blacklisting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hệ thống đang chặn quyền truy cập."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blacklist Failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP/dải IP blacklist thất bại, vẫn còn quyền truy cập hệ thống, cần Retry."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./retry-ip",
        children: " Previous Retry IP/dải IP đã thêm/xóa thất bại "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./lien-he-ho-tro",
        children: " Next Liên hệ hỗ trợ "
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