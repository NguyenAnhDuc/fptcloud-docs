"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86454],{

/***/ 558046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_scheduling_create_new_instance_md_0a3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-scheduling-create-new-instance-md-0a3.json
const site_docs_cloud_server_scheduling_create_new_instance_md_0a3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/scheduling/create-new-instance","title":"Tạo một instance schedule mới","description":"*","source":"@site/docs/cloud-server/scheduling/create-new-instance.md","sourceDirName":"cloud-server/scheduling","slug":"/cloud-server/scheduling/create-new-instance","permalink":"/cloud-server/scheduling/create-new-instance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tạo một instance schedule mới","title":"Tạo một instance schedule mới","source":"https://fptcloud.com/documents/cloud-server/?doc=create-new-instance","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Gắn một hoặc nhiều máy ảo vào instance schedule","permalink":"/cloud-server/scheduling/attach-schedule-to-instance"},"next":{"title":"Tạo lịch snapshot máy ảo","permalink":"/cloud-server/scheduling/create-schedule-snapshotvm"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/scheduling/create-new-instance.md


const frontMatter = {
	sidebar_label: 'Tạo một instance schedule mới',
	title: 'Tạo một instance schedule mới',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=create-new-instance',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Tạo một instance schedule mới';

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
        id: "tạo-một-instance-schedule-mới",
        children: "Tạo một instance schedule mới"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo mới một", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Schedule"
      }), " bạn thao tác như sau"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine > Instance Schedule"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create schedule"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(71341)/* ["default"] */ .A) + "",
        width: "936",
        height: "361"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin theo yêu cầu của hệ thống:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên instance schedule"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " : Mô tả về instance schedule"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Start time"
          }), " : Thời gian bật máy ảo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stop time"
          }), " : Thời gian tắt máy ảo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Start Date"
          }), " : Ngày bắt đầu việc thực hiện lịch tự động tắt/ bật máy ảo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "(Lưu ý: Nếu để trống, lịch trình sẽ chạy vô thời hạn kể từ khi bắt đầu)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "End Date"
          }), " : Ngày kết thúc việc thực hiện lịch tự động tắt/ bật máy ảo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "(Lưu ý: Nếu để trống, lịch trình sẽ chạy vô thời hạn cho đến khi bị xóa.)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Frequency"
          }), " : Tần suất cho việc thực hiện hành động tắt/ bật máy ảo (hàng ngày/ hàng tuần/ hàng tháng)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applied instances"
          }), " : Các máy ảo được gắn vào lịch ", (0,jsx_runtime.jsx)(_components.em, {
            children: "(Lưu ý: mỗi máy ảo cùng lúc chỉ được cho phép gắn với 1 lịch)"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(382965)/* ["default"] */ .A) + "",
        width: "940",
        height: "811"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create schedule"
      }), ". Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, instance schedule mới sẽ được hiển thị ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Schedule Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(209467)/* ["default"] */ .A) + "",
        width: "939",
        height: "254"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./instance-schedule",
        children: " Previous Auto schedule to on-off Instance "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./view-detail-instance",
        children: " Next Xem chi tiết một instance schedule "
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

/***/ 382965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0ca4b6ed6428-image-1695608983434-d2c420e3c3539a99f9b23c4ddaffb25e.png");

/***/ },

/***/ 209467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/75646c284f51-image-1695608998324-5b4e6fc85bb2029e5449e6b3e1355df7.png");

/***/ },

/***/ 71341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/81286d570dcb-image-1695608969930-60331eac3cd1da92158983549832d968.png");

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