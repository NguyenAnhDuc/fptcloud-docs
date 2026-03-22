"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[60158],{

/***/ 911372
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_auto_schedule_to_on_off_instance_index_md_608_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-auto-schedule-to-on-off-instance-index-md-608.json
const site_docs_auto_schedule_to_on_off_instance_index_md_608_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"auto-schedule-to-on-off-instance/index","title":"2. Auto Schedule To On-Off Instance","description":"Auto Schedule To On-Off Instance","source":"@site/docs/auto-schedule-to-on-off-instance/index.md","sourceDirName":"auto-schedule-to-on-off-instance","slug":"/auto-schedule-to-on-off-instance/","permalink":"/auto-schedule-to-on-off-instance/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Auto Schedule To On-Off Instance","title":"2. Auto Schedule To On-Off Instance","source":"https://fptcloud.com/documents/auto-schedule-to-on-off-instance/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Detach schedule to instance","permalink":"/auto-schedule-to-on-off-instance/detach-schedule-to-instance"},"next":{"title":"Initial setup","permalink":"/auto-schedule-to-on-off-instance/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/auto-schedule-to-on-off-instance/index.md


const frontMatter = {
	sidebar_label: 'Auto Schedule To On-Off Instance',
	title: '2. Auto Schedule To On-Off Instance',
	source: 'https://fptcloud.com/documents/auto-schedule-to-on-off-instance/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Auto Schedule To On-Off Instance';

const assets = {

};



const toc = [{
  "value": "Giới thiệu",
  "id": "giới-thiệu",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn nhanh (Quick Starts)",
  "id": "hướng-dẫn-nhanh-quick-starts",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-auto-schedule-to-on-off-instance",
        children: "2. Auto Schedule To On-Off Instance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Auto Schedule To On-Off Instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để chạy xong hết hoàn toàn hành động tắt/ bật các máy ảo trong 1 Lịch thì có thể cần tới 15 phút sau start time hoặc stop time đã chọn. Theo đó, nếu bạn cần toàn bộ các máy ảo của bạn phải được bật/ tắt không trễ hơn một thời điểm cụ thể, hãy đặt lịch sớm hơn 15 phút so với mức cần thiết và mỗi lịch cách nhau ít nhất 15 phút."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lịch sau khi tạo ra thì ko thể chỉnh sửa lại được thông tin về thời gian, tần suất, chỉ có thể thay đổi thông tin máy ảo được gắn/ gỡ vào lịch. Do đó, nếu bạn muốn thay đổi lịch thì hãy xóa lịch hiện tại và tạo ra một lịch mới."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống chỉ cho phép bạn tạo lịch trước 1 giờ so với start time/ stop time mà bạn chọn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong khoảng thời gian 1 giờ duration thì hệ thống chỉ cho phép bạn thao tác 1 action là tắt hoặc bật thôi."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-nhanh-quick-starts",
      children: "Hướng dẫn nhanh (Quick Starts)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./manage-version-schedules",
          children: " Quản lý instance schedules "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./create-new-instance",
              children: " Tạo một instance schedule mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./view-detail-instance",
              children: " Xem chi tiết một instance schedule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./delete-instance-schedule",
              children: " Xóa một instance schedule "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./use-instance-schedules-for-virtual-machines",
          children: " Sử dụng instance schedules cho các máy ảo "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./attach-schedule-to-instance",
              children: " Gắn một hoặc nhiều máy ảo vào instance schedule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./detach-schedule-to-instance",
              children: " Gỡ một hoặc nhiều máy ảo ra khỏi instance schedule "
            })
          }), "\n"]
        }), "\n"]
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